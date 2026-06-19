import SectionHeader from '../../../UI/SectionHeader';
import StatCard from '../../../UI/StatCard';

export default function OurSuccess() {
  return (
    <section className='py-20 px-16'>
      <div className='space-y-10 w-full'>
        <SectionHeader
          className='text-black'
          title='Our Success'
          subtitle='The image sitting on the wave is a z-index battle. The wave needs to be on top of the image bottom. On the wave wrapper div, increase the negative margin to pull it up more'
        />
        <div className='flex items-center justify-center gap-10'>
          <StatCard value='15k+' label='Students' />
          <StatCard value='75%' label='Total Success' />
          <StatCard value='35' label='Main questions' />
          <StatCard value='26' label='Chief expert' />
          <StatCard value='16' label='Years of experience' />
        </div>
      </div>
    </section>
  );
}
