import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import { MdNavigateNext } from "react-icons/md";
import { sellOff } from "../../../data";

const SellOff = () => {
  const [idxSlide, setIdxSlide] = useState(0);

  const decreaseIdxSlide = () => {
    setIdxSlide(idxSlide - 1);
    if (idxSlide <= 0) {
      setIdxSlide(sellOff.length - 1);
    }
  };
  const increaseIdxSlide = () => {
    setIdxSlide(idxSlide + 1);
    if (idxSlide >= sellOff.length - 1) {
      setIdxSlide(0);
    }
  };
  return (
    <div className="mt-20 lg:px-4 xl:mx-[10%] 2xl:mx-[16%]">
      <div className="flex px-4">
        <div className="bg-white shadow-2xl p-6 rounded-tl-2xl flex-1 sell-off-slide lg:w-1/2 lg:p-6">
          <p className="text-[#1a181799] font-bold text-[14px] lg:text-[18px]">Điện thoại</p>
          <h3 className="text-[20px] font-semibold text-[#1a1817] lg:text-[28px] ">
          {sellOff[idxSlide].name}
          </h3>
          <h1 className="h1 text-[#f49b15] text-[24px] font-bold lg:text-[28px]">in Shock</h1>
          <p className="text-[12px] font-light mt-4 text-[#1a18178f] three-dot-product md:text-[17px] md:font-normal lg:my-6">
            {sellOff[idxSlide].description}
          </p>
          <Link
            to={`/product/${sellOff[idxSlide].name}`}
            onClick={() => window.scrollTo(0, 0)}
          >
            <button
              className="px-4 py-3 text-[14px] my-4 lg:mb-[11rem] rounded-lg lg:rounded-tr-lg lg:rounded-tl-none lg:rounded-br-none lg:rounded-bl-lg text-white font-semibold 
                    bg-[#fd7f28] bg-green-hover"
            >
              Mua ngay
            </button>
          </Link>
          <div className="mt-2">
            <img
              src={sellOff[idxSlide].image}
              alt={sellOff[idxSlide].name}
              className="w-[68%] md:w-[50%] mx-auto lg:hidden"
            />
          </div>
        </div>
        <div className="w-[17%] h-full] bg-[#9acbcf] rounded-tr-2xl lg:w-1/2 lg:py-[2rem] lg:flex lg:justify-center lg:items-center">
          <div className="mt-2 hidden lg:block">
              <img
                src={sellOff[idxSlide].image}
                alt={sellOff[idxSlide].name}
                className="bg-transparent lg:w-[60%] mx-auto"
              />
            </div>
        </div>
      </div>
      <div className="flex items-center px-4 h-[124px]">
        <div className="flex flex-col h-full">
          <button
            onClick={decreaseIdxSlide}
            className="p-4 bg-[#639594] flex-1"
          >
            <IoIosArrowBack color="white" size={24} />
          </button>
          <button
            onClick={increaseIdxSlide}
            className="p-4 bg-[#468180] flex-1 rounded-bl-2xl"
          >
            <MdNavigateNext color="white" size={24} />
          </button>
        </div>
        <div className="bg-[#125e5c] h-full flex-1 p-4 rounded-br-2xl">
          <p className="flex justify-between items-center text-[#ffffff6b]">
            <span className="">Next Slide</span> <span>0{sellOff[idxSlide].id}</span>
          </p>
          <h1 className="text-white text-[20px]">{sellOff[idxSlide].name} còn hàng</h1>
        </div>
      </div>
    </div>
  );
};

export default SellOff;
