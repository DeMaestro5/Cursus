import Badge from './Badge';

interface NewsCardProps {
  thumbnail: string;
  category: 'NEWS' | 'PRESS RELEASE';
  title: string;
  description: string;
  variant?: 'featured' | 'compact';
  showReadMore?: boolean;
  className?: string;
}

const NewsCard = ({
  thumbnail,
  category,
  title,
  description,
  variant = 'compact',
  showReadMore = false,
  className = '',
}: NewsCardProps) => {
  if (variant === 'featured') {
    return (
      <div className={`flex flex-col ${className}`}>
        <div className='w-full h-52 overflow-hidden rounded-xl'>
          <img
            src={thumbnail}
            alt={title}
            className='w-full h-full object-cover'
          />
        </div>
        <div className='pt-3'>
          <Badge variant='primary'>{category}</Badge>
        </div>

        {/* Content */}
        <div className='flex flex-col gap-3 pt-4'>
          <h3 className='text-base font-bold text-navy leading-slug line-clamp-2 hover:underline cursor-pointer'>
            {title}
          </h3>
          <p className='text-sm text-muted leading-relaxed line-clamp-3'>
            {description}
          </p>
          {showReadMore && (
            <button className='text-sm text-muted cursor-pointer underline text-left w-fit'>
              Read more
            </button>
          )}
        </div>
      </div>
    );
  }
  return (
    <div className={` flex flex-row gap-4 ${className} `}>
      {/* LEFT — thumbnail with badge overlay */}
      <div className='relative w-32 h-24 shrink-0 overflow-hidden rounded-xl'>
        <img
          src={thumbnail}
          alt={title}
          className='w-full h-full object-cover'
        />
        <div className='absolute bottom-2 right-2'>
          <Badge variant='primary' className='text-[10px]'>
            {category}
          </Badge>
        </div>
      </div>
      {/* RIGHT — content */}
      <div className='flex flex-col gap-2 flex-1'>
        <h3 className='text-sm font-bold text-navy leading-snug line-clamp-2 hover:underline cursor-pointer'>
          {title}
        </h3>
        <p className='text-xs text-muted leading-relaxed line-clamp-2'>
          {description}
        </p>
      </div>
    </div>
  );
};

export default NewsCard;
