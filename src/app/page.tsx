"use client";

import {
  aboutMe,
  brands,
  highlights,
  portraits,
  projects,
  skills,
} from "@/assets/data";
import { ArrowIcon } from "@/assets/icons";
import { useGSAP } from "@gsap/react";
import BlogPreview from "@/components/blog-preview";
import Button from "@/components/button";
import PortraitSlideshow from "@/components/portrait-slideshow";
import RevealText from "@/components/reveal-text";
import Socials from "@/components/socials";
import SplitHeading from "@/components/split-heading";
import WorkAccordion from "@/components/work-accordion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const container = useRef(null);
  const completedProjects = projects.filter(
    (project) => project.caseStudy?.timeline !== "In Progress",
  ).length;
  const heroStats = [
    {
      label: "Average Delivery Time",
      value: "6 weeks",
    },
    {
      label: "Projects Completed",
      value: `${completedProjects}+`,
    },
  ];
  const aboutTags = [
    "Web",
    "Mobile",
    "Software Engineering",
    "Technical Writing",
    "Documentation",
    "Devops",
    "AI",
  ];

  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });
      const quoteTl = gsap.timeline({
        defaults: { ease: "power2.out" },
        repeat: -1,
        repeatDelay: 0.6,
      });
      gsap.set(".hero-stat-card", { y: 48, autoAlpha: 0 });
      gsap.set(".hero-stat-label-char", { y: 12, autoAlpha: 0 });

      tl.from(".hero-review", { x: 40, opacity: 0, duration: 0.8 }, 0)
        .to(
          ".hero-stat-card",
          {
            y: 0,
            autoAlpha: 1,
            duration: 0.85,
            stagger: 0.16,
            clearProps: "transform,opacity,visibility",
          },
          0.18,
        )
        .to(
          ".hero-stat-label-char",
          {
            y: 0,
            autoAlpha: 1,
            duration: 0.45,
            stagger: 0.025,
            clearProps: "transform,opacity,visibility",
          },
          0.72,
        )
        .from(".hero-cta", { y: 24, opacity: 0, duration: 0.6 }, 0.95);

      gsap.set(".hero-quote-item", { autoAlpha: 0 });

      highlights.forEach((_, idx) => {
        const itemTl = gsap.timeline();

        itemTl
          .set(`.hero-quote-item-${idx}`, { autoAlpha: 1 })
          .from(
            `.hero-quote-copy-${idx}`,
            {
              y: 20,
              autoAlpha: 0,
              duration: 0.6,
              ease: "power2.out",
            },
            0,
          )
          .from(
            `.hero-quote-source-${idx}`,
            {
              y: 10,
              autoAlpha: 0,
              duration: 0.45,
              ease: "power2.out",
            },
            0.18,
          )
          .to({}, { duration: 6 })
          .to(`.hero-quote-item-${idx}`, {
            autoAlpha: 0,
            duration: 0.4,
            ease: "power2.in",
          });

        quoteTl.add(itemTl);
      });

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

      return () => {
        quoteTl.kill();
      };
    },
    { scope: container },
  );

  return (
    <main
      ref={container}
      className="w-full overflow-hidden bg-white text-[#111111] dark:bg-[#050505] dark:text-white"
    >
      <section className="relative pt-[84px]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,90,88,0.12),transparent_28%),radial-gradient(circle_at_top_left,rgba(17,17,17,0.06),transparent_20%)] dark:bg-[radial-gradient(circle_at_top_right,rgba(191,255,0,0.14),transparent_28%),radial-gradient(circle_at_top_left,rgba(255,255,255,0.08),transparent_20%)]" />

        <div className="relative mx-auto grid min-h-[calc(100vh-84px)] max-w-7xl gap-16 px-6 py-12 md:px-12 md:py-16 lg:grid-cols-[minmax(0,1.05fr)_minmax(320px,0.95fr)] lg:items-center">
          <div className="max-w-3xl">
            <h1 className="sr-only">Delivery Stats</h1>

            <div className="hero-stats-shell grid max-w-2xl grid-cols-2 gap-x-10 gap-y-6 sm:gap-x-14 md:gap-x-20">
              {heroStats.map((stat) => (
                <div
                  key={stat.label}
                  className="hero-stat-card flex min-w-0 flex-col gap-2"
                >
                  <p className="font-display text-[clamp(2.5rem,5.5vw,4.5rem)] leading-[0.94] tracking-[-0.04em] text-[#111111] dark:text-white">
                    {stat.value}
                  </p>

                  <p className="font-body text-sm leading-6 text-[#111111]/56 dark:text-white/56 md:text-base">
                    {Array.from(stat.label).map((char, index) => (
                      <span
                        key={`${stat.label}-${char}-${index}`}
                        className="hero-stat-label-char inline-block whitespace-pre"
                      >
                        {char === " " ? "\u00A0" : char}
                      </span>
                    ))}
                  </p>
                </div>
              ))}
            </div>

            <div className="hero-cta mt-12 flex flex-col gap-4 sm:mt-14 sm:flex-row sm:items-center">
              <Link href="/contact" className="w-max">
                <Button className="!px-6 !py-3 !text-sm">
                  <span>GET IN TOUCH</span>
                  <ArrowIcon />
                </Button>
              </Link>
            </div>
          </div>

          <div className="hero-review relative lg:pl-6">
            <div className="relative flex min-h-[280px] flex-col rounded-[2.25rem] border border-black/10 bg-black/[0.02] p-8 dark:border-white/10 dark:bg-white/[0.03] md:min-h-[340px] md:p-10">
              <span
                className="editorial-star absolute right-7 top-7 hidden md:block md:w-5"
                aria-hidden="true"
              ></span>

              <div className="relative min-h-[190px] flex-1 md:min-h-[220px]">
                {highlights.map((item, idx) => {
                  const [source, category] = item.source.split(" // ");

                  return (
                    <div
                      key={item.source}
                      className={`hero-quote-item hero-quote-item-${idx} absolute inset-0 flex flex-col items-end justify-center gap-6 text-right ${idx === 0 ? "opacity-100" : "opacity-0"}`}
                    >
                      <p className={`hero-quote-copy-${idx} max-w-xl font-display text-[clamp(1rem,1.85vw,1.9rem)] leading-[1.08] tracking-[-0.03em] text-[#111111] dark:text-white`}>
                        &quot;{item.quote}&quot;
                      </p>

                      <div className={`hero-quote-source-${idx} flex flex-wrap justify-end gap-2 font-mono text-[10px] font-bold uppercase tracking-[0.26em] text-[#111111]/45 dark:text-white/50`}>
                        <span>{source}</span>
                        {category ? <span aria-hidden="true">{"//"}</span> : null}
                        {category ? <span>{category}</span> : null}
                      </div>
                    </div>
                  );
                })}
              </div>

              <svg
                className="pointer-events-none absolute bottom-7 left-0 hidden h-24 w-14 text-[#111111]/16 dark:text-white/16 md:block"
                viewBox="0 0 52 96"
                fill="none"
                aria-hidden="true"
              >
                <path d="M0 0A48 48 0 0 1 0 96" stroke="currentColor" />
                <path d="M0 14A34 34 0 0 1 0 82" stroke="currentColor" />
                <path d="M0 28A20 20 0 0 1 0 68" stroke="currentColor" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      <section className="py-6">
        <div className="mx-auto flex max-w-7xl overflow-hidden px-6 md:px-12">
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
        </div>
      </section>

      <section className="reveal-section border-b border-black/10 dark:border-white/10">
        <div className="mx-auto grid max-w-7xl gap-14 px-6 py-20 md:px-12 lg:grid-cols-[minmax(300px,0.8fr)_minmax(0,1fr)] lg:items-center">
          <div className="mx-auto flex w-full max-w-sm flex-col items-center gap-6">
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[2rem] border border-black/10 bg-black/[0.03] dark:border-white/10 dark:bg-white/[0.03]">
              <PortraitSlideshow
                images={portraits}
                alt="Divine Orji"
                priority
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover object-center"
              />
            </div>

            <div className="w-max rounded-full border border-black/10 bg-white/78 py-3 backdrop-blur dark:border-white/10 dark:bg-black/75">
              <Socials
                className="justify-center"
                linkClassName="dark:!text-white/72"
              />
            </div>
          </div>

          <div className="max-w-2xl">
            <SplitHeading
              as="h2"
              className="font-display text-[clamp(2.6rem,6vw,4.5rem)] leading-[0.96] tracking-[-0.04em] text-[#111111] dark:text-white"
            >
              WHO AM I?
            </SplitHeading>

            <RevealText
              as="p"
              className="mt-4 font-script text-2xl text-[#ff5a58] dark:text-faxx-lime md:text-3xl"
            >
              My friends call me Divi
            </RevealText>

            <p
              dangerouslySetInnerHTML={{
                __html:
                  "I help businesses ship with confidence, reduce customer friction, and make complex products easier to understand.",
              }}
              className="mt-6 text-base leading-8 text-[#111111]/72 dark:text-white/72 md:text-lg"
            />

            <div className="mt-8 flex flex-wrap gap-3">
              {aboutTags.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-black/10 bg-black/[0.04] px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-[0.22em] text-[#111111]/62 dark:border-white/10 dark:bg-white/[0.04] dark:text-white/62"
                >
                  {skill}
                </span>
              ))}
            </div>

            <Link href="/about" className="mt-12 inline-block w-max sm:mt-14">
              <Button className="!px-5 !py-3 !text-[10px]">
                <span>MORE DETAILS</span>
                <ArrowIcon />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="reveal-section border-b border-black/10 dark:border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-12">
          <div className="mb-10 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="max-w-3xl">
              <SplitHeading
                as="h2"
                className="font-display text-[clamp(2.4rem,5.8vw,4.5rem)] leading-[0.96] tracking-[-0.04em] text-[#111111] dark:text-white"
              >
                FEATURED PROJECTS.
              </SplitHeading>
            </div>

            <Link href="/work" className="w-max shrink-0">
              <Button className="!px-5 !py-3 !text-[10px]">
                <span>VIEW ALL</span>
                <ArrowIcon />
              </Button>
            </Link>
          </div>

          <WorkAccordion projects={projects} />
        </div>
      </section>

      <section className="reveal-section">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-12">
          <div className="mb-10 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="max-w-3xl">
              <SplitHeading
                as="h2"
                className="font-display text-[clamp(2.4rem,5.8vw,4.5rem)] leading-[0.96] tracking-[-0.04em] text-[#111111] dark:text-white"
              >
                LATEST ARTICLES.
              </SplitHeading>
            </div>

            <Link href="/blog" className="w-max shrink-0">
              <Button className="!px-5 !py-3 !text-[10px]">
                <span>VISIT ARCHIVE</span>
                <ArrowIcon />
              </Button>
            </Link>
          </div>

          <BlogPreview />
        </div>
      </section>
    </main>
  );
}
