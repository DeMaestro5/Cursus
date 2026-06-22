interface FeatureItemProps {
  icon: React.ReactNode;
  iconBg?: string;
  title: string;
  description: string;
  layout?: 'vertical' | 'horizontal';
  className?: string;
}

const FeatureItem = ({
  icon,
  title,
  iconBg = 'bg-primary/10',
  description,
  layout = 'vertical',
  className = '',
}: FeatureItemProps) => {
  const isHorizontal = layout === 'horizontal';

  return (
    <div
      className={`
          flex gap-4
          ${
            isHorizontal
              ? 'flex-row items-start'
              : 'relative flex-col items-center text-center bg-white rounded-2xl shadow-[0_20px_60px_-10px_rgba(0,0,0,0.1)] pt-20 pb-8 px-6 w-72'
          }
          ${className}
        `}
    >
      {/* Icon — absolutely positioned to straddle the top edge */}
      <div
        className={`
            shrink-0 w-16 h-16 rounded-full ${iconBg}
            flex items-center justify-center text-white text-2xl
            ${
              !isHorizontal
                ? 'absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2'
                : ''
            }
          `}
      >
        {icon}
      </div>

      {/* Text */}
      <div
        className={`flex flex-col gap-2 ${isHorizontal ? '' : 'items-center'}`}
      >
        <h3
          className={`font-bold text-primary-dark ${
            isHorizontal ? 'text-sm' : 'text-base'
          }`}
        >
          {title}
        </h3>
        <p className='text-sm text-muted leading-relaxed'>{description}</p>
      </div>
    </div>
  );
};

export default FeatureItem;
