import { createSlice } from "@reduxjs/toolkit";

const SearchSlice = createSlice({
    name: 'search',
    initialState:{
        search: ""
    },
    reducers:{
        addSearch:(state, action)=>{
            state.search = action.payload
        }
    }
})
export const {addSearch} = SearchSlice.actions
export default SearchSlice.reducer