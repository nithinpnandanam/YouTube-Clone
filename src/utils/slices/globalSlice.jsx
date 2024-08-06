import {createSlice} from "@reduxjs/toolkit"
const globalSlice = createSlice({
    name:'global',
    initialState:{
        showSidebar:true,
    },
    reducers:{
        $toggleSidebar:(state,action)=>{
            state.showSidebar=!state.showSidebar
        },
    }
})
export const {$toggleSidebar} = globalSlice.actions
export default globalSlice.reducer