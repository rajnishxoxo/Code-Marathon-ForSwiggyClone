import { useState, useEffect } from "react";

import Card from "./Card";

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

  console.log(productDetail.rating)

  const handleHighToLow = () => {
    const sortedArray = [...productDetail].sort((a, b) => b.price - a.price);

    setFilterData(sortedArray);
  };

  const handleLowtoHigh = () => {
    const sortedArray = [...productDetail].sort((a, b) => a.price - b.price);
    console.log(sortedArray);
    setFilterData(sortedArray);
  };

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
      {/* Based on Category */}
      <div class="w-full flex flex-row justify-evenly mt-10 mb-16 h-20 p-7 items-center -z-10 ">
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

        {/* based on price */}
        <button
          className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r"
          onClick={handleHighToLow}
        >
          High-to-Low
        </button>
        <button
          className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r"
          onClick={handleLowtoHigh}
        >
          Low-to-High
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
