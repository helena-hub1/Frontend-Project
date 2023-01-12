import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import Country from "../../types/type";

type InitialState = {
  countryDetail: Country[];
};
const initialState: InitialState = {
  countryDetail: [],
};
const countryDetailSlice = createSlice({
  name: "countryDetail",
  initialState,
  reducers: {
    getCountryDetail: (state, action: PayloadAction<Country[]>) => {
      state.countryDetail = action.payload;
    },
  },
});
export const countryDetailActions = countryDetailSlice.actions;
const countryDetailReducer = countryDetailSlice.reducer;
export default countryDetailReducer;
