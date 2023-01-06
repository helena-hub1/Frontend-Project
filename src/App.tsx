import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router";

import "./App.css";
import CountryList from "./components/country/countrylist/CountryList";
import NavBar from "./components/navbar/NavBar";
import FooterBar from "./components/footbar/FootBar";
import Favorite from "./pages/Favorite";
import Home from "./pages/Home";
import SearchForm from "./components/search/searchform/SearchForm";
import { RootState } from "./redux/store";
import Country from "./types/type";
import SearchHandler from "./components/search/searchhandler/SearchHandler";
import CountryDetail from "./components/country/CountryDetail";

function App() {
  // render
  return (
    <div className="App">
      <NavBar />

      <Routes>
        <Route path="" element={<Home />}></Route>
        <Route path="/favorite" element={<Favorite />}></Route>
        <Route path="name/:name" element={<CountryDetail />}></Route>
      </Routes>
      <FooterBar />
    </div>
  );
}

export default App;
