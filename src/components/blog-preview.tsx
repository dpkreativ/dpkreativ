"use client";

import { useState, useEffect } from "react";
import BlogCard from "./blog-card";
import { fetchPosts } from "@/lib/hashnode";
import { HASHNODE_HOST } from "@/lib/hashnode";

export default function BlogPreview() {
  const [posts, setPosts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getPosts() {
      try {
        const data = await fetchPosts(HASHNODE_HOST, 3);
        setPosts(data?.publication?.posts?.edges?.map((edge: any) => edge.node) || []);
      } catch (error) {
        console.error("Error fetching posts:", error);
      } finally {
        setLoading(false);
      }
    }
    getPosts();
  }, []);

  if (loading) {
    return (
      <div className="grid gap-6 md:grid-cols-3">
        {[1, 2, 3].map((i) => (
          <div key={i} className="border-4 border-faxx-dark dark:border-gray-700 p-6 animate-pulse">
            <div className="h-4 bg-gray-200 dark:bg-gray-700 mb-4"></div>
            <div className="h-3 bg-gray-200 dark:bg-gray-700 mb-2"></div>
            <div className="h-3 bg-gray-200 dark:bg-gray-700 w-2/3"></div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="grid gap-6 md:grid-cols-3">
      {posts.map((post) => (
        <BlogCard 
          key={post.id} 
          blog={{
            title: post.title,
            excerpt: post.brief,
            date: post.publishedAt,
            category: post.tags?.[0]?.name || "General",
            source: "Hashnode",
            url: `/blog/${post.slug}`,
            image: post.coverImage?.url || "/images/project-placeholder.png",
            slug: post.slug
          }} 
        />
      ))}
    </div>
  );
}
