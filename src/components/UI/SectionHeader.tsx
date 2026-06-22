interface SectionHeaderProps {
  title: string;
  highlightedWord?: string;
  subtitle?: string;
  align?: 'left' | 'center';
  className?: string;
}

const SectionHeader = ({
  title,
  highlightedWord,
  subtitle,
  align = 'center',
  className = '',
}: SectionHeaderProps) => {
  // if no highlighted word, just return the title as it is
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

  const hasCustomTextColor = className.includes('text-bla');

  return (
    <div
      className={`${
        align === 'center' ? 'text-center' : 'text-left'
      } ${className}`}
    >
      <h2
        className={`text-3xl font-bold ${
          !hasCustomTextColor ? 'text-primary-dark' : ''
        } leading-tight`}
      >
        {renderTitle()}
      </h2>
      {subtitle && (
        <p
          className={`mt-3 text-gray-text text-sm leading-relaxed max-w-xl
          ${align === 'center' ? 'mx-auto' : ''}`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;
