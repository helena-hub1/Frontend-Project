import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

const Loading = () => {
  return (
    <div className="loader">
      <Box sx={{ ml: 15, mt: 20, width: "80%" }}>
        Loading....
        <CircularProgress />
      </Box>
    </div>
  );
};
export default Loading;
