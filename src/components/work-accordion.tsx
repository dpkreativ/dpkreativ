"use client";

import type { Project } from "@/assets/data";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowIcon } from "@/assets/icons";
import ProjectBrandMark from "@/components/project-brand-mark";

export default function WorkAccordion({ projects }: { projects: Project[] }) {
  const [activeIndex, setActiveIndex] = useState(0);

  const featuredProjects = projects.filter((p) => p.featured);

  return (
    <div className="flex h-[620px] w-full flex-col gap-4 md:h-[460px] md:flex-row">
      {featuredProjects.map((project, idx) => {
        const isActive = activeIndex === idx;

        return (
          <div
            key={project.slug}
            onClick={() => setActiveIndex(idx)}
            onTouchEnd={(event) => {
              if (!isActive) {
                event.preventDefault();
                setActiveIndex(idx);
              }
            }}
            className={`group relative cursor-pointer overflow-hidden rounded-[2rem] border border-black/10 bg-white/75 transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] dark:border-white/10 dark:bg-[#111111]
              ${isActive
                ? "flex-[6] md:flex-[5] shadow-[0_30px_90px_-42px_rgba(255,90,88,0.55)]"
                : "flex-1 saturate-50 hover:saturate-100 md:hover:flex-[1.15]"
              }
            `}
          >
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div
              className={`absolute inset-0 bg-gradient-to-t from-black via-black/45 to-black/10 transition-opacity duration-500 ${
                isActive ? "opacity-100" : "opacity-70 group-hover:opacity-85"
              }`}
            ></div>
            <div
              className={`absolute inset-0 bg-gradient-to-r from-black/78 via-black/38 to-transparent transition-opacity duration-500 ${
                isActive ? "opacity-100" : "opacity-85 group-hover:opacity-100"
              }`}
            ></div>

            <div
              className={`absolute left-6 top-6 flex flex-wrap gap-2 transition-all duration-500 ${
                isActive ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
              }`}
            >
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-black/10 bg-white/88 px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-[0.24em] text-[#111111]/72 dark:border-white/20 dark:bg-black/55 dark:text-white/90"
                >
                    {tag}
                </span>
              ))}
            </div>

            <div
              className={`absolute inset-y-0 left-0 flex w-full items-center p-6 md:p-8 transition-all duration-500 delay-100 ${
                isActive ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
              }`}
            >
              <div className="w-full">
                <div className="mb-5 flex items-center gap-4">
                  <ProjectBrandMark
                    brand={project.brand}
                    fallback={project.title}
                    className="h-12 w-12 border-white/25 shadow-[0_10px_30px_rgba(0,0,0,0.38)] md:h-14 md:w-14"
                    imageClassName="max-h-full max-w-full object-contain drop-shadow-[0_8px_18px_rgba(0,0,0,0.5)]"
                  />
                  <h3 className="font-display text-3xl leading-[0.95] tracking-[-0.04em] text-white drop-shadow-[0_10px_26px_rgba(0,0,0,0.75)] md:text-[2.75rem]">
                    {project.title}
                  </h3>
                </div>
                <Link
                  href={`/work/${project.slug}`}
                  className="inline-flex items-center gap-3 rounded-full border border-black/10 bg-faxx-coral px-5 py-3 font-mono text-[11px] font-bold uppercase tracking-[0.26em] text-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 hover:border-[#ff5a58]/60 hover:bg-white hover:text-[#111111] active:translate-x-[4px] active:translate-y-[4px] active:shadow-[0px_0px_0px_0px_rgba(0,0,0,1)] dark:border-faxx-lime dark:bg-faxx-lime dark:text-faxx-dark dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] dark:hover:border-faxx-lime dark:hover:bg-black dark:hover:text-white dark:active:shadow-[0px_0px_0px_0px_rgba(255,255,255,1)]"
                >
                  <span>View Case Study</span>
                  <ArrowIcon />
                </Link>
              </div>
            </div>

            {!isActive && (
              <div className="pointer-events-none absolute inset-0 flex items-center justify-start px-6 md:justify-center md:px-4">
                <div className="flex items-center gap-3 opacity-75 transition-opacity group-hover:opacity-100 md:rotate-90">
                  <ProjectBrandMark
                    brand={project.brand}
                    fallback={project.title}
                    className="h-10 w-10 border-white/25 shadow-[0_10px_30px_rgba(0,0,0,0.38)] md:h-11 md:w-11"
                    imageClassName="max-h-full max-w-full object-contain drop-shadow-[0_8px_18px_rgba(0,0,0,0.5)]"
                  />
                  <h3 className="whitespace-nowrap font-display text-2xl leading-none tracking-[-0.03em] text-white drop-shadow-[0_10px_26px_rgba(0,0,0,0.75)] md:text-3xl">
                    {project.title}
                  </h3>
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
