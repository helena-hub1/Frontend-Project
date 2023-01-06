import React, { useState, Fragment } from "react";
import { Link } from "react-router-dom";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useSelector, useDispatch } from "react-redux";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import { ListItem } from "@mui/material";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { styled } from "@mui/material/styles";
import SvgIcon, { SvgIconProps } from "@mui/material/SvgIcon";

import Country from "../../../types/type";
import { RootState } from "../../../redux/store";
import { favoriteActions } from "../../../redux/slice/favoriteSlice";
import "./CountryItem.css";

// Prop type
type Prop = {
  item: Country;
};
// HomeIcon
const HomeIcon = (props: SvgIconProps) => {
  return (
    <SvgIcon {...props}>
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </SvgIcon>
  );
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
  console.log(item);
  // get the favoriteList from store
  const favoriteList = useSelector(
    (state: RootState) => state.favorite.favoriteList
  );
  // favoriteColor state
  const [favoriteColor, setFavoriteColor] = useState("black");
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
  // MUI
  // Detail Icon state
  const [openExpand, setOpenExpand] = useState(false);

  const dispatch = useDispatch();
  // Add to favoriteCountryList
  const AddToFavoriteHandler = () => {
    const index = favoriteList.findIndex(
      (favItem) => favItem.name.common === item.name.common
    );
    if (index !== -1) {
      handleClick();
    } else {
      dispatch(favoriteActions.addFavorite(item));
      setFavoriteColor("red");
    }
  };
  // render
  return (
    <Fragment>
      <TableRowStyled>
        <TableCell align="center">
          <img src={item.flags.png} height="30" alt="flag"></img>
        </TableCell>
        <TableCell align="center">{item.name.common}</TableCell>
        <TableCell align="center">{item.region}</TableCell>
        <TableCell align="center">{item.population}</TableCell>
        <TableCell align="center">
          {item.languages
            ? Object.values(item.languages).map((item, index) => {
                return (
                  <ListItem
                    sx={{
                      padding: 0,
                      // textAlign: "center",
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
          <FavoriteIcon
            onClick={AddToFavoriteHandler}
            sx={{ color: favoriteColor }}
          />
          <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
            <Alert severity="warning">
              This country has already been added to the favorite page!
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
