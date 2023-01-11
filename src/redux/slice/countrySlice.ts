import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import Country from "../../types/type";

//type
type InitialState = {
  countryList: Country[];
  isLoading: boolean;
};
// InitialState
const initialState: InitialState = {
  countryList: [],
  isLoading: false,
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
    },
    //case: pending
    isPending: (state) => {
      state.isLoading = true;
    },
  },
});
// actions
export const countryListActions = countrySlice.actions;
// reducer
const countryReducer = countrySlice.reducer;
export default countryReducer;
