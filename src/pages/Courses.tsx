import CourseCard from '../components/UI/courses/CourseCard';

export default function Courses({ user }) {
  return (
    <div className='py-10 px-10'>
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
  );
}
