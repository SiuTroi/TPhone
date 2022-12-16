import React, { useEffect, useState } from 'react';
import { ref, child, get, set } from "firebase/database";
import { database } from "../../firebase";
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { CiUser } from "react-icons/ci";
import {AiFillCheckCircle} from "react-icons/ai"
import {BsDash, BsPlus} from "react-icons/bs"
import {AiOutlineDelete} from "react-icons/ai"
import pen from "../../assets/pen.png"
import { Formik } from 'formik';
import * as Yup from "yup"

const EditUserPage = () => {
  const user = useSelector(state => state.UserReducer);
  const { products } = useSelector(state => state.CartReducer);
  const [toggleEdit, setToggleEdit] = useState(false)
  const [loading, setLoading] = useState(false)
  const [editDone, setEditDone] = useState(false)
  const [historycheckout, setHistorycheckout] = useState([])
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const dbRef = ref(database);

  useEffect(() => {
    get(child(dbRef, `users/${user.userid}/historycheckout`)).then((snapshot) => {
      if(snapshot.exists()) {
        setHistorycheckout(snapshot.val())
      }
    })
  }, [])

  return (
    <>
      {loading && <div className='overlay'><div className='absolute-center loading'></div></div>}
      <div className='pt-32 lg:px-8 xl:mx-[10%] 2xl:mx-[16%]'>
        <div className='pt-12 px-6'>
          <h1 className='text-[28px]'>Tài khoản</h1>
          <div className='flex items-center gap-4'>
            <div><CiUser size={20} /></div>
            <Link to={"/"} onClick={() => dispatch({
              type: "USER_LOGOUT"
            })} className='font-light underline'>Đăng xuất</Link>
          </div>
          <div className='mt-10'>
            <h2 className='text-[21px] font-light'>Lịch sử đơn hàng</h2>
            {historycheckout.length > 0 ? (
              <>
              <div className='flex flex-col md:flex-row md:flex-wrap md:gap-2 gap-4 overflow-auto'>
                {historycheckout.map(item => (
                  <div key={item.id} className='flex flex-col gap-3 shadow-xl bg-white p-8 md:max-w-[49%]'>
                    <div className='flex items-center gap-4'>
                      <div className='w-[20%]'>
                        <img src={item.image} alt="" className='min-w-[66px] max-w-full' />
                      </div>
                      <div className='flex flex-col justify-between sm:flex-row sm:items-center flex-1'>
                        <div className=''>
                          <h4 className='font-medium mb-2 three-dot'>{item.name}</h4>
                          <p className=''>Số lượng: {item.quantity}</p>
                        </div>
                        <div className='flex flex-col gap-2 sm:items-end'>
                          <p className='text-[15px]'>{new Intl.NumberFormat('it-IT', {style : 'currency', currency : 'VND'}).format(item.price)}</p>
                        </div>
                      </div>
                    </div>
                    <div>
                      <p><span className='font-medium text-[15px]'> Thời gian thanh toán:</span> {item.infoPayer.timeOfPayment}</p>
                    </div>
                  </div>
                ))}
              </div>
            </>
            ) : (
              <p className='font-light text-[15px]'>Bạn chưa đặt bất kỳ đơn hàng nào.</p>
            )}
          </div>
            <div className='mt-10 lg:w-[60%]'>
              <div className='flex justify-between items-center'>
                <h1 className='text-[21px] font-light'>Chi tiết tài khoản</h1>
                <button className='w-[12%] flex justify-center items-center text-[14px] md:w-[82px]' onClick={() => {setToggleEdit(!toggleEdit);setEditDone(false)}}>
                  {toggleEdit ? <span className='underline'>Hủy</span> : <img src={pen} alt="edit" />}
                </button>
              </div>
              <div>
                {editDone && <p className='flex items-center gap-3 mb-6'>
                <span><AiFillCheckCircle color='green' /></span> 
                <span className='text-[14px] text-[#7D7D7D] font-semibold'>Đã cập nhật thông tin thành công.</span>
              </p>}
              </div>
              {toggleEdit ? (
                <Formik
                initialValues={{ 
                  newFirstName: "", 
                  newLastName: "", 
                  newEmail: "", 
                  oldPassword: "", 
                  newPassword: "", 
                  newPasswordConfirmed: "" 
                }}
                validationSchema={Yup.object({
                  newFirstName: Yup.string().required("Họ là bắt buộc!"),
                  newLastName: Yup.string().required("Tên là bắt buộc!"),
                  newEmail: Yup.string()
                    .email("E-mail không hợp lệ.")
                    .required("E-mail là bắt buộc!"),
                  newPassword: Yup.string().required("Mật khẩu mới là bắt buộc!"),
                  oldPassword: user.password && Yup.string().matches(`${user.password}`, "Mật khẩu cũ không chính xác!").required("Mật khẩu cũ là bắt buộc!"),
                  newPasswordConfirmed: user.password && Yup.string().oneOf([Yup.ref('newPassword'), null], 'Mật khẩu không khớp!').required("Nhập lại mật khẩu mới là bắt buộc!"),
                })}
                onSubmit={(values, { setSubmitting }) => {
                  setLoading(true)
                  setTimeout(() => {
                    set(child(dbRef, `users/${user.userid}`), {
                      email: values.newEmail,
                      password: values.newPassword,
                      userid: user.userid,
                      username: `${values.newFirstName} ${values.newLastName}`
                    })
                    dispatch({
                      type: "EDIT_USER",
                      payload: {
                        newUsername: `${values.newFirstName} ${values.newLastName}`,
                        newUserid: user.userid,
                        newEmail: values.newEmail,
                        newPassword: values.newPassword
                      }
                    })
                    setSubmitting(false);
                    setEditDone(true)
                    setToggleEdit(false)
                    setLoading(false)
                    navigate("/edituser")
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
                          name="newFirstName"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          className={`w-full py-3 px-4 rounded-2xl outline-[#fd802b] text-[14px] font-light 
                          border border-solid p-3 ${errors.newFirstName && touched.newFirstName && errors.newFirstName ? "border-red" : "border-[#ededed]"}`}
                          value={values.newFirstName}
                          placeholder="Họ"
                        />
                        <p className="text-red-600 text-left font-light text-[12px]">
                          {errors.newFirstName && touched.newFirstName && errors.newFirstName}
                        </p>
                      </div>
                      <div className="w-[48%] my-2">
                        <input
                          type="text"
                          name="newLastName"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          className={`w-full py-3 px-4 rounded-2xl outline-[#fd802b] text-[14px] font-light 
                          border border-solid p-3 ${errors.newLastName && touched.newLastName && errors.newLastName ? "border-red" : "border-[#ededed]"}`}
                          value={values.newLastName}
                          placeholder="Tên"
                        />
                        <p className="text-red-600 text-left font-light text-[12px]">
                          {errors.newLastName && touched.newLastName && errors.newLastName}
                        </p>
                      </div>
                    </div>
                    <div className="w-full my-4">
                      <input
                        type="email"
                        name="newEmail"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={`w-full py-3 px-4 rounded-2xl outline-[#fd802b] text-[14px] font-light 
                        border border-solid p-3 ${errors.newEmail && touched.newEmail && errors.newEmail ? "border-red" : "border-[#ededed]"}`}
                        value={values.newEmail}
                        placeholder="E-mail mới"
                      />
                      <p className="text-red-600 text-left font-light text-[12px]">
                        {errors.newEmail && touched.newEmail && errors.newEmail}
                      </p>
                    </div>
                    {user.password && <div className="w-full my-4">
                      <input
                        type="password"
                        name="oldPassword"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={`w-full py-3 px-4 rounded-2xl outline-[#fd802b] text-[14px] font-light 
                        border border-solid p-3 ${errors.oldPassword && touched.oldPassword && errors.oldPassword ? "border-red" : "border-[#ededed]"}`}
                        value={values.oldPassword}
                        placeholder="Nhập mật khẩu cũ"
                      />
                      <p className="text-red-600 text-left font-light text-[12px]">
                        {errors.oldPassword && touched.oldPassword && errors.oldPassword}
                      </p>
                    </div>}
                    <div className="w-full my-4">
                      <input
                        type="password"
                        name="newPassword"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={`w-full py-3 px-4 rounded-2xl outline-[#fd802b] text-[14px] font-light 
                        border border-solid p-3 ${errors.newPassword && touched.newPassword && errors.newPassword ? "border-red" : "border-[#ededed]"}`}
                        value={values.newPassword}
                        placeholder="nhập mật khẩu mới"
                      />
                      <p className="text-red-600 text-left font-light text-[12px]">
                        {errors.newPassword && touched.newPassword && errors.newPassword}
                      </p>
                    </div>
                    {user.password && <div className="w-full my-4">
                      <input
                        type="password"
                        name="newPasswordConfirmed"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={`w-full py-3 px-4 rounded-2xl outline-[#fd802b] text-[14px] font-light 
                        border border-solid p-3 ${errors.newPasswordConfirmed && touched.newPasswordConfirmed && errors.newPasswordConfirmed ? "border-red" : "border-[#ededed]"}`}
                        value={values.newPasswordConfirmed}
                        placeholder="Nhập lại mật khẩu mới"
                      />
                      <p className="text-red-600 text-left font-light text-[12px]">
                        {errors.newPasswordConfirmed && touched.newPasswordConfirmed && errors.newPasswordConfirmed}
                      </p>
                    </div>}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="text-[12px] font-light my-2 p-4 rounded-2xl 
                      w-full bg-[#167674] text-white bg-orange-hover"
                    >
                      Thay đổi
                    </button>
                  </form>
                )}
              </Formik>
              ) : (
                <>
                  <p>Họ tên: <span className='font-light'>{user.username}</span></p>
                  <p>E-mail: <span className='font-light'>{user.email}</span></p>
                </>
              )}
            </div>
        </div>
      </div>
    </>
  )
}

export default EditUserPage