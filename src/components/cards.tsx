import { ArrowIcon } from "@/assets/icons";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import Link from "next/link";

type ProjectProps = {
  title: string;
  tags?: string[];
  image: string | StaticImport;
  link: string;
};

export function ProjectCard({ title, tags, image, link }: ProjectProps) {
  return (
    <Link
      href={link}
      className="w-full shadow-lg group ease-out duration-300 transition-all rounded-lg border border-black/10 overflow-hidden"
    >
      {/* Image */}
      <div className="relative block aspect-[16/10] overflow-hidden">
        <Image
          src={image}
          alt={title}
          className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* Title & Tags */}
      <div className="p-4 grid gap-4">
        <div className="flex justify-between gap-2 items-center">
          <h3 className="font-mono">{title}</h3>
          <span className="opacity-0 translate-x-[-5px] transition-all duration-300 ease-out group-hover:opacity-100 group-hover:translate-x-0">
            <ArrowIcon />
          </span>
        </div>
        {tags && (
          <div className="flex gap-2 text-[8px]">
            {tags.map((tag) => (
              <span key={tag} className="px-2 py-1 bg-gray-200 rounded-full">
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </Link>
  );
}
