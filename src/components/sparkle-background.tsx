"use client";

import { useSyncExternalStore } from "react";

const LIGHTNING_SVG = (
  <svg
    width="100%"
    height="100%"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
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
  >
    <path
      d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z"
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
  duration: number;
  delay: number;
  altAnimation: boolean;
}

const GRID_COLS = 4;
const GRID_ROWS = 4;

function generatePositions(): SparklePosition[] {
  const count = 14 + Math.floor(Math.random() * 5); // 14 to 18 icons
  const positions: SparklePosition[] = [];
  const cellWidth = 90 / GRID_COLS;
  const cellHeight = 80 / GRID_ROWS;

  for (let i = 0; i < count; i++) {
    const col = i % GRID_COLS;
    const row = Math.floor(i / GRID_COLS) % GRID_ROWS;
    const x = 4 + col * cellWidth + Math.random() * (cellWidth * 0.8);
    const y = 10 + row * cellHeight + Math.random() * (cellHeight * 0.8);
    const duration = 4.5 + Math.random() * 3.5; // 4.5s to 8s

    positions.push({
      x,
      y,
      type: i % 2 === 0 ? "sparkle" : "lightning",
      size: 18 + Math.random() * 20, // 18px to 38px
      rotate: Math.random() * 360,
      duration,
      delay: -(Math.random() * duration), // negative delay so icons float immediately
      altAnimation: i % 2 === 1,
    });
  }

  return positions;
}

const EMPTY_POSITIONS: SparklePosition[] = [];
let cachedClientPositions: SparklePosition[] | null = null;

function subscribe() {
  return () => {};
}

function getClientPositions(): SparklePosition[] {
  if (cachedClientPositions === null) {
    cachedClientPositions = generatePositions();
  }

  return cachedClientPositions;
}

function getServerPositions(): SparklePosition[] {
  return EMPTY_POSITIONS;
}

export default function SparkleBackground() {
  // Render empty during SSR and hydration, then populate once per client session
  const positions = useSyncExternalStore(
    subscribe,
    getClientPositions,
    getServerPositions,
  );

  return (
    <div
      data-sparkle-background="true"
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
      aria-hidden="true"
    >
      {positions.map((pos, i) => (
        <div
          key={i}
          className="absolute text-black/30 dark:text-white/30"
          style={{
            left: `${pos.x}%`,
            top: `${pos.y}%`,
            width: `${pos.size}px`,
            height: `${pos.size}px`,
            transform: `rotate(${pos.rotate}deg)`,
          }}
        >
          <div
            className={`h-full w-full ${
              pos.altAnimation
                ? "animate-sparkle-float-alt"
                : "animate-sparkle-float"
            }`}
            style={{
              animationDuration: `${pos.duration}s`,
              animationDelay: `${pos.delay}s`,
            }}
          >
            {pos.type === "lightning" ? LIGHTNING_SVG : SPARKLE_SVG}
          </div>
        </div>
      ))}
    </div>
  );
}
