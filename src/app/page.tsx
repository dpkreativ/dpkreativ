"use client";

import { avatar, brands, projects, aboutMe, highlights, contact, skills } from "@/assets/data";
import { fetchPosts } from "@/lib/hashnode";
import { ArrowIcon } from "@/assets/icons";
import Button from "@/components/button";
import { ProjectCard } from "@/components/cards";
import RevealText from "@/components/reveal-text";
import Socials from "@/components/socials";
import SplitHeading from "@/components/split-heading";
import { addSplitTextReveal } from "@/utils/gsap-split-text";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { useRef } from "react";
import WorkAccordion from "@/components/work-accordion";
import BlogPreview from "@/components/blog-preview";

gsap.registerPlugin(ScrollTrigger, SplitText);

export default function Home() {
  const container = useRef(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });
      const quoteTl = gsap.timeline({
        defaults: { ease: "power2.out" },
        repeat: -1,
        repeatDelay: 0.6,
      });
      const splitReverts: Array<() => void> = [];

      // Hero title split text animation
      const titleSplit = new SplitText(".hero-title", { type: "chars" });
      splitReverts.push(() => titleSplit.revert());

      tl.from(
        titleSplit.chars,
        { y: 100, opacity: 0, duration: 0.8, stagger: 0.05 },
        0,
      )
        .from(
          ".hero-cta",
          { y: 32, opacity: 0, duration: 0.6 },
          "-=0.25",
        )
        .from(
          ".hero-review",
          { x: 48, opacity: 0, duration: 0.8 },
          "-=0.45",
        );

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
              duration: 0.4,
              ease: "power2.out",
            },
            0.2,
          )
          .to({}, { duration: 6 })
          .to(`.hero-quote-item-${idx}`, {
            autoAlpha: 0,
            duration: 0.4,
            ease: "power2.in",
          });

        quoteTl.add(itemTl);
      });

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

      return () => {
        quoteTl.kill();
        splitReverts.forEach((revert) => revert());
      };
    },
    { scope: container },
  );

  return (
    <main
      ref={container}
      className="flex flex-col w-full min-h-screen pt-[84px] overflow-hidden"
    >
       <section className="bg-faxx-blue border-b-8 border-faxx-dark dark:border-gray-700">
         <div className="w-full max-w-7xl mx-auto px-6 md:px-12 py-10 md:py-24 min-h-[calc(100vh-84px)] grid lg:grid-cols-[minmax(0,1fr)_minmax(320px,440px)] gap-10 md:gap-12 items-center">
          <div className="max-w-4xl text-center lg:text-left">
            <h1 className="font-display text-white text-[13vw] sm:text-[11vw] md:text-7xl lg:text-[5.5rem] xl:text-[6rem] leading-[1.1] uppercase tracking-tighter mb-10 md:mb-12">
              <span className="block hero-title">DELIVERING</span>
              <span className="block hero-title text-faxx-cyan">IMPACT.</span>
            </h1>

            <div className="hero-cta w-max mx-auto lg:mx-0">
              <Link href="/contact" className="inline-block">
                <Button className="!bg-faxx-cyan !text-faxx-dark hover:!bg-white dark:!bg-black dark:!text-white text-base sm:text-lg px-6 py-3 sm:px-8 sm:py-4 transition-all duration-300">
                  <span>GET IN TOUCH</span>
                  <ArrowIcon />
                </Button>
              </Link>
            </div>
          </div>

          <div className="hero-review min-h-[260px] md:min-h-[320px] flex flex-col justify-center px-8 lg:px-0 lg:pl-10 lg:border-l-4 lg:border-white/20">
            <div className="relative flex-1 min-h-[220px] sm:min-h-[240px]">
              {highlights.map((item, idx) => (
                (() => {
                  const [source, category] = item.source.split(" // ");

                  return (
                    <div
                      key={item.source}
                      className={`hero-quote-item hero-quote-item-${idx} absolute inset-0 flex flex-col justify-center gap-5 ${idx === 0 ? "opacity-100" : "opacity-0"}`}
                    >
                      <p className={`hero-quote-copy-${idx} text-white font-body text-lg sm:text-xl md:text-2xl font-medium leading-relaxed`}>
                        {item.quote}
                      </p>

                      <div className={`hero-quote-source-${idx} flex flex-wrap gap-3 font-mono text-[11px] sm:text-xs uppercase tracking-[0.2em] text-faxx-cyan font-bold`}>
                        <span>{source}</span>
                        {category ? <span aria-hidden="true">{"//"}</span> : null}
                        {category ? <span>{category}</span> : null}
                      </div>
                    </div>
                  );
                })()
              ))}
            </div>
          </div>
        </div>
      </section>

       <div className="w-full px-6 md:px-12 lg:px-24 py-16 md:py-24 grid gap-16 md:gap-24">
         {/* About section */}
         <section className="reveal-section grid lg:grid-cols-[minmax(240px,360px)_minmax(0,1fr)] gap-14 md:gap-20 lg:gap-28 items-center max-w-5xl mx-auto">
          <div className="relative w-full max-w-xs md:max-w-sm mx-auto lg:mx-0 lg:mr-8 aspect-[4/5] group transition-all duration-700 hover:scale-[1.01] hover:rotate-[0.5deg]">
            <div className="absolute inset-0 border-4 md:border-8 border-faxx-dark dark:border-gray-700 bg-white shadow-[8px_8px_0px_0px_rgba(67,32,246,1)] md:shadow-[16px_16px_0px_0px_rgba(67,32,246,1)] dark:shadow-[8px_8px_0px_0px_rgba(0,229,255,1)] md:dark:shadow-[16px_16px_0px_0px_rgba(0,229,255,1)] overflow-hidden">
              <Image
                src={avatar}
                alt="Divine Orji"
                fill
                className="object-cover object-center transition-all duration-700 group-hover:scale-[1.03]"
                sizes="(max-width: 1024px) 100vw, 40vw"
                priority
              />
            </div>

            <div className="absolute -left-4 sm:-left-12 top-6 sm:top-10 bg-white dark:bg-faxx-dark dark:text-white border-2 sm:border-4 border-faxx-dark dark:border-gray-700 px-3 py-1.5 sm:px-5 sm:py-2.5 font-mono font-bold uppercase shadow-[4px_4px_0px_0px_rgba(17,17,17,1)] md:shadow-[6px_6px_0px_0px_rgba(17,17,17,1)] flex items-center gap-1.5 sm:gap-2 text-[11px] sm:text-xs z-20 hover:scale-105 transition-transform cursor-default">
              <i className="ri-code-slash-line text-base sm:text-lg"></i>
              Engineering
            </div>
 
            <div className="absolute -left-4 sm:-left-16 bottom-20 sm:bottom-32 bg-faxx-coral dark:bg-faxx-lime text-white dark:text-faxx-dark border-2 sm:border-4 border-faxx-dark dark:border-gray-700 px-3 py-1.5 sm:px-5 sm:py-2.5 font-mono font-bold uppercase shadow-[4px_4px_0px_0px_rgba(17,17,17,1)] md:shadow-[6px_6px_0px_0px_rgba(17,17,17,1)] flex items-center gap-1.5 sm:gap-2 text-[11px] sm:text-xs z-20 hover:scale-105 transition-transform cursor-default rotate-2">
              <i className="ri-file-text-line text-base sm:text-lg"></i>
              Documentation
            </div>
 
            <div className="absolute -right-4 sm:-right-12 bottom-60 sm:bottom-80 bg-faxx-blue dark:bg-faxx-cyan text-white dark:text-faxx-dark border-2 sm:border-4 border-faxx-dark dark:border-gray-700 px-3 py-1.5 sm:px-5 sm:py-2.5 font-mono font-bold uppercase shadow-[4px_4px_0px_0px_rgba(17,17,17,1)] md:shadow-[6px_6px_0px_0px_rgba(17,17,17,1)] flex items-center gap-1.5 sm:gap-2 text-[11px] sm:text-xs z-20 hover:scale-105 transition-transform cursor-default">
              <i className="ri-server-line text-base sm:text-lg"></i>
              Devops
            </div>

            <div className="absolute -right-4 sm:-right-8 bottom-12 sm:bottom-20 bg-faxx-dark text-faxx-cyan dark:bg-white dark:text-faxx-dark border-2 sm:border-4 border-faxx-dark dark:border-gray-700 px-3 py-1.5 sm:px-5 sm:py-2.5 font-mono font-bold uppercase shadow-[4px_4px_0px_0px_rgba(0,229,255,1)] md:shadow-[6px_6px_0px_0px_rgba(0,229,255,1)] flex items-center gap-1.5 sm:gap-2 text-[11px] sm:text-xs z-20 hover:scale-105 transition-transform cursor-default -rotate-2">
              <i className="ri-robot-line text-base sm:text-lg"></i>
              AI
            </div>
 
            <div className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 bg-faxx-dark text-faxx-light p-2 sm:p-3 border-2 border-faxx-dark dark:border-gray-700 z-20 w-[calc(100%-8px)] sm:w-[calc(100%-12px)]">
              <div className="scale-90 sm:scale-100 origin-bottom-right">
                <Socials />
              </div>
            </div>
          </div>

          <div className="grid gap-5 md:gap-6 font-body text-base sm:text-lg md:text-xl font-medium dark:text-gray-300">
            <div>
              <SplitHeading
                as="h2"
                className="font-display text-3xl md:text-7xl lg:text-8xl uppercase tracking-tighter text-faxx-dark dark:text-white mb-2 leading-[1.1]"
                lines={[
                  <>
                    WHO
                    <span className="text-gray-700 dark:text-faxx-cyan"> AM I?</span>
                  </>,
                ]}
              />
               <RevealText
                 as="p"
                 className="font-script text-2xl md:text-3xl mt-4 text-faxx-blue dark:text-faxx-lime -rotate-2 origin-left"
               >
                 My friends call me Divi
               </RevealText>
            </div>

            <p
              dangerouslySetInnerHTML={{ __html: aboutMe[0] }}
              className="border-l-4 border-gray-700 dark:border-faxx-cyan pl-4 md:pl-6"
            />
            <div className="flex flex-wrap gap-3 mt-2">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="px-2.5 py-1.5 border-2 border-faxx-dark dark:border-gray-700 bg-white dark:bg-black font-mono text-[10px] sm:text-[11px] font-bold uppercase tracking-widest text-faxx-dark dark:text-white"
                >
                  {skill}
                </span>
              ))}
            </div>
            <Link href="/about" className="group font-mono text-sm uppercase font-bold text-gray-700 dark:text-faxx-cyan hover:text-faxx-coral dark:hover:text-faxx-lime transition-colors flex items-center gap-2 mt-4 w-max">
              <span>Read Full Story</span>
              <i className="ri-arrow-right-line transition-transform duration-300 group-hover:translate-x-2"></i>
            </Link>
          </div>
        </section>

        {/* Brands I've worked with */}
        <section className="reveal-section w-full overflow-hidden">
          <div className="py-4 md:py-6 relative flex overflow-hidden">
            <div className="animate-marquee flex gap-12 sm:gap-16 items-center whitespace-nowrap min-w-full pl-12">
              {[...brands, ...brands].map((brand, idx) => (
                brand.url ? (
                  <a
                    href={brand.url}
                    target="_blank"
                    rel="noreferrer"
                    key={idx}
                    className="relative h-12 sm:h-16 md:h-20 flex-shrink-0 transition-transform hover:scale-105"
                  >
                    <Image
                      src={brand.image}
                      alt={brand.title}
                      width={brand.width}
                      height={brand.height}
                      className={`object-contain h-full w-max ${brand.invertInDarkMode ? "dark:invert" : ""}`}
                    />
                  </a>
                ) : (
                  <div
                    key={idx}
                    className="relative h-12 sm:h-16 md:h-20 flex-shrink-0 transition-transform hover:scale-105"
                  >
                    <Image
                      src={brand.image}
                      alt={brand.title}
                      width={brand.width}
                      height={brand.height}
                      className={`object-contain h-full w-max ${brand.invertInDarkMode ? "dark:invert" : ""}`}
                    />
                  </div>
                )
              ))}
            </div>
          </div>
        </section>

        {/* Work section */}
        <section className="reveal-section grid gap-8 md:gap-12">
          <div className="flex flex-col md:flex-row justify-between items-end gap-4 md:gap-6 border-b-4 border-faxx-dark dark:border-gray-700 pb-4 md:pb-6">
            <SplitHeading
              as="h2"
              className="font-display text-3xl sm:text-6xl md:text-8xl uppercase tracking-tighter text-faxx-dark dark:text-white leading-[1.1]"
              lines={[
                <>
                  FEATURED
                </>,
                <>
                  <span className="text-faxx-blue dark:text-faxx-cyan">PROJECTS.</span>
                </>,
              ]}
            />
            <Link href="/work" className="w-max shrink-0">
              <Button className="!shadow-[4px_4px_0px_0px_rgba(67,32,246,1)] dark:!shadow-[4px_4px_0px_0px_rgba(0,229,255,1)] active:!shadow-[0px_0px_0px_0px_rgba(67,32,246,1)] dark:active:!shadow-[0px_0px_0px_0px_rgba(0,229,255,1)]">
                <span>VIEW ALL</span>
                <ArrowIcon />
              </Button>
            </Link>
          </div>

          <div className="w-full">
            <WorkAccordion projects={projects} />
          </div>
        </section>
        {/* Blog section */}
        <section className="reveal-section grid gap-8 md:gap-12">
          <div className="flex flex-col md:flex-row justify-between items-end gap-4 md:gap-6 border-b-4 border-faxx-dark dark:border-gray-700 pb-4 md:pb-6">
            <SplitHeading
              as="h2"
              className="font-display text-3xl sm:text-6xl md:text-8xl uppercase tracking-tighter text-faxx-dark dark:text-white leading-[1.1]"
              lines={[
                <>
                  LATEST
                </>,
                <>
                  <span className="text-gray-700 dark:text-faxx-lime">ARTICLES.</span>
                </>,
              ]}
            />
            <Link href="/blog" className="w-max shrink-0 hidden md:block">
              <Button className="!shadow-[4px_4px_0px_0px_rgba(60,60,60,1)] dark:!shadow-[4px_4px_0px_0px_rgba(191,255,0,1)] active:!shadow-[0px_0px_0px_0px_rgba(60,60,60,1)] dark:active:!shadow-[0px_0px_0px_0px_rgba(191,255,0,1)]">
                <span>VISIT ARCHIVE</span>
                <ArrowIcon />
              </Button>
            </Link>
          </div>

          <BlogPreview />
        </section>
      </div>
    </main>
  );
}
