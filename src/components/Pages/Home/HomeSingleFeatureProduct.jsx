import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineMinus, AiOutlinePlus, AiFillStar } from "react-icons/ai";
import { BsStarHalf } from "react-icons/bs";
import { CiShoppingCart } from "react-icons/ci";
import { singlePeatureProduct } from "../../../data";
import { useDispatch } from "react-redux";
import { fortmatCurrency } from "../../../utils/fortmatCurrency";

const HomeSingleFeatureProduct = () => {
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);
  const decreaseProduct = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  return (
    <div>
      {singlePeatureProduct &&
        singlePeatureProduct.map((item) => (
          <div
            key={item.id}
            className="pt-32 bg-white lg:flex lg:bg-[#f6f6f6] lg:px-4 xl:mx-[10%] 2xl:mx-[16%]"
          >
            <div className="py-2 mx-auto bg-white lg:w-1/2 lg:flex lg:justify-center lg:items-center lg:rounded-2xl lg:shadow-xl">
              <img
                src={item?.image}
                alt={item?.image}
                className="w-[250px] mx-auto"
              />
            </div>
            <div className="px-4 flex flex-col bg-[#f6f6f6] lg:w-1/2">
              <div className="mt-12">
                <p className="text-gray-400">{item?.installment}</p>
                <h3 className="text-lg">{item?.name}</h3>
              </div>
              <div className="flex items-center gap-4 my-6">
                <div className="flex items-center gap-4 border-green rounded-3xl">
                  <button
                    onClick={decreaseProduct}
                    className={`p-2 ${quantity === 1 && "disabled"}`}
                  >
                    <AiOutlineMinus />
                  </button>
                  <p>{quantity}</p>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="p-2"
                  >
                    <AiOutlinePlus />
                  </button>
                </div>
                <div className="flex items-center flex-wrap gap-3">
                  <h2 className="font-bold">
                    {fortmatCurrency(item.price * quantity)}
                  </h2>
                  <p className="text-gray-400 line-through">
                    {fortmatCurrency(item.price * item.old_price * quantity)}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex gap-1 items-center">
                  <AiFillStar color="#fd7f28" />
                  <AiFillStar color="#fd7f28" />
                  <AiFillStar color="#fd7f28" />
                  <AiFillStar color="#fd7f28" />
                  <BsStarHalf color="#fd7f28" />
                </div>
                <p className="underline font-light text-[14px]">124 đánh giá</p>
              </div>
              <div className="my-4 pt-4">
                <p className="font-normal text-[14px] text-justify text-[#0000008f]">
                  {item?.description}
                </p>
                <div className="flex flex-col w-full my-16">
                  <button
                    className="w-full flex justify-center items-center py-4 
                                bg-[#fd7f28] gap-2 rounded-xl bg-green-hover"
                    onClick={() =>
                      dispatch({
                        type: "ADD_TO_CART",
                        payload: { product: item, quantity: quantity },
                      })
                    }
                  >
                    <CiShoppingCart color="white" size={18} />
                    <span className="text-white font-bold uppercase">
                      Thêm vào giỏ hàng
                    </span>
                  </button>
                  <Link to={"/gift"}>
                    <button
                      className="w-full border-green mt-4 py-4 rounded-xl 
                                    relative text-[14px] text-[#105c5b] underline"
                    >
                      <img
                        className="absolute left-7 top-2"
                        src="https://cdn.shopify.com/s/files/1/0313/6228/5699/t/32/assets/add.svg"
                        alt=""
                      />
                      Quà tặng cá nhân với giá trị lên đến 600.000đ
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default HomeSingleFeatureProduct;
