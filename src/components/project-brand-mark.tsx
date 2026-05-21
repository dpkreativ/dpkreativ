import Image from "next/image";

const PLACEHOLDER_BRAND_ICON = "/images/brand-logos/kreativ-icon.svg";

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
};

export default function ProjectBrandMark({
  brand,
  fallback,
  className = "h-12 w-12",
  imageClassName = "max-h-full w-auto object-contain",
}: ProjectBrandMarkProps) {
  const label = brand?.title ?? fallback;

  return (
    <div
      className={`shrink-0 flex items-center justify-center overflow-hidden rounded-full border border-black/10 p-2 dark:border-white/15 ${className}`}
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
        <Image
          src={PLACEHOLDER_BRAND_ICON}
          alt={`${label} placeholder logo`}
          width={595}
          height={595}
          className={`${imageClassName} dark:invert`}
        />
      )}
    </div>
  );
}
