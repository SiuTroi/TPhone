import React from 'react';
import ggpay from "../assets/google-pay.png"
import americanExpress from "../assets/american-express.png"
import masterCard from "../assets/master-card.png"
import meta from "../assets/meta.png"
import momo from "../assets/MoMo_Logo.png"
import paypal from "../assets/paypal.png"
import viettelpay from "../assets/viettelpay.png"
import vnpay from "../assets/vnpay.png"
import zaloPay from "../assets/ZaloPay_Logo.png"

const pays = [
    ggpay, americanExpress, masterCard, meta, momo, paypal, viettelpay, 
    vnpay, zaloPay
]

const Footer = () => {
  return (
    <footer className='bg-[#105b59] px-4 mt-20 pb-16 '>
        <div className='flex flex-col items-center justify-center lg:px-4 xl:mx-[10%] 2xl:mx-[16%] lg:flex-row lg:flex-wrap'>
            <div className='text-center lg:w-1/2'>
                <h3 className='text-white text-lg my-4'>Bản tin</h3>
                <p className='text-white'>Đăng ký để trở thành người đầu tiên biết về các ưu đãi độc quyền 
                    và những sản phẩm mới nhất của chúng tôi.</p>
                <div className='flex justify-center flex-wrap gap-4 my-3'>
                    <input type="email" placeholder='E-email' 
                    className='p-4 rounded-3xl flex-1 outline-[#fe7c22]'/>
                    <button className='py-4 px-8 rounded-3xl bg-[#fe7c22] bg-green-hover text-white'>Gửi</button>
                </div>
            </div>
            <div className='text-center lg:w-1/2'>
                <h3 className='text-white text-lg my-4'>Tài nguyên</h3>
                <ul>
                    <li className='text-white underline font-light'>Các điều khoản và điều kiện</li>
                    <li className='text-white underline font-light'>Chính sách bảo mật</li>
                    <li className='text-white underline font-light'>Liên hệ với chúng tôi</li>
                    <li className='text-white underline font-light'>Theo dõi đơn hàng</li>
                    <li className='text-white underline font-light'>Điều khoản dịch vụ</li>
                    <li className='text-white underline font-light'>Chính sách hoàn tiền</li>
                </ul>
            </div>
            <div className='text-center'>
                <h3 className='text-white text-lg my-4'>Chấp nhận thanh toán </h3>
                <div className='flex flex-wrap justify-center gap-2'>
                    {pays.map((item, index) => (
                        <div key={index} className="h-[28px] flex items-center justify-center bg-white 
                        p-1 w-[16%] rounded-md">
                            <img src={item} alt={item} className="h-full" />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer