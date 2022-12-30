import { useState, useEffect } from "react";
import { Formik } from "formik";
import * as Yup from "yup"
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { CiUser } from "react-icons/ci";
import { BsStarHalf } from "react-icons/bs";
import { evaluate } from "../../../data/index";

const Evaluate = ({ productDetail }) => {
    const [evaluateCurrentSlide, setevaluateCurrentSlide] = useState(1);
    const [evaluateToggle, setEvaluateToggle] = useState(false);
    const [evaluateDone, setEvaluateDone] = useState(false);
    const [evaluateData, setEvaluateData] = useState(evaluate)
    
    const evaluatePage= 1
    // Pagination
    const lastIdx = evaluateCurrentSlide * evaluatePage;
    const firstIdx = lastIdx - evaluatePage;
    const evaluateSlide = evaluateData.slice(firstIdx, lastIdx);
  
    useEffect(() => {
      const timerId = setInterval(() => {
        setevaluateCurrentSlide(evaluateCurrentSlide + 1);
        if (evaluateCurrentSlide <= 0) {
          setevaluateCurrentSlide(evaluateData.length);
        }
        if (evaluateCurrentSlide >= evaluateData.length) {
          setevaluateCurrentSlide(1);
        }
      }, 5000);
      return () => clearInterval(timerId);
    }, [evaluateCurrentSlide]);

  return (
    <div>
      <div className="bg-white mt-20">
        <div className="p-4 px-4 lg:px-4 xl:mx-[10%] 2xl:mx-[16%]">
          <div className="text-center pt-12">
            <p className="">Phản hồi của khách hàng về sản phẩm này</p>
            <h3 className="h3 mt-2 mb-12 font-semibold text-[24px]">
              Are Saying!!
            </h3>
          </div>
          <div>
            {evaluateSlide.map((item, index) => (
              <div key={index} className="evaluate h-[320px] max-h-[320px]">
                <div className="flex gap-1 items-center">
                  <AiFillStar color="#fd7f28" />
                  <AiFillStar color="#fd7f28" />
                  <AiFillStar color="#fd7f28" />
                  <AiFillStar color="#fd7f28" />
                  <BsStarHalf color="#fd7f28" />
                </div>
                <p
                  className="inline-block px-1 bg-black text-white font-thin 
                        my-2 text-[12px]"
                >
                  verified
                </p>
                <h2 className="h2 font-semibold">{item?.title}</h2>
                <p className="text-[#969696] font-light mt-3 mb-16 ">
                  {item?.derscription}
                </p>
                <div className="flex items-center gap-2">
                  <div className="p-1 border-style rounded-full">
                    <CiUser />
                  </div>
                  <h4 className="h4 text-[#757575] font-semibold">
                    {item?.name}
                  </h4>
                </div>
                <p className="font-light">{item?.time}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Your envaluate */}
      <div className="px-4 py-16 bg-white">
        <div className="bg-[#f6f6f6] rounded-[40px] px-6 py-10 shadow-2xl md:px-12 md:py-16 lg:px-14 xl:mx-[10%] 2xl:mx-[16%]">
          <div className="md:flex md:gap-6 md:justify-between">
            <div className="">
              <h2 className="h2 text-[22px] font-semibold mb-6">
                Viết đánh giá của bạn
              </h2>
              <div className="flex gap-1 items-center ">
                <AiFillStar size={22} color="#fd7f28" />
                <AiFillStar size={22} color="#fd7f28" />
                <AiFillStar size={22} color="#fd7f28" />
                <AiFillStar size={22} color="#fd7f28" />
                <BsStarHalf size={22} color="#fd7f28" />
              </div>
              <p className="mb-2 font-light text-[14px]">
                Dựa trên {productDetail?.count_evaluate} đánh giá
              </p>
            </div>
            <div className="md:flex md:flex-row-reverse md:flex-1">
              <button
                className="border-style w-full my-2 py-3 text-[14px] rounded-3xl md:w-[200px] md:h-10 md:flex md:justify-center md:items-center bg-orange-hover"
                onClick={() => setEvaluateToggle(!evaluateToggle)}
              >
                {evaluateToggle ? "Hủy đánh giá" : "Viết đánh giá"}
              </button>
              {productDetail?.evaluate ? (
                <div className="flex flex-col w-full my-8 md:my-0">
                  <div className="flex gap-4 items-center">
                    <div className="flex">
                      <AiFillStar size={22} color="#fd7f28" />
                      <AiFillStar size={22} color="#fd7f28" />
                      <AiFillStar size={22} color="#fd7f28" />
                      <AiFillStar size={22} color="#fd7f28" />
                      <AiFillStar size={22} color="#fd7f28" />
                    </div>
                    <div className="h-5 w-[25%] border-gray">
                      <div
                        className={`h-full rounded-tr-sm rounded-br-sm bg-[#fd7f28]`}
                        style={{ width: `${productDetail.evaluate._5star}` }}
                      ></div>
                    </div>
                    <p className="text-[12px]">
                      ({productDetail.evaluate._5star})
                    </p>
                  </div>
                  <div className="flex gap-4 items-center">
                    <div className="flex">
                      <AiFillStar size={22} color="#fd7f28" />
                      <AiFillStar size={22} color="#fd7f28" />
                      <AiFillStar size={22} color="#fd7f28" />
                      <AiFillStar size={22} color="#fd7f28" />
                      <AiOutlineStar size={22} color="#fd7f28" />
                    </div>
                    <div className="h-5 w-[25%] border-gray">
                      <div
                        className={`h-full rounded-tr-sm rounded-br-sm bg-[#fd7f28]`}
                        style={{ width: `${productDetail.evaluate._4star}` }}
                      ></div>
                    </div>
                    <p className="text-[12px]">
                      ({productDetail.evaluate._4star})
                    </p>
                  </div>
                  <div className="flex gap-4 items-center">
                    <div className="flex">
                      <AiFillStar size={22} color="#fd7f28" />
                      <AiFillStar size={22} color="#fd7f28" />
                      <AiFillStar size={22} color="#fd7f28" />
                      <AiOutlineStar size={22} color="#fd7f28" />
                      <AiOutlineStar size={22} color="#fd7f28" />
                    </div>
                    <div className="h-5 w-[25%] border-gray">
                      <div
                        className={`h-full rounded-tr-sm rounded-br-sm bg-[#fd7f28]`}
                        style={{ width: `${productDetail.evaluate._3star}` }}
                      ></div>
                    </div>
                    <p className="text-[12px]">
                      ({productDetail.evaluate._3star})
                    </p>
                  </div>
                  <div className="flex gap-4 items-center">
                    <div className="flex">
                      <AiFillStar size={22} color="#fd7f28" />
                      <AiFillStar size={22} color="#fd7f28" />
                      <AiOutlineStar size={22} color="#fd7f28" />
                      <AiOutlineStar size={22} color="#fd7f28" />
                      <AiOutlineStar size={22} color="#fd7f28" />
                    </div>
                    <div className="h-5 w-[25%] border-gray">
                      <div
                        className={`h-full rounded-tr-sm rounded-br-sm bg-[#fd7f28]`}
                        style={{ width: `${productDetail.evaluate._2star}` }}
                      ></div>
                    </div>
                    <p className="text-[12px]">
                      ({productDetail.evaluate._2star})
                    </p>
                  </div>
                  <div className="flex gap-4 items-center">
                    <div className="flex">
                      <AiFillStar size={22} color="#fd7f28" />
                      <AiOutlineStar size={22} color="#fd7f28" />
                      <AiOutlineStar size={22} color="#fd7f28" />
                      <AiOutlineStar size={22} color="#fd7f28" />
                      <AiOutlineStar size={22} color="#fd7f28" />
                    </div>
                    <div className="h-5 w-[25%] border-gray">
                      <div
                        className={`h-full rounded-tr-sm rounded-br-sm bg-[#fd7f28]`}
                        style={{ width: `${productDetail.evaluate._1star}` }}
                      ></div>
                    </div>
                    <p className="text-[12px]">
                      ({productDetail.evaluate._1star})
                    </p>
                  </div>
                </div>
              ) : (
                <div>
                  <p>Sản Phẩm này có bài đánh giá</p>
                  <p>Hãy là người đầu tiên đánh giá sản phẩm này.</p>
                </div>
              )}
            </div>
          </div>
          {evaluateToggle && evaluateDone === false && (
            <Formik
              initialValues={{
                name: "",
                title: "",
                email: "",
                derscription: "",
                time: new Date().toLocaleDateString(),
              }}
              validationSchema={Yup.object({
                name: Yup.string().required("Trường này là bắt buộc!"),
                title: Yup.string().required("Trường này là bắt buộc!"),
                email: Yup.string()
                  .email("E-mail không hợp lệ.")
                  .required("Trường này là bắt buộc!"),
                derscription: Yup.string().required("Trường này là bắt buộc!"),
              })}
              onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                  setEvaluateData((prev) => [...prev, values]);
                  setEvaluateDone(true);
                  setSubmitting(false);
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
                <form
                  onSubmit={handleSubmit}
                  className="w-full"
                  id="evaluate-form"
                >
                  <div className="w-full my-4">
                    <input
                      type="text"
                      name="name"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className="w-full shadow-2xl py-3 px-4 rounded-2xl text-[14px] font-light outline-[#fd7f28]"
                      value={values.name}
                      placeholder="Nhập tên của bạn (công khai)"
                    />
                    <p className="text-red-600 font-light text-[14px]">
                      {errors.name && touched.name && errors.name}
                    </p>
                  </div>
                  <div className="w-full my-4">
                    <input
                      type="email"
                      name="email"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className="w-full shadow-2xl py-3 px-4 rounded-2xl text-[14px] font-light outline-[#fd7f28]"
                      value={values.email}
                      placeholder="Nhập email của bạn (riêng tư)"
                    />
                    <p className="text-red-600 font-light text-[14px]">
                      {errors.email && touched.email && errors.email}
                    </p>
                  </div>
                  <div className="w-full my-4">
                    <input
                      type="text"
                      name="title"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className="w-full shadow-2xl py-3 px-4 rounded-2xl text-[14px] font-light outline-[#fd7f28]"
                      value={values.title}
                      placeholder="Đặt tiêu đề cho đánh giá của bạn"
                    />
                    <p className="text-red-600 font-light text-[14px]">
                      {errors.title && touched.title && errors.title}
                    </p>
                  </div>
                  <div className="w-full my-4">
                    <textarea
                      type="text"
                      rows={5}
                      name="derscription"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className="w-full shadow-2xl py-3 px-4 rounded-2xl text-[14px] font-light outline-[#fd7f28]"
                      value={values.derscription}
                      placeholder="Viết nội dung bình luận của bạn"
                    />
                    <p className="text-red-600 font-light text-[14px]">
                      {errors.derscription &&
                        touched.derscription &&
                        errors.derscription}
                    </p>
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-white text-[14px] font-light my-4 p-4 rounded-2xl bg-orange-hover"
                  >
                    Gửi đánh giá
                  </button>
                </form>
              )}
            </Formik>
          )}
          {evaluateDone && (
            <p className="my-4 text-center text-[#fd7f28] font-light">
              Cảm ơn bạn đã đánh giá sản phẩm
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Evaluate;
