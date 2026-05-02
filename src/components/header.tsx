"use client";

import { logo, navlinks } from "@/assets/data";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import Link from "next/link";
import { useRef, useState, useEffect } from "react";
import Socials from "./socials";
import { useTheme } from "next-themes";

function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="w-12 h-12 border-2 border-faxx-dark bg-white" />;
  }

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      aria-label="Toggle dark mode"
      className="w-12 h-12 flex items-center justify-center bg-white border-2 border-faxx-dark hover:bg-gray-200 transition-colors duration-200 text-faxx-dark"
    >
      {theme === "dark" ? (
        <i className="ri-sun-fill text-2xl"></i>
      ) : (
        <i className="ri-moon-fill text-2xl"></i>
      )}
    </button>
  );
}

export default function Header() {
  const [viewModal, setViewModal] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLElement>(null);
  const tl = useRef<GSAPTimeline | null>(null);

  const toggleMenu = () => {
    setViewModal((prev) => !prev);
  };

  useGSAP(
    () => {
      // Set initial state
      gsap.set(navRef.current, { height: 0, autoAlpha: 0, display: "none" });

      tl.current = gsap
        .timeline({ paused: true })
        .to(navRef.current, {
          display: "flex",
          duration: 0,
        })
        .to(navRef.current, {
          height: "auto",
          autoAlpha: 1,
          duration: 0.6,
          ease: "power3.inOut",
        })
        .from(
          ".nav-link",
          {
            y: 50,
            opacity: 0,
            stagger: 0.1,
            duration: 0.5,
            ease: "power3.out",
          },
          "-=0.3"
        )
        .from(
          ".nav-socials",
          {
            y: 20,
            opacity: 0,
            duration: 0.5,
          },
          "-=0.3"
        );
    },
    { scope: containerRef }
  );

  useGSAP(() => {
    if (viewModal) {
      tl.current?.play();
    } else {
      tl.current?.reverse();
    }
  }, [viewModal]);

  return (
    <header
      ref={containerRef}
      className="w-full z-50 fixed top-0 bg-faxx-light dark:bg-gray-900 border-b-4 border-faxx-dark dark:border-gray-700"
    >
      <div className="flex items-center justify-between gap-4 px-4 sm:px-6 py-4 relative z-20 bg-faxx-light dark:bg-gray-900 max-w-7xl mx-auto">
        <div className="w-max">
          <Link
            href="/"
            className="flex gap-3 items-center p-2 bg-faxx-dark dark:bg-black"
            onClick={() => setViewModal(false)}
          >
            <Image
              src={logo}
              alt="Divine's logo"
              className="logo invert"
              width={24}
              height={24}
            />
          </Link>
        </div>

        <div className="flex items-center gap-2 sm:gap-4">
          <ThemeToggle />
          <button
            onClick={toggleMenu}
            aria-label="Toggle menu"
            className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center bg-faxx-cyan border-2 border-faxx-dark hover:bg-faxx-coral transition-colors duration-200"
          >
            {viewModal ? (
              <i className="ri-close-large-line text-2xl sm:text-3xl text-faxx-dark font-bold"></i>
            ) : (
              <i className="ri-menu-line text-2xl sm:text-3xl text-faxx-dark font-bold"></i>
            )}
          </button>
        </div>
      </div>

      <nav
        ref={navRef}
        className="px-6 py-12 flex flex-col gap-10 justify-between min-h-[calc(100vh-5rem)] h-full bg-faxx-blue text-white border-t-4 border-faxx-dark dark:border-gray-700"
      >
        <div className="grid md:grid-cols-2 lg:grid-cols-3 md:h-full gap-8 sm:gap-16 text-4xl sm:text-6xl text-left md:text-center font-display uppercase max-w-7xl mx-auto w-full">
          {navlinks.map((link) => (
            <Link
              key={link.id}
              onClick={toggleMenu}
              href={link.url}
              className="nav-link inline-block hover:text-faxx-cyan transition-colors"
            >
              {link.title}
            </Link>
          ))}
        </div>

        <div className="w-max ml-auto md:mx-auto px-5 nav-socials">
          <Socials />
        </div>
      </nav>
    </header>
  );
}
