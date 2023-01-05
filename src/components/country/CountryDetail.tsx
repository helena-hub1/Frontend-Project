import React from "react";
import { Link, useParams } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState, Appdispatch } from "../../redux/store";
import { DataGrid, GridColDef } from "@mui/x-data-grid";

import getCountryData from "../../thunk/country";
import Country from "../../types/type";

// MUI grid column definition
const columns: GridColDef[] = [
  {
    field: "attributeFlag",
    headerName: "Flag",
    width: 100,
    editable: false,
    valueGetter: (params) => {
      return params.getValue(params.id, "flags").png;
    },
    renderCell: (params) => {
      return (
        <>
          <img src={params.value} height="30" />
        </>
      );
    },
  },
  {
    field: "attributeName",
    headerName: "Name",
    valueGetter: (params) => {
      return params.getValue(params.id, "name").common;
    },
    width: 300,
    editable: true,
  },
  {
    field: "region",
    headerName: "Region",
    width: 150,
    editable: true,
  },
  {
    field: "population",
    headerName: "Population",
    width: 150,
    editable: true,
  },
  {
    field: "languages",
    headerName: "Languages",
    width: 150,
    editable: true,
    // valueGetter: (params) => {
    //   return params.getValue(params.id, "languages");
    // },
  },
];

function CountryDetail() {
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
      <p>This is product detail.</p>
      {countryDetail.map((item) => {
        return (
          <React.Fragment>
            <p>{item.name.common}</p>
            <p>{item.population}</p>
            <img src={item.flags.png} alt="flag" height="50px" width="100px" />
            {item.languages
              ? Object.values(item.languages).map((item) => {
                  return (
                    <ul>
                      <li>{item}</li>
                    </ul>
                  );
                })
              : null}
          </React.Fragment>
        );
      })}
      <Link to="/">
        <button>Back</button>
      </Link>
    </div>
  );
}

export default CountryDetail;
