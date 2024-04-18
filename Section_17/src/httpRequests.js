export async function fetchData() {
  const response = await fetch("http://localhost:3000/meals");
  const data = await response.json();

  if (!response.ok) throw new Error("Could not fetch data!");

  return data;
}
