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
import CountryItem from "../countryItem/CountryItem";
import Loading from "../../loading/Loading";
import { countryListActions } from "src/redux/slice/countrySlice";

const CountryList = () => {
  // state
  const countryList = useSelector(
    (state: RootState) => state.country.countryList
  );
  const isLoading = useSelector((state: RootState) => state.country.isLoading);
  const [orderDirection, setOrderDirection] = useState<"asc" | "desc">("asc");

  const dispatch = useDispatch<Appdispatch>();

  useEffect(() => {
    dispatch(getCountryData());
  }, [dispatch]);
  // sorting ascending
  const onAscendingSortHandler = () => {
    dispatch(countryListActions.sortAscending());
    setOrderDirection(orderDirection === "asc" ? "desc" : "asc");
  };
  // soring descending
  const onDecendingSortHandler = () => {
    dispatch(countryListActions.sortDescending());
    setOrderDirection(orderDirection === "asc" ? "desc" : "asc");
  };
  // loading
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
      <TableContainer component={Paper} sx={{ mt: 4, ml: 13, width: "80%" }}>
        <Table
          sx={{ minWidth: 700 }}
          aria-label="customized table"
          className="search-table"
        >
          <TableHead sx={{ background: "rgb(180, 115, 115)" }}>
            <TableRow>
              <TableCell sx={{ fontWeight: "bold" }}>Flag</TableCell>
              <TableCell
                onClick={
                  orderDirection === "asc"
                    ? onAscendingSortHandler
                    : onDecendingSortHandler
                }
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
            {countryList.map((item, index) => (
              <CountryItem key={index} item={item} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default CountryList;
