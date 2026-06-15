interface StatCardProps {
  value: string;
  label: string;
  className?: string;
}

const StatCard = ({ value, label, className = '' }: StatCardProps) => {
  return (
    <div className={`flex flex-col gap-1 ${className}`}>
      <span className='text-4xl text-primary'>{value}</span>
      <p className='text-sm text-gray-text'>{label}</p>
    </div>
  );
};

export default StatCard;
