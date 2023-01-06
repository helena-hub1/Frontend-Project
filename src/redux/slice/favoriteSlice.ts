import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { title } from "process";

import Country from "../../types/type";

// type
type initialState = {
  favoriteList: Country[];
};

const initialState: initialState = {
  favoriteList: [],
};
// Slice
const favoriteSlice = createSlice({
  name: "favorite",
  initialState,
  reducers: {
    // Case:Add favorite
    addFavorite: (state, action: PayloadAction<Country>) => {
      state.favoriteList.push(action.payload);
    },
    // Case: Remove favorite
    removeFavorite: (state, action: PayloadAction<Country>) => {
      const index = state.favoriteList.findIndex(
        (item) => item.name.common === action.payload.name.common
      );
      // check if the item exist
      if (index === -1) {
        alert("Item doesn't exist");
      } else {
        const filteredResolution = state.favoriteList.filter(
          (item) => item.name.common !== action.payload.name.common
        );
        state.favoriteList = filteredResolution;
      }
    },
  },
});
//  actions
export const favoriteActions = favoriteSlice.actions;
// reducer
export default favoriteSlice.reducer;
