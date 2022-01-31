import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import CustomButton from "../components/CustomButton";

const props = {
  id: "search-btn",
  type: "submit",
  color: "secondary",
  variant: "contained",
  sx: { mt: 3, mb: 2 },
  ariaLabel: "search-btn",
  value: "Procurar",
  dataTestId: "search-btn",
};

describe("CustomButton component tests", () => {
  test("CustomButton should be rendered", async () => {
    render(<CustomButton {...props} />);
    const buttonElement = screen.getByTestId("search-btn");
    expect(buttonElement).toBeVisible();
  });
});
