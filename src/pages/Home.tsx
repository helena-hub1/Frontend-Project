import React from "react";
import { useSelector, useDispatch } from "react-redux";

import CountryList from "../components/country/countrylist/CountryList";
import Loading from "../components/loading/Loading";
import SearchHandler from "../components/search/searchhandler/SearchHandler";
import { countryListActions } from "../redux/slice/countrySlice";
import { Appdispatch, RootState } from "../redux/store";

const Home = () => {
  const dispatch = useDispatch<Appdispatch>();
  const isLoading = useSelector((state: RootState) => state.country.isLoading);
  console.log(isLoading, "loading from Home");
  // if (isLoading) {
  //   return (
  //     <div>
  //       <Loading />
  //     </div>
  //   );
  // }
  // if (isLoading) {
  //   return (
  //     <div>
  //       <Loading />
  //     </div>
  //   );
  // }
  return (
    <div>
      <SearchHandler />
    </div>
  );
};

export default Home;
