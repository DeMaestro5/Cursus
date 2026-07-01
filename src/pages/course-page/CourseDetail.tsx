import { useParams } from 'react-router-dom';
import Navbar from '../../components/layout/Navbar';
import type { User } from '../../types/user.types';
import {
  PERSONAL_DEVELOPMENT_COURSES,
  RECOMMENDED_COURSES,
  STUDENTS_VIEWING_COURSES,
  TOP_CHOICE_COURSES,
  TOP_ED_OFFERS,
  type PageCourse,
} from '../../constants/courses-page';

import CourseTabs from '../../components/UI/courses/course-detail/CourseTabs';
import { COURSE_REVIEWS } from '../../constants/courses-reviews';
import CoursePriceCard from '../../components/UI/courses/course-detail/CoursePriceCard';
import TopEdCard from '../../components/UI/courses/course-detail/TopEdCard';
import CourseCard from '../../components/UI/courses/CourseCard';
import Everything from '../../components/sections/landing/Everything';
import Footer from '../../components/UI/Footer';

interface CourseDetailProps {
  user: User;
}

const TopEd = {};

export default function CourseDetail({ user }: CourseDetailProps) {
  const { id } = useParams();

  const courseReview = COURSE_REVIEWS.filter(
    (review) => review.courseId === id
  );
  if (!courseReview) return 'CourseReview not found';
  console.log(courseReview);
  const allCourses: PageCourse[] = [
    ...RECOMMENDED_COURSES,
    ...TOP_CHOICE_COURSES,
    ...PERSONAL_DEVELOPMENT_COURSES,
    ...STUDENTS_VIEWING_COURSES,
  ];

  const courses = allCourses.find((course) => course.id === id);

  if (!courses) return 'Course not found';

  console.log(courses);

  return (
    <div>
      <Navbar user={user} />

      <div className='relative px-16 flex flex-col gap-6'>
        <img
          src={courses.thumbnail}
          alt={courses.title}
          className='w-full h-[420px] object-cover'
        />
        <div className='flex gap-8  relative z-10'>
          <div className='flex-1 ml-10'>
            <CourseTabs courseReview={courseReview} course={courses} />
          </div>
          <div className='w-[320px] shrink-0 -mt-40 mr-20'>
            <CoursePriceCard
              thumbnail={courses.thumbnail}
              price={`$${courses.price}`}
              originalPrice={`$${courses.originalPrice}`}
              percentageOff={Math.round(
                (1 - courses.price / courses.originalPrice) * 100
              )}
              timeLeft={11}
              training={5}
              modules={32}
            />
          </div>
        </div>
      </div>
      <div className='px-16 py-16 bg-sky-200/20'>
        <div className='flex flex-col gap-6'>
          <div className='flex justify-between items-center'>
            <h3 className='text-2xl font-semibold'>Marketing Articles</h3>
            <p className='font-semibold text-sm text-primary cursor-pointer hover:underline'>
              see all
            </p>
          </div>
          <div className='flex gap-6 py-6'>
            {RECOMMENDED_COURSES.map((course) => (
              <CourseCard
                id={course.id}
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
        </div>
      </div>
      <div className='px-16 py-16'>
        <Everything />
        <div className='px-16 py-16 '>
          <div className='flex flex-col gap-6'>
            <div className='flex justify-between items-center'>
              <h3 className='text-2xl font-semibold'>
                Top Education offer and deals are listed here.
              </h3>
              <p className='font-semibold text-sm text-primary cursor-pointer hover:underline'>
                see all
              </p>
            </div>
            <div className='flex justify-between gap-6 py-6'>
              {TOP_ED_OFFERS.map((offer) => (
                <TopEdCard
                  title={offer.title}
                  bgImage={offer.bgImage}
                  percentage={offer.percentage}
                  description={offer.description}
                  percentageBG='#FF0000'
                  fontWeight='800'
                  key={offer.id}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
