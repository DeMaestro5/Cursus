import { ArrowRight } from 'lucide-react';
import TestimonialCard from '../../../UI/TestimonialCard';

export default function Testimonial() {
  return (
    <section className='py-20 px-16 flex items-start justify-center gap-24'>
      <div className='flex flex-2 flex-col gap-6'>
        <div className='flex gap-4'>
          <div className='w-8 h-[1px] bg-muted self-center' />
          <span className='text-primary-dark font-bold text-sm tracking-[5px]'>
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
      <div className='relative flex-3'>
        <img
          src='/src/assets/landing/smiling.png'
          alt='image'
          className='w-[400px] h-[500px] object-cover rounded-2xl shadow-lg '
          style={{ objectPosition: 'center 20%' }}
        />
        <TestimonialCard
          className='absolute bottom-0 right-5 translate-y-1/4 w-96'
          name='Stephen'
          reviews={12}
          rating={5}
          at='Novba'
          testimonial="Thank you so much for your help. It's exactly what I've been looking for. You won't regret it. It really saves me time and effort. TOTC is exactly what our business has been lacking."
        />
        <button className='absolute right-37 top-1/2 -translate-y-1/2 translate-x-1/2 w-12 h-12 text-primary rounded-full bg-white flex items-center justify-center shadow-lg'>
          <ArrowRight className='w-5 h-5' />
        </button>
      </div>
    </section>
  );
}
