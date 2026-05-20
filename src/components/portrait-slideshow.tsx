"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type PortraitSlideshowProps = {
  images: string[];
  alt: string;
  sizes: string;
  className?: string;
  intervalMs?: number;
  priority?: boolean;
};

export default function PortraitSlideshow({
  images,
  alt,
  sizes,
  className,
  intervalMs = 5000,
  priority = false,
}: PortraitSlideshowProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (images.length < 2) {
      return;
    }

    const intervalId = window.setInterval(() => {
      setActiveIndex((currentIndex) => (currentIndex + 1) % images.length);
    }, intervalMs);

    return () => {
      window.clearInterval(intervalId);
    };
  }, [images.length, intervalMs]);

  return (
    <>
      {images.map((src, index) => (
        <Image
          key={src}
          src={src}
          alt={index === activeIndex ? alt : ""}
          aria-hidden={index !== activeIndex}
          fill
          priority={priority && index === 0}
          sizes={sizes}
          className={`${className ?? ""} transition-opacity duration-700 ${
            index === activeIndex ? "opacity-100" : "opacity-0"
          }`.trim()}
        />
      ))}
    </>
  );
}
