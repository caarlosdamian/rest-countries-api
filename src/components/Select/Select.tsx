import React, { useState } from "react";
import arrow from "../../assets/arrow.svg";
import "./Select.scss";

export const Select = () => {
  const [showOptions, setShowOptions] = useState(false);
  return (
    <div
      className="select-container"
      onClick={() => setShowOptions(!showOptions)}
    >
      <span>Filter by Region</span>
      <img src={arrow} alt="arrow" />
      {showOptions && (
        <ul className="option-container">
          <li>Africa</li>
          <li>Americas</li>
          <li>Asia</li>
          <li>Europe</li>
          <li>Oceania</li>
        </ul>
      )}
    </div>
  );
};
