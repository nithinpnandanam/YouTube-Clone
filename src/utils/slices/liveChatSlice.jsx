import {createSlice} from "@reduxjs/toolkit"
const liveChatSlice = createSlice({
    name:'global',
    initialState:{
        liveChatData:[],
    },
    reducers:{
        $addLiveChat:(state,action)=>{
            state.liveChatData.push(action.payload)
            console.log("data from store",state.liveChatData)
        },
    }
})
export const {$addLiveChat} = liveChatSlice.actions
export default liveChatSlice.reducer