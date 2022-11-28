import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Header } from "../../sections";
import { Link } from "react-router-dom";
import Arrow from "../../assets/arrowLeft.svg";
import "./Country.scss";
import { getAllCountriesByCode } from "../../redux/api/api";
import { useDispatch } from "react-redux";
import { AppThunkDispatch } from "../../redux/store";

export const Country = () => {
  const location = useLocation();
  const dispatch = useDispatch<AppThunkDispatch>();
  const {
    flags: { svg },
    name: { common, nativeName },
    population,
    region,
    subregion,
    currencies,
    languages,
    borders,
  } = location.state;
  const keys = Object.keys(nativeName);
  const keysLang = Object.keys(languages);
  const currency = currencies[0];
  const commonName = keys[0];

  useEffect(() => {
    dispatch(getAllCountriesByCode(borders));
    console.log('dispaching')
  }, [borders]);

  return (
    <div>
      <Header />
      <div className="country-container">
        <Link to={"/"} className="back-button">
          <img src={Arrow} alt="ArrowLeft" />
          <span>Back</span>
        </Link>
        <div className="details-container">
          <img className="country-flag" src={svg} alt={common} />
          <h1 className="country-namr">{common}</h1>

          <div className="main-details">
            <span>
              <strong>Native Name: </strong>
              {nativeName[commonName].official}
            </span>
            <span>
              <strong>Population: </strong>
              {population}
            </span>
            <span>
              <strong>Region: </strong>
              {region}
            </span>
            <span>
              <strong>Sub Region: </strong>
              {subregion}
            </span>
          </div>
          <div className="second-details">
            <span>
              <strong>Top Level Domain: </strong>
              {subregion}
            </span>
            <span>
              <strong>Currencies: </strong>
              {currency}
            </span>
            <span>
              <strong>Languages: </strong>
              {languages[keysLang[0]]}
            </span>
          </div>
          <div className="bottom-controls">
            <h2 className="bottom-text">Border Countries: </h2>
            <div className="bottom-grid">
              {borders.map((item: any) => (
                <span>{item}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
