import FeatureItem from '../../../UI/FeatureItem';
import SectionHeader from '../../../UI/SectionHeader';

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
            icon='📆'
            title='Online Billing, invoicing, & contract'
            description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam elementum et sem non vestibulum. '
          />

          <FeatureItem
            icon='📆'
            title='Online Billing, invoicing, & contract'
            description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam elementum et sem non vestibulum. '
          />

          <FeatureItem
            icon='📆'
            title='Online Billing, invoicing, & contract'
            description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam elementum et sem non vestibulum. '
          />
        </div>
      </div>
    </section>
  );
}
