"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef, useState } from "react";

export default function Preloader() {
  const containerRef = useRef(null);
  const [hidden, setHidden] = useState(false);

  useGSAP(() => {
    const tl = gsap.timeline({
      onComplete: () => setHidden(true),
    });

    tl.to(".preloader-text", {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power3.out",
    })
      .to(".preloader-text", {
        opacity: 0,
        y: -20,
        duration: 0.5,
        delay: 0.5,
      })
      .to(
        containerRef.current,
        {
          y: "-100%",
          duration: 0.8,
          ease: "power3.inOut",
        },
        "-=0.1"
      );
  }, { scope: containerRef });

  if (hidden) return null;

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black text-white"
    >
      <h1 className="preloader-text text-4xl md:text-6xl font-serif opacity-0 translate-y-10">
        Divine Orji
      </h1>
    </div>
  );
}
