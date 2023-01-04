import { Appdispatch, RootState } from "../redux/store";
import { useState } from "react";

import { countryListActions } from "../redux/slice/countrySlice";
import url from "../Utils/url";
import { useDispatch, useSelector } from "react-redux";
import { delay } from "@reduxjs/toolkit/dist/utils";

const getCountryData = () => {
  return async (dispatch: Appdispatch) => {
    // fetch data
    dispatch(countryListActions.isPending());
    const response = await fetch(url);
    const countryData = await response.json();
    dispatch(countryListActions.getCountryData(countryData));

    // finally {
    //   dispatch(countryListActions.isPending(false));
    // }
  };
};
export default getCountryData;
