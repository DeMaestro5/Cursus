interface ProgressBarProps {
  value: number;
  total: number;
}

export default function ProgressBar({ value, total }: ProgressBarProps) {
  return (
    <div className='w-full h-2 bg-gray-400 rounded-lg'>
      <div
        className='h-full rounded-full'
        style={{
          width: `${(value / total) * 100}%`,
          backgroundColor: '#49bbbd',
        }}
      />
    </div>
  );
}
