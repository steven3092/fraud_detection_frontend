import { act, renderHook, waitFor } from "@testing-library/react";
import { describe, it, expect, vitest } from "vitest";
import { useMeasurement } from "./use-measurement";
import { MeasurementType } from "../../../utils/measurements";

const mockResponse = { type: "mocked" } as MeasurementType;
const mockFn = vitest.fn(() => mockResponse);

vitest.useFakeTimers();

describe("useMeasurement Hook", () => {
  it("should call the provided function and update measure state", async () => {
    const { result } = renderHook(() => useMeasurement(mockFn));

    act(() => {
      result.current.start();
    });

    expect(mockFn).not.toHaveBeenCalled();

    vitest.advanceTimersByTime(3000);

    await waitFor(() => {
      expect(mockFn).toHaveBeenCalledOnce();
      expect(result.current.measure).toEqual(mockResponse);
    });
  });
});
