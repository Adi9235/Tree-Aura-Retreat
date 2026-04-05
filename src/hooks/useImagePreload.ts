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
      preloadCache.set(src, true); // mark as done even on error
      pendingLoads.delete(src);
      resolve();
    };
    img.src = src;
  });

  pendingLoads.set(src, promise);
  return promise;
}

/**
 * Preloads a list of images in parallel — useful for preloading a whole page's images at once
 */
export function preloadImages(srcs: string[]): void {
  srcs.forEach(src => preloadImage(src));
}

/**
 * Hook: returns true when the image at `src` is loaded (from cache or fresh).
 * Uses IntersectionObserver to defer loading until near viewport.
 * Once loaded, the result is cached globally — the image won't reload on re-render or re-mount.
 */
export function useLazyImage(src: string, rootMargin = '400px') {
  const [ready, setReady] = useState(() => preloadCache.get(src) ?? false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ready) return; // already cached

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
