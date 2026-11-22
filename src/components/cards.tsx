import { ArrowIcon } from "@/assets/icons";
import MiniBrowserIframe from "@/components/mini-browser-iframe";
import ProjectBrandMark from "@/components/project-brand-mark";
import RevealText from "@/components/reveal-text";
import Link from "next/link";

type ProjectProps = {
  title: string;
  tags?: string[];
  url: string;
  embeddable: boolean;
  link: string;
  brand?: {
    image: string;
    title: string;
    width: number;
    height: number;
    invertInDarkMode?: boolean;
  } | null;
};

export function ProjectCard({ title, tags, url, embeddable, link, brand }: ProjectProps) {
  return (
    <article className="flex min-w-0 w-full flex-col overflow-hidden border border-black/10 bg-white/80 transition-colors focus-within:border-black/40 hover:border-black/40 dark:border-white/10 dark:bg-white/[0.04] dark:focus-within:border-white/40 dark:hover:border-white/40">
      <MiniBrowserIframe
        url={url}
        title={title}
        embeddable={embeddable}
        containerClassName="aspect-[4/3] w-full border-0 border-b"
        showCrosshairs={false}
      />

      <Link href={link} className="group flex min-w-0 flex-1 flex-col gap-4 p-4 sm:p-6">
        <div className="flex justify-between gap-3 items-start">
          <div className="flex items-center gap-3 min-w-0">
            <ProjectBrandMark brand={brand} fallback={title} />

            <RevealText
              as="h3"
              className="min-w-0 break-words font-display text-xl sm:text-2xl leading-[1.02] tracking-[-0.03em] text-[#111111] dark:text-white"
              triggerStart="top 92%"
              lineDelay={0.12}
            >
              {title}
            </RevealText>
          </div>
          <span className="shrink-0 translate-x-[-10px] opacity-0 text-black transition-all duration-300 ease-out group-hover:translate-x-0 group-hover:opacity-100 dark:text-white">
            <ArrowIcon />
          </span>
        </div>
        {tags && (
          <div className="flex flex-wrap gap-2 font-mono text-[10px] font-bold uppercase sm:text-xs">
            {tags.map((tag) => (
              <span
                key={tag}
                className="border border-black/10 bg-black/[0.04] px-2.5 sm:px-3 py-1 tracking-[0.16em] sm:tracking-[0.22em] text-black/60 dark:border-white/20 dark:bg-white/[0.1] dark:text-white/90"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </Link>
    </article>
  );
}
