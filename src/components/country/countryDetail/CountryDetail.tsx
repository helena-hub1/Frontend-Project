import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Params, useParams } from "react-router-dom";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import { red } from "@mui/material/colors";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import PlaceIcon from "@mui/icons-material/Place";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { ListItem } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Link from "@mui/material/Link";

import { RootState, Appdispatch } from "../../../redux/store";
import getCountryDetailData from "../../../thunk/countryDetail";

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

const CountryDetail = () => {
  // state
  const countryDetail = useSelector(
    (state: RootState) => state.countryDetail.countryDetail
  );
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const dispatch = useDispatch<Appdispatch>();
  // useParams
  const { name } = useParams<Params>();
  useEffect(() => {
    dispatch(getCountryDetailData(name));
  }, [dispatch, name]);
  // render
  return (
    <div className="country_detail">
      {countryDetail.map((item, index) => {
        return (
          <Card
            key={index}
            sx={{ maxWidth: 345, width: "80%", ml: 40, mt: 10 }}
          >
            <CardHeader
              avatar={
                <Avatar sx={{ bgcolor: red[400] }} aria-label="country">
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
                region and
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
                </Box>
                <Box component="span">&deg;W</Box>, this country has population
                of
                <Box component="span" sx={{ color: "blue", ml: 1, mr: 1 }}>
                  {item.population}
                </Box>
                and it has the independent, according to CIA World Factbook.
              </Typography>
              <Typography
                component="div"
                variant="body2"
                color="text.secondary"
              >
                <Box sx={{ textAlign: "center" }}>Languages:</Box>
                {item.languages
                  ? Object.values(item.languages).map((item, index) => {
                      return (
                        <ListItem
                          key={index}
                          sx={{
                            padding: 0,
                            listStyleType: "disc",
                            display: "list-item",
                            textAlign: "justify",
                          }}
                        >
                          {item}
                        </ListItem>
                      );
                    })
                  : null}
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <IconButton aria-label="map" sx={{ color: "orange" }}>
                <Link href={item.maps.googleMaps} target="_blank">
                  <PlaceIcon />
                </Link>
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
                  <Box component="span">Car sign:</Box>
                  {item.car.signs}
                </Typography>
                <Typography variant="body2">
                  <Box component="span">Car side:</Box>
                  {item.car.side}
                </Typography>
                <Typography variant="body2">
                  <Box component="span">Continents:</Box>
                  {item.continents}
                </Typography>
                <Typography variant="body2">
                  <Box component="span">Time zone:</Box>
                  {item.timezones}
                </Typography>
              </CardContent>
            </Collapse>
          </Card>
        );
      })}
    </div>
  );
};

export default CountryDetail;
