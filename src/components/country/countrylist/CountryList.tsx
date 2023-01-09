import { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import TableSortLabel from "@mui/material/TableSortLabel";
import { useDispatch, useSelector } from "react-redux";

import getCountryData from "../../../thunk/country";
import { RootState, Appdispatch } from "../../../redux/store";
import CountryItem from "../countryitem/CountryItem";
import Loading from "../../loading/Loading";
import Country from "../../../types/type";
// type
type OrderBy = "asc" | "desc";

const CountryList = () => {
  //  state
  const countryList = useSelector(
    (state: RootState) => state.country.countryList
  );
  const isLoading = useSelector((state: RootState) => state.country.isLoading);
  const [sortCountryData, setSortCountryData] =
    useState<Country[]>(countryList);
  const [orderDirection, setOrderDirection] = useState<"asc" | "desc">("asc");

  //dispatch
  const dispatch = useDispatch<Appdispatch>();

  // get country data
  useEffect(() => {
    dispatch(getCountryData());
  }, [dispatch]);

  // sort logic
  const sortData = (countryData: Country[], orderBy: OrderBy) => {
    // switch
    switch (orderBy) {
      case "asc":
      default:
        return countryData.sort((a, b) =>
          a.name.common > b.name.common
            ? 1
            : b.name.common > a.name.common
            ? -1
            : 0
        );
      case "desc":
        return countryData.sort((a, b) =>
          a.name.common < b.name.common
            ? 1
            : b.name.common < a.name.common
            ? -1
            : 0
        );
    }
  };
  const dataForSort = [...countryList];
  const onSortClickHandler = () => {
    setSortCountryData(sortData(dataForSort, orderDirection));
    setOrderDirection(orderDirection === "asc" ? "desc" : "asc");
  };
  //Loading
  if (isLoading) {
    return (
      <div>
        <Loading />
      </div>
    );
  }
  // render
  return (
    <div className="country_list">
      <Typography variant="h5" sx={{ textAlign: "center", mt: 14 }}>
        Country List
      </Typography>
      <TableContainer component={Paper} sx={{ mt: 4, ml: 12, width: "80%" }}>
        <Table
          sx={{ minWidth: 700 }}
          aria-label="customized table"
          className="search-table"
        >
          <TableHead sx={{ background: "rgb(180, 115, 115)" }}>
            <TableRow>
              <TableCell sx={{ fontWeight: "bold" }}>Flag</TableCell>
              <TableCell
                onClick={() => {
                  onSortClickHandler();
                }}
                align="center"
                sx={{ fontWeight: "bold" }}
              >
                <TableSortLabel active={true} direction={orderDirection}>
                  Name
                </TableSortLabel>
              </TableCell>
              <TableCell align="center" sx={{ fontWeight: "bold" }}>
                Region
              </TableCell>
              <TableCell align="center" sx={{ fontWeight: "bold" }}>
                Population
              </TableCell>
              <TableCell align="left" sx={{ fontWeight: "bold" }}>
                Languages
              </TableCell>
              <TableCell align="right"></TableCell>
              <TableCell align="right"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {sortCountryData.map((item, index) => (
              <CountryItem key={index} item={item} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default CountryList;
