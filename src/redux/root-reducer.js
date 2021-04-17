import userReducer from "./user/user.reducer";
import CartReducer from "./cart/cart.reducer";
import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import directoryReducer from "../redux/directory/directory.reducer";
import shopReducer from "../redux/shop/shop.reducer";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart"],
};

const rootReducer = combineReducers({
  user: userReducer,
  cart: CartReducer,
  directory: directoryReducer,
  shop: shopReducer,
});

export default persistReducer(persistConfig, rootReducer);
