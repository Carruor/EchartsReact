import React from "react";
import { render } from "@testing-library/react";
import Article from "../components/Article";



test("button should be a link that have href value", () => {
  const screen = render(<Article />);

  const linkElement = screen.getByRole("link", { name: "Invest Now" });

  expect(linkElement).toBeInTheDocument();
  expect(linkElement).toHaveAttribute("href", "https://www.google.es/");
});
