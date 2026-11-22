"use client";

import { useMemo } from "react";

const LIGHTNING_SVG = (
  <svg
    width="100%"
    height="100%"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 2 L8 8 H11 L13 14 H9 L13 6 L10 6 L10 2 Z"
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
  >
    <path
      d="M12 2 L14 7 L19 7 L16 11 L17 16 L12 13 L7 16 L8 11 L5 7 L10 7 L12 2 Z"
      fill="currentColor"
    />
  </svg>
);

type IconType = "lightning" | "sparkle";

interface SparklePosition {
  x: number;
  y: number;
  type: IconType;
  size: number;
  rotate: number;
  delay: number;
}

function generatePositions(): SparklePosition[] {
  const count = 5 + Math.floor(Math.random() * 4); // 5 to 8 icons
  const positions: SparklePosition[] = [];

  for (let i = 0; i < count; i++) {
    positions.push({
      x: Math.random() * 100,
      y: Math.random() * 100,
      type: Math.random() > 0.5 ? "lightning" : "sparkle",
      size: 14 + Math.random() * 18, // 14px to 32px
      rotate: Math.random() * 360,
      delay: Math.random() * 8, // 0s to 8s animation delay
    });
  }

  return positions;
}

export default function SparkleBackground() {
  // Generate positions once per mount so they stay stable during the session
  const positions = useMemo(() => generatePositions(), []);

  return (
    <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
      {positions.map((pos, i) => (
        <div
          key={i}
          className="absolute text-black/15 dark:text-white/15"
          style={{
            left: `${pos.x}%`,
            top: `${pos.y}%`,
            width: `${pos.size}px`,
            height: `${pos.size}px`,
            transform: `rotate(${pos.rotate}deg)`,
            animation: `sparkle-float 7s ease-in-out infinite`,
            animationDelay: `${pos.delay}s`,
          }}
        >
          <div className="animate-sparkle-float">
            {pos.type === "lightning" ? LIGHTNING_SVG : SPARKLE_SVG}
          </div>
        </div>
      ))}
    </div>
  );
}
