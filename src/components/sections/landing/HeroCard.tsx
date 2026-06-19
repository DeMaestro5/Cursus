import Avatar from '../../UI/Avatar';
import Button from '../../UI/Button';

interface HeroCardProps {
  icon?: React.ReactNode;
  heading?: string;
  text?: string;
  avatar?: string;
  button?: string;
  className?: string;
}

const HeroCard = ({
  icon,
  heading,
  text,
  avatar,
  button,
  className = '',
}: HeroCardProps) => {
  return (
    <div
      className={`bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg p-4 flex flex-col gap-3 ${className}`}
    >
      {/* Top row — icon + text OR avatar + text */}
      <div className=' flex items-center gap-3'>
        {icon && (
          <div className='w-10 h-10 rounded-xl bg-primary/10 text-primary flex justify-center items-center shrink-0'>
            {icon}
          </div>
        )}
        {/* Avatar — renders if passed */}
        {avatar && (
          <div className='relative shrink-0'>
            <Avatar
              src={avatar}
              alt={heading || 'user'}
              initials='U'
              size='md'
            />
            {/* Online indicator dot */}
            <div className='absolute bottom-1 right-0 top-8 w-4 h-4 bg-secondary rounded-full border border-white ' />
          </div>
        )}

        {/* Text content */}
        {(heading || text) && (
          <div className='flex flex-col gap-0.5'>
            {heading && (
              <span className='text-sm font-bold text-navy leading-tight'>
                {heading}
              </span>
            )}

            {text && (
              <span className='text-xs text-gray-text leading-snug '>
                {text}
              </span>
            )}
          </div>
        )}
      </div>

      {/* Button — renders if passed */}
      {button && (
        <Button
          variant='accent'
          size='sm'
          className='w-full bg-accent text-white border-none hover:bg-accent/90'
        >
          {button}
        </Button>
      )}
    </div>
  );
};

export default HeroCard;
