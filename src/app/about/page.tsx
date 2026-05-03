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
import FloatingDownloadLink from "@/components/floating-download-link";
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
              className="font-display text-3xl sm:text-5xl md:text-7xl lg:text-8xl uppercase tracking-tighter leading-[0.85]"
              lines={[
                <span key="about-title-line-1">
                  THE <span className="text-faxx-blue dark:text-faxx-cyan">STORY</span>
                </span>,
                <span key="about-title-line-2">
                  BEHIND <span className="text-faxx-coral dark:text-faxx-lime">DIVI.</span>
                </span>,
              ]}
            />
            <RevealText
              as="p"
              className="about-kicker font-mono text-sm md:text-base text-faxx-blue dark:text-faxx-cyan font-bold uppercase tracking-widest"
            >
              Software Engineer // Community Builder // Problem Solver
            </RevealText>

            <FloatingDownloadLink
              href="/divine_linkedin.pdf"
              downloadName="divine-orji-cv.pdf"
              label="Download CV PDF"
            />
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

          <div className="about-text grid gap-5 bg-white dark:bg-zinc-900 border-4 border-faxx-dark dark:border-gray-700 p-6 md:p-8 shadow-[8px_8px_0px_0px_rgba(60,60,60,1)] dark:shadow-[8px_8px_0px_0px_rgba(0,229,255,0.2)]">
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
          </div>
        </div>

        {/* Right: Image/Aesthetic */}
        <div className="lg:col-span-5">
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
          
           <div className="mt-12 bg-faxx-coral dark:bg-faxx-lime text-white dark:text-faxx-dark p-6 border-4 border-faxx-dark about-image">
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
                <span key="experience-title-line-1">
                  EXPERIENCE <span className="text-faxx-blue dark:text-faxx-cyan">SNAPSHOT.</span>
                </span>,
              ]}
            />
            <RevealText
              as="p"
              className="font-mono text-sm md:text-base mt-4 text-faxx-coral dark:text-faxx-lime font-bold uppercase tracking-widest"
            >
              Roles, responsibilities, and highlights.
            </RevealText>
          </div>

          <div className="relative">
            <div className="absolute bottom-0 left-5 top-2 w-1 bg-faxx-dark dark:bg-gray-700 md:left-1/2 md:-translate-x-1/2"></div>

            <div className="grid gap-10 md:gap-14">
              {experience.map((item, idx) => {
                const stepNumber = String(idx + 1).padStart(2, "0");
                const cardOnRight = idx % 2 === 0;

                return (
                  <article
                    key={`${item.company}-${item.role}-${item.period}`}
                    className="relative grid gap-4 pl-16 md:grid-cols-[minmax(0,1fr)_5rem_minmax(0,1fr)] md:items-start md:gap-8 md:pl-0"
                  >
                    <div className="absolute left-0 top-1 z-10 flex h-10 w-10 items-center justify-center border-4 border-faxx-dark bg-faxx-coral font-display text-xl uppercase tracking-tighter text-white shadow-[4px_4px_0px_0px_rgba(17,17,17,1)] dark:border-gray-700 dark:bg-faxx-lime dark:text-faxx-dark dark:shadow-[4px_4px_0px_0px_rgba(0,229,255,0.35)] md:left-1/2 md:-translate-x-1/2">
                      {stepNumber}
                    </div>

                    <div
                      className={`md:row-start-1 ${cardOnRight ? "md:col-start-1 md:flex md:justify-end md:pt-2" : "md:col-start-3 md:pt-2"}`}
                    >
                      <div className="inline-flex w-fit items-center gap-3 border-4 border-faxx-dark bg-faxx-blue px-4 py-2 font-mono text-[11px] font-bold uppercase tracking-[0.18em] text-white shadow-[6px_6px_0px_0px_rgba(17,17,17,1)] dark:border-gray-700 dark:bg-faxx-cyan dark:text-faxx-dark dark:shadow-[6px_6px_0px_0px_rgba(0,229,255,0.25)]">
                        <span className="opacity-70">Role {stepNumber}</span>
                        <span aria-hidden="true">{"//"}</span>
                        <span>{item.period}</span>
                      </div>
                    </div>

                    <div className={`md:row-start-1 ${cardOnRight ? "md:col-start-3" : "md:col-start-1"}`}>
                      <div className="grid gap-5 bg-white dark:bg-zinc-900 border-4 border-faxx-dark dark:border-gray-700 p-6 md:p-8 shadow-[8px_8px_0px_0px_rgba(60,60,60,1)] dark:shadow-[8px_8px_0px_0px_rgba(0,229,255,0.2)]">
                        <div className="grid gap-2 border-b-2 border-faxx-dark/10 pb-4 dark:border-gray-700">
                          <RevealText
                            as="h3"
                            className="font-display text-2xl md:text-3xl uppercase tracking-tighter leading-none"
                            triggerStart="top 92%"
                          >
                            {item.role}
                          </RevealText>
                          <p className="font-mono text-xs md:text-sm uppercase tracking-[0.18em] text-faxx-blue dark:text-faxx-cyan font-bold">
                            {item.company}
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
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="grid items-start gap-6 about-text lg:grid-cols-2">
          <article className="grid content-start gap-5 bg-white dark:bg-zinc-900 border-4 border-faxx-dark dark:border-gray-700 p-6 md:p-8 shadow-[8px_8px_0px_0px_rgba(60,60,60,1)] dark:shadow-[8px_8px_0px_0px_rgba(0,229,255,0.2)]">
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

          <article className="grid content-start gap-6 bg-white dark:bg-zinc-900 border-4 border-faxx-dark dark:border-gray-700 p-6 md:p-8 shadow-[8px_8px_0px_0px_rgba(60,60,60,1)] dark:shadow-[8px_8px_0px_0px_rgba(0,229,255,0.2)]">
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
