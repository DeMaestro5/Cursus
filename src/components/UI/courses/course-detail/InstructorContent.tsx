import type { PageCourse } from '../../../../constants/courses-page';
import Avatar from '../../Avatar';

export default function InstructorContent({ course }: { course: PageCourse }) {
  return (
    <div className='flex items-center gap-4 p-6 bg-sky-400/10 rounded-2xl'>
      <Avatar
        src={course.instructor.avatar}
        alt={course.instructor.name}
        size='lg'
      />
      <div>
        <h3 className='text-lg font-bold text-primary-dark'>
          {course.instructor.name}
        </h3>
        <p className='text-muted text-sm'>Instructor for {course.title}</p>
      </div>
    </div>
  );
}
