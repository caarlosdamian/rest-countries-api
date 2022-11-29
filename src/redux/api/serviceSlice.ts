import { createSlice, current } from "@reduxjs/toolkit";
import { asyncStatus, Country } from "../../interfaces";
import {
  getAllCountries,
  getAllCountriesByCode,
  getAllCountriesByContinent,
  getAllCountriesByName,
} from "./api";

const initialState = {
  status: "",
  data: [],
  borderData: [],
  filteredData: [],
};

export const ServiceSlice = createSlice({
  name: "service",
  initialState,
  reducers: {
    getFilterData: (state, action) => {
      if (action.payload === "") {
        state.filteredData = state.data;
      } else {
        state.filteredData = current(state.data).filter((item: Country) =>
          item.name.common.toLowerCase().includes(action.payload.toLowerCase())
        );
      }
    },
  },
  extraReducers: {
    [getAllCountries.pending.type]: (state) => {
      state.status = asyncStatus.peding;
    },
    [getAllCountries.fulfilled.type]: (state, action) => {
      state.status = asyncStatus.success;
      state.data = action.payload;
      state.filteredData = action.payload;
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
      let arrayName: any = [];
      action.payload.map((item: any) => {
        arrayName.push(item[0]);
      });
      state.status = asyncStatus.success;
      state.borderData = arrayName;
    },
    [getAllCountriesByCode.rejected.type]: (state) => {
      state.status = asyncStatus.error;
    },
  },
});

export const { getFilterData } = ServiceSlice.actions;

export default ServiceSlice.reducer;
