import { useEffect, useState } from "react";

const Body = ()=>{


    const [productDetail , setProductDetail] = useState();

    const fetchData=async()=>{

        const storeData = await fetch('https://fakestoreapi.com/products');

        const storeDataConverted = await storeData.json();

        console.log(storeDataConverted)

    }

    useEffect(()=>{

        fetchData();
    },[])



    return(
        <div>

            
            
        </div>
    )
}
    
export default Body