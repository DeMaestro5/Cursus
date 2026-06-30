import type { PageCourse } from '../../../../constants/courses-page';

export default function CurriculumContent({ course }: { course: PageCourse }) {
  return (
    <div className='flex flex-col gap-4 p-6 bg-sky-400/10 rounded-2xl'>
      <h3 className='text-xl font-bold text-primary-dark'>Course Curriculum</h3>
      <p className='text-muted text-sm'>
        {course.title} is structured across {course.duration} of guided
        learning, covering core concepts through hands-on modules and projects.
      </p>
    </div>
  );
}
