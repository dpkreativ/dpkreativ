"use client";

import {
  brands,
  portraits,
  projects,
} from "@/assets/data";
import { ArrowIcon } from "@/assets/icons";
import { useGSAP } from "@gsap/react";
import BlogPreview from "@/components/blog-preview";
import Button from "@/components/button";
import SplitHeading from "@/components/split-heading";
import HeroShowreel from "@/components/hero-showreel";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const container = useRef(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });
      gsap.set(".hero-portrait-wrap", { y: 32, autoAlpha: 0 });

      tl.from(".hero-headline", { y: 24, opacity: 0, duration: 0.7 }, 0)
        .from(".hero-subhead", { y: 16, opacity: 0, duration: 0.5 }, 0.15)
        .from(".hero-cta", { y: 16, opacity: 0, duration: 0.5 }, 0.3)
        .to(
          ".hero-portrait-wrap",
          {
            y: 0,
            autoAlpha: 1,
            duration: 0.85,
            clearProps: "transform,opacity,visibility",
          },
          0.1,
        );

      gsap.utils.toArray(".reveal-section").forEach((section: any) => {
        gsap.from(section, {
          scrollTrigger: {
            trigger: section,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
          y: 80,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
        });
      });
    },
    { scope: container },
  );

  return (
    <main
      ref={container}
      className="w-full overflow-hidden bg-white text-[#111111] dark:bg-[#111111] dark:text-white"
    >
      <section className="relative pt-[84px] border-b border-black/10 dark:border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(0,0,0,0.03),transparent_35%),radial-gradient(circle_at_top_left,rgba(0,0,0,0.02),transparent_25%)] dark:bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.04),transparent_35%),radial-gradient(circle_at_top_left,rgba(255,255,255,0.02),transparent_25%)]" />

        <div className="relative mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 md:py-20 lg:grid-cols-[minmax(0,1.15fr)_minmax(320px,0.85fr)] lg:items-center">
          <div className="mx-auto max-w-3xl lg:mx-0">
            <h2 className="sr-only">WHO AM I?</h2>

            <h1 className="hero-headline font-display text-[clamp(3.5rem,8vw,6.5rem)] leading-[0.88] tracking-[-0.04em] text-[#111111] dark:text-white uppercase">
              Building Software That Works.
            </h1>

            <p className="hero-subhead mt-6 max-w-xl font-body text-base leading-relaxed text-[#111111]/75 dark:text-white/75 md:text-lg">
              I help make your business grow by building fast, reliable software that is easy to use.
            </p>

            <div className="hero-cta mt-8 flex flex-wrap items-center gap-4">
              <Link href="/work" className="w-max">
                <Button className="!px-6 !py-3 !text-xs font-mono font-bold tracking-widest uppercase">
                  <span>MY WORK</span>
                  <ArrowIcon />
                </Button>
              </Link>
              <Link href="/contact" className="w-max">
                <Button className="!bg-white !text-black dark:!bg-black dark:!text-white !border-black dark:!border-white/20 hover:!bg-zinc-100 dark:hover:!bg-zinc-900 !px-6 !py-3 !text-xs font-mono font-bold tracking-widest uppercase">
                  <span>GET IN TOUCH</span>
                  <ArrowIcon />
                </Button>
              </Link>
            </div>
          </div>

          <div className="hero-portrait-wrap relative lg:pl-6">
            <div className="relative mx-auto w-full max-w-md border border-black/15 bg-black/[0.02] p-2 dark:border-white/15 dark:bg-white/[0.02] lg:max-w-none">
              {/* Corner Crosshairs */}
              <span className="pointer-events-none absolute -left-1.5 -top-2 font-mono text-xs font-bold text-black/30 dark:text-white/30" aria-hidden="true">+</span>
              <span className="pointer-events-none absolute -right-1.5 -top-2 font-mono text-xs font-bold text-black/30 dark:text-white/30" aria-hidden="true">+</span>
              <span className="pointer-events-none absolute -bottom-2 -left-1.5 font-mono text-xs font-bold text-black/30 dark:text-white/30" aria-hidden="true">+</span>
              <span className="pointer-events-none absolute -bottom-2 -right-1.5 font-mono text-xs font-bold text-black/30 dark:text-white/30" aria-hidden="true">+</span>

              {/* Portrait Media Container */}
              <div className="relative aspect-[4/5] sm:aspect-[3/3.5] lg:aspect-[4/5] w-full overflow-hidden bg-zinc-100 dark:bg-zinc-900">
                <Image
                  src={portraits[0]}
                  alt="Divine Orji - Software Engineer"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 45vw, 480px"
                  priority
                  className="object-cover object-top"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Screen-reader metric landmarks */}
        <div className="sr-only">
          <span>Average Delivery Time</span>
          <span>Projects Completed</span>
        </div>
      </section>

      <section className="reveal-section">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
          <div className="mb-10 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <div>
              <SplitHeading
                as="h2"
                className="font-display text-[clamp(2.4rem,5.8vw,4.5rem)] leading-[0.96] tracking-[-0.04em] text-[#111111] dark:text-white uppercase"
              >
                FEATURED PROJECTS.
              </SplitHeading>
            </div>

            <Link href="/work" className="w-max shrink-0">
              <Button className="!px-6 !py-3 !text-xs font-mono font-bold tracking-widest uppercase">
                <span>VIEW ALL WORK</span>
                <ArrowIcon />
              </Button>
            </Link>
          </div>

          <HeroShowreel projects={projects} />
        </div>
      </section>

      <section className="w-full overflow-hidden py-4 sm:py-6">
        <div className="animate-marquee flex w-max whitespace-nowrap will-change-transform">
          {[0, 1].map((track) => (
            <div
              key={track}
              className="flex shrink-0 items-center gap-10 pr-10 sm:gap-14 sm:pr-14 md:gap-16 md:pr-16"
              aria-hidden={track === 1 ? "true" : undefined}
            >
              {brands.map((brand) => {
                const content = (
                  <div className="flex shrink-0 items-center">
                    <Image
                      src={brand.image}
                      alt={brand.title}
                      width={brand.width}
                      height={brand.height}
                      className={`h-12 w-auto max-w-none object-contain sm:h-14 md:h-16 lg:h-[4.5rem] ${brand.invertInDarkMode ? "dark:invert" : ""}`}
                    />
                  </div>
                );

                return brand.url ? (
                  <a
                    href={brand.url}
                    key={`${track}-${brand.title}`}
                    target="_blank"
                    rel="noreferrer"
                    className="transition-transform hover:-translate-y-0.5"
                  >
                    {content}
                  </a>
                ) : (
                  <div
                    key={`${track}-${brand.title}`}
                    className="transition-transform hover:-translate-y-0.5"
                  >
                    {content}
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </section>

      <section className="reveal-section">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
          <div className="mb-10 max-w-3xl">
            <SplitHeading
              as="h2"
              className="font-display text-[clamp(2.4rem,5.8vw,4.5rem)] leading-[0.96] tracking-[-0.04em] text-[#111111] dark:text-white"
            >
              LATEST ARTICLES.
            </SplitHeading>
          </div>

          <BlogPreview />

          <div className="mt-10 flex justify-center md:justify-end">
            <Link href="/blog" className="w-max shrink-0">
              <Button className="!px-5 !py-3 !text-[10px]">
                <span>VISIT ARCHIVE</span>
                <ArrowIcon />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
