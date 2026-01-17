"use client";

import { avatar, brands, projects, aboutMe } from "@/assets/data";
import { ArrowIcon } from "@/assets/icons";
import Button from "@/components/button";
import { ProjectCard } from "@/components/cards";
import Carousel from "@/components/carousel";
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
      // Hero Animation
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.from(".hero-title", { y: 50, opacity: 0, duration: 1 })
        .from(".hero-image", { y: 50, opacity: 0, duration: 1 }, "-=0.5")
        .from(".hero-subtitle", { y: 50, opacity: 0, duration: 1 }, "-=0.5")
        .from(".hero-socials", { y: 20, opacity: 0, duration: 0.8 }, "-=0.5");

      // Sections Animation
      gsap.utils.toArray(".reveal-section").forEach((section: any) => {
        gsap.from(section, {
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
          y: 50,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
        });
      });
    },
    { scope: container }
  );

  return (
    <main
      ref={container}
      className="flex-1 grid gap-8 md:grid-cols-3 max-w-6xl mx-auto mt-16"
    >
      {/* Hero section */}
      <section className="p-4 grid gap-8 h-max md:sticky md:top-16">
        <h1 className="hero-title font-serif text-4xl">
          Hi! I&apos;m <span className="italic">Divine</span>.
        </h1>

        <div className="hero-image w-full max-w-96 p-4 shadow-lg bg-white">
          <div className="relative aspect-[5/6] overflow-hidden">
            <Image
              src={avatar}
              alt="Divine Orji"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 384px"
            />
          </div>
          <p className="font-script pt-4">My friends call me Divi⚡</p>
        </div>

        <h2 className="hero-subtitle font-serif text-4xl text-right">
          I spin delightful and seamless web experiences...
        </h2>

        <div className="hero-socials">
          <Socials />
        </div>
      </section>

      <section className="md:col-span-2 grid gap-8">
        {/* About section */}
        <section className="reveal-section p-4 grid gap-8">
          <h2 className="font-serif text-4xl">
            About <span className="italic">Me</span>
          </h2>

          <div className="grid gap-2">
            {aboutMe.map((paragraph, idx) => (
              <p
                key={idx}
                dangerouslySetInnerHTML={{ __html: paragraph }}
              />
            ))}
          </div>
        </section>

        {/* Brands I've worked with */}
        <section className="reveal-section p-4 grid gap-8">
          <h2 className="font-serif text-4xl">
            My <span className="italic">Collabs</span>
          </h2>

          {/* <div className="md:col-span-2 flex items-center flex-wrap gap-10"> */}
          <Carousel>
            {brands.map((brand, idx) => (
              <a
                href={brand.url}
                target="_blank"
                key={idx}
                className="relative h-14 md:h-16 flex-[0_0_auto] min-w-0 max-w-full"
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
          </Carousel>
          {/* </div> */}
        </section>

        {/* Work section */}
        <section className="reveal-section p-4 pb-20 grid gap-8">
          <h2 className="font-serif text-4xl">
            My <span className="italic">Work</span>
          </h2>

          <div className="grid gap-8 md:grid-cols-2">
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

            <Link href="/work" className="w-max mx-auto md:ml-0 mt-16">
              <Button>
                <span>see more projects</span>
                <ArrowIcon />
              </Button>
            </Link>
          </div>
        </section>
      </section>
    </main>
  );
}
