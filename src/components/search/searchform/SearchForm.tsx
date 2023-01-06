import React from "react";
import { Box, TextField } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../../redux/store";

import { userInputActions } from "../../../redux/slice/userInputSlice";

const SearchForm = () => {
  const userInput = useSelector((state: RootState) => state.input.userInput);
  const dispatch = useDispatch();
  //   get user input
  const getUserInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(userInputActions.getUserInput(e.target.value));
  };

  console.log(userInput, "input from form");
  //   onSearch handler
  return (
    <Box sx={{ mt: 5, ml: 10, width: "80%" }}>
      <TextField
        variant="standard"
        onChange={getUserInput}
        label="Search"
        value={userInput}
      ></TextField>
    </Box>
  );
};

export default SearchForm;
