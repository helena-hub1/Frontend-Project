import React from "react";
import { Link, useParams } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState, Appdispatch } from "../../redux/store";
import getCountryData from "../../thunk/country";
import Country from "../../types/type";

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
          <div>
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
          </div>
        );
      })}
      <Link to="/">
        <button>Back</button>
      </Link>
    </div>
  );
}

export default CountryDetail;
