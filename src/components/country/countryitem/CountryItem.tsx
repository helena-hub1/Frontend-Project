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

type Prop = {
  item: Country;
};
const StyledTableRow = styled(TableRow)`
  &:nth-of-type(odd) {
    background-color: darksalmon;
  }
  &:nth-of-type(even) {
    background-color: rgb(180, 115, 115);
  }
`;
const CountryItem = ({ item }: Prop) => {
  const favoriteList = useSelector(
    (state: RootState) => state.favorite.favoriteList
  );
  const dispatch = useDispatch();
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

  const isFavorite = favoriteList.some(
    (favitem) => favitem.name.common === item.name.common
  );
  const addToFavCountryHandler = () => {
    dispatch(favoriteActions.addFavoriteCountry(item));
    handleClick();
  };
  const removeFavCountryHandler = () => {
    dispatch(favoriteActions.removeFavriteCountry(item));
    handleClick();
  };
  return (
    <Fragment>
      <StyledTableRow>
        <TableCell align="center">
          <img src={item.flags.png} height="50px" width="70px" alt="flag"></img>
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
            sx={{ color: isFavorite ? "red" : "white" }}
            onClick={
              isFavorite ? removeFavCountryHandler : addToFavCountryHandler
            }
          >
            <FavoriteIcon />
          </IconButton>
          {isFavorite ? (
            <Snackbar open={open} autoHideDuration={1000} onClose={handleClose}>
              <Alert severity="success">
                {item.name.common} is added to the favorite page!
              </Alert>
            </Snackbar>
          ) : (
            <Snackbar open={open} autoHideDuration={1000} onClose={handleClose}>
              <Alert severity="warning">
                {item.name.common} is removed from favorite list!
              </Alert>
            </Snackbar>
          )}
        </TableCell>
        <TableCell align="right">
          <Link to={`./name/${item.name.common}`}>
            <KeyboardArrowRightIcon sx={{ color: "white" }} />
          </Link>
        </TableCell>
      </StyledTableRow>
    </Fragment>
  );
};
export default CountryItem;
