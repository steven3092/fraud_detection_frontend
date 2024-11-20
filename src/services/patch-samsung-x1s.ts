export async function fetchPatchSamsungX1S(formData: FormData) {
  const response = await fetch(
    "http://127.0.0.1:8000/api/samsung-x1s-heart-rate/",
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        eui: 
        hr: formData.get("samsung-x1s"),
      }),
    }
  );
  const { data } = await response.json();

  return data;
}
