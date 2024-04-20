export async function fetchData() {
  const response = await fetch("http://localhost:3000/meals");
  const data = await response.json();

  if (!response.ok) throw new Error("Could not fetch data!");

  return data;
}
export async function postData(items, customer) {
  const response = await fetch("http://localhost:3000/orders", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({
      order: {
        items,
        customer,
      },
    }),
  });
  const data = await response.json();

  if (!response.ok) throw new Error("Could not send data!");

  return data;
}
