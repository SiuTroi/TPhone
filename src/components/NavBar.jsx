import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import logo from "../assets/logo.png";
import { BiMenuAltLeft } from "react-icons/bi";
import { BsSearch } from "react-icons/bs";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { IoIosArrowBack } from "react-icons/io";
import { RiArrowDropDownLine } from "react-icons/ri";
import Search from "./Menu/Search/Search";
import Category from "./Menu/Category";

const squadNavBox = [
  {
    title: "Tất cá sản phẩm",
    bg: "https://cdn.shopify.com/s/files/1/0313/6228/5699/t/32/assets/squad_nav-b-2.svg?v=133712779800174120111642089754",
    icon: "https://cdn.shopify.com/s/files/1/0313/6228/5699/t/32/assets/squad_nav-i-2.svg?v=98400868773840410521642089756",
    route: "/allproduct",
  },
  {
    title: "Bộ quà tặng",
    bg: "https://cdn.shopify.com/s/files/1/0313/6228/5699/t/32/assets/squad_nav-b-3.svg?v=49745472689912652341642089755",
    icon: "https://cdn.shopify.com/s/files/1/0313/6228/5699/t/32/assets/squad_nav-i-3.svg?v=128027689402168929141642089756",
    route: "/gift",
  },
  {
    title: "Liên hệ với chúng tôi",
    bg: "https://cdn.shopify.com/s/files/1/0313/6228/5699/t/32/assets/squad_nav-b-4.svg?v=59541841797976743711642089755",
    icon: "https://cdn.shopify.com/s/files/1/0313/6228/5699/t/32/assets/squad_nav-i-4.svg?v=27299259263485495581642089757",
    route: "/contact",
  },
];
const linkCate = [
  {
    title: "Tất cá sản phẩm",
    link: "/allproduct",
  },
  {
    title: "Điện thoại",
    link: "/phone",
  },
  {
    title: "Laptop  ",
    link: "/laptop",
  },
  {
    title: "Máy tính bảng",
    link: "/tablet",
  },
  {
    title: "Smart watch",
    link: "/watch",
  },
  {
    title: "Thiết bị mạng",
    link: "/networkdevice",
  },
  {
    title: "Bàn phím",
    link: "/keyboard",
  },
  {
    title: "Loa",
    link: "/loudspeaker",
  },
];
const NavBar = () => {
  const { products } = useSelector((state) => state.CartReducer);
  const user = useSelector((state) => state.UserReducer);
  const [showMenu, setShowMenu] = useState(false);
  const [showCate, setShowCate] = useState(false);
  const [searchToggle, setSearchToggle] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <>
      <div className="bg-[#e6e6e6]">
        <div className="flex items-center justify-between py-2 px-4 lg:px-4 xl:mx-[10%] 2xl:mx-[16%]">
          <div className="flex gap-2 items-center">
            <button onClick={() => navigate(-1)}>
              <IoIosArrowBack size={26} />
            </button>
            <button
              className="bg-white shadow-2xl rounded-lg p-3"
              onClick={() => setShowMenu(true)}
            >
              <BiMenuAltLeft />
            </button>
          </div>
          <div>
            <Link to={"/"} onClick={() => window.scrollTo(0, 0)}>
              <img src={logo} className="w-[142px]" alt="Logo" />
            </Link>
          </div>
          <div className="flex items-center gap-2">
            {user.userid ? (
              <div className="hidden lg:flex lg:items-center">
                <p>{user.username}</p>
                <div className="w-[2px] h-[28px] mx-2 bg-slate-400"></div>
                <button
                  onClick={() => {
                    dispatch({
                      type: "USER_LOGOUT",
                    });
                    dispatch({
                      type: "RESET_CART"
                    })
                    navigate("/");
                  }}
                  className="font-light underline text-center hover-anim"
                >
                  <span className="first">Đăng xuất</span>
                  <span className="second">Đăng xuất</span>
                </button>
              </div>
            ) : (
              <div className="hidden lg:flex lg:items-center">
                <Link
                  to={"/login"}
                  className="text-center font-light hover-anim"
                >
                  <span className="first">Đăng nhập</span>
                  <span className="second">Đăng nhập</span>
                </Link>
                <div className="w-[2px] h-[28px] mx-2 bg-slate-400"></div>
                <Link
                  to={"/signup"}
                  className="text-center font-light hover-anim"
                >
                  <span className="first">Đăng Ký</span>
                  <span className="second">Đăng Ký</span>
                </Link>
              </div>
            )}
            <button
              className="bg-white shadow-2xl rounded-lg p-3"
              onClick={() => setSearchToggle(true)}
            >
              <BsSearch />
            </button>

            <Link to={"/cart"}>
              <button className="bg-white shadow-2xl rounded-lg p-3 relative">
                <AiOutlineShoppingCart />
                <p
                  className="absolute -top-[4px] -right-1 text-white 
                            bg-[#fd7f28] rounded-full px-1 py-[2px] text-[8px]"
                >
                  {products.length}
                </p>
              </button>
            </Link>
          </div>
          {searchToggle && <Search setSearchToggle={setSearchToggle} />}
          {showMenu && (
            <div className="overlay sm:bg-[#f6f6f6]">
              <div className="showMenu sm:w-[320px] sm:mx-auto sm:overflow-y-auto sm:shadow-none px-6 pt-12 overflow-y-scroll">
                <button
                  className="bg-white shadow-2xl rounded-lg p-3 ml-[90%] mb-1"
                  onClick={() => setShowMenu(false)}
                >
                  <IoIosArrowBack />
                </button>
                <ul className="">
                  <li
                    className={`px-4 pt-8 rounded-2xl pb-3 mb-4 border border-black border-solid 
                                ${showCate && "showCate"}`}
                    onClick={() => setShowCate(!showCate)}
                  >
                    <div className="flex justify-between items-center">
                      <p>Danh Mục</p>
                      <RiArrowDropDownLine
                        size={30}
                        className={`${showCate && "rotate-180"}`}
                      />
                    </div>
                  </li>
                  {showCate && (
                    <ul className="">
                      {linkCate.map((item) => (
                        <Link
                          key={item.title}
                          to={item.link}
                          onClick={() => setShowMenu(false)}
                          className="itemCateActive"
                        >
                          <li className="showDown px-4 py-5 bg-[#ededed] font-bold rounded-2xl mb-2">
                            {item.title}
                          </li>
                        </Link>
                      ))}
                    </ul>
                  )}
                  <Link to={"/gift"} onClick={() => setShowMenu(false)}>
                    <li className="px-4 pt-8 rounded-2xl pb-3 mb-4 border border-black border-solid">
                      Phần thưởng
                    </li>
                  </Link>
                  <Link to={"/blog"} onClick={() => setShowMenu(false)}>
                    <li className="px-4 pt-8 rounded-2xl pb-3 mb-4 border border-black border-solid">
                      Blog
                    </li>
                  </Link>
                </ul>
                <div className="w-full flex flex-wrap justify-between gap-2 mb-20">
                  {user.userid ? (
                    <Link
                      to={"/edituser"}
                      className="block w-[48%] max-w-full"
                      onClick={() => setShowMenu(false)}
                    >
                      <div className=" relative">
                        <img
                          src="https://cdn.shopify.com/s/files/1/0313/6228/5699/t/32/assets/squad_nav-b-1.svg?v=7085441301639138361642089753"
                          alt=""
                          className="rounded-md"
                        />
                        <p className="absolute left-3 bottom-3 text-[13px] text-white px-2">
                          Hồ sơ
                        </p>
                        <img
                          src="https://cdn.shopify.com/s/files/1/0313/6228/5699/t/32/assets/squad_nav-i-1.svg?v=90862635490878400821642089756"
                          alt=""
                          className="absolute top-1 right-1"
                        />
                      </div>
                    </Link>
                  ) : (
                    <Link
                      to={"/login"}
                      className="block w-[48%] max-w-full"
                      onClick={() => setShowMenu(false)}
                    >
                      <div className=" relative">
                        <img
                          src="https://cdn.shopify.com/s/files/1/0313/6228/5699/t/32/assets/squad_nav-b-1.svg?v=7085441301639138361642089753"
                          alt=""
                          className="rounded-md"
                        />
                        <p
                          className="absolute left-3 bottom-3 
                                            text-[13px] text-white px-2"
                        >
                          Đăng nhập
                        </p>
                        <img
                          src="https://cdn.shopify.com/s/files/1/0313/6228/5699/t/32/assets/squad_nav-i-1.svg?v=90862635490878400821642089756"
                          alt=""
                          className="absolute top-1 right-1"
                        />
                      </div>
                    </Link>
                  )}
                  {squadNavBox.map((item) => (
                    <Link
                      key={item.title}
                      to={item.route}
                      className="block w-[48%] max-w-full"
                      onClick={() => setShowMenu(false)}
                    >
                      <div className=" relative">
                        <img
                          src={item.bg}
                          alt={item.bg}
                          className="rounded-md"
                        />
                        <p
                          className="absolute left-3 bottom-3 
                                            text-[13px] text-white px-2"
                        >
                          {item.title}
                        </p>
                        <img
                          src={item.icon}
                          alt={item.icon}
                          className="absolute top-1 right-1"
                        />
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
        <Category />
      </div>
    </>
  );
};

export default NavBar;
