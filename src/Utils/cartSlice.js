import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({
    name:'cart',
    initialState:{
        item:[] ,
        wishList:[]
    },
    reducers:{
        addItem:(state,action)=>{
            state.item.push(action.payload)
        },

        clearCart:(state)=>{
            state.item.length=0;

        } ,

        addtoWishList : (state,action)=>{
            state.wishList.push(action.payload)
        }
    }
})


export const {addItem,clearCart , addtoWishList}=cartSlice.actions;



export default cartSlice.reducer;

