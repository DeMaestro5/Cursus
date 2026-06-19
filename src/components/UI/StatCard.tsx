interface StatCardProps {
  value: string;
  label: string;
  className?: string;
  valueClassName?: string;
}

const StatCard = ({
  value,
  label,
  valueClassName,
  className = '',
}: StatCardProps) => {
  return (
    <div
      className={`flex flex-col gap-1 justify-center items-center ${className}`}
    >
      <span
        className={`text-6xl font-normal text-stat-gradient ${
          valueClassName || ''
        } `}
      >
        {value}
      </span>
      <p className='text-sm font-normal text-gray-text'>{label}</p>
    </div>
  );
};

export default StatCard;
