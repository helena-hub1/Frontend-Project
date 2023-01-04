import React, { useState } from "react";
import { Link } from "react-router-dom";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useSelector, useDispatch } from "react-redux";

import Country from "../../../types/type";
import { RootState } from "../../../redux/store";
import { favoriteActions } from "../../../redux/slice/favoriteSlice";

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
  const [favoriteColor, setFavoriteColor] = useState("grey");

  const dispatch = useDispatch();
  // Add to favoriteCountryList
  const AddToFavoriteHandler = () => {
    dispatch(favoriteActions.addFavorite(item));
    setFavoriteColor("red");
  };
  // render
  return (
    <div>
      <Link to={`/name/${item.name.common}`}>{item.name.common}</Link>
      {/* <Link to="/">Home</Link> */}
      population:{item.population}
      {item.languages
        ? Object.values(item.languages).map((item, index) => {
            return (
              <ul key={index}>
                <li>{item}</li>
              </ul>
            );
          })
        : null}
      <img src={item.flags.png} alt="flag" height="50px" width="100px" />
      <IconButton
        aria-label="add to favorites"
        onClick={AddToFavoriteHandler}
        sx={{ color: favoriteColor }}
      >
        <FavoriteIcon />
      </IconButton>
    </div>
  );
};
export default CountryItem;
