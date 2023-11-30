import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface FilterState {
  priceUpFilter: boolean;
  priceDownFilter: boolean;
}

const initialState: FilterState = {
  priceUpFilter: false,
  priceDownFilter: false,
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setPriceUpFilter: (state, action: PayloadAction<boolean>) => {
      state.priceUpFilter = action.payload;
    },
    setPriceDownFilter: (state, action: PayloadAction<boolean>) => {
      state.priceDownFilter = action.payload;
    },
  },
});

export const { setPriceUpFilter, setPriceDownFilter } = filterSlice.actions;
export default filterSlice.reducer;
