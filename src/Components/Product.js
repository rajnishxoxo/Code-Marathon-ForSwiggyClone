import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { addItem } from "../Utils/cartSlice";
import { Link } from "react-router-dom";

const Product = () => {
  const { id } = useParams();

  const [product, setProduct] = useState([]);

  const fetchData = async()=>{
    const storeData = await fetch('https://fakestoreapi.com/products/'+id)
    const data = await storeData.json();
    setProduct(data);
  }

  

  useEffect(() => {
    fetchData();
  }, []);

  const dispatch = useDispatch();

  const cart = useSelector((store)=>store.cart.item)


  const handleAddToCart=()=>{
    dispatch(addItem(product))
  }


  console.log(cart)

  return (
    <div className="w-full flex flex-row my-5 justify-between ">
     <div className="w-1/2 border">
<img  src={product.image} className="w-96 mx-auto"/>
     </div>
     <div className="w-2/5">
        <h1 className="text-6xl font-light  my-2">{product.category}</h1>
        <p className="text-4xl font-light my-2">{product.title}</p>
        <p className="text-xl font-light my-2">{product?.rating?.rate||4}⭐</p>
        <p className="text-4xl font-light my-2">{product.price}$</p>
        <p className="text-xl font-light my-2">{product.description}</p>
        <div className="flex flex-row w-64 justify-between">
        <button
            class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r mx-4"
            onClick={() => {
              handleAddToCart(product);
            }}
          >
            Add To Cart
          </button>

         <Link to={'/cart'}>
         <button
            class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r" >
            Go To Cart
          </button>
          </Link>

        </div>
     </div>
    </div>
  );
};

export default Product;
