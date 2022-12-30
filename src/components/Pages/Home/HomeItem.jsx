import { useDispatch } from "react-redux";
import { AiOutlinePlus } from "react-icons/ai";
import { Link } from "react-router-dom";
import { fortmatCurrency } from "../../../utils/fortmatCurrency";

const Favorite = (props) => {
  const { homeItemFunction, textnormalCate, textfillCate, route } = props;
  const homeItem = homeItemFunction();
  const limitHomeItem = homeItem.slice(0, 12);
  const dispatch = useDispatch();
  return (
    <div className="category-page mb-3">
      <div>
        <p className="text-[#115E5C] text-xl font-bold">{textnormalCate}</p>
        <p className="text-fill text-[28px]">{textfillCate}</p>
      </div>
      <div>
        <div className="wrap-product">
          {limitHomeItem.map((item) => (
            <div key={item.id} className="item-product">
              <button
                className="add-btn"
                onClick={() =>
                  dispatch({
                    type: "ADD_TO_CART",
                    payload: { product: item, quantity: 1 },
                  })
                }
              >
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
                <p className="text-gray-400 line-through">
                  {fortmatCurrency(item.price * item.old_price)}
                </p>
              </Link>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center mt-6">
        <Link to={route}>
          <button
            className="px-8 py-3 text-white bg-[#fd7f28] rounded-lg bg-green-hover"
            onClick={() => window.scrollTo(0, 0)}
          >
            Xem tất cả
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Favorite;
