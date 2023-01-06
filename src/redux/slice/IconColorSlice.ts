import { createSlice } from "@reduxjs/toolkit";

import Country from "../../types/type";

// InitialState Type
type InitialState = {
  homeIconColor: string;
  favoriteIconColor: string;
};
// InitialState
const initialState: InitialState = {
  homeIconColor: "white",
  favoriteIconColor: "white",
};
// Slice
const iconColorSlice = createSlice({
  name: "iconColor",
  initialState,
  reducers: {
    // case: HomeIcon
    setHomeIconColor: (state) => {
      state.homeIconColor = "purple";
    },
    // case: FavIcon
    setFavoriteIconColor: (state) => {
      state.favoriteIconColor = "red";
    },
  },
});

export const iconColorActions = iconColorSlice.actions;
const iconColorReducer = iconColorSlice.reducer;
export default iconColorReducer;
