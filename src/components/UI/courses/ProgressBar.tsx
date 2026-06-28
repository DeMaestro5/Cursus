interface ProgressBarProps {
  currentLesson: number;
  totalLesson: number;
}

export default function ProgressBar({
  currentLesson,
  totalLesson,
}: ProgressBarProps) {
  return (
    <div className='w-full h-2 bg-gray-text rounded-2xl'>
      <div
        className='h-full rounded-full'
        style={{
          width: `${(currentLesson / totalLesson) * 100}%`,
          backgroundColor: '#49bbbd',
        }}
      />
    </div>
  );
}
