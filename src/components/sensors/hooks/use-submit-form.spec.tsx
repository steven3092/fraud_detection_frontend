import { renderHook, act, waitFor } from "@testing-library/react";
import { vitest } from "vitest";
import { useSubmitForm } from "./use-submit-form";
import { DeviceType } from "../../../utils/types";
import { FormEvent } from "react";

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

const buildStubForm = () => {
  const form = document.createElement("form");
  const input = document.createElement("input");
  input.name = "pulse";
  input.value = "lorem";
  form.appendChild(input);

  return form;
};

const mockMutateAsync = vitest.fn().mockResolvedValue({});
vitest.mock("../../../hooks/use-post-mutation", () => ({
  usePostMutation: vitest.fn(() => ({
    postMutation: {
      mutateAsync: mockMutateAsync,
    },
  })),
}));

describe("useSubmitForm", () => {
  it("should call postMutation with the correct parameters", async () => {
    const { result } = renderHook(() => useSubmitForm(mockDevice));

    const mockFormEvent: Partial<FormEvent<HTMLFormElement>> = {
      preventDefault: vitest.fn(),
      target: buildStubForm(),
    };

    act(() => {
      result.current.handleSubmitForm(
        mockFormEvent as FormEvent<HTMLFormElement>
      );
    });

    await waitFor(() => {
      expect(mockMutateAsync).toHaveBeenCalled();
    });
  });
});
