"use client";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/assets/data";
import { ArrowIcon } from "@/assets/icons";
import MiniBrowserIframe from "@/components/mini-browser-iframe";

interface HeroShowreelProps {
  projects: Project[];
}

const INTERVAL_MS = 5000;
const PRELOAD_MARGIN = "1200px 0px";

function isDataSaverEnabled() {
  return (navigator as Navigator & {
    connection?: { saveData?: boolean };
  }).connection?.saveData === true;
}

function hasLivePreview(project: Project) {
  return project.embeddable !== false && Boolean(project.url && project.url !== "#");
}

export default function HeroShowreel({ projects }: HeroShowreelProps) {
  const featured = useMemo(() => projects.filter((p) => p.featured).slice(0, 5), [projects]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isInteracting, setIsInteracting] = useState(false);
  const [hasApproached, setHasApproached] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [canPreloadNext, setCanPreloadNext] = useState(false);
  const [readySlugs, setReadySlugs] = useState<Set<string>>(() => new Set());
  const previewRef = useRef<HTMLDivElement>(null);
  const hasProjects = featured.length > 0;

  const activeProject = featured[activeIndex] || featured[0];
  const nextIndex = (activeIndex + 1) % featured.length;
  const nextProject = featured[nextIndex];
  const isPaused = isHovered || isInteracting;
  const isRotating = isVisible && canPreloadNext && !isPaused &&
    featured.length > 1 && readySlugs.has(activeProject.slug) &&
    readySlugs.has(nextProject.slug);

  const goToSlide = useCallback((index: number) => {
    const activeSlug = featured[index]?.slug;
    const upcomingSlug = featured[(index + 1) % featured.length]?.slug;
    setReadySlugs((current) => new Set(
      [...current].filter((slug) => slug === activeSlug || slug === upcomingSlug),
    ));
    setIsInteracting(false);
    setActiveIndex(index);
  }, [featured]);

  const markReady = (slug: string, ready: boolean) => {
    if (ready && !isDataSaverEnabled()) setCanPreloadNext(true);
    setReadySlugs((current) => {
      if (current.has(slug) === ready) return current;
      const updated = new Set(current);
      if (ready) updated.add(slug);
      else updated.delete(slug);
      return updated;
    });
  };

  useEffect(() => {
    const preview = previewRef.current;
    if (!preview) return;

    const saveData = isDataSaverEnabled();

    if (!("IntersectionObserver" in window)) {
      const timer = setTimeout(() => {
        setHasApproached(true);
        setIsVisible(true);
        setCanPreloadNext(!saveData);
      }, 0);
      return () => clearTimeout(timer);
    }

    const approachObserver = saveData ? null : new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      setHasApproached(true);
      approachObserver?.disconnect();
    }, { rootMargin: PRELOAD_MARGIN });
    const visibilityObserver = new IntersectionObserver(([entry]) => {
      setIsVisible(entry.isIntersecting);
      if (entry.isIntersecting) {
        setHasApproached(true);
        if (!saveData) setCanPreloadNext(true);
      }
    });

    approachObserver?.observe(preview);
    visibilityObserver.observe(preview);
    return () => {
      approachObserver?.disconnect();
      visibilityObserver.disconnect();
    };
  }, [hasProjects]);

  useEffect(() => {
    if (!isRotating) return;

    const timer = setTimeout(() => goToSlide(nextIndex), INTERVAL_MS);

    return () => clearTimeout(timer);
  }, [goToSlide, isRotating, nextIndex]);

  if (!featured.length) return null;

  return (
    <div
      className="relative flex flex-col border border-black/15 bg-black/[0.02] dark:border-white/15 dark:bg-white/[0.02]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      role="region"
      aria-label="Featured Projects Showreel"
    >
      {/* Corner Crosshairs */}
      <span className="pointer-events-none absolute -left-1.5 -top-2 font-mono text-xs font-bold text-black/30 dark:text-white/30" aria-hidden="true">+</span>
      <span className="pointer-events-none absolute -right-1.5 -top-2 font-mono text-xs font-bold text-black/30 dark:text-white/30" aria-hidden="true">+</span>
      <span className="pointer-events-none absolute -bottom-2 -left-1.5 font-mono text-xs font-bold text-black/30 dark:text-white/30" aria-hidden="true">+</span>
      <span className="pointer-events-none absolute -bottom-2 -right-1.5 font-mono text-xs font-bold text-black/30 dark:text-white/30" aria-hidden="true">+</span>

      {/* Showreel Telemetry Bar & Header Nav Buttons */}
      <div className="flex items-center justify-between border-b border-black/10 px-4 py-2 font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-[#111111]/70 dark:border-white/10 dark:text-white/70">
        {!hasLivePreview(activeProject) && (
          <span className="font-mono text-[9px] font-bold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
            [CAPTURE]
          </span>
        )}

        <div className="ml-auto flex items-center gap-3">
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
              onClick={() => goToSlide((activeIndex - 1 + featured.length) % featured.length)}
              aria-label="Previous project"
              className="flex h-7 w-7 items-center justify-center border-r border-black/15 bg-white text-black transition-colors hover:bg-black hover:text-white dark:border-white/15 dark:bg-[#1a1a1a] dark:text-zinc-200 dark:hover:bg-white/15 dark:hover:text-white"
            >
              <i className="ri-arrow-left-s-line text-sm"></i>
            </button>
            <button
              onClick={() => goToSlide(nextIndex)}
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
          key={`${activeIndex}-${isRotating}`}
          className={`h-full bg-black dark:bg-white origin-left ${
            isRotating ? "animate-showreel-progress" : "w-0"
          }`}
        />
      </div>

      {/* Main Visual Display */}
      <div ref={previewRef} className="relative aspect-[3/4] sm:aspect-[16/9] lg:aspect-[16/8] min-h-[460px] sm:min-h-[460px] lg:min-h-[520px] w-full overflow-hidden bg-zinc-100 dark:bg-zinc-900">
        {/* Keep the next slide in the same DOM position when it becomes active,
            since moving an iframe can reload it even if its React key is stable. */}
        {featured.map((project, index) => {
          const isActive = project === activeProject;
          const isPreloading = canPreloadNext && index === nextIndex;
          if (!isActive && !isPreloading) return null;

          return (
            <div
              key={project.slug}
              inert={!isActive}
              className={`absolute inset-0 ${isActive ? "z-10" : "pointer-events-none opacity-0"}`}
            >
              {hasLivePreview(project) ? (
                <MiniBrowserIframe
                  url={project.url}
                  title={project.title}
                  containerClassName="h-full w-full border-0"
                  showCrosshairs={false}
                  liveLoading={hasApproached ? "eager" : "deferred"}
                  onLiveReadyChange={(ready) => markReady(project.slug, ready)}
                  onInteractionChange={isActive ? setIsInteracting : undefined}
                />
              ) : (
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  onLoad={() => markReady(project.slug, true)}
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 90vw, 1200px"
                  className="object-cover object-top transition-transform duration-700 hover:scale-105"
                />
              )}
            </div>
          );
        })}
      </div>

      {/* Project Details Panel */}
      <div className="border-t border-black/10 bg-white p-5 text-[#111111] dark:border-white/10 dark:bg-[#080808] dark:text-white sm:p-7 md:p-8">
        <div className="flex items-center justify-between gap-4 font-mono text-[10px] font-bold uppercase tracking-[0.24em] text-zinc-500 dark:text-zinc-400">
          <span>{activeProject.client}</span>
          {activeProject.caseStudy?.timeline && <span>{activeProject.caseStudy.timeline}</span>}
        </div>

        <h3 className="mt-2 font-display text-xl uppercase tracking-tight text-[#111111] dark:text-white sm:text-3xl md:text-4xl">
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
