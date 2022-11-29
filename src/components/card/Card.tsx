import React from "react";
import { useSelector } from "react-redux";
import { rootState } from "../../redux/store";
import { Link } from "react-router-dom";
import "./Card.scss";
import { Country } from "../../interfaces";

interface CardI {
  img: string;
  name: string;
  population: number;
  region: string;
  capital: any[];
  data: Country;
}
export const Card = ({
  capital,
  img,
  name,
  population,
  region,
  data,
}: CardI) => {
  const { theme } = useSelector((state: rootState) => state.theme);
console.log(name);
  return (
    <Link to={`/country/${name}`} state={data}>
      <div className={`card-container ${(theme && "dark") || ""}`}>
        <div className="img-container">
          <img src={img} alt="countryimg" />
        </div>
        <div className="text-container">
          <h1 className="country-name"> {name}</h1>
          <span className="country-population">
            <strong>Population</strong> {population}
          </span>
          <span className="country-region">
            <strong>Region</strong> {region}
          </span>
          <span className="country-capital">
            <strong>Capital</strong>
            {typeof capital === "object" ? (
              capital?.map((item, i) => <span key={9 * i}>{item}</span>)
            ) : (
              <span>{capital}</span>
            )}
          </span>
        </div>
      </div>
    </Link>
  );
};
