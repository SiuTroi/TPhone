import React, { useEffect, useState } from "react";
import { AiOutlinePlus, AiOutlineClose } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import data from "../../../data/data.json";
import { getFilterProduct, getSortProduct } from "../../../function";
import { fortmatCurrency } from "../../../utils/fortmatCurrency";

const AllProduct = () => {
  const [filterToggle, setFilterToggle] = useState(false);
  const [filterValue, setFilterValue] = useState({
    brand: "",
    from: "",
    to: "",
  });
  const [filterPrice, setFilterPrice] = useState([]);
  const [sortBrand, setBrand] = useState([]);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const value = e.target.value;
    setFilterValue({
      ...filterValue,
      [e.target.name]: value,
    });
  };

  const handleFilter = () => {
    setFilterToggle(false);
    const getProductByFilterPrice = getFilterProduct(
      filterValue.from,
      filterValue.to
    );
    setFilterPrice(getProductByFilterPrice);
  };

  const cancelFilter = () => {
    setFilterToggle(false);
    setFilterPrice([]);
    setBrand([]);
  };

  useEffect(() => {
    const getProductByBrand = getSortProduct(filterValue.brand);
    setBrand(getProductByBrand);
  }, [filterValue.brand]);

  return (
    <div className="category-page pt-40">
      <div className="flex justify-between items-center">
        {filterToggle === false &&
        filterPrice.length === 0 &&
        sortBrand.length === 0 ? (
          <>
            <div>
              <p className="text-[#115e5c] text-[20px] font-bold">Tất cả</p>
              <p className="text-fill text-[22px]">sản phẩm</p>
            </div>
            <div className="flex gap-3 items-center">
              <select
                name="brand"
                id="brand"
                className="border-green rounded-lg p-2 
                text-[#115e5c] text-[15px]"
                onChange={handleChange}
              >
                <option value="">Thương hiệu</option>
                <option value="apple">Apple</option>
                <option value="oppo">Oppo</option>
                <option value="samsung">Samsung</option>
                <option value="vivo">Vivo</option>
                <option value="xiaomi">Xiaomi</option>
                <option value="asus">Asus</option>
              </select>
              <button
                className="flex items-center gap-1"
                onClick={() => setFilterToggle(true)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={20}
                  aria-hidden="true"
                  focusable="false"
                  role="presentation"
                  className="icon icon-filter"
                  fill="none"
                  viewBox="0 11 20 20"
                >
                  <line
                    x1="16.5"
                    y1="17.5"
                    x2="3.5"
                    y2="17.5"
                    stroke="#000"
                    strokeLinecap="round"
                  />
                  <line
                    x1="16.5"
                    y1="24.5"
                    x2="3.5"
                    y2="24.5"
                    stroke="#000"
                    strokeLinecap="round"
                  />
                  <circle cx="13" cy="24.5" r="2" fill="white" stroke="#000" />
                  <circle cx="7" cy="17.5" r="2" fill="white" stroke="#000" />
                </svg>
                <p>Lọc</p>
              </button>
            </div>
          </>
        ) : (
          <div className=" w-full flex justify-between items-center">
            <div>
              <p className="text-[#115e5c] font-semibold text-[18px] ">
                Kết quả cho bộ lọc
              </p>
              {filterPrice.length > 0 && (
                <p>
                  <span className="font-semibold">Giá sản phẩm:</span>{" "}
                  {filterValue.from} - {filterValue.to} VND
                </p>
              )}
              {sortBrand.length > 0 && (
                <p>
                  <span className="font-semibold">Thương hiệu: </span>
                  {filterValue.brand.charAt(0).toUpperCase() +
                    filterValue.brand.slice(1)}
                </p>
              )}
            </div>
            <button
              className="border-green px-3 py-1 text-[14px] text-[#333] rounded-xl"
              onClick={cancelFilter}
            >
              Hủy bộ lọc
            </button>
          </div>
        )}
        {filterToggle && (
          <div className="overlay">
            <div
              className="w-[80vw] h-[100vh] bg-[#f6f6f6] fixed right-0
              rounded-tl-2xl rounded-bl-2xl px-6 pt-10 lg:relative lg:w-[70vw] lg:h-[96vh] lg:my-[2vh] lg:mx-auto lg:rounded-2xl"
            >
              <div className="flex pb-2 border-b border-[#e4e4e4] border-solid">
                <div className="flex-1 text-center">
                  <p>Lọc và sắp xếp</p>
                  <p>{data.length} sản phẩm</p>
                </div>
                <button onClick={() => setFilterToggle(false)}>
                  <AiOutlineClose size={28} />
                </button>
              </div>
              <h3 className="h3 text-[20px] font-medium mt-16">Giá bán:</h3>
              <div className="mt-4">
                <div className="flex items-center my-3">
                  <label htmlFor="from" className="w-[15%]">
                    Từ
                  </label>
                  <input
                    type="text"
                    name="from"
                    id="from"
                    className="flex-1 px-2 py-1"
                    value={filterValue.from}
                    onChange={handleChange}
                  />
                  VND
                </div>
                <div className="flex items-center my-3">
                  <label htmlFor="to" className="w-[15%]">
                    Đến
                  </label>
                  <input
                    type="text"
                    name="to"
                    id="to"
                    className="flex-1 px-2 py-1"
                    value={filterValue.to}
                    onChange={handleChange}
                  />
                  VND
                </div>
              </div>
              <div className="flex justify-end">
                <button
                  className="bg-white px-4 py-2 rounded-2xl shadow-2xl"
                  onClick={handleFilter}
                >
                  Áp dụng
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
      <div>
        <div className="wrap-product">
          {filterToggle === false &&
          filterPrice.length === 0 &&
          sortBrand.length === 0 ? (
            data.map((item) => (
              <div key={item.id} className="item-product ">
                <button className="add-btn" 
                onClick={() =>
                  dispatch({
                    type: "ADD_TO_CART",
                    payload: { product: item, quantity: 1 },
                  })
                }>
                  <AiOutlinePlus size={12} />
                </button>
                <Link to={`/product/${item.name}`}>
                  <div className="img-product">
                    <img src={item.image} alt={item.name} className="h-full" />
                  </div>
                  <p className="mt-8 mb-2 three-dot">{item.name}</p>
                  <h2 className="font-bold">
                    {fortmatCurrency(item.price)}
                  </h2>
                  <p className="line-through text-gray-300">
                    {fortmatCurrency(item.price * item.old_price)}
                  </p>
                </Link>
              </div>
            ))
          ) : (
            <>
              {filterPrice.length > 0 &&
                filterPrice.map((item) => (
                  <div key={item.id} className="item-product ">
                    <button
                      className="add-btn"
                      onClick={() =>
                        dispatch({
                          type: "ADD_TO_CART",
                          payload: { product: item, quantity: 1 },
                        })
                      }
                    >
                      <AiOutlinePlus size={12} />
                    </button>
                    <Link to={`/product/${item.name}`}>
                      <div className="img-product">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="h-full"
                        />
                      </div>
                      <p className="mt-8 mb-2 three-dot">{item.name}</p>
                      <h2 className="font-bold">
                        {fortmatCurrency(item.price)}
                      </h2>
                      <p className="text-gray-400 line-through">
                        {fortmatCurrency(item.price * item.old_price)}
                      </p>
                    </Link>
                  </div>
                ))}
              {sortBrand.length > 0 &&
                sortBrand.map((item) => (
                  <div key={item.id} className="item-product ">
                    <button
                      className="add-btn"
                      onClick={() =>
                        dispatch({
                          type: "ADD_TO_CART",
                          payload: { product: item, quantity: 1 },
                        })
                      }
                    >
                      <AiOutlinePlus size={12} />
                    </button>
                    <Link to={`/product/${item.name}`}>
                      <div className="img-product">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="h-full"
                        />
                      </div>
                      <p className="mt-8 mb-2 three-dot">{item.name}</p>
                      <h2 className="font-bold">
                        {fortmatCurrency(item.price)}
                      </h2>
                    </Link>
                  </div>
                ))}
            </>
          )}
        </div>
      </div>

      <div className="w-[96%] h-12 mx-auto bg-white my-12"></div>
    </div>
  );
};

export default AllProduct;
