import { Routes, Route } from "react-router";
import { ThemeProvider, createTheme } from "@mui/material/styles";

import CountryDetail from "./components/country/countrydetail/CountryDetail";
import Countries from "./components/country/countrylist/CountryList";
import NavBar from "./components/navbar/NavBar";
import FootBar from "./components/footbar/FootBar";
import Favorite from "./pages/Favorite";
import Home from "./pages/Home";
import "./App.css";

const App = () => {
  // theme
  const theme = createTheme({
    typography: {
      fontFamily: ["Nunito", "sans-serif"].join(","),
      fontSize: 16,
    },
  });
  // render
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <NavBar />
        <Routes>
          <Route path="" element={<Home />}></Route>
          <Route path="/favorite" element={<Favorite />}></Route>
          <Route path="/countries" element={<Countries />}></Route>
          <Route path="name/:name" element={<CountryDetail />}></Route>
        </Routes>
        <FootBar />
      </ThemeProvider>
    </div>
  );
};

export default App;
