import { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import TestimonialCard from '../../../UI/TestimonialCard';
import { TESTIMONIAL_SLIDES } from '../../../../constants/testimonials';
import { motion } from 'framer-motion';

// We prepend the local smiling image as the first slide.
// The rest come from the constants file.
const ALL_SLIDES = [
  {
    id: 1,
    image: '/src/assets/landing/smiling.png',
    name: 'Gloria Rose',
    testimonial:
      "Thank you so much for your help. It's exactly what I've been looking for. You won't regret it. It really saves me time and effort. Cursus is exactly what our business has been lacking.",
    rating: 5,
    reviews: 12,
    at: 'Yelp',
  },
  ...TESTIMONIAL_SLIDES,
];

export default function Testimonial() {
  const [animating, setAnimating] = useState(false);
  const [visibleCards, setVisibleCards] = useState([
    ALL_SLIDES[0],
    ALL_SLIDES[1],
    ALL_SLIDES[2],
  ]);
  const [nextIndex, setNextIndex] = useState(3);

  const rotateImages = () => {
    setVisibleCards((prev) => [prev[1], prev[2], ALL_SLIDES[nextIndex]]);
    setNextIndex((prev) => (prev + 1) % ALL_SLIDES.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimating(true);

      setTimeout(() => {
        rotateImages();
        setAnimating(false);
      }, 600); // same as animation duration
    }, 5000);

    return () => clearInterval(interval);
  }, [nextIndex]);

  const current = visibleCards[0];
  const next = visibleCards[1];
  const third = visibleCards[2];

  const slides = [
    {
      data: current,
      role: 'current',
    },
    {
      data: next,
      role: 'next',
    },
    {
      data: third,
      role: 'third',
    },
  ];

  const idlePositions = {
    current: {
      scale: 1,
      x: 0,
      rotate: 0,
      opacity: 1,
      zIndex: 3,
    },

    next: {
      scale: 0.94,
      x: 30,
      rotate: -3,
      opacity: 0.8,
      zIndex: 2,
    },

    third: {
      scale: 0.88,
      x: 60,
      rotate: -6,
      opacity: 0.6,
      zIndex: 1,
    },
  };

  const movingPositions = {
    current: {
      x: -120,
      rotate: 8,
      opacity: 0,
      scale: 0.9,
      zIndex: 0,
    },

    next: {
      x: 0,
      rotate: 0,
      opacity: 1,
      scale: 1,
      zIndex: 3,
    },

    third: {
      x: 30,
      rotate: -3,
      opacity: 0.8,
      scale: 0.94,
      zIndex: 2,
    },
  };

  return (
    <section className='py-20 px-16 flex items-start justify-center gap-40'>
      {/* LEFT — static */}
      <div className='flex flex-2 flex-col gap-6'>
        <div className='flex gap-4'>
          <div className='w-8 h-[1px] bg-muted self-center' />
          <span className='text-primary-dark font-semibold text-sm tracking-[5px]'>
            TESTIMONIAL
          </span>
        </div>
        <h3 className='text-primary-dark text-4xl font-semibold'>
          What They Say?
        </h3>
        <p className='text-sm text-gray-text leading-relaxed'>
          Cursus has got more than 100k positive ratings from our users around
          the world.
        </p>
        <p className='text-sm text-gray-text leading-relaxed'>
          Some of the students and teachers were greatly helped by the Skilline.
        </p>
        <p className='text-sm text-gray-text leading-relaxed'>
          Are you too? Please give your assessment
        </p>
        <div className='flex items-center border border-primary rounded-full cursor-pointer hover:bg-primary/5 transition-colors w-fit'>
          <span className='text-primary font-medium px-6 py-3'>
            Write your assessment
          </span>
          <div className='w-12 h-12 rounded-full border border-primary flex items-center justify-center shrink-0 -mr-[1px] -my-[1px]'>
            <ArrowRight className='w-4 h-4 text-primary' />
          </div>
        </div>
      </div>

      {/* RIGHT — animated */}
      <div className='relative w-[400px] h-[500px] flex-shrink-0'>
        {/* <AnimatePresence mode='wait'> */}
        <motion.div className='w-full h-full'>
          {slides.map(({ data, role }) => (
            <motion.img
              key={data.id}
              src={data.image}
              alt={data.name}
              className='absolute inset-0 w-full h-full object-cover rounded-2xl pointer-events-none'
              style={{
                objectPosition: 'center 20%',
              }}
              initial={{
                opacity: 0,
                x: 100,
                scale: 0.95,
              }}
              animate={animating ? movingPositions[role] : idlePositions[role]}
              exit={{
                opacity: 0,
                x: -100,
                scale: 0.95,
              }}
              transition={{
                duration: 0.6,
                ease: 'easeInOut',
              }}
            />
          ))}

          {/* TestimonialCard fades with the image */}

          <motion.div
            className='absolute bottom-0 right-0 translate-y-1/4 z-10'
            initial={{
              opacity: 0,
              y: 30,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: 30,
            }}
            transition={{
              duration: 0.5,
            }}
          >
            {current && (
              <TestimonialCard
                className='w-96 z-10'
                name={current.name}
                reviews={current.reviews}
                rating={current.rating}
                at={current.at}
                testimonial={current.testimonial}
              />
            )}
          </motion.div>
          {/* Arrow */}
          <button
            onClick={rotateImages}
            className='absolute right-0 top-1/2 -translate-y-1/2 cursor-pointer translate-x-1/2 w-12 h-12 text-primary rounded-full bg-white flex items-center justify-center shadow-lg hover:bg-gray-50 transition-colors z-20'
          >
            <ArrowRight className='w-5 h-5' />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
