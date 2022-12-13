import React from 'react'
import { NavLink } from 'react-router-dom'

const category = [
    {
        title: "Trang chủ",
        link: "/",
    }, 
    {
        title: "Tất cả sản phẩm",
        link: "/allproduct",
        cate_img: "https://cdn.tgdd.vn//content/Donghothoitrang-128x129.png",
    }, 
    {
        title: "Điện thoại",
        link: "/phone",
        cate_img: "https://cdn.tgdd.vn//content/Dienthoai-128x129.png",
    },
    {
        title: "Laptop  ",
        link: "/laptop",
        cate_img: "https://cdn.tgdd.vn//content/Laptop-129x129.png",
    },
    {
        title: "Tablet",
        link: "/tablet",
        cate_img: "https://cdn.tgdd.vn//content/Tablet-128x129.png",
    },
    {
        title: "Smart watch",
        link: "/watch",
        cate_img: "https://cdn.tgdd.vn//content/Donghothongminh-128x129.png",
    },
    {
        title: "Thiết bị mạng",
        link: "/networkdevice",
        cate_img: "https://cdn.tgdd.vn//content/Thietbimang-128x129.png",
    },
    {
        title: "Bàn phím",
        link: "/keyboard",
        cate_img: "https://cdn.tgdd.vn//content/ban-phim-128x129.png",
    },
    {
        title: "Loa",
        link: "/loudspeaker",
        cate_img: "https://cdn.tgdd.vn//content/Loa-128x128.png",
    },
]

const Category = () => {
  return (
    <div className='hidden lg:block bg-[#ededed] shadow-2xl'>
        <div>
        <ul className="flex justify-between 2xl:justify-start items-center gap-8 mb-4 lg:py-3 lg:px-8 xl:mx-[10%] 2xl:mx-[16%]">
        {category.map((item) => (
            <NavLink
                key={item.title}
                to={item.link}
                className="py-2"
            >
                <div>
                    <li className="text-center font-light hover-anim">
                        <span className='first'>{item.title}</span>
                        <span className='second'>{item.title}</span>
                    </li>
                </div>
            </NavLink>
            ))}
        </ul>
        </div>
    </div>
  )
}

export default Category