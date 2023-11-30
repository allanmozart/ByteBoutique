import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: { promotionState: boolean } = {
  promotionState: true,
};

const promotionSlice = createSlice({
  name: "promotion",
  initialState,
  reducers: {
    updatePromotionState: (state, action: PayloadAction<boolean>) => {
      state.promotionState = action.payload;
    },
  },
});

export const { updatePromotionState } = promotionSlice.actions;

const promotionReducer = promotionSlice.reducer;

export default promotionReducer;
