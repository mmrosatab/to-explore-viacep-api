import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import Form from "../components/Form";
import mockAddress from "../__mock__/address";

describe("Form component tests", () => {
  test("check value is correct after change input text", async () => {
    render(<Form />);
    const inputElement = screen.getByTestId("zipcode-input");
    expect(inputElement.value).toBe("");
    fireEvent.change(inputElement, { target: { value: "20071003" } });
    expect(inputElement.value).toBe("20071003");
  });

  test("check handleSubmit function is called with right value", async () => {
    const handleSubmitMock = jest.fn();
    handleSubmitMock.mockReturnValueOnce(mockAddress);
    const setAddressMock = jest.fn();

    render(
      <Form handleSubmit={handleSubmitMock} setAddress={setAddressMock} />
    );

    const inputElement = screen.getByTestId("zipcode-input");
    userEvent.type(inputElement, "20071003");

    const buttonElement = screen.getByTestId("search-btn");
    userEvent.click(buttonElement);

    await waitFor(() =>
      expect(handleSubmitMock).toHaveBeenCalledWith("20071003")
    );
  });
});
