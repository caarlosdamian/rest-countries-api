import React from "react";
import themeReducer, { initialState, toggle } from "./themeSlice";

describe("themeSlice test", () => {
  it("sets state to true", () => {
    const action = { type: toggle };
    const state = themeReducer(initialState, action);
    expect(state).toEqual({ theme: true });
  });
});
