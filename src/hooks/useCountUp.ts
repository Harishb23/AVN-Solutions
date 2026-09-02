import { useEffect, useState } from 'react';

// Ease out cubic: starts briskly, decelerates smoothly into the final number
function easeOutCubic(t: number): number {
  return 1 - Math.pow(1 - t, 3);
}

interface UseCountUpOptions {
  end: number;
  duration?: number;
  start?: boolean;
}

export function useCountUp({ end, duration = 1400, start = true }: UseCountUpOptions): number {
  const [count, setCount] = useState(() =>
    typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches ? end : 0
  );

  useEffect(() => {
    if (!start) return;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    let startTime: number | null = null;
    let animationFrameId: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const easedProgress = easeOutCubic(progress);
      
      setCount(Math.floor(easedProgress * end));

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [end, duration, start]);

  return count;
}
