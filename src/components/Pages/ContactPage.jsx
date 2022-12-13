import { useState } from 'react';
import { Formik } from 'formik';
import * as Yup from "yup"
import {AiFillCheckCircle} from "react-icons/ai"

const ContactPage = () => {
  const [message, setMessage] = useState([])
  const [loading, setLoading] = useState(false)

  return (
    <>
      {loading && <div className='overlay'><div className='absolute-center loading'></div></div>}
      <div className='pt-32 px-4 lg:px-8 xl:mx-[10%] 2xl:mx-[16%]'>
        <div>
          <p className="text-[#115e5c] text-[24px] font-bold">Biểu mẫu</p>
          <p className="text-fill text-[32px]">Nhận xét</p>
        </div>
        <div className='flex flex-col md:flex-row gap-6 w-full'>
          <div className='flex-1'>
            <Formik
              initialValues={{
                name: "",
                email: "",
                phone: "",
                message: "",
              }}
              validationSchema={Yup.object({
                name: Yup.string().required('Tên là bắt buộc!'),
                email: Yup.string().email('E-mail không hợp lệ.').required('E-mail là bắt buộc!'),
                message: Yup.string().required('Tin nhắn này là bắt buộc!'),
              })}
              onSubmit={(values, { setSubmitting }) => {
                setLoading(true)
                setTimeout(() => {
                  setMessage(prev => [...prev, values])
                  setSubmitting(false)
                  setLoading(false)
                }, 800);
              }}
            >
              {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting,
              }) => (
                <form onSubmit={handleSubmit} className="w-full rounded-[40px] p-10 border border-solid border-[#808080] bg-white " id="evaluate-form">
                    <p className='text-[14px] mt-4 mb-8 text-[#7D7D7D] font-semibold'>Nếu bạn không thể liên hệ với chúng tôi qua điện thoại, vui lòng điền vào mẫu dưới đây và chúng tôi sẽ liên hệ lại với bạn sớm nhất có thể.</p>
                    <div>
                      {message.length > 0 && <p className='flex items-center gap-3 mb-6'>
                        <span><AiFillCheckCircle color='green' /></span> 
                        <span className='text-[14px] text-[#7D7D7D] font-semibold'>Cảm ơn vì đã liên hệ với chúng tôi. Chúng tôi sẽ liên hệ lại với bạn sớm nhất có thể.</span>
                      </p>}
                    </div>
                    <div className="w-full my-4 mb-[25px]">
                        <input
                            type="text"
                            name="name"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className="w-full py-[17px] px-[15px] bg-[#f6f7f9] border border-solid border-[#cecece] rounded-2xl text-[14px]"
                            value={values.name}
                            placeholder="Tên của bạn"
                        />
                        <p className="text-red-600 font-light text-[14px]">{errors.name && touched.name && errors.name}</p>
                    </div>
                    <div className="w-full my-4 mb-[25px]">
                        <input
                            type="email"
                            name="email"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className="w-full py-[17px] px-[15px] bg-[#f6f7f9] border border-solid border-[#cecece] rounded-2xl text-[14px]"
                            value={values.email}
                            placeholder="Email của bạn"

                        />
                        <p  className="text-red-600 font-light text-[14px]">{errors.email && touched.email && errors.email}</p>
                    </div>
                    <div className="w-full my-4 mb-[25px]">
                        <input
                            type="text"
                            name="phone"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className="w-full py-[17px] px-[15px] bg-[#f6f7f9] border border-solid border-[#cecece] rounded-2xl text-[14px]"
                            value={values.phone}
                            placeholder="Điện thoại của bạn"
                        />
                        <p  className="text-red-600 font-light text-[14px]">{errors.phone && touched.phone && errors.phone}</p>
                    </div>
                    <div className="w-full my-4 mb-[25px]">
                        <textarea
                            type="text"
                            rows={5}
                            name="message"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className="w-full py-[17px] px-[15px] bg-[#f6f7f9] border border-solid border-[#cecece] rounded-2xl text-[14px]"
                            value={values.message}
                            placeholder="Tin nhắn"
                        />
                        <p  className="text-red-600 font-light text-[14px]">{errors.message && touched.message && errors.message}</p>
                    </div>
                  <button type="submit" disabled={isSubmitting} 
                  className="bg-[#FE7C22] text-[14px] text-white font-light my-4 p-4 rounded-2xl bg-green-hover">
                    Gửi đánh giá
                  </button>
                </form>
              )}
            </Formik>
          </div>
          <div className='w-full md:w-[50%] lg:w-[60%]'>
            <div className=' py-14 px-12 rounded-[40px] bg-white'>
              <div className='mb-8'>
                <h1 className='text-[28px] font-semibold mb-8'>
                  Liên hệ chúng tôi
                </h1>
                <p>Qua điện thoại: <span className='font-bold ml-6 leading-8'>0333514122</span></p>
                <p>Qua Email: <span className='font-bold ml-6 leading-8'>tphone@support.com</span></p>
              </div>
              <div className='pt-8 border-t border-solid border-[#cecece]'>
                  <h6>Thứ Hai-Thứ Sáu 9:00AM - 5:00PM PST</h6>
                  <p className='mt-6 font-light'>
                    Chú ý: Tổng đài của chúng tôi ngừng hoạt động do mất điện! Chúng tôi đang khẩn trương làm việc để giải quyết vấn đề này và xử lý các yêu cầu của bạn. Nếu bạn cần liên hệ với chúng tôi, vui lòng liên hệ qua email và chúng tôi sẽ cố gắng hết sức để phản hồi trong vòng 24 giờ. Chúc mừng & Chúc mừng ngày lễ!
                  </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ContactPage