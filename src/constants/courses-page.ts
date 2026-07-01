import {
  Briefcase,
  Database,
  Film,
  Monitor,
  Notebook,
  Palette,
  Users,
} from 'lucide-react';

export interface CourseInstructor {
  name: string;
  avatar: string;
}
export interface TopEdOffer {
  id: string;
  title: string;
  bgImage: string;
  percentage: number;
  description: string;
}

export interface MarketingArticle {
  id: string;
  title: string;
  thumbnail: string;
  category: string;
  duration: string;
  price: number;
  originalPrice: number;
  instructor: CourseInstructor;
  description: string;
}

export interface PageCourse {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  category: string;
  duration: string;
  price: number;
  originalPrice: number;
  rating: number;
  instructor: CourseInstructor;
  currentLesson?: number;
  totalLesson?: number;
}

export interface PageCategory {
  id: string;
  label: string;
  description: string;
  iconName: React.ElementType;
  iconBgColor: string;
}

// ─── Instructors ────────────────────────────────────────────────────────────
const INSTRUCTORS: Record<string, CourseInstructor> = {
  sarah: {
    name: 'Sarah Johnson',
    avatar:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop',
  },
  david: {
    name: 'David Kim',
    avatar:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop',
  },
  emma: {
    name: 'Emma Davis',
    avatar:
      'https://images.unsplash.com/photo-1573497620053-ea5300f94f21?w=80&h=80&fit=crop',
  },
  marcus: {
    name: 'Marcus Bell',
    avatar:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&h=80&fit=crop',
  },
  priya: {
    name: 'Priya Sharma',
    avatar:
      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop',
  },
  alex: {
    name: 'Alex Morgan',
    avatar:
      'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop',
  },
  jessica: {
    name: 'Jessica Lane',
    avatar:
      'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=80&h=80&fit=crop',
  },
  omar: {
    name: 'Omar Hassan',
    avatar:
      'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=80&h=80&fit=crop',
  },
};

// ─── Categories ─────────────────────────────────────────────────────────────
export const PAGE_CATEGORIES: PageCategory[] = [
  {
    id: 'design',
    label: 'Design',
    description:
      'Learn UI/UX, graphic design, branding and visual communication from industry experts.',
    iconName: Palette,
    iconBgColor: '#49BBBD',
  },
  {
    id: 'development',
    label: 'Development',
    description:
      'Master web and mobile development with modern frameworks and best practices.',
    iconName: Monitor,
    iconBgColor: '#E1E2FF',
  },
  {
    id: 'development-2',
    label: 'Development',
    description:
      'Backend systems, databases, APIs and cloud infrastructure for scalable apps.',
    iconName: Database,
    iconBgColor: '#E1F1FF',
  },
  {
    id: 'business',
    label: 'Business',
    description:
      'Finance, marketing, entrepreneurship and leadership skills for your career.',
    iconName: Briefcase,
    iconBgColor: '#BFF0E7',
  },
  {
    id: 'marketing',
    label: 'Marketing',
    description:
      'Digital marketing, SEO, social media and content strategy to grow any brand.',
    iconName: Users,
    iconBgColor: '#FFE3C1',
  },
  {
    id: 'photography',
    label: 'Photography',
    description:
      'Composition, lighting, editing and storytelling through the lens.',
    iconName: Notebook,
    iconBgColor: '#FFD3D3',
  },
  {
    id: 'acting',
    label: 'Acting',
    description:
      'Performance techniques, script analysis and on-camera presence for all levels.',
    iconName: Film,
    iconBgColor: '#CBCBD7',
  },
  {
    id: 'personal',
    label: 'Business',
    description:
      'Productivity, leadership, public speaking and personal effectiveness skills.',
    iconName: Briefcase,
    iconBgColor: '#BFF0E7',
  },
];

// ─── Courses in progress (for the dashboard section) ────────────────────────
export const COURSES_IN_PROGRESS: PageCourse[] = [
  {
    id: 'progress-1',
    title: 'AWS Certified Solutions Architect',
    description:
      'Master AWS cloud services and architecture patterns for the Solutions Architect exam.',
    thumbnail:
      'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=400&fit=crop',
    category: 'Development',
    duration: '4 months',
    price: 80,
    originalPrice: 100,
    rating: 4.8,
    instructor: INSTRUCTORS.david,
    currentLesson: 5,
    totalLesson: 7,
  },
  {
    id: 'progress-2',
    title: 'UI/UX Design Fundamentals',
    description:
      'Build real-world design projects from wireframes to high-fidelity prototypes in Figma.',
    thumbnail:
      'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop',
    category: 'Design',
    duration: '3 months',
    price: 80,
    originalPrice: 100,
    rating: 4.9,
    instructor: INSTRUCTORS.sarah,
    currentLesson: 3,
    totalLesson: 8,
  },
  {
    id: 'progress-3',
    title: 'React & TypeScript Complete Guide',
    description:
      'Production-ready React apps with TypeScript, hooks, context, routing and testing.',
    thumbnail:
      'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=600&h=400&fit=crop',
    category: 'Development',
    duration: '5 months',
    price: 80,
    originalPrice: 100,
    rating: 4.9,
    instructor: INSTRUCTORS.alex,
    currentLesson: 2,
    totalLesson: 10,
  },
];

// ─── Recommended courses ─────────────────────────────────────────────────────
export const RECOMMENDED_COURSES: PageCourse[] = [
  {
    id: 'rec-1',
    title: 'AWS Certified Solutions Architect',
    description:
      'Master AWS cloud services and architecture patterns. Covers EC2, S3, RDS, Lambda and more.',
    thumbnail:
      'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=400&fit=crop',
    category: 'Development',
    duration: '3 Month',
    price: 80,
    originalPrice: 100,
    rating: 4.8,
    instructor: INSTRUCTORS.david,
  },
  {
    id: 'rec-2',
    title: 'UI/UX Design Masterclass',
    description:
      'Complete design workflow from user research to final handoff. Figma, prototyping and testing.',
    thumbnail:
      'https://images.unsplash.com/photo-1609921212029-bb5a28e60960?w=600&h=400&fit=crop',
    category: 'Design',
    duration: '3 Month',
    price: 80,
    originalPrice: 100,
    rating: 4.9,
    instructor: INSTRUCTORS.sarah,
  },
  {
    id: 'rec-3',
    title: 'Digital Marketing Masterclass',
    description:
      'SEO, paid ads, email marketing and social media strategy to grow any business online.',
    thumbnail:
      'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=400&fit=crop',
    category: 'Marketing',
    duration: '3 Month',
    price: 80,
    originalPrice: 100,
    rating: 4.7,
    instructor: INSTRUCTORS.jessica,
  },
  {
    id: 'rec-4',
    title: 'Next.js 14 Full Stack Development',
    description:
      'Build full stack apps with Next.js 14, Prisma, Supabase and deploy to Vercel.',
    thumbnail:
      'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=400&fit=crop',
    category: 'Development',
    duration: '3 Month',
    price: 80,
    originalPrice: 100,
    rating: 4.9,
    instructor: INSTRUCTORS.alex,
  },
];

// ─── Top choice courses ──────────────────────────────────────────────────────
export const TOP_CHOICE_COURSES: PageCourse[] = [
  {
    id: 'top-1',
    title: 'Brand Identity Design',
    description:
      'Logo design, color theory, typography and brand guidelines for real clients.',
    thumbnail:
      'https://images.unsplash.com/photo-1626785774573-4b799315345d?w=600&h=400&fit=crop',
    category: 'Design',
    duration: '3 Month',
    price: 80,
    originalPrice: 100,
    rating: 4.6,
    instructor: INSTRUCTORS.emma,
  },
  {
    id: 'top-2',
    title: 'Node.js & Express API Development',
    description:
      'Scalable REST APIs with authentication, databases, testing and cloud deployment.',
    thumbnail:
      'https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=600&h=400&fit=crop',
    category: 'Development',
    duration: '3 Month',
    price: 80,
    originalPrice: 100,
    rating: 4.8,
    instructor: INSTRUCTORS.omar,
  },
  {
    id: 'top-3',
    title: 'Entrepreneurship: Start Your Business',
    description:
      'From idea validation to launch. Business models, funding strategies and growth hacking.',
    thumbnail:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop',
    category: 'Business',
    duration: '3 Month',
    price: 80,
    originalPrice: 100,
    rating: 4.5,
    instructor: INSTRUCTORS.marcus,
  },
  {
    id: 'top-4',
    title: 'Docker & Kubernetes Fundamentals',
    description:
      'Containerise and orchestrate applications. CI/CD pipelines and production deployment.',
    thumbnail:
      'https://images.unsplash.com/photo-1605745341112-85968b19335b?w=600&h=400&fit=crop',
    category: 'Development',
    duration: '3 Month',
    price: 80,
    originalPrice: 100,
    rating: 4.7,
    instructor: INSTRUCTORS.priya,
  },
];

// ─── Personal development courses ───────────────────────────────────────────
export const PERSONAL_DEVELOPMENT_COURSES: PageCourse[] = [
  {
    id: 'personal-1',
    title: 'Public Speaking & Presentation Skills',
    description:
      'Overcome nerves, structure compelling talks and command any room with confidence.',
    thumbnail:
      'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=600&h=400&fit=crop',
    category: 'Personal Development',
    duration: '3 Month',
    price: 80,
    originalPrice: 100,
    rating: 4.8,
    instructor: INSTRUCTORS.marcus,
  },
  {
    id: 'personal-2',
    title: 'Financial Modelling in Excel',
    description:
      'DCF valuation, LBO modelling and scenario analysis for finance professionals.',
    thumbnail:
      'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600&h=400&fit=crop',
    category: 'Business',
    duration: '3 Month',
    price: 80,
    originalPrice: 100,
    rating: 4.8,
    instructor: INSTRUCTORS.jessica,
  },
  {
    id: 'personal-3',
    title: 'Time Management & Productivity',
    description:
      'Deep work, time blocking and GTD method. Systems for consistent peak performance.',
    thumbnail:
      'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=600&h=400&fit=crop',
    category: 'Personal Development',
    duration: '3 Month',
    price: 80,
    originalPrice: 100,
    rating: 4.7,
    instructor: INSTRUCTORS.emma,
  },
  {
    id: 'personal-4',
    title: 'Leadership Essentials',
    description:
      'Delegation, feedback, team building and vision setting for new and aspiring managers.',
    thumbnail:
      'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&h=400&fit=crop',
    category: 'Personal Development',
    duration: '3 Month',
    price: 80,
    originalPrice: 100,
    rating: 4.7,
    instructor: INSTRUCTORS.marcus,
  },
];

// ─── Students are viewing ────────────────────────────────────────────────────
export const STUDENTS_VIEWING_COURSES: PageCourse[] = [
  {
    id: 'viewing-1',
    title: 'PostgreSQL for Developers',
    description:
      'Queries, indexing, performance tuning and database design for production systems.',
    thumbnail:
      'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=600&h=400&fit=crop',
    category: 'Development',
    duration: '3 Month',
    price: 80,
    originalPrice: 100,
    rating: 4.6,
    instructor: INSTRUCTORS.omar,
  },
  {
    id: 'viewing-2',
    title: 'Motion Graphics with After Effects',
    description:
      'From logo animations to full explainer videos. GPU rendering and export workflows.',
    thumbnail:
      'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=600&h=400&fit=crop',
    category: 'Design',
    duration: '3 Month',
    price: 80,
    originalPrice: 100,
    rating: 4.5,
    instructor: INSTRUCTORS.sarah,
  },
  {
    id: 'viewing-3',
    title: 'Product Management Fundamentals',
    description:
      'Roadmapping, prioritisation frameworks and stakeholder management for PMs.',
    thumbnail:
      'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop',
    category: 'Business',
    duration: '3 Month',
    price: 80,
    originalPrice: 100,
    rating: 4.6,
    instructor: INSTRUCTORS.jessica,
  },
  {
    id: 'viewing-4',
    title: 'JavaScript Algorithms & Data Structures',
    description:
      'Master algorithms and data structures. Ace technical interviews at top tech companies.',
    thumbnail:
      'https://images.unsplash.com/photo-1580894894513-541e068a3e2b?w=600&h=400&fit=crop',
    category: 'Development',
    duration: '3 Month',
    price: 80,
    originalPrice: 100,
    rating: 4.8,
    instructor: INSTRUCTORS.david,
  },
];

export const TOP_ED_OFFERS: TopEdOffer[] = [
  {
    id: 'offer-1',
    title: 'FOR INSTRUCTORS',
    bgImage:
      'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=600&h=400&fit=crop',
    percentage: 50,
    description:
      "TOTC's school management software helps traditional and online schools manage scheduling,",
  },
  {
    id: 'offer-2',
    title: 'FOR INSTRUCTORS',
    bgImage:
      'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop',
    percentage: 50,
    description:
      "TOTC's school management software helps traditional and online schools manage scheduling,",
  },
  {
    id: 'offer-3',
    title: 'FOR INSTRUCTORS',
    bgImage:
      'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&h=400&fit=crop',
    percentage: 50,
    description:
      "TOTC's school management software helps traditional and online schools manage scheduling,",
  },
];

export const MARKETING_ARTICLES: MarketingArticle[] = [
  {
    id: 'article-1',
    title: 'AWS Certified Solutions Architect',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
    thumbnail:
      'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=400&fit=crop',
    category: 'Design',
    duration: '3 Month',
    price: 80,
    originalPrice: 100,
    instructor: {
      name: 'Lina',
      avatar:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop',
    },
  },
  {
    id: 'article-2',
    title: 'AWS Certified Solutions Architect',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
    thumbnail:
      'https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=600&h=400&fit=crop',
    category: 'Design',
    duration: '3 Month',
    price: 80,
    originalPrice: 100,
    instructor: {
      name: 'Lina',
      avatar:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop',
    },
  },
  {
    id: 'article-3',
    title: 'AWS Certified Solutions Architect',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
    thumbnail:
      'https://images.unsplash.com/photo-1580894894513-541e068a3e2b?w=600&h=400&fit=crop',
    category: 'Design',
    duration: '3 Month',
    price: 80,
    originalPrice: 100,
    instructor: {
      name: 'Lina',
      avatar:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop',
    },
  },
  {
    id: 'article-4',
    title: 'AWS Certified Solutions Architect',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
    thumbnail:
      'https://images.unsplash.com/photo-1605745341112-85968b19335b?w=600&h=400&fit=crop',
    category: 'Design',
    duration: '3 Month',
    price: 80,
    originalPrice: 100,
    instructor: {
      name: 'Lina',
      avatar:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop',
    },
  },
];
