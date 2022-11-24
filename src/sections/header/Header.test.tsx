import { render, fireEvent } from "../../test-utils";
import React from "react";
import { Header } from "./Header";

describe("Header test", () => {
  it("sets className to dark", () => {
    const container = render(<Header />);
    const header = container.getByTestId(/header-container/i);
    const button = container.getByTestId(/toggle-button/i);
    expect(header).toHaveClass("header-container");
    fireEvent.click(button);
    expect(header).toHaveClass("header-container dark");
  });
});
