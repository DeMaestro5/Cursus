import type { PageCourse } from '../../../../constants/courses-page';

export default function OverviewContent({ course }: { course: PageCourse }) {
  return (
    <div className='flex flex-col gap-4 p-6 bg-sky-400/10 rounded-2xl'>
      <h3 className='text-xl font-bold text-primary-dark'>{course.title}</h3>
      <p className='text-muted text-sm leading-relaxed'>{course.description}</p>
      <div className='flex gap-6 text-sm text-muted'>
        <span>Category: {course.category}</span>
        <span>Duration: {course.duration}</span>
      </div>
    </div>
  );
}
