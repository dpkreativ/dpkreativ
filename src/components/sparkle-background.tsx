import type { CSSProperties } from "react";
import { cn } from "@/lib/utils";

export type SparkleVariant =
  | "sparkle"
  | "lightning"
  | "code"
  | "terminal"
  | "layers"
  | "pen"
  | "scroll"
  | "mic"
  | "briefcase"
  | "gradcap"
  | "mail"
  | "chat"
  | "target"
  | "trophy"
  | "compass";

function renderIcon(variant: SparkleVariant) {
  const commonProps = {
    width: "100%",
    height: "100%",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    "data-icon": variant,
  } as const;

  const strokeProps = {
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "square" as const,
    strokeLinejoin: "miter" as const,
  };

  switch (variant) {
    case "lightning":
      return (
        <svg {...commonProps}>
          <path d="M13 2L4 14H11L10 22L20 10H13L13 2Z" fill="currentColor" />
        </svg>
      );
    case "code":
      return (
        <svg {...commonProps}>
          <path d="M8 7L3 12L8 17" {...strokeProps} />
          <path d="M16 7L21 12L16 17" {...strokeProps} />
          <path d="M14 4L10 20" {...strokeProps} />
        </svg>
      );
    case "terminal":
      return (
        <svg {...commonProps}>
          <rect x="3" y="4" width="18" height="16" {...strokeProps} />
          <path d="M7 9L11 12L7 15" {...strokeProps} />
          <path d="M13 15H17" {...strokeProps} />
        </svg>
      );
    case "layers":
      return (
        <svg {...commonProps}>
          <path d="M12 3L2 8L12 13L22 8L12 3Z" {...strokeProps} />
          <path d="M2 13L12 18L22 13" {...strokeProps} />
          <path d="M2 17L12 22L22 17" {...strokeProps} />
        </svg>
      );
    case "pen":
      return (
        <svg {...commonProps}>
          <path d="M16.5 3.5L20.5 7.5L8 20H4V16L16.5 3.5Z" {...strokeProps} />
          <path d="M13.5 6.5L17.5 10.5" {...strokeProps} />
        </svg>
      );
    case "scroll":
      return (
        <svg {...commonProps}>
          <path
            d="M17 7H21V5A2 2 0 0 0 19 3A2 2 0 0 0 17 5V19A2 2 0 0 1 15 21"
            {...strokeProps}
          />
          <path d="M19 3H10A2 2 0 0 0 8 5V17" {...strokeProps} />
          <path
            d="M15 21H5A2 2 0 0 1 3 19V17H13V19A2 2 0 0 0 15 21Z"
            {...strokeProps}
          />
          <path d="M11 8.5H14.5" {...strokeProps} />
          <path d="M11 12.5H14.5" {...strokeProps} />
        </svg>
      );
    case "mic":
      return (
        <svg {...commonProps}>
          <rect x="9" y="2" width="6" height="11" rx="3" {...strokeProps} />
          <path d="M5 10V11A7 7 0 0 0 19 11V10" {...strokeProps} />
          <path d="M12 18V22" {...strokeProps} />
          <path d="M8 22H16" {...strokeProps} />
        </svg>
      );
    case "briefcase":
      return (
        <svg {...commonProps}>
          <rect x="3" y="7" width="18" height="13" {...strokeProps} />
          <path d="M8 7V4H16V7" {...strokeProps} />
          <path d="M3 12H21" {...strokeProps} />
        </svg>
      );
    case "gradcap":
      return (
        <svg {...commonProps}>
          <path d="M12 3L2 8.5L12 14L22 8.5L12 3Z" {...strokeProps} />
          <path
            d="M6 11V16.5C6 18 8.7 19.5 12 19.5C15.3 19.5 18 18 18 16.5V11"
            {...strokeProps}
          />
          <path d="M22 8.5V15" {...strokeProps} />
        </svg>
      );
    case "mail":
      return (
        <svg {...commonProps}>
          <rect x="2" y="4" width="20" height="16" {...strokeProps} />
          <path d="M2 6L12 13L22 6" {...strokeProps} />
        </svg>
      );
    case "chat":
      return (
        <svg {...commonProps}>
          <path d="M4 5H20V16H9L4 20V5Z" {...strokeProps} />
          <path d="M8 10H16" {...strokeProps} />
          <path d="M8 13H13" {...strokeProps} />
        </svg>
      );
    case "target":
      return (
        <svg {...commonProps}>
          <circle cx="12" cy="12" r="9" {...strokeProps} />
          <circle cx="12" cy="12" r="5" {...strokeProps} />
          <circle cx="12" cy="12" r="1.5" fill="currentColor" />
        </svg>
      );
    case "trophy":
      return (
        <svg {...commonProps}>
          <path d="M8 4H16V10A4 4 0 0 1 8 10V4Z" {...strokeProps} />
          <path d="M8 6H4V8A3 3 0 0 0 7 11H8" {...strokeProps} />
          <path d="M16 6H20V8A3 3 0 0 1 17 11H16" {...strokeProps} />
          <path d="M12 14V19" {...strokeProps} />
          <path d="M8 19H16" {...strokeProps} />
        </svg>
      );
    case "compass":
      return (
        <svg {...commonProps}>
          <circle cx="12" cy="12" r="9" {...strokeProps} />
          <polygon
            points="16,8 13.8,13.8 8,16 10.2,10.2"
            fill="currentColor"
          />
        </svg>
      );
    case "sparkle":
    default:
      return (
        <svg {...commonProps}>
          <path
            d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z"
            fill="currentColor"
          />
        </svg>
      );
  }
}

type PlacementMode = "heading" | "section";

export interface SparkleBackgroundProps {
  variant?: SparkleVariant;
  size?: number;
  rotate?: number;
  duration?: number;
  delay?: number;
  altAnimation?: boolean;
  placement?: PlacementMode;
  className?: string;
}

export default function SparkleBackground({
  variant = "sparkle",
  size = 28,
  rotate = 12,
  duration = 5.8,
  delay = -1.5,
  altAnimation = false,
  placement = "heading",
  className,
}: SparkleBackgroundProps) {
  const positionClassName =
    placement === "section"
      ? "bottom-1 right-4 sm:bottom-2 sm:right-10"
      : "top-full right-0 mt-1.5 sm:top-full sm:-right-9 sm:-mt-1";

  const mobileSize = Math.max(16, Math.round(size * 0.62));
  const sizeStyle = {
    "--sparkle-size-mobile": `${mobileSize}px`,
    "--sparkle-size": `${size}px`,
    transform: `rotate(${rotate}deg)`,
  } as CSSProperties;

  return (
    <span
      aria-hidden="true"
      data-sparkle-accent={variant}
      data-sparkle-position="bottom-right"
      className={cn(
        "pointer-events-none select-none absolute h-[var(--sparkle-size-mobile)] w-[var(--sparkle-size-mobile)] text-black/35 dark:text-white/35 sm:h-[var(--sparkle-size)] sm:w-[var(--sparkle-size)]",
        positionClassName,
        className,
      )}
      style={sizeStyle}
    >
      <span
        className={`block h-full w-full ${
          altAnimation ? "animate-sparkle-float-alt" : "animate-sparkle-float"
        }`}
        style={{
          animationDuration: `${duration}s`,
          animationDelay: `${delay}s`,
        }}
      >
        {renderIcon(variant)}
      </span>
    </span>
  );
}
