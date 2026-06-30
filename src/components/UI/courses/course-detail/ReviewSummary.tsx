import Rating from '../../Rating';
import ProgressBar from '../ProgressBar';

export default function ReviewSummary() {
  return (
    <div className='flex items-center gap-6'>
      <div className='w-80 h-40 bg-white rounded-2xl mb-8 ml-4 flex flex-col items-center justify-center gap-4'>
        <h3 className='text-muted font-semibold text-xl'>4 out of 5</h3>
        <Rating rating={5} />
        <p className='text-muted'>Top Ratings</p>
      </div>
      <div className='w-full h-60 flex flex-col gap-3 p-4 '>
        <div className='flex gap-4 w-full items-center'>
          <p className='w-20 text-muted'>5 Stars</p>
          <ProgressBar value={80} total={100} />
        </div>
        <div className='flex gap-4 w-full items-center'>
          <p className='w-20 text-muted'>4 Stars</p>
          <ProgressBar value={60} total={100} />
        </div>
        <div className='flex gap-4 w-full items-center'>
          <p className='w-20 text-muted'>3 Stars</p>
          <ProgressBar value={40} total={100} />
        </div>
        <div className='flex gap-4 w-full items-center'>
          <p className='w-20 text-muted'>2 Stars</p>
          <ProgressBar value={20} total={100} />
        </div>
        <div className='flex gap-4 w-full items-center'>
          <p className='w-20 text-muted'>1 Stars</p>
          <ProgressBar value={10} total={100} />
        </div>
      </div>
    </div>
  );
}
