import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import Country from "../../types/type";
// type
type InitialState = {
  favoriteList: Country[];
};
// IntialState
const initialState: InitialState = {
  favoriteList: [],
};
// Slice
const favoriteSlice = createSlice({
  name: "favorite",
  initialState,
  reducers: {
    // case: add fav
    addFavoriteCountry: (state, action: PayloadAction<Country>) => {
      if (
        state.favoriteList.find(
          (country) => country.name.common === action.payload.name.common
        )
      ) {
        return;
      } else {
        state.favoriteList.push(action.payload);
      }
    },
    // case: remove fav
    removeFavriteCountry: (state, action: PayloadAction<Country>) => {
      const index = state.favoriteList.findIndex(
        (item) => item.name.common === action.payload.name.common
      );
      if (index === -1) {
        return;
      } else {
        const filteredResolution = state.favoriteList.filter(
          (item) => item.name.common !== action.payload.name.common
        );
        state.favoriteList = filteredResolution;
      }
    },
  },
});
// actions
export const favoriteActions = favoriteSlice.actions;
// reducer
const favoriteReducer = favoriteSlice.reducer;
export default favoriteReducer;
