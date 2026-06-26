import { motion, useMotionValue, animate } from 'framer-motion';
import { useEffect, useRef } from 'react';

interface Slide {
  id: number;
  image: string;
  name: string;
}

interface Props {
  slides: Slide[];
  activeIndex: number;
}

// Pure function — given distance from front (0=front, 1=middle, 2=back, 3+=hidden)
// returns the visual target for that slot
function getTargetForDistance(distance: number) {
  if (distance === 0)
    return { x: 0, scale: 1, opacity: 1, rotate: 0, zIndex: 10 };
  if (distance === 1)
    return { x: 45, scale: 0.92, opacity: 0.85, rotate: -5, zIndex: 9 };
  if (distance === 2)
    return { x: 85, scale: 0.84, opacity: 0.65, rotate: -10, zIndex: 8 };
  return { x: 110, scale: 0.76, opacity: 0, rotate: -13, zIndex: 7 };
}

export default function ImageStack({ slides, activeIndex }: Props) {
  const total = slides.length;

  return (
    <div className='relative w-[350px] h-[400px]'>
      {slides.map((slide, index) => (
        <AnimatedCard
          key={slide.id}
          slide={slide}
          index={index}
          activeIndex={activeIndex}
          total={total}
        />
      ))}
    </div>
  );
}

// Each card manages its own animation independently
function AnimatedCard({
  slide,
  index,
  activeIndex,
  total,
}: {
  slide: { id: number; image: string; name: string };
  index: number;
  activeIndex: number;
  total: number;
}) {
  const distance = (index - activeIndex + total) % total;
  const target = getTargetForDistance(distance);

  const x = useMotionValue(target.x);
  const scale = useMotionValue(target.scale);
  const opacity = useMotionValue(target.opacity);
  const rotate = useMotionValue(target.rotate);

  const prevActiveIndex = useRef(activeIndex);

  useEffect(() => {
    if (prevActiveIndex.current === activeIndex) return;
    prevActiveIndex.current = activeIndex;

    const ease = [0.32, 0.72, 0, 1] as const;
    const duration = 0.55;

    animate(x, target.x, { duration, ease });
    animate(scale, target.scale, { duration, ease });
    animate(opacity, target.opacity, { duration, ease });
    animate(rotate, target.rotate, { duration, ease });
  }, [
    activeIndex,
    opacity,
    x,
    target.scale,
    target.opacity,
    target.rotate,
    target.x,
    rotate,
    scale,
  ]);

  return (
    <motion.div
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        x,
        scale,
        opacity,
        rotate,
        zIndex: target.zIndex,
        originX: 0,
        originY: 1,
      }}
    >
      <img
        src={slide.image}
        alt={slide.name}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          objectPosition: 'center 20%',
          borderRadius: 16,
          display: 'block',
        }}
      />
    </motion.div>
  );
}
