import React, { useEffect, useState } from 'react';
import { AiOutlineClose } from "react-icons/ai";
import { CiSearch } from "react-icons/ci";
import { Link } from 'react-router-dom';
import data from "../../../data/data.json"
import logo from "../../../assets/logo.png"

const hotProducts = data.slice(36, 44);
const Search = ({ setSearchToggle }) => {
    const [productSearch, setProductSearch] = useState(hotProducts);
    const [valueSearch, setValueSearch] = useState("")

    const handleSearch = (e) => {
        setValueSearch(e.target.value)
        if(!e.target.value) return setProductSearch(hotProducts);
    
        const resultsArray = data.filter(item => item.name.toLocaleLowerCase().includes(e.target.value))
        setProductSearch(resultsArray)
      }

  return (
    <div className='overlay'>
        <div className='w-[98vw] md:w-full bg-[#f6f6f6] mx-auto h-[90vh] mt-[10vh] shadow-2xl 
        rounded-tl-3xl rounded-tr-3xl overflow-hidden relative md:h-[100vh] md:mt-0 md:rounded-none '>
            <div className='flex justify-around items-center pt-8 px-2 md:py-4 md:rounded-full md:border-b-[8px] md:border-solid md:border-[#115e5c]'>
                <div className='hidden md:block md:w-[160px]'>
                    <img className='' src={logo} alt="" />
                </div>
                <div className='flex bg-white items-center rounded-xl w-[50%] max-w-[440px] md:min-w-[400px] '>
                    <span className="p-3 flex justify-center items-center rounded-xl">
                        <CiSearch />
                    </span>
                    <input type="text" onChange={handleSearch}
                    className='py-2 px-3 pl-0 rounded-xl outline-none'/>
                </div>
                <button onClick={() => setSearchToggle(false)} 
                className="p-3 rounded-xl shadow-2xl bg-white">
                    <AiOutlineClose />
                </button>
            </div>
            <div className='mt-12 md:mt-0 lg:px-4 xl:mx-[10%] 2xl:mx-[16%] h-[85vh] overflow-y-scroll scroll'>
                {valueSearch.length > 0 ? (
                    <h1 className='text-[#fe7c22] text-[18px] font-medium mx-4 md:mt-8'>Kết quả cho tìm kiếm "{valueSearch}"</h1>
                ) : (
                    <h1 className='text-[#fe7c22] text-[18px] font-medium mx-4 md:mt-8'>Được tìm kiếm nhiều nhất</h1>
                )}
                <div className='md:flex md:flex-wrap'>
                    {productSearch.map(item => (
                        <Link to={`/product/${item.name}`} key={item?.id} 
                        onClick={() => {
                            setSearchToggle(false)
                            window.scrollTo(0,0)
                        }}
                        className="md:flex  md:w-[30%] lg:w-[24%] xl:w-[19%]">
                            <div className="flex md:inline-block m-4 md:mx-1 gap-4 p-4 rounded-xl items-center
                            bg-white shadow-2xl border-hover">
                                <div className='w-[20%] md:w-full'>
                                    <img src={item?.image} alt={item?.image} />
                                </div>
                                <div className='flex-1'>
                                    <h2 className='text-[18px] font-medium'>{item?.name}</h2>
                                    <p className='three-dot text-[13px] font-light'>{item?.description}</p>
                                    <p className='font-medium'>{item?.price}đ</p>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Search