import { configureStore } from "@reduxjs/toolkit";
import conterReducer from "./counterSlice"


export const store = configureStore({
    reducer: {
        counter:conterReducer
    }
})