"use client";

import { cn } from "@/lib/utils";
import { useEffect, useRef, useState } from "react";

const linkClassName =
  "group inline-flex whitespace-nowrap border-2 border-faxx-dark bg-faxx-dark px-4 py-3 font-mono font-bold uppercase tracking-wider text-white shadow-[4px_4px_0px_0px_rgba(17,17,17,1)] transition-colors duration-200 hover:bg-white hover:text-faxx-dark active:translate-x-[4px] active:translate-y-[4px] active:shadow-[0px_0px_0px_0px_rgba(17,17,17,1)] dark:border-gray-700 dark:bg-white dark:text-faxx-dark dark:shadow-[4px_4px_0px_0px_rgba(0,229,255,1)] dark:hover:bg-black dark:hover:text-white dark:active:shadow-[0px_0px_0px_0px_rgba(0,229,255,1)]";

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
    <div ref={anchorRef} className="h-px w-px">
      {isFloating ? (
        <a
          href={href}
          download={downloadName}
          className={cn(linkClassName, "fixed bottom-4 left-4 z-40 md:bottom-8 md:left-8")}
        >
          <span className="flex items-center gap-2 whitespace-nowrap transition-colors duration-200 group-hover:text-faxx-dark dark:group-hover:text-white">
            <span>{label}</span>
            <i className="ri-download-line"></i>
          </span>
        </a>
      ) : null}
    </div>
  );
}
