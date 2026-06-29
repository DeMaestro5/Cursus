import { STUDENTS_VIEWING_COURSES } from '../../../constants/courses-page';
import CourseCard from '../../UI/courses/CourseCard';
import NavigationButtons from '../../UI/NavigationButtons';

export default function StudentViewing({ user }) {
  return (
    <section className='px-16 py-16'>
      <div className='flex flex-col gap-6'>
        <div className='flex justify-between items-center'>
          <h3 className='text-2xl font-semibold'>Students are viewing</h3>
          <p className='font-semibold text-sm text-primary cursor-pointer hover:underline'>
            see all
          </p>
        </div>
        <div className='flex gap-6'>
          {STUDENTS_VIEWING_COURSES.map((course) => (
            <CourseCard
              thumbnail={course.thumbnail}
              title={course.title}
              description={course.description}
              category={course.category}
              duration={course.duration}
              price={course.price}
              originalPrice={course.originalPrice}
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
