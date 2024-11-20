export async function fetchPatchPolarMX2(formData: FormData) {
  const response = await fetch(
    "http://127.0.0.1:8000/api/polar-mx2-heart-rate/",
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        pulse: formData.get("polar-mx2"),
      }),
    }
  );
  const { data } = await response.json();

  return data;
}
