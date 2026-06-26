interface EverythingProps {
  showLearnMore?: boolean;
}

export default function Everything({ showLearnMore = true }: EverythingProps) {
  return (
    <section className='w-full flex items-center gap-16 py-20 px-16'>
      {/* LEFT — text content */}
      <div className='flex flex-1 flex-col gap-6 relative'>
        <h3 className='relative z-10 text-2xl text-primary-dark font-semibold'>
          {' '}
          Everything you can do in a physical classroom,{' '}
          <span className='text-primary text-2xl'>you can do with Cursus</span>
        </h3>
        <p className='relative z-10 text-muted text-sm leading-relaxed mt-3'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nec
          fermentum ex, ut interdum nunc. Pellentesque ut lectus vel ex tempor
          viverra sed eget ipsum. Nulla ipsum nisl, apibus convallis dui. Aenean
          hendrerit dictum fermentum.
        </p>

        {showLearnMore && (
          <a
            href='#'
            className='text-muted font-base underline underline-offset-4 w-fit'
          >
            Learn more
          </a>
        )}
        <div className='absolute w-16 h-16 -top-4 -left-4 rounded-full bg-cyan z-0 animate-float' />
        <div className='absolute w-8 h-8 bottom-16 right-0 rounded-full bg-cyan z-0 animate-float' />
      </div>
      {/* RIGHT — image content */}
      <div className='relative flex-1'>
        {/* Blue square — hollow outline, peeks top-left */}
        <div className='absolute -top-4 -left-4 w-24 h-24 bg-sky-400 rounded-2xl z-0 animate-float' />
        {/* Green square — solid fill, peeks bottom-right */}
        <div className='absolute -bottom-4 -right-4 w-24 h-24 bg-cyan rounded-2xl z-0 animate-float'></div>
        <img
          src='/src/assets/landing/everythingImg.jpg'
          alt='image'
          className='relative z-10 w-full h-96 rounded-2xl object-cover shadow-lg '
        />
        <button className='absolute z-20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white cursor-pointer rounded-full flex items-center justify-center shadow-lg hover:bg-white/90 transition-colors'>
          <span className='text-primary text-xl ml-1 '>▶</span>
        </button>
      </div>
    </section>
  );
}
