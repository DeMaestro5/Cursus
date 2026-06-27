import CourseCard from '../components/UI/courses/CourseCard';
import CourseSectionCard from '../components/UI/courses/CourseSectionCard';
import { CalendarDays } from 'lucide-react';

export default function Courses({ user }) {
  return (
    <div className='py-10 px-10 flex gap-10'>
      <div>
        <CourseCard
          thumbnail='/src/assets/landing/whatImage2.jpg'
          title='AWS Certified Solution Architect'
          description='aliquam massa. Sed eget arcu at turpis dignissim imperdiet. Sed dolor massa,'
          duration='3 months'
          category='Design'
          originalPrice={100}
          price={80}
          user={user}
        />
      </div>
      <div>
        <CourseSectionCard
          icon={<CalendarDays />}
          title='Development'
          description='nulla non, interdum placerat turpis. Ut eros purus, consectetur pellentesque libero nec, viverra congue eros.'
          iconBgColor='#49BBBD'
        />
      </div>
    </div>
  );
}
