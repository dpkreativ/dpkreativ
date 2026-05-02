"use client";

import { avatar, brands, projects, aboutMe } from "@/assets/data";
import { ArrowIcon } from "@/assets/icons";
import Button from "@/components/button";
import { ProjectCard } from "@/components/cards";
import Socials from "@/components/socials";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const container = useRef(null);

  useGSAP(
    () => {
      // Hero Animation - Brutalist block reveals
      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

      tl.from(".hero-block-left", { x: "-100%", duration: 1 })
        .from(".hero-block-right", { opacity: 0, duration: 1 }, "-=0.5")
        .from(
          ".hero-title",
          { y: 100, opacity: 0, duration: 0.8, stagger: 0.1 },
          "-=0.5",
        )
        .from(
          ".hero-pill",
          { y: 50, opacity: 0, duration: 0.6, stagger: 0.2 },
          "-=0.5",
        )
        .from(
          ".hero-socials",
          { scale: 0, opacity: 0, duration: 0.5 },
          "-=0.3",
        );

      // Sections Animation
      gsap.utils.toArray(".reveal-section").forEach((section: any) => {
        gsap.from(section, {
          scrollTrigger: {
            trigger: section,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
          y: 100,
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
      className="flex flex-col w-full min-h-screen pt-[104px] overflow-hidden"
    >
      {/* Hero section - Split Layout */}
      <section className="grid lg:grid-cols-2 min-h-[calc(100vh-104px)]">
        {/* Left Block - Massive Blue */}
        <div className="hero-block-left bg-faxx-blue p-8 md:p-16 flex flex-col justify-center relative border-b-8 lg:border-b-0 lg:border-r-8 border-faxx-dark dark:border-gray-700 z-10">
          <div className="max-w-full lg:max-w-2xl">
            <p className="font-mono text-faxx-cyan font-bold uppercase tracking-widest mb-6 hero-title text-sm md:text-base break-words">
              DIVINE ORJI // SOFTWARE ENGINEER
            </p>
            <h1 className="font-display text-white text-[14vw] sm:text-[11vw] md:text-7xl lg:text-6xl xl:text-7xl leading-[0.85] uppercase tracking-tighter mb-12">
              <span className="block hero-title truncate">DELIVERING</span>
              <span className="block hero-title text-faxx-cyan">IMPACT.</span>
            </h1>

            <div className="space-y-6 text-white font-body text-base sm:text-lg md:text-xl font-medium max-w-xl hero-title">
              <p>
                Crunchies online website increased their online order revenue
                from{" "}
                <strong className="text-faxx-cyan font-bold bg-faxx-dark dark:bg-black px-2">
                  200k to over 3 million
                </strong>{" "}
                within the first three months.
              </p>
              <p>
                I&apos;ve taught at IGHub for over two years with massive
                impact, leveling up the next generation of engineers.
              </p>
            </div>

            <div className="mt-12 sm:mt-16 hero-title">
              <Link href="/contact" className="inline-block">
                <Button className="!bg-faxx-cyan !text-faxx-dark hover:!bg-white text-base sm:text-lg px-6 py-3 sm:px-8 sm:py-4">
                  <span>GET IN TOUCH</span>
                  <ArrowIcon />
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Right Block - Imagery and Pills */}
        <div className="hero-block-right bg-faxx-light dark:bg-transparent relative p-8 md:p-16 flex items-center justify-center min-h-[50vh] lg:min-h-full">
          {/* Decorative Grid */}
          <div
            className="absolute inset-0 opacity-10 dark:opacity-20 dark:invert"
            style={{
              backgroundImage:
                "linear-gradient(rgba(17, 17, 17, 0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(17, 17, 17, 0.5) 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          ></div>

          <div className="relative w-full max-w-sm md:max-w-md aspect-[4/5] border-4 md:border-8 border-faxx-dark dark:border-gray-700 bg-white shadow-[8px_8px_0px_0px_rgba(67,32,246,1)] md:shadow-[16px_16px_0px_0px_rgba(67,32,246,1)] z-10 group">
            <Image
              src={avatar}
              alt="Divine Orji"
              fill
              className="object-cover object-center filter grayscale contrast-125 group-hover:grayscale-0 transition-all duration-500"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />

            {/* Floating Pills */}
            <div className="hero-pill absolute -left-4 sm:-left-12 top-8 sm:top-12 bg-white dark:bg-faxx-dark dark:text-white border-2 sm:border-4 border-faxx-dark dark:border-gray-700 px-4 py-2 sm:px-6 sm:py-3 font-mono font-bold uppercase shadow-[4px_4px_0px_0px_rgba(17,17,17,1)] md:shadow-[6px_6px_0px_0px_rgba(17,17,17,1)] flex items-center gap-2 sm:gap-3 text-xs sm:text-base z-20 hover:scale-105 transition-transform cursor-default">
              <i className="ri-code-s-slash-line text-lg md:text-xl"></i>
              Engineering
            </div>

            <div className="hero-pill absolute -left-4 sm:-left-16 bottom-32 sm:bottom-48 bg-faxx-coral text-white border-2 sm:border-4 border-faxx-dark dark:border-gray-700 px-4 py-2 sm:px-6 sm:py-3 font-mono font-bold uppercase shadow-[4px_4px_0px_0px_rgba(17,17,17,1)] md:shadow-[6px_6px_0px_0px_rgba(17,17,17,1)] flex items-center gap-2 sm:gap-3 text-xs sm:text-base z-20 hover:scale-105 transition-transform cursor-default rotate-2">
              <i className="ri-file-text-line text-lg md:text-xl"></i>
              Documentation
            </div>

            <div className="hero-pill absolute -right-4 sm:-right-12 bottom-16 sm:bottom-20 bg-faxx-blue text-white border-2 sm:border-4 border-faxx-dark dark:border-gray-700 px-4 py-2 sm:px-6 sm:py-3 font-mono font-bold uppercase shadow-[4px_4px_0px_0px_rgba(17,17,17,1)] md:shadow-[6px_6px_0px_0px_rgba(17,17,17,1)] flex items-center gap-2 sm:gap-3 text-xs sm:text-base z-20 hover:scale-105 transition-transform cursor-default">
              <i className="ri-server-line text-lg md:text-xl"></i>
              Devops
            </div>

            <div className="hero-pill absolute -right-4 sm:-right-8 top-12 sm:top-20 bg-faxx-dark text-faxx-cyan border-2 sm:border-4 border-faxx-dark dark:border-gray-700 px-4 py-2 sm:px-6 sm:py-3 font-mono font-bold uppercase shadow-[4px_4px_0px_0px_rgba(0,229,255,1)] md:shadow-[6px_6px_0px_0px_rgba(0,229,255,1)] flex items-center gap-2 sm:gap-3 text-xs sm:text-base z-20 hover:scale-105 transition-transform cursor-default -rotate-2">
              <i className="ri-robot-line text-lg md:text-xl"></i>
              AI
            </div>
          </div>

          <div className="hero-socials absolute bottom-4 right-4 sm:bottom-8 sm:right-8 bg-faxx-dark text-faxx-light p-3 sm:p-4 border-2 border-faxx-dark dark:border-gray-700 z-20">
            <Socials />
          </div>
        </div>
      </section>

      <div className="w-full max-w-7xl mx-auto grid gap-16 md:gap-24 py-16 md:py-24 px-6 md:px-12">
        {/* About section */}
        <section className="reveal-section grid lg:grid-cols-2 gap-8 md:gap-12 items-center bg-white dark:bg-faxx-dark border-4 border-faxx-dark dark:border-gray-700 p-6 sm:p-8 md:p-16 shadow-[8px_8px_0px_0px_rgba(255,74,90,1)] md:shadow-[12px_12px_0px_0px_rgba(255,74,90,1)]">
          <div>
            <h2 className="font-display text-4xl sm:text-6xl md:text-7xl uppercase tracking-tighter text-faxx-dark dark:text-white mb-2 leading-none">
              WHO
              <span className="text-faxx-blue"> AM I?</span>
            </h2>
            <p className="font-script text-2xl md:text-3xl mt-6 text-faxx-coral -rotate-2 origin-left">
              My friends call me Divi
            </p>
          </div>
          <div className="grid gap-4 md:gap-6 font-body text-base sm:text-lg md:text-xl font-medium dark:text-gray-300">
            {aboutMe.map((paragraph, idx) => (
              <p
                key={idx}
                dangerouslySetInnerHTML={{ __html: paragraph }}
                className="border-l-4 border-faxx-cyan pl-4 md:pl-6"
              />
            ))}
          </div>
        </section>

        {/* Brands I've worked with */}
        <section className="reveal-section w-full overflow-hidden">
          <div className="py-4 md:py-6 relative flex overflow-hidden">
            <div className="animate-marquee flex gap-12 sm:gap-16 items-center whitespace-nowrap min-w-full pl-12 hover:[animation-play-state:paused]">
              {[...brands, ...brands].map((brand, idx) => (
                <a
                  href={brand.url}
                  target="_blank"
                  key={idx}
                  className="relative h-12 sm:h-16 md:h-20 flex-shrink-0 transition-transform hover:scale-105"
                >
                  <Image
                    src={brand.image}
                    alt={brand.title}
                    width={brand.width}
                    height={brand.height}
                    className="object-contain h-full w-max"
                  />
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Work section */}
        <section className="reveal-section grid gap-8 md:gap-12">
          <div className="flex flex-col md:flex-row justify-between items-end gap-4 md:gap-6 border-b-4 border-faxx-dark dark:border-gray-700 pb-4 md:pb-6">
            <h2 className="font-display text-4xl sm:text-6xl md:text-8xl uppercase tracking-tighter text-faxx-dark dark:text-white leading-none">
              SELECTED
              <span className="text-faxx-blue"> WORKS.</span>
            </h2>
            <Link href="/work" className="w-max shrink-0 hidden md:block">
              <Button>
                <span>VIEW ALL</span>
                <ArrowIcon />
              </Button>
            </Link>
          </div>

          <div className="grid gap-6 md:gap-8 md:grid-cols-2">
            {projects
              .filter((project) => project.featured)
              .map((project, idx) => (
                <ProjectCard
                  key={idx}
                  title={project.title}
                  tags={project.tags}
                  image={project.image}
                  link={`/work/${project.slug}`}
                />
              ))}
          </div>

          <Link href="/work" className="w-max mx-auto md:hidden mt-6">
            <Button>
              <span>VIEW ALL</span>
              <ArrowIcon />
            </Button>
          </Link>
        </section>
      </div>
    </main>
  );
}
