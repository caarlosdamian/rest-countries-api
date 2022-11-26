import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import arrow from "../../assets/arrow.svg";
import arrowBlack from "../../assets/arrowBlack.svg";
import { getAllCountriesByContinent } from "../../redux/api/api";
import { AppThunkDispatch, rootState } from "../../redux/store";
import { continents } from "../../utils";
import "./Select.scss";

export const Select = () => {
  const [showOptions, setShowOptions] = useState(false);
  const dispatch = useDispatch<AppThunkDispatch>();
  const { theme } = useSelector((state: rootState) => state.theme);

  const fetchCountries = async (country: string) => {
    dispatch(getAllCountriesByContinent(country));
  };
  return (
    <div
      className={`select-container ${(theme && "dark") || ""}`}
      onClick={() => setShowOptions(!showOptions)}
    >
      <span>Filter by Region</span>
      {theme ? (
        <img src={arrow} alt="arrow" />
      ) : (
        <img src={arrowBlack} alt="arrowBlack" />
      )}
      {showOptions && (
        <ul className="option-container">
          {continents.map((continent) => (
            <li
              key={continent.id}
              onClick={() => fetchCountries(continent.value)}
            >
              {continent.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
