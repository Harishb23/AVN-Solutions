import { useEffect, useState } from 'react';

interface UseParallaxOptions {
  speed?: number; // Rate of vertical shift relative to scroll
  maxOffset?: number; // Max px shift
}

export function useParallax({ speed = 0.08, maxOffset = 35 }: UseParallaxOptions = {}): number {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    // Disable on reduced-motion or smaller screens
    if (
      window.matchMedia('(prefers-reduced-motion: reduce)').matches ||
      window.innerWidth < 1024
    ) {
      return;
    }

    let animationFrameId: number;

    const handleScroll = () => {
      cancelAnimationFrame(animationFrameId);
      animationFrameId = requestAnimationFrame(() => {
        const scrollY = window.scrollY || window.pageYOffset;
        const calculatedOffset = Math.min(scrollY * speed, maxOffset);
        setOffset(calculatedOffset);
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      cancelAnimationFrame(animationFrameId);
    };
  }, [speed, maxOffset]);

  return offset;
}
