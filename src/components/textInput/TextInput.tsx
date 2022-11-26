import React from "react";
import { useDispatch } from "react-redux";
import SearcIcon from "../../assets/search.svg";
import { getAllCountriesByName } from "../../redux/api/api";
import { AppThunkDispatch } from "../../redux/store";
import "./TextInput.scss";

export const TextInput = () => {
  const dispatch = useDispatch<AppThunkDispatch>();
  const handleChange = (name: string) => {
    dispatch(getAllCountriesByName(name));
  };
  return (
    <div className="input-wrapper">
      <img src={SearcIcon} alt="SearcIcon" />
      <input
        placeholder="Search for a country…"
        className="input-container"
        onChange={(e) => handleChange(e.target.value)}
      />
    </div>
  );
};
