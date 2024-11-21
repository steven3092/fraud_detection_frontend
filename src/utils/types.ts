import { MeasurementType } from "./measurements";

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
