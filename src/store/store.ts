import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import promotionReducer from "./promotion/promotion";
import cartReducer from "./cartSlice";
import authReducer from "./authSlice";
import filterReducer from "./filterSlice";

const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  auth: authReducer,
  promotion: promotionReducer,
  cart: cartReducer,
  filter: filterReducer
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
});

export default store;