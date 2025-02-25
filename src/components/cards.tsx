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
    <div className="w-full max-w-sm shadow-lg rounded-lg overflow-hidden">
      {/* Image, Title, and Link */}
      <Link
        href={link}
        className="relative block aspect-[16/12] overflow-hidden"
      >
        <Image src={image} alt={title} className="w-full" />

        {tags && (
          <div className="absolute z-10 top-2 right-2 flex justify-center gap-2 text-[8px]">
            {tags.map((tag) => (
              <span key={tag} className="px-2 py-1 bg-gray-200 rounded-full">
                {tag}
              </span>
            ))}
          </div>
        )}

        <div className="absolute bottom-0 p-4 w-full h-full bg-black/65  flex justify-between items-end text-white">
          <h3 className="font-mono text-2xl">{title}</h3>

          <ArrowIcon />
        </div>
      </Link>
    </div>
  );
}
