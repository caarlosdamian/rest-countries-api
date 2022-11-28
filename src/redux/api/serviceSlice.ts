import { createSlice } from "@reduxjs/toolkit";
import { asyncStatus } from "../../interfaces";
import {
  getAllCountries,
  getAllCountriesByCode,
  getAllCountriesByContinent,
  getAllCountriesByName,
} from "./api";

const initialState = {
  status: "",
  data: [],
};

export const ServiceSlice = createSlice({
  name: "service",
  initialState,
  reducers: {},
  extraReducers: {
    [getAllCountries.pending.type]: (state) => {
      state.status = asyncStatus.peding;
    },
    [getAllCountries.fulfilled.type]: (state, action) => {
      state.status = asyncStatus.success;
      state.data = action.payload;
    },
    [getAllCountries.rejected.type]: (state) => {
      state.status = asyncStatus.error;
    },
    [getAllCountriesByContinent.pending.type]: (state) => {
      state.status = asyncStatus.peding;
    },
    [getAllCountriesByContinent.fulfilled.type]: (state, action) => {
      state.status = asyncStatus.success;
      state.data = action.payload;
    },
    [getAllCountriesByContinent.rejected.type]: (state) => {
      state.status = asyncStatus.error;
    },
    [getAllCountriesByName.pending.type]: (state) => {
      state.status = asyncStatus.peding;
    },
    [getAllCountriesByName.fulfilled.type]: (state, action) => {
      state.status = asyncStatus.success;
      state.data = action.payload;
    },
    [getAllCountriesByName.rejected.type]: (state) => {
      state.status = asyncStatus.error;
    },
    [getAllCountriesByCode.pending.type]: (state) => {
      state.status = asyncStatus.peding;
    },
    [getAllCountriesByCode.fulfilled.type]: (state, action) => {
      console.log(action.payload)
      state.status = asyncStatus.success;
      state.data = action.payload;
    },
    [getAllCountriesByCode.rejected.type]: (state) => {
      state.status = asyncStatus.error;
    },
  },
});

export default ServiceSlice.reducer;
