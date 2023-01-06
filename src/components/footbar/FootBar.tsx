import React from "react";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import SvgIcon, { SvgIconProps } from "@mui/material/SvgIcon";
import { pink, red } from "@mui/material/colors";
import Badge from "@mui/material/Badge";
import { useSelector } from "react-redux";
import MenuIcon from "@mui/icons-material/Menu";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import { Link } from "react-router-dom";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import MoreIcon from "@mui/icons-material/MoreVert";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";

import { RootState } from "../../redux/store";
import "./FootBar.css";

// Footbar custom color
const styles = {
  customColor: {
    backgroundColor: "darksalmon",
  },
};
const FootBar = () => {
  return (
    // <Box
    //   sx={{
    //     flexGrow: 1,
    //     m: 1,
    //     position: "sticky",
    //     alignItems: "center",
    //     background: "yellow",

    //   }}
    // >
    <Box sx={{ flexGrow: 1, m: 1 }}>
      <Box style={{ width: "40px", height: "40px" }}></Box>

      <AppBar
        sx={styles.customColor}
        position="relative"
        // style={{ marginTop: "543px", width: "70%", marginRight: "40px" }}
      >
        <Toolbar>
          <Typography
            variant="body2"
            component="div"
            sx={{
              alignContent: "center",
              ml: 10,
              width: "80%",
              fontStyle: "italic",
            }}
          >
            Copyright &copy; 2023, my Front End Project
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default FootBar;
