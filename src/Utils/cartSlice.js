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

        removeItem: (state, action) => {
          const itemToDeleted = action.payload;


          const indexToDelete = state.item.findIndex((data)=>{
           return data.list.id===itemToDeleted.list.id
          })

          if(indexToDelete!=-1){
            state.item.splice(indexToDelete,1)
          }

          },
        //   With these changes, you should pass the entire item object you want to remove to the action, and the reducer will correctly remove only the item with the matching ID while keeping the others in the cart.
          
          
          
          
          
          

        clearCart:(state)=>{
            state.item.length=0;

        } ,

        addtoWishList : (state,action)=>{
            state.wishList.push(action.payload)
        }
    }
})


export const {addItem,clearCart , removeItem, addtoWishList}=cartSlice.actions;



export default cartSlice.reducer;

