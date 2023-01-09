import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import Country from "../../types/type";

// type
type InitialState = {
  favoriteList: Country[];
};

const initialState: InitialState = {
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
  },
});
//  action
export const favoriteActions = favoriteSlice.actions;
// reducer
export default favoriteSlice.reducer;
