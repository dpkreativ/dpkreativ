"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import type { Project } from "@/assets/data";
import { ArrowIcon } from "@/assets/icons";

interface HeroShowreelProps {
  projects: Project[];
}

const INTERVAL_MS = 5000;

export default function HeroShowreel({ projects }: HeroShowreelProps) {
  const featured = projects.filter((p) => p.featured).slice(0, 5);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const activeProject = featured[activeIndex] || featured[0];

  const handlePrev = () => {
    setActiveIndex((current) => (current - 1 + featured.length) % featured.length);
  };

  const handleNext = () => {
    setActiveIndex((current) => (current + 1) % featured.length);
  };

  useEffect(() => {
    if (!activeProject || isPaused || featured.length < 2) return;

    const timer = setTimeout(() => {
      setActiveIndex((current) => (current + 1) % featured.length);
    }, INTERVAL_MS);

    return () => clearTimeout(timer);
  }, [activeIndex, isPaused, activeProject, featured.length]);

  if (!featured.length) return null;

  return (
    <div
      className="relative flex flex-col border border-black/15 bg-black/[0.02] dark:border-white/15 dark:bg-white/[0.02]"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      role="region"
      aria-label="Featured Projects Showreel"
    >
      {/* Corner Crosshairs */}
      <span className="pointer-events-none absolute -left-1.5 -top-2 font-mono text-xs font-bold text-black/30 dark:text-white/30" aria-hidden="true">+</span>
      <span className="pointer-events-none absolute -right-1.5 -top-2 font-mono text-xs font-bold text-black/30 dark:text-white/30" aria-hidden="true">+</span>
      <span className="pointer-events-none absolute -bottom-2 -left-1.5 font-mono text-xs font-bold text-black/30 dark:text-white/30" aria-hidden="true">+</span>
      <span className="pointer-events-none absolute -bottom-2 -right-1.5 font-mono text-xs font-bold text-black/30 dark:text-white/30" aria-hidden="true">+</span>

      {/* Showreel Telemetry Bar & Header Nav Buttons */}
      <div className="flex items-center justify-end border-b border-black/10 px-4 py-2 font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-[#111111]/70 dark:border-white/10 dark:text-white/70">
        <div className="flex items-center gap-3">
          {isPaused && (
            <span className="font-mono text-[9px] uppercase tracking-widest text-zinc-500 dark:text-zinc-400">
              [PAUSED]
            </span>
          )}
          <span className="font-mono text-[11px] font-bold">
            {String(activeIndex + 1).padStart(2, "0")} / {String(featured.length).padStart(2, "0")}
          </span>

          <div className="flex items-center border border-black/15 dark:border-white/15">
            <button
              onClick={handlePrev}
              aria-label="Previous project"
              className="flex h-7 w-7 items-center justify-center border-r border-black/15 bg-white text-black transition-colors hover:bg-black hover:text-white dark:border-white/15 dark:bg-[#1a1a1a] dark:text-zinc-200 dark:hover:bg-white/15 dark:hover:text-white"
            >
              <i className="ri-arrow-left-s-line text-sm"></i>
            </button>
            <button
              onClick={handleNext}
              aria-label="Next project"
              className="flex h-7 w-7 items-center justify-center bg-white text-black transition-colors hover:bg-black hover:text-white dark:bg-[#1a1a1a] dark:text-zinc-200 dark:hover:bg-white/15 dark:hover:text-white"
            >
              <i className="ri-arrow-right-s-line text-sm"></i>
            </button>
          </div>
        </div>
      </div>

      {/* Progress Line */}
      <div className="h-[2px] w-full bg-black/5 dark:bg-white/5 overflow-hidden">
        <div
          key={`${activeIndex}-${isPaused}`}
          className={`h-full bg-black dark:bg-white origin-left ${
            isPaused ? "w-0" : "animate-showreel-progress"
          }`}
        />
      </div>

      {/* Main Visual Display */}
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-zinc-100 dark:bg-zinc-900 sm:aspect-[16/9] lg:aspect-[16/8]">

        <AnimatePresence mode="wait">
          <motion.div
            key={activeProject.slug}
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.01 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="absolute inset-0"
          >
            <Image
              src={activeProject.image}
              alt={activeProject.title}
              fill
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1280px) 90vw, 1200px"
              className="object-cover object-top transition-transform duration-700 hover:scale-105"
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Project Details Panel */}
      <div className="border-t border-black/10 bg-white p-5 text-[#111111] dark:border-white/10 dark:bg-[#080808] dark:text-white sm:p-7 md:p-8">
        <div className="flex items-center justify-between gap-4 font-mono text-[10px] font-bold uppercase tracking-[0.24em] text-zinc-500 dark:text-zinc-400">
          <span>{activeProject.client}</span>
          <span>{activeProject.caseStudy?.timeline || "2024"}</span>
        </div>

        <h3 className="mt-2 font-display text-2xl uppercase tracking-tight text-[#111111] dark:text-white sm:text-3xl md:text-4xl">
          {activeProject.title}
        </h3>

        {activeProject.caseStudy?.headline && (
          <p className="mt-2 line-clamp-2 font-body text-xs leading-relaxed text-[#111111]/70 dark:text-white/70 sm:text-sm md:text-base max-w-3xl">
            {activeProject.caseStudy.headline}
          </p>
        )}

        <div className="mt-5 flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-black/10 dark:border-white/10">
          <div className="flex flex-wrap gap-2">
            {activeProject.tags.slice(0, 4).map((tag) => (
              <span
                key={tag}
                className="border border-black/10 bg-black/[0.03] px-2.5 py-1 font-mono text-[10px] font-bold uppercase tracking-wider text-[#111111]/70 dark:border-white/15 dark:bg-white/[0.05] dark:text-white/70"
              >
                {tag}
              </span>
            ))}
          </div>

          <Link
            href={`/work/${activeProject.slug}`}
            className="group/link inline-flex items-center gap-2 border border-black bg-black px-4 py-2 font-mono text-xs font-bold uppercase tracking-[0.2em] text-white transition-colors hover:bg-zinc-800 dark:border-white dark:bg-white dark:text-black dark:hover:bg-zinc-200"
          >
            <span>EXPLORE CASE STUDY</span>
            <span className="transition-transform duration-200 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5">
              <ArrowIcon />
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}
