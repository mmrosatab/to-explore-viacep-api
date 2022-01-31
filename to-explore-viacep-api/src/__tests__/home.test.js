import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import nock from "nock";
import Home from "../pages/Home";
import mockAddress from "../__mock__/address";

describe("Home components tests", () => {
  test("should return correctly status 200 for valid zipcode", async () => {
    nock("https://viacep.com.br/ws")
      .defaultReplyHeaders({ "access-control-allow-origin": "*" })
      .get("/20071003/json")
      .reply(200, mockAddress);

    render(<Home />);

    const inputElement = screen.getByTestId("zipcode-input");
    userEvent.type(inputElement, "20071003");

    const buttonElement = screen.getByTestId("search-btn");
    userEvent.click(buttonElement);
  });
});
