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
      <div>
        <img />
        <div className=''>
          <CourseTabs courseReview={courseReview} course={courses} />
        </div>
      </div>
    </div>
  );
}
