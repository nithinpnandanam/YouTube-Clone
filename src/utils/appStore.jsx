import { configureStore } from "@reduxjs/toolkit";
import globalSlice from "../utils/slices/globalSlice"
const appStore = configureStore({
    reducer:{
        global:globalSlice
    }
})
export default appStore