"use client";

import type { HashnodePost } from "@/lib/hashnode";
import { pickRandomItems } from "@/lib/utils";
import BlogCard from "./blog-card";
import { useState, useEffect } from "react";

export default function RecommendedPosts({ 
  currentSlug, 
  tags 
}: { 
  currentSlug: string; 
  tags: string[] 
}) {
  const [posts, setPosts] = useState<HashnodePost[] | null>(
    tags.length > 0 ? null : [],
  );

  useEffect(() => {
    let cancelled = false;

    async function getPosts() {
      try {
        const searchParams = new URLSearchParams({ slug: currentSlug });

        tags.forEach((tag) => {
          searchParams.append("tag", tag);
        });

        const response = await fetch(`/api/blog/recommended?${searchParams.toString()}`);

        if (!response.ok) {
          if (!cancelled) {
            setPosts([]);
          }
          return;
        }

        const data: { posts?: HashnodePost[] } = await response.json();

        if (!cancelled) {
          setPosts(pickRandomItems(data.posts ?? [], 2));
        }
      } catch {
        if (!cancelled) {
          setPosts([]);
        }
      }
    }

    if (tags.length > 0) {
      getPosts();
    }

    return () => {
      cancelled = true;
    };
  }, [currentSlug, tags]);

  if (posts === null) {
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
              source: "Hashnode",
              url: post.blogUrl || `/blog/${post.slug}`,
              image: post.coverImage?.url || "/images/project-demos/project-placeholder.png",
              slug: post.slug
            }} 
          />
        ))}
      </div>
    </div>
  );
}
