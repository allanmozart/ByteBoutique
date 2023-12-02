import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Carousel from "./index";

jest.mock("../../api/API_PATH", () => ({
  getAllProducts: jest.fn(() => Promise.resolve([])),
}));

describe("Carousel Component", () => {
  it("renders", async () => {

    render(<Carousel />);
    expect(screen.getByRole('button', {name: "left arrow button"})).toBeDefined();
  });
});