import type { Metadata } from "next";
import BlogArchive from "@/components/blog-archive";
import { fetchPosts } from "@/lib/hashnode";
import { HASHNODE_HOST, SITE_URL } from "@/lib/site";

export const revalidate = 3600;

const description = "Read Divine Orji’s practical guides on web development and notes on building and shipping software.";

export const metadata: Metadata = {
  title: "Blog",
  description,
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    url: `${SITE_URL}/blog`,
    title: "Blog | Divine Orji",
    description,
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog | Divine Orji",
    description,
  },
};

export default async function BlogPage() {
  const data = await fetchPosts(HASHNODE_HOST, 20);
  const posts = data?.publication?.posts?.edges?.map((edge) => edge.node) || [];

  return <BlogArchive posts={posts} />;
}
