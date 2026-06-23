import Button from '../../../UI/Button';
import Navbar from '../../../layout/Navbar';
import HeroCard from './HeroCard';
import { CalendarDays, Columns3, Mail } from 'lucide-react';

const Hero = () => {
  return (
    <section className='bg-primary relative h-screen flex flex-col'>
      {/* SVG clipPath definition — hidden, used to clip the image */}
      <svg width='0' height='0' className='absolute'>
        <defs>
          <clipPath id='wave-clip' clipPathUnits='objectBoundingBox'>
            <path d='M0,0 L1,0 L1,0.88 C0.75,1 0.25,1 0,0.88 Z' />
          </clipPath>
        </defs>
      </svg>

      <Navbar transparent />

      <div className='grid grid-cols-2 px-16 flex-1'>
        {/* LEFT */}
        <div className='flex flex-col justify-center gap-8 pr-8'>
          <h1 className='text-6xl font-bold text-white leading-tight'>
            <span className='text-orange'>Studying</span> Online is now much
            easier
          </h1>
          <p className='text-white/80 text-base leading-relaxed max-w-xs'>
            Cursus is an interesting platform that will teach you in a more
            interactive way
          </p>
          <div className='flex items-center gap-6'>
            <Button
              variant='white'
              size='lg'
              className='bg-white/20 text-white border-white/30 hover:bg-white/30'
            >
              Join for free
            </Button>
            <button className='flex items-center gap-3'>
              <div className='w-12 h-12 rounded-full bg-white flex items-center justify-center shrink-0 shadow-lg'>
                <span className='text-primary text-sm ml-0.5'>▶</span>
              </div>
              <span className='text-white font-medium text-sm'>
                Watch how it works
              </span>
            </button>
          </div>
        </div>

        {/* RIGHT */}
        <div className='relative flex items-end justify-center'>
          {/* Image clipped with wave shape */}
          <div
            className='absolute inset-0 bg-no-repeat bg-bottom bg-contain'
            style={{
              backgroundImage: "url('/src/assets/landing/herogirl.png')",
            }}
          />

          {/* Floating icon */}
          <div className='absolute top-[12%] right-[4%] z-20 w-14 h-14 bg-accent rounded-lg shadow-lg flex items-center justify-center animate-float'>
            <Columns3 className='text-accent bg-white rounded-lg w-10 h-10' />
          </div>

          <HeroCard
            icon={<CalendarDays className='w-7 h-7' />}
            iconBg='bg-sky-400'
            heading='250k'
            text='Assisted Student'
            className='absolute top-[28%] left-[-4%] z-20 animate-float'
          />

          <HeroCard
            icon={<Mail className='w-7 h-7' />}
            iconBg='bg-orange'
            heading='Congratulations'
            text='Your admission completed'
            className='absolute top-[50%] right-[-2%] z-20 animate-float-delay-1'
          />

          <HeroCard
            avatar='https://picsum.photos/seed/instructor/100/100'
            heading='User Experience Class'
            text='Today at 12.00 PM'
            button='Join Now'
            className='absolute bottom-[18%] left-[-2%] z-20 animate-float-delay-2'
          />
        </div>
      </div>

      {/* Bottom wave */}
      <div className='w-full relative -mt-16'>
        <svg
          viewBox='0 0 1440 80'
          xmlns='http://www.w3.org/2000/svg'
          preserveAspectRatio='none'
          className='w-full h-16 block relative z-10'
        >
          <path
            d='M0,20 C360,80 1080,80 1440,20 L1440,80 L0,80 Z'
            fill='white'
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
