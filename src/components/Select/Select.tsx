import React, { useState } from "react";
import { useDispatch } from "react-redux";
import arrow from "../../assets/arrow.svg";
import { getAllCountriesByContinent } from "../../redux/api/api";
import { AppThunkDispatch } from "../../redux/store";
import { continents } from "../../utils";
import "./Select.scss";

export const Select = () => {
  const [showOptions, setShowOptions] = useState(false);
  const dispatch = useDispatch<AppThunkDispatch>();

  const fetchCountries = async (country: string) => {
    dispatch(getAllCountriesByContinent(country));
  };
  return (
    <div
      className="select-container"
      onClick={() => setShowOptions(!showOptions)}
    >
      <span>Filter by Region</span>
      <img src={arrow} alt="arrow" />
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
