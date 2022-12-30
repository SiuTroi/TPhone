import { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import { Formik, Form, Field } from "formik";
import * as Yup from "yup"
import { AiOutlinePlus, AiFillStar, AiOutlineStar } from "react-icons/ai";
import { CiUser } from "react-icons/ci";
import { BsStarHalf } from "react-icons/bs";
import { Link } from "react-router-dom";
import { evaluate } from "../../../data/index";
import data from "../../../data/data.json"
import CustomerItem from "./CustomerItem";
import CategoryPage from "../../CategoryPage/CategoryPage"
import Evaluate from "./Evaluate";

const Customer = ({ productDetail, setShowImage }) => {
  const [randomStart, setRandomStart] = useState(5);
  const [randomEnd, setRandomEnd] = useState(50)
  useEffect(() => {
    setRandomStart(Math.floor(Math.random() * 20))

  }, [productDetail.name])

  const relatedFunction = () => data.filter(item => item.brand == productDetail.brand)
  return (
    <>
      <div className="px-4 lg:px-8 xl:mx-[10%] 2xl:mx-[16%]">
        {/* Customers also like */}
        <CustomerItem
          setShowImage={setShowImage}
          randomStart={randomStart}
          randomEnd={randomEnd} 
          textnormalCate="Cửa hàng"
          textfillCate="Yêu thích"
        />
        {/* For You */}
        <div className="mt-20">
          <CustomerItem
            setShowImage={setShowImage}
            randomStart={randomStart + 10}
            randomEnd={randomEnd + 20} 
            textnormalCate="Dành cho"
            textfillCate="Bạn"
          />
        </div>
      </div>
      {/* Evaluate */}
      <Evaluate productDetail={productDetail} />
      {/* San pham lien quan */}
      <div className="-mt-32">
        <CategoryPage 
          categoryFunction={relatedFunction} 
          textnormalCate="Sản phẩm"
          textfillCate="Liên quan"
          />
        <div className="px-4 mt-20 lg:px-4 xl:mx-[10%] 2xl:mx-[16%]">
          <div className="w-[96%] md:w-full h-12 mx-auto bg-white my-12"></div>
        </div>
      </div>
    </>
  );
};

export default Customer;
