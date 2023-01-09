import React, { useState, Fragment } from "react";
import { Link } from "react-router-dom";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useSelector, useDispatch } from "react-redux";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import { IconButton, ListItem } from "@mui/material";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { styled } from "@mui/material/styles";

import Country from "../../../types/type";
import { RootState } from "../../../redux/store";
import { favoriteActions } from "../../../redux/slice/favoriteSlice";
import { iconColorActions } from "../../../redux/slice/iconColorSlice";

// type
type Prop = {
  item: Country;
};
// table row color
const TableRowStyled = styled(TableRow)`
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

const CountryItem = ({ item }: Prop) => {
  // state
  const favoriteList = useSelector(
    (state: RootState) => state.favorite.favoriteList
  );
  const favoriteIconColor = useSelector(
    (state: RootState) => state.iconColor.favoriteIconColor
  );
  let isFavorite = favoriteList.some(
    (favitem) => favitem.name.common === item.name.common
  );

  // dispatch
  const dispatch = useDispatch();
  // MUI snackbar state
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(true);
  };
  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };
  // Add favorite
  const AddToFavCountryHandler = () => {
    const index = favoriteList.findIndex(
      (favItem) => favItem.name.common === item.name.common
    );
    if (index !== -1) {
      alert("The country is already in the fav List");
    } else {
      handleClick();
      dispatch(favoriteActions.addFavoriteCountry(item));
      dispatch(iconColorActions.setFavoriteIconColor());
    }
  };
  // render
  return (
    <Fragment>
      <TableRowStyled>
        <TableCell align="center">
          <img src={item.flags.png} height="30" width="50" alt="flag"></img>
        </TableCell>
        <TableCell align="center">{item.name.common}</TableCell>
        <TableCell align="center">{item.region}</TableCell>
        <TableCell align="center">{item.population}</TableCell>
        <TableCell align="center">
          {item.languages
            ? Object.values(item.languages).map((item, index) => {
                return (
                  <ListItem
                    key={index}
                    sx={{
                      padding: 0,
                      listStyleType: "disc",
                      display: "list-item",
                    }}
                  >
                    {item}
                  </ListItem>
                );
              })
            : null}
        </TableCell>
        <TableCell align="right">
          <IconButton
            sx={{ color: isFavorite ? favoriteIconColor : "white" }}
            onClick={AddToFavCountryHandler}
          >
            <FavoriteIcon />
          </IconButton>
          <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
            <Alert severity="warning">
              A country just added to the favorite page!
            </Alert>
          </Snackbar>
        </TableCell>
        <TableCell align="right">
          <Link to={`/name/${item.name.common}`}>
            <KeyboardArrowRightIcon sx={{ color: "white" }} />
          </Link>
        </TableCell>
      </TableRowStyled>
    </Fragment>
  );
};
export default CountryItem;
