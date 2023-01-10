import { Appdispatch } from "src/redux/store";
import { countryListActions } from "src/redux/slice/countrySlice";
import url from "src/Utils/url";

// fetch data
const getCountryData = () => {
  return async (dispatch: Appdispatch) => {
    dispatch(countryListActions.isPending());
    const response = await fetch(url);
    const countryData = await response.json();
    dispatch(countryListActions.getCountryData(countryData));
  };
};
export default getCountryData;
