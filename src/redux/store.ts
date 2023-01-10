import { configureStore } from "@reduxjs/toolkit";

import userInputReducer from "../redux/slice/userInputSlice";
import countryReducer from "../redux/slice/countrySlice";
import favoriteReducer from "../redux/slice/favoriteSlice";

const store = configureStore({
  reducer: {
    country: countryReducer,
    input: userInputReducer,
    favorite: favoriteReducer,
  },
});
// RootState type
export type RootState = ReturnType<typeof store.getState>;
// Appdispatch type
export type Appdispatch = typeof store.dispatch;
export default store;
