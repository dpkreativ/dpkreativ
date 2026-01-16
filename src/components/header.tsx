"use client";

import { logo, navlinks } from "@/assets/data";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
import Socials from "./socials";

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
      className="w-full max-w-6xl mx-auto z-50 fixed top-0 bg-[--ghost-white] rounded-b-3xl overflow-hidden shadow-sm"
    >
      <div className="flex items-center justify-between gap-4 p-4 relative z-20 bg-[--ghost-white]">
        <div className="w-max">
          <Link
            href="/"
            className="flex gap-3 items-center p-2 bg-black rounded-full"
            onClick={() => setViewModal(false)}
          >
            <Image
              src={logo}
              alt="Divine's logo"
              className="logo invert"
              width={16}
              height={16}
            />
          </Link>
        </div>

        <div>
          <button
            onClick={toggleMenu}
            aria-label="Toggle menu"
            className="w-10 h-10 flex items-center justify-center"
          >
            {viewModal ? (
              <i className="ri-close-large-line text-3xl"></i>
            ) : (
              <i className="ri-menu-line text-3xl"></i>
            )}
          </button>
        </div>
      </div>

      <nav
        ref={navRef}
        className="px-5 py-10 flex flex-col gap-10 justify-between min-h-[calc(100vh-12rem)] h-full rounded-b-3xl bg-black text-white"
      >
        <div className="grid md:grid-cols-2 lg:grid-cols-3 md:h-full gap-16 text-7xl text-right md:text-center font-serif">
          {navlinks.map((link) => (
            <Link
              key={link.id}
              onClick={toggleMenu}
              href={link.url}
              className="nav-link inline-block"
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
