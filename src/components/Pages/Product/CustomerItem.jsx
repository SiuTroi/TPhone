import data from "../../../data/data.json"
import { useDispatch } from 'react-redux';
import { AiOutlinePlus } from "react-icons/ai";
import { Link } from "react-router-dom";

const CustomerItem = (props) => {
    const { setShowImage, randomStart, randomEnd, textnormalCate,
        textfillCate } = props
    const dispatch = useDispatch()

  return (
    <div>
      <div>
        <p className="text-[#115e5c] text-[20px] font-bold">{textnormalCate} </p>
        <p className="text-fill text-[28px]">{textfillCate}</p>
      </div>
      <div>
        <div className="flex justify-between px-2 gap-2 overflow-auto pb-4 scroll">
          {data.slice(randomStart, randomEnd).map((item) => (
            <div
              key={item.id}
              className="customer-item-product"
            >
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
                onClick={() => {
                  window.scrollTo(0, 0);
                  setShowImage(item.image);
                }}
              >
                <div className="img-product">
                  <img src={item.image} alt={item.name} className="h-full" />
                </div>
                <p className="mt-8 mb-2 three-dot">{item.name}</p>
                <h2 className="font-bold">
                  {new Intl.NumberFormat("it-IT", {
                    style: "currency",
                    currency: "VND",
                  }).format(item.price)}
                </h2>
                <p className="text-gray-400 line-through">
                  {new Intl.NumberFormat("it-IT", {
                    style: "currency",
                    currency: "VND",
                  }).format(item.price * item.old_price)}
                </p>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CustomerItem;
