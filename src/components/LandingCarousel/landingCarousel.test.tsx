import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import "@testing-library/jest-dom/extend-expect";
import Carousel from "./index";

jest.mock("../../api/API_PATH", () => ({
  getAllProducts: jest.fn(() => Promise.resolve([])),
}));

afterEach(() => {
  jest.restoreAllMocks();
});

describe("Carousel Component", () => {
  it("renders", async () => {
    render(<Carousel />);
    expect(
      screen.getByRole("button", { name: "left arrow button" })
    ).toBeDefined();
    expect(
      screen.getByRole("button", { name: "right arrow button" })
    ).toBeDefined();
  });
});
