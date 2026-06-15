import Avatar from './components/UI/Avatar';
import Badge from './components/UI/Badge';
import Button from './components/UI/Button';
import FeatureItem from './components/UI/FeatureItem';
import Rating from './components/UI/Rating';
import SectionHeader from './components/UI/SectionHeader';
import StatCard from './components/UI/StatCard';

function App() {
  return (
    <>
      <div className='p-10 flex flex-col gap-6'>
        {/* Variants */}
        <div className='flex gap-4 items-center'>
          <Button variant='primary'>Join for free</Button>
          <Button variant='secondary'>Sign Up</Button>
          <Button variant='outline'>Learn More</Button>
          <Button variant='white'>Watch how it works</Button>
        </div>

        {/* Sizes */}
        <div className='flex gap-4 items-end'>
          <Button size='sm'>Small</Button>
          <Button size='md'>Medium</Button>
          <Button size='lg'>Large</Button>
        </div>

        {/* States */}
        <div className='flex gap-4 items-center'>
          <Button isLoading>Loading...</Button>
          <Button disabled>Disabled</Button>
        </div>

        {/* With icons */}
        <div className='flex gap-4 items-center'>
          <Button rightIcon={<span>▶</span>}>Watch how it works</Button>
          <Button variant='outline' leftIcon={<span>+</span>}>
            Add Course
          </Button>
        </div>
      </div>

      <div className='p-10 flex gap-4 flex-wrap'>
        <Badge variant='primary'>News</Badge>
        <Badge variant='secondary'>Design</Badge>
        <Badge variant='accent'>Popular</Badge>
        <Badge variant='orange'>Business</Badge>
        <Badge variant='navy'>Premium</Badge>
        <Badge variant='pink'>Live</Badge>
      </div>

      <div className='p-10 flex gap-4 flex-wrap'>
        <Avatar alt={'test'} size={'sm'} initials='TS' />
        <Avatar alt={'test'} size={'md'} initials='TS' />
        <Avatar alt={'test'} size={'lg'} initials='TS' />
      </div>

      <div className='p-10 flex gap-4 flex-wrap'>
        <Rating rating={3} maxStars={5} showCount={true} />
      </div>

      <div className='p-10 flex gap-4 flex-wrap'>
        <SectionHeader
          title='Our Success'
          subtitle='Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod.'
        />

        <SectionHeader
          title='A user interface designed for the classroom'
          highlightedWord='user interface'
          subtitle='Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod.'
        />
        <SectionHeader
          title='All-In-One Cloud Software.'
          highlightedWord='Cloud Software.'
          subtitle='TOTC is one powerful online software suite.'
        />

        <SectionHeader
          title='Explore Course'
          subtitle='Ut sed eros finibus, placerat orci id, dapibus.'
          align='left'
        />

        <SectionHeader title='What is TOTC?' highlightedWord='TOTC?' />
      </div>

      <div className='p-10 flex gap-4 flex-wrap'>
        <StatCard value={'15k+'} label='Student' />
        <StatCard value={'75%'} label='Total success' />
        <StatCard value={'35'} label='Main questions' />
        <StatCard value={'26'} label='Chief Expert' />
        <StatCard value={'16'} label='Years of experience' />
      </div>

      <div className='p-10 flex flex-col gap-8'>
        {/* Vertical layout — All-In-One section style */}
        <div className='flex gap-8'>
          <FeatureItem
            icon='📋'
            title='Online Billing, Invoicing & Contracts'
            description="Simple and secure control of your organization's financial and legal transactions."
            layout='vertical'
          />
          <FeatureItem
            icon='📅'
            title='Easy Scheduling & Attendance Tracking'
            description='Schedule and reserve classrooms on one campus or multiple campuses.'
            layout='vertical'
          />
          <FeatureItem
            icon='👥'
            title='Customer Tracking'
            description='Automate and track emails to individuals or groups.'
            layout='vertical'
          />
        </div>

        {/* Horizontal layout — Features section style */}
        <div className='flex flex-col gap-6 max-w-md'>
          <FeatureItem
            icon='🎯'
            title="Teachers don't get lost in the grid view"
            description='and have a dedicated Podium space.'
            layout='horizontal'
          />
          <FeatureItem
            icon='🔄'
            title='TAs and presenters can be moved'
            description='to the front of the class.'
            layout='horizontal'
          />
        </div>
      </div>
    </>
  );
}

export default App;
