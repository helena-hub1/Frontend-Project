import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";

import { RootState, Appdispatch } from "../../../../redux/store";
import getCountryData from "../../../../thunk/country";
import Country from "../../../../types/type";
import SearchHandlerItem from "../searchhandleritem/SearchHandlerItem";

const SearchHandler = () => {
  const [filteredCountry, setFilteredCountry] = useState<Country[]>([]);
  const userInput = useSelector((state: RootState) => state.input.userInput);
  const countryList = useSelector(
    (state: RootState) => state.country.countryList
  );

  const dispatch = useDispatch<Appdispatch>();

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
