import { configureStore } from "@reduxjs/toolkit";

import userInputReducer from "src/redux/slice/userInputSlice";
import countryReducer from "src/redux/slice/countrySlice";
import favoriteReducer from "src/redux/slice/favoriteSlice";
import iconColorReducer from "src/redux/slice/iconColorSlice";

const store = configureStore({
  reducer: {
    country: countryReducer,
    input: userInputReducer,
    favorite: favoriteReducer,
    iconColor: iconColorReducer,
  },
});
// RootState type
export type RootState = ReturnType<typeof store.getState>;
// Appdispatch type
export type Appdispatch = typeof store.dispatch;
export default store;
