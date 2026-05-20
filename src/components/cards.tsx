import { ArrowIcon } from "@/assets/icons";
import ProjectBrandMark from "@/components/project-brand-mark";
import RevealText from "@/components/reveal-text";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import Link from "next/link";

type ProjectProps = {
  title: string;
  tags?: string[];
  image: string | StaticImport;
  link: string;
  brand?: {
    image: string;
    title: string;
    width: number;
    height: number;
    invertInDarkMode?: boolean;
  } | null;
};

export function ProjectCard({ title, tags, image, link, brand }: ProjectProps) {
  return (
    <Link
      href={link}
      className="group flex w-full flex-col overflow-hidden rounded-[2rem] border border-black/10 bg-white/80 transition-all duration-300 hover:-translate-y-1 hover:border-[#ff5a58]/40 hover:shadow-[0_32px_80px_-38px_rgba(17,17,17,0.38)] dark:border-white/10 dark:bg-white/[0.04] dark:hover:border-faxx-lime/40 dark:hover:bg-white/[0.06]"
    >
      <div className="relative block aspect-[4/3] overflow-hidden border-b border-black/10 dark:border-white/10">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <div className="flex flex-1 flex-col gap-4 p-5 sm:p-6">
        <div className="flex justify-between gap-3 items-start">
          <div className="flex items-center gap-3 min-w-0">
            <ProjectBrandMark brand={brand} fallback={title} />

            <RevealText
              as="h3"
              className="min-w-0 font-display text-2xl leading-[1.02] tracking-[-0.03em] text-[#111111] dark:text-white"
              triggerStart="top 92%"
              lineDelay={0.12}
            >
              {title}
            </RevealText>
          </div>
          <span className="translate-x-[-10px] opacity-0 text-[#ff5a58] transition-all duration-300 ease-out group-hover:translate-x-0 group-hover:opacity-100 dark:text-faxx-lime">
            <ArrowIcon />
          </span>
        </div>
        {tags && (
          <div className="flex flex-wrap gap-2 font-mono text-[10px] font-bold uppercase sm:text-xs">
            {tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-black/10 bg-black/[0.04] px-3 py-1 tracking-[0.22em] text-black/60 dark:border-white/10 dark:bg-white/[0.06] dark:text-white/64"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </Link>
  );
}
