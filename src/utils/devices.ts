import { getBloodMeasurement, getPolarMeasurement, getX1Measurement, MeasurementType } from "./measurements";

export type InputType = {
  label: string;
  name: string;
  unit: string;
};

export type PayloadType = {
  name: string;
  getValue?: (d: DeviceType) => string;
};

export type DeviceType = {
  name: string;
  type: "BLOOD" | "HEART";
  url: string;
  model: string;
  version: string;
  properties: PayloadType[];
  payload?: PayloadType[];
  getMeasurement: () => MeasurementType;
  inputs: InputType[];
};

export const DEVICES: Record<string, DeviceType> = {
  POLAR_MX2: {
    name: "Polar MX2 heart rate monitor",
    type: "HEART",
    url: "http://127.0.0.1:8000/api/polar-mx2-heart-rate/",
    model: "MX2",
    version: "1.0",
    inputs: [
      {
        label: "BPS",
        name: "pulse",
        unit: "per seconds",
      },
    ],
    getMeasurement: getPolarMeasurement,
    properties: [{ name: "fw", getValue: (d: DeviceType) => `${d.model}/${d.version}` }, { name: "pulse" }],
  },

  SAMSUNG_X1S: {
    name: "Samsung X1-S heart rate monitor",
    type: "HEART",
    url: "http://127.0.0.1:8000/api/samsung-x1s-heart-rate/",
    model: "X1S",
    version: "1.1",
    inputs: [
      {
        label: "BPM",
        name: "hr",
        unit: "per minutes",
      },
    ],
    getMeasurement: getX1Measurement,
    properties: [
      { name: "model", getValue: (d: DeviceType) => d.model },
      { name: "version", getValue: (d: DeviceType) => d.version },
    ],
    payload: [{ name: "hr" }],
  },

  SAMSUNG_BPA: {
    name: "Samsung BPA blood pressure monitor",
    type: "BLOOD",
    url: "http://127.0.0.1:8000/api/samsung-bpa-blood-pressure/",
    model: "BPA",
    version: "1.3",
    inputs: [
      { name: "bp-sys", unit: "mmHg", label: "Systolic" },
      { name: "bp-dia", unit: "mmHg", label: "Diastolic" },
    ],
    getMeasurement: getBloodMeasurement,
    properties: [
      { name: "model", getValue: (d: DeviceType) => d.model },
      { name: "version", getValue: (d: DeviceType) => d.version },
    ],
    payload: [{ name: "bp-sys" }, { name: "bp-dia" }],
  },
};
