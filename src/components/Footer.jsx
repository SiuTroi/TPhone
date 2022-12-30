import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import ggpay from "../assets/google-pay.png";
import americanExpress from "../assets/american-express.png";
import masterCard from "../assets/master-card.png";
import meta from "../assets/meta.png";
import momo from "../assets/MoMo_Logo.png";
import paypal from "../assets/paypal.png";
import viettelpay from "../assets/viettelpay.png";
import vnpay from "../assets/vnpay.png";
import zaloPay from "../assets/ZaloPay_Logo.png";
import { toast } from "react-toastify";
import { Formik } from "formik";
import * as Yup from "yup";

const pays = [
  ggpay,
  americanExpress,
  masterCard,
  meta,
  momo,
  paypal,
  viettelpay,
  vnpay,
  zaloPay,
];

const media = [
  { icon: <FaFacebook size={18} color="white" />, bgColor: "blue" },
  { icon: <FaTwitter size={18} color="white" />, bgColor: "#37b2ae"},
  { icon: <FaInstagram  size={18} color="white"/>, bgColor: "black"},
  { icon: <FaYoutube size={18} color="white" />, bgColor: "red"}
];

const Footer = () => {
  return (
    <footer className="bg-[#105b59] px-4 mt-20 pb-16">
      <div className="flex flex-col lg:mx-[4%] xl:mx-[10%] 2xl:mx-[16%]">
        <div className="flex flex-wrap flex-col md:flex-row gap-4">
          <div className="flex-1">
            <h3 className="mb-6 text-white text-[28px] font-bold my-4 relative inline-block">
              Công ty
              <div className="absolute -bottom-2 left-0 bg-[#37b2ae] w-[50%] h-[1px]"></div>
            </h3>
            <p className="text-white">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book
            </p>
          </div>
          <div className="flex-1">
            <h3 className="mb-6 text-white text-[28px] font-bold my-4 relative inline-block">
              Tài nguyên
              <div className="absolute -bottom-2 left-0 bg-[#37b2ae] w-[50%] h-[1px]"></div>
            </h3>
            <ul>
              <li className="text-white py-[2px]">
                Các điều khoản và điều kiện
              </li>
              <li className="text-white py-[2px]">Chính sách bảo mật</li>
              <li className="text-white py-[2px]">Liên hệ với chúng tôi</li>
              <li className="text-white py-[2px]">Theo dõi đơn hàng</li>
              <li className="text-white py-[2px]">Điều khoản dịch vụ</li>
              <li className="text-white py-[2px]">Chính sách hoàn tiền</li>
            </ul>
          </div>
          <div className="flex-1">
            <h3 className="mb-6 text-white text-[28px] font-bold my-4 relative inline-block">
              Bản tin
              <div className="absolute -bottom-2 left-0 bg-[#37b2ae] w-[50%] h-[1px]"></div>
            </h3>
            <p className="text-white">
              Đăng ký để trở thành người đầu tiên biết về các ưu đãi độc quyền
              và những sản phẩm mới nhất của chúng tôi.
            </p>
            <Formik
              initialValues={{ email: "" }}
              validationSchema={Yup.object({
                email: Yup.string().email("E-mail không hợp lệ."),
              })}
              onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                  if (values.email) {
                    toast.success("Gửi thành công!!");
                  }
                }, 200);
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
                  className="flex justify-between flex-wrap w-[68%] md:w-full gap-4 my-3 bg-white rounded-full relative"
                >
                  <div className="flex-1">
                    <input
                      type="email"
                      name="email"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className="w-full p-4  rounded-tl-full rounded-bl-full flex-1 outline-none"
                      value={values.email}
                      placeholder="E-mail"
                    />
                  </div>
                  <button
                    type="submit"
                    className="py-4 px-8 rounded-full h-[56px] w-[110px] xl:w-[130px] translate-x-4 bg-[#fe7c22] text-white hover:bg-[#37b2ae]"
                  >
                    Gửi
                  </button>
                </form>
              )}
            </Formik>
            <div className="flex gap-2">
              {media.map((item, index) => (
                <div key={index}>
                  <div className="p-3 rounded-full" style={{backgroundColor: item.bgColor }}>{item.icon}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="flex items-center ga-4 sm:gap-6 mt-6 w-full flex-col sm:flex-row">
          <h3 className="text-white text-[28px] font-bold my-4">
            Thanh toán:{" "}
          </h3>
          <div className="flex-1 flex flex-wrap justify-center sm:justify-start gap-2">
            {pays.map((item, index) => (
              <div
                key={index}
                className="h-[28px] flex items-center justify-center bg-white p-1 w-[60px] rounded-md"
              >
                <img src={item} alt={item} className="h-full" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
