import {createSlice} from "@reduxjs/toolkit"
const serachSlice = createSlice({
    name:'searchCache',
    initialState:{
        
    },
    reducers:{
        $addToSearchCache:(state,action)=>{
            // state={...state,...action.payload}
            return {...state,...action.payload};

        },
    }
})
export const {$addToSearchCache} = serachSlice.actions
export default serachSlice.reducer