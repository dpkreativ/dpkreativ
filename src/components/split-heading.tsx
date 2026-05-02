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
  lines: ReactNode[];
  triggerStart?: string;
};

export default function SplitHeading({
  as: Tag = "h2",
  className,
  lines,
  triggerStart = "top 85%",
}: SplitHeadingProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      const lineNodes = gsap.utils.toArray<HTMLElement>(".split-heading-line");
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: triggerStart,
          toggleActions: "play none none none",
        },
      });

      const reverts = lineNodes.map((lineNode, index) =>
        addSplitTextReveal(timeline, lineNode, {
          at: index * 0.18,
          lineDelay: 0.16,
          charStagger: 0.02,
        }),
      );

      return () => {
        reverts.forEach((revert) => revert());
      };
    },
    { scope: containerRef },
  );

  return (
    <div ref={containerRef}>
      <Tag className={className}>
        {lines.map((line, idx) => (
          <span key={idx} className="block split-heading-line">
            {line}
          </span>
        ))}
      </Tag>
    </div>
  );
}
