import { configureStore } from "@reduxjs/toolkit";
import globalSlice from "../utils/slices/globalSlice"
import searchSlice from "./slices/searchSlice";
import liveChatSlice from "./slices/liveChatSlice";
const appStore = configureStore({
    reducer:{
        global:globalSlice,
        searchCache:searchSlice,
        liveChat:liveChatSlice
    }
})
export default appStore