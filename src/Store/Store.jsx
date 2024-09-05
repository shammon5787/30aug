import { configureStore } from "@reduxjs/toolkit";
import CategoryReducer from './CategorySlice.jsx'
import SearchReducer from './SearchSlice.jsx'
import CardReducer from './Cardlice.jsx'

const Store = configureStore({
    reducer:{
        category : CategoryReducer ,
        search: SearchReducer ,
        cart: CardReducer ,
    }
})
export default Store