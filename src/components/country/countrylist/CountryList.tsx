import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { styled, alpha } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import SvgIcon, { SvgIconProps } from "@mui/material/SvgIcon";
import { Link } from "react-router-dom";

import { Appdispatch, RootState } from "../../../redux/store";
import { useDispatch } from "react-redux/es/exports";
import CountryItem from "../countryitem/CountryItem";
import Country from "../../../types/type";
import "./CountryList.css";

// Prop type
type Prop = {
  result: Country[];
};

const TableHeadStyled = styled(TableHead)`
  &:nth-of-type(odd) {
    background-color: darksalmon;
  }
  &:nth-of-type(even) {
    background-color: rgb(180, 115, 115);
  }
  & > td {
    color: black;
  }
`;
const CountryList = ({ result }: Prop) => {
  // MUI state
  const [open, setOpen] = useState(false);

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
    <TableContainer component={Paper} sx={{ mt: 10, ml: 12, width: "80%" }}>
      <Table
        sx={{ minWidth: 700 }}
        aria-label="customized table"
        className="CountryTable"
      >
        {/* <Table aria-label="simple table"> */}
        <TableHead sx={{ background: "rgb(180, 115, 115)" }}>
          <TableRow>
            <TableCell align="center" sx={{ fontWeight: "bold" }}>
              Flag
            </TableCell>
            <TableCell align="center" sx={{ fontWeight: "bold" }}>
              Name
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
            <TableCell align="right" sx={{ fontWeight: "bold" }}></TableCell>
            <TableCell align="right" sx={{ fontWeight: "bold" }}></TableCell>
          </TableRow>
        </TableHead>
        <TableBody sx={{ width: "100%" }}>
          {sorted.map((item) => (
            <CountryItem key={crypto.randomUUID()} item={item} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default CountryList;
