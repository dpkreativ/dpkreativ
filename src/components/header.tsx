"use client";

import { logo, navlinks } from "@/assets/data";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import Link from "next/link";
import { useRef, useState, useSyncExternalStore } from "react";
import Socials from "./socials";
import { useTheme } from "@/components/theme-provider";

function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const mounted = useSyncExternalStore(
    () => () => undefined,
    () => true,
    () => false,
  );

  if (!mounted) {
    return <div className="w-12 h-12 border-2 border-faxx-dark bg-white" />;
  }

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      aria-label="Toggle dark mode"
      className="w-12 h-12 flex items-center justify-center bg-white border-2 border-faxx-dark hover:bg-faxx-cyan transition-colors duration-200 text-faxx-dark"
    >
      {theme === "dark" ? (
        <i className="ri-sun-fill text-2xl"></i>
      ) : (
        <i className="ri-moon-fill text-2xl"></i>
      )}
    </button>
  );
}

import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
  DrawerClose,
} from "@/components/ui/drawer";

export default function Header() {
  const [viewModal, setViewModal] = useState(false);

  return (
    <header
      className="fixed inset-x-0 top-0 z-50 w-full bg-faxx-light border-b-4 border-faxx-dark dark:bg-black dark:border-gray-700"
    >
      <div className="flex items-center justify-between gap-4 px-4 sm:px-6 py-4 relative z-50 bg-faxx-light dark:bg-black max-w-7xl mx-auto">
        <div className="w-max shrink-0">
          <Link
            href="/"
            className="flex gap-3 items-center p-2 bg-faxx-dark dark:bg-black"
          >
            <Image
              src={logo}
              alt="Divine's logo"
              className="logo invert"
              width={24}
              height={24}
            />
            <span className="font-mono text-[10px] sm:text-xs font-bold uppercase tracking-widest text-white pr-2">
              DIVINE ORJI <span className="hidden md:inline">{"// SOFTWARE ENGINEER"}</span>
            </span>
          </Link>
        </div>

        <div className="flex items-center gap-4 sm:gap-8">
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navlinks.map((link) => (
              <Link
                key={link.id}
                href={link.url}
                className="font-display text-xs uppercase tracking-widest hover:text-faxx-blue transition-colors dark:text-white"
              >
                {link.title}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2 sm:gap-4">
            <ThemeToggle />
            
            <Drawer direction="right" open={viewModal} onOpenChange={setViewModal}>
              <DrawerTrigger asChild>
                <button
                  aria-label="Toggle menu"
                  className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center border-2 border-faxx-dark bg-faxx-cyan hover:bg-faxx-lime shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:shadow-none active:translate-x-1 active:translate-y-1 md:hidden"
                >
                  <i className="ri-menu-line text-2xl sm:text-3xl text-faxx-dark font-bold"></i>
                </button>
              </DrawerTrigger>
              <DrawerContent className="!bg-faxx-blue !text-white flex flex-col p-8 pt-8">
                <DrawerHeader className="p-0 mb-12 flex justify-between items-center">
                  <DrawerTitle asChild>
                    <Link
                      href="/"
                      className="flex gap-3 items-center p-2 bg-black border-2 border-white"
                      onClick={() => setViewModal(false)}
                    >
                      <Image
                        src={logo}
                        alt="Divine's logo"
                        className="logo invert"
                        width={20}
                        height={20}
                      />
                      <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-white pr-1">
                        DIVINE ORJI
                      </span>
                    </Link>
                  </DrawerTitle>
                  <DrawerClose asChild>
                    <button className="w-10 h-10 flex items-center justify-center border-2 border-white hover:bg-faxx-coral transition-colors">
                      <i className="ri-close-large-line text-2xl"></i>
                    </button>
                  </DrawerClose>
                </DrawerHeader>

                <div className="flex flex-col gap-8 font-display text-4xl uppercase pb-12">
                  {navlinks.map((link) => (
                    <Link
                      key={link.id}
                      onClick={() => setViewModal(false)}
                      href={link.url}
                      className="hover:text-faxx-lime transition-colors"
                    >
                      {link.title}
                    </Link>
                  ))}
                </div>

                <div className="mt-auto pt-12 border-t-2 border-white/20">
                  <p className="font-mono text-xs uppercase tracking-widest mb-6 opacity-60">Connect</p>
                  <div className="w-max">
                    <Socials />
                  </div>
                </div>
              </DrawerContent>
            </Drawer>
          </div>
        </div>
      </div>
    </header>
  );
}
