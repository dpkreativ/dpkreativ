export async function getData(api: string) {
  const res = await fetch(api);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export const profileImage =
  "https://res.cloudinary.com/dpkreativ/image/upload/v1693216925/Personal%20Files/IMG-20220924-WA0013_2_htjy5p.jpg";
