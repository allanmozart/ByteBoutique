// rootReducer.ts
import { combineReducers } from '@reduxjs/toolkit';
import authReducer from './authSlice';
import cartReducer from './cartSlice';
import filterReducer from './filterSlice';

const rootReducer = combineReducers({
  auth: authReducer,
  cart: cartReducer,
  filter: filterReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
