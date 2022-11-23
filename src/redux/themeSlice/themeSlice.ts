import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  theme: false,
};

export const ThemeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggle(state) {
      state.theme = !state.theme;
    },
  },
});

export const { toggle } = ThemeSlice.actions;
export default ThemeSlice.reducer;
