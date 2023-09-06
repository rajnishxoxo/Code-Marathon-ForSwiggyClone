import Search from "./Search";

const Header = () => {
  return (
    <div className="w-full flex flex-row justify-between items-center shadow-md m-2 p-2 bg-blue-950	">
      <img
        className="w-28 mt-1"
        src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
      />

    <div className="w-3/4 h-7 ml-5">
    <Search />
    <button>🔍</button>
    </div>
      <div className="w-1/2 flex">
        <ul className=" w-full flex flex-row justify-evenly h-14 items-center p-3 font-medium text-lg text-white">
          <li>Orders</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
