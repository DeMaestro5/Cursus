import Navbar from '../components/layout/Navbar';
import Recommended from '../components/sections/courses/Recommended';
import TopCategory from '../components/sections/courses/TopCategory';
import WelcomeBack from '../components/sections/courses/WelcomeBack';

export default function Courses({ user }) {
  return (
    <div>
      <Navbar user={user} />

      <div className='max-w-full mx-auto w-full bg-sky-100/50'>
        <WelcomeBack user={user} />
      </div>
      <TopCategory />
      <div className='max-w-full mx-auto w-full bg-sky-100/50'>
        <Recommended user={user} />
      </div>
    </div>
  );
}
