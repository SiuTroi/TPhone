import React from "react";
import gamedivice from "../../../assets/gamedivice.jpg";
import headphone from "../../../assets/headphone.webp";
import tabletdivice from "../../../assets/tabletdevice.jpg";
import loudspeaker from "../../../assets/loudspeaker.jpg";
import watch from "../../../assets/watch.webp";
import tablet from "../../../assets/tablet.webp";
import phone from "../../../assets/phone.webp";
import laptop from "../../../assets/laptop.webp";

const ProductCollection = () => {
  return (
    <div className="px-4 mt-20 lg:px-4 xl:mx-[10%] 2xl:mx-[16%]">
      <div>
        <p className="text-[#115E5C] text-xl font-bold">Sản phẩm</p>
        <p className="text-fill text-[28px]">bộ sưu tập</p>
      </div>
      <div className="flex overflow-x-scroll gap-3 flex-col py-8">
        <div className="min-w-[50%] md:min-w-[32%] flex gap-3">
          <div className="min-w-[70%] md:min-w-[42%] flex justify-center items-center bg-white shadow-2xl rounded-2xl">
            <img className="rounded-2xl" src={laptop} alt={laptop} />
          </div>
          <div className="min-w-[45%] md:min-w-[32%] flex gap-3">
            <div className="flex flex-col gap-3 min-w-[50%] md:min-w-[32%]">
              <div className="bg-white flex justify-center items-center shadow-2xl rounded-2xl p-2">
                <img className="" src={watch} alt={watch} />
              </div>
              <div className="bg-white flex justify-center items-center shadow-2xl rounded-2xl p-2">
                <img src={phone} alt={phone} />
              </div>
            </div>
            <div className="flex flex-col gap-3 min-w-[45%] md:min-w-[32%]">
              <div className=" bg-white shadow-2xl flex justify-center items-center rounded-2xl p-2">
                <img className="xl:w-[60%]" src={tablet} alt={tablet} />
              </div>
              <div className="min-w-[40%] bg-white flex justify-center items-center shadow-2xl rounded-2xl">
                <img className="rounded-2xl" src={gamedivice} alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="flex gap-3">
          <div className="min-w-[40%] md:min-w-[30%] xl:w-[10%] bg-white shadow-2xl rounded-2xl p-4 flex justify-center items-center">
            <img className="rounded-2xl lg:w-[60%]" src={headphone} alt={headphone} />
          </div>
          <div className="min-w-[40%] md:min-w-[30%] xl:w-[10%] bg-white shadow-2xl rounded-2xl p-4 flex justify-center items-center">
            <img className="rounded-2xl lg:w-[60%]" src={loudspeaker} alt={loudspeaker} />
          </div>
          <div className="min-w-[40%] md:min-w-[30%] xl:w-[10%] bg-white shadow-2xl rounded-2xl p-4 flex justify-center items-center">
            <img className="rounded-2xl lg:w-[60%]" src={tabletdivice} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCollection;
