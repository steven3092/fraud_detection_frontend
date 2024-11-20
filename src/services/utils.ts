export type DeviceInfo = {
  name: string;
  url: string;
  model: string;
  version: string;
  properties: object[];
  payload?: object[];
  unit: string;
  startMeasurement: () => number;
  inputs: string[];
};

export type FetchType = {
  device: DeviceInfo;
  body?: object;
};

export const DEVICE: Record<string, DeviceInfo> = {
  H_POLAR: {
    name: "Polar MX2 heart rate monitor",
    url: "http://127.0.0.1:8000/api/polar-mx2-heart-rate/",
    model: "MX2",
    version: "1.0",
    unit: "per seconds",
    startMeasurement: () => ({ bpm: 0 }),
    inputs: ["bpm"],
    properties: [
      { name: "fw", getValue: (e: DeviceInfo) => `${e.model}/${e.version}` },
      { name: "pulse" },
    ],
  },
  H_SAMSUNG: {
    name: "Samsung X1-S heart rate monitor",
    url: "http://127.0.0.1:8000/api/samsung-x1s-heart-rate/",
    model: "X1S",
    version: "1.1",
    unit: "per minutes",
    properties: [
      { name: "model", getValue: (e: DeviceInfo) => e.model },
      { name: "version", getValue: (e: DeviceInfo) => e.version },
    ],
    payload: [{ name: "hr" }],
  },
  B_SAMSUNG: {
    name: "Samsung BPA blood pressure monitor",
    url: "http://127.0.0.1:8000/api/samsung-bpa-blood-pressure/",
    model: "BPA",
    version: "1.3",
    unit: "mmHg",
    properties: [
      { name: "model", getValue: (e: DeviceInfo) => e.model },
      { name: "version", getValue: (e: DeviceInfo) => e.version },
    ],
    payload: [{ name: "bp-sys" }, { name: "bp-dia" }],
  },
};

export async function fetchPostData(params: FetchType) {
  const { device, body } = params;
  console.log("body", body);

  const options: RequestInit = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    ...(body && { body: JSON.stringify(body) }),
  };

  const response = await fetch(device.url, options);

  return await response.json();
}
