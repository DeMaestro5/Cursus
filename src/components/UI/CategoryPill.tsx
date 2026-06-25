import { useRef, useState } from 'react';
import Rating from './Rating';
import Button from './Button';

interface CategoryPillProps {
  label: string;
  color: string;
  borderColor?: string;
  course: {
    thumbnail: string;
    title: string;
    description: string;
    price: number;
    rating: number;
  };
  className?: string;
  isLast?: boolean;
}

const CategoryPill = ({
  label,
  color,
  borderColor = '#23BDEE',
  course,
  isLast,
  className = '',
}: CategoryPillProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [openLeft, setOpenLeft] = useState(false);

  const ref = useRef(null);

  const handleHover = () => {
    const rect = ref.current?.getBoundingClientRect();

    const willOverflow = rect.right + 320 > window.innerWidth;

    setOpenLeft(willOverflow);
    setIsExpanded(true);
  };

  // Derive lighter versions of the color for the back layers
  const lightColor = `${color}50`;
  const lighterColor = `${color}25`;

  return (
    <div
      ref={ref}
      className={`relative shrink-0 cursor-pointer transition-all duration-300 ease-in-out h-64 ${isExpanded ? 'w-96' : 'w-16'} ${className}`}
      style={{
        transform: isExpanded ? 'rotate(0deg)' : 'rotate(-6deg)',
        transition: 'transform 300ms ease, width 300ms ease',
        // Extra margin to account for rotation not clipping neighbors
        margin: '0 12px',
      }}
      onMouseEnter={() => {
        handleHover();
      }}
      onMouseLeave={() => {
        setIsExpanded(false);
        setOpenLeft(false);
      }}
    >
      {/* Collapsed state — vertical pill */}
      <div
        className={`absolute inset-0 rounded-3xl transition-opacity duration-200 ${isExpanded ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
      >
        {/* Layer 3 — back, same color family, most offset */}
        <div
          className='absolute inset-0 rounded-3xl'
          style={{
            transform: 'translateX(12px) translateY(-6px)',
            backgroundColor: lighterColor,
            // border: `{8px solid ${lighterColor}}`,
          }}
        />
        {/* Layer 2 — middle, slightly more visible green */}
        <div
          className='absolute inset-0 rounded-3xl'
          style={{
            transform: 'translateX(6px) translateY(-3px)',
            // border: '6px solid ${lightColor}',
            backgroundColor: lightColor,
          }}
        />
        {/* Layer 1 — front, the actual pill with color */}
        <div
          className='absolute inset-0 rounded-3xl p-2'
          style={{ backgroundColor: '#d4f7d4' }}
        >
          <div
            className='w-full h-full rounded-2xl flex items-center justify-center overflow-hidden'
            style={{ backgroundColor: color }}
          >
            <span
              className='text-white text-sm font-semibold text-center px-1'
              style={{
                writingMode: 'vertical-rl',
                transform: 'rotate(180deg)',
                overflow: 'hidden',
                display: '-webkit-box',
                WebkitLineClamp: 3,
                WebkitBoxOrient: 'vertical',
              }}
            >
              {label}
            </span>
          </div>
        </div>
      </div>

      {/* Expanded state — course card */}
      <div
        className={`absolute inset-0 flex flex-row rounded-3xl overflow-hidden bg-white transition-opacity duration-200 ${isLast ? 'right-0' : 'left-0'} ${isExpanded ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        style={{
          border: `2px solid ${borderColor}`,
          padding: '10px',
          transform: openLeft ? 'translateX(100%)' : 'translateX(0)',
        }}
      >
        {/* LEFT — Thumbnail (square, fixed width) */}
        <div className='w-40 h-full shrink-0 overflow-hidden rounded-2xl'>
          <img
            src={course.thumbnail}
            alt={course.title}
            className='w-full h-full object-cover'
          />
        </div>

        {/* RIGHT — Content */}
        <div className='flex flex-col justify-between px-4 py-2 flex-1'>
          <div className='flex flex-col gap-2 pt-4'>
            <h3 className='text-base font-bold text-navy leading-snug'>
              {course.title}
            </h3>
            <p className='text-xs text-gray-text leading-relaxed line-clamp-3'>
              {course.description}
            </p>
          </div>
          {/* Rating + Price row */}
          <div className='flex flex-col gap-2'>
            <div className='flex items-center justify-between'>
              <Rating rating={course.rating} size='sm' />
              <span className='text-sm font-bold text-navy'>
                $ {course.price}
              </span>
            </div>
            <Button
              variant='outline'
              size='sm'
              className='w-full text-sm rounded-lg'
            >
              EXPLORE
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryPill;
