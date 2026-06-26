import Button, { type ButtonVariant } from '../../UI/Button';

interface WhatIsCardProps {
  title: string;
  buttonText: string;
  buttonVariant: ButtonVariant;
  bgImage: string;
  className?: string;
}

const WhatIsCard = ({
  title,
  buttonText,
  buttonVariant,
  bgImage,
  className = '',
}: WhatIsCardProps) => {
  return (
    <div
      className={`w-full flex-1 h-70 bg-cover bg-no-repeat rounded-2xl relative ${className}`}
      style={{ backgroundImage: `${bgImage}` }}
    >
      <div className='absolute inset-0 w-full h-full z-10 flex flex-col justify-center items-center gap-3'>
        <h3 className='text-white font-bold text-xl'>{title}</h3>
        <Button
          variant={buttonVariant}
          className='text-white font-bold border-white'
        >
          {buttonText}
        </Button>
      </div>
    </div>
  );
};

export default WhatIsCard;
