"use client";

import Image from "next/image";
import { useCallback, useEffect, useMemo, useState } from "react";

export interface MiniBrowserIframeProps {
  url?: string;
  title: string;
  fallbackImage?: string;
  className?: string;
  containerClassName?: string;
  initialMode?: "live" | "screenshot";
  onInteractionChange?: (isInteracting: boolean) => void;
  priority?: boolean;
  showCrosshairs?: boolean;
}

function normalizeUrl(url?: string): string {
  if (!url || url === "#") return "";
  if (url.startsWith("http://") || url.startsWith("https://")) return url;
  return `https://${url}`;
}

function extractDomain(url?: string): string {
  if (!url) return "";
  try {
    const parsed = new URL(url.startsWith("http") ? url : `https://${url}`);
    return parsed.hostname.replace(/^www\./, "");
  } catch {
    return url.replace(/^https?:\/\//, "").replace(/^www\./, "").split("/")[0];
  }
}

export default function MiniBrowserIframe({
  url,
  title,
  fallbackImage,
  className = "",
  containerClassName = "",
  initialMode = "live",
  onInteractionChange,
  priority = false,
  showCrosshairs = true,
}: MiniBrowserIframeProps) {
  const targetUrl = useMemo(() => normalizeUrl(url), [url]);
  const hasLiveUrl = Boolean(targetUrl);
  const cleanDomain = useMemo(() => extractDomain(targetUrl), [targetUrl]);

  const [mode, setMode] = useState<"live" | "screenshot">(() =>
    hasLiveUrl ? initialMode : "screenshot",
  );
  const [isLoading, setIsLoading] = useState<boolean>(Boolean(hasLiveUrl));
  const [isInteracting, setIsInteracting] = useState<boolean>(false);
  const [reloadKey, setReloadKey] = useState<number>(0);
  const [hasError, setHasError] = useState<boolean>(false);

  // Sync mode when targetUrl or initialMode changes
  useEffect(() => {
    if (!hasLiveUrl) {
      setMode("screenshot");
    } else {
      setMode(initialMode);
      setIsLoading(true);
      setHasError(false);
    }
  }, [hasLiveUrl, initialMode, targetUrl]);

  const handleInteractionToggle = useCallback(
    (active: boolean) => {
      setIsInteracting(active);
      onInteractionChange?.(active);
    },
    [onInteractionChange],
  );

  const handleReload = useCallback(() => {
    setIsLoading(true);
    setHasError(false);
    setReloadKey((prev) => prev + 1);
  }, []);

  const handleSwitchMode = (newMode: "live" | "screenshot") => {
    if (newMode === "screenshot" && isInteracting) {
      handleInteractionToggle(false);
    }
    setMode(newMode);
  };

  return (
    <div
      className={`group/minibrowser relative flex flex-col border border-black/15 bg-white text-[#111111] dark:border-white/15 dark:bg-[#0c0c0c] dark:text-white ${containerClassName}`}
      onMouseLeave={() => {
        if (isInteracting) {
          handleInteractionToggle(false);
        }
      }}
    >
      {/* Signature Corner Crosshairs */}
      {showCrosshairs && (
        <>
          <span
            className="pointer-events-none absolute -left-1.5 -top-2 font-mono text-xs font-bold text-black/30 dark:text-white/30"
            aria-hidden="true"
          >
            +
          </span>
          <span
            className="pointer-events-none absolute -right-1.5 -top-2 font-mono text-xs font-bold text-black/30 dark:text-white/30"
            aria-hidden="true"
          >
            +
          </span>
          <span
            className="pointer-events-none absolute -bottom-2 -left-1.5 font-mono text-xs font-bold text-black/30 dark:text-white/30"
            aria-hidden="true"
          >
            +
          </span>
          <span
            className="pointer-events-none absolute -bottom-2 -right-1.5 font-mono text-xs font-bold text-black/30 dark:text-white/30"
            aria-hidden="true"
          >
            +
          </span>
        </>
      )}

      {/* Mini Browser Chrome Toolbar */}
      <div className="flex shrink-0 flex-wrap items-center justify-between gap-2 border-b border-black/10 bg-black/[0.02] px-3 py-2 font-mono dark:border-white/10 dark:bg-white/[0.02] sm:px-4 sm:py-2.5">
        {/* Left: Window Controls & Telemetry */}
        <div className="flex items-center gap-2.5 sm:gap-3">
          <div className="flex items-center gap-1.5" aria-hidden="true">
            <span className="h-2 w-2 !rounded-full bg-red-500/80 dark:bg-red-500/70" />
            <span className="h-2 w-2 !rounded-full bg-amber-500/80 dark:bg-amber-500/70" />
            <span className="h-2 w-2 !rounded-full bg-emerald-500/80 dark:bg-emerald-500/70" />
          </div>

          {hasLiveUrl && mode === "live" ? (
            <div className="flex items-center gap-1.5 font-mono text-[9px] font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping !rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 !rounded-full bg-emerald-500" />
              </span>
              <span className="hidden sm:inline">LIVE EMBED</span>
              <span className="sm:hidden">LIVE</span>
            </div>
          ) : (
            <span className="font-mono text-[9px] font-bold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
              [CAPTURE]
            </span>
          )}
        </div>

        {/* Center: Address Bar Pill */}
        {hasLiveUrl ? (
          <div className="flex min-w-0 max-w-[190px] items-center gap-1.5 border border-black/10 bg-white px-2 py-0.5 text-[10px] text-zinc-700 dark:border-white/10 dark:bg-[#141414] dark:text-zinc-300 xs:max-w-[240px] sm:max-w-[320px]">
            <i className="ri-lock-2-line shrink-0 text-[11px] text-emerald-600 dark:text-emerald-400" />
            <span className="truncate font-mono">{cleanDomain}</span>
          </div>
        ) : (
          <div className="flex min-w-0 max-w-[200px] items-center gap-1.5 text-[10px] text-zinc-500 dark:text-zinc-400 truncate">
            <span className="truncate font-mono">{title}</span>
          </div>
        )}

        {/* Right: Controls (Mode Switch, Reload, External Link) */}
        <div className="flex items-center gap-1.5 sm:gap-2">
          {hasLiveUrl && fallbackImage && (
            <div className="flex items-center border border-black/15 bg-black/[0.04] p-0.5 dark:border-white/15 dark:bg-white/[0.05]">
              <button
                type="button"
                onClick={() => handleSwitchMode("live")}
                className={`px-2 py-0.5 font-mono text-[9px] font-bold uppercase tracking-wider transition-colors sm:text-[10px] ${
                  mode === "live"
                    ? "bg-black text-white dark:bg-white dark:text-black"
                    : "text-zinc-600 hover:text-black dark:text-zinc-400 dark:hover:text-white"
                }`}
                title="View live interactive website"
              >
                Live
              </button>
              <button
                type="button"
                onClick={() => handleSwitchMode("screenshot")}
                className={`px-2 py-0.5 font-mono text-[9px] font-bold uppercase tracking-wider transition-colors sm:text-[10px] ${
                  mode === "screenshot"
                    ? "bg-black text-white dark:bg-white dark:text-black"
                    : "text-zinc-600 hover:text-black dark:text-zinc-400 dark:hover:text-white"
                }`}
                title="View high-resolution capture"
              >
                Capture
              </button>
            </div>
          )}

          {hasLiveUrl && mode === "live" && (
            <button
              type="button"
              onClick={handleReload}
              title="Reload live preview"
              className="flex h-6 w-6 items-center justify-center border border-black/15 bg-white text-black transition-colors hover:bg-black hover:text-white dark:border-white/15 dark:bg-[#1a1a1a] dark:text-zinc-200 dark:hover:bg-white dark:hover:text-black"
              aria-label="Reload preview"
            >
              <i className="ri-refresh-line text-xs" />
            </button>
          )}

          {hasLiveUrl && (
            <a
              href={targetUrl}
              target="_blank"
              rel="noreferrer"
              title={`Open ${cleanDomain} in new tab`}
              className="flex h-6 w-6 items-center justify-center border border-black/15 bg-white text-black transition-colors hover:bg-black hover:text-white dark:border-white/15 dark:bg-[#1a1a1a] dark:text-zinc-200 dark:hover:bg-white dark:hover:text-black"
              aria-label="Open in new tab"
            >
              <i className="ri-external-link-line text-xs" />
            </a>
          )}
        </div>
      </div>

      {/* Frame Canvas Content Area */}
      <div
        className={`relative flex-1 min-h-0 w-full overflow-hidden bg-zinc-100 dark:bg-zinc-950 ${className}`}
      >
        {hasLiveUrl && mode === "live" ? (
          <>
            {/* Loading Indicator */}
            {isLoading && (
              <div className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-3 bg-zinc-100/90 backdrop-blur-sm dark:bg-zinc-950/90">
                <div className="h-6 w-6 animate-spin border-2 border-black/20 border-t-black dark:border-white/20 dark:border-t-white" />
                <p className="font-mono text-[10px] uppercase tracking-widest text-zinc-600 dark:text-zinc-400">
                  Fetching {cleanDomain}...
                </p>
              </div>
            )}

            {/* Error Fallback */}
            {hasError && (
              <div className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-3 bg-zinc-100 p-6 text-center dark:bg-zinc-950">
                <p className="font-mono text-xs uppercase tracking-wider text-red-600 dark:text-red-400">
                  Failed to load embedded preview
                </p>
                <div className="flex gap-3">
                  <button
                    type="button"
                    onClick={handleReload}
                    className="border border-black bg-black px-3 py-1 font-mono text-[10px] uppercase text-white dark:border-white dark:bg-white dark:text-black"
                  >
                    Retry
                  </button>
                  {fallbackImage && (
                    <button
                      type="button"
                      onClick={() => handleSwitchMode("screenshot")}
                      className="border border-black/20 bg-white px-3 py-1 font-mono text-[10px] uppercase text-black dark:border-white/20 dark:bg-black dark:text-white"
                    >
                      Show Capture
                    </button>
                  )}
                </div>
              </div>
            )}

            {/* The Live Iframe */}
            <iframe
              key={reloadKey}
              src={targetUrl}
              title={`${title} Live Site Preview`}
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
              onLoad={() => setIsLoading(false)}
              onError={() => {
                setIsLoading(false);
                setHasError(true);
              }}
              className={`h-full w-full border-0 transition-opacity duration-500 ${
                isLoading ? "opacity-0" : "opacity-100"
              } ${isInteracting ? "pointer-events-auto" : "pointer-events-none"}`}
            />

            {/* Scroll Shield & Interaction Layer */}
            {!isInteracting ? (
              <div
                onClick={() => handleInteractionToggle(true)}
                className="group/shield absolute inset-0 z-20 flex cursor-pointer items-end justify-center bg-black/[0.01] p-4 transition-colors hover:bg-black/[0.04] dark:hover:bg-white/[0.03]"
                title="Click to interact with the live website"
              >
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleInteractionToggle(true);
                  }}
                  className="flex items-center gap-2 border border-black/25 bg-white/95 px-3.5 py-1.5 font-mono text-[10px] font-bold uppercase tracking-widest text-black shadow-lg backdrop-blur transition-all group-hover/shield:scale-105 group-hover/shield:border-black dark:border-white/25 dark:bg-black/95 dark:text-white dark:group-hover/shield:border-white"
                >
                  <i className="ri-cursor-line text-xs" />
                  <span>Click to interact</span>
                </button>
              </div>
            ) : (
              <div className="pointer-events-none absolute bottom-3 right-3 z-30">
                <button
                  type="button"
                  onClick={() => handleInteractionToggle(false)}
                  className="pointer-events-auto flex items-center gap-1.5 border border-black/25 bg-white/95 px-2.5 py-1 font-mono text-[9px] font-bold uppercase tracking-widest text-black shadow-md backdrop-blur transition-colors hover:bg-black hover:text-white dark:border-white/25 dark:bg-black/95 dark:text-white dark:hover:bg-white dark:hover:text-black"
                  title="Lock scroll to resume page navigation"
                >
                  <i className="ri-lock-line text-xs" />
                  <span>Lock Scroll</span>
                </button>
              </div>
            )}
          </>
        ) : fallbackImage ? (
          <Image
            src={fallbackImage}
            alt={title}
            fill
            priority={priority}
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 90vw, 1200px"
            className="object-cover object-top transition-transform duration-700 hover:scale-[1.02]"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center font-mono text-xs uppercase tracking-widest text-zinc-400">
            Preview Unavailable
          </div>
        )}
      </div>
    </div>
  );
}
