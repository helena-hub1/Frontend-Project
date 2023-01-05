import React, { useState } from "react";
import { Link } from "react-router-dom";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useSelector, useDispatch } from "react-redux";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import { ListItem, TableBody } from "@mui/material";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import Typography from "@mui/material/Typography";
import Table from "@mui/material/Table";

import TableHead from "@mui/material/TableHead";

import Country from "../../../types/type";
import { RootState } from "../../../redux/store";
import { favoriteActions } from "../../../redux/slice/favoriteSlice";
import "./CountryItem.css";

// Prop type
type Prop = {
  item: Country;
};
const CountryItem = ({ item }: Prop) => {
  // get the favoriteList from store
  const favoriteList = useSelector(
    (state: RootState) => state.favorite.favoriteList
  );
  // favoriteColor state
  const [favoriteColor, setFavoriteColor] = useState("black");
  // MUI snack bar state
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

  const [openExpand, setOpenExpand] = useState(false);

  const dispatch = useDispatch();
  // Add to favoriteCountryList
  const AddToFavoriteHandler = () => {
    dispatch(favoriteActions.addFavorite(item));
    setFavoriteColor("red");
  };
  // render
  return (
    <React.Fragment>
      <TableRow>
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
          <Snackbar
            open={openExpand}
            autoHideDuration={6000}
            onClose={handleClose}
          >
            <Alert severity="warning">The title has already been added!</Alert>
          </Snackbar>
        </TableCell>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? (
              <Link to={`/name/${item.name.common}`}>
                <KeyboardArrowRightIcon sx={{ color: "blue" }} />
              </Link>
            ) : (
              <KeyboardArrowLeftIcon />
            )}
          </IconButton>
        </TableCell>
      </TableRow>
      {/* Expand content */}
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="body2" gutterBottom component="div">
                Click the arrow for Country Detail!
              </Typography>
              {/* <Table size="small" aria-label="countryhistory">
                <TableHead>
                  <TableRow>
                    <TableCell>Flag</TableCell>
                    <TableCell align="right">Name</TableCell>
                    <TableCell align="right">Population</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow key={item.name.common}>
                    <TableCell component="th" scope="row">
                      <img src={item.flags.png}></img>
                    </TableCell>
                    <TableCell>{item.name.common}</TableCell>
                  </TableRow>
                </TableBody>
              </Table> */}
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
};
export default CountryItem;
