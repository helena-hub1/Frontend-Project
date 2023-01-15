import { Routes, Route } from "react-router";

import CountryDetail from "./components/country/countryDetail/CountryDetail";
import Countries from "./pages/countries/Countries";
import NavBar from "./components/navbar/NavBar";
import FootBar from "./components/footbar/FootBar";
import Favorite from "./pages/favorite/Favorite";
import Home from "./pages/home/Home";
import "./App.css";

const App = () => {
  // render
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="" element={<Home />}></Route>
        <Route path="/favorite" element={<Favorite />}></Route>
        <Route path="/countries" element={<Countries />}></Route>
        <Route path="/countries/name/:name" element={<CountryDetail />}></Route>
      </Routes>
      <FootBar />
    </div>
  );
};

export default App;
