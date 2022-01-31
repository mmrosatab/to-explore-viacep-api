import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import CustomModal from "../components/CustomModal";
import mockAddress from "../__mock__/address";

describe("Custom Modal component tests", () => {
  test("Custom Modal should be rendered", async () => {
    const setAddressMock = jest.fn();
    const props = {
      dataTestId: "modal-id",
      open: true,
      address: mockAddress,
      setAddress: setAddressMock,
    };

    render(<CustomModal {...props} />);
    const modalElement = screen.getByTestId("modal-id");
    expect(modalElement).toBeVisible();
  });
});
