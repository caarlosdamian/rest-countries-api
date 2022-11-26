import { createAsyncThunk } from "@reduxjs/toolkit";

export const getAllCountries = createAsyncThunk("countries/all", async () => {
  const response = await fetch("https://restcountries.com/v3.1/all");
  return await response.json();
});

export const getAllCountriesByContinent = createAsyncThunk(
  "countries/all/Continent",
  async (continent: string) => {
    const response = await fetch(
      `https://restcountries.com/v3.1/region/${continent}`
    );
    return await response.json();
  }
);

export const getAllCountriesByName = createAsyncThunk(
  "countries/all/Continent",
  async (name: string) => {
    if (name === "") {
      const response = await fetch("https://restcountries.com/v3.1/all");
      return await response.json();
    } else {
      const response = await fetch(`https://restcountries.com/v2/name/${name}`);
      console.log("abajo");
      return await response.json();
    }
  }
);
