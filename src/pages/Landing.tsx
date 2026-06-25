import AllInOne from '../components/sections/landing/all-in-one/AllInOne';
import Courses from '../components/sections/landing/courses/Courses';
import Everything from '../components/sections/landing/everything/Everything';
import Hero from '../components/sections/landing/hero/Hero';
import OurFeatures from '../components/sections/landing/our-features/OurFeatures';
import OurSuccess from '../components/sections/landing/our-success/OurSuccess';
import Testimonial from '../components/sections/landing/testimonial/Testimonial';
import WhatIs from '../components/sections/landing/what-is/WhatIs';

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
