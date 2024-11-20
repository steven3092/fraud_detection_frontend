import { DeviceType } from "./devices";

export type FetchType = {
  device: DeviceType;
  body?: object;
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
