import type { User } from '../../../types/user.types';
import Avatar from '../Avatar';
import ProgressBar from './ProgressBar';

interface CourseSectionCardProps {
  thumbnail?: string;
  title?: string;
  user?: User;
  currentLesson: number;
  totalLesson: number;
  className?: string;
}

export default function CourseSectionCard({
  thumbnail,
  currentLesson,
  totalLesson,
  title,
  user,
  className = '',
}: CourseSectionCardProps) {
  return (
    <div className={`w-[450px] h-[350px] shadow-lg rounded-2xl ${className}`}>
      <div className='p-4 flex flex-col gap-3'>
        <img
          src={thumbnail}
          alt={user.name}
          className='w-full h-45 object-cover rounded-2xl'
        />
        <h3 className='font-semibold'>{title}</h3>
        <div className='flex flex-col gap-6'>
          <div className='flex gap-2 items-center'>
            <Avatar src='/src/assets/landing/whatIsImage.jpg' alt='' />
            {user.name}
          </div>
          <ProgressBar
            currentLesson={currentLesson}
            totalLesson={totalLesson}
          />
        </div>
        <p className='text-xs text-muted ml-auto'>{`Lesson ${currentLesson} of ${totalLesson}`}</p>
      </div>
    </div>
  );
}
