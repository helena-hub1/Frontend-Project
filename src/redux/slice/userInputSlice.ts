import { createSlice } from "@reduxjs/toolkit";

// InitialState Type
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
    // case: getUserInput
    getUserInput: (state, action) => {
      state.userInput = action.payload;
    },
  },
});

export const userInputActions = userInputSlice.actions;
const userInputReducer = userInputSlice.reducer;
export default userInputReducer;
