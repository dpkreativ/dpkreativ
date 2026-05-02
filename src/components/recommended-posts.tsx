"use client";

import { fetchRecommendedPosts } from "@/lib/hashnode";
import BlogCard from "./blog-card";
import { useState, useEffect } from "react";

export default function RecommendedPosts({ 
  currentSlug, 
  tags 
}: { 
  currentSlug: string; 
  tags: string[] 
}) {
  const [posts, setPosts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getPosts() {
      try {
        const data = await fetchRecommendedPosts("dpkreativ.hashnode.dev", tags, currentSlug);
        setPosts(data?.slice(0, 2) || []);
      } catch (error) {
        console.error("Error fetching recommended posts:", error);
      } finally {
        setLoading(false);
      }
    }
    if (tags.length > 0) {
      getPosts();
    } else {
      setLoading(false);
    }
  }, [currentSlug, tags]);

  if (loading) {
    return (
      <div className="mt-12 pt-8 border-t-4 border-faxx-dark dark:border-gray-700">
        <h3 className="font-display text-2xl md:text-3xl uppercase tracking-tighter mb-6 text-faxx-dark dark:text-white">
          Recommended <span className="text-zinc-600 dark:text-faxx-lime">Posts</span>
        </h3>
        <div className="grid gap-6 sm:grid-cols-2">
          {[1, 2].map((i) => (
            <div key={i} className="border-4 border-faxx-dark dark:border-gray-700 p-6 animate-pulse">
              <div className="h-4 bg-gray-200 dark:bg-gray-700 mb-4"></div>
              <div className="h-3 bg-gray-200 dark:bg-gray-700 w-2/3"></div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (posts.length === 0) return null;

  return (
    <div className="mt-12 pt-8 border-t-4 border-faxx-dark dark:border-gray-700">
      <h3 className="font-display text-2xl md:text-3xl uppercase tracking-tighter mb-6 text-faxx-dark dark:text-white">
        Recommended <span className="text-zinc-600 dark:text-faxx-lime">Posts</span>
      </h3>
      <div className="grid gap-6 sm:grid-cols-2">
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
    </div>
  );
}
