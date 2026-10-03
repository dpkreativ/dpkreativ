"use client";

import type { Project } from "@/assets/data";
import { ArrowIcon } from "@/assets/icons";
import ProjectBrandMark from "@/components/project-brand-mark";
import Image from "next/image";
import Link from "next/link";

export default function FeaturedBentoGrid({ projects }: { projects: Project[] }) {
  const featured = projects.filter((p) => p.featured);

  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-12">
      {featured.map((project, index) => {
        const headline =
          project.caseStudy?.headline ||
          (project.description && project.description[0]) ||
          "";

        // Layout variant assignment based on bento rhythm
        // 0: Hero wide (8 cols)
        // 1: Column compact (4 cols)
        // 2: Column compact (4 cols)
        // 3: Hero wide reversed (8 cols)
        // 4 & 5: Half-width spotlights (6 cols each)
        if (index === 0) {
          // Row 1 - Left Hero Card (8 cols)
          return (
            <Link
              key={project.slug}
              href={`/work/${project.slug}`}
              className="group relative flex flex-col justify-between overflow-hidden border border-black/15 bg-white/80 transition-all duration-300 hover:border-black dark:border-white/15 dark:bg-white/[0.03] dark:hover:border-white md:col-span-2 lg:col-span-8"
            >
              <div className="grid h-full grid-cols-1 lg:grid-cols-12">
                <div className="flex flex-col justify-between p-6 sm:p-8 lg:col-span-5">
                  <div>
                    <div className="flex items-center justify-between gap-3">
                      <div className="flex items-center gap-3">
                        <ProjectBrandMark brand={project.brand} fallback={project.title} />
                        <div className="min-w-0">
                          <span className="block font-mono text-[10px] font-bold uppercase tracking-[0.24em] text-[#111111]/60 dark:text-white/60">
                            {project.client}
                          </span>
                          <span className="font-mono text-[10px] uppercase tracking-widest text-zinc-500 dark:text-zinc-400 font-bold">
                            {project.caseStudy?.timeline || "2024"}
                          </span>
                        </div>
                      </div>
                      <span className="font-mono text-[9px] font-bold uppercase tracking-widest text-zinc-400 dark:text-zinc-500">
                        [01 // FEATURED]
                      </span>
                    </div>

                    <h3 className="mt-6 font-display text-3xl leading-[1.02] tracking-[-0.03em] text-[#111111] transition-colors group-hover:text-zinc-600 dark:text-white dark:group-hover:text-zinc-300 sm:text-4xl uppercase">
                      {project.title}
                    </h3>

                    {headline ? (
                      <p className="mt-4 font-body text-sm leading-relaxed text-[#111111]/70 dark:text-white/70 sm:text-base">
                        {headline}
                      </p>
                    ) : null}
                  </div>

                  <div className="mt-8 space-y-5">
                    {project.tags && project.tags.length > 0 ? (
                      <div className="flex flex-wrap gap-2">
                        {project.tags.slice(0, 4).map((tag) => (
                          <span
                            key={tag}
                            className="border border-black/10 bg-black/[0.03] px-2.5 py-1 font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-[#111111]/65 dark:border-white/15 dark:bg-white/[0.05] dark:text-white/80"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    ) : null}

                    <div className="inline-flex items-center gap-2 font-mono text-[11px] font-bold uppercase tracking-[0.26em] text-black dark:text-white">
                      <span>View Case Study</span>
                      <span className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                        <ArrowIcon />
                      </span>
                    </div>
                  </div>
                </div>

                <div className="relative min-h-[260px] overflow-hidden border-t border-black/15 bg-black/[0.02] dark:border-white/15 dark:bg-black/40 sm:min-h-[340px] lg:col-span-7 lg:border-t-0 lg:border-l">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 66vw, 55vw"
                    className="object-cover object-top transition-all duration-700 group-hover:scale-105"
                  />
                </div>
              </div>
            </Link>
          );
        }

        if (index === 1) {
          // Row 1 - Right Vertical Card (4 cols)
          return (
            <Link
              key={project.slug}
              href={`/work/${project.slug}`}
              className="group relative flex flex-col justify-between overflow-hidden border border-black/15 bg-white/80 transition-all duration-300 hover:border-black dark:border-white/15 dark:bg-white/[0.03] dark:hover:border-white md:col-span-1 lg:col-span-4"
            >
              <div className="relative aspect-[16/10] w-full overflow-hidden border-b border-black/15 bg-black/[0.02] dark:border-white/15 dark:bg-black/40">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover object-top transition-all duration-700 group-hover:scale-105"
                />
                <div className="absolute top-3 right-3 font-mono text-[9px] font-bold uppercase tracking-widest text-white/80 bg-black/60 px-2 py-0.5 border border-white/20">
                  [02 // SPEC]
                </div>
              </div>

              <div className="flex flex-1 flex-col justify-between p-6 sm:p-7">
                <div>
                  <div className="flex items-center justify-between gap-3">
                    <ProjectBrandMark brand={project.brand} fallback={project.title} />
                    <span className="font-mono text-[10px] font-bold uppercase tracking-[0.24em] text-zinc-500 dark:text-zinc-400">
                      {project.caseStudy?.timeline || "2024"}
                    </span>
                  </div>

                  <h3 className="mt-5 font-display text-2xl leading-[1.05] tracking-[-0.03em] text-[#111111] transition-colors group-hover:text-zinc-600 dark:text-white dark:group-hover:text-zinc-300 sm:text-3xl uppercase">
                    {project.title}
                  </h3>

                  {headline ? (
                    <p className="mt-3 line-clamp-2 font-body text-sm leading-relaxed text-[#111111]/70 dark:text-white/70">
                      {headline}
                    </p>
                  ) : null}
                </div>

                <div className="mt-6 flex items-center justify-between gap-2 border-t border-black/10 pt-4 dark:border-white/10">
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.slice(0, 2).map((tag) => (
                      <span
                        key={tag}
                        className="border border-black/10 bg-black/[0.03] px-2 py-0.5 font-mono text-[9px] font-bold uppercase tracking-wider text-[#111111]/60 dark:border-white/15 dark:bg-white/[0.05] dark:text-white/80"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="shrink-0 text-black transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 dark:text-white">
                    <ArrowIcon />
                  </div>
                </div>
              </div>
            </Link>
          );
        }

        if (index === 2) {
          // Row 2 - Left Vertical Card (4 cols)
          return (
            <Link
              key={project.slug}
              href={`/work/${project.slug}`}
              className="group relative flex flex-col justify-between overflow-hidden border border-black/15 bg-white/80 transition-all duration-300 hover:border-black dark:border-white/15 dark:bg-white/[0.03] dark:hover:border-white md:col-span-1 lg:col-span-4"
            >
              <div className="relative aspect-[16/10] w-full overflow-hidden border-b border-black/15 bg-black/[0.02] dark:border-white/15 dark:bg-black/40">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover object-top transition-all duration-700 group-hover:scale-105"
                />
                <div className="absolute top-3 right-3 font-mono text-[9px] font-bold uppercase tracking-widest text-white/80 bg-black/60 px-2 py-0.5 border border-white/20">
                  [03 // ARCHIVE]
                </div>
              </div>

              <div className="flex flex-1 flex-col justify-between p-6 sm:p-7">
                <div>
                  <div className="flex items-center justify-between gap-3">
                    <ProjectBrandMark brand={project.brand} fallback={project.title} />
                    <span className="font-mono text-[10px] font-bold uppercase tracking-[0.24em] text-zinc-500 dark:text-zinc-400">
                      {project.caseStudy?.timeline || "2024"}
                    </span>
                  </div>

                  <h3 className="mt-5 font-display text-2xl leading-[1.05] tracking-[-0.03em] text-[#111111] transition-colors group-hover:text-zinc-600 dark:text-white dark:group-hover:text-zinc-300 sm:text-3xl uppercase">
                    {project.title}
                  </h3>

                  {headline ? (
                    <p className="mt-3 line-clamp-2 font-body text-sm leading-relaxed text-[#111111]/70 dark:text-white/70">
                      {headline}
                    </p>
                  ) : null}
                </div>

                <div className="mt-6 flex items-center justify-between gap-2 border-t border-black/10 pt-4 dark:border-white/10">
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.slice(0, 2).map((tag) => (
                      <span
                        key={tag}
                        className="border border-black/10 bg-black/[0.03] px-2 py-0.5 font-mono text-[9px] font-bold uppercase tracking-wider text-[#111111]/60 dark:border-white/15 dark:bg-white/[0.05] dark:text-white/80"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="shrink-0 text-black transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 dark:text-white">
                    <ArrowIcon />
                  </div>
                </div>
              </div>
            </Link>
          );
        }

        if (index === 3) {
          // Row 2 - Right Hero Card (8 cols) - Reversed Layout (Image left, text right on desktop)
          return (
            <Link
              key={project.slug}
              href={`/work/${project.slug}`}
              className="group relative flex flex-col justify-between overflow-hidden border border-black/15 bg-white/80 transition-all duration-300 hover:border-black dark:border-white/15 dark:bg-white/[0.03] dark:hover:border-white md:col-span-2 lg:col-span-8"
            >
              <div className="grid h-full grid-cols-1 lg:grid-cols-12">
                <div className="relative min-h-[260px] overflow-hidden border-b border-black/15 bg-black/[0.02] dark:border-white/15 dark:bg-black/40 sm:min-h-[340px] lg:order-1 lg:col-span-7 lg:border-b-0 lg:border-r">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 66vw, 55vw"
                    className="object-cover object-top transition-all duration-700 group-hover:scale-105"
                  />
                </div>

                <div className="flex flex-col justify-between p-6 sm:p-8 lg:order-2 lg:col-span-5">
                  <div>
                    <div className="flex items-center justify-between gap-3">
                      <div className="flex items-center gap-3">
                        <ProjectBrandMark brand={project.brand} fallback={project.title} />
                        <div className="min-w-0">
                          <span className="block font-mono text-[10px] font-bold uppercase tracking-[0.24em] text-[#111111]/60 dark:text-white/60">
                            {project.client}
                          </span>
                          <span className="font-mono text-[10px] uppercase tracking-widest text-zinc-500 dark:text-zinc-400 font-bold">
                            {project.caseStudy?.timeline || "2024"}
                          </span>
                        </div>
                      </div>
                      <span className="font-mono text-[9px] font-bold uppercase tracking-widest text-zinc-400 dark:text-zinc-500">
                        [04 // PLATFORM]
                      </span>
                    </div>

                    <h3 className="mt-6 font-display text-3xl leading-[1.02] tracking-[-0.03em] text-[#111111] transition-colors group-hover:text-zinc-600 dark:text-white dark:group-hover:text-zinc-300 sm:text-4xl uppercase">
                      {project.title}
                    </h3>

                    {headline ? (
                      <p className="mt-4 font-body text-sm leading-relaxed text-[#111111]/70 dark:text-white/70 sm:text-base">
                        {headline}
                      </p>
                    ) : null}
                  </div>

                  <div className="mt-8 space-y-5">
                    {project.tags && project.tags.length > 0 ? (
                      <div className="flex flex-wrap gap-2">
                        {project.tags.slice(0, 4).map((tag) => (
                          <span
                            key={tag}
                            className="border border-black/10 bg-black/[0.03] px-2.5 py-1 font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-[#111111]/65 dark:border-white/15 dark:bg-white/[0.05] dark:text-white/80"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    ) : null}

                    <div className="inline-flex items-center gap-2 font-mono text-[11px] font-bold uppercase tracking-[0.26em] text-black dark:text-white">
                      <span>View Case Study</span>
                      <span className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                        <ArrowIcon />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          );
        }

        // Row 3 - Dual Balanced Cards (6 cols each)
        return (
          <Link
            key={project.slug}
            href={`/work/${project.slug}`}
            className="group relative flex flex-col justify-between overflow-hidden border border-black/15 bg-white/80 transition-all duration-300 hover:border-black dark:border-white/15 dark:bg-white/[0.03] dark:hover:border-white md:col-span-1 lg:col-span-6"
          >
            <div className="relative aspect-[16/9] w-full overflow-hidden border-b border-black/15 bg-black/[0.02] dark:border-white/15 dark:bg-black/40">
              <Image
                src={project.image}
                alt={project.title}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover object-top transition-all duration-700 group-hover:scale-105"
              />
              <div className="absolute top-3 right-3 font-mono text-[9px] font-bold uppercase tracking-widest text-white/80 bg-black/60 px-2 py-0.5 border border-white/20">
                {`[0${index + 1} // SPOTLIGHT]`}
              </div>
            </div>

            <div className="flex flex-1 flex-col justify-between p-6 sm:p-8">
              <div>
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3 min-w-0">
                    <ProjectBrandMark brand={project.brand} fallback={project.title} />
                    <span className="font-mono text-[10px] font-bold uppercase tracking-[0.24em] text-[#111111]/60 dark:text-white/60 truncate">
                      {project.client}
                    </span>
                  </div>
                  <span className="shrink-0 font-mono text-[10px] font-bold uppercase tracking-[0.24em] text-zinc-500 dark:text-zinc-400">
                    {project.caseStudy?.timeline || "2024"}
                  </span>
                </div>

                <h3 className="mt-5 font-display text-2xl leading-[1.04] tracking-[-0.03em] text-[#111111] transition-colors group-hover:text-zinc-600 dark:text-white dark:group-hover:text-zinc-300 sm:text-3xl uppercase">
                  {project.title}
                </h3>

                {headline ? (
                  <p className="mt-3 font-body text-sm leading-relaxed text-[#111111]/70 dark:text-white/70 sm:text-base">
                    {headline}
                  </p>
                ) : null}
              </div>

              <div className="mt-7 flex flex-wrap items-center justify-between gap-4 border-t border-black/10 pt-4 dark:border-white/10">
                <div className="flex flex-wrap gap-2">
                  {project.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="border border-black/10 bg-black/[0.03] px-2.5 py-1 font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-[#111111]/65 dark:border-white/15 dark:bg-white/[0.05] dark:text-white/80"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="inline-flex items-center gap-2 font-mono text-[10px] font-bold uppercase tracking-[0.22em] text-black dark:text-white">
                  <span>View Project</span>
                  <span className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                    <ArrowIcon />
                  </span>
                </div>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
