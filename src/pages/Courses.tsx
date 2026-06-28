import Navbar from '../components/layout/Navbar';
import Choice from '../components/sections/courses/Choice';
import PersonalDev from '../components/sections/courses/PersonalDev';
import Recommended from '../components/sections/courses/Recommended';
import StudentViewing from '../components/sections/courses/StudentViewing';
import TopCategory from '../components/sections/courses/TopCategory';
import WelcomeBack from '../components/sections/courses/WelcomeBack';
import CoachingBanner from '../components/UI/CoachingBanner';
import Footer from '../components/UI/Footer';

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
      <Choice user={user} />
      <div className='flex justify-center items-center py-10 px-16'>
        <CoachingBanner />
      </div>
      <PersonalDev user={user} />
      <div className='max-w-full mx-auto w-full bg-sky-100/50'>
        <StudentViewing user={user} />
      </div>
      <Footer/>
    </div>
  );
}
