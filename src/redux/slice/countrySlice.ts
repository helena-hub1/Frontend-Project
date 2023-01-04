import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import Country from "../../types/type";

// InitialState Type
type InitialState = {
  countryList: Country[];
  isLoading: boolean;
  error: string | null;
};
// InitialState
const initialState: InitialState = {
  countryList: [],
  isLoading: false,
  error: null,
};
// Slice
const countrySlice = createSlice({
  name: "country",
  initialState,
  reducers: {
    // case: getCountryData
    getCountryData: (state, action: PayloadAction<Country[]>) => {
      state.countryList = action.payload;
      state.isLoading = false;
      state.error = null;
    },
    //case: pending
    isPending: (state) => {
      state.isLoading = true;
    },
    // case:rejected
    isRejected: (state, action: PayloadAction<InitialState>) => {
      state.isLoading = false;
      state.countryList = [];
      state.error = action.payload.error;
    },
  },
});

export const countryListActions = countrySlice.actions;
const countryReducer = countrySlice.reducer;
export default countryReducer;
