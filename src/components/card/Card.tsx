import React from "react";
import { useSelector } from "react-redux";
import { rootState } from "../../redux/store";
import "./Card.scss";

interface CardI {
  img: string;
  name: string;
  population: number;
  region: string;
  capital: any[];
}
export const Card = ({ capital, img, name, population, region }: CardI) => {
  const { theme } = useSelector((state: rootState) => state.theme);

  return (
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
  );
};
