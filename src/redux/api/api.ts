import { createAsyncThunk } from '@reduxjs/toolkit';

export const getAllCountries = createAsyncThunk('countries/all', async () => {
  const response = await fetch(
    'https://restcountries.com/v3.1/all?fields=name,capital,population,capital,flags,region,subregion,currencies,languages,borders'
  );
  if (response.ok) {
    return await response.json();
  }
  return [];
});

export const getAllCountriesByContinent = createAsyncThunk(
  'countries/all/Continent',
  async (continent: string) => {
    const response = await fetch(
      `https://restcountries.com/v3.1/region/${continent}`
    );
    return await response.json();
  }
);

export const getAllCountriesByName = createAsyncThunk(
  'countries/all/Name',
  async (name: string) => {
    if (name === '') {
      const response = await fetch('https://restcountries.com/v3.1/all');
      return await response.json();
    } else {
      const response = await fetch(`https://restcountries.com/v2/name/${name}`);
      return await response.json();
    }
  }
);

export const getAllCountriesByCode = createAsyncThunk(
  'countries/all/code',
  async (urls: []) => {
    const bordersUrls = urls.map(
      (border: any) => `https://restcountries.com/v3.1/alpha/${border}`
    );
    let check = await Promise.all(bordersUrls?.map((u) => fetch(u))).then(
      (responses) => Promise.all(responses?.map((res) => res.json()))
    );
    return check;
  }
);
