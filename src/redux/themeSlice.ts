import { createSlice } from "@reduxjs/toolkit";

const initialState = {
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
