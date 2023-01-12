import { configureStore } from "@reduxjs/toolkit";

import userInputReducer from "../redux/slice/userInputSlice";
import countryReducer from "../redux/slice/countrySlice";
import favoriteReducer from "../redux/slice/favoriteSlice";
import countryDetailReducer from "./slice/countryDetailSlice";

const store = configureStore({
  reducer: {
    country: countryReducer,
    input: userInputReducer,
    favorite: favoriteReducer,
    countryDetail: countryDetailReducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type Appdispatch = typeof store.dispatch;

export default store;
