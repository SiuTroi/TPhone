import React, { useEffect, useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { Link } from "react-router-dom";
import { phoneCategory } from "../../../function";

const Phone = () => {
  const [loadMore, setLoadMore] = useState(10);
  const [endLoad, setEndLoad] = useState(false);
  const phoneCate = phoneCategory();

  const phoneData = phoneCate.slice(0, loadMore);
  const handleLoadMore = () => {
    setLoadMore(loadMore + 10);
  };
  useEffect(() => {
    if (phoneCate.length - loadMore <= 0) {
      setEndLoad(true);
    }
  }, [loadMore]);
  return (
    <div className="pt-44 px-4 lg:px-8 xl:mx-[10%] 2xl:mx-[16%]">
      <div className="flex gap-2 items-center">
        <p className="text-[#115E5C] text-xl font-bold">Điện</p>
        <p className="text-fill text-[28px]">Thoại</p>
      </div>
      <div>
        <div className="flex flex-wrap gap-2 px-2">
          {phoneData.map((item) => (
            <div
              key={item.id}
              className="w-[48%] sm:w-[49%] md:w-[32%] lg:w-[24%] xl:w-[19%] bg-white rounded-2xl p-3 mt-3 border-hover"
            >
              <button className="ml-[82%] p-2 rounded-xl bg-transparent border-style">
                <AiOutlinePlus size={12} />
              </button>
              <Link
                to={`/product/${item.name}`}
                onClick={() => window.scrollTo(0, 0)}
              >
                <div className="mt-3">
                  <img src={item.image} alt={item.name} />
                </div>
                <p className="mt-4 three-dot">{item.name}</p>
                <h2 className="font-bold">
                  {new Intl.NumberFormat("it-IT", {
                    style: "currency",
                    currency: "VND",
                  }).format(item.price)}
                </h2>
                <p className="line-through text-gray-300">
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
      {endLoad === false && (
        <div className="flex justify-center w-full mt-8">
          <button
            className="px-8 py-4 rounded-xl bg-[#fe7c22] text-white"
            onClick={handleLoadMore}
          >
            Xêm thêm {phoneCate.length - loadMore} điện thoại
          </button>
        </div>
      )}
    </div>
  );
};

export default Phone;
