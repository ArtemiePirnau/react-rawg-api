import { createSlice } from "@reduxjs/toolkit";
const cartSlice = createSlice({
    name: "cart",
    initialState: {
        cartItems: []
    },
    reducers: {
        addGameToCart: (state, action) => {
            const newItem = {
                id: action.payload.id,
                name: action.payload.name,
                background_image: action.payload.background_image,
                genres: action.payload.genres,
                rating: action.payload.rating
            }
            state.cartItems.push(newItem)
        },
        removeGameFromCart: (state, action) => {
            state.cartItems = state.cartItems.filter((todo) => todo.id !== action.payload.id)
        }
    }
})
export default cartSlice.reducer;
export const { addGameToCart, removeGameFromCart } = cartSlice.actions;