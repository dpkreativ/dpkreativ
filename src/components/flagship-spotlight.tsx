"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowIcon } from "@/assets/icons";
import type { Project } from "@/assets/data";

interface FlagshipSpotlightProps {
  project?: Project;
}

export default function FlagshipSpotlight({ project }: FlagshipSpotlightProps) {
  if (!project) return null;

  return (
    <div className="relative flex flex-col border border-black/15 bg-black/[0.02] dark:border-white/15 dark:bg-white/[0.02]">
      {/* Corner Crosshairs */}
      <span className="pointer-events-none absolute -left-1.5 -top-2 font-mono text-xs font-bold text-black/30 dark:text-white/30" aria-hidden="true">+</span>
      <span className="pointer-events-none absolute -right-1.5 -top-2 font-mono text-xs font-bold text-black/30 dark:text-white/30" aria-hidden="true">+</span>
      <span className="pointer-events-none absolute -bottom-2 -left-1.5 font-mono text-xs font-bold text-black/30 dark:text-white/30" aria-hidden="true">+</span>
      <span className="pointer-events-none absolute -bottom-2 -right-1.5 font-mono text-xs font-bold text-black/30 dark:text-white/30" aria-hidden="true">+</span>

      {/* Telemetry Header Bar */}
      <div className="flex items-center justify-between border-b border-black/10 px-5 py-3 font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-[#111111]/70 dark:border-white/10 dark:text-white/70">
        <div className="flex items-center gap-2">
          <span className="inline-block h-2 w-2 bg-black dark:bg-white" />
          <span>FLAGSHIP BUILD // ARCHITECTURE</span>
        </div>
        <div className="flex items-center gap-2 text-zinc-500 dark:text-zinc-400">
          <span>[SYSTEM 01]</span>
        </div>
      </div>

      {/* Visual Frame */}
      <div className="relative aspect-[16/10] w-full overflow-hidden sm:aspect-[16/10]">
        <Image
          src={project.image}
          alt={project.title}
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 45vw"
          className="object-cover object-top transition-all duration-700 hover:scale-105"
        />

        <div className="absolute inset-x-0 bottom-0 flex flex-col justify-end p-5 text-white sm:p-7">
          <div className="flex items-center justify-between gap-4 font-mono text-[10px] font-bold uppercase tracking-[0.24em] text-zinc-400">
            <span>{project.client}</span>
            <span>{project.caseStudy?.timeline || "2024"}</span>
          </div>

          <h3 className="mt-2 font-display text-2xl uppercase tracking-tight text-white sm:text-3xl">
            {project.title}
          </h3>

          {project.caseStudy?.headline && (
            <p className="mt-2 line-clamp-2 font-body text-xs leading-relaxed text-zinc-300 sm:text-sm">
              {project.caseStudy.headline}
            </p>
          )}

          <div className="mt-4 flex flex-wrap gap-1.5 pt-3 border-t border-white/15">
            {project.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="border border-white/20 bg-black/40 px-2 py-0.5 font-mono text-[9px] font-bold uppercase tracking-wider text-zinc-300"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Metrics Strip */}
      <div className="grid grid-cols-3 border-t border-black/10 bg-white dark:border-white/10 dark:bg-[#0A0A0A]">
        <div className="flex flex-col p-4 border-r border-black/10 dark:border-white/10">
          <span className="font-mono text-[9px] font-bold uppercase tracking-widest text-zinc-500 dark:text-zinc-400">
            REVENUE FLOW
          </span>
          <span className="mt-1 font-display text-base font-bold text-black dark:text-white sm:text-lg">
            N200K &rarr; N3M
          </span>
        </div>
        <div className="flex flex-col p-4 border-r border-black/10 dark:border-white/10">
          <span className="font-mono text-[9px] font-bold uppercase tracking-widest text-zinc-500 dark:text-zinc-400">
            DELIVERY
          </span>
          <span className="mt-1 font-display text-base font-bold text-black dark:text-white sm:text-lg">
            6 WEEKS
          </span>
        </div>
        <Link
          href={`/work/${project.slug}`}
          className="group flex flex-col justify-center p-4 text-left transition-colors hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black"
        >
          <span className="font-mono text-[9px] font-bold uppercase tracking-widest opacity-70">
            CASE STUDY
          </span>
          <span className="mt-1 inline-flex items-center gap-1 font-mono text-xs font-bold uppercase tracking-wider">
            <span>EXPLORE</span>
            <span className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
              <ArrowIcon />
            </span>
          </span>
        </Link>
      </div>
    </div>
  );
}
