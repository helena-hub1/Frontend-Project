import React from "react";
import { Link } from "react-router-dom";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import SvgIcon, { SvgIconProps } from "@mui/material/SvgIcon";
import { pink, red } from "@mui/material/colors";
import Badge from "@mui/material/Badge";
import { useSelector } from "react-redux";

import { RootState } from "../../redux/store";

//MUI home Icon
const HomeIcon = (props: SvgIconProps) => {
  return (
    <SvgIcon {...props}>
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </SvgIcon>
  );
};
const NavBar = () => {
  const favoriteList = useSelector(
    (state: RootState) => state.favorite.favoriteList
  );
  // render
  return (
    <div>
      <Link to="/">
        <HomeIcon />
      </Link>
      <Badge badgeContent={favoriteList.length} sx={{ color: red[500] }}>
        <Link to="/favorite">
          <FavoriteIcon />
        </Link>
      </Badge>
    </div>
  );
};

export default NavBar;
