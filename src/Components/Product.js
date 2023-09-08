import { useParams } from "react-router";


const Product = ()=>{

    const {id} = useParams();
    console.log(id)

    return(
        <div>
            <h1>Product</h1>
        </div>
    )
}

export default Product;