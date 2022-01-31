import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Input from "../components/Input";

describe("Input component tests", () => {
  test("input text should be rendered", async () => {
    const props = {
      dataTestId: "zipcode-input",
    };

    render(<Input {...props} />);
    const inputElement = screen.getByTestId("zipcode-input");
    expect(inputElement).toBeVisible();
  });
});
