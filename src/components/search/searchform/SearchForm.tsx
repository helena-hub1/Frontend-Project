import React, { useState, useCallback } from "react";
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
  const [isFound, setIsFound] = useState<Boolean>(false);
  // dispatch
  const dispatch = useDispatch();
  //  userInput handler
  const getUserInputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(userInputActions.getUserInput(e.target.value));
    setIsFound(true);
  };
  // // validation
  // const countryNotFoundHandler = useCallback(() => {
  //   dispatch(userInputActions.getUserInput(""));
  //   if (userInput.length === 0) {
  //     alert("Please enter a country name");
  //   } else {
  //     const index = countryList.findIndex(
  //       (item) => item.name.common === userInput
  //     );
  //     if (index === -1) {
  //       alert("The country name is not found in the system");
  //     }
  //     dispatch(userInputActions.getUserInput(""));
  //   }
  // }, [userInput]);

  //render
  return (
    <Box className="search_form" sx={{ mt: 20, ml: 15, width: "80%" }}>
      <TextField
        variant="standard"
        onChange={getUserInputHandler}
        label="Search Country"
        value={userInput}
        // onBlur={countryNotFoundHandler}
      ></TextField>
    </Box>
  );
};

export default SearchForm;
