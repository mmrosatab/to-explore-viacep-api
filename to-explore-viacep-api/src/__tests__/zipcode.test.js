import nock from "nock";
import api from "../services/api";
import ZipCode from "../components/ZipCode";
import { fireEvent, render, getByTestId, screen } from "@testing-library/react";

const mockResponse = {
  logradouro: "Das Dores",
  bairro: "União",
  uf: "RJ",
  localidade: "Nilópolis",
};

describe("when a GET request is done to / endpoint", () => {
  test("should respond with address corresponding to the zip code", async () => {
    nock("https://viacep.com.br/ws")
      .defaultReplyHeaders({ "access-control-allow-origin": "*" })
      .get("/12345678/json")
      .reply(200, mockResponse);
    const response = await api.get("/12345678/json");
    expect(response.data).toEqual(mockResponse);

    // render(<ZipCode />);

    // const input = screen.getByRole("input", { name: /zipcode-input/i });
    // const input = screen.getByLabelText("input", { name: /zipcode-input/i });
    // fireEvent.change(input, { target: { value: "26262480" } });

    // const btn = screen.getByRole("button", { name: /search-btn/i });
    // fireEvent.click(btn);
    // expect(response.data).toEqual(mockResponse);
  });
});
