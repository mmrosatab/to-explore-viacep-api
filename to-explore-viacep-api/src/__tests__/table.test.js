import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Table from "../components/Table";
import mockAddress from "../__mock__/address";

describe("Table component tests", () => {
  test("Table should have right address", async () => {
    render(<Table address={mockAddress} />);
    const logradouro = screen.getByTestId("logradouro");
    expect(logradouro.innerHTML).toEqual(mockAddress.logradouro);

    const bairro = screen.getByTestId("bairro");
    expect(bairro.innerHTML).toEqual(mockAddress.bairro);

    const localidade = screen.getByTestId("localidade");
    expect(localidade.innerHTML).toEqual(mockAddress.localidade);

    const uf = screen.getByTestId("uf");
    expect(uf.innerHTML).toEqual(mockAddress.uf);
  });
});
