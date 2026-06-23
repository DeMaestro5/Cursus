import { Calendar, ChartColumn } from 'lucide-react';
import SectionHeader from '../../../UI/SectionHeader';
import FeatureRow from './featureRow';
import Button from '../../../UI/Button';

export default function OurFeatures() {
  return (
    <section className='py-20 px-16'>
      <div className='flex flex-col space-y-20'>
        <SectionHeader
          title='Our Features'
          highlightedWord='Features'
          subtitle='This very extraordinary feature, can make learning activities so efficient. '
        />
        <div className='flex flex-col gap-24'>
          <FeatureRow
            title='A user interface design for the class.'
            srcImage='/src/assets/landing/zoom.png'
            highlightedWord='user interface'
            decorations={
              <>
                <div className='absolute w-20 h-20 bg-cyan rounded-full -top-10 left-5 animate-float' />
                <div className='absolute w-4 h-4 bg-sky-400 rounded-full -top-10 left-30 animate-float' />
                <div className='absolute w-24 h-24 bg-cyan rounded-full -bottom-14 right-5 animate-float' />
                <div className='absolute w-4 h-4 bg-red-400 rounded-full -bottom-14 right-35 animate-float' />
              </>
            }
            bulletPoints={[
              {
                icon: <ChartColumn />,
                text: 'ultricies. Suspendisse egestas sem at nisl molestie rutrum. Aenean pharetra vulputate turpis, quis hendrerit metus. Vestibulum sed odio nec nunc faucibus tempor.',
              },
              {
                icon: <ChartColumn />,
                text: 'ultricies. Suspendisse egestas sem at nisl molestie rutrum. Aenean pharetra vulputate turpis, quis hendrerit metus. Vestibulum sed odio nec nunc faucibus tempor.',
              },
              {
                icon: <ChartColumn />,
                text: 'ultricies. Suspendisse egestas sem at nisl molestie rutrum. Aenean pharetra vulputate turpis, quis hendrerit metus. Vestibulum sed odio nec nunc faucibus tempor.',
              },
            ]}
          />
          <FeatureRow
            srcImage='/src/assets/landing/featureImage.png'
            imagePosition='right'
            title='A user interface design for the class.'
            highlightedWord='user interface'
            decorations={
              <>
                <div className='absolute w-24 h-24 bg-cyan rounded-full -top-10 -right-10 animate-float' />
                <div className='absolute w-10 h-10 bg-orange-400 rounded-full bottom-16 -left-5 animate-float' />
                <div className='absolute w-3 h-3 bg-purple-400 rounded-full -bottom-4 right-16 animate-float' />
                <div className='absolute w-24 h-24 bg-cyan rounded-full -bottom-14 right-5 animate-float' />
                <div className='absolute w-4 h-4 bg-red-400 rounded-full -bottom-14 right-35 animate-float' />
              </>
            }
            textIcon={
              <Calendar className='w-7 h-7 z-10 absolute top-0 left-50 animate-float text-orange/50' />
            }
            description='ipsum dolor sit amet, consectetur adipiscing elit. Sed porta hendrerit ligula, ac viverra diam laoreet ut. Curabitur et eleifend neque.'
          />
          <FeatureRow
            srcImage='/src/assets/landing/featureImage2.png'
            decorations={
              <>
                <div className='absolute w-24 h-24 bg-cyan rounded-full -top-10 -right-10 animate-float' />
                <div className='absolute w-10 h-10 bg-orange-400 rounded-full bottom-16 -left-5 animate-float' />
                <div className='absolute w-20 h-20 bg-cyan rounded-full -top-10 left-5 animate-float' />
                <div className='absolute w-4 h-4 bg-sky-400 rounded-full -top-10 left-30 animate-float' />
                <div className='absolute w-3 h-3 bg-purple-400 rounded-full -bottom-4 right-16 animate-float' />
                <div className='absolute w-24 h-24 bg-cyan rounded-full -bottom-14 right-5 animate-float' />
                <div className='absolute w-4 h-4 bg-red-400 rounded-full -bottom-14 right-35 animate-float' />
              </>
            }
            imagePosition='left'
            title='A user interface design for the class.'
            highlightedWord='user interface'
            description='ipsum dolor sit amet, consectetur adipiscing elit. Sed porta hendrerit ligula, ac viverra diam laoreet ut. Curabitur et eleifend neque.'
          />
          <FeatureRow
            srcImage='/src/assets/landing/featureImage3.png'
            decorations={
              <>
                <div className='absolute w-24 h-24 bg-cyan rounded-full -top-10 -right-10 animate-float' />
                <div className='absolute w-10 h-10 bg-orange-400 rounded-full bottom-16 -left-5 animate-float' />

                <div className='absolute w-3 h-3 bg-purple-400 rounded-full -bottom-4 right-16 animate-float' />
                <div className='absolute w-24 h-24 bg-cyan rounded-full -bottom-14 right-5 animate-float' />
                <div className='absolute w-4 h-4 bg-red-400 rounded-full -bottom-14 right-35 animate-float' />
              </>
            }
            imagePosition='right'
            title='A user interface design for the class.'
            highlightedWord='user interface'
            description='ipsum dolor sit amet, consectetur adipiscing elit. Sed porta hendrerit ligula, ac viverra diam laoreet ut. Curabitur et eleifend neque.'
          />
          <FeatureRow
            srcImage='/src/assets/landing/featureImage4.png'
            decorations={
              <>
                <div className='absolute w-24 h-24 bg-cyan rounded-full -top-10 -right-10 animate-float' />
                <div className='absolute w-10 h-10 bg-orange-400 rounded-full bottom-16 -left-5 animate-float' />
                <div className='absolute w-3 h-3 bg-purple-400 rounded-full -bottom-4 right-16 animate-float' />
                <div className='absolute w-24 h-24 bg-cyan rounded-full -bottom-14 right-5 animate-float' />
                <div className='absolute w-4 h-4 bg-red-400 rounded-full -bottom-14 right-35 animate-float' />
                <div className='absolute w-20 h-20 bg-cyan rounded-full -top-10 left-5 animate-float' />
                <div className='absolute w-4 h-4 bg-sky-400 rounded-full -top-10 left-30 animate-float' />
              </>
            }
            imagePosition='left'
            title='A user interface design for the class.'
            highlightedWord='user interface'
            description='ipsum dolor sit amet, consectetur adipiscing elit. Sed porta hendrerit ligula, ac viverra diam laoreet ut. Curabitur et eleifend neque.'
          />
        </div>
        <div className='flex flex-row justify-center items-center'>
          <Button variant='outline' size='md' className='font-normal'>
            See More features
          </Button>
        </div>
      </div>
    </section>
  );
}
