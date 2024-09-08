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
      <Link href={link}>
        <Image src={image} alt={title} width={400} height={300} />

        <div>
          <h3>{title}</h3>
        </div>
      </Link>
    </div>
  );
}
