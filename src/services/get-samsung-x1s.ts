export async function fetchSamsungX1S() {
  const response = await fetch(
    "http://127.0.0.1:8000/api/samsung-x1s-heart-rate/?eui=bd0f1767-824a-4eb4-af3e-2c5e849ebe4c"
  );
  const { data } = await response.json();
  return data;
}
