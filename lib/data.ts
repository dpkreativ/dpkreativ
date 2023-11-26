import { getData } from "./utils";

export const profileImage =
  "https://res.cloudinary.com/dpkreativ/image/upload/v1693216925/Personal%20Files/IMG-20220924-WA0013_2_htjy5p.jpg";

// Get all posts from Dev.to
export async function allPosts() {
  const res = await getData("https://dev.to/api/articles?username=dpkreativ");

  return res;
}

// Get repos from GitHub
export async function gitHubRepos() {
  const res = await getData(
    "https://api.github.com/users/dpkreativ/repos?per_page=100"
  );

  return res
    .filter((repo: any) => repo.topics.includes("showcase"))
    .sort((a: any, b: any) => a.updated_at - b.updated_at);
}

// Get showcase data for a specific repo
export async function showcaseData(repo: string) {
  try {
    const res = await getData(
      `https://github.com/dpkreativ/${repo}/raw/showcase/showcase.json`
    );

    return res;
  } catch (error) {
    console.log(error);
  }
}
