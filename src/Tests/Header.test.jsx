import React from "react";
import { render } from "@testing-library/react";
import Header from "../components/Header";

describe("Header", () => {
  it("Must display RocketInvestments title", () => {
    const screen = render(<Header />);

    expect(screen.getByText(/rocketinvestments/i)).toBeInTheDocument();
  });
});
