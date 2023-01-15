import { Appdispatch } from "../redux/store";
import { countryListActions } from "../redux/slice/countrySlice";
import url from "../Utils/url";

const getCountryData = () => {
  return async (dispatch: Appdispatch) => {
    dispatch(countryListActions.isPending());
    const response = await fetch(url);
    const countryData = await response.json();
    dispatch(countryListActions.getCountryData(countryData));
  };
};

export default getCountryData;
