import React from "react";
import { Box, TextField } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";

import { RootState } from "../../../redux/store";
import { userInputActions } from "../../../redux/slice/userInputSlice";

const SearchForm = () => {
  // state
  const userInput = useSelector((state: RootState) => state.input.userInput);
  const countryList = useSelector(
    (state: RootState) => state.country.countryList
  );
  // dispatch
  const dispatch = useDispatch();

  //  userInput handler
  const userInputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(userInputActions.getUserInput(e.target.value));
  };
  // validation
  const userInputValidation = () => {
    // reset previous input
    dispatch(userInputActions.getUserInput(""));
    const index = countryList.findIndex(
      (item) =>
        item.name.common.toLocaleLowerCase() === userInput.toLocaleLowerCase()
    );
    if (userInput.length !== 0 && index === -1) {
      alert("The country name is not found in the system");
    }
    dispatch(userInputActions.getUserInput(""));
  };
  //render
  return (
    <Box className="search_form" sx={{ mt: 20, ml: 15, width: "80%" }}>
      <TextField
        variant="standard"
        onChange={userInputHandler}
        label="Search Country"
        value={userInput}
        onClick={userInputValidation}
      ></TextField>
    </Box>
  );
};

export default SearchForm;
