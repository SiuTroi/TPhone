import React, { useEffect, useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { fortmatCurrency } from "../../utils/fortmatCurrency";

const CategoryPage = (props) => {
  const { categoryFunction, textnormalCate, textfillCate } = props

  const [loadMore, setLoadMore] = useState(10);
  const [endLoad, setEndLoad] = useState(false);
  const dispatch = useDispatch();
  const category = categoryFunction();

  const categoryData = category.slice(0, loadMore);
  const handleLoadMore = () => {
    setLoadMore(loadMore + 10);
  };
  useEffect(() => {
    if (category.length - loadMore <= 0) {
      setEndLoad(true);
    }
  }, [loadMore]);
  return (
    <div className="pt-44 category-page">
    <div className="flex gap-2 items-center mb-3">
        <p className="text-[#115E5C] text-xl font-bold">{textnormalCate}</p>
        <p className="text-fill text-[28px]">{textfillCate}</p>
      </div>
      <div>
        <div className="wrap-product">
          {categoryData.map((item) => (
            <div
              key={item.id}
              className="item-product"
            >
              <button className="add-btn" onClick={() =>
                  dispatch({
                    type: "ADD_TO_CART",
                    payload: { product: item, quantity: 1 },
                  })
                }>
                <AiOutlinePlus size={12} />
              </button>
              <Link
                to={`/product/${item.name}`}
                onClick={() => window.scrollTo(0, 0)}
              >
                <div className="img-product">
                  <img src={item.image} alt={item.name} className="h-full" />
                </div>
                <p className="mt-8 mb-2 three-dot">{item.name}</p>
                <h2 className="font-bold">
                  {fortmatCurrency(item.price)}
                </h2>
                <p className="line-through text-gray-300">
                  {fortmatCurrency(item.price * item.old_price)}
                </p>
              </Link>
            </div>
          ))}
        </div>
      </div>
      {endLoad === false && (
        <div className="flex justify-center w-full mt-8">
          <button
            className="px-8 py-4 rounded-xl bg-[#fe7c22] text-white"
            onClick={handleLoadMore}
          >
            Xêm thêm {category.length - loadMore} {textnormalCate} {textfillCate}
          </button>
        </div>
      )}
    </div>
  );
};

export default CategoryPage;
