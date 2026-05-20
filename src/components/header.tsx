"use client";

import { logo, navlinks } from "@/assets/data";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { useTheme } from "@/components/theme-provider";
import Image from "next/image";
import Link from "next/link";
import { useState, useSyncExternalStore } from "react";
import Socials from "./socials";

function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const mounted = useSyncExternalStore(
    () => () => undefined,
    () => true,
    () => false,
  );

  if (!mounted) {
    return (
      <div className="h-11 w-11 rounded-full border border-black/10 bg-black/[0.04] dark:border-white/15 dark:bg-white/[0.04]" />
    );
  }

  const isDark = resolvedTheme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label="Toggle dark mode"
      aria-pressed={isDark}
      className="flex h-11 w-11 items-center justify-center rounded-full border border-black/10 bg-black/[0.04] text-[#111111] transition-colors duration-300 hover:border-[#ff5a58]/60 hover:text-[#ff5a58] dark:border-white/15 dark:bg-white/[0.04] dark:text-white dark:hover:border-faxx-lime dark:hover:text-faxx-lime"
    >
      {isDark ? (
        <i className="ri-sun-fill text-lg"></i>
      ) : (
        <i className="ri-moon-fill text-lg"></i>
      )}
    </button>
  );
}

export default function Header() {
  const [viewModal, setViewModal] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 w-full border-b border-black/10 bg-white/85 backdrop-blur-xl dark:border-white/10 dark:bg-black/85">
      <div className="relative z-50 mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6">
        <Link
          href="/"
          className="group flex shrink-0 items-center gap-3 rounded-full bg-transparent px-4 py-2.5 text-[#111111] transition-colors hover:bg-black/[0.03] dark:bg-black dark:text-white dark:hover:bg-white/[0.06]"
        >
          <Image
            src={logo}
            alt="Divine's logo"
            className="opacity-90 transition-opacity group-hover:opacity-100 dark:invert"
            width={20}
            height={20}
          />
          <span className="font-mono text-[10px] font-bold uppercase tracking-[0.34em] text-[#111111]/88 dark:text-white/88">
            DIVINE ORJI
            <span className="hidden lg:inline text-[#111111]/48 dark:text-white/48">{" // software engineer"}</span>
          </span>
        </Link>

        <div className="flex items-center gap-3 sm:gap-4">
          <nav className="hidden items-center gap-6 md:flex lg:gap-8">
            {navlinks.map((link) => (
              <Link
                key={link.id}
                href={link.url}
                className="font-mono text-[11px] font-bold uppercase tracking-[0.28em] text-[#111111]/68 transition-colors hover:text-[#111111] dark:text-white/70 dark:hover:text-white"
              >
                {link.title}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2 sm:gap-3">
            <ThemeToggle />

            <Drawer direction="right" open={viewModal} onOpenChange={setViewModal}>
              <DrawerTrigger asChild>
                <button
                  aria-label="Toggle menu"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-black/10 bg-black/[0.04] text-[#111111] transition-colors duration-300 hover:border-[#ff5a58]/60 hover:text-[#ff5a58] dark:border-white/15 dark:bg-white/[0.04] dark:text-white dark:hover:border-faxx-lime dark:hover:text-faxx-lime md:hidden"
                >
                  <i className="ri-menu-line text-xl font-bold"></i>
                </button>
              </DrawerTrigger>
              <DrawerContent className="!border-l !border-black/10 !bg-white !text-[#111111] p-8 pt-8 dark:!border-white/10 dark:!bg-[#050505] dark:!text-white sm:!w-[420px]">
                <DrawerHeader className="mb-10 flex items-center justify-between p-0">
                  <DrawerTitle asChild>
                    <Link
                      href="/"
                      className="flex items-center gap-3 rounded-full border border-black/10 bg-[#111111] px-4 py-2 dark:border-white/10"
                      onClick={() => setViewModal(false)}
                    >
                      <Image
                        src={logo}
                        alt="Divine's logo"
                        className="invert opacity-90"
                        width={20}
                        height={20}
                      />
                      <span className="font-mono text-[10px] font-bold uppercase tracking-[0.32em] text-white/88">
                        DIVINE ORJI
                      </span>
                    </Link>
                  </DrawerTitle>
                  <DrawerClose asChild>
                    <button className="flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-black/[0.04] text-[#111111] transition-colors hover:border-[#ff5a58]/60 hover:text-[#ff5a58] dark:border-white/15 dark:bg-white/[0.04] dark:text-white dark:hover:border-faxx-lime dark:hover:text-faxx-lime">
                      <i className="ri-close-large-line text-lg"></i>
                    </button>
                  </DrawerClose>
                </DrawerHeader>

                <div className="flex flex-col gap-8 pb-12 font-display text-4xl leading-none tracking-tight">
                  {navlinks.map((link) => (
                    <Link
                      key={link.id}
                      onClick={() => setViewModal(false)}
                      href={link.url}
                      className="text-[#111111] transition-colors hover:text-[#ff5a58] dark:text-white dark:hover:text-faxx-lime"
                    >
                      {link.title}
                    </Link>
                  ))}
                </div>

                <div className="mt-auto border-t border-black/10 pt-10 dark:border-white/10">
                  <p className="mb-5 font-mono text-[11px] font-bold uppercase tracking-[0.32em] text-[#111111]/45 dark:text-white/50">
                    Connect
                  </p>
                  <Socials className="px-0" />
                </div>
              </DrawerContent>
            </Drawer>
          </div>
        </div>
      </div>
    </header>
  );
}
