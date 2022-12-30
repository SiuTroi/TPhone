import { useSelector, useDispatch } from 'react-redux';
import { AiFillCheckCircle, AiOutlineDelete, AiFillLock } from 'react-icons/ai';
import {IoIosArrowBack} from "react-icons/io"
import {BsDash, BsPlus} from "react-icons/bs";
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import ModalPay from './Product/ModalPay';
import cartemty from "../../assets/cartemty.png"
import clapping from "../../assets/clapping.png"
import { useEffect } from 'react';
import { fortmatCurrency } from '../../utils/fortmatCurrency';


const CartPage = () => {
  const [isShowModalPay, setIsShowModalPay] = useState(false)
  const { products, totalPrice, totalQuantities } = useSelector((state) => state.CartReducer)
  const user = useSelector(state => state.UserReducer)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  return (
    <>
      <div className='overlay'>
        <div className='bg-[#f6f6f6] md:pt-12 w-full h-full md:px-8 lg:px-12 xl:px-[10%] 2xl:px-[16%]'>
          <div className='flex justify-between items-center bg-white md:bg-transparent'>
            <button className='ml-6 flex gap-1 items-center underline' onClick={() => navigate(-1)}>
              <IoIosArrowBack size={22} /> <span>Trở về</span></button>
            <h3 className='flex-1 font-medium text-center py-4 md:text-[24px]'>Giỏ hàng của bạn</h3> 
          </div>
          <div>
            <p className='text-center my-[6px] text-[14px] font-medium text-[#fd7f28]'>Quà tặng cá nhân với giá trị lên đến 600.000đ</p>
          </div>
          {products.length > 0 ? (
            <div className='relative'>
              <div className='flex flex-col md:flex-row md:flex-wrap md:gap-2 md:justify-start gap-4 overflow-auto scroll'>
                {products.map(item => (
                  <div key={item.id} className='flex justify-between items-center gap-4 shadow-xl bg-white p-8 md:max-w-[48%] xl:max-w-[30%]'>
                    <div className='w-1/4'>
                      <img src={item.image} alt="" />
                    </div>
                    <div className='w-2/4'>
                      <h4 className='font-medium mb-2 three-dot'>{item.name}</h4>
                      <div className='flex'>
                        <button className='border-gray text-[14px] py-1 px-2'
                        onClick={() => dispatch({
                          type: "DECREASE",
                          payload: item.id
                        })}><BsDash /></button>
                        <p className='border-gray text-[14px] py-1 px-2'>{item.quantity}</p>
                        <button className='border-gray text-[14px] py-1 px-2'
                        onClick={() => dispatch({
                          type: "INCREASE",
                          payload: item.id
                        })}><BsPlus /></button>
                      </div>
                    </div>
                    <div className='flex flex-col gap-2 items-end w-1/4'>
                      <button onClick={() => dispatch({
                        type: "REMOVE",
                        payload: item.id
                      })}>
                        <AiOutlineDelete size={22} className='text-gray-500 hover:text-red-500' />
                      </button>
                      <p>{fortmatCurrency(item.price)}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className='fixed bottom-0 left-0 right-0 bg-white md:bg-transparent md:border-none
              border border-solid border-gray-300 p-4 md:px-8 lg:px-12 xl:px-[10%] 2xl:px-[16%]'>
                <div className='w-full md:w-[420px]'>
                  {user?.fullName && <p className='flex items-center gap-3 mb-6'>
                    <span><AiFillCheckCircle color='green' /></span> 
                    <span className='text-[14px] text-[#7D7D7D] font-semibold'>Xử lý thành công. Vui lòng chuẩn bị đủ số tiền tương ứng để nhận hàng!</span>
                  </p>}  
                  <div className='flex justify-between items-center font-medium'>
                    <p>Tổng số lượng: ({totalQuantities} sp)</p>
                    <p>Tổng giá: {fortmatCurrency(totalPrice)}</p>
                  </div>
                  {user.userid ? (
                    <button className='flex justify-center items-center w-full py-3 rounded-xl gap-2 bg-[#fd7f28]' 
                    onClick={() => setIsShowModalPay(true)}>
                        <span className='text-white'>Thanh toán</span>
                    </button>
                  ) : (
                    <Link to={"/login"}>
                      <button className='flex justify-center items-center w-full py-3 rounded-xl gap-2 bg-[#fd7f28]'>
                        <AiFillLock size={20} color="white" />
                        <span className='text-white'>Đăng nhập thanh toán</span>
                      </button>
                    </Link>
                  )}
                </div>
              </div>
            </div>
          ) : (
            <div className='flex flex-col justify-center items-center'>
              <div className='h-[200px]'>
                <img src={cartemty} alt="cartemty" className='h-full' />
              </div>
              <div>
                <h3 className='text-[20px] mb-4'> <span className=' font-semibold'>Ôi!!!</span> Bạn chưa thêm sản phẩm nào.</h3>
                <Link to={"/allproduct"}>
                  <button className='px-8 py-3 text-[#fd7f28] border border-solid border-[#fd7f28] rounded-lg bg-orange-hover w-full'
                    onClick={() => window.scrollTo(0,0)}>Xem sản phẩm</button>
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
      {isShowModalPay && <ModalPay setIsShowModalPay={setIsShowModalPay} />}
    </>
  )
}

export default CartPage