import Button from './Button';

export default function CoachingBanner() {
  return (
    <section className=' w-[1330px] h-80  bg-[#252641] rounded-2xl py-16 px-16'>
      <div className=' flex flex-col gap-6 justify-center items-center'>
        <h3 className='text-white font-semibold text-2xl'>
          Online coaching lessons for remote learning
        </h3>
        <p className='text-white/80 max-w-3xl text-center mx-auto tracking-widest'>
          dipiscing elit. Etiam vel arcu fringilla, rutrum ex et, sodales ante.
          Maecenas feugiat nisl non diam tempor, eu pellentesque orci dapibus.
          Proin rhoncus, mauris
        </p>
        <Button variant='primary'>Start learning now</Button>
      </div>
    </section>
  );
}
