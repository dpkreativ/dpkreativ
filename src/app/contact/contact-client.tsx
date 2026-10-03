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

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 py-12 md:py-20 grid gap-12 md:gap-16">
        {/* Header */}
        <header className="border-b border-black/15 pb-8 md:pb-12 dark:border-white/15">
          <SplitHeading
            as="h1"
            className="font-display text-4xl sm:text-6xl md:text-7xl uppercase tracking-tighter leading-[0.88] text-black dark:text-white"
          >
            START A CONVERSATION.
          </SplitHeading>

          <RevealText
            as="p"
            className="font-body text-base sm:text-lg md:text-xl mt-4 text-[#111111]/75 dark:text-zinc-300 max-w-2xl leading-relaxed"
          >
            Have a project in mind, an architectural challenge, or need a technical delivery partner? Submit a project brief below or reach out directly.
          </RevealText>
        </header>

        {/* Two-Column Modern Consultation Suite */}
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Left Column: Direct Channels & Telemetry */}
          <div className="lg:col-span-5 space-y-8">
            {/* Primary Channel Card */}
            <div className="border border-black/15 bg-white p-6 dark:border-white/15 dark:bg-[#0A0A0A] space-y-5">
              <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-zinc-500 dark:text-zinc-400">
                PRIMARY CONTACT CHANNEL
              </span>

              <div>
                <p className="font-mono text-xs uppercase tracking-wider text-zinc-400">
                  Email Address
                </p>
                <div className="mt-1 flex items-center justify-between gap-3">
                  <a
                    href={`mailto:${contact.email}`}
                    className="font-display text-xl sm:text-2xl text-black dark:text-white hover:text-zinc-600 dark:hover:text-zinc-300 transition-colors"
                  >
                    {contact.email}
                  </a>
                  <button
                    onClick={copyEmail}
                    className="border border-black/20 bg-black/5 px-2.5 py-1 font-mono text-[10px] font-bold uppercase tracking-wider text-black transition-colors hover:bg-black hover:text-white dark:border-white/20 dark:bg-white/10 dark:text-white dark:hover:bg-white dark:hover:text-black shrink-0"
                  >
                    {copied ? "[COPIED]" : "COPY"}
                  </button>
                </div>
              </div>

              <div className="border-t border-black/10 pt-4 dark:border-white/10">
                <p className="font-mono text-xs uppercase tracking-wider text-zinc-400">
                  Direct Phone / WhatsApp
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
            <div className="border border-black/15 bg-white p-6 dark:border-white/15 dark:bg-[#0A0A0A] space-y-4">
              <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-zinc-500 dark:text-zinc-400">
                VERIFIED PROFILES
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
            <div className="border border-black/15 bg-black/[0.02] p-6 dark:border-white/15 dark:bg-white/[0.02] space-y-3 font-mono text-xs">
              <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-zinc-500 dark:text-zinc-400">
                ENGAGEMENT PARAMETERS
              </span>
              <div className="grid gap-2 text-[#111111]/70 dark:text-zinc-400 pt-1">
                <div className="flex justify-between border-b border-black/5 pb-2 dark:border-white/5">
                  <span>RESPONSE TIME</span>
                  <span className="font-bold text-black dark:text-white">&lt; 24 HOURS</span>
                </div>
                <div className="flex justify-between border-b border-black/5 pb-2 dark:border-white/5">
                  <span>LOCATION / TIME</span>
                  <span className="font-bold text-black dark:text-white">WAT (UTC+1)</span>
                </div>
                <div className="flex justify-between">
                  <span>COLLABORATION</span>
                  <span className="font-bold text-black dark:text-white">REMOTE WORLDWIDE</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Embedded Project Brief Form */}
          <div className="lg:col-span-7">
            <div className="border border-black/15 bg-white p-6 sm:p-8 md:p-10 dark:border-white/15 dark:bg-[#0A0A0A]">
              <div className="mb-8 border-b border-black/10 pb-6 dark:border-white/10">
                <span className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-400">
                  PROJECT BRIEF INTAKE
                </span>
                <h2 className="mt-2 font-display text-2xl sm:text-3xl uppercase tracking-tight text-black dark:text-white">
                  Send Your Project Specifications.
                </h2>
              </div>

              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
