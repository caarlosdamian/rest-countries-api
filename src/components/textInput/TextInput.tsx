import React from "react";
import { useDispatch, useSelector } from "react-redux";
import SearcIcon from "../../assets/search.svg";
import { getAllCountriesByName } from "../../redux/api/api";
import { AppThunkDispatch, rootState } from "../../redux/store";
import "./TextInput.scss";

export const TextInput = () => {
  const { theme } = useSelector((state: rootState) => state.theme);
  const dispatch = useDispatch<AppThunkDispatch>();
  const handleChange = (name: string) => {
    dispatch(getAllCountriesByName(name));
  };
  return (
    <div className={`input-wrapper ${(theme && "dark") || ""}`}>
      <img src={SearcIcon} alt="SearcIcon" />
      <input
        placeholder="Search for a country…"
        className="input-container"
        onChange={(e) => handleChange(e.target.value)}
      />
    </div>
  );
};
