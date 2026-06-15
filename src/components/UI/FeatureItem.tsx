interface FeatureItemProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  layout?: 'vertical' | 'horizontal';
  className?: string;
}

const FeatureItem = ({
  icon,
  title,
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
              : 'relative flex-col items-center text-center bg-white rounded-2xl shadow-md pt-20 pb-8 px-6 w-72'
          }
          ${className}
        `}
    >
      {/* Icon — absolutely positioned to straddle the top edge */}
      <div
        className={`
            shrink-0 w-16 h-16 rounded-full bg-primary/10
            flex items-center justify-center text-primary text-2xl
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
          className={`font-bold text-primary-dark ${isHorizontal ? 'text-sm' : 'text-base'}`}
        >
          {title}
        </h3>
        <p className='text-sm text-gray-text leading-relaxed'>{description}</p>
      </div>
    </div>
  );
};

export default FeatureItem;
