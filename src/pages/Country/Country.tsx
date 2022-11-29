import React, { useEffect, useMemo, useState } from "react";
import { useLocation } from "react-router-dom";
import { Header } from "../../sections";
import { Link } from "react-router-dom";
import Arrow from "../../assets/arrowLeft.svg";
import { getAllCountriesByCode } from "../../redux/api/api";
import { useDispatch, useSelector } from "react-redux";
import { AppThunkDispatch, rootState } from "../../redux/store";
import "./Country.scss";

export const Country = () => {
 const location = useLocation();
 const [commonData, setcommonData] = useState<any>({
  currency: "",
  commonName: "",
 });
 const dispatch = useDispatch<AppThunkDispatch>();
 const { theme, countries } = useSelector((state: rootState) => state);
 const {
  flags: { svg },
  name: nombre,
  population,
  region,
  subregion,
  currencies,
  languages,
  borders,
 } = location.state;

 const borderNames = useMemo(
  () => countries.borderData.map((item: any) => item.name.common),
  [countries.borderData]
 );
 const keysCurrencies = Object.keys(currencies);
 const keysLang = Object?.keys(languages);

 useEffect(() => {
  if (typeof nombre == "string") {
   setcommonData({ ...commonData, commonName: nombre });
  } else {
   const keys = Object?.keys(nombre.nativeName);
   const commonName = keys[0];
   setcommonData({
    ...commonData,
    commonName: nombre.nativeName[commonName].official,
    currency: currencies[keysCurrencies[0]].name,
   });
  }
 }, [nombre]);

 useEffect(() => {
  if (borders?.length > 0) {
   dispatch(getAllCountriesByCode(borders));
  }
 }, [dispatch, borders]);

 return (
  <div>
   <Header />
   <div className="country-container">
    <Link to={"/"} className="back-button">
     <img src={Arrow} alt="ArrowLeft" />
     <span>Back</span>
    </Link>
    <div className="details-container">
     <img className="country-flag" src={svg} alt="" />
     <h1 className="country-namr">{""}</h1>

     <div className="main-details">
      <span>
       <strong>Native Name: </strong>
       {commonData.commonName}
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
       {commonData.currency}
      </span>
      <span>
       <strong>Languages: </strong>
       {languages[keysLang[0]]}
      </span>
     </div>
     {borders?.length > 0 && (
      <div className="bottom-controls">
       <h2 className="bottom-text">Border Countries: </h2>
       <div className="bottom-grid">
        {borderNames?.map((item: any, index: number) => (
         <span className="border-box" key={index * 16}>
          {item}
         </span>
        ))}
       </div>
      </div>
     )}
    </div>
   </div>
  </div>
 );
};
