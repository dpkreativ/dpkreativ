"use client";

import Link from "next/link";

type Blog = {
  title: string;
  excerpt: string;
  date: string;
  source: string;
  url: string;
  image: string;
  slug: string;
};

export default function BlogCard({ blog }: { blog: Blog }) {
  const isExternal = blog.url.startsWith("http://") || blog.url.startsWith("https://");

  return (
    <Link
      href={blog.url}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noreferrer" : undefined}
      className="group relative flex h-full flex-col gap-5 border border-black/10 bg-white/80 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-black/40 dark:border-white/10 dark:bg-white/[0.04] dark:hover:border-white/40 dark:hover:bg-white/[0.06]"
    >
      <div className="flex justify-between items-start gap-4">
        <span className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-black/45 dark:text-white/45">
          {blog.source} <span aria-hidden="true">{"//"}</span>{" "}
          {new Date(blog.date).toLocaleDateString("en-US", { month: "short", year: "numeric" })}
        </span>
      </div>

      <h3 className="font-display text-2xl leading-[1.02] tracking-[-0.03em] text-[#111111] transition-colors group-hover:text-zinc-600 dark:text-white dark:group-hover:text-zinc-300 sm:text-[2rem]">
        {blog.title}
      </h3>

      <p className="line-clamp-3 font-body text-sm leading-7 text-black/70 dark:text-white">
        {blog.excerpt}
      </p>

      <div className="mt-auto flex items-center gap-2 pt-2 font-mono text-[11px] font-bold uppercase tracking-[0.24em] text-black/55 transition-colors group-hover:text-black dark:text-white/58 dark:group-hover:text-white">
        <span>Read Article</span>
        <i className="ri-arrow-right-up-line transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"></i>
      </div>
    </Link>
  );
}
