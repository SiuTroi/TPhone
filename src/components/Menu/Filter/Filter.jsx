import React, { useContext, useState } from 'react'
import { AiOutlineClose } from "react-icons/ai";
import { Link } from 'react-router-dom';
import data from "../../../data/data.json"
import { FilterContext } from './FilterContext';
import FilterResult from './FilterResult';

const Filter = ({ setFilterToggle }) => {
    const { handleChange } = useContext(FilterContext)
  return (
    <div className='overlay'>
        <div className='w-[80vw] h-[100vh] bg-[#f6f6f6] fixed right-0
        rounded-tl-2xl rounded-bl-2xl px-6 pt-10'>
            <div className='flex pb-2 border-b border-[#e4e4e4] border-solid'>
                <div className='flex-1 text-center'>
                    <p>Lọc và sắp xếp</p>
                    <p>{data.length} sản phẩm</p>
                </div>
                <button onClick={() => setFilterToggle(false)}>
                    <AiOutlineClose size={28} />
                </button>
            </div>
            <h3 className='h3 text-[20px] font-medium mt-16'>Giá bán:</h3>
            <div className='mt-4'>
                <div className='flex items-center my-3'>
                    <label htmlFor="from" className='w-[15%]'>Từ</label>
                    <input type="text" name="from" id="from" 
                    className='flex-1 px-2 py-1' 
                    onChange={handleChange}/>
                    đ
                </div>
                <div className='flex items-center my-3'>
                    <label htmlFor="to" className='w-[15%]'>Đến</label>
                    <input type="text" name="to" id="to" 
                    className='flex-1 px-2 py-1' 
                    onChange={handleChange}/>
                    đ
                </div>
            </div>
            <div className='flex justify-end'>
                <Link to={"/filterresult"}>
                    <button className='bg-white px-4 py-2 rounded-2xl shadow-2xl'>Áp dụng</button>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Filter