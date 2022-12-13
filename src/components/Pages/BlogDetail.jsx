import React from 'react';
import {CiUser} from "react-icons/ci"
import { Link, useParams } from 'react-router-dom';
import {getBlogDetail} from "../../function/index"
import Blog from './Blog';

const BlogDetail = () => {
    const { blogtitle } = useParams()
    const blogDetail = getBlogDetail(blogtitle)

    return (
        <>
        <div className='pt-44 bg-[#f6f6f6] lg:px-8 xl:mx-[10%] 2xl:mx-[16%]'>
            <div className='px-4'>
                <h1 className='h1 pt-4 text-[20px] font-medium'>{blogDetail.title}</h1>
                <div className='flex items-center gap-4 my-3'>
                    <div className="p-1 border-style rounded-full">
                        <CiUser size={24} />
                    </div>
                    <div>
                        <p className='font-light'>Được đăng bởi <span className='font-normal'>{blogDetail.name_bloger}</span></p>
                        <p className='font-light text-[14px]'>{blogDetail.time}</p>
                    </div>
                </div>
            </div>
            <div className=' pt-20 px-4 bg-white lg:bg-[#f6f6f6]'>
                <img className='shadow-xl mx-auto rounded-2xl' src={blogDetail.image} alt={blogDetail.image} />
            </div>
            <div className='bg-white lg:bg-[#f6f6f6] px-4 pt-20'>
                <div>
                    <p className='text-[14px] lg:text-lg mx-auto text-justify mt-4 mb-10'>{blogDetail.derscription_1}</p>
                    <div><img className='shadow-xl mx-auto rounded-2xl' src={blogDetail.img_detail_1} alt={blogDetail.img_detail_1} /></div>
                </div>
                <div>
                    <p className='text-[14px] lg:text-lg mx-auto text-justify mt-4 mb-10'>{blogDetail.derscription_2}</p>
                    <div><img className='shadow-xl mx-auto rounded-2xl' src={blogDetail.img_detail_2} alt={blogDetail.img_detail_2} /></div>
                </div>
                <div>
                    <p className='text-[14px] lg:text-lg mx-auto text-justify mt-4 mb-10'>{blogDetail.derscription_3}</p>
                    <div><img className='shadow-xl mx-auto rounded-2xl' src={blogDetail.img_detail_3} alt={blogDetail.img_detail_3} /></div>
                </div>
            </div>
        </div>
            <Blog />
        </>
  )
}

export default BlogDetail