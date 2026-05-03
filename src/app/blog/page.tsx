import type { Metadata } from "next";
import BlogArchive from "@/components/blog-archive";
import { fetchPosts } from "@/lib/hashnode";

const HASHNODE_HOST = "dpkreativ.hashnode.dev";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Blog",
  description: "Technical writing and insights on software engineering, product delivery, and community building by Divine Orji.",
  openGraph: {
    title: "Blog | Divine Orji",
    description: "Insights and articles on software engineering by Divine Orji.",
  },
};

export default async function BlogPage() {
  const data = await fetchPosts(HASHNODE_HOST, 20);
  const posts = data?.publication?.posts?.edges?.map((edge) => edge.node) || [];

  return <BlogArchive posts={posts} />;
}
