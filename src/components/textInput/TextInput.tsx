import React from "react";
import SearcIcon from "../../assets/search.svg";
import "./TextInput.scss";

export const TextInput = () => {
  return (
    <div className="input-wrapper">
      <img src={SearcIcon} alt="SearcIcon" />
      <input placeholder="Search for a country…" className="input-container"/>
    </div>
  );
};
