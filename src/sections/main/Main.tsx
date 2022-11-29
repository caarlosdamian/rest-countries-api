import React from "react";
import { useSelector } from "react-redux";
import { Card } from "../../components/card/Card";
import { Country } from "../../interfaces";
import { rootState } from "../../redux/store";
import "./Main.scss";

export const Main = () => {
  const { filteredData } = useSelector(
    (state: rootState) => state.countries
  );
  return (
    <div className="country-grid">
      {filteredData.length !== 0 &&
        filteredData.map((county: Country, index: number) => (
          <Card
            data={county}
            key={county.population * index + index}
            population={county.population}
            capital={county.capital}
            img={county.flags.svg}
            name={county.name.common}
            region={county.region}
          />
        ))}
    </div>
  );
};
