import { COURSES_IN_PROGRESS } from '../../../constants/courses-page';
import CourseSectionCard from '../../UI/courses/CourseSectionCard';
import NavigationButtons from '../../UI/NavigationButtons';

export default function WelcomeBack({ user }) {
  return (
    <section className='py-10 px-16 w-full'>
      <div className='flex flex-col gap-4'>
        <div className='flex justify-between items-center '>
          <h3 className='font-semibold text-2xl '>
            Welcome back, ready for your lesson?
          </h3>
          <p className='text-primary text-sm font-semibold hover:underline cursor-pointer'>
            View history
          </p>
        </div>
        <div className='flex gap-4 justify-between items-center'>
          {COURSES_IN_PROGRESS.map((course) => (
            <CourseSectionCard
              thumbnail={course.thumbnail}
              title={course.title}
              value={course.currentLesson}
              total={course.totalLesson}
              user={user}
              key={course.id}
            />
          ))}
        </div>
        <div className='ml-auto'>
          <NavigationButtons />
        </div>
      </div>
    </section>
  );
}
