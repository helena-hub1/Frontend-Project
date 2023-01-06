import React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

const Loading = () => {
  // render
  return (
    <Box sx={{ ml: 10, mt: 3, width: "80%" }}>
      Loading....
      <CircularProgress />
    </Box>
  );
};

export default Loading;
