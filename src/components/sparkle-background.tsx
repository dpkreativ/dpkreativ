import { cn } from "@/lib/utils";

const LIGHTNING_SVG = (
  <svg
    width="100%"
    height="100%"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    data-icon="lightning"
  >
    <path
      d="M13 2L4 14H11L10 22L20 10H13L13 2Z"
      fill="currentColor"
    />
  </svg>
);

const SPARKLE_SVG = (
  <svg
    width="100%"
    height="100%"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    data-icon="sparkle"
  >
    <path
      d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z"
      fill="currentColor"
    />
  </svg>
);

export type SparkleVariant = "sparkle" | "lightning";

export interface SparkleBackgroundProps {
  variant?: SparkleVariant;
  size?: number;
  rotate?: number;
  duration?: number;
  delay?: number;
  altAnimation?: boolean;
  className?: string;
}

export default function SparkleBackground({
  variant = "sparkle",
  size = 28,
  rotate = 12,
  duration,
  delay = 0,
  altAnimation,
  className,
}: SparkleBackgroundProps) {
  const useAltAnimation = altAnimation ?? variant === "lightning";
  const resolvedDuration = duration ?? (variant === "lightning" ? 6.2 : 5.4);

  return (
    <span
      aria-hidden="true"
      data-sparkle-accent={variant}
      className={cn(
        "pointer-events-none select-none absolute text-black/35 dark:text-white/35",
        "-top-5 right-0 sm:-top-4 sm:-right-10",
        className,
      )}
      style={{
        width: `${size}px`,
        height: `${size}px`,
        transform: `rotate(${rotate}deg)`,
      }}
    >
      <span
        className={`block h-full w-full ${
          useAltAnimation ? "animate-sparkle-float-alt" : "animate-sparkle-float"
        }`}
        style={{
          animationDuration: `${resolvedDuration}s`,
          animationDelay: `${delay}s`,
        }}
      >
        {variant === "lightning" ? LIGHTNING_SVG : SPARKLE_SVG}
      </span>
    </span>
  );
}
