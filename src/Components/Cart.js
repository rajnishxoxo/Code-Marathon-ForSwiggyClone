import { useSelector } from "react-redux";

const Cart = () => {
  const cart = useSelector((store) => store.cart.item);

  return (
    <div>
      <h1 className="text-center font-semibold text-4xl m-5">Cart</h1>

      {cart.map((data) => {
        const { title, image, price } = data.list;

        console.log(title, image, price);
      })}
    </div>
  );
};

export default Cart;
