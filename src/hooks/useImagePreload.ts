import { useEffect, useRef, useState } from 'react';

// Global preload cache — images loaded once are never re-fetched in the same session
const preloadCache = new Map<string, boolean>();
const pendingLoads = new Map<string, Promise<void>>();

export function preloadImage(src: string): Promise<void> {
  if (preloadCache.get(src)) return Promise.resolve();
  if (pendingLoads.has(src)) return pendingLoads.get(src)!;

  const promise = new Promise<void>((resolve) => {
    const img = new Image();
    img.onload = () => {
      preloadCache.set(src, true);
      pendingLoads.delete(src);
      resolve();
    };
    img.onerror = () => {
      preloadCache.set(src, true); // mark done even on error so UI doesn't hang
      pendingLoads.delete(src);
      resolve();
    };
    img.src = src;
  });

  pendingLoads.set(src, promise);
  return promise;
}

/**
 * Preloads a list of images in parallel — call this for an entire page's assets at once
 */
export function preloadImages(srcs: string[]): void {
  srcs.forEach(src => preloadImage(src));
}

/**
 * Hook: returns true when the image is ready.
 *
 * Priority order:
 * 1. Already in cache → ready immediately (zero cost)
 * 2. Currently being preloaded by the manifest → attaches to the existing Promise
 * 3. Neither → falls back to IntersectionObserver with a wide rootMargin
 *
 * This eliminates the race condition where a manifest-preloaded image
 * hasn't finished when the component mounts, causing a double-load.
 */
export function useLazyImage(src: string, rootMargin = '500px') {
  const [ready, setReady] = useState(() => preloadCache.get(src) ?? false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ready) return;

    // Case 2: Image is already being preloaded — just subscribe to the existing promise
    if (pendingLoads.has(src)) {
      let cancelled = false;
      pendingLoads.get(src)!.then(() => {
        if (!cancelled) setReady(true);
      });
      return () => { cancelled = true; };
    }

    // Case 3: Not in cache, not preloading — use IntersectionObserver
    const triggerLoad = () => {
      preloadImage(src).then(() => setReady(true));
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          observer.disconnect();
          triggerLoad();
        }
      },
      { rootMargin }
    );

    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, [src, ready, rootMargin]);

  return { ready, containerRef };
}
