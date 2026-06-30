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

import { COURSE_REVIEWS } from '../../constants/courses-reviews';
import ReviewSection from '../../components/UI/courses/course-detail/ReviewSection';

interface CourseDetailProps {
  user: User;
}

export default function CourseDetail({ user }: CourseDetailProps) {
  const { id } = useParams();

  const allCourses: PageCourse[] = [
    ...RECOMMENDED_COURSES,
    ...TOP_CHOICE_COURSES,
    ...PERSONAL_DEVELOPMENT_COURSES,
    ...STUDENTS_VIEWING_COURSES,
  ];

  const course = allCourses.find((course) => course.id === id);
  const courseReview = COURSE_REVIEWS.filter(
    (review) => review.courseId === id,
  );
  console.log(courseReview);
  if (!courseReview) return 'CourseReview not found';
  if (!course) return 'Course not found';

  console.log(course);

  return (
    <div>
      <Navbar user={user} />
      <div>
        <img />
        <div className=''>
          <ReviewSection courseReview={courseReview} />
        </div>
      </div>
    </div>
  );
}
