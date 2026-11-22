"use client";

import { useState } from "react";

export default function SpeakerBio({ bio }: { bio: string }) {
  const [copyStatus, setCopyStatus] = useState("");

  async function copyBio() {
    setCopyStatus("");

    try {
      await navigator.clipboard.writeText(bio);
      setCopyStatus("Bio copied.");
    } catch {
      setCopyStatus("Couldn’t copy automatically. You can select and copy the bio above.");
    }
  }

  return (
    <section
      id="speaker-bio"
      aria-labelledby="speaker-bio-heading"
      className="grid scroll-mt-28 gap-4 border border-black/15 bg-white p-6 dark:border-white/15 dark:bg-[#1a1a1a] md:p-8"
    >
      <h2 id="speaker-bio-heading" className="font-display text-3xl uppercase tracking-tighter">
        Speaker bio
      </h2>
      <p className="font-body text-sm text-zinc-600 dark:text-zinc-400">
        Feel free to use this bio in your event program or to introduce me on stage.
      </p>
      <p className="max-w-3xl font-body text-base leading-relaxed text-[#111111]/80 dark:text-zinc-300">
        {bio}
      </p>
      <div className="flex flex-wrap items-center gap-3">
        <button
          type="button"
          onClick={copyBio}
          className="min-h-11 border border-current px-4 font-mono text-xs font-bold uppercase tracking-wider hover:bg-black/5 dark:hover:bg-white/10"
        >
          Copy speaker bio
        </button>
        <p role="status" className="font-body text-sm text-zinc-600 dark:text-zinc-400">
          {copyStatus}
        </p>
      </div>
    </section>
  );
}
