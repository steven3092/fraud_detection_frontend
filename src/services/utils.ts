export type DeviceInfo = {
  NAME: string;
  URL: string;
};

export type FetchType = {
  device: DeviceInfo;
  body: Object | null;
};

export const DEVICE: Record<string, DeviceInfo> = {
  H_POLAR: {
    NAME: "Polar MX2 heart rate monitor",
    URL: "http://127.0.0.1:8000/api/polar-mx2-heart-rate/",
  },
  H_SAMSUNG: {
    NAME: "Samsung X1-S heart rate monitor",
    URL: "http://127.0.0.1:8000/api/samsung-x1s-heart-rate/",
  },
  B_SAMSUNG: {
    NAME: "Samsung BPA blood pressure monitor",
    URL: "http://127.0.0.1:8000/api/samsung-bpa-blood-pressure/",
  },
};

export async function fetchData(params: FetchType) {
  const { device, body } = params;

  const options: RequestInit = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    ...(body && { body: JSON.stringify(body) }),
  };

  const response = await fetch(device.URL, options);

  if (!response.ok) {
    throw new Error(`Failed to fetch from ${device.URL}. Status: ${response.status}`);
  }

  return await response.json();
}
