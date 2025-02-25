import { ArrowIcon } from "@/assets/icons";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import Link from "next/link";

type ProjectProps = {
  title: string;
  tags?: string[];
  description?: string;
  image: string | StaticImport;
  link: string;
};

export function ProjectCard({ title, tags, image, link }: ProjectProps) {
  return (
    <Link
      href={link}
      className="w-full shadow-lg group rounded-lg border border-black/10 overflow-hidden"
    >
      {/* Image */}
      <div className="relative block aspect-[16/12] overflow-hidden">
        <Image src={image} alt={title} className="w-full" />

        <div className="absolute top-0 p-4 w-full h-full  flex justify-end text-white"></div>
      </div>

      {/* Title & Tags */}
      <div className="p-4 grid gap-4">
        <div className="flex justify-between gap-2 items-center">
          <h3 className="font-mono">{title}</h3>
          <span className="hidden group-hover:block">
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
