import AllInOne from '../components/sections/landing/all-in-one/AllInOne';
import Everything from '../components/sections/landing/everything/Everything';
import Hero from '../components/sections/landing/hero/Hero';
import OurFeatures from '../components/sections/landing/our-features/OurFeatures';
import OurSuccess from '../components/sections/landing/our-success/OurSuccess';
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
      </div>
    </div>
  );
}
