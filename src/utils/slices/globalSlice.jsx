import {createSlice} from "@reduxjs/toolkit"
const globalSlice = createSlice({
    name:'global',
    initialState:null,
    reducers:{
        addUser:(state,action)=>{
            return action.payload
        },
    }
})
export const {addUser} = globalSlice.actions
export default globalSlice.reducer