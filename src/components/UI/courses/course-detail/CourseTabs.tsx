import { useState } from 'react';
import TabButtons from './TabButtons';
import ReviewSection from './ReviewSection';
import OverviewContent from './OverviewContent';
import CurriculumContent from './CurriculumContent';
import InstructorContent from './InstructorContent';
import type { PageCourse } from '../../../../constants/courses-page';
import type { CourseReview } from '../../../../constants/courses-reviews';

interface CourseTabsProps {
  course: PageCourse;
  courseReview: CourseReview[];
}

export default function CourseTabs({ courseReview, course }: CourseTabsProps) {
  const [activeTab, setActiveTab] = useState('reviews');

  return (
    <div className='flex flex-col w-[600px] gap-6'>
      <div className='flex gap-4 items-center justify-center'>
        <TabButtons
          label='Overview'
          value='overview'
          activeTab={activeTab}
          onClick={setActiveTab}
        />
        <TabButtons
          label='Curriculum'
          value='curriculum'
          activeTab={activeTab}
          onClick={setActiveTab}
        />
        <TabButtons
          label='Instructor'
          value='instructor'
          activeTab={activeTab}
          onClick={setActiveTab}
        />
        <TabButtons
          label='Reviews'
          value='reviews'
          activeTab={activeTab}
          onClick={setActiveTab}
        />
      </div>
      {activeTab === 'overview' && <OverviewContent course={course} />}
      {activeTab === 'curriculum' && <CurriculumContent course={course} />}
      {activeTab === 'instructor' && <InstructorContent course={course} />}
      {activeTab === 'reviews' && <ReviewSection courseReview={courseReview} />}
    </div>
  );
}
