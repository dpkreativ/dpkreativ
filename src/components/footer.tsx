"use client";

import { contact, logo, navlinks, socials } from "@/assets/data";
import { ArrowIcon } from "@/assets/icons";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Button from "./button";
import RevealText from "./reveal-text";
import SplitHeading from "./split-heading";

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
    <footer className="bg-white dark:bg-[#111111] text-[#111111] dark:text-white w-full border-t border-black/10 dark:border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Conditional Closing CTA Banner (suppressed on /contact) */}
        {!isContactPage && (
          <div className="py-14 md:py-20 border-b border-black/10 dark:border-white/10">
            <div className="max-w-4xl mx-auto grid gap-6 text-center justify-items-center">
              <div>
                <SplitHeading
                  as="h2"
                  className="font-display uppercase text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[0.9] text-center"
                >
                  LET&apos;S BUILD SOMETHING ICONIC.
                </SplitHeading>
                <RevealText noSplit className="mt-4 text-zinc-600 dark:text-zinc-400 font-body text-base md:text-lg max-w-xl mx-auto text-center leading-relaxed">
                  Have a project in mind, an architectural challenge, or need a technical delivery partner?
                </RevealText>
              </div>
              <Link href="/contact" className="w-max mt-2">
                <Button className="!px-7 !py-3.5 !text-xs font-mono font-bold tracking-widest uppercase">
                  <span>GET IN TOUCH</span>
                  <ArrowIcon />
                </Button>
              </Link>
            </div>
          </div>
        )}

        <div className="py-12 md:py-16 grid gap-10 grid-cols-2 md:grid-cols-2 xl:grid-cols-4 md:gap-10 xl:gap-12 text-left items-start">
          <div className="col-span-2 md:col-span-1 flex flex-col gap-4">
            <Link href="/" className="flex w-max items-center gap-3">
              <Image
                src={logo}
                alt="Divine Orji logo"
                width={24}
                height={24}
                className="dark:invert"
              />
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-black dark:text-white">
                Divine Orji
              </span>
            </Link>
            <p className="font-body text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed max-w-xs">
              Full-stack engineer crafting high-performance digital products, developer tools, and scalable web architectures.
            </p>
          </div>

          {navSections.map((section) => (
            <div key={section.title} className="w-full flex flex-col text-left">
              <span className="font-mono font-bold uppercase tracking-widest text-[10px] text-zinc-500 dark:text-zinc-400 mb-5">
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
                        className="flex items-center gap-2 text-black/80 dark:text-zinc-300 hover:text-black dark:hover:text-white transition-colors group"
                      >
                        <i className={`${link.icon} text-sm group-hover:text-black dark:group-hover:text-white transition-colors`} />
                        <span>{link.title}</span>
                      </a>
                    ) : (
                      <Link
                        href={link.url}
                        className="flex items-center gap-2 text-black/80 dark:text-zinc-300 hover:text-black dark:hover:text-white transition-colors group"
                      >
                        <i className={`${link.icon} text-sm group-hover:text-black dark:group-hover:text-white transition-colors`} />
                        <span>{link.title}</span>
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="col-span-2 md:col-span-1 w-full flex flex-col text-left">
            <span className="font-mono font-bold uppercase tracking-widest text-[10px] text-zinc-500 dark:text-zinc-400 mb-5">
              Direct Contact
            </span>
            <ul className="space-y-3 font-mono text-xs">
              <li>
                <a
                  href={`mailto:${contact.email}`}
                  className="flex items-center gap-2 text-black/80 dark:text-zinc-300 hover:text-black dark:hover:text-white transition-colors"
                >
                  <i className="ri-mail-send-line text-sm" />
                  <span className="break-all">{contact.email}</span>
                </a>
              </li>
              <li>
                <a
                  href={`tel:${contact.phone}`}
                  className="flex items-center gap-2 text-black/80 dark:text-zinc-300 hover:text-black dark:hover:text-white transition-colors"
                >
                  <i className="ri-phone-line text-sm" />
                  <span>{contact.phone}</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="py-6 border-t border-black/10 dark:border-white/10 flex items-center justify-center text-center text-xs font-mono text-zinc-500 dark:text-zinc-400">
          <p>© {currentYear} Divine Orji. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
