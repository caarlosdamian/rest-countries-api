import { createSlice } from "@reduxjs/toolkit";
import { asyncStatus } from "../../interfaces";
import { getAllCountries } from "./api";

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
  },
});


export default ServiceSlice.reducer;