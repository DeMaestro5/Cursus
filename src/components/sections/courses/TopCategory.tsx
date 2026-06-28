import { PAGE_CATEGORIES } from '../../../constants/courses-page';
import CategoryCard from '../../../components/UI/courses/CategoryCard';

export default function TopCategory() {
  return (
    <section className='py-16 px-16'>
      <div className='flex flex-col gap-8'>
        <h3 className='font-semibold text-2xl'>
          Choose favorite course from top category
        </h3>
        <div className='grid grid-cols-4 justify-center items-center gap-14'>
          {PAGE_CATEGORIES.map((category) => (
            <CategoryCard
              icon={<category.iconName className='w-6 h-6' />}
              title={category.label}
              description={category.description}
              iconBgColor={category.iconBgColor}
              key={category.id}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
