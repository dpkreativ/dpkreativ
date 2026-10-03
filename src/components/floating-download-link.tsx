"use client";

import { cn } from "@/lib/utils";
import { useEffect, useRef, useState } from "react";

const baseButtonClasses =
  "group inline-flex items-center gap-2 whitespace-nowrap border border-black/20 bg-black px-4 py-2.5 font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-white transition-all duration-300 hover:bg-zinc-800 dark:border-white/20 dark:bg-white/10 dark:text-white dark:hover:bg-white/15";

export default function FloatingDownloadLink({
  href,
  downloadName,
  label,
}: {
  href: string;
  downloadName: string;
  label: string;
}) {
  const anchorRef = useRef<HTMLDivElement>(null);
  const [isFloating, setIsFloating] = useState(false);

  useEffect(() => {
    const anchor = anchorRef.current;

    if (!anchor) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsFloating(!entry.isIntersecting);
      },
      {
        rootMargin: "-112px 0px 0px 0px",
        threshold: 0,
      }
    );

    observer.observe(anchor);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <div ref={anchorRef} className="inline-block">
        <a
          href={href}
          download={downloadName}
          className={baseButtonClasses}
        >
          <span>{label}</span>
          <i className="ri-download-line text-sm transition-transform duration-200 group-hover:translate-y-0.5" />
        </a>
      </div>

      {isFloating && (
        <a
          href={href}
          download={downloadName}
          className={cn(
            "group fixed bottom-6 left-6 z-40 inline-flex items-center gap-2 whitespace-nowrap border border-black/20 bg-black/90 px-4 py-2.5 font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-white backdrop-blur-md transition-all duration-300 hover:bg-black dark:border-white/20 dark:bg-[#1a1a1a]/95 dark:text-white dark:hover:bg-[#222222] md:bottom-8 md:left-8"
          )}
        >
          <span>{label}</span>
          <i className="ri-download-line text-sm transition-transform duration-200 group-hover:translate-y-0.5" />
        </a>
      )}
    </>
  );
}
