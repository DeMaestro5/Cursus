import { Clock, LayoutGrid } from 'lucide-react';
import type { User } from '../../../types/user.types';
import Avatar from '../Avatar';

interface CourseCardProps {
  thumbnail: string;
  title: string;
  description: string;
  category: string;
  duration: string;
  user?: User;
  price: number;
  originalPrice: number;
  className?: string;
}

export default function CourseCard({
  thumbnail,
  title,
  description,
  category,
  duration,
  user,
  price,
  originalPrice,
  className = '',
}: CourseCardProps) {
  return (
    <div className={`w-[360px] h-[550px] shadow-lg rounded-2xl ${className}`}>
      <div className='p-4'>
        <img
          src={thumbnail}
          alt={title}
          className='w-full h-60 rounded-2xl object-cover'
        />
        <div className='flex justify-between items-center py-6'>
          <div className='flex items-center justify-center gap-2 text-muted text-sm'>
            <LayoutGrid />
            {category}
          </div>
          <div className='flex items-center justify-center gap-2 text-muted text-sm'>
            {' '}
            <Clock /> {duration}
          </div>
        </div>
        <h3 className='text-2xl pb-4'>{title}</h3>
        <p className='pb-4 text-sm text-muted tracking-wider leading-relaxed'>
          {description}
        </p>
        <div className='flex justify-between items-center'>
          {' '}
          <div className='flex justify-center items-center gap-2'>
            <Avatar src={user.avatar} alt={user.name} />
            <p>{user.name}</p>
          </div>
          <div className='flex justify-center items-center gap-3'>
            <span className='line-through text-gray-400 italic'>
              ${originalPrice}
            </span>
            <span className='text-primary font-bold'>${price}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
