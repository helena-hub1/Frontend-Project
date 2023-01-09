import { configureStore } from "@reduxjs/toolkit";

import userInputReducer from "./slice/userInputSlice";
import countryReducer from "./slice/countrySlice";
import favoriteReducer from "./slice/favoriteSlice";
import iconColorReducer from "./slice/iconColorSlice";

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
