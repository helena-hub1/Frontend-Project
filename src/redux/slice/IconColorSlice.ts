import { createSlice } from "@reduxjs/toolkit";

//type
type InitialState = {
  homeIconColor: string;
  favoriteIconColor: string;
  worldIconColor: string;
};
// InitialState
const initialState: InitialState = {
  homeIconColor: "white",
  favoriteIconColor: "white",
  worldIconColor: "white",
};
// Slice
const iconColorSlice = createSlice({
  name: "iconColor",
  initialState,
  reducers: {
    // case: homeIcon
    setHomeIconColor: (state) => {
      state.homeIconColor = "purple";
    },
    // case: favIcon
    setFavoriteIconColor: (state) => {
      state.favoriteIconColor = "red";
    },
    // case:worldIcon
    setWorldIconColor: (state) => {
      state.worldIconColor = "purple";
    },
  },
});

export const iconColorActions = iconColorSlice.actions;
const iconColorReducer = iconColorSlice.reducer;
export default iconColorReducer;
