import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

const styles = {
  customColor: {
    backgroundColor: "darksalmon",
  },
};
const FootBar = () => {
  return (
    <Box className="foot_bar" sx={{ flexGrow: 1, m: 1 }}>
      <AppBar
        sx={styles.customColor}
        position="sticky"
        style={{
          marginTop: "500px",
        }}
      >
        <Toolbar>
          <Typography
            variant="body2"
            component="div"
            sx={{
              alignContent: "center",
              ml: 12,
              width: "80%",
              fontStyle: "italic",
            }}
          >
            Copyright &copy; 2023, Helen @ Integrify, Front End Final Project.
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default FootBar;
