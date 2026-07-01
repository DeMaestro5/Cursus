interface TopEdCardProps {
  title: string;
  bgImage: string;
  percentage: number;
  description: string;
  percentageBG: string;
  fontWeight: React.CSSProperties['fontWeight'];
}

export default function TopEdCard({
  title,
  bgImage,
  percentage,
  description,
  percentageBG,
  fontWeight,
}: TopEdCardProps) {
  return (
    <div className='relative w-full h-80'>
      <img
        src={bgImage}
        alt='bgImage'
        className='w-full h-full object-cover rounded-2xl'
      />
      <div className='absolute inset-0 p-10 flex flex-col gap-2'>
        <div
          className={`w-12 h-12 rounded-lg text-white flex justify-center items-center text-sm`}
          style={{ backgroundColor: percentageBG, fontWeight }}
        >
          {percentage}%
        </div>
        <h3 className='text-white font-semibold text-xl'>{title}</h3>
        <p className='text-sm text-white tracking-wider leading-loose'>
          {description}
        </p>
      </div>
    </div>
  );
}
