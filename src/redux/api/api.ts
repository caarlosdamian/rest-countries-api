import { createAsyncThunk } from "@reduxjs/toolkit";
import { Country } from "../../interfaces";

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

export const getAllCountriesByCode = createAsyncThunk(
 "countries/all/code",
 async (urls: []) => {
  const bordersUrls = urls.map(
   (border: any) => `https://restcountries.com/v3.1/alpha/${border}`
  );
  // let requests = await  bordersUrls.map((url) => fetch(url));
  //   console.log(requests.map((item:any)=>item))
  // let arrayName: any = [];
  let check = await Promise.all(bordersUrls?.map((u) => fetch(u))).then(
   (responses) => Promise.all(responses?.map((res) => res.json()))
  );
  return check;
 }
);
