import { configureStore } from "@reduxjs/toolkit";
import globalSlice from "../utils/slices/globalSlice"
import searchSlice from "./slices/searchSlice";
const appStore = configureStore({
    reducer:{
        global:globalSlice,
        searchCache:searchSlice
    }
})
export default appStore