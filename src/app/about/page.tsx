"use client";

import {
  aboutMe,
  avatar,
  certifications,
  contact,
  education,
  experience,
  languages,
  skills,
} from "@/assets/data";
import RevealText from "@/components/reveal-text";
import SplitHeading from "@/components/split-heading";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

export default function About() {
  const container = useRef(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });
      tl.from(".about-image", { scale: 0.8, opacity: 0, duration: 1 })
        .from(".about-text", { y: 50, opacity: 0, duration: 0.8, stagger: 0.2 }, "-=0.5");
    },
    { scope: container }
  );

  return (
    <main ref={container} className="flex-1 w-full flex flex-col pt-[84px]">
      {/* Decorative Grid Background */}
      <div
        className="fixed inset-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none -z-10"
        style={{
          backgroundImage:
            "linear-gradient(rgba(17, 17, 17, 0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(17, 17, 17, 0.5) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      ></div>

      <div className="w-full max-w-7xl mx-auto px-10 md:px-12 py-16 md:py-24 grid lg:grid-cols-12 gap-12 items-start">
        {/* Left: Content */}
        <div className="lg:col-span-7 space-y-12">
          <header className="space-y-4">
            <SplitHeading
              as="h1"
              className="font-display text-4xl sm:text-6xl md:text-8xl lg:text-9xl uppercase tracking-tighter leading-[0.8]"
              lines={[
                <>
                  THE <span className="text-faxx-blue dark:text-faxx-cyan">STORY</span>
                </>,
                <>
                  BEHIND <span className="text-faxx-coral dark:text-faxx-lime">DIVI.</span>
                </>,
              ]}
            />
            <RevealText
              as="p"
              className="about-kicker font-mono text-sm md:text-base text-faxx-blue dark:text-faxx-cyan font-bold uppercase tracking-widest"
            >
              Software Engineer // Community Builder // Problem Solver
            </RevealText>
          </header>

          <div className="space-y-8 font-body text-lg md:text-2xl font-medium leading-relaxed dark:text-gray-300 about-text">
            {aboutMe.map((paragraph, idx) => (
              <p
                key={idx}
                dangerouslySetInnerHTML={{ __html: paragraph }}
                className="border-l-8 border-faxx-dark dark:border-gray-700 pl-8"
              />
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-8 about-text">
            <div className="bg-faxx-dark text-white p-8 border-4 border-faxx-dark shadow-[8px_8px_0px_0px_rgba(67,32,246,1)] dark:shadow-[8px_8px_0px_0px_rgba(0,229,255,1)]">
              <RevealText as="h3" className="font-display text-2xl uppercase mb-4">
                The Philosophy
              </RevealText>
              <p className="font-body opacity-80 text-lg">
                I don&apos;t just build features; I build solutions. I believe in software that is accessible, performant, and, above all, impactful.
              </p>
            </div>
            <div className="bg-white dark:bg-black text-faxx-dark dark:text-white p-8 border-4 border-faxx-dark dark:border-gray-700 shadow-[8px_8px_0px_0px_rgba(255,74,90,1)] dark:shadow-[8px_8px_0px_0px_rgba(191,255,0,1)]">
              <RevealText as="h3" className="font-display text-2xl uppercase mb-4">
                The Mission
              </RevealText>
              <p className="font-body opacity-80 text-lg">
                To bridge the gap between complex engineering and human-centric design, one line of code at a time.
              </p>
            </div>
          </div>
        </div>

        {/* Right: Image/Aesthetic */}
        <div className="lg:col-span-5 lg:sticky lg:top-32">
          <div className="relative aspect-[3/4] border-8 border-faxx-dark dark:border-gray-700 shadow-[16px_16px_0px_0px_rgba(67,32,246,1)] dark:shadow-[16px_16px_0px_0px_rgba(0,229,255,1)] overflow-hidden about-image">
            <Image
              src={avatar}
              alt="Divine Orji"
              fill
              className="object-cover transition-all duration-500"
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
            {/* Overlay Grid */}
            <div
              className="absolute inset-0 opacity-20 pointer-events-none"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 1px 1px, #111 1px, transparent 0)",
                backgroundSize: "20px 20px",
              }}
            ></div>
          </div>
          
           <div className="mt-12 bg-faxx-coral dark:bg-faxx-lime text-white dark:text-faxx-dark p-6 border-4 border-faxx-dark rotate-2 about-image">
               <RevealText as="p" className="font-script text-3xl text-center">
                 &quot;Code is the tool, impact is the goal.&quot;
               </RevealText>
           </div>
         </div>
       </div>

      <div className="w-full max-w-7xl mx-auto px-6 md:px-12 pb-16 md:pb-24 grid gap-12 md:gap-16">
        <section className="grid gap-8 about-text">
          <div className="border-b-4 border-faxx-dark dark:border-gray-700 pb-6">
            <SplitHeading
              as="h2"
              className="font-display text-4xl md:text-6xl uppercase tracking-tighter leading-none"
              lines={[
                <>
                  EXPERIENCE <span className="text-faxx-blue dark:text-faxx-cyan">SNAPSHOT.</span>
                </>,
              ]}
            />
            <RevealText
              as="p"
              className="font-mono text-sm md:text-base mt-4 text-faxx-coral dark:text-faxx-lime font-bold uppercase tracking-widest"
            >
              Roles, responsibilities, and highlights from LinkedIn.
            </RevealText>
          </div>

          <div className="grid gap-6">
            {experience.map((item) => (
              <article
                key={`${item.company}-${item.role}-${item.period}`}
                className="grid gap-5 bg-white dark:bg-zinc-900 border-4 border-faxx-dark dark:border-gray-700 p-6 md:p-8 shadow-[8px_8px_0px_0px_rgba(60,60,60,1)] dark:shadow-[8px_8px_0px_0px_rgba(0,229,255,0.2)]"
              >
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                  <div className="grid gap-2">
                    <RevealText
                      as="h3"
                      className="font-display text-3xl md:text-4xl uppercase tracking-tighter leading-none"
                      triggerStart="top 92%"
                    >
                      {item.role}
                    </RevealText>
                    <p className="font-mono text-xs md:text-sm uppercase tracking-[0.18em] text-faxx-blue dark:text-faxx-cyan font-bold">
                      {item.company}
                    </p>
                  </div>
                  <p className="font-mono text-xs md:text-sm uppercase tracking-[0.18em] text-faxx-coral dark:text-faxx-lime font-bold lg:text-right">
                    {item.period}
                  </p>
                </div>

                <p className="font-body text-lg leading-relaxed dark:text-gray-300">
                  {item.summary}
                </p>

                {item.highlights.length > 0 ? (
                  <ul className="grid gap-3 font-body text-base md:text-lg leading-relaxed dark:text-gray-300">
                    {item.highlights.map((highlight: string) => (
                      <li key={highlight} className="flex gap-3 items-start">
                        <span className="mt-2 h-2.5 w-2.5 shrink-0 bg-faxx-blue dark:bg-faxx-cyan border border-faxx-dark dark:border-gray-700"></span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </article>
            ))}
          </div>
        </section>

        <section className="grid lg:grid-cols-3 gap-6 about-text">
          <article className="grid gap-5 bg-white dark:bg-zinc-900 border-4 border-faxx-dark dark:border-gray-700 p-6 md:p-8 shadow-[8px_8px_0px_0px_rgba(60,60,60,1)] dark:shadow-[8px_8px_0px_0px_rgba(0,229,255,0.2)]">
            <RevealText as="h3" className="font-display text-3xl uppercase tracking-tighter">
              Core Skills
            </RevealText>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-2 border-2 border-faxx-dark dark:border-gray-700 bg-faxx-light dark:bg-black font-mono text-xs font-bold uppercase tracking-widest text-faxx-dark dark:text-white"
                >
                  {skill}
                </span>
              ))}
            </div>
          </article>

          <article className="grid gap-5 bg-white dark:bg-zinc-900 border-4 border-faxx-dark dark:border-gray-700 p-6 md:p-8 shadow-[8px_8px_0px_0px_rgba(60,60,60,1)] dark:shadow-[8px_8px_0px_0px_rgba(0,229,255,0.2)]">
            <RevealText as="h3" className="font-display text-3xl uppercase tracking-tighter">
              Education
            </RevealText>
            <div className="grid gap-5">
              {education.map((item) => (
                <div key={item.institution} className="grid gap-2">
                  <p className="font-display text-2xl uppercase tracking-tighter leading-none">
                    {item.degree}
                  </p>
                  <p className="font-body text-lg leading-relaxed dark:text-gray-300">
                    {item.institution}
                  </p>
                  <p className="font-mono text-xs uppercase tracking-[0.18em] text-faxx-blue dark:text-faxx-cyan font-bold">
                    {item.period}
                  </p>
                </div>
              ))}
            </div>
          </article>

          <article className="grid gap-6 bg-white dark:bg-zinc-900 border-4 border-faxx-dark dark:border-gray-700 p-6 md:p-8 shadow-[8px_8px_0px_0px_rgba(60,60,60,1)] dark:shadow-[8px_8px_0px_0px_rgba(0,229,255,0.2)]">
            <div className="grid gap-3">
              <RevealText as="h3" className="font-display text-3xl uppercase tracking-tighter">
                Credentials
              </RevealText>
              <ul className="grid gap-3 font-body text-base md:text-lg leading-relaxed dark:text-gray-300">
                {certifications.map((item) => (
                  <li key={item} className="flex gap-3 items-start">
                    <span className="mt-2 h-2.5 w-2.5 shrink-0 bg-faxx-coral dark:bg-faxx-lime border border-faxx-dark dark:border-gray-700"></span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="grid gap-3 border-t-2 border-faxx-dark/10 dark:border-gray-700 pt-6">
              <RevealText as="h4" className="font-display text-2xl uppercase tracking-tighter">
                Language
              </RevealText>
              {languages.map((item) => (
                <p key={item} className="font-body text-lg leading-relaxed dark:text-gray-300">
                  {item}
                </p>
              ))}
            </div>

            <div className="grid gap-3 border-t-2 border-faxx-dark/10 dark:border-gray-700 pt-6">
              <RevealText as="h4" className="font-display text-2xl uppercase tracking-tighter">
                Reach Me
              </RevealText>
              <a
                href={contact.linkedin}
                target="_blank"
                rel="noreferrer"
                className="font-mono text-xs uppercase tracking-[0.18em] text-faxx-blue dark:text-faxx-cyan font-bold break-all hover:text-faxx-coral dark:hover:text-faxx-lime transition-colors"
              >
                {contact.linkedin}
              </a>
              <a
                href={`mailto:${contact.email}`}
                className="font-body text-lg leading-relaxed dark:text-gray-300 hover:text-faxx-blue dark:hover:text-faxx-cyan transition-colors break-all"
              >
                {contact.email}
              </a>
            </div>
          </article>
        </section>
      </div>
     </main>
  );
}
