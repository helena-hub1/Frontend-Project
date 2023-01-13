import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import Country from "../../types/type";

type InitialState = {
  countryList: Country[];
  isLoading: boolean;
};
const initialState: InitialState = {
  countryList: [],
  isLoading: false,
};
const countrySlice = createSlice({
  name: "country",
  initialState,
  reducers: {
    getCountryData: (state, action: PayloadAction<Country[]>) => {
      state.countryList = action.payload;
      state.isLoading = false;
    },
    isPending: (state) => {
      state.isLoading = true;
    },
    sortcountryData: (state, action: PayloadAction<Country[]>) => {},
  },
});
// actions
export const countryListActions = countrySlice.actions;
// reducer
const countryReducer = countrySlice.reducer;
export default countryReducer;
