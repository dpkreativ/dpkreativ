"use client";

import { contact, logo, navlinks, socials } from "@/assets/data";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import SplitHeading from "./split-heading";
import SparkleBackground from "./sparkle-background";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const pathname = usePathname();
  const isContactPage = pathname === "/contact";

  const github = socials.find((social) => social.type === "github");
  const linkedin = socials.find((social) => social.type === "linkedin");

  const navSections = [
    {
      title: "Navigate",
      links: navlinks
        .filter((l) => ["Home", "About", "Work"].includes(l.title))
        .map((link) => ({ ...link, external: false })),
    },
    {
      title: "Connect",
      links: [
        ...navlinks
          .filter((l) => ["Blog"].includes(l.title))
          .map((link) => ({ ...link, external: false })),
        ...(github
          ? [
              {
                id: "github",
                title: "GitHub",
                url: github.url,
                icon: "ri-github-line",
                external: true,
              },
            ]
          : []),
        ...(linkedin
          ? [
              {
                id: "linkedin",
                title: "LinkedIn",
                url: linkedin.url,
                icon: "ri-linkedin-line",
                external: true,
              },
            ]
          : []),
      ],
    },
  ];

  return (
    <footer className="w-full border-t border-white/10 bg-[#111111] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Conditional Closing CTA Banner (suppressed on /contact) */}
        {!isContactPage && (
          <div className="items-center justify-center gap-8 border-b border-white/10 py-14 text-center md:py-20 flex flex-col">
            <div className="relative w-fit max-w-full">
              <SparkleBackground
                variant="chat"
                size={32}
                className="text-white/35"
              />
              <SplitHeading
                as="h2"
                className="font-display uppercase text-3xl sm:text-5xl md:text-6xl lg:text-7xl leading-[0.9]"
              >
                Let’s talk
              </SplitHeading>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap border border-white/25 bg-zinc-200 px-7 py-3.5 font-mono text-xs font-bold uppercase tracking-widest text-zinc-950 transition-colors hover:border-white/40 hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
            >
              What can I help with?
              <i aria-hidden="true" className="ri-arrow-right-up-line" />
            </Link>
          </div>
        )}

        <div className="py-12 md:py-16 grid gap-10 grid-cols-2 md:grid-cols-2 xl:grid-cols-4 md:gap-10 xl:gap-12 text-center md:text-left items-start">
          <div className="col-span-2 md:col-span-1 flex flex-col items-center gap-4 md:items-start">
            <Link href="/" className="flex w-max items-center gap-3">
              <Image
                src={logo}
                alt="Divine Orji logo"
                width={24}
                height={24}
                className="invert"
              />
              <span className="font-mono text-xs font-bold uppercase tracking-widest">
                Divine Orji
              </span>
            </Link>
            <p className="font-body text-xs text-zinc-400 leading-relaxed max-w-xs">
              Software engineer and technical writer at The Kreativ Studio.
            </p>
          </div>

          {navSections.map((section) => (
            <div key={section.title} className="w-full flex flex-col">
              <span className="font-mono font-bold uppercase tracking-widest text-[10px] text-zinc-400 mb-5">
                {section.title}
              </span>
              <ul className="space-y-3 font-mono text-xs uppercase">
                {section.links.map((link) => (
                  <li key={link.id}>
                    {link.external ? (
                      <a
                        href={link.url}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center justify-center gap-2 text-zinc-300 hover:text-white transition-colors md:justify-start"
                      >
                        <i className={`${link.icon} text-sm`} />
                        <span>{link.title}</span>
                      </a>
                    ) : (
                      <Link
                        href={link.url}
                        className="flex items-center justify-center gap-2 text-zinc-300 hover:text-white transition-colors md:justify-start"
                      >
                        <i className={`${link.icon} text-sm`} />
                        <span>{link.title}</span>
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="col-span-2 md:col-span-1 w-full flex flex-col">
            <span className="font-mono font-bold uppercase tracking-widest text-[10px] text-zinc-400 mb-5">
              Direct Contact
            </span>
            <ul className="space-y-3 font-mono text-xs">
              <li>
                <a
                  href={`mailto:${contact.email}`}
                  className="flex items-center justify-center gap-2 text-zinc-300 hover:text-white transition-colors md:justify-start"
                >
                  <i className="ri-mail-send-line text-sm" />
                  <span className="break-all">{contact.email}</span>
                </a>
              </li>
              <li>
                <a
                  href={`tel:${contact.phone}`}
                  className="flex items-center justify-center gap-2 text-zinc-300 hover:text-white transition-colors md:justify-start"
                >
                  <i className="ri-phone-line text-sm" />
                  <span>{contact.phone}</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="py-6 border-t border-white/10 flex items-center justify-center text-center text-xs font-mono text-zinc-400">
          <p>© {currentYear} Divine Orji. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
