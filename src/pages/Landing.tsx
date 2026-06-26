import AllInOne from '../components/sections/landing/AllInOne';
import Courses from '../components/sections/landing/Courses';
import Everything from '../components/sections/landing/Everything';
import Hero from '../components/sections/landing/Hero';
import OurFeatures from '../components/sections/landing/OurFeatures';
import OurSuccess from '../components/sections/landing/OurSuccess';
import Testimonial from '../components/sections/landing/Testimonial';
import WhatIs from '../components/sections/landing/WhatIs';

export default function Landing() {
  return (
    <div>
      <Hero />
      <div className='max-w-6xl mx-auto w-full'>
        <OurSuccess />
        <AllInOne />
        <WhatIs />
        <Everything />
        <OurFeatures />
        <Courses />
        <Testimonial />
      </div>
    </div>
  );
}
