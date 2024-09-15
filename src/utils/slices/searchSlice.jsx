import {createSlice} from "@reduxjs/toolkit"
const serachSlice = createSlice({
    name:'searchCache',
    initialState:{
    },
    reducers:{
        $addToSearchCache:(state,action)=>{
            return {...state,...action.payload}
        },
    }
})
export const {$addToSearchCache} = serachSlice.actions
export default serachSlice.reducer

// Normally, in Redux, you're not allowed to directly modify the state because Redux requires the state to be immutable. 
// This means you can't change the original state object—you must return a new object that reflects the state change.
// this is what we have used here
// However, Redux Toolkit with Immer makes this simpler
// Direct Mutation (with Immer)
// Mutating the state directly means that you can write code that looks like it is directly modifying the state (like adding a new property or changing an existing one), even though under the hood, Redux Toolkit ensures that the immutability rules are followed.
// eg : state.selectedLang=action.payload
// eg : Object.assign(state, action.payload);
// eg : state = cannot be used


// import {createSlice} from "@reduxjs/toolkit"
// const serachSlice = createSlice({
//     name:'searchCache',
//     initialState:{
//         abc:{}
//     },
//     reducers:{
//         $addToSearchCache:(state,action)=>{
//             state.abc =  {...state.abc,...action.payload};
//         },
//     }
// })
// export const {$addToSearchCache} = serachSlice.actions
// export default serachSlice.reducer