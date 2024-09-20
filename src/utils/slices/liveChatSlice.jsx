import {createSlice} from "@reduxjs/toolkit"
const liveChatSlice = createSlice({
    name:'global',
    initialState:{
        liveChatData:[],
    },
    reducers:{
        $addLiveChat:(state,action)=>{
            state.liveChatData.push(action.payload)
            state.liveChatData.length>25?state.liveChatData.splice(0,5):"";
        },
    }
})
export const {$addLiveChat} = liveChatSlice.actions
export default liveChatSlice.reducer