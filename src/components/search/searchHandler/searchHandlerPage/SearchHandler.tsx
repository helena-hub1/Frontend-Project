import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";

import { Appdispatch, RootState } from "../../../../redux/store";
import Country from "../../../../types/type";
import SearchHandlerItem from "../searchHandlerItem/SearchHandlerItem";
import getCountryData from "../../../../thunk/country";

const SearchHandler = () => {
  // state
  const [filteredCountry, setFilteredCountry] = useState<Country[]>([]);
  const userInput = useSelector((state: RootState) => state.input.userInput);
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
  }, [userInput, countryList]);
  // render
  return (
    <div className="search_handler">
      <TableContainer component={Paper} sx={{ mt: 5, ml: 14, width: "80%" }}>
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
