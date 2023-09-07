const Card = (prop) => {

  const { id, title, price, description, image, rating } = prop.list;

  const truncatedDescription = description.slice(0, 100);

  return (
    <div className="flex flex-col  justify-between cursor-pointer w-72 shadow-md h-96">
    <div className="w-full">
      <img  
        className="w-20 h-auto overflow-hidden m-auto rounded-xl object-cover"
        src={image}
      />
    </div>
    <div className="w-70 m-auto flex flex-col justify-between h-auto ">
      <h3 className="text-lg m-2 font-bold	leading-6 w-full text-center text-slate-950">{title}</h3>
      <h4 className="text-xs font-normal leading-tight tracking-tighter text-opacity-75   text-center m-2">{truncatedDescription}</h4>
      <p className="text-xl font-medium w-full text-center whitespace-nowrap truncate overflow-hidden  ">{price}$</p>

    <div class=" w-full m-2 flex flex-row justify-evenly items-center">
  <button class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l">
    Buy Now
  </button>
  <button class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r">
    Add To Cart
  </button>
</div>

    </div>
  </div>

  );
};

export default Card;
