import FeatureItem from '../../UI/FeatureItem';
import SectionHeader from '../../UI/SectionHeader';
import { FileText, CalendarDays, Users } from 'lucide-react';

export default function AllInOne() {
  return (
    <section className='py-20 px-16'>
      <div className='space-y-20 w-full'>
        <SectionHeader
          className='space-y-8'
          title='All in one Cloud Software'
          highlightedWord='Cloud Software'
          subtitle='You put the debugging note as the subtitle. Replace it with the actual Figma subtitle text. Go check what the Figma says under "Our Success".'
        />

        <div className='flex gap-12 justify-center items-center'>
          <FeatureItem
            icon={<FileText className='w-7 h-7' />}
            iconBg='bg-[#6448FE]'
            title='Online Billing, invoicing, & contract'
            description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam elementum et sem non vestibulum. '
          />

          <FeatureItem
            icon={<CalendarDays className='w-7 h-7' />}
            iconBg='bg-primary'
            title='Easy Scheduling & Attendance Tracking'
            description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam elementum et sem non vestibulum. '
          />

          <FeatureItem
            icon={<Users className='w-7 h-7' />}
            iconBg='bg-sky-400'
            title='Customer Tracking'
            description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam elementum et sem non vestibulum. '
          />
        </div>
      </div>
    </section>
  );
}
