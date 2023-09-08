import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { addItem, addtoWishList } from "../Utils/cartSlice";
import { Link } from "react-router-dom";

const Card = (prop) => {
  const [isLiked, setIsLiked] = useState(false);

  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addItem(prop));
  };

  const handleAddToWishList = () => {
    dispatch(addtoWishList(prop));
    if (isLiked == true) {
      setIsLiked(false);
    } else {
      setIsLiked(true);
    }
  };

  const wishList = useSelector((state) => state.cart.wishList);

  // console.log(wishList);

  const { id, title, price, description, image, rating } = prop.list;

  const truncatedDescription = description.slice(0, 100);

  return (
    <div className="flex flex-col  relative justify-between cursor-pointer w-72 shadow-md h-96">
      <img
        className={`w-6 h-6 absolute object-contain left-64 top-0 ${
          isLiked ? "bg-green-500" : ""
        }`}
        src="https://cdn-icons-png.flaticon.com/128/7299/7299756.png"
        onClick={() => {
          handleAddToWishList(prop);
        }}
      />
      <div className="w-full">
        <img
          className="w-20 h-auto overflow-hidden m-auto rounded-xl object-cover"
          src={image}
        />
      </div>
      <div className="w-70 m-auto flex flex-col justify-between h-auto ">
        <h3 className="text-lg m-2 font-bold	leading-6 w-full text-center text-slate-950">
          {title}
        </h3>
        <h4 className="text-xs font-normal leading-tight tracking-tighter text-opacity-75   text-center m-2">
          {truncatedDescription}
        </h4>
        <p className="text-xl font-medium w-full text-center whitespace-nowrap truncate overflow-hidden  ">
          {price}$
        </p>

        <div class=" w-full m-2 flex flex-row justify-evenly items-center">
        
          <button class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l">
            Buy Now
          </button>
        
        
          <button
            class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r"
            onClick={() => {
              handleAddToCart(prop);
            }}
          >
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
