import React from 'react';
import { Link } from 'react-router-dom';
import { blogs } from "../../data"

const Blog = () => {
  return (
    <div className='px-6 pt-44 lg:px-4 xl:mx-[10%] 2xl:mx-[16%]'>
        <div>
            <h2 className='text-[23px] font-medium'>Tin tức công nghệ</h2>
            <p className='text-[#1a18178f] text-[14px] font-light'>dưới đây là các tin tức mới nhất mà chúng tôi tổng hợp từ các công 
                nghệ trên thế giới
            </p>
            <div className='flex flex-col md:flex-row gap-3'>
                {blogs.map(item => (
                    <Link key={item.id} to={`/blog/${item.title}`} className='block md:w-[32%] mt-10' 
                    onClick={() => window.scrollTo(0,0)}>
                        <div>
                            <img src={item.image} alt={item.image} 
                            className="rounded-2xl shadow-xl"/>
                        </div>
                        <div>
                            <h2 className='mt-4 font-medium text-[14px]'>{item.title}</h2>
                            <p className='text-[13px] font-light'>Đăng bởi {item.name_bloger} - {item.time}</p>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
        <div className=''>
            <Link to={"/blog"} className='block w-full md:w-[120px] md:mx-auto' 
            onClick={() => window.scrollTo(0,0)}>
                <button className='w-full bg-[#fd812d] text-white py-3 
                rounded-2xl my-4 bg-green-hover'>Xêm thêm</button>
            </Link>
        </div>
    </div>
  )
}

export default Blog