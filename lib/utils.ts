export async function getData(api: string) {
  const res = await fetch(api, { cache: "no-store" });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
