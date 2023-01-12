import { Appdispatch } from "../redux/store";
import { countryDetailActions } from "./../redux/slice/countryDetailSlice";

const getCountryDetailData = (name: string | undefined) => {
  const url = `https://restcountries.com/v3.1/name/${name}`;
  return async (dispatch: Appdispatch) => {
    const response = await fetch(url);
    const countryDetailData = await response.json();
    dispatch(countryDetailActions.getCountryDetail(countryDetailData));
  };
};

export default getCountryDetailData;
