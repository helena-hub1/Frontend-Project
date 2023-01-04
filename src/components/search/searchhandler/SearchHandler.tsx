import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { RootState, Appdispatch } from "../../../redux/store";
import Loading from "../../loading/Loading";

import getCountryData from "../../../thunk/country";
import Country from "../../../types/type";
import SearchForm from "../searchform/SearchForm";
import CountryList from "../../country/countrylist/CountryList";
import { countryListActions } from "../../../redux/slice/countrySlice";

const SearchHandler = () => {
  // get userInput from store
  const userInput = useSelector((state: RootState) => state.input.userInput);
  const isLoading = useSelector((state: RootState) => state.country.isLoading);
  console.log(isLoading, "loading from searchhandler");
  //dispact action
  const dispatch = useDispatch<Appdispatch>();

  // manage the effect

  useEffect(() => {
    dispatch(getCountryData());
  }, [dispatch]);

  // get CountryList from store
  const countryList = useSelector(
    (state: RootState) => state.country.countryList
  );

  // filltered product state
  const [filteredCountry, setFilteredCountry] = useState<Country[]>([]);
  let result;

  if (userInput === "") {
    result = countryList;
  } else {
    result = filteredCountry;
  }

  // Use effect to handle the userInput
  useEffect(() => {
    const filtered = countryList.filter(
      (item) =>
        item.name.common.toLocaleLowerCase() === userInput.toLocaleLowerCase()
    );
    setFilteredCountry(filtered);
  }, [userInput]);

  // render
  if (isLoading) {
    return (
      <div>
        <Loading />
      </div>
    );
  }
  return (
    <div>
      <CountryList result={result} />
    </div>
  );
};

export default SearchHandler;
