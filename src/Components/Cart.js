import { useSelector } from "react-redux"

const Cart = ()=>{


    const cart = useSelector((store)=>store.cart.item);

    console.log(cart);

    cart.map((data)=>{
        console.log(data)
    })


    return(
        <div>
            <h1>cart section</h1>
        </div>
    )
}
    
export default Cart