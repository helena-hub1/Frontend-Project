import React, { useState } from "react";
import { TextField } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../../redux/store";

import Country from "../../../types/type";
import { userInputActions } from "../../../redux/slice/userInputSlice";
import SearchHandler from "../searchhandler/SearchHandler";

const SearchForm = () => {
  // use the state from store
  const userInput = useSelector((state: RootState) => state.input.userInput);
  const dispatch = useDispatch();
  // userInput state

  //   get user input
  const getUserInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(userInputActions.getUserInput(e.target.value));
  };
  console.log(userInput, "input from form");
  //   onSearch handler
  return (
    <div>
      <TextField
        variant="standard"
        onChange={getUserInput}
        label="Search"
      ></TextField>
      {/* {filteredCountry.map((item) => {
        return <p>{item.name.common}</p>;
      })} */}
    </div>
  );
};

export default SearchForm;
