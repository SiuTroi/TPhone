import React, { useEffect, useState } from "react";
import { ref, child, get, set } from "firebase/database";
import { database } from "../../firebase";
import { useDispatch } from "react-redux";
import { AiOutlineClose } from "react-icons/ai";
import { Formik } from "formik";
import * as Yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import freeship from "../../assets/freeship.png";
import googlelogo from "../../assets/googlelogo.png";

const SignUpPage = () => {
  const [loading, setLoading] = useState(false)
  const [users, setUsers] = useState([])
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const dbRef = ref(database);

  useEffect(() => {
    get(child(dbRef, `users`)).then((snapshot) => {
      if(snapshot.exists()) {
        setUsers(snapshot.val())
      }
    })
  }, [])
  return (
    <>
      {loading && <div className='overlay z-9999'><div className='absolute-center loading'></div></div>}
      <div className="overlay">
        <div
          className="h-[90vh] w-[96vw] mt-[8vh] mx-auto rounded-xl 
        bg-white shadow-2xl relative p-8 text-center md:w-full md:h-[100vh] md:mt-0"
        >
          {/* <div className='absolute left-[50%] translate-x-[-50%] translate-y-[-60%]'>
            <img src={freeship} alt="freeship" />
          </div> */}
        <div className=" mx-auto md:w-[80%] lg:w-[60%] xl:w-[40%] 2xl:w-[30%]">
            <div className="text-right">
              <button className="p-2 rounded-lg bg-[#f6f6f6] shadow-2xl" onClick={() => navigate(-1)}>
                <AiOutlineClose size={16} />
              </button>
            </div>
            <div>
              <h1 className="h1 font-semibold text-[28px]">Đăng ký</h1>
              <p className="mb-8 font-light text-[14px]">
                Bạn đã có sẵn tài khoản?{" "}
                <Link to={"/login"} className="text-blue-600 font-normal">Đăng nhập tại đây</Link>
              </p>
            </div>
            <div className="">
              <button
                className="w-full flex items-center rounded-2xl 
                border border-solid border-[#ededed] p-3"
              >
                <img src={googlelogo} width="32" alt="google" />
                <p className="text-gray-400 flex-1 text-center">
                  Đăng nhập bằng google
                </p>
              </button>
            </div>
            <div className="divider mt-4">
              <span className="uppercase text-[#8c98a4]">Hoặc</span>
            </div>
            <Formik
              initialValues={{ email: "", password: "", firstName: "", lastName: "", passwordConfirmed: "" }}
              validationSchema={Yup.object({
                firstName: Yup.string().required("Trường này là bắt buộc!"),
                lastName: Yup.string().required("Trường này là bắt buộc!"),
                email: Yup.string()
                  .email("E-mail không hợp lệ.")
                  .required("Trường này là bắt buộc!"),
                password: Yup.string().required("Trường này là bắt buộc!"),
                passwordConfirmed: Yup.string().oneOf([Yup.ref('password'), null], 'Mật khẩu không khớp!').required("Trường này là bắt buộc!"),
              })}
              onSubmit={(values, { setSubmitting }) => {
                setLoading(true)
                setTimeout(() => {
                  set(child(dbRef, `users/${users.length}`), {
                    email: values.email,
                    password: values.password,
                    userid: users.length,
                    username: `${values.firstName} ${values.lastName}`
                  })
                  dispatch({
                    type: "USER_SIGNUP",
                    payload: {
                      signupemail: values.email,
                      signupusername: `${values.firstName} ${values.lastName}`,
                      signuppassword: values.password,
                      usersignupid: users.length
                    }
                  })
                  setSubmitting(false);
                  setLoading(false)
                  navigate(-1)
                }, 1000);
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
                <form onSubmit={handleSubmit} className="w-full" id="evaluate-form">
                  <div className="flex justify-between">
                    <div className="w-[48%] my-2">
                      <input
                        type="text"
                        name="firstName"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className="w-full py-3 px-4 rounded-2xl outline-[#fd802b] text-[12px] font-light 
                        border border-solid border-[#ededed] p-3"
                        value={values.firstName}
                        placeholder="Họ"
                      />
                      <p className="text-red-600 text-left font-light text-[12px]">
                        {errors.firstName && touched.firstName && errors.firstName}
                      </p>
                    </div>
                    <div className="w-[48%] my-2">
                      <input
                        type="text"
                        name="lastName"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className="w-full py-3 px-4 rounded-2xl outline-[#fd802b] text-[12px] font-light 
                        border border-solid border-[#ededed] p-3"
                        value={values.lastName}
                        placeholder="Tên"
                      />
                      <p className="text-red-600 text-left font-light text-[12px]">
                        {errors.lastName && touched.lastName && errors.lastName}
                      </p>
                    </div>
                  </div>
                  <div className="w-full my-4">
                    <input
                      type="email"
                      name="email"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className="w-full py-3 px-4 rounded-2xl outline-[#fd802b] text-[12px] font-light 
                      border border-solid border-[#ededed] p-3"
                      value={values.email}
                      placeholder="E-mail"
                    />
                    <p className="text-red-600 text-left font-light text-[12px]">
                      {errors.email && touched.email && errors.email}
                    </p>
                  </div>
                  <div className="w-full my-4">
                    <input
                      type="password"
                      name="password"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className="w-full py-3 px-4 rounded-2xl outline-[#fd802b] text-[12px] font-light 
                      border border-solid border-[#ededed] p-3"
                      value={values.password}
                      placeholder="Mật khẩu"
                    />
                    <p className="text-red-600 text-left font-light text-[12px]">
                      {errors.password && touched.password && errors.password}
                    </p>
                  </div>
                  <div className="w-full my-4">
                    <input
                      type="password"
                      name="passwordConfirmed"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className="w-full py-3 px-4 rounded-2xl outline-[#fd802b] text-[12px] font-light 
                      border border-solid border-[#ededed] p-3"
                      value={values.passwordConfirmed}
                      placeholder="Nhập lại mật khẩu"
                    />
                    <p className="text-red-600 text-left font-light text-[12px]">
                      {errors.passwordConfirmed && touched.passwordConfirmed && errors.passwordConfirmed}
                    </p>
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="text-[12px] font-light my-2 p-4 rounded-2xl 
                    w-full bg-[#167674] text-white"
                  >
                    Đăng ký
                  </button>
                </form>
              )}
            </Formik>
        </div>
        </div>
      </div>
    </>
  )
}

export default SignUpPage