import { DeviceType } from "../utils/types";

export type FetchType = {
  device: DeviceType;
  body?: object;
};

export async function fetchPostData(params: FetchType) {
  const { device, body } = params;

  const options: RequestInit = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    ...(body && { body: JSON.stringify(body) }),
  };

  const response = await fetch(device.url, options);

  const data = await response.json();

  return data;
}
