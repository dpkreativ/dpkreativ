"use client";

import {
  aboutMe,
  certifications,
  education,
  experience,
  languages,
  portraits,
  skills,
} from "@/assets/data";
import FloatingDownloadLink from "@/components/floating-download-link";
import PortraitSlideshow from "@/components/portrait-slideshow";
import RevealText from "@/components/reveal-text";
import SplitHeading from "@/components/split-heading";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

export default function About() {
  const container = useRef(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });
      tl.from(".about-image", { scale: 0.96, opacity: 0, duration: 0.9 })
        .from(".about-text", { y: 36, opacity: 0, duration: 0.7, stagger: 0.15 }, "-=0.4");
    },
    { scope: container }
  );

  return (
    <main ref={container} className="flex-1 w-full flex flex-col pt-[84px] bg-white text-[#111111] dark:bg-[#111111] dark:text-white">
      {/* Decorative Grid Background */}
      <div
        className="fixed inset-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none -z-10"
        style={{
          backgroundImage:
            "linear-gradient(rgba(17, 17, 17, 0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(17, 17, 17, 0.5) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Top Profile Grid */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 py-12 md:py-20 grid lg:grid-cols-12 gap-10 lg:gap-14 items-start">
        {/* Left Column: Narrative & Skills */}
        <div className="lg:col-span-7 space-y-10">
          <header className="max-w-4xl space-y-4">
            <SplitHeading
              as="h1"
              className="font-display text-4xl sm:text-6xl md:text-7xl uppercase tracking-tighter leading-[0.88] text-black dark:text-white"
            >
              ABOUT DIVI.
            </SplitHeading>

            <RevealText
              as="p"
              className="about-kicker font-mono text-xs md:text-sm text-zinc-500 dark:text-zinc-400 font-bold uppercase tracking-widest"
            >
              Software Engineer // Product Builder // Systems Writer
            </RevealText>

            <div className="pt-2">
              <FloatingDownloadLink
                href="/divine_orji_cv.pdf"
                downloadName="divine-orji-cv.pdf"
                label="Download CV PDF"
              />
            </div>
          </header>

          <div className="space-y-6 font-body text-base md:text-xl font-normal leading-relaxed text-[#111111]/80 dark:text-zinc-300 about-text">
            {aboutMe.map((paragraph, idx) => (
              <p
                key={idx}
                dangerouslySetInnerHTML={{ __html: paragraph }}
                className="border-l-2 border-black/20 dark:border-white/20 pl-6 leading-relaxed"
              />
            ))}
          </div>

          {/* Core Skills Matrix */}
          <div className="about-text grid gap-4 border border-black/15 bg-white p-6 dark:border-white/15 dark:bg-[#0A0A0A] md:p-8">
            <div className="flex items-center justify-between border-b border-black/10 pb-3 dark:border-white/10">
              <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-zinc-500 dark:text-zinc-400">
                TECHNICAL CAPABILITIES
              </span>
              <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-zinc-400">
                [{skills.length} DISCIPLINES]
              </span>
            </div>
            <div className="flex flex-wrap gap-2 pt-2">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="border border-black/10 bg-black/[0.03] px-3 py-1.5 font-mono text-[11px] font-bold uppercase tracking-wider text-black dark:border-white/15 dark:bg-white/[0.05] dark:text-white"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Visual Portrait */}
        <div className="lg:col-span-5">
          <div className="relative aspect-[4/5] overflow-hidden border border-black/15 bg-black/[0.02] dark:border-white/15 dark:bg-white/[0.02] about-image">
            <PortraitSlideshow
              images={portraits}
              alt="Divine Orji"
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover transition-all duration-700"
            />
          </div>
        </div>
      </div>

      {/* Experience & Career Snapshot */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 pb-20 md:pb-28 grid gap-14">
        <section className="grid gap-8 about-text">
          <div className="border-b border-black/15 pb-6 dark:border-white/15">
            <SplitHeading
              as="h2"
              className="font-display text-3xl md:text-5xl uppercase tracking-tighter leading-none"
            >
              EXPERIENCE SNAPSHOT.
            </SplitHeading>
          </div>

          <div className="grid gap-6">
            {experience.map((item, idx) => (
              <article
                key={`${item.company}-${item.role}-${item.period}`}
                className="grid gap-6 border border-black/15 bg-white p-6 dark:border-white/15 dark:bg-[#1a1a1a] md:p-8 lg:grid-cols-12 lg:items-start"
              >
                {/* Meta details */}
                <div className="lg:col-span-4 flex flex-col justify-between gap-3 border-b border-black/10 pb-4 lg:border-b-0 lg:border-r lg:pb-0 lg:pr-6 dark:border-white/10">
                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="inline-flex items-center border border-black/15 bg-black/[0.04] px-2 py-0.5 font-mono text-[10px] font-bold tracking-wider text-black dark:border-white/15 dark:bg-white/[0.06] dark:text-white">
                        {`0${idx + 1}`}
                      </span>
                      <span className="inline-flex items-center border border-black/10 bg-black/[0.02] px-2.5 py-0.5 font-mono text-[10px] font-semibold uppercase tracking-wider text-zinc-700 dark:border-white/10 dark:bg-white/[0.03] dark:text-zinc-300">
                        {item.period}
                      </span>
                    </div>
                    <h3 className="mt-2 font-display text-2xl uppercase tracking-tight text-black dark:text-white">
                      {item.role}
                    </h3>
                    <p className="mt-1 font-mono text-xs uppercase tracking-wider text-zinc-600 dark:text-zinc-400 font-bold">
                      {item.company}
                    </p>
                  </div>
                </div>

                {/* Details */}
                <div className="lg:col-span-8 space-y-4">
                  <p className="font-body text-base leading-relaxed text-[#111111]/80 dark:text-zinc-300">
                    {item.summary}
                  </p>

                  {item.highlights.length > 0 && (
                    <ul className="grid gap-2.5 pt-2 font-body text-sm leading-relaxed text-[#111111]/70 dark:text-zinc-400">
                      {item.highlights.map((highlight: string) => (
                        <li key={highlight} className="flex gap-3 items-start">
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 bg-black dark:bg-white" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Education, Credentials & Languages */}
        <section className="grid items-start gap-8 about-text lg:grid-cols-2">
          {/* Education */}
          <article className="grid content-start gap-6 border border-black/15 bg-white p-6 dark:border-white/15 dark:bg-[#1a1a1a] md:p-8">
            <div className="border-b border-black/10 pb-4 dark:border-white/10">
              <RevealText as="h3" className="font-display text-2xl md:text-3xl uppercase tracking-tight">
                Education
              </RevealText>
            </div>

            <div className="grid gap-6">
              {education.map((item) => (
                <div key={item.institution} className="grid gap-1.5">
                  <p className="font-display text-xl uppercase tracking-tight text-black dark:text-white">
                    {item.degree}
                  </p>
                  <p className="font-body text-base leading-relaxed text-[#111111]/75 dark:text-zinc-300">
                    {item.institution}
                  </p>
                  <span className="inline-flex w-fit items-center border border-black/10 bg-black/[0.02] px-2.5 py-0.5 font-mono text-[10px] font-semibold uppercase tracking-wider text-zinc-700 dark:border-white/10 dark:bg-white/[0.03] dark:text-zinc-300">
                    {item.period}
                  </span>
                </div>
              ))}
            </div>
          </article>

          {/* Credentials & Languages */}
          <article className="grid content-start gap-6 border border-black/15 bg-white p-6 dark:border-white/15 dark:bg-[#1a1a1a] md:p-8">
            <div className="border-b border-black/10 pb-4 dark:border-white/10">
              <RevealText as="h3" className="font-display text-2xl md:text-3xl uppercase tracking-tight">
                Credentials & Languages
              </RevealText>
            </div>

            <div className="space-y-6">
              <ul className="grid gap-2.5 font-body text-sm leading-relaxed text-[#111111]/80 dark:text-zinc-300">
                {certifications.map((item) => (
                  <li key={item} className="flex gap-3 items-start">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 bg-black dark:bg-white" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="border-t border-black/10 pt-4 dark:border-white/10">
                <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-zinc-500 dark:text-zinc-400">
                  SPOKEN & PROFESSIONAL LANGUAGES
                </span>
                <div className="flex flex-wrap gap-2 mt-2">
                  {languages.map((item) => (
                    <span
                      key={item}
                      className="border border-black/10 bg-black/[0.03] px-3 py-1 font-mono text-[11px] font-bold uppercase tracking-wider text-black dark:border-white/15 dark:bg-white/[0.05] dark:text-white"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </article>
        </section>
      </div>
    </main>
  );
}
