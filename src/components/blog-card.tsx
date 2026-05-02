"use client";

import Link from "next/link";

type Blog = {
  title: string;
  excerpt: string;
  date: string;
  category: string;
  source: string;
  url: string;
  image: string;
  slug: string;
};

export default function BlogCard({ blog }: { blog: Blog }) {
  return (
    <Link
      href={blog.url}
      className="group relative bg-white dark:bg-zinc-900 border-4 border-faxx-dark dark:border-gray-700 p-6 flex flex-col gap-4 transition-all duration-300 hover:-translate-y-2 hover:shadow-[8px_8px_0px_0px_rgba(60,60,60,1)] dark:hover:shadow-[8px_8px_0px_0px_rgba(191,255,0,1)]"
    >
      {/* Canonical link for SEO */}
      <link rel="canonical" href={blog.url} />
      <div className="flex justify-between items-start gap-4">
        <span className="bg-gray-700 dark:bg-faxx-lime text-white dark:text-faxx-dark font-mono text-[10px] font-bold uppercase px-2 py-1 border-2 border-faxx-dark">
          {blog.category}
        </span>
        <span className="font-mono text-[10px] uppercase font-bold text-faxx-dark dark:text-gray-400">
          {blog.source} <span aria-hidden="true">{"//"}</span>{" "}
          {new Date(blog.date).toLocaleDateString("en-US", { month: "short", year: "numeric" })}
        </span>
      </div>

      <h3 className="font-display text-2xl uppercase tracking-tighter leading-tight group-hover:text-gray-700 dark:group-hover:text-faxx-lime transition-colors dark:text-white">
        {blog.title}
      </h3>

      <p className="font-body text-sm text-faxx-dark/80 dark:text-gray-400 line-clamp-3">
        {blog.excerpt}
      </p>

      <div className="mt-auto pt-4 flex items-center gap-2 font-mono text-xs font-bold uppercase text-faxx-dark dark:text-white group-hover:text-gray-700 dark:group-hover:text-faxx-lime transition-colors">
        <span>Read Article</span>
        <i className="ri-arrow-right-up-line transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"></i>
      </div>
    </Link>
  );
}
