import { useState, useEffect } from "react";

import Card from "./Card";
import { list } from "postcss";

const Body = () => {
  const [productDetail, setProductDetail] = useState([]);

  const [filterData, setFilterData] = useState([]);

  const fetchData = async () => {
    const storeData = await fetch("https://fakestoreapi.com/products");

    const storeDataConverted = await storeData.json();

    setProductDetail(storeDataConverted);
    setFilterData(storeDataConverted);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleAll = () => {
    setFilterData(productDetail);
  };

  const handleMenSetting = () => {
    const mensList = productDetail.filter((prod) => {
      return prod.category == "men's clothing";
    });

    setFilterData(mensList);
  };

  const handleWomenSetting = () => {
    const womenList = productDetail.filter((prod) => {
      return prod.category == "women's clothing";
    });

    setFilterData(womenList);
  };

  const jewellerySetting = () => {
    const jewellerylist = productDetail.filter((prod) => {
      return prod.category == "jewelery";
    });

    setFilterData(jewellerylist);
  };

  const electronicsSetting = () => {
    const electronicList = productDetail.filter((prod) => {
      return prod.category == "electronics";
    });

    setFilterData(electronicList);
  };

  return (
    <>
      <div class="w-full flex flex-row justify-evenly mt-10 mb-16 h-20 p-7 items-center">
        <button
          className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l"
          onClick={handleAll}
        >
          All
        </button>
        <button
          className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l"
          onClick={handleMenSetting}
        >
          Men's Clothing
        </button>
        <button
          className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r"
          onClick={handleWomenSetting}
        >
          Women's Clothing
        </button>
        <button
          className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l"
          onClick={jewellerySetting}
        >
          Jewellery
        </button>
        <button
          className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r"
          onClick={electronicsSetting}
        >
          Electronics
        </button>
      </div>

      <div>
        <h1 className=" m-2 text-black text-center text-4xl">
          Newly Added Products
        </h1>
      </div>

      <div className=" w-full  mx-auto ml-16 grid grid-cols-3 gap-20 justify-evenly mt-9 ">
        {filterData.map((prod) => {
          return <Card list={prod} />;
        })}
      </div>
    </>
  );
};

export default Body;
