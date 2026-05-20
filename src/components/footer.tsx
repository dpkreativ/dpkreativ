import { contact, logo, navlinks, socials } from "@/assets/data";
import Image from "next/image";
import Link from "next/link";
import Button from "./button";
import RevealText from "./reveal-text";
import SplitHeading from "./split-heading";

export default function Footer() {
  const currentYear = new Date().getFullYear();

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
          .filter((l) => ["Blog", "Contact"].includes(l.title))
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
    <footer className="bg-white dark:bg-black text-faxx-dark dark:text-white w-full">
      <div className="max-w-7xl mx-auto px-8 md:px-12">
        <div className="py-12 md:py-16 border-b border-gray-200 dark:border-gray-800">
          <div className="max-w-4xl mx-auto grid gap-8 text-center justify-items-center">
            <div>
              <SplitHeading
                as="h2"
                className="font-display uppercase text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.1] text-center"
              >
                LET&apos;S BUILD SOMETHING ICONIC.
              </SplitHeading>
              <RevealText noSplit className="mt-4 text-gray-600 dark:text-gray-400 font-body text-lg md:text-xl max-w-2xl mx-auto text-center">
                Have a project in mind? I&apos;m always open to discussing new opportunities and collaborations.
              </RevealText>
            </div>
            <Link href="/contact" className="w-max">
              <Button className="!px-8 !py-4 text-lg">
                <i className="ri-rocket-fill text-xl"></i>
                <span>START A PROJECT</span>
              </Button>
            </Link>
          </div>
        </div>

        <div className="py-12 md:py-16 grid gap-12 grid-cols-2 md:grid-cols-2 xl:grid-cols-4 md:gap-10 xl:gap-12 text-center md:text-left justify-items-center md:justify-items-start items-start">
          <div className="col-span-2 md:col-span-1 flex justify-center md:justify-start">
            <Link href="/" className="flex w-max items-center gap-3 rounded-full bg-transparent px-4 py-2 text-faxx-dark transition-colors hover:bg-black/[0.03] dark:bg-black dark:text-white dark:hover:bg-white/[0.06]">
              <Image
                src={logo}
                alt="Divine Orji logo"
                width={24}
                height={24}
                className="dark:invert"
              />
              <RevealText
                as="span"
                className="pr-2 font-mono text-[10px] sm:text-xs font-bold uppercase tracking-widest text-faxx-dark dark:text-white"
                triggerStart="top 94%"
                lineDelay={0.1}
              >
                Divi
              </RevealText>
            </Link>
          </div>

          {navSections.map((section) => (
            <div key={section.title} className="w-full flex flex-col items-center md:items-start text-center md:text-left">
              <RevealText
                as="h3"
                className="font-mono font-bold uppercase tracking-widest text-sm text-zinc-600 dark:text-faxx-lime mb-6 w-full text-center md:text-left"
                triggerStart="top 94%"
                lineDelay={0.1}
              >
                {section.title}
              </RevealText>
              <ul className="space-y-4">
                {section.links.map((link) => (
                  <li key={link.id}>
                    {link.external ? (
                      <a
                        href={link.url}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center justify-center md:justify-start gap-3 text-faxx-dark dark:text-gray-300 hover:text-faxx-coral dark:hover:text-faxx-lime transition-colors group"
                      >
                        <i className={`${link.icon} text-lg group-hover:text-faxx-coral dark:group-hover:text-faxx-lime transition-colors`}></i>
                        <span className="font-body">{link.title}</span>
                      </a>
                    ) : (
                      <Link
                        href={link.url}
                        className="flex items-center justify-center md:justify-start gap-3 text-faxx-dark dark:text-gray-300 hover:text-faxx-coral dark:hover:text-faxx-lime transition-colors group"
                      >
                        <i className={`${link.icon} text-lg group-hover:text-faxx-coral dark:group-hover:text-faxx-lime transition-colors`}></i>
                        <span className="font-body">{link.title}</span>
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="col-span-2 md:col-span-1 w-full flex flex-col items-center md:items-start text-center md:text-left">
            <RevealText
              as="h3"
              className="font-mono font-bold uppercase tracking-widest text-sm text-zinc-600 dark:text-faxx-lime mb-6 w-full text-center md:text-left"
              triggerStart="top 94%"
              lineDelay={0.1}
            >
              Contact
            </RevealText>
            <ul className="space-y-4">
              <li>
                <a
                  href={`mailto:${contact.email}`}
                  className="flex items-start justify-center md:justify-start gap-3 text-faxx-dark dark:text-gray-300 hover:text-faxx-coral dark:hover:text-faxx-lime transition-colors group"
                >
                  <i className="ri-mail-send-line text-lg mt-0.5 group-hover:text-faxx-coral dark:group-hover:text-faxx-lime transition-colors"></i>
                  <span className="font-body break-all">{contact.email}</span>
                </a>
              </li>
              <li>
                <a
                  href={`tel:${contact.phone}`}
                  className="flex items-start justify-center md:justify-start gap-3 text-faxx-dark dark:text-gray-300 hover:text-faxx-coral dark:hover:text-faxx-lime transition-colors group"
                >
                  <i className="ri-phone-line text-lg mt-0.5 group-hover:text-faxx-coral dark:group-hover:text-faxx-lime transition-colors"></i>
                  <span className="font-body">{contact.phone}</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="py-6 border-t border-gray-200 dark:border-gray-800 flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-center md:text-left">
          <p className="text-gray-600 dark:text-gray-500 text-sm font-body">
            © {currentYear} Divine Orji. All rights reserved.
          </p>
          <p className="text-gray-600 dark:text-gray-500 text-sm font-body md:text-right">
            Built with AI and Next.js
          </p>
        </div>
      </div>
    </footer>
  );
}
