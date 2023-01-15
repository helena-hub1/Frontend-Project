import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import Country from "../../types/type";
// type
type InitialState = {
  countryDetail: Country[];
};
// IntialState
const initialState: InitialState = {
  countryDetail: [],
};
// Slice
const countryDetailSlice = createSlice({
  name: "countryDetail",
  initialState,
  reducers: {
    // case: get country detail
    getCountryDetail: (state, action: PayloadAction<Country[]>) => {
      state.countryDetail = action.payload;
    },
  },
});
// actions
export const countryDetailActions = countryDetailSlice.actions;
// reducer
const countryDetailReducer = countryDetailSlice.reducer;
export default countryDetailReducer;
