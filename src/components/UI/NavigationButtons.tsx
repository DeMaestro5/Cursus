import { ArrowLeft, ArrowRight } from 'lucide-react';
interface NavigationButtonProps {
  onPrev?: () => void;
  onNext?: () => void;
}

export default function NavigationButtons({
  onPrev,
  onNext,
}: NavigationButtonProps) {
  return (
    <div className='flex justify-between items-center gap-2'>
      <button className='bg-primary/50 rounded-md p-4 cursor-pointer'>
        <ArrowLeft
          className='text-white text-sm w-4 h-4'
          onClick={() => onPrev()}
        />
      </button>
      <button
        className='bg-primary rounded-md p-4 cursor-pointer'
        onClick={() => onNext()}
      >
        <ArrowRight className='text-white text-sm w-4 h-4' />
      </button>
    </div>
  );
}
