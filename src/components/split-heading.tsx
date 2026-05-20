"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ReactNode, useRef } from "react";
import { addSplitTextReveal } from "@/utils/gsap-split-text";

gsap.registerPlugin(ScrollTrigger);

type HeadingTag = "h1" | "h2" | "h3" | "h4" | "div";

type SplitHeadingProps = {
  as?: HeadingTag;
  className?: string;
  children: ReactNode;
  triggerStart?: string;
};

export default function SplitHeading({
  as: Tag = "h2",
  className,
  children,
  triggerStart = "top 85%",
}: SplitHeadingProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      const headingNode = containerRef.current?.querySelector<HTMLElement>("[data-split-heading]");

      if (!headingNode) {
        return;
      }

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: triggerStart,
          toggleActions: "play none none none",
        },
      });

      const revert = addSplitTextReveal(timeline, headingNode, {
        at: 0,
        lineDelay: 0.16,
        charStagger: 0.02,
      });

      return () => {
        revert();
      };
    },
    { scope: containerRef },
  );

  return (
    <div ref={containerRef}>
      <Tag data-split-heading className={className}>
        {children}
      </Tag>
    </div>
  );
}
