import { createSlice } from "@reduxjs/toolkit";


const cartSlice=createSlice({
    name:"cart",
    initialState:{
        itemList:[],
        totalQuantity:0,
        showCart:false
    },
    reducers:{
        ReplacingData(state,action){
            state.itemList=[...action.payload.itemList];
            state.showCart=action.payload.showCart;
            state.totalQuantity=action.payload.totalQuantity;
        },
        AddToCart(state,action){
            const newItem=action.payload;

            //To check if item already exit
            const existingItem=state.itemList.find((item)=>item.id===newItem.id);
            if(!existingItem)
            {
                state.itemList.push({
                    id:newItem.id,
                    price:newItem.price,
                    quantity:1,
                    totalPrice:newItem.price,
                    name:newItem.name
                });
            state.totalQuantity++;
            }
            else 
            {
              existingItem.totalPrice+=newItem.price;
              existingItem.quantity++;
            }
        },
        removeToCart(state,action)
        {
            const RemovingItemId=action.payload;
            // Checking whather the removing item exist or not
            const ExistingItem=state.itemList.find((item)=>item.id===RemovingItemId);
            if(ExistingItem)
            {
                if(ExistingItem.quantity>1)
                {
                    ExistingItem.totalPrice-=ExistingItem.price;
                    ExistingItem.quantity--;                    
                }
                else 
                {
                   state.itemList=state.itemList.filter((item)=>item.id!==RemovingItemId);                    
                   state.totalQuantity--;
                }                
            }
        },
        setShowCart(state){state.showCart=!state.showCart;}
    }
});

export const cartActions=cartSlice.actions;

export default cartSlice;