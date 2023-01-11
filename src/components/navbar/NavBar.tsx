import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Badge from "@mui/material/Badge";
import MenuIcon from "@mui/icons-material/Menu";
import SvgIcon, { SvgIconProps } from "@mui/material/SvgIcon";
import { useSelector } from "react-redux";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Switch from "@mui/material/Switch";
import LanguageIcon from "@mui/icons-material/Language";
import { Link } from "react-router-dom";

import { RootState } from "../../redux/store";

//MUI home icon
const HomeIcon = (props: SvgIconProps) => {
  return (
    <SvgIcon {...props}>
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </SvgIcon>
  );
};
// color custom
const styles = {
  customColor: {
    backgroundColor: "darksalmon",
  },
};

const NavBar = () => {
  // state
  const favoriteList = useSelector(
    (state: RootState) => state.favorite.favoriteList
  );
  // Badge state
  const [invisible, setInvisible] = useState(false);
  // Badge visibility handler
  const handleBadgeVisibility = () => {
    setInvisible(!invisible);
  };
  // render
  return (
    <Box className="nav_bar" sx={{ flexGrow: 1, m: 1 }}>
      <AppBar sx={styles.customColor} position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
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
                <HomeIcon sx={{ color: "white" }} />
              </Link>
            </IconButton>
            <IconButton>
              <Link to="/countries">
                <LanguageIcon sx={{ color: "white" }} />
              </Link>
            </IconButton>
            <Box sx={{ mt: 1.4, ml: 1 }}>
              <Badge
                color="warning"
                invisible={invisible}
                badgeContent={favoriteList.length}
              >
                <Link to="/favorite">
                  <FavoriteIcon sx={{ color: "white" }} />
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
    </Box>
  );
};
export default NavBar;
