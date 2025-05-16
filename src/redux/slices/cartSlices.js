import { createSlice } from '@reduxjs/toolkit'

const initialState = {

    cartItem: [],
    totalAmount:0,
    totalQuantity: 0

}

const cartSlices = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem:(state, action)=>{
        const newItem = action.payload
        const existingItem = state.cartItem.find(item=> item.id=== newItem.id
            );
            state.totalQuantity++
            if(!existingItem){
                state.cartItem.push({
                    id: newItem.id,
                    productName: newItem.productName,
                })
            }
    }
  }
});

export const cartActions = cartSlices.actions

export default cartSlices.reducer