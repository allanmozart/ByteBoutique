// cartSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

interface CartState {
  items: CartItem[];
}

const initialState: CartState = {
  items: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartItem>) => {
      const { id } = action.payload;

      // Check if the item is already in the cart
      const existingItemIndex = state.items.findIndex((item) => item.id === id);

      if (existingItemIndex !== -1) {
        // If the item is already in the cart, increase the quantity
        state.items[existingItemIndex].quantity += 1;
        state.items = [...state.items]; // Create a new array to trigger re-render
      } else {
        // If the item is not in the cart, add it with quantity 1
        state.items.push({ ...action.payload, quantity: 1 });
      }
    },
    removeFromCart: (state, action: PayloadAction<number>) => {
      const idToRemove = action.payload;

      // Remove the item from the cart
      state.items = state.items.filter((item) => item.id !== idToRemove);
    },
    resetCart: () => initialState,
  },
});

export const { addToCart, removeFromCart, resetCart } = cartSlice.actions;

const cartReducer = cartSlice.reducer;

export default cartReducer;
