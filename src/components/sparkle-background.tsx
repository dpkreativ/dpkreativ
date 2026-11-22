"use client";

import { useId, useSyncExternalStore } from "react";
import { cn } from "@/lib/utils";

export type SparkleVariant =
  | "sparkle"
  | "lightning"
  | "code"
  | "terminal"
  | "layers"
  | "pen"
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

const HEADING_POSITION_SLOTS = [
  { name: "top-left", className: "-top-7 left-0 sm:-top-6 sm:-left-9" },
  { name: "top-right", className: "-top-6 right-0 sm:-top-5 sm:-right-10" },
  {
    name: "top-mid-left",
    className: "-top-7 left-[22%] sm:-top-7 sm:left-[26%]",
  },
  {
    name: "top-mid-right",
    className: "-top-7 right-[18%] sm:-top-7 sm:right-[22%]",
  },
  { name: "bottom-right", className: "-bottom-5 right-0 sm:-bottom-3 sm:-right-10" },
  { name: "bottom-left", className: "-bottom-5 left-2 sm:-bottom-4 sm:-left-9" },
  { name: "mid-right", className: "top-1/2 -right-7 -mt-3.5 sm:-right-10" },
  {
    name: "mid-left",
    className: "-top-7 left-1/2 -ml-3.5 sm:top-1/2 sm:-left-10 sm:ml-0 sm:-mt-3.5",
  },
] as const;

const SECTION_POSITION_SLOTS = [
  { name: "section-top-left", className: "top-1 left-4 sm:top-2 sm:left-10" },
  { name: "section-top-right", className: "top-1 right-4 sm:top-2 sm:right-10" },
  {
    name: "section-bottom-left",
    className: "bottom-1 left-6 sm:bottom-2 sm:left-12",
  },
  {
    name: "section-bottom-right",
    className: "bottom-1 right-6 sm:bottom-2 sm:right-12",
  },
] as const;

type PlacementMode = "heading" | "section";

interface AccentLayout {
  positionName: string;
  positionClassName: string;
  rotate: number;
  duration: number;
  delay: number;
  altAnimation: boolean;
}

const layoutCache = new Map<string, AccentLayout>();
let lastHeadingSlotIndex = -1;
let lastSectionSlotIndex = -1;

function pickSlotIndex(length: number, lastIndex: number): number {
  if (length <= 1) return 0;
  let nextIndex = Math.floor(Math.random() * length);
  if (nextIndex === lastIndex) {
    nextIndex = (nextIndex + 1 + Math.floor(Math.random() * (length - 1))) % length;
  }
  return nextIndex;
}

function getClientLayout(key: string, placement: PlacementMode): AccentLayout {
  const existing = layoutCache.get(key);
  if (existing) {
    return existing;
  }

  const slots =
    placement === "section" ? SECTION_POSITION_SLOTS : HEADING_POSITION_SLOTS;
  const lastIndex =
    placement === "section" ? lastSectionSlotIndex : lastHeadingSlotIndex;
  const slotIndex = pickSlotIndex(slots.length, lastIndex);

  if (placement === "section") {
    lastSectionSlotIndex = slotIndex;
  } else {
    lastHeadingSlotIndex = slotIndex;
  }

  const slot = slots[slotIndex];
  const duration = 4.8 + Math.random() * 2.8; // 4.8s to 7.6s
  const layout: AccentLayout = {
    positionName: slot.name,
    positionClassName: slot.className,
    rotate: -20 + Math.random() * 40, // -20deg to +20deg
    duration,
    delay: -(Math.random() * duration),
    altAnimation: Math.random() > 0.5,
  };

  layoutCache.set(key, layout);
  return layout;
}

function subscribe() {
  return () => {};
}

function getServerLayout(): AccentLayout | null {
  return null;
}

export interface SparkleBackgroundProps {
  variant?: SparkleVariant;
  size?: number;
  placement?: PlacementMode;
  className?: string;
}

export default function SparkleBackground({
  variant = "sparkle",
  size = 28,
  placement = "heading",
  className,
}: SparkleBackgroundProps) {
  const id = useId();
  const cacheKey = `${placement}:${variant}:${id}`;
  const layout = useSyncExternalStore(
    subscribe,
    () => getClientLayout(cacheKey, placement),
    getServerLayout,
  );

  if (!layout) {
    return null;
  }

  return (
    <span
      aria-hidden="true"
      data-sparkle-accent={variant}
      data-sparkle-position={layout.positionName}
      className={cn(
        "pointer-events-none select-none absolute text-black/35 dark:text-white/35",
        layout.positionClassName,
        className,
      )}
      style={{
        width: `${size}px`,
        height: `${size}px`,
        transform: `rotate(${layout.rotate}deg)`,
      }}
    >
      <span
        className={`block h-full w-full ${
          layout.altAnimation
            ? "animate-sparkle-float-alt"
            : "animate-sparkle-float"
        }`}
        style={{
          animationDuration: `${layout.duration}s`,
          animationDelay: `${layout.delay}s`,
        }}
      >
        {renderIcon(variant)}
      </span>
    </span>
  );
}
