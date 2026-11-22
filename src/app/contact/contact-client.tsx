"use client";

import { useState } from "react";
import SplitHeading from "@/components/split-heading";
import RevealText from "@/components/reveal-text";
import ContactForm from "@/components/form";
import { contact } from "@/assets/data";

export default function ContactClient() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(contact.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <main className="flex-1 w-full flex flex-col pt-[84px] bg-white text-[#111111] dark:bg-[#111111] dark:text-white">
      {/* Decorative Grid Background */}
      <div
        className="fixed inset-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none -z-10"
        style={{
          backgroundImage:
            "linear-gradient(rgba(17, 17, 17, 0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(17, 17, 17, 0.5) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 py-6 sm:py-12 md:py-20 grid grid-cols-1 gap-6 sm:gap-10 md:gap-16">
        {/* Header */}
        <header className="border-b border-black/15 pb-5 sm:pb-8 md:pb-12 dark:border-white/15">
          <SplitHeading
            as="h1"
            className="font-display text-4xl sm:text-6xl md:text-7xl uppercase tracking-tighter leading-[0.88] text-black dark:text-white"
          >
            Contact Divine Orji
          </SplitHeading>

          <RevealText
            as="div"
            noSplit
            className="mt-4 max-w-2xl font-body text-base sm:text-lg md:text-xl text-[#111111]/75 dark:text-zinc-300 leading-relaxed space-y-2"
          >
            <p>
              Get in touch about building a web app, improving an existing one, or planning the technical side of your project.
            </p>
            <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400">
              Use the form or{" "}
              <a href={`mailto:${contact.email}`} className="underline underline-offset-4 hover:text-black dark:hover:text-white">
                email me directly
              </a>.
            </p>
          </RevealText>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-10 lg:gap-16 items-start">
          <section
            aria-labelledby="project-brief-heading"
            className="min-w-0 border border-black/15 bg-white p-4 sm:p-8 md:p-10 dark:border-white/15 dark:bg-[#0A0A0A] lg:col-span-7 lg:col-start-6 lg:row-start-1"
          >
            <div className="mb-4 border-b border-black/10 pb-4 sm:mb-8 sm:pb-6 dark:border-white/10">
              <h2 id="project-brief-heading" className="font-display text-2xl sm:text-3xl uppercase tracking-tight text-black dark:text-white">
                Tell me about your project
              </h2>
            </div>

            <ContactForm />
          </section>

          <div className="min-w-0 space-y-4 sm:space-y-8 lg:col-span-5 lg:col-start-1 lg:row-start-1">
            {/* Primary Channel Card */}
            <div className="border border-black/15 bg-white p-4 sm:p-6 dark:border-white/15 dark:bg-[#0A0A0A] space-y-5">
              <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-zinc-500 dark:text-zinc-400">
                Direct contact
              </span>

              <div>
                <p className="font-mono text-xs uppercase tracking-wider text-zinc-400">
                  Email
                </p>
                <div className="mt-1 flex flex-wrap items-center justify-between gap-2">
                  <a
                    href={`mailto:${contact.email}`}
                    className="min-w-0 [overflow-wrap:anywhere] font-display text-xl sm:text-2xl text-black dark:text-white hover:text-zinc-600 dark:hover:text-zinc-300 transition-colors"
                  >
                    {contact.email}
                  </a>
                  <button
                    type="button"
                    onClick={copyEmail}
                    className="min-h-11 border border-black/20 bg-black/5 px-3 font-mono text-[10px] font-bold uppercase tracking-wider text-black transition-colors hover:bg-black hover:text-white dark:border-white/20 dark:bg-white/10 dark:text-white dark:hover:bg-white dark:hover:text-black shrink-0"
                  >
                    {copied ? "Copied" : "Copy email"}
                  </button>
                </div>
              </div>

              <div className="border-t border-black/10 pt-4 dark:border-white/10">
                <p className="font-mono text-xs uppercase tracking-wider text-zinc-400">
                  Phone
                </p>
                <a
                  href={`tel:${contact.phone}`}
                  className="mt-1 block font-mono text-sm font-bold text-black dark:text-white hover:text-zinc-600 dark:hover:text-zinc-300 transition-colors"
                >
                  {contact.phone}
                </a>
              </div>
            </div>

            {/* Direct Profiles Card */}
            <div className="border border-black/15 bg-white p-4 sm:p-6 dark:border-white/15 dark:bg-[#0A0A0A] space-y-4">
              <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-zinc-500 dark:text-zinc-400">
                Online profiles
              </span>

              <div className="grid grid-cols-2 gap-3 pt-1">
                <a
                  href={contact.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex flex-col justify-between border border-black/10 p-3.5 transition-colors hover:bg-black hover:text-white dark:border-white/10 dark:hover:bg-white dark:hover:text-black"
                >
                  <span className="font-mono text-[9px] uppercase tracking-widest opacity-60">NETWORK</span>
                  <span className="mt-1 font-mono text-xs font-bold uppercase">LinkedIn &rarr;</span>
                </a>

                <a
                  href="https://github.com/dpkreativ"
                  target="_blank"
                  rel="noreferrer"
                  className="group flex flex-col justify-between border border-black/10 p-3.5 transition-colors hover:bg-black hover:text-white dark:border-white/10 dark:hover:bg-white dark:hover:text-black"
                >
                  <span className="font-mono text-[9px] uppercase tracking-widest opacity-60">CODE</span>
                  <span className="mt-1 font-mono text-xs font-bold uppercase">GitHub &rarr;</span>
                </a>
              </div>
            </div>

            {/* Engagement Telemetry */}
            <div className="border border-black/15 bg-black/[0.02] p-4 sm:p-6 dark:border-white/15 dark:bg-white/[0.02] space-y-3 font-mono text-xs">
              <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-zinc-500 dark:text-zinc-400">
                Location and availability
              </span>
              <div className="grid gap-2 text-[#111111]/70 dark:text-zinc-400 pt-1">
                <div className="flex justify-between gap-3 border-b border-black/5 pb-2 dark:border-white/5">
                  <span>Time zone</span>
                  <span className="text-right font-bold text-black dark:text-white">West Africa Time (UTC+1)</span>
                </div>
                <div className="flex justify-between gap-3">
                  <span>Collaboration</span>
                  <span className="text-right font-bold text-black dark:text-white">Remote, worldwide</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
