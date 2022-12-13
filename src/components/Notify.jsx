import React from 'react';
import { AiOutlineClose } from "react-icons/ai"

const Notify = ({ setShowNotify }) => {
  return (
    <div className=''>
      <div className='bg-[#115e5c] relative'>
          <p className='text-center p-2 text-white text-[14px]'> Over 2.990.000 VNĐ Free Ship toàn quốc!!! </p>
          <button className='absolute right-4 top-[50%] translate-y-[-50%]'
          onClick={() => setShowNotify(false)}><AiOutlineClose size={22} color={"white"} /></button>
      </div>
    </div>
  )
}

export default Notify