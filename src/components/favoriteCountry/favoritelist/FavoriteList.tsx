import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import Typography from "@mui/material/Typography";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Grid } from "@mui/material";

import FavoriteItem from "../favoriteitem/FavoriteItem";

const FavoriteList = () => {
  const favoriteList = useSelector(
    (state: RootState) => state.favorite.favoriteList
  );
  // console.log(favoriteList, "from faavoritelist");
  return (
    <div>
      {favoriteList.map((favoriteItem, index) => {
        return <FavoriteItem key={index} favoriteItem={favoriteItem} />;
      })}
    </div>
  );
};

export default FavoriteList;
