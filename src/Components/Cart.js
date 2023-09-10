import { useSelector } from "react-redux";

const Cart = () => {
  const cart = useSelector((store) => store.cart.item);

  console.log(cart);

  return (
    <div>
      <h1 className="text-center font-semibold text-4xl m-5">Cart</h1>

      <div className=" border w-2/4 h-auto">
        <h1 className="text-lg font-light mx-4">Item List</h1>
        {cart.map((data) => {
          return (
            <div>
              <h1 className="text-lg font-normal m-3"> {data.list.title}</h1>

            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Cart;
