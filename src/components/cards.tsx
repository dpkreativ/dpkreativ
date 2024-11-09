import { ArrowIcon } from "@/assets/icons";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import Link from "next/link";
import Button from "./button";

type ProjectProps = {
  title: string;
  tags?: string[];
  description?: string;
  image: string | StaticImport;
  link: string;
};

export function ProjectCard({
  title,
  tags,
  description,
  image,
  link,
}: ProjectProps) {
  return (
    <div className="w-full max-w-sm shadow-lg">
      {/* Image, Title, and Link */}
      <Link
        href={link}
        className="relative block aspect-square overflow-hidden"
      >
        <Image src={image} alt={title} className="w-full" />

        <div className="absolute bottom-0 p-4 w-full h-full bg-black/30 flex justify-between items-end text-white">
          <h3 className="font-mono text-2xl">{title}</h3>

          <ArrowIcon />
        </div>
      </Link>

      {/* Tags and Description */}
      <div className="p-4 text-sm grid gap-4">
        <div>
          {tags && (
            <div className="flex gap-2 text-xs">
              {tags.map((tag) => (
                <span key={tag} className="px-2 py-1 bg-gray-200 rounded-full">
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>

        {description && <p className="text-gray-500">{description}</p>}

        <Link href={link} className="flex justify-center">
          <Button>View Project</Button>
        </Link>
      </div>
    </div>
  );
}
