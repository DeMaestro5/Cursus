import { Clock } from 'lucide-react';
import Avatar from '../../Avatar';
import Rating from '../../Rating';

export default function ReviewCard({ user, rating, createdAt, review }) {
  return (
    <div>
      <div className='flex items-center gap-6'>
        <div className='flex gap-2'>
          <Avatar src={user.avatar} alt={user.name} size='md' />
          <div className='flex flex-col justify-center'>
            <p className='text-sm font-semibold'>{user.name}</p>
            <Rating rating={rating} size='md' />
          </div>
        </div>
        <div className='flex gap-2 ml-auto mt-auto items-center'>
          <Clock className='w-5 h-5 text-gray-300' />
          <p className='text-xs text-muted'>{createdAt}</p>
        </div>
      </div>
      <div className='w-full'>
        <p className='text-muted text-sm tracking-wide leading-loose'>
          {review}
        </p>
      </div>
      <div className='w-full h-[1px] bg-muted self-center' />
    </div>
  );
}
