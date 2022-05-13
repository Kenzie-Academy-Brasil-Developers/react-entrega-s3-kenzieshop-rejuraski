import { combineReducers } from "redux";
import cartReducer from "./cart/reducer";
import productReducer from "./products/reducer";

export default combineReducers({
    cartReducer, productReducer
});