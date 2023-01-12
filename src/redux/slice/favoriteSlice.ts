import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import Country from "../../types/type";

type InitialState = {
  favoriteList: Country[];
};
const initialState: InitialState = {
  favoriteList: [],
};
const favoriteSlice = createSlice({
  name: "favorite",
  initialState,
  reducers: {
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
export const favoriteActions = favoriteSlice.actions;
const favoriteReducer = favoriteSlice.reducer;
export default favoriteReducer;
