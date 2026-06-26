import SectionHeader from '../../UI/SectionHeader';
import whatImage2 from './../../../assets/landing/whatImage2.jpg';
import whatIsImage3 from './../../../assets/landing/whatIsImage3.jpg';
import WhatIsCard from './whatIsCard';

export default function whatIs() {
  return (
    <section className='py-20 px-16'>
      <div className='space-y-15 w-full '>
        <SectionHeader
          title='What is Cursus'
          highlightedWord='Cursus'
          subtitle='Nullam tincidunt porta nisi eget sodales. Cras porta, erat vitae varius porttitor, orci elit lobortis elit, eget condimentum ante odio sit amet turpis. Cras varius odio et tincidunt bibendum. Donec nec libero iaculis, dapibus massa in, ornare neque. '
        />
        <div className='flex gap-12 justify-center items-center'>
          <WhatIsCard
            buttonText='Start Class Today'
            buttonVariant='outline'
            title='FOR INSTRUCTORS'
            bgImage={`url(${whatImage2})`}
          />
          <WhatIsCard
            buttonText='Enter access code'
            buttonVariant='blue'
            title='FOR STUDENTS'
            bgImage={`url(${whatIsImage3})`}
          />
        </div>
      </div>
    </section>
  );
}
