import { useState, useEffect } from "react";

import Card from "./Card";

import { promotedProduct } from "./Card";

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

  const handleRating = () => {
    const highRated = productDetail.filter((data) => {
      return data.rating.rate > 3.8;
    });
    console.log(highRated);
    setFilterData(highRated);
  };

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

  const [hideFilter, setHideFilter] = useState(false);

  const handleDisplayFilter = () => {
    if (hideFilter == true) {
      setHideFilter(false);
    } else {
      setHideFilter(true);
    }
  };

  const NewCard = promotedProduct(Card);

  return (
    <div className="flex flex-row">
      <div className="flex flex-col border-b-2 w-1/5 my-5">
        <div className="flex flex-row mb-5">
          <h1 className="mx-2 text-3xl font-bold   ">Filters</h1>
          <button className="text-xl" onClick={handleDisplayFilter}>
            ⬇️
          </button>
        </div>
        {hideFilter && (
          <div class="w-full flex flex-col gap-2 mx-auto ">
            <button
              className="bg-gray-300 hover:bg-gray-400 text-gray-800 w-40 p-2 font-bold  active:bg-orange-600 rounded-l"
              onClick={handleAll}
            >
              All
            </button>
            <button
              className="bg-gray-300 hover:bg-gray-400 text-gray-800 w-40 p-2 active:bg-orange-600  font-bold rounded-l"
              onClick={handleMenSetting}
            >
              Men's Clothing
            </button>
            <button
              className="bg-gray-300 hover:bg-gray-400 text-gray-800 p-2 active:bg-orange-600  w-40 font-bold  rounded-r"
              onClick={handleWomenSetting}
            >
              Women's Clothing
            </button>
            <button
              className="bg-gray-300 hover:bg-gray-400 text-gray-800 p-2 active:bg-orange-600 w-40 font-bold  rounded-l"
              onClick={jewellerySetting}
            >
              Jewellery
            </button>
            <button
              className="bg-gray-300 hover:bg-gray-400 text-gray-800 p-2 active:bg-orange-600 w-40 font-bold  rounded-r"
              onClick={electronicsSetting}
            >
              Electronics
            </button>

            {/* based on price */}
            <button
              className="bg-gray-300 hover:bg-gray-400 text-gray-800  p-2 active:bg-orange-600 w-40 font-bold  rounded-r"
              onClick={handleHighToLow}
            >
              High-to-Low
            </button>
            <button
              className="bg-gray-300 hover:bg-gray-400 text-gray-800  p-2 active:bg-orange-600 w-40 font-bold  rounded-r"
              onClick={handleLowtoHigh}
            >
              Low-to-High
            </button>

            <button
              className="bg-gray-300 hover:bg-gray-400 text-gray-800 p-2  active:bg-orange-600 w-40 font-bold  rounded-r"
              onClick={handleRating}
            >
              Highly Rated Products
            </button>
          </div>
        )}
      </div>

      <div className="w-3/5">
        <div>
          <h1 className=" m-2 text-black text-center text-4xl">
            Newly Added Products
          </h1>
        </div>

        <div className=" w-full  mx-auto ml-16 grid grid-cols-3 gap-20 justify-evenly mt-9 ">
          {filterData.map((data) => data.rating.rate>4?<NewCard list={data}/>:<Card list={data}/>)}
        </div>
      </div>
    </div>
  );
};

export default Body;
