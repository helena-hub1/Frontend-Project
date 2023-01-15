import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import Country from "../../types/type";
// type
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
    // case: get country data
    getCountryData: (state, action: PayloadAction<Country[]>) => {
      state.countryList = action.payload;
      state.isLoading = false;
    },
    // case: pending
    isPending: (state) => {
      state.isLoading = true;
    },
    // case: sort ascending
    sortAscending: (state) => {
      state.countryList.sort((countryA, countryB) =>
        countryA.name.common > countryB.name.common
          ? 1
          : countryB.name.common > countryA.name.common
          ? -1
          : 0
      );
    },
    // sort descending
    sortDescending: (state) => {
      state.countryList.sort((countryA, countryB) =>
        countryA.name.common < countryB.name.common
          ? 1
          : countryB.name.common < countryA.name.common
          ? -1
          : 0
      );
    },
  },
});
// actions
export const countryListActions = countrySlice.actions;
// reducer
const countryReducer = countrySlice.reducer;
export default countryReducer;
