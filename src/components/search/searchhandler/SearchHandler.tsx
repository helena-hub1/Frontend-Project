import { useEffect, useState, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";

import { RootState, Appdispatch } from "../../../redux/store";
import Loading from "../../loading/Loading";
import getCountryData from "../../../thunk/country";
import Country from "../../../types/type";
import SearchHandlerItem from "./SearchHandlerItem";
import { userInputActions } from "../../../redux/slice/userInputSlice";

const SearchHandler = () => {
  // state
  const [filteredCountry, setFilteredCountry] = useState<Country[]>([]);
  const userInput = useSelector((state: RootState) => state.input.userInput);
  const isLoading = useSelector((state: RootState) => state.country.isLoading);
  const countryList = useSelector(
    (state: RootState) => state.country.countryList
  );

  //dispatch
  const dispatch = useDispatch<Appdispatch>();

  // manage effect
  useEffect(() => {
    dispatch(getCountryData());
  }, [dispatch]);

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
    <div className="search_handler">
      <TableContainer component={Paper} sx={{ mt: 10, ml: 12, width: "80%" }}>
        <Table
          sx={{ minWidth: 700 }}
          aria-label="customized table"
          className="search-table"
        >
          <TableBody>
            {filteredCountry.map((item, index) => (
              <SearchHandlerItem key={index} item={item} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default SearchHandler;
