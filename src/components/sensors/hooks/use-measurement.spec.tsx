import { act, renderHook } from "@testing-library/react";
import { describe, it, expect, vitest } from "vitest";
import { useMeasurement } from "./use-measurement";
import { MeasurementType } from "../../../utils/measurements";

describe("useMeasurement Hook", () => {
  it("should initialize with correct default values", () => {
    const mockFn = vitest.fn(() => ({} as MeasurementType));
    const { result } = renderHook(() => useMeasurement(mockFn));

    expect(result.current.measure).toBeUndefined();
    expect(result.current.isMeasuring).toBe(false);
  });

  it("should set isMeasuring to true and then back to false after start is called", async () => {
    const mockFn = vitest.fn(() => ({} as MeasurementType));
    const { result, waitFor } = renderHook(() => useMeasurement(mockFn));

    act(() => {
      result.current.start();
    });

    expect(result.current.isMeasuring).toBe(true);

    await waitFor(() => {
      expect(result.current.isMeasuring).toBe(false);
    });
  });

  it("should call the provided function and update measure state", async () => {
    const mockResponse = { type: "mocked" } as MeasurementType;
    const mockFn = vitest.fn(() => mockResponse);
    const { result, waitFor } = renderHook(() => useMeasurement(mockFn));

    act(() => {
      result.current.start();
    });

    expect(mockFn).not.toHaveBeenCalled(); // Not called immediately

    await waitFor(() => {
      expect(mockFn).toHaveBeenCalledOnce();
      expect(result.current.measure).toEqual(mockResponse);
    });
  });

  it("should call the provided function only once", async () => {
    const mockFn = vitest.fn(() => ({ type: "mocked" } as MeasurementType));
    const { result, waitFor } = renderHook(() => useMeasurement(mockFn));

    act(() => {
      result.current.start();
    });

    await waitFor(() => {
      expect(mockFn).toHaveBeenCalledOnce();
    });
  });
});
