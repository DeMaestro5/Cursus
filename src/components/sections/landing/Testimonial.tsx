import { ArrowRight } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import { useCarousel } from '../../../hooks/useCarousel';
import { TESTIMONIAL_SLIDES } from '../../../constants/testimonials';
import ImageStack from './ImageStack';
import TestimonialCard from '../../UI/TestimonialCard';
import { useImagePreloader } from '../../../hooks/useImagePreloader';

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
  const { activeIndex, next } = useCarousel(ALL_SLIDES.length, 4000);
  const current = ALL_SLIDES[activeIndex];
  const allImages = ALL_SLIDES.map((s) => s.image);
  const imagesLoaded = useImagePreloader(allImages);

  if (!imagesLoaded) return null; // or a skeleton

  return (
    <section className='py-20 px-16 flex items-start justify-center gap-40'>
      {/* LEFT — static text */}
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
        <p className='text-sm text-muted leading-relaxed'>
          Cursus has got more than 100k positive ratings from our users around
          the world.
        </p>
        <p className='text-sm text-muted leading-relaxed'>
          Some of the students and teachers were greatly helped by the Skilline.
        </p>
        <p className='text-sm text-muted leading-relaxed'>
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

      {/* RIGHT — animated stack */}
      <div className='relative w-[400px] h-[500px] shrink-0'>
        <ImageStack slides={ALL_SLIDES} activeIndex={activeIndex} />

        {/* TestimonialCard — text crossfades independently */}
        <div className='absolute bottom-0 right-0 translate-y-1/4 z-10'>
          <AnimatePresence mode='wait'>
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.35 }}
            >
              <TestimonialCard
                className='w-96'
                name={current.name}
                reviews={current.reviews}
                rating={current.rating}
                at={current.at}
                testimonial={current.testimonial}
              />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Next arrow */}
        <button
          onClick={next}
          className='absolute right-8 top-1/2 -translate-y-1/2 translate-x-1/2 cursor-pointer w-12 h-12 text-primary rounded-full bg-white/10 flex items-center justify-center shadow-lg hover:bg-gray-50 transition-colors z-20'
        >
          <ArrowRight className='w-5 h-5' />
        </button>
      </div>
    </section>
  );
}
