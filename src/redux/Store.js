import todoReducer from "./slices/TodoSlice"
import { configureStore } from "@reduxjs/toolkit";

const Store = configureStore({
        reducer: todoReducer,
    
})

export default Store;
