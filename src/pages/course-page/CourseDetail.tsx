import { useParams } from 'react-router-dom';
import Navbar from '../../components/layout/Navbar';
import type { User } from '../../types/user.types';
import {
  PERSONAL_DEVELOPMENT_COURSES,
  RECOMMENDED_COURSES,
  STUDENTS_VIEWING_COURSES,
  TOP_CHOICE_COURSES,
  type PageCourse,
} from '../../constants/courses-page';

import CourseTabs from '../../components/UI/courses/course-detail/courseTabs';
import { COURSE_REVIEWS } from '../../constants/courses-reviews';
import CoursePriceCard from '../../components/UI/courses/course-detail/CoursePriceCard';

interface CourseDetailProps {
  user: User;
}

export default function CourseDetail({ user }: CourseDetailProps) {
  const { id } = useParams();

  const courseReview = COURSE_REVIEWS.filter(
    (review) => review.courseId === id,
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

      {/* outer wrapper — two columns, image spans full width behind */}
      <div className='relative px-16 flex flex-col gap-10'>
        {/* hero image — full width */}
        <img
          src={courses.thumbnail}
          alt={courses.title}
          className='w-full h-[420px] object-cover'
        />

        {/* two-column layout overlapping the image bottom */}
        <div className='flex relative z-10'>
          {/* LEFT — tabs content */}
          <div className='flex-1 pl-10'>
            {/* tabs row sits here, outside the blue card */}
            <CourseTabs courseReview={courseReview} course={courses} />
          </div>

          {/* RIGHT — pricing card, starts at image overlap point */}
          <div className='w-[320px] shrink-0 -mt-40 pr-100'>
            <CoursePriceCard
              thumbnail={courses.thumbnail}
              price={`$${courses.price}`}
              originalPrice={`$${courses.originalPrice}`}
              percentageOff={Math.round(
                (1 - courses.price / courses.originalPrice) * 100,
              )}
              timeLeft={11}
              training={5}
              modules={32}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
