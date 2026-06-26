import { COMPACT_NEWS, FEATURED_NEWS } from '../../../constants/news';
import NewsCard from '../../UI/NewsCard';
import SectionHeader from '../../UI/SectionHeader';

export default function News() {
  return (
    <section className='py-20 px-16'>
      <SectionHeader
        title='Latest News and Resources'
        subtitle='See the Development that has occurred in the CURSUS world'
        className='space-y-10'
      />
      <div className='flex py-12 gap-12'>
        <NewsCard
          {...FEATURED_NEWS}
          variant='featured'
          showReadMore
          className='flex-1'
        />
        <div className='flex flex-1 gap-6 flex-col'>
          {COMPACT_NEWS.map((news) => (
            <NewsCard variant='compact' {...news} key={news.id} />
          ))}
        </div>
      </div>
    </section>
  );
}
