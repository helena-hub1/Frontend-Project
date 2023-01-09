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
    // Case:Add favcountry
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
  },
});
//  action
export const favoriteActions = favoriteSlice.actions;
// reducer
const favoriteReducer = favoriteSlice.reducer;
export default favoriteReducer;
