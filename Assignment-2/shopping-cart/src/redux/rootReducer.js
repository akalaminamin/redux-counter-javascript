import { combineReducers } from "redux";
import cartReducers from "./cart/cartReducers/cartReducers";

const rootReducer = combineReducers({
  cart: cartReducers,
});

export default rootReducer;
