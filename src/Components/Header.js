const Header = () => {
  return (
    <div>
      {/*container */}
      <div className="flex flex-col w-full  h-auto  p-2 shadow-md  bg-slate-100">
        {/* Div for upper Section. */}

        <div className="flex flex-row">
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
            <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white  h-14 w-20 border border-blue-500 hover:border-transparent rounded-md">
              Login
            </button>
            <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white  h-14 w-20   border border-blue-500 hover:border-transparent rounded-md">
              Register
            </button>
            <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white   h-14 w-20  border border-blue-500 hover:border-transparent rounded-md">
              Cart🛒
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
