import React, { useState } from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import Badge from "@mui/material/Badge";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MoreIcon from "@mui/icons-material/MoreVert";
import SvgIcon, { SvgIconProps } from "@mui/material/SvgIcon";
import { useSelector, useDispatch } from "react-redux";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Switch from "@mui/material/Switch";
import { FormControlLabel } from "@mui/material";
import { iconColorActions } from "../../redux/slice/IconColorSlice";

import { RootState } from "../../redux/store";
import { Link } from "react-router-dom";

//MUI home Icon
const HomeIcon = (props: SvgIconProps) => {
  return (
    <SvgIcon {...props}>
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </SvgIcon>
  );
};
const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));
// NavBar color
const styles = {
  customColor: {
    backgroundColor: "darksalmon",
  },
};

const NavBar = () => {
  // Badge state
  const [invisible, setInvisible] = useState(false);
  // Badge visibility handler
  const handleBadgeVisibility = () => {
    setInvisible(!invisible);
  };

  // Get favarite list
  const favoriteList = useSelector(
    (state: RootState) => state.favorite.favoriteList
  );
  // Get Icon state
  const homeIconColor = useSelector(
    (state: RootState) => state.iconColor.homeIconColor
  );
  const favoriteIconColor = useSelector(
    (state: RootState) => state.iconColor.favoriteIconColor
  );
  const dispatch = useDispatch();
  console.log(homeIconColor);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] =
    React.useState<null | HTMLElement>(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    ></Menu>
  );
  // render
  return (
    <Box sx={{ flexGrow: 1, m: 1 }}>
      <AppBar sx={styles.customColor} position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: "none", sm: "block" } }}
          >
            COUNTRY
          </Typography>

          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <IconButton
              size="large"
              aria-label="show Home page"
              color="inherit"
            >
              <Link to="/">
                <HomeIcon
                  sx={{ color: homeIconColor, mr: 3 }}
                  onClick={() => dispatch(iconColorActions.setHomeIconColor())}
                />
              </Link>
            </IconButton>

            <Box sx={{ mt: 1 }}>
              <Badge
                color="secondary"
                invisible={invisible}
                badgeContent={favoriteList.length}
              >
                <Link to="/favorite">
                  <FavoriteIcon
                    sx={{ color: favoriteIconColor }}
                    onClick={() =>
                      dispatch(iconColorActions.setFavoriteIconColor())
                    }
                  />
                </Link>
              </Badge>
              <Switch
                checked={!invisible}
                onChange={handleBadgeVisibility}
                color="warning"
                sx={{ ml: 1 }}
              />
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
    </Box>
  );
};
export default NavBar;
