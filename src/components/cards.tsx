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
      className="w-full bg-white dark:bg-black group ease-out duration-300 transition-all border-2 md:border-4 border-faxx-dark dark:border-gray-700 overflow-hidden hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[8px_8px_0px_0px_rgba(67,32,246,1)] md:hover:shadow-[12px_12px_0px_0px_rgba(67,32,246,1)] dark:hover:shadow-[8px_8px_0px_0px_rgba(0,229,255,1)] md:dark:hover:shadow-[12px_12px_0px_0px_rgba(0,229,255,1)] flex flex-col"
    >
       {/* Image */}
       <div className="relative block aspect-[4/3] overflow-hidden border-b-2 md:border-b-4 border-faxx-dark dark:border-gray-700">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* Title & Tags */}
      <div className="p-4 sm:p-6 grid gap-4 bg-faxx-light dark:bg-black flex-1">
        <div className="flex justify-between gap-3 items-start">
          <div className="flex items-center gap-3 min-w-0">
            <ProjectBrandMark brand={brand} fallback={title} />

            <RevealText
              as="h3"
              className="font-display text-xl sm:text-2xl uppercase tracking-tighter text-faxx-dark dark:text-white min-w-0"
              triggerStart="top 92%"
              lineDelay={0.12}
            >
              {title}
            </RevealText>
          </div>
          <span className="opacity-0 translate-x-[-10px] transition-all duration-300 ease-out group-hover:opacity-100 group-hover:translate-x-0 text-faxx-blue dark:text-faxx-cyan">
            <ArrowIcon />
          </span>
        </div>
        {tags && (
          <div className="flex gap-2 flex-wrap text-[10px] sm:text-xs font-mono font-bold uppercase">
            {tags.map((tag) => (
              <span key={tag} className="px-2 sm:px-3 py-1 bg-faxx-blue dark:bg-faxx-cyan text-white dark:text-faxx-dark border border-faxx-dark dark:border-gray-700">
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </Link>
  );
}
