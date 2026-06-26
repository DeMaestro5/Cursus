import { useCallback, useEffect, useState } from 'react';

export function useCarousel(length: number, interval = 4000) {
  const [activeIndex, setActiveIndex] = useState(0);

  const next = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % length);
  }, [length]);

  useEffect(() => {
    const timer = setInterval(next, interval);
    return () => clearInterval(timer);
  }, [next, interval]);

  return { activeIndex, next };
}
