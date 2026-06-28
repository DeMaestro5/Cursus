import { PERSONAL_DEVELOPMENT_COURSES } from '../../../constants/courses-page';
import CourseCard from '../../UI/courses/CourseCard';

export default function Choice({ user }) {
  return (
    <section className='px-16 py-16'>
      <div className='flex flex-col gap-10'>
        <div className='flex justify-between items-center'>
          <h3 className='font-semibold text-2xl'>
            The courses in personal Development
          </h3>
          <p className='text-sm font-semibold text-primary hover:underline cursor-pointer'>
            see all
          </p>
        </div>
        <div className='flex gap-6'>
          {PERSONAL_DEVELOPMENT_COURSES.map((course) => (
            <CourseCard
              thumbnail={course.thumbnail}
              title={course.title}
              description={course.description}
              duration={course.duration}
              price={course.price}
              originalPrice={course.originalPrice}
              category={course.category}
              user={user}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
