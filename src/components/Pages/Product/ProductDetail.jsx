import React, { useState, useEffect } from 'react';
import { Link, NavLink, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { AiOutlineMinus, AiOutlinePlus, AiFillStar } from "react-icons/ai";
import { BsStarHalf } from "react-icons/bs"
import { CiShoppingCart } from "react-icons/ci"

import Customer from './Customer';

const ProductDetail = () => {
    const { nameproduct } = useParams();
    const [showImage, setShowImage] = useState("")
    const [quantity, setQuantity] = useState(1);
    const dispatch = useDispatch();
    const { product } = useSelector((state) => state.ProductReducer)
    
    const handleShowImage = (image) => {
        setShowImage(image)
    }
    useEffect(() => {
        dispatch({ type: "PRODUCT", nameproduct });
      }, [nameproduct]);

    const decQuantity = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    const addToCart = () => {
        setQuantity(1)
        dispatch({
            type: "ADD_TO_CART",
            payload: { product, quantity }
        })
    }

  return (
    <div className='pt-44'>
        <div className='md:flex md:py-8 md:gap-4 lg:px-4 xl:mx-[10%] 2xl:mx-[16%]'>
            <div className='md:flex-1'>
                <div className='p-2 mx-auto bg-white md:py-12 lg:py-28'>    
                    <img src={showImage ? showImage : product?.image} alt=''
                    className="h-[280px] lg:h-[320px] mx-auto"/>
                </div>
                <div className="px-4 md:p-0 mt-6 gap-3 flex overflow-x-scroll scroll">
                    <div className="min-w-[80px] max-w-[80px] flex flex-col items-center">
                        <NavLink to={""} className='w-full flex justify-center items-center h-[72px] px-2 py-4 border-gray bg-white' 
                        onClick={() => handleShowImage(product?.image)}>
                            <img src={product?.image} alt={product?.name} 
                            className="h-full"/>
                        </NavLink>
                        <p className='text-[14px]'></p>
                    </div>
                    {product?.sub_photo?.map((item, index) => (
                        <div key={index} className="min-w-[80px] max-w-[80px] flex flex-col items-center">
                            <NavLink to={""} className='w-full flex justify-center items-center h-[72px] px-2 py-4 border-gray bg-white' 
                            onClick={() => handleShowImage(item.img)}>
                                <img src={item.img} alt={item.color} 
                                className="h-full"/>
                            </NavLink>
                            <p className='text-[14px] text-center max-w-full'>{item.color}</p>
                        </div>
                    ))}
                </div>
            </div>
            <div className='px-4 flex md:flex-1 flex-col'>
                <div className='mt-12 md:mt-0'>
                    <p className='text-gray-400'>{product?.installment}</p>
                    <h3 className='text-lg'>{product?.name}</h3>
                </div>
                <div className='flex items-center gap-4 my-6 md:my-2' >
                    <div className='flex items-center gap-4 border-green rounded-3xl'>
                        <button onClick={decQuantity} 
                        className={`p-2 ${quantity === 1 && "disabled"}`}  >
                            <AiOutlineMinus /></button>
                        <p>{quantity}</p>
                        <button onClick={() => setQuantity(quantity + 1)} 
                        className="p-2">
                            <AiOutlinePlus /></button>
                    </div>
                    <div className='flex items-center gap-3 flex-wrap'>
                        <h2 className='h2 font-extrabold text-[20px] z-[2]
                        relative after'>{new Intl.NumberFormat('it-IT', {style : 'currency', currency : 'VND'}).format(product?.price * quantity)}</h2>
                        <p className='text-gray-400 line-through'>{new Intl.NumberFormat('it-IT', {style : 'currency', currency : 'VND'}).format((product?.price * product?.old_price) * quantity)}</p>
                    </div>
                </div>
                <div className='flex items-center gap-3'>
                    <div className='flex gap-1 items-center'>
                        <AiFillStar color='#fd7f28' />
                        <AiFillStar color='#fd7f28' />
                        <AiFillStar color='#fd7f28' />
                        <AiFillStar color='#fd7f28' />
                        <BsStarHalf color='#fd7f28' />
                    </div>
                    <p className='underline font-light text-[14px]'>{product?.count_evaluate} đánh giá</p>
                </div>
                <div className="my-4 pt-4">
                    <p className='font-normal text-[14px] text-justify text-[#0000008f] three-dot-product'>{product?.description || product?.description_1}</p>
                    <div className='flex flex-col w-full my-16 md:my-0 md:mt-6 lg:mt-12'>
                        <button className='w-full flex justify-center items-center py-4 
                        bg-[#fd7f28] gap-2 rounded-xl bg-green-hover'
                        onClick={addToCart}>
                            <CiShoppingCart color='white' size={18} />
                            <span className='text-white font-bold uppercase'>Thêm vào giỏ hàng</span>
                        </button>
                        <Link to={"/gift"} className="">
                            <button className='w-full border-green mt-4 py-4 rounded-xl 
                            relative text-[14px] text-[#105c5b] underline'>
                                <img className='absolute left-7 top-2' src="https://cdn.shopify.com/s/files/1/0313/6228/5699/t/32/assets/add.svg" alt="" />
                                Quà tặng cá nhân với giá trị lên đến 600.000đ
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
        <Customer productDetail={product} setShowImage={setShowImage} />
    </div>
  )
}

export default ProductDetail