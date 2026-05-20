"use client";

import type { HashnodePost } from "@/lib/hashnode";
import { useState, useEffect } from "react";
import BlogCard from "./blog-card";

export default function BlogPreview() {
  const [posts, setPosts] = useState<HashnodePost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;

    async function getPosts() {
      try {
        const response = await fetch("/api/blog/posts?limit=3");

        if (!response.ok) {
          if (!cancelled) {
            setPosts([]);
          }
          return;
        }

        const data: { posts?: HashnodePost[] } = await response.json();

        if (!cancelled) {
          setPosts(data.posts ?? []);
        }
      } catch {
        if (!cancelled) {
          setPosts([]);
        }
      } finally {
        if (!cancelled) {
          setLoading(false);
        }
      }
    }

    getPosts();

    return () => {
      cancelled = true;
    };
  }, []);

  if (loading) {
    return (
      <div className="grid gap-6 md:grid-cols-3">
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            className="animate-pulse rounded-[2rem] border border-black/10 bg-white/70 p-6 dark:border-white/10 dark:bg-white/[0.04]"
          >
            <div className="mb-4 h-4 w-1/3 rounded-full bg-black/10 dark:bg-white/10"></div>
            <div className="mb-3 h-10 rounded-2xl bg-black/10 dark:bg-white/10"></div>
            <div className="mb-2 h-3 rounded-full bg-black/10 dark:bg-white/10"></div>
            <div className="h-3 w-2/3 rounded-full bg-black/10 dark:bg-white/10"></div>
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
            source: "Hashnode",
            url: post.blogUrl || `/blog/${post.slug}`,
            image: post.coverImage?.url || "/images/project-demos/project-placeholder.png",
            slug: post.slug
          }} 
        />
      ))}
    </div>
  );
}
