import ReviewSummary from './ReviewSummary';
import { type CourseReview } from '../../../../constants/courses-reviews';
import ReviewCard from './ReviewCard';
import Button from '../../Button';
import { useState } from 'react';

export default function ReviewSection({
  courseReview,
}: {
  courseReview: CourseReview[];
}) {
  const [showAll, setShowAll] = useState(false);
  const visibleReviews = showAll ? courseReview : courseReview.slice(0, 4);
  return (
    <div>
      <div>tabs</div>
      <div className='w-[600px] h-[600px] flex flex-col rounded-2xl bg-sky-400/10 p-6'>
        {/**review section */}
        <ReviewSummary />
        <div className='p-6 flex flex-col gap-3 h-[500px] overflow-y-auto scrollbar-none '>
          {courseReview.length === 0 ? (
            <p className='text-sm font-bold text-muted'>
              This Course has no reviews yet, you can be first to review the
              course
            </p>
          ) : (
            visibleReviews.map((review) => (
              <ReviewCard
                user={review.user}
                rating={review.rating}
                createdAt={review.createdAt}
                review={review.review}
                key={review.courseId}
              />
            ))
          )}
          {courseReview.length > 4 && (
            <div className='flex justify-center items-center'>
              <Button
                variant='outline'
                size='sm'
                onClick={() => setShowAll((prev) => !prev)}
              >
                {showAll ? 'Show less' : 'Show more reviews'}
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
