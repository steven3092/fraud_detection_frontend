import { render, screen } from "@testing-library/react";
import { describe, it, vitest, expect } from "vitest";
import userEvent from "@testing-library/user-event";
import { DeviceType } from "../../utils/types";
import { Sensor } from "./sensor";

const mockStart = vitest.fn();
vitest.mock("./hooks/use-measurement", () => ({
  useMeasurement: vitest.fn(() => ({
    measure: vitest.fn(),
    isMeasuring: false,
    start: mockStart,
  })),
}));

vitest.mock("../input", () => ({
  Input: ({ input }: { input: { name: string } }) => <div>{input.name}</div>,
}));

const mockHandleSubmitForm = vitest.fn((e: React.FormEvent) =>
  e.preventDefault()
);
vitest.mock("./hooks/use-submit-form", () => ({
  useSubmitForm: vitest.fn(() => ({
    handleSubmitForm: mockHandleSubmitForm,
  })),
}));

const mockDevice: DeviceType = {
  name: "Test Device",
  type: "HEART",
  url: "http://127.0.0.1:8000/api/samsung-bpa-blood-pressure/",
  model: "TEST",
  version: "1.3",
  inputs: [
    { name: "Input1", label: "Input1Label", unit: "Input1Unit" },
    { name: "Input2", label: "Input2Label", unit: "Input2Unit" },
  ],
  getMeasurement: vitest.fn(),
  properties: [{ name: "ipsum" }, { name: "lorem" }],
};

describe("Sensor Component", () => {
  it("renders the inputs", () => {
    render(<Sensor device={mockDevice} />);
    expect(screen.getByText("Input1")).toBeInTheDocument();
    expect(screen.getByText("Input2")).toBeInTheDocument();
  });

  it("calls start when the 'Start Measurement' button is clicked", async () => {
    render(<Sensor device={mockDevice} />);
    const button = screen.getByText("Start Measurement");
    await userEvent.click(button);
    expect(mockStart).toHaveBeenCalled();
  });

  it("submits the form when 'Send Data' button is clicked", async () => {
    render(<Sensor device={mockDevice} />);
    const button = screen.getByText("Send Data");
    await userEvent.click(button);
    expect(mockHandleSubmitForm).toHaveBeenCalled();
  });
});
