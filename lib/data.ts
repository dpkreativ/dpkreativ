export async function getData(api: string) {
  const res = await fetch(api);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export const blogData = [
  {
    id: 1,
    title: "New Blog Title",
    description: "A really cool description explaining the content of the blog",
    src: "https://example.com/",
    publication: "Hashnode",
  },
  {
    id: 2,
    title: "New Blog Title",
    description: "A really cool description explaining the content of the blog",
    src: "https://example.com/",
    publication: "Dev.to",
  },
  {
    id: 3,
    title: "New Blog Title",
    description: "A really cool description explaining the content of the blog",
    src: "https://example.com/",
    publication: "FreeCodeCamp",
  },
  {
    id: 4,
    title: "New Blog Title",
    description: "A really cool description explaining the content of the blog",
    src: "https://example.com/",
    publication: "Hashnode",
  },
  {
    id: 5,
    title: "New Blog Title",
    description: "A really cool description explaining the content of the blog",
    src: "https://example.com/",
    publication: "Medium",
  },
];
