export async function fetchPatchSamsungBPA(formData: FormData) {
  const response = await fetch(
    "http://127.0.0.1:8000/api/samsung-bpa-blood-pressure/",
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        bp_sys: formData.get("sys-samsung-bpa"),
        bp_dia: formData.get("dia-samsung-bpa"),
      }),
    }
  );

  const { data } = await response.json();

  return data;
}
