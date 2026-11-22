"use client";

import { useCallback, useMemo, useState } from "react";

export interface MiniBrowserIframeProps {
  url?: string;
  title: string;
  embeddable?: boolean;
  className?: string;
  containerClassName?: string;
  liveLoading?: "lazy" | "eager" | "deferred";
  onLiveReadyChange?: (isReady: boolean) => void;
  onInteractionChange?: (isInteracting: boolean) => void;
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
  embeddable = true,
  className = "",
  containerClassName = "",
  liveLoading = "lazy",
  onLiveReadyChange,
  onInteractionChange,
  showCrosshairs = true,
}: MiniBrowserIframeProps) {
  const targetUrl = useMemo(() => normalizeUrl(url), [url]);
  const hasLiveUrl = Boolean(targetUrl);
  const canEmbed = hasLiveUrl && embeddable;
  const cleanDomain = useMemo(() => extractDomain(targetUrl), [targetUrl]);

  const [isLoading, setIsLoading] = useState<boolean>(Boolean(canEmbed));
  const [isInteracting, setIsInteracting] = useState<boolean>(false);
  const [reloadKey, setReloadKey] = useState<number>(0);
  const [hasError, setHasError] = useState<boolean>(false);

  // Reset the preview when the target url changes.
  // Adjusting during render rather than in an effect keeps React from doing
  // an extra cascading render pass.
  const [lastTargetUrl, setLastTargetUrl] = useState(targetUrl);
  if (targetUrl !== lastTargetUrl) {
    setLastTargetUrl(targetUrl);
    if (canEmbed) {
      setIsLoading(true);
      setHasError(false);
    }
  }

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
    onLiveReadyChange?.(false);
  }, [onLiveReadyChange]);

  const isWaitingForLive = isLoading || liveLoading === "deferred";

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
        {/* Left: Address Bar */}
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

        {/* Right: Controls (Reload, External Link) */}
        <div className="ml-auto flex items-center gap-1.5 sm:gap-2">
          {hasLiveUrl && !canEmbed && (
            <span className="font-mono text-[9px] font-bold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
              EXTERNAL SITE
            </span>
          )}

          {canEmbed && (
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
        {hasLiveUrl && !canEmbed ? (
          <div className="flex h-full flex-col items-center justify-center gap-3 p-4 text-center">
            <p className="font-body text-sm text-zinc-600 dark:text-zinc-300">
              {title} does not allow embedded previews.
            </p>
            <a
              href={targetUrl}
              target="_blank"
              rel="noreferrer"
              className="border border-black bg-black px-3 py-2 font-mono text-xs uppercase text-white dark:border-white dark:bg-white dark:text-black"
            >
              Open live site <span aria-hidden="true">↗</span>
            </a>
          </div>
        ) : canEmbed ? (
          <>
            {/* Loading Indicator */}
            {isLoading && liveLoading !== "deferred" && (
              <div className="pointer-events-none absolute inset-0 z-10 flex items-end justify-center p-4">
                <p role="status" className="flex items-center gap-2 border border-black/15 bg-white px-3 py-1.5 font-mono text-[10px] uppercase tracking-widest text-zinc-600 dark:border-white/15 dark:bg-black dark:text-zinc-400">
                  <span aria-hidden="true" className="h-3 w-3 animate-spin border-2 border-current border-t-transparent" />
                  Loading live preview…
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
                </div>
              </div>
            )}

            {/* The Live Iframe */}
            {liveLoading !== "deferred" && (
              <iframe
                key={reloadKey}
                src={targetUrl}
                title={`${title} Live Site Preview`}
                loading={liveLoading}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
                tabIndex={isInteracting && !isWaitingForLive ? 0 : -1}
                onLoad={() => {
                  setIsLoading(false);
                  setHasError(false);
                  onLiveReadyChange?.(true);
                }}
                onError={() => {
                  setIsLoading(false);
                  setHasError(true);
                  onLiveReadyChange?.(false);
                }}
                className={`h-full w-full border-0 ${
                  isLoading ? "opacity-0" : "opacity-100"
                } ${isInteracting ? "pointer-events-auto" : "pointer-events-none"}`}
              />
            )}

            {/* Scroll Shield & Interaction Layer */}
            {!isWaitingForLive && !hasError && (!isInteracting ? (
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
            ))}
          </>
        ) : (
          <div className="flex h-full w-full items-center justify-center font-mono text-xs uppercase tracking-widest text-zinc-400">
            Preview Unavailable
          </div>
        )}
      </div>
    </div>
  );
}
