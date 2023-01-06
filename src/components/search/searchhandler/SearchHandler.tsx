import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { RootState, Appdispatch } from "../../../redux/store";
import Loading from "../../loading/Loading";
import getCountryData from "../../../thunk/country";
import Country from "../../../types/type";
import CountryList from "../../country/countrylist/CountryList";

const SearchHandler = () => {
  // state
  const [filteredCountry, setFilteredCountry] = useState<Country[]>([]);
  const userInput = useSelector((state: RootState) => state.input.userInput);
  const isLoading = useSelector((state: RootState) => state.country.isLoading);
  const countryList = useSelector(
    (state: RootState) => state.country.countryList
  );
  console.log(isLoading, "loading from searchhandler");
  //dispact
  const dispatch = useDispatch<Appdispatch>();

  // manage the effect
  useEffect(() => {
    dispatch(getCountryData());
  }, [dispatch]);

  // search logic
  useEffect(() => {
    const filtered = countryList.filter(
      (item) =>
        item.name.common.toLocaleLowerCase() === userInput.toLocaleLowerCase()
    );
    setFilteredCountry(filtered);
  }, [userInput]);

  let result;
  if (userInput === "") {
    result = countryList;
  } else {
    result = filteredCountry;
  }
  // render
  if (isLoading) {
    return (
      <div>
        <Loading />
      </div>
    );
  }
  // render
  return (
    <div>
      <CountryList result={result} />
    </div>
  );
};

export default SearchHandler;
