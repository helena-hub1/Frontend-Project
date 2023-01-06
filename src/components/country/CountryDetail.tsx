import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState, Appdispatch } from "../../redux/store";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import SvgIcon, { SvgIconProps } from "@mui/material/SvgIcon";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import MapIcon from "@mui/icons-material/Map";
import { red } from "@mui/material/colors";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import PlaceIcon from "@mui/icons-material/Place";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";

import getCountryData from "../../thunk/country";
import Country from "../../types/type";

// Home Icon
const HomeIcon = (props: SvgIconProps) => {
  return (
    <SvgIcon {...props}>
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </SvgIcon>
  );
};

// MUI expandmore function
type ExpandMoreProps = IconButtonProps & {
  expand: boolean;
};

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));
function CountryDetail() {
  // MUI state
  const [expanded, setExpanded] = useState(false);
  //   MUI handleclick function

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const [countryDetail, setCountryDetail] = useState<Country[]>([]);
  //Way 1 might be easier
  const name = useParams(); // it gives an object what we wrote in the route and a value for it
  console.log(name, "my name");
  // OR distructuring we are taking the id from app,js
  //Second way prefer Andrea
  // const { random } = useParams();
  const url = `https://restcountries.com/v3.1/name/${name.name}`;
  console.log(url, "my url");
  //useState and useEffect
  const dispatch = useDispatch<Appdispatch>();

  const getData = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setCountryDetail(data);
  };
  // manage the effect
  useEffect(() => {
    getData();
  }, [url]);
  console.log(countryDetail, "countrylist from Detail");
  return (
    <div>
      {countryDetail.map((item) => {
        return (
          <Card sx={{ maxWidth: 345, width: "80%", ml: 40, mt: 3 }}>
            <CardHeader
              avatar={
                <Avatar sx={{ bgcolor: red[500] }} aria-label="country">
                  {item.name.common.charAt(0)}
                </Avatar>
              }
              action={
                <IconButton aria-label="settings">
                  <MoreVertIcon />
                </IconButton>
              }
              title={item.name.common.toLocaleUpperCase()}
              subheader={item.capital[0]}
            />
            <CardMedia
              component="img"
              height="100"
              image={item.flags.png}
              alt="flag"
              sx={{ ml: 4, width: "80%" }}
            />
            <CardContent>
              <Typography
                component="div"
                variant="body2"
                color="text.secondary"
              >
                The country belongs to
                <Box
                  component="span"
                  sx={{
                    m: 1,
                    color: "blue",
                  }}
                >
                  {item.region}
                </Box>
                region and{" "}
                <Box
                  component="span"
                  sx={{
                    m: 1,
                    color: "blue",
                  }}
                >
                  {item.subregion}
                </Box>
                subregion.
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                component="div"
              >
                Located at the
                <Box component="span" sx={{ color: "blue", ml: 1 }}>
                  {item.latlng[0]}
                </Box>
                <Box component="span">&deg;N</Box> and
                <Box
                  component="span"
                  sx={{
                    color: "blue",
                    ml: 1,
                  }}
                >
                  {item.latlng[1]}
                </Box>{" "}
                <Box component="span">&deg;W</Box>, this country has population
                of{" "}
                <Box component="span" sx={{ color: "blue", ml: 1 }}>
                  {item.population}
                </Box>
                and it has the independent, according to CIA World Factbook.
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <IconButton aria-label="share">
                <PlaceIcon />
              </IconButton>
              <ExpandMore
                expand={expanded}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="show more"
              >
                <ExpandMoreIcon />
              </ExpandMore>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
              <CardContent>
                <Typography variant="body2">
                  <Box component="span" fontWeight="bold">
                    More information
                  </Box>
                </Typography>
                <Typography variant="body2">
                  <Box component="span" sx={{ fontWeight: "bold" }}>
                    Car sign:
                  </Box>
                  {item.car.signs}
                </Typography>
                <Typography variant="body2">
                  <Box component="span" sx={{ fontWeight: "bold" }}>
                    Car side:
                  </Box>
                  {item.car.side}
                </Typography>
                <Typography variant="body2">
                  <Box component="span" sx={{ fontWeight: "bold" }}>
                    Continents:
                  </Box>
                  {item.continents}
                </Typography>
                <Typography variant="body2">
                  <Box component="span" sx={{ fontWeight: "bold" }}>
                    Time zone:
                  </Box>
                  {item.timezones}
                </Typography>
              </CardContent>
            </Collapse>
          </Card>
        );
      })}
    </div>
  );
}

export default CountryDetail;
