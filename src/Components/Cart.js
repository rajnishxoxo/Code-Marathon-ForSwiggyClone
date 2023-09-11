import { useSelector } from "react-redux";

const Cart = () => {
  const cart = useSelector((store) => store.cart.item);

  return (
    <div className="">
      <h1 className="text-center font-semibold text-4xl m-5">Cart</h1>

      <div className="border-2 border-black border-opacity-100">

      {cart.map((data) => {
      const { title, image, price } = data.list;
      return(
        <div className="flex flex-col m-3 ">

         <div className="flex flex-row items-center ">
         <img className="w-40 h-20 object-contain m-3" src={image}/>
          <p>{title}</p>
          <div className="">
            <button className="font-medium text-2xl bg-slate-700 rounded-md m-2">Add More+</button>
            
            <button>-</button>
          </div>
          
        </div>
        {/* <button className="w-60 bg-slate-700 text-white p-1 mx-2 rounded-md">Remove from Cart</button> */}

        </div>
      )

        
      })}
      </div>
    </div>
  );
};

export default Cart;
