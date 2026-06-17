import Avatar from './components/UI/Avatar';
import Badge from './components/UI/Badge';
import Button from './components/UI/Button';
import CategoryPill from './components/UI/CategoryPill';
import FeatureItem from './components/UI/FeatureItem';
import NewsCard from './components/UI/NewsCard';
import Rating from './components/UI/Rating';
import SectionHeader from './components/UI/SectionHeader';
import StatCard from './components/UI/StatCard';
import TestimonialCard from './components/UI/TestimonialCard';

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

      <div className='p-16 bg-blue-50 flex gap-3 items-center'>
        <CategoryPill
          label='Ut Sed Eros'
          color='#F97316'
          borderColor='#F97316'
          course={{
            thumbnail: 'https://picsum.photos/seed/a/400/300',
            title: 'Integer id Orc Sed Ante Tincidunt',
            description:
              'Cras convallis lacus orci, tristique tincidunt magna fringilla at faucibus vel.',
            rating: 5,
            price: 450,
          }}
        />
        <CategoryPill
          label='Curabitur Egestas'
          color='#F87171'
          borderColor='#F87171'
          course={{
            thumbnail: 'https://picsum.photos/seed/b/400/300',
            title: 'Integer id Orc Sed Ante Tincidunt',
            description:
              'Cras convallis lacus orci, tristique tincidunt magna fringilla at faucibus vel.',
            rating: 4,
            price: 350,
          }}
        />
        <CategoryPill
          label='Quisque Conseq'
          color='#92400E'
          borderColor='#92400E'
          course={{
            thumbnail: 'https://picsum.photos/seed/c/400/300',
            title: 'Integer id Orc Sed Ante Tincidunt',
            description:
              'Cras convallis lacus orci, tristique tincidunt magna fringilla at faucibus vel.',
            rating: 4,
            price: 280,
          }}
        />
        <CategoryPill
          label='Cras Convallis'
          color='#FBBF24'
          borderColor='#FBBF24'
          course={{
            thumbnail: 'https://picsum.photos/seed/d/400/300',
            title: 'Integer id Orc Sed Ante Tincidunt',
            description:
              'Cras convallis lacus orci, tristique tincidunt magna fringilla at faucibus vel.',
            rating: 3,
            price: 200,
          }}
        />
        <CategoryPill
          label='Vestibulum faucibus'
          color='#A855F7'
          borderColor='#A855F7'
          course={{
            thumbnail: 'https://picsum.photos/seed/e/400/300',
            title: 'Integer id Orc Sed Ante Tincidunt',
            description:
              'Cras convallis lacus orci, tristique tincidunt magna fringilla at faucibus vel.',
            rating: 5,
            price: 500,
          }}
        />
        <CategoryPill
          label='Ut Sed Eros'
          color='#38BDF8'
          borderColor='#38BDF8'
          course={{
            thumbnail: 'https://picsum.photos/seed/f/400/300',
            title: 'Integer id Orc Sed Ante Tincidunt',
            description:
              'Cras convallis lacus orci, tristique tincidunt magna fringilla at faucibus vel.',
            rating: 4,
            price: 320,
          }}
        />
      </div>

      <div className='p-10 flex gap-8 max-w-4xl'>
        {/* Featured */}
        <NewsCard
          variant='featured'
          thumbnail='https://picsum.photos/seed/news1/600/400'
          category='NEWS'
          title='Class adds $30 million to its balance sheet for a Zoom-friendly edtech solution'
          description='Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively...'
          showReadMore
          className='w-72'
        />

        {/* Compact stack */}
        <div className='flex flex-col gap-6 flex-1'>
          <NewsCard
            variant='compact'
            thumbnail='https://picsum.photos/seed/news2/300/200'
            category='PRESS RELEASE'
            title='Class Technologies Inc. Closes $30 Million Series A Financing to Meet High Demand'
            description='Class Technologies Inc., the company that created Class,...'
          />
          <NewsCard
            variant='compact'
            thumbnail='https://picsum.photos/seed/news3/300/200'
            category='NEWS'
            title="Zoom's earliest investors are betting millions on a better Zoom for schools"
            description='Zoom was never created to be a consumer product. Nonetheless the...'
          />
          <NewsCard
            variant='compact'
            thumbnail='https://picsum.photos/seed/news4/300/200'
            category='NEWS'
            title='Former Blackboard CEO Raises $16M to Bring LMS Features to Zoom Classrooms'
            description='This year, investors have reaped big financial returns from betting on Zoom...'
          />
        </div>
      </div>
      <div className='p-10 bg-gray-100 flex gap-6'>
        <TestimonialCard
          testimonial="Thank you so much for your help. It's exactly what I've been looking for. You won't regret it. It really saves me time and effort. TOTC is exactly what our business has been lacking."
          name='Gloria Rose'
          rating={4}
          reviews={12}
          at='Yelp'
          className='max-w-sm'
        />
      </div>
    </>
  );
}

export default App;
