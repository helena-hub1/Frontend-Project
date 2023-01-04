import React, { useEffect } from "react";
import { useSelector } from "react-redux";

import { Appdispatch, RootState } from "../../../redux/store";
import { useDispatch } from "react-redux/es/exports";
import CountryItem from "../countryitem/CountryItem";
import Country from "../../../types/type";

// Prop type
type Prop = {
  result: Country[];
};
const CountryList = ({ result }: Prop) => {
  // Sorting
  const sortedCountry = [...result];
  const sorted = sortedCountry.sort((a, b) => {
    if (a.name.common > b.name.common) {
      return 1;
    }
    if (a.name.common < b.name.common) {
      return -1;
    }
    return 0;
  });
  return (
    <div>
      {sorted.map((item, index) => (
        <CountryItem key={index} item={item} />
      ))}
    </div>
  );
};

export default CountryList;
