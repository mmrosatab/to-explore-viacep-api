import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Form from "../components/Form";

describe("Form component tests", () => {
  test("check value is correct after change input text", async () => {
    render(<Form />);
    const inputElement = screen.getByTestId("zipcode-input");
    expect(inputElement.value).toBe("");
    fireEvent.change(inputElement, { target: { value: "12345678" } });
    expect(inputElement.value).toBe("12345678");
  });

  test("check button was clicked", async () => {
    const utils = render(<Form />);
    // const buttonElement = screen.getByTestId("search-btn");
    // fireEvent.click(buttonElement);
    console.log(utils);
  });
});

// const mockResponse = {
//   logradouro: "Das Dores",
//   bairro: "União",
//   uf: "RJ",
//   localidade: "Nilópolis",
// };

// describe("ZipCode component tests", () => {
//   test("check value is correct after change input text", async () => {
//     render(<ZipCode api={api} />);
//     const inputElement = screen.getByLabelText(/digite o cep aqui.../i);
//     fireEvent.change(inputElement, { target: { value: "12345678" } });
//     expect(inputElement.value).toBe("12345678");
//   });

//   test("check value is correct after change input text3", async () => {
//     const { getByLabelText, getByTestId } = render(<ZipCode api={api} />);
//     const inputElement = screen.getByTestId("zipcode-input");
//     fireEvent.change(inputElement, { target: { value: "12345678" } });
//     expect(inputElement.value).toBe("12345678");
//   });

//   test("check button was clicked", async () => {
//     render(<ZipCode api={api} />);
//     const buttonElement = screen.getByRole("button", { name: /search-btn/i });
//     fireEvent.click(buttonElement);
//   });

//   test("should render right value in modal", async () => {
//     nock("https://viacep.com.br/ws")
//       .defaultReplyHeaders({ "access-control-allow-origin": "*" })
//       .get("/12345678/json")
//       .reply(200, mockResponse);

//     render(<ZipCode api={api} />);

//     const inputElement = screen.getByLabelText(/digite o cep aqui.../i);
//     fireEvent.change(inputElement, { target: { value: "12345678" } });

//     const buttonElement = screen.getByRole("button", { name: /search-btn/i });
//     fireEvent.click(buttonElement);

//     // const rowsTableElement = await screen.findByTestId("rows-table");
//     // console.log(rowsTableElement);
//     expect(true).toBe(true);
//   });
// });
