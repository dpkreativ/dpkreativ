import { MetadataRoute } from "next";
import { projects } from "@/assets/data";
import { fetchAllPostSlugs } from "@/lib/hashnode";

const HASHNODE_HOST = "dpkreativ.hashnode.dev";
const BASE_URL = "https://dpkreativ.vercel.app";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticRoutes = ["", "/about", "/work", "/blog", "/contact"].map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: route === "" ? 1 : 0.8,
  }));

  const projectRoutes = projects.map((project) => ({
    url: `${BASE_URL}/work/${project.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  let blogRoutes: any[] = [];
  try {
    const slugs = await fetchAllPostSlugs(HASHNODE_HOST);
    blogRoutes = slugs.map((slug) => ({
      url: `${BASE_URL}/blog/${slug}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.6,
    }));
  } catch (error) {
    console.error("Error fetching slugs for sitemap:", error);
  }

  return [...staticRoutes, ...projectRoutes, ...blogRoutes];
}
