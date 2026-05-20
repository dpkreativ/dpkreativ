import Image from "next/image";

type BrandMark = {
  image: string;
  title: string;
  width: number;
  height: number;
  invertInDarkMode?: boolean;
};

type ProjectBrandMarkProps = {
  brand?: BrandMark | null;
  fallback: string;
  className?: string;
  imageClassName?: string;
  textClassName?: string;
};

function getInitials(value: string) {
  return value
    .split(/[^A-Za-z0-9]+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join("")
    .toUpperCase();
}

export default function ProjectBrandMark({
  brand,
  fallback,
  className = "h-12 w-12",
  imageClassName = "max-h-full w-auto object-contain",
  textClassName = "font-display text-sm tracking-tight text-[#111111]",
}: ProjectBrandMarkProps) {
  const label = brand?.title ?? fallback;

  return (
    <div
      className={`shrink-0 flex items-center justify-center overflow-hidden rounded-full border border-black/10 bg-white/90 p-2 dark:border-white/15 dark:bg-white/95 ${className}`}
    >
      {brand ? (
        <Image
          src={brand.image}
          alt={`${brand.title} logo`}
          width={brand.width}
          height={brand.height}
          className={`${imageClassName} ${brand.invertInDarkMode ? "dark:invert" : ""}`}
        />
      ) : (
        <span className={textClassName}>{getInitials(label)}</span>
      )}
    </div>
  );
}
