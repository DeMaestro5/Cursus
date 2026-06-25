import { COURSE_CATEGORIES } from '../../../../constants/courses';
import CategoryPill from '../../../UI/CategoryPill';
import { ArrowBigRight } from 'lucide-react';

export default function Courses() {
  return (
    <section className='py-16 px-20 '>
      <div className='flex flex-col space-y-10'>
        <div className='space-y-2'>
          <h3 className='font-bold text-2xl'>Explore Courses</h3>
          <p className='text-muted text-sm'>
            Aenean urna ex, cursus et aliquet sit amet, elementum a lorem.{' '}
          </p>
        </div>

        {COURSE_CATEGORIES.map((category) => {
          const visibleCourses = category.courses.slice(0, 8);
          const Icon = category.icon;
          return (
            <div key={category.id}>
              <div className='flex justify-between items-center py-5'>
                <div className='flex gap-4'>
                  <Icon className='w-7 h-7 text-primary' />
                  <span className='font-bold '>{category.label}</span>
                </div>
                <div className='flex flex-end gap-8 items-center'>
                  <span className='text-primary cursor-pointer text-sm'>
                    SEE ALL
                  </span>
                  <ArrowBigRight className='w-7 h-7 text-primary' />
                </div>
              </div>

              <div className='relative overflow-visible'>
                <div className='flex gap-4 scrollbar-hide p-4'>
                  {visibleCourses.slice(0, 8).map((course) => (
                    <CategoryPill
                      label={course.title}
                      color={course.color}
                      borderColor={course.borderColor}
                      course={course}
                      key={course.id}
                    />
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
