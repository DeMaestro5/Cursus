import type { User } from '../types/user.types';

export interface CourseReview {
  id: string;
  courseId: string;
  user: User;
  rating: number;
  review: string;
  createdAt: string;
}

const REVIEWERS: User[] = [
  {
    id: 'u1',
    name: 'Lina Torres',
    avatar:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop',
    authenticated: true,
  },
  {
    id: 'u2',
    name: 'Marcus Bell',
    avatar:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&h=80&fit=crop',
    authenticated: true,
  },
  {
    id: 'u3',
    name: 'Priya Sharma',
    avatar:
      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop',
    authenticated: true,
  },
  {
    id: 'u4',
    name: 'Omar Hassan',
    avatar:
      'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=80&h=80&fit=crop',
    authenticated: true,
  },
];

export const COURSE_REVIEWS: CourseReview[] = [
  {
    id: 'rev-1',
    courseId: 'top-2',
    user: REVIEWERS[0],
    rating: 5,
    review:
      'This course completely changed how I think about backend architecture. The instructor explains complex topics with real clarity.',
    createdAt: '3 months ago',
  },
  {
    id: 'rev-2',
    courseId: 'top-2',
    user: REVIEWERS[1],
    rating: 4,
    review:
      'Solid content and well-paced. A few sections could use more hands-on examples, but overall a great learning experience.',
    createdAt: '2 months ago',
  },
  {
    id: 'rev-3',
    courseId: 'top-2',
    user: REVIEWERS[2],
    rating: 5,
    review:
      'Best investment in my career this year. Landed a new role within weeks of finishing the certification project.',
    createdAt: '1 month ago',
  },
  {
    id: 'rev-4',
    courseId: 'rec-1',
    user: REVIEWERS[3],
    rating: 5,
    review:
      'Comprehensive coverage of AWS services. The hands-on labs made all the difference compared to other courses I tried.',
    createdAt: '4 months ago',
  },
  {
    id: 'rev-5',
    courseId: 'rec-1',
    user: REVIEWERS[0],
    rating: 4,
    review:
      'Good structure, clear explanations. Would have liked more practice exams toward the end.',
    createdAt: '2 weeks ago',
  },
  {
    id: 'rev-4',
    courseId: 'rec-1',
    user: REVIEWERS[3],
    rating: 5,
    review:
      'Comprehensive coverage of AWS services. The hands-on labs made all the difference compared to other courses I tried.',
    createdAt: '4 months ago',
  },
  {
    id: 'rev-5',
    courseId: 'rec-1',
    user: REVIEWERS[0],
    rating: 4,
    review:
      'Good structure, clear explanations. Would have liked more practice exams toward the end.',
    createdAt: '2 weeks ago',
  },
  {
    id: 'rev-4',
    courseId: 'rec-1',
    user: REVIEWERS[3],
    rating: 5,
    review:
      'Comprehensive coverage of AWS services. The hands-on labs made all the difference compared to other courses I tried.',
    createdAt: '4 months ago',
  },
  {
    id: 'rev-5',
    courseId: 'rec-1',
    user: REVIEWERS[0],
    rating: 4,
    review:
      'Good structure, clear explanations. Would have liked more practice exams toward the end.',
    createdAt: '2 weeks ago',
  },
  {
    id: 'rev-4',
    courseId: 'rec-1',
    user: REVIEWERS[3],
    rating: 5,
    review:
      'Comprehensive coverage of AWS services. The hands-on labs made all the difference compared to other courses I tried.',
    createdAt: '4 months ago',
  },
  {
    id: 'rev-5',
    courseId: 'rec-1',
    user: REVIEWERS[0],
    rating: 4,
    review:
      'Good structure, clear explanations. Would have liked more practice exams toward the end.',
    createdAt: '2 weeks ago',
  },
  {
    id: 'rev-4',
    courseId: 'rec-1',
    user: REVIEWERS[3],
    rating: 5,
    review:
      'Comprehensive coverage of AWS services. The hands-on labs made all the difference compared to other courses I tried.',
    createdAt: '4 months ago',
  },
  {
    id: 'rev-5',
    courseId: 'rec-1',
    user: REVIEWERS[0],
    rating: 4,
    review:
      'Good structure, clear explanations. Would have liked more practice exams toward the end.',
    createdAt: '2 weeks ago',
  },
];
