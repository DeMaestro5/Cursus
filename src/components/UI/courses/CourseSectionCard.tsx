interface CourseSectionCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  className?: string;
  iconBgColor: string;
}

export default function CourseSectionCard({
  icon,
  title,
  description,
  className = '',
  iconBgColor = '#49BBBD',
}: CourseSectionCardProps) {
  return (
    <div className={`w-[280px] h-[280px] shadow-lg rounded-2xl ${className}`}>
      <div className='p-6 flex flex-col justify-center items-center gap-6'>
        <div
          className={`flex items-center justify-center p-4 rounded-sm `}
          style={{ backgroundColor: iconBgColor }}
        >
          {icon}
        </div>

        <h3 className='font-bold'>{title}</h3>
        <p className='text-center text-muted text-sm leading-relaxed'>
          {description}
        </p>
      </div>
    </div>
  );
}
