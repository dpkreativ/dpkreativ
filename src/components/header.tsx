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

import Button from "@/components/button";
import { ArrowIcon } from "@/assets/icons";

function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const mounted = useSyncExternalStore(
    () => () => undefined,
    () => true,
    () => false,
  );

  if (!mounted) {
    return (
      <div className="h-10 w-10 border border-black/10 bg-black/[0.04] dark:border-white/15 dark:bg-white/[0.04]" />
    );
  }

  const isDark = resolvedTheme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label="Toggle dark mode"
      aria-pressed={isDark}
      className="flex h-10 w-10 items-center justify-center border border-black/10 bg-black/[0.04] text-[#111111] transition-colors duration-300 hover:border-black hover:text-black dark:border-white/15 dark:bg-white/[0.04] dark:text-white dark:hover:border-white dark:hover:text-white"
    >
      {isDark ? (
        <i className="ri-sun-fill text-base"></i>
      ) : (
        <i className="ri-moon-fill text-base"></i>
      )}
    </button>
  );
}

export default function Header() {
  const [viewModal, setViewModal] = useState(false);
  const headerNavLinks = navlinks.filter((link) => link.url !== "/contact");

  return (
    <header className="fixed inset-x-0 top-0 z-50 w-full border-b border-black/10 bg-white/85 backdrop-blur-xl dark:border-white/10 dark:bg-[#111111]/90">
      <div className="relative z-50 mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        {/* Left: Nav Links (Desktop) & Menu Trigger (Mobile) */}
        <div className="flex flex-1 items-center justify-start gap-4">
          <Drawer direction="left" open={viewModal} onOpenChange={setViewModal}>
            <DrawerTrigger asChild>
              <button
                aria-label="Toggle menu"
                className="flex h-10 w-10 items-center justify-center border border-black/10 bg-black/[0.04] text-[#111111] transition-colors duration-300 hover:border-black hover:text-black dark:border-white/15 dark:bg-white/[0.04] dark:text-white dark:hover:border-white dark:hover:text-white md:hidden"
              >
                <i className="ri-menu-line text-lg font-bold"></i>
              </button>
            </DrawerTrigger>
            <DrawerContent className="!border-r !border-black/10 !bg-white !text-[#111111] p-8 pt-8 dark:!border-white/10 dark:!bg-[#1a1a1a] dark:!text-white sm:!w-[420px]">
              <DrawerHeader className="mb-10 flex items-center justify-between p-0">
                <DrawerTitle asChild>
                  <Link
                    href="/"
                    className="group flex items-center gap-2.5 border border-black/10 bg-black/[0.03] px-3.5 py-1.5 transition-colors hover:border-black/30 dark:border-white/15 dark:bg-white/[0.04] dark:hover:border-white/30"
                    onClick={() => setViewModal(false)}
                  >
                    <Image
                      src={logo}
                      alt="Divine's logo"
                      className="opacity-90 transition-opacity group-hover:opacity-100 dark:invert"
                      width={20}
                      height={20}
                    />
                    <span className="font-mono text-[11px] font-bold uppercase tracking-[0.26em] text-[#111111] dark:text-white">
                      Divi // Creator
                    </span>
                  </Link>
                </DrawerTitle>
                <DrawerClose asChild>
                  <button className="flex h-10 w-10 items-center justify-center border border-black/10 bg-black/[0.04] text-[#111111] transition-colors hover:border-black hover:text-black dark:border-white/15 dark:bg-white/[0.04] dark:text-white dark:hover:border-white dark:hover:text-white">
                    <i className="ri-close-large-line text-lg"></i>
                  </button>
                </DrawerClose>
              </DrawerHeader>

              <div className="flex flex-col gap-8 pb-12 font-display text-4xl leading-none tracking-tight">
                {headerNavLinks.map((link) => (
                  <Link
                    key={link.id}
                    onClick={() => setViewModal(false)}
                    href={link.url}
                    className="text-[#111111] transition-colors hover:text-zinc-600 dark:text-white dark:hover:text-zinc-300"
                  >
                    {link.title}
                  </Link>
                ))}
              </div>

              <div className="mt-auto border-t border-black/10 pt-8 dark:border-white/10">
                <div className="mb-6 sm:hidden">
                  <Link
                    href="/contact"
                    onClick={() => setViewModal(false)}
                    className="w-full inline-flex"
                  >
                    <Button className="w-full !py-3 !text-[10px] font-mono font-bold tracking-widest uppercase justify-center">
                      <span>GET IN TOUCH</span>
                      <ArrowIcon />
                    </Button>
                  </Link>
                </div>
                <p className="mb-5 font-mono text-[11px] font-bold uppercase tracking-[0.32em] text-[#111111]/45 dark:text-white/50">
                  Connect
                </p>
                <Socials className="px-0" />
              </div>
            </DrawerContent>
          </Drawer>

          <nav className="hidden items-center gap-5 md:flex lg:gap-7">
            {headerNavLinks.map((link) => (
              <Link
                key={link.id}
                href={link.url}
                className="font-mono text-[11px] font-bold uppercase tracking-[0.24em] text-[#111111]/68 transition-colors hover:text-[#111111] dark:text-white/70 dark:hover:text-white"
              >
                {link.title}
              </Link>
            ))}
          </nav>
        </div>

        {/* Center: Logo and text */}
        <div className="flex shrink-0 items-center justify-center">
          <Link
            href="/"
            className="group flex items-center gap-2.5 px-3 py-1.5 text-[#111111] transition-colors dark:text-white"
          >
            <Image
              src={logo}
              alt="Divine's logo"
              className="opacity-90 transition-opacity group-hover:opacity-100 dark:invert"
              width={20}
              height={20}
            />
            <span className="font-mono text-[11px] font-bold uppercase tracking-[0.26em] text-[#111111] dark:text-white">
              Divi // Creator
            </span>
          </Link>
        </div>

        {/* Right: Dark mode toggle & CTA (Get in Touch) */}
        <div className="flex flex-1 items-center justify-end gap-2.5 sm:gap-3">
          <ThemeToggle />

          <Link href="/contact" className="hidden sm:inline-flex">
            <Button className="!px-4 !py-2.5 !text-[10px] font-mono font-bold tracking-widest uppercase">
              <span>GET IN TOUCH</span>
              <ArrowIcon />
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
}
