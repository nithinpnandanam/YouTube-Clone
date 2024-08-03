import { configureStore } from "@reduxjs/toolkit";
import globalReducer from "../utils/slices/globalSlice"
const appStore = configureStore({
    reducer:{
        global:globalReducer
    }
})
export default appStore