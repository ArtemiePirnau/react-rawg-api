import { configureStore } from "@reduxjs/toolkit";
import gamesReducer from "../reducer/gamesSlice"
import cartReducer from "../reducer/cartSlice";
const store = configureStore({
    reducer: {
        gamesReducer,
        cartReducer
    }
})
export default store;