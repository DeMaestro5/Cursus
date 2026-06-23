interface BulletPoints {
  icon: React.ReactNode;
  text: string;
}

interface FeatureRowProps {
  srcImage?: string;
  imageAlt?: string;
  title: string;
  bulletPoints?: BulletPoints[];
  highlightedWord?: string;
  imagePosition?: 'left' | 'right';
  description?: string;
  decorations?: React.ReactNode;
  textIcon?: React.ReactNode;
  className?: string;
}

export default function FeatureRow({
  srcImage,
  title,
  highlightedWord,
  imagePosition,
  bulletPoints,
  decorations,
  textIcon,
  description,
  className,
}: FeatureRowProps) {
  const renderTitle = () => {
    if (!highlightedWord) {
      return <span>{title}</span>;
    }
    // find where the highlight word starts in the title
    const parts = title.split(highlightedWord);
    return (
      <>
        {parts[0]}
        <span className='text-primary'>{highlightedWord}</span>
        {parts[1]}
      </>
    );
  };

  return (
    <div
      className={`flex gap-16 justify-center items-center ${imagePosition === 'right' ? 'flex-row-reverse' : ''} ${className}`}
    >
      <div className='relative flex-3 h-[400px] '>
        <img
          src={srcImage}
          alt='image'
          className='relative z-10 w-full max-h-full rounded-2xl object-contain '
        />
        {decorations}
      </div>
      <div className='flex flex-col flex-end leading-wide gap-5 flex-2'>
        <h3 className={'text-2xl font-bold text-primary-dark leading-tight'}>
          {renderTitle()}
        </h3>
        {bulletPoints &&
          bulletPoints.map((bullet, index) => (
            <div key={index} className='flex items-start gap-4'>
              <div className='flex justify-center items-center gap-4'>
                <div className='bg-gray-100 w-12 h-12 shrink-0 rounded-full flex justify-center items-center shadow-[0_20px_60px_-10px_rgba(0,0,0,0.1)]'>
                  {bullet.icon}
                </div>{' '}
                <p className='text-muted text-sm'>{bullet.text}</p>
              </div>
            </div>
          ))}
        <div className='relative '>
          <p className='text-muted text-sm flex-2'>{description}</p>
          {textIcon}
        </div>
      </div>
    </div>
  );
}
