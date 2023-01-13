import React, { useState } from "react";
import { Alert, Box, Snackbar, TextField } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";

import { RootState } from "../../../redux/store";
import { userInputActions } from "../../../redux/slice/userInputSlice";

const SearchForm = () => {
  const userInput = useSelector((state: RootState) => state.input.userInput);
  const countryList = useSelector(
    (state: RootState) => state.country.countryList
  );
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(true);
  };
  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };
  const userInputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(userInputActions.getUserInput(e.target.value));
  };
  const userInputValidation = () => {
    dispatch(userInputActions.getUserInput(""));
    const index = countryList.findIndex(
      (item) =>
        item.name.common.toLocaleLowerCase() === userInput.toLocaleLowerCase()
    );
    if (userInput.length !== 0 && index === -1) {
      handleClick();
    }
    dispatch(userInputActions.getUserInput(""));
  };
  return (
    <Box className="search_form" sx={{ mt: 20, ml: 15, width: "80%" }}>
      <TextField
        variant="standard"
        onChange={userInputHandler}
        label="Search Country"
        value={userInput}
        onClick={userInputValidation}
      ></TextField>
      <Snackbar open={open} autoHideDuration={1000} onClose={handleClose}>
        <Alert severity="warning">The name is not found in the system!</Alert>
      </Snackbar>
    </Box>
  );
};

export default SearchForm;
