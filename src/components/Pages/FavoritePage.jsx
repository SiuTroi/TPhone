import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import {AiOutlinePlus} from "react-icons/ai"
import { Link } from 'react-router-dom';
import { favorite } from '../../function';

const FavoritePage = () => {
    const [loadMore, setLoadMore] = useState(12)
    const [endLoad, setEndLoad] = useState(false)
    const favoriteShop = favorite();
    const limitFavorite = favoriteShop.slice(0, loadMore)
    const dispatch = useDispatch()

    useEffect(() => {
        if(favoriteShop.length - loadMore <= 0) {
            setEndLoad(true)
        }
    }, [loadMore])
  return (
    <div className='px-4 pt-32 lg:px-8 xl:mx-[10%] 2xl:mx-[16%]'>
        <div>
            <p className='text-[#115E5C] text-xl font-bold'>Cửa hàng</p>
            <p className='text-fill text-[28px]'>Yêu Thích</p>
        </div>
        <div>
            <div className='flex flex-wrap gap-2 px-2'>
                {limitFavorite.map(item => (
                    <div key={item.id} className='w-[48%] sm:w-[49%] md:w-[32%] lg:w-[24%] xl:w-[19%] bg-white rounded-2xl p-3 mt-3 border-hover'>
                        <button className='ml-[82%] p-2 rounded-xl bg-transparent border-style'
                        onClick={() => dispatch({
                            type: "ADD_TO_CART",
                            payload: {product: item, quantity: 1}
                        })}>
                            <AiOutlinePlus size={12} />
                        </button>
                        <Link to={`/product/${item.name}`} onClick={() => window.scrollTo(0,0)}>
                            <div className='mt-3'>
                                <img src={item.image} alt={item.name} />
                            </div>
                            <p className='mt-4 three-dot'>{item.name}</p>
                            <h2 className='font-bold'>{new Intl.NumberFormat('it-IT', {style : 'currency', currency : 'VND'}).format(item.price)}</h2>
                            <p className='line-through text-gray-300'>{new Intl.NumberFormat('it-IT', {style : 'currency', currency : 'VND'}).format(item.price * item.old_price)}</p>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
        <div className='flex justify-center mt-6'>
            { endLoad === false && (
                <button 
                className='px-8 py-3 text-white bg-[#fd7f28] rounded-lg'
                onClick={() => setLoadMore(loadMore + 10)}
                >Xem {favoriteShop.length - loadMore} sản phẩm</button>
            )}
        </div>
        <div className="w-[96%] h-12 mx-auto bg-white my-12"></div>
    </div>
  )
}

export default FavoritePage