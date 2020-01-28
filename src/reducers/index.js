import { combineReducers } from "redux";
import photoReducers from "./photosReducers";
import cartReducer from "./cartReducer";

export default combineReducers({
  photos: photoReducers,
  cart: cartReducer
});
