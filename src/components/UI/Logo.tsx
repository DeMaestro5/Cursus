interface LogoProp {
  transparent?: boolean;
  className?: string;
}

export default function logo({ transparent, className = '' }: LogoProp) {
  return (
    <div className='flex items-center gap-2 cursor-pointer'>
      <div
        className={`w-9 h-9 rounded-lg flex items-center justify-center font-black text-lg ${
          transparent ? 'bg-white text-primary' : 'bg-primary text-white'
        } ${className}`}
      >
        C
      </div>
      <span
        className={`font-black text-xl tracking-tight ${
          transparent ? 'text-white' : 'text-gray-text'
        }`}
      >
        cursus
      </span>
    </div>
  );
}
