"use client";

import BackButton from "@/components/back-button";
import { useEffect, useRef, useState } from "react";

export default function FloatingBackLink({
  href,
  label,
}: {
  href: string;
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
    <div ref={anchorRef} className="relative mb-8 h-11 w-fit">
      <BackButton
        href={href}
        label={label}
        className={
          isFloating ? "fixed bottom-4 left-4 z-40 md:bottom-8 md:left-8" : "absolute left-0 top-0"
        }
      />
    </div>
  );
}
