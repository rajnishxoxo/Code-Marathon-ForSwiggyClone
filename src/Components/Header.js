 import { useSelector } from "react-redux/";
import { Link } from "react-router-dom";

const Header = () => {

  const cart = useSelector((store)=>{
    return store.cart.item
  })

  

  return (
    <div>
      {/*container */}
      <div className="flex flex-col w-full  h-auto  p-2 shadow-md  bg-slate-100">
        {/* Div for upper Section. */}

        <div className="flex flex-row fixed top-0 z-10 w-full   bg-slate-100">
          <div className="m-4 p-4 w-1/5 ">
            <h1 className="font-bold text-2xl my-3 ">Apna-Store</h1>
          </div>

          <div className="w-2/5">
            <ul className="flex flex-row justify-evenly m-6 p-4 text-xl font-medium">
              <li className="hover:border-b-4 border-blue-500 border-opacity-50 border-solid border-b-1 px-2 py-1">
                Home
              </li>
              <li className="hover:border-b-4 border-blue-500 border-opacity-50 border-solid border-b-1 px-2 py-1">
                Product
              </li>
              <li className="hover:border-b-4 border-blue-500 border-opacity-50 border-solid border-b-1 px-2 py-1">
                About
              </li>
              <li className="hover:border-b-4 border-blue-500 border-opacity-50 border-solid border-b-1 px-2 py-1">
                Contact
              </li>
            </ul>
          </div>

          <div className="flex flex-row w-2/5 items-center justify-evenly">
            <Link  to={'/login'}>
            <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white  h-14 w-20 border border-blue-500 hover:border-transparent rounded-md">
              Login
            </button>
            </Link>
            <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white  h-14 w-20   border border-blue-500 hover:border-transparent rounded-md">
              Register
            </button>
            <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white   h-14 w-auto  border border-blue-500 hover:border-transparent rounded-md">
              Cart🛒-({cart.length})
            </button>
          </div>
        </div>

        <div className="relative">
          <img
            className="w-full  h-96 -z-50 object-cover"
            src="https://images.unsplash.com/photo-1476362555312-ab9e108a0b7e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
          ></img>
          <div class="flex-col absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center ">
            <h1 className=" m-2 text-white text-5xl">New Season Arrival</h1>
            <p className="text-xl font-medium text-white mt-3 ">Get ready to drizzle in style! Shop our monsoon discounts and make waves of savings on your favorite items</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
