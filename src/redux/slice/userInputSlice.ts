import { createSlice } from "@reduxjs/toolkit";

type InitialState = {
  userInput: string;
};

const initialState: InitialState = {
  userInput: "",
};

const userInputSlice = createSlice({
  name: "userInput",
  initialState,
  reducers: {
    getUserInput: (state, action) => {
      state.userInput = action.payload;
    },
  },
});

export const userInputActions = userInputSlice.actions;
const userInputReducer = userInputSlice.reducer;
export default userInputReducer;
