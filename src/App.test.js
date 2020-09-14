import React from "react";
import { render } from "@testing-library/react";
import App from "./App";
import AppMusic from "./App_music";

test("renders learn react link", () => {
  // const { getByText } = render(<App />);
  const { getByText } = render(<AppMusic />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
