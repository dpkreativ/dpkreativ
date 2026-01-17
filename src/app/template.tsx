"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

export default function Template({ children }: { children: React.ReactNode }) {
  const containerRef = useRef(null);

  useGSAP(() => {
    gsap.from(containerRef.current, {
      y: 20,
      opacity: 0,
      duration: 0.5,
      ease: "power3.out",
    });
  }, { scope: containerRef });

  return <div ref={containerRef}>{children}</div>;
}
