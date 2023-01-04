import React, { useState } from "react";
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

import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";

import Country from "../../../types/type";
// Prop type
type Prop = {
  favoriteItem: Country;
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
const FavoriteItem = ({ favoriteItem }: Prop) => {
  // MUI state
  const [expanded, setExpanded] = useState(false);
  //   MUI handleclick function

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  return (
    <div>
      <Card sx={{ maxWidth: 345 }}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
              {favoriteItem.name.common.charAt(0)}
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title={favoriteItem.name.common.toLocaleUpperCase()}
          subheader={favoriteItem.capital[0]}
        />
        <CardMedia
          component="img"
          height="100"
          image={favoriteItem.flags.png}
          alt="flag"
        />
        <CardContent>
          <Typography component="div">
            The country belongs to
            <Box sx={{ fontWeight: "bold", m: 1, color: "blue" }}>
              {favoriteItem.region}
            </Box>
            region and{" "}
            <Box sx={{ fontWeight: "bold", m: 1, color: "blue" }}>
              {favoriteItem.subregion}
            </Box>
          </Typography>
          <Typography variant="body2" color="text.secondary" component="div">
            Located at the{" "}
            <Box sx={{ fontWeight: "light", m: 1 }}>{favoriteItem.lating}</Box>
            oN and{" "}
            <Box sx={{ fontWeight: "light", m: 1 }}>
              {favoriteItem.lating}
            </Box>{" "}
            oW, this country has population of {favoriteItem.population} and it
            has the independent, according to CIA World Factbook.
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="share">
            <MapIcon />
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
            <Typography paragraph>name:</Typography>
            <Typography>{favoriteItem.name.common}</Typography>
          </CardContent>
        </Collapse>
      </Card>
    </div>
  );
};

export default FavoriteItem;
