import { createSlice } from "@reduxjs/toolkit";

// type
type InitialState = {
  userInput: string;
};
// InitialState
const initialState: InitialState = {
  userInput: "",
};
// Slice
const userInputSlice = createSlice({
  name: "userInput",
  initialState,
  reducers: {
    // case: get user Input
    getUserInput: (state, action) => {
      state.userInput = action.payload;
    },
  },
});
// actions
export const userInputActions = userInputSlice.actions;
// reducer
const userInputReducer = userInputSlice.reducer;
export default userInputReducer;
