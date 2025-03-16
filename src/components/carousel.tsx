"use client";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";

export default function Carousel({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [ref] = useEmblaCarousel({ dragFree: true }, [
    Autoplay({ delay: 5000 }),
  ]);
  return (
    <div className="overflow-hidden" ref={ref}>
      {/* Carousel content */}
      <div className="flex items-center gap-5 md:gap-10 backface-visible touch-pan-y ml-[calc(1rem*-1)] cursor-grab active:cursor-grabbing p-4">
        {children}
      </div>
    </div>
  );
}
