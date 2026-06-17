import Rating from './Rating';

interface TestimonialCardProps {
  testimonial: string;
  name: string;
  reviews: number;
  rating: number;
  at: string;
  className?: string;
}

const TestimonialCard = ({
  testimonial,
  name,
  reviews,
  rating,
  at,
  className = '',
}: TestimonialCardProps) => {
  return (
    <div
      className={`bg-white rounded-2xl shadow-lg flex flex-col gap-4 p-6 border-l-[6px] border-accent ${className}`}
    >
      <div className='flex flex-row gap-3'>
        <div className='w-[1px] bg-navy/10 rounded-full shrink-0' />
        {/* Quote text — component wraps it in quotes */}
        <p className='text-sm text-gray-text leading-relaxed'>
          "{testimonial}"
        </p>
      </div>
      {/* Reviewer info — name + rating side by side, reviews below */}
      <div className='flex items-center justify-between'>
        <span className='text-sm font-bold text-navy'>{name}</span>
        <div className='flex flex-col items-end gap-0.5'>
          <Rating rating={rating} size='sm' />
          <span className='text-[10px] text-gray-text'>
            {reviews} reviews at {at}
          </span>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
