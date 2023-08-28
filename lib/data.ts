export async function getData(api: string) {
  const res = await fetch(api);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export const profileImage =
  "https://res.cloudinary.com/dpkreativ/image/upload/v1598755150/Personal%20Files/IMG_3pa6vc_ngay0b.jpg";
