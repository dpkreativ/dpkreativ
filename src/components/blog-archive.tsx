"use client";

import type { HashnodePost } from "@/lib/hashnode";
import BlogCard from "@/components/blog-card";
import RevealText from "@/components/reveal-text";
import SplitHeading from "@/components/split-heading";
import { useMemo, useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function BlogArchive({ posts }: { posts: HashnodePost[] }) {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const container = useRef<HTMLElement>(null);

  const categories = useMemo(() => {
    const cats = new Set(posts.flatMap((post) => post.tags?.map((tag) => tag.name) || []));
    return ["All", ...Array.from(cats)];
  }, [posts]);

  const filteredPosts = useMemo(() => {
    let filtered = posts;

    if (activeCategory !== "All") {
      filtered = filtered.filter((post) => post.tags?.some((tag) => tag.name === activeCategory));
    }

    if (searchQuery) {
      filtered = filtered.filter(
        (post) =>
          post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          post.brief?.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    return filtered;
  }, [posts, activeCategory, searchQuery]);

  useGSAP(
    () => {
      gsap.from(".filter-item", { x: -20, opacity: 0, duration: 0.5, stagger: 0.05, delay: 0.5 });
    },
    { scope: container }
  );

  return (
    <main ref={container} className="flex-1 w-full flex flex-col pt-[84px]">
      <div
        className="fixed inset-0 -z-10 opacity-[0.03] dark:opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(17, 17, 17, 0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(17, 17, 17, 0.5) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="w-full space-y-16 px-6 py-16 md:px-12 md:py-24 lg:px-24">
        <header className="space-y-6">
          <SplitHeading
            as="h1"
            className="font-display text-3xl md:text-8xl lg:text-9xl uppercase tracking-tighter leading-[1.1]"
            lines={[
              <span key="blog-title-line-1">
                THE <span className="text-gray-700 dark:text-faxx-lime">TECHNICAL</span>
              </span>,
              <span key="blog-title-line-2" className="text-gray-700 dark:text-faxx-lime">
                ARCHIVE.
              </span>,
            ]}
          />
          <RevealText
            as="p"
            className="blog-subtitle font-mono text-sm md:text-base text-zinc-600 dark:text-faxx-lime font-bold uppercase tracking-widest"
          >
            Insights // Case Studies // Technical Guides
          </RevealText>
        </header>

        {categories.length > 1 ? (
          <div className="flex flex-col gap-6 border-y-4 border-faxx-dark py-12 dark:border-gray-700 sm:flex-row">
            <div className="flex-1 space-y-6">
              <RevealText
                as="h3"
                className="font-mono text-xs uppercase font-bold tracking-widest opacity-60"
                triggerStart="top 94%"
                lineDelay={0.1}
              >
                Search Articles
              </RevealText>
              <input
                type="text"
                placeholder="Search by title or content..."
                value={searchQuery}
                onChange={(event) => setSearchQuery(event.target.value)}
                className="filter-item w-full border-4 border-faxx-dark bg-white px-4 py-3 font-mono text-sm uppercase tracking-widest transition-colors focus:border-faxx-cyan focus:outline-none dark:border-gray-700 dark:bg-black"
              />
            </div>

            <div className="w-full space-y-6 sm:w-auto sm:min-w-[200px]">
              <RevealText
                as="h3"
                className="font-mono text-xs uppercase font-bold tracking-widest opacity-60"
                triggerStart="top 94%"
                lineDelay={0.1}
              >
                Filter by Category
              </RevealText>
              <select
                value={activeCategory}
                onChange={(event) => setActiveCategory(event.target.value)}
                className="filter-item w-full cursor-pointer appearance-none border-4 border-faxx-dark bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2220%22%20height%3D%2220%22%20fill%3D%22%23444444%22%3E%3Cpath%20d%3D%22M10%200l10%2010-10%2010z%22%2F%3E%3C%2Fsvg%3E')] bg-[length:12px] bg-[right_12px_center] bg-no-repeat bg-white px-4 py-3 font-mono text-sm uppercase tracking-widest transition-colors focus:border-faxx-cyan focus:outline-none dark:border-gray-700 dark:bg-black"
              >
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>
          </div>
        ) : null}

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {filteredPosts.length > 0 ? (
            filteredPosts.map((post) => (
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
                  slug: post.slug,
                }}
              />
            ))
          ) : (
            <div className="col-span-full border-4 border-dashed border-faxx-dark/20 py-24 text-center dark:border-gray-700">
              <p className="font-display text-4xl uppercase opacity-20">No articles found</p>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
