import { DeviceType } from "./types";
import {
  getSamsungBPAMeasurement,
  getPolarMX2Measurement,
  getSamsungX1SMeasurement,
} from "./measurements";

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
    getMeasurement: getPolarMX2Measurement,
    properties: [
      { name: "fw", getValue: (d: DeviceType) => `${d.model}/${d.version}` },
      { name: "pulse" },
    ],
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
    getMeasurement: getSamsungX1SMeasurement,
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
      { name: "bp_sys", unit: "mmHg", label: "Systolic" },
      { name: "bp_dia", unit: "mmHg", label: "Diastolic" },
    ],
    getMeasurement: getSamsungBPAMeasurement,
    properties: [
      { name: "model", getValue: (d: DeviceType) => d.model },
      { name: "version", getValue: (d: DeviceType) => d.version },
    ],
    payload: [{ name: "bp_sys" }, { name: "bp_dia" }],
  },
};
