import React from 'react';
import {AiOutlinePlus} from "react-icons/ai"
import { Link } from 'react-router-dom';
import { apple } from "../../../function";


const AppleShop = () => {
    const appleShop = apple()
  return (
    <div className='mx-4 mt-20 lg:px-4 xl:mx-[10%] 2xl:mx-[16%]'>
        <div className='flex justify-between items-center'>
            <div>
                <p className='text-[#115E5C] text-xl font-bold'>Cửa hàng</p>
                <p className='text-fill text-[28px]'>Apple</p>
            </div>
            <div className=''>
                <button className='py-1 px-4 rounded-3xl text-[#115E5C] border-green text-[13px] 
                font-medium'>Xem thêm</button>
            </div>
        </div>
        <div>
            <div className='flex flex-wrap justify-between xl:justify-start xl:gap-2 px-2'>
                {appleShop.map(item => (
                    <div key={item.id} className='w-[48%] sm:w-[49%] md:w-[32%] lg:w-[24%] xl:w-[19%] bg-white rounded-2xl p-3 mt-3 border-hover'>
                        <button className='ml-[82%] p-2 rounded-xl bg-transparent border-style'>
                          <AiOutlinePlus size={12} />
                        </button>
                        <Link to={`/product/${item.name}`} onClick={() => window.scrollTo(0,0)}>
                            <div className='mt-3'>
                                <img src={item.image} alt={item.name} />
                            </div>
                            <p className='mt-4 three-dot'>{item.name}</p>
                            <h2 className='font-bold'>{new Intl.NumberFormat('it-IT', {style : 'currency', currency : 'VND'}).format(item.price)}</h2>
                            <p className='text-gray-400 line-through'>{new Intl.NumberFormat('it-IT', {style : 'currency', currency : 'VND'}).format(item.price * item.old_price)}</p>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default AppleShop