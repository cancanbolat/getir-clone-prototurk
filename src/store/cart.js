import { createSlice } from "@reduxjs/toolkit";

export const cart = createSlice({
    name: 'cart',
    initialState: {
        cartItems: [],
        cartTotalQuantity: 0,
        cartTotalAmount: 0
    },
    reducers: {
        addTocart: (state, action) => {
            state.cartItems.push(action.payload)
        }
    }
})

export const { addTocart } = cart.actions

export default cart.reducer