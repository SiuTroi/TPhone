import React, { useEffect, useState } from 'react';
import {IoIosArrowBack} from "react-icons/io"
import {MdNavigateNext} from "react-icons/md"

import specialoffer from "../../../assets/specialoffer.png"
import savingmoney from "../../../assets/savingmoney.png"
import freeship from "../../../assets/freeship.png"
import { Slider } from '../../../data'



const amotions = [
  {
    img: specialoffer,
    title: "Ưu đãi",
    decs: "Với ưu đãi khuyến mãi lên đến 69%."
  },
  {
    img: savingmoney,
    title: "Tiết kiệm",
    decs: "Chúng tôi có chương trình tri ân riên cho khách hàng."
  },
  {
    img: freeship,
    title: "Tốc độ",
    decs: "Tốc độ giao hàng chuẩn quốc tế."
  },
]
const HomeSlide = () => {
    const [slideData, setSlideData] = useState(Slider)
    const [currentSlide, setCurrentSlide] = useState(1)
    const [pageSize, setPageSize] = useState(1)

    // Pagination
    const lastIdx = currentSlide * pageSize;
    const firstIdx = lastIdx - pageSize;
    const slider = slideData.slice(firstIdx,lastIdx)
    const paginate = (num) => {
      setCurrentSlide(num)
        if(num <= 0) {
          setCurrentSlide(slideData.length)
        }
        if(num > slideData.length) {
          setCurrentSlide(1)
        }
    }
    useEffect(() => {
      const timerId = setInterval(() => {
        setCurrentSlide(currentSlide + 1)
        if(currentSlide <= 0) {
          setCurrentSlide(slideData.length)
        }
        if(currentSlide >= slideData.length) {
          setCurrentSlide(1)
        }
      }, 8000)
      return () => clearInterval(timerId)
    }, [currentSlide])

  return (
    <div className='lg:px-4 xl:mx-[10%] 2xl:mx-[16%]'>
      <div className='flex flex-col px-4 mt-2 relative'>
        {slider.map((item, index) => (
          <div key={index} className='w-full'>
            <img src={item} alt={item} 
            className="rounded-3xl" />
          </div>
        ))}
        <div className='absolute left-8 bottom-3 flex gap-1'>
          <button className='border-[3px] border-white border-solid hover:bg-white rounded-full p-2 shadow-3xl 
          bg-transparent'
          onClick={() => paginate(currentSlide - 1)}><IoIosArrowBack className='text-white hover:text-black' /></button>
          <button className='border-[3px] border-white border-solid hover:bg-white rounded-full p-2 shadow-3xl 
          bg-transparent'
          onClick={() => paginate(currentSlide + 1)}><MdNavigateNext className='text-white hover:text-black' /></button>
        </div>
      </div>
      <div className='px-4 flex justify-between mt-16 sm:mt-24'>
        {amotions.map((item, index) => (
          <div key={index} className="w-[32%] bg-[#ededed] p-2 sm:p-4 lg:py-6 rounded-lg lg:flex lg:flex-row-reverse amotions" >
            <div className="mx-auto translate-y-[-60%] sm:translate-y-[-50%] md:translate-y-[-40%] lg:translate-y-[-10%] w-[75%] lg:w-[220px]
                 lg:flex lg:justify-center lg:items-center">
              <img src={item.img} alt={item.img} 
              className=""/>
            </div>
            <div className='w-full lg:mt-12'>
              <h3 className=' mx-auto text-center w-[80%] -mt-4 lg:mt-0 text-[18px] font-semibold after z-[2] relative 
              lg:text-left lg:mx-0'>{item.title}</h3>
            <p className='text-[13px] sm:text-[17px] text-center lg:text-left'>{item.decs}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default HomeSlide