import { useState, useEffect } from 'react';

export function useImagePreloader(images: string[]) {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    let completed = 0;
    images.forEach((src) => {
      const img = new Image();
      img.onload = () => {
        completed += 1;
        if (completed === images.length) setLoaded(true);
      };
      img.onerror = () => {
        completed += 1;
        if (completed === images.length) setLoaded(true);
      };
      img.src = src;
    });
  }, []);

  return loaded;
}
