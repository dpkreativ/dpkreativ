"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ReactNode, RefObject, useRef } from "react";
import { addSplitTextReveal } from "@/utils/gsap-split-text";

gsap.registerPlugin(ScrollTrigger);

type TextTag = "p" | "h1" | "h2" | "h3" | "h4" | "div" | "span";

type RevealTextProps = {
  as?: TextTag;
  className?: string;
  children: ReactNode;
  triggerStart?: string;
  lineDelay?: number;
  charStagger?: gsap.TweenVars["stagger"];
  noSplit?: boolean;
};

export default function RevealText({
  as: Tag = "p",
  className,
  children,
  triggerStart = "top 88%",
  lineDelay = 0.14,
  charStagger = 0.018,
  noSplit = false,
}: RevealTextProps) {
  const elementRef = useRef<HTMLElement | null>(null);

  useGSAP(
    () => {
      if (!elementRef.current) {
        return;
      }

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: elementRef.current,
          start: triggerStart,
          toggleActions: "play none none none",
        },
      });

      if (noSplit) {
        timeline.from(elementRef.current, {
          y: 30,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
        });
        return;
      }

      const revert = addSplitTextReveal(timeline, elementRef.current, {
        lineDelay,
        charStagger,
      });

      return () => {
        revert();
      };
    },
    { scope: elementRef },
  );

  switch (Tag) {
    case "h1":
      return <h1 ref={elementRef as RefObject<HTMLHeadingElement>} className={className}>{children}</h1>;
    case "h2":
      return <h2 ref={elementRef as RefObject<HTMLHeadingElement>} className={className}>{children}</h2>;
    case "h3":
      return <h3 ref={elementRef as RefObject<HTMLHeadingElement>} className={className}>{children}</h3>;
    case "h4":
      return <h4 ref={elementRef as RefObject<HTMLHeadingElement>} className={className}>{children}</h4>;
    case "div":
      return <div ref={elementRef as RefObject<HTMLDivElement>} className={className}>{children}</div>;
    case "span":
      return <span ref={elementRef as RefObject<HTMLSpanElement>} className={className}>{children}</span>;
    default:
      return <p ref={elementRef as RefObject<HTMLParagraphElement>} className={className}>{children}</p>;
  }
}
