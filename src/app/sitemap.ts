import { MetadataRoute } from "next";
import { projects } from "@/assets/data";
import { fetchAllPostSlugs } from "@/lib/hashnode";
import { HASHNODE_HOST, SITE_URL } from "@/lib/site";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticRoutes = ["", "/about", "/work", "/blog", "/contact"].map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: route === "" ? 1 : 0.8,
  }));

  const projectRoutes = projects.map((project) => ({
    url: `${SITE_URL}/work/${project.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  let blogRoutes: any[] = [];
  try {
    const slugs = await fetchAllPostSlugs(HASHNODE_HOST);
    blogRoutes = slugs.map((slug) => ({
      url: `${SITE_URL}/blog/${slug}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.6,
    }));
  } catch (error) {
    console.error("Error fetching slugs for sitemap:", error);
  }

  return [...staticRoutes, ...projectRoutes, ...blogRoutes];
}
