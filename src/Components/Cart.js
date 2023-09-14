import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem } from "../Utils/cartSlice";

const Cart = () => {
  const cart = useSelector((store) => store.cart.item);

  // console.log(cart)

  const itemCount ={};

  cart.map((data)=>{
    const{id} = data.list;
    if(itemCount[id]){
      itemCount[id]++
    }else{
      itemCount[id]=1;
    }
  })

  const uniqueItem = Object.keys(itemCount).map((data)=>{
    // console.log(data)
    const firstOccur = cart.find((item)=>{
      return item.list.id==data;
    })

    return{
      item:firstOccur ,
      count:itemCount[data]
    }
    
  });

  console.log(uniqueItem);


  const dispatch = useDispatch();

  

  const handleAddItem = (data) => {
    dispatch(addItem(data));
  };

  const handleRemoveItem = (itemData) => {
    dispatch(removeItem(itemData));
  };

  return cart.length == 0 ? (
    <h1 className="text-center font-bold text-2xl m-5">
      Please Add Item To Your Cart..
    </h1>
  ) : (
    <div>
      {cart.map((data) => {
        const { title, image, price, id } = data.list;
        return (
          <div key={data.id} className="flex items-center m-3">
            <img
              className="w-40 h-20 object-contain m-3"
              src={image}
              alt={title}
            />
            <p>{title}</p>
            <div className="ml-auto m-2 flex flex-row">
              <button
                className="font-medium text-2xl bg-slate-700 rounded-md mx-2 w-10"
                // onClick={() => {
                //   handleAddItem(data);
                // }}
              >
                +
              </button>
              <div className="text-center text-lg font-bold">
                {/* {data.count} */}
              </div>
              <button
                className="font-medium text-2xl bg-slate-700 rounded-md w-10"
                // onClick={() => {
                //   handleRemoveItem(data);
                // }}
              >
                -
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Cart;
