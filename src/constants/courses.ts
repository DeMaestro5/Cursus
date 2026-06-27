import { Palette, Braces, TrendingUp, Brain } from 'lucide-react';
export interface Course {
  id: string;
  title: string;
  description: string;
  price: number;
  rating: number;
  thumbnail: string;
  instructor: string;
  category: string;
  color?: string;
  borderColor?: string;
}

export interface CourseCategory {
  id: string;
  label: string;
  icon: React.ElementType;
  courses: Course[];
}

const PILL_COLORS = [
  { color: '#F97316', borderColor: '#EA6C0A' },
  { color: '#EF4444', borderColor: '#DC2626' },
  { color: '#8B4513', borderColor: '#6B3410' },
  { color: '#F59E0B', borderColor: '#D97706' },
  { color: '#A855F7', borderColor: '#9333EA' },
  { color: '#3B82F6', borderColor: '#2563EB' },
  { color: '#14B8A6', borderColor: '#0D9488' },
  { color: '#EC4899', borderColor: '#DB2777' },
  { color: '#10B981', borderColor: '#059669' },
  { color: '#6366F1', borderColor: '#4F46E5' },
  { color: '#F97316', borderColor: '#EA6C0A' },
  { color: '#EF4444', borderColor: '#DC2626' },
  { color: '#8B4513', borderColor: '#6B3410' },
  { color: '#F59E0B', borderColor: '#D97706' },
  { color: '#A855F7', borderColor: '#9333EA' },
  { color: '#3B82F6', borderColor: '#2563EB' },
  { color: '#14B8A6', borderColor: '#0D9488' },
  { color: '#EC4899', borderColor: '#DB2777' },
  { color: '#10B981', borderColor: '#059669' },
  { color: '#6366F1', borderColor: '#4F46E5' },
];

export const COURSE_CATEGORIES: CourseCategory[] = [
  {
    id: 'design',
    label: 'Design & Creative',
    icon: Palette,
    courses: [
      {
        id: 'design-1',
        title: 'UI/UX Design Fundamentals',
        description:
          'Learn the core principles of user interface and experience design from scratch. Build real-world projects using Figma.',
        price: 49,
        rating: 4.8,
        thumbnail:
          'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=300&fit=crop',
        instructor: 'Sarah Johnson',
        category: 'design',
        ...PILL_COLORS[0],
      },
      {
        id: 'design-2',
        title: 'Figma Masterclass 2024',
        description:
          'Master Figma from beginner to advanced. Cover components, auto-layout, prototyping and developer handoff.',
        price: 39,
        rating: 4.7,
        thumbnail:
          'https://images.unsplash.com/photo-1609921212029-bb5a28e60960?w=400&h=300&fit=crop',
        instructor: 'Mike Chen',
        category: 'design',
        ...PILL_COLORS[1],
      },
      {
        id: 'design-3',
        title: 'Brand Identity Design',
        description:
          'Create compelling brand identities for clients. Logo design, color theory, typography and brand guidelines.',
        price: 59,
        rating: 4.6,
        thumbnail:
          'https://images.unsplash.com/photo-1626785774573-4b799315345d?w=400&h=300&fit=crop',
        instructor: 'Emma Davis',
        category: 'design',
        ...PILL_COLORS[2],
      },
      {
        id: 'design-4',
        title: 'Motion Graphics with After Effects',
        description:
          'Create stunning motion graphics and animations. From logo animations to full explainer videos.',
        price: 69,
        rating: 4.5,
        thumbnail:
          'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=400&h=300&fit=crop',
        instructor: 'James Wright',
        category: 'design',
        ...PILL_COLORS[3],
      },
      {
        id: 'design-5',
        title: 'Illustration with Procreate',
        description:
          'Digital illustration techniques on iPad using Procreate. Character design, landscapes and concept art.',
        price: 45,
        rating: 4.9,
        thumbnail:
          'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop',
        instructor: 'Aisha Patel',
        category: 'design',
        ...PILL_COLORS[4],
      },
      {
        id: 'design-6',
        title: 'Web Design with Tailwind CSS',
        description:
          'Build beautiful, responsive websites using Tailwind CSS. No design experience required.',
        price: 35,
        rating: 4.7,
        thumbnail:
          'https://images.unsplash.com/photo-1547658719-da2b51169166?w=400&h=300&fit=crop',
        instructor: 'Carlos Rivera',
        category: 'design',
        ...PILL_COLORS[5],
      },
      {
        id: 'design-7',
        title: '3D Design with Blender',
        description:
          'Create 3D models, animations and renders with Blender. Perfect for beginners to intermediate designers.',
        price: 75,
        rating: 4.6,
        thumbnail:
          'https://images.unsplash.com/photo-1617042375876-a13e36732a04?w=400&h=300&fit=crop',
        instructor: 'Nina Kowalski',
        category: 'design',
        ...PILL_COLORS[6],
      },
      {
        id: 'design-8',
        title: 'Typography Essentials',
        description:
          'Deep dive into typography — typeface selection, hierarchy, spacing and pairing for print and digital.',
        price: 29,
        rating: 4.4,
        thumbnail:
          'https://images.unsplash.com/photo-1455390582262-044cdead277a?w=400&h=300&fit=crop',
        instructor: 'Tom Baker',
        category: 'design',
        ...PILL_COLORS[7],
      },
      {
        id: 'design-9',
        title: 'Color Theory for Designers',
        description:
          'Master color psychology, palettes, and application across digital and print mediums.',
        price: 32,
        rating: 4.6,
        thumbnail:
          'https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=400&h=300&fit=crop',
        instructor: 'Luna Park',
        category: 'design',
        ...PILL_COLORS[8],
      },
      {
        id: 'design-10',
        title: 'Design Systems at Scale',
        description:
          'Build and maintain design systems for large teams. Tokens, documentation, versioning and governance.',
        price: 89,
        rating: 4.8,
        thumbnail:
          'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?w=400&h=300&fit=crop',
        instructor: 'Ryan Cho',
        category: 'design',
        ...PILL_COLORS[9],
      },
      {
        id: 'design-11',
        title: 'Adobe Illustrator Bootcamp',
        description:
          'Master vector graphics with Adobe Illustrator. Icons, logos, infographics and print-ready artwork.',
        price: 55,
        rating: 4.5,
        thumbnail:
          'https://images.unsplash.com/photo-1572044162444-ad60f128bdea?w=400&h=300&fit=crop',
        instructor: 'Olivia Grant',
        category: 'design',
        ...PILL_COLORS[10],
      },
      {
        id: 'design-12',
        title: 'Accessible Design Principles',
        description:
          'Design for everyone. WCAG guidelines, contrast ratios, screen reader support and inclusive UX patterns.',
        price: 40,
        rating: 4.7,
        thumbnail:
          'https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=400&h=300&fit=crop',
        instructor: 'Yemi Adio',
        category: 'design',
        ...PILL_COLORS[11],
      },
      {
        id: 'design-13',
        title: 'User Research Methods',
        description:
          'Interviews, surveys, usability testing and card sorting. Turn research insights into product decisions.',
        price: 65,
        rating: 4.6,
        thumbnail:
          'https://images.unsplash.com/photo-1531538606174-0f90ff5dce83?w=400&h=300&fit=crop',
        instructor: 'Hana Suzuki',
        category: 'design',
        ...PILL_COLORS[12],
      },
      {
        id: 'design-14',
        title: 'Photoshop for UI Designers',
        description:
          'Photo editing, compositing and mockup creation with Photoshop. Essential for any visual designer.',
        price: 44,
        rating: 4.4,
        thumbnail:
          'https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=400&h=300&fit=crop',
        instructor: 'Brett Ellis',
        category: 'design',
        ...PILL_COLORS[13],
      },
      {
        id: 'design-15',
        title: 'Interaction Design Advanced',
        description:
          'Micro-interactions, animation principles and prototyping complex flows in Figma and Framer.',
        price: 79,
        rating: 4.8,
        thumbnail:
          'https://images.unsplash.com/photo-1555421689-d68471e189f2?w=400&h=300&fit=crop',
        instructor: 'Diana Voss',
        category: 'design',
        ...PILL_COLORS[14],
      },
      {
        id: 'design-16',
        title: 'Print Design & Layout',
        description:
          'Brochures, posters, magazines and books. InDesign, grids and print production workflows.',
        price: 38,
        rating: 4.3,
        thumbnail:
          'https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=400&h=300&fit=crop',
        instructor: 'Marco Ricci',
        category: 'design',
        ...PILL_COLORS[15],
      },
      {
        id: 'design-17',
        title: 'Product Design Process',
        description:
          'End-to-end product design from discovery to delivery. How top designers think and ship.',
        price: 95,
        rating: 4.9,
        thumbnail:
          'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=400&h=300&fit=crop',
        instructor: 'Zara Ahmed',
        category: 'design',
        ...PILL_COLORS[16],
      },
      {
        id: 'design-18',
        title: 'Icon Design Masterclass',
        description:
          'Create professional icon sets from scratch. Style consistency, pixel perfection and export for dev.',
        price: 36,
        rating: 4.5,
        thumbnail:
          'https://images.unsplash.com/photo-1512295767273-ac109ac3acfa?w=400&h=300&fit=crop',
        instructor: 'Finn Larsen',
        category: 'design',
        ...PILL_COLORS[17],
      },
      {
        id: 'design-19',
        title: 'Responsive Web Design',
        description:
          'Build fluid layouts that work across all screen sizes. CSS Grid, Flexbox and media queries in depth.',
        price: 42,
        rating: 4.6,
        thumbnail:
          'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=300&fit=crop',
        instructor: 'Tara Flynn',
        category: 'design',
        ...PILL_COLORS[18],
      },
      {
        id: 'design-20',
        title: 'Design Thinking Workshop',
        description:
          'Apply design thinking to solve real business problems. Empathy mapping, ideation and rapid prototyping.',
        price: 58,
        rating: 4.7,
        thumbnail:
          'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop',
        instructor: 'Joel Nkosi',
        category: 'design',
        ...PILL_COLORS[19],
      },
    ],
  },
  {
    id: 'development',
    label: 'Web Development',
    icon: Braces,
    courses: [
      {
        id: 'dev-1',
        title: 'React & TypeScript Complete Guide',
        description:
          'Build production-ready React apps with TypeScript. Hooks, context, routing, testing and deployment.',
        price: 89,
        rating: 4.9,
        thumbnail:
          'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=300&fit=crop',
        instructor: 'David Kim',
        category: 'development',
        ...PILL_COLORS[0],
      },
      {
        id: 'dev-2',
        title: 'Node.js & Express API Development',
        description:
          'Build scalable REST APIs with Node.js and Express. Authentication, databases, testing and deployment.',
        price: 79,
        rating: 4.8,
        thumbnail:
          'https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=400&h=300&fit=crop',
        instructor: 'Rachel Green',
        category: 'development',
        ...PILL_COLORS[1],
      },
      {
        id: 'dev-3',
        title: 'Next.js 14 Full Stack',
        description:
          'Full stack development with Next.js 14. App router, server components, Prisma and deployment on Vercel.',
        price: 99,
        rating: 4.9,
        thumbnail:
          'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=300&fit=crop',
        instructor: 'Alex Morgan',
        category: 'development',
        ...PILL_COLORS[2],
      },
      {
        id: 'dev-4',
        title: 'PostgreSQL for Developers',
        description:
          'Master PostgreSQL from basics to advanced. Queries, indexing, performance tuning and database design.',
        price: 55,
        rating: 4.6,
        thumbnail:
          'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=400&h=300&fit=crop',
        instructor: 'Omar Hassan',
        category: 'development',
        ...PILL_COLORS[3],
      },
      {
        id: 'dev-5',
        title: 'Docker & Kubernetes Fundamentals',
        description:
          'Containerise and orchestrate applications with Docker and Kubernetes. CI/CD pipelines included.',
        price: 85,
        rating: 4.7,
        thumbnail:
          'https://images.unsplash.com/photo-1605745341112-85968b19335b?w=400&h=300&fit=crop',
        instructor: 'Priya Sharma',
        category: 'development',
        ...PILL_COLORS[4],
      },
      {
        id: 'dev-6',
        title: 'JavaScript Algorithms & Data Structures',
        description:
          'Master algorithms and data structures in JavaScript. Ace technical interviews at top tech companies.',
        price: 65,
        rating: 4.8,
        thumbnail:
          'https://images.unsplash.com/photo-1580894894513-541e068a3e2b?w=400&h=300&fit=crop',
        instructor: 'Lisa Chang',
        category: 'development',
        ...PILL_COLORS[5],
      },
      {
        id: 'dev-7',
        title: 'GraphQL API Design',
        description:
          'Design and build GraphQL APIs with Node.js. Queries, mutations, subscriptions and Apollo Server.',
        price: 70,
        rating: 4.5,
        thumbnail:
          'https://images.unsplash.com/photo-1587620962725-abab7fe55159?w=400&h=300&fit=crop',
        instructor: 'Ben Foster',
        category: 'development',
        ...PILL_COLORS[6],
      },
      {
        id: 'dev-8',
        title: 'AWS Cloud Practitioner',
        description:
          'Get certified as an AWS Cloud Practitioner. Core services, security, architecture and pricing models.',
        price: 95,
        rating: 4.7,
        thumbnail:
          'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=300&fit=crop',
        instructor: 'Fatima Al-Rashid',
        category: 'development',
        ...PILL_COLORS[7],
      },
      {
        id: 'dev-9',
        title: 'Vue.js 3 Complete Course',
        description:
          'Build reactive web apps with Vue 3. Composition API, Pinia state management and Nuxt integration.',
        price: 72,
        rating: 4.6,
        thumbnail:
          'https://images.unsplash.com/photo-1618477388954-7852f32655ec?w=400&h=300&fit=crop',
        instructor: 'Leo Dubois',
        category: 'development',
        ...PILL_COLORS[8],
      },
      {
        id: 'dev-10',
        title: 'Python Django REST Framework',
        description:
          'Build powerful REST APIs with Django and DRF. Authentication, serializers, permissions and deployment.',
        price: 80,
        rating: 4.8,
        thumbnail:
          'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400&h=300&fit=crop',
        instructor: 'Amina Diallo',
        category: 'development',
        ...PILL_COLORS[9],
      },
      {
        id: 'dev-11',
        title: 'Redis & Caching Strategies',
        description:
          'Speed up your applications with Redis. Caching patterns, pub/sub, queues and session management.',
        price: 60,
        rating: 4.5,
        thumbnail:
          'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=300&fit=crop',
        instructor: 'Tom Brandt',
        category: 'development',
        ...PILL_COLORS[10],
      },
      {
        id: 'dev-12',
        title: 'Testing with Jest & Cypress',
        description:
          'Unit, integration and end-to-end testing for JavaScript apps. TDD, mocking and CI integration.',
        price: 58,
        rating: 4.7,
        thumbnail:
          'https://images.unsplash.com/photo-1580894732444-8ecded7900cd?w=400&h=300&fit=crop',
        instructor: 'Keiko Mori',
        category: 'development',
        ...PILL_COLORS[11],
      },
      {
        id: 'dev-13',
        title: 'Web Security Fundamentals',
        description:
          'OWASP Top 10, XSS, CSRF, SQL injection and how to defend against common web vulnerabilities.',
        price: 75,
        rating: 4.8,
        thumbnail:
          'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=400&h=300&fit=crop',
        instructor: 'Ivan Petrov',
        category: 'development',
        ...PILL_COLORS[12],
      },
      {
        id: 'dev-14',
        title: 'Svelte & SvelteKit',
        description:
          'Build blazing fast web apps with Svelte. No virtual DOM, reactive declarations and SvelteKit routing.',
        price: 65,
        rating: 4.6,
        thumbnail:
          'https://images.unsplash.com/photo-1593720213428-28a5b9e94613?w=400&h=300&fit=crop',
        instructor: 'Carla Mendes',
        category: 'development',
        ...PILL_COLORS[13],
      },
      {
        id: 'dev-15',
        title: 'Microservices Architecture',
        description:
          'Design and build microservices with Node.js. Service discovery, API gateways, event sourcing and CQRS.',
        price: 99,
        rating: 4.7,
        thumbnail:
          'https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=300&fit=crop',
        instructor: 'Raj Patel',
        category: 'development',
        ...PILL_COLORS[14],
      },
      {
        id: 'dev-16',
        title: 'MongoDB & Mongoose',
        description:
          'NoSQL database design with MongoDB. Aggregation pipelines, indexing, Mongoose ODM and Atlas cloud.',
        price: 55,
        rating: 4.5,
        thumbnail:
          'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=400&h=300&fit=crop',
        instructor: 'Fiona Walsh',
        category: 'development',
        ...PILL_COLORS[15],
      },
      {
        id: 'dev-17',
        title: 'Web Performance Optimisation',
        description:
          'Core Web Vitals, lazy loading, code splitting, CDN and caching strategies for fast web apps.',
        price: 68,
        rating: 4.8,
        thumbnail:
          'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop',
        instructor: 'Chris Obi',
        category: 'development',
        ...PILL_COLORS[16],
      },
      {
        id: 'dev-18',
        title: 'Serverless with AWS Lambda',
        description:
          'Build scalable serverless apps with AWS Lambda, API Gateway, DynamoDB and S3.',
        price: 85,
        rating: 4.6,
        thumbnail:
          'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=300&fit=crop',
        instructor: 'Noa Cohen',
        category: 'development',
        ...PILL_COLORS[17],
      },
      {
        id: 'dev-19',
        title: 'Remix Full Stack Framework',
        description:
          'Build full stack React apps with Remix. Loaders, actions, nested routing and progressive enhancement.',
        price: 76,
        rating: 4.7,
        thumbnail:
          'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=300&fit=crop',
        instructor: 'Hannah Blake',
        category: 'development',
        ...PILL_COLORS[18],
      },
      {
        id: 'dev-20',
        title: 'CSS Animations & Transitions',
        description:
          'Create smooth, performant animations with pure CSS. Keyframes, transforms, scroll animations and GSAP.',
        price: 42,
        rating: 4.5,
        thumbnail:
          'https://images.unsplash.com/photo-1547658719-da2b51169166?w=400&h=300&fit=crop',
        instructor: 'Eli Torres',
        category: 'development',
        ...PILL_COLORS[19],
      },
    ],
  },
  {
    id: 'business',
    label: 'Business & Finance',
    icon: TrendingUp,
    courses: [
      {
        id: 'biz-1',
        title: 'Digital Marketing Masterclass',
        description:
          'Complete digital marketing covering SEO, social media, email marketing, paid ads and analytics.',
        price: 59,
        rating: 4.7,
        thumbnail:
          'https://images.unsplash.com/photo-1432888622747-4eb9a8f5a07d?w=400&h=300&fit=crop',
        instructor: 'Jessica Lane',
        category: 'business',
        ...PILL_COLORS[0],
      },
      {
        id: 'biz-2',
        title: 'Financial Modelling in Excel',
        description:
          'Build professional financial models from scratch. DCF valuation, LBO modelling and scenario analysis.',
        price: 79,
        rating: 4.8,
        thumbnail:
          'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=400&h=300&fit=crop',
        instructor: 'Robert Clarke',
        category: 'business',
        ...PILL_COLORS[1],
      },
      {
        id: 'biz-3',
        title: 'Product Management Fundamentals',
        description:
          'Learn how to define, build and launch products. Roadmapping, prioritisation and stakeholder management.',
        price: 89,
        rating: 4.6,
        thumbnail:
          'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop',
        instructor: 'Amara Osei',
        category: 'business',
        ...PILL_COLORS[2],
      },
      {
        id: 'biz-4',
        title: 'Entrepreneurship: Start Your Business',
        description:
          'From idea to launch. Business model canvas, market research, funding strategies and growth hacking.',
        price: 49,
        rating: 4.5,
        thumbnail:
          'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop',
        instructor: 'Marcus Bell',
        category: 'business',
        ...PILL_COLORS[3],
      },
      {
        id: 'biz-5',
        title: 'Content Marketing Strategy',
        description:
          'Create and distribute content that drives traffic and converts. Blog, video, podcast and social strategy.',
        price: 45,
        rating: 4.7,
        thumbnail:
          'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=400&h=300&fit=crop',
        instructor: 'Chloe Martin',
        category: 'business',
        ...PILL_COLORS[4],
      },
      {
        id: 'biz-6',
        title: 'Sales Fundamentals & Negotiation',
        description:
          'Master the art of selling. Prospecting, objection handling, closing deals and building long-term relationships.',
        price: 55,
        rating: 4.4,
        thumbnail:
          'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=300&fit=crop',
        instructor: 'Daniel Park',
        category: 'business',
        ...PILL_COLORS[5],
      },
      {
        id: 'biz-7',
        title: 'Excel & Data Analysis',
        description:
          'From basic formulas to advanced pivot tables and dashboards. Essential for any business professional.',
        price: 35,
        rating: 4.6,
        thumbnail:
          'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop',
        instructor: 'Yuki Tanaka',
        category: 'business',
        ...PILL_COLORS[6],
      },
      {
        id: 'biz-8',
        title: 'Project Management with Agile',
        description:
          'Lead projects using Agile and Scrum. Sprint planning, retrospectives, Jira and stakeholder communication.',
        price: 65,
        rating: 4.8,
        thumbnail:
          'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=300&fit=crop',
        instructor: 'Sophie Williams',
        category: 'business',
        ...PILL_COLORS[7],
      },
      {
        id: 'biz-9',
        title: 'Accounting for Non-Accountants',
        description:
          'Understand financial statements, balance sheets, P&L and cash flow for business decision making.',
        price: 42,
        rating: 4.5,
        thumbnail:
          'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=400&h=300&fit=crop',
        instructor: 'Ola Bergstrom',
        category: 'business',
        ...PILL_COLORS[8],
      },
      {
        id: 'biz-10',
        title: 'Brand Strategy & Positioning',
        description:
          'Define your brand purpose, voice and positioning. Stand out in competitive markets and build loyalty.',
        price: 68,
        rating: 4.7,
        thumbnail:
          'https://images.unsplash.com/photo-1626785774573-4b799315345d?w=400&h=300&fit=crop',
        instructor: 'Temi Okafor',
        category: 'business',
        ...PILL_COLORS[9],
      },
      {
        id: 'biz-11',
        title: 'E-commerce with Shopify',
        description:
          'Launch and grow your online store with Shopify. Product listings, payment, shipping and marketing.',
        price: 50,
        rating: 4.6,
        thumbnail:
          'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop',
        instructor: 'Lena Hoffmann',
        category: 'business',
        ...PILL_COLORS[10],
      },
      {
        id: 'biz-12',
        title: 'LinkedIn & Personal Branding',
        description:
          'Build a powerful professional presence on LinkedIn. Content strategy, networking and lead generation.',
        price: 30,
        rating: 4.5,
        thumbnail:
          'https://images.unsplash.com/photo-1611944212129-29977ae1398c?w=400&h=300&fit=crop',
        instructor: 'James Osei',
        category: 'business',
        ...PILL_COLORS[11],
      },
      {
        id: 'biz-13',
        title: 'Business Analytics with Power BI',
        description:
          'Transform raw data into business insights. Dashboards, DAX formulas and data modelling in Power BI.',
        price: 72,
        rating: 4.8,
        thumbnail:
          'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop',
        instructor: 'Mei Chen',
        category: 'business',
        ...PILL_COLORS[12],
      },
      {
        id: 'biz-14',
        title: 'Venture Capital & Startup Funding',
        description:
          'How venture capital works. Term sheets, cap tables, due diligence and pitching to investors.',
        price: 95,
        rating: 4.7,
        thumbnail:
          'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=400&h=300&fit=crop',
        instructor: 'Andre Blanc',
        category: 'business',
        ...PILL_COLORS[13],
      },
      {
        id: 'biz-15',
        title: 'Google Ads Masterclass',
        description:
          'Run profitable Google Ads campaigns. Search, display, shopping and remarketing from zero to expert.',
        price: 60,
        rating: 4.6,
        thumbnail:
          'https://images.unsplash.com/photo-1432888622747-4eb9a8f5a07d?w=400&h=300&fit=crop',
        instructor: 'Kemi Adeyemi',
        category: 'business',
        ...PILL_COLORS[14],
      },
      {
        id: 'biz-16',
        title: 'Operations & Supply Chain',
        description:
          'Optimise business operations and supply chain management. Lean, Six Sigma and logistics fundamentals.',
        price: 78,
        rating: 4.4,
        thumbnail:
          'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=400&h=300&fit=crop',
        instructor: 'Hiroshi Abe',
        category: 'business',
        ...PILL_COLORS[15],
      },
      {
        id: 'biz-17',
        title: 'Copywriting That Converts',
        description:
          'Write compelling copy for ads, landing pages, emails and social media. Psychology of persuasion included.',
        price: 48,
        rating: 4.8,
        thumbnail:
          'https://images.unsplash.com/photo-1455390582262-044cdead277a?w=400&h=300&fit=crop',
        instructor: 'Kate Sullivan',
        category: 'business',
        ...PILL_COLORS[16],
      },
      {
        id: 'biz-18',
        title: 'Human Resources Management',
        description:
          'Recruiting, onboarding, performance management and employee relations for modern HR professionals.',
        price: 62,
        rating: 4.5,
        thumbnail:
          'https://images.unsplash.com/photo-1573497620053-ea5300f94f21?w=400&h=300&fit=crop',
        instructor: 'Bukola Ade',
        category: 'business',
        ...PILL_COLORS[17],
      },
      {
        id: 'biz-19',
        title: 'Data-Driven Decision Making',
        description:
          'Use data to drive strategy. KPIs, A/B testing, cohort analysis and building a data culture.',
        price: 70,
        rating: 4.7,
        thumbnail:
          'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop',
        instructor: 'Paulo Gomes',
        category: 'business',
        ...PILL_COLORS[18],
      },
      {
        id: 'biz-20',
        title: 'Real Estate Investment Basics',
        description:
          'Evaluate and invest in real estate. ROI analysis, financing, property types and market research.',
        price: 85,
        rating: 4.6,
        thumbnail:
          'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=400&h=300&fit=crop',
        instructor: 'Adaeze Eze',
        category: 'business',
        ...PILL_COLORS[19],
      },
    ],
  },
  {
    id: 'personal',
    label: 'Personal Development',
    icon: Brain,
    courses: [
      {
        id: 'personal-1',
        title: 'Public Speaking & Presentation Skills',
        description:
          'Overcome fear of public speaking. Structure compelling talks, control nerves and command any room.',
        price: 39,
        rating: 4.8,
        thumbnail:
          'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=400&h=300&fit=crop',
        instructor: 'Aaron Phillips',
        category: 'personal',
        ...PILL_COLORS[0],
      },
      {
        id: 'personal-2',
        title: 'Mindfulness & Stress Management',
        description:
          'Evidence-based mindfulness techniques to reduce stress, improve focus and build emotional resilience.',
        price: 29,
        rating: 4.9,
        thumbnail:
          'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop',
        instructor: 'Maya Patel',
        category: 'personal',
        ...PILL_COLORS[1],
      },
      {
        id: 'personal-3',
        title: 'Speed Reading & Memory Techniques',
        description:
          'Triple your reading speed and improve retention. Memory palaces, spaced repetition and active recall.',
        price: 25,
        rating: 4.5,
        thumbnail:
          'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=300&fit=crop',
        instructor: "Kevin O'Brien",
        category: 'personal',
        ...PILL_COLORS[2],
      },
      {
        id: 'personal-4',
        title: 'Writing: Communicate With Clarity',
        description:
          'Write clearly and persuasively in any context. Emails, reports, essays and creative writing covered.',
        price: 35,
        rating: 4.6,
        thumbnail:
          'https://images.unsplash.com/photo-1455390582262-044cdead277a?w=400&h=300&fit=crop',
        instructor: 'Grace Thompson',
        category: 'personal',
        ...PILL_COLORS[3],
      },
      {
        id: 'personal-5',
        title: 'Time Management & Productivity',
        description:
          'Systems for peak productivity. Deep work, time blocking, GTD method and eliminating distractions.',
        price: 30,
        rating: 4.7,
        thumbnail:
          'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=400&h=300&fit=crop',
        instructor: 'Lucas Ferreira',
        category: 'personal',
        ...PILL_COLORS[4],
      },
      {
        id: 'personal-6',
        title: 'Emotional Intelligence at Work',
        description:
          'Develop self-awareness, empathy and social skills. Lead better, communicate effectively and resolve conflict.',
        price: 40,
        rating: 4.8,
        thumbnail:
          'https://images.unsplash.com/photo-1573497620053-ea5300f94f21?w=400&h=300&fit=crop',
        instructor: 'Nadia Rousseau',
        category: 'personal',
        ...PILL_COLORS[5],
      },
      {
        id: 'personal-7',
        title: 'Critical Thinking & Problem Solving',
        description:
          'Sharpen analytical and logical thinking. Frameworks for breaking down complex problems and making decisions.',
        price: 35,
        rating: 4.6,
        thumbnail:
          'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=300&fit=crop',
        instructor: 'Samuel Adeyemi',
        category: 'personal',
        ...PILL_COLORS[6],
      },
      {
        id: 'personal-8',
        title: 'Leadership Essentials',
        description:
          'Core leadership skills for new and aspiring managers. Delegation, feedback, team building and vision setting.',
        price: 55,
        rating: 4.7,
        thumbnail:
          'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&h=300&fit=crop',
        instructor: 'Isabelle Moreau',
        category: 'personal',
        ...PILL_COLORS[7],
      },
      {
        id: 'personal-9',
        title: 'Habit Formation & Behaviour Change',
        description:
          'Science-backed strategies to build good habits and break bad ones. Atomic habits principles applied.',
        price: 28,
        rating: 4.8,
        thumbnail:
          'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=400&h=300&fit=crop',
        instructor: 'Chioma Nwosu',
        category: 'personal',
        ...PILL_COLORS[8],
      },
      {
        id: 'personal-10',
        title: 'Finance for Beginners',
        description:
          'Personal budgeting, saving, investing and debt management. Build financial security from scratch.',
        price: 32,
        rating: 4.7,
        thumbnail:
          'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=300&fit=crop',
        instructor: 'Tom Reeves',
        category: 'personal',
        ...PILL_COLORS[9],
      },
      {
        id: 'personal-11',
        title: 'Negotiation Skills',
        description:
          'Win-win negotiation strategies for salary, deals and conflict resolution. Harvard method explained.',
        price: 45,
        rating: 4.6,
        thumbnail:
          'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=300&fit=crop',
        instructor: 'Ama Sarpong',
        category: 'personal',
        ...PILL_COLORS[10],
      },
      {
        id: 'personal-12',
        title: 'Journalling for Growth',
        description:
          'Use journalling as a tool for self-reflection, goal setting, creativity and mental clarity.',
        price: 18,
        rating: 4.5,
        thumbnail:
          'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop',
        instructor: 'Petra Novak',
        category: 'personal',
        ...PILL_COLORS[11],
      },
      {
        id: 'personal-13',
        title: 'Networking That Works',
        description:
          'Build a powerful professional network. Online and offline strategies, follow-up and relationship nurturing.',
        price: 35,
        rating: 4.6,
        thumbnail:
          'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&h=300&fit=crop',
        instructor: 'Dele Okonkwo',
        category: 'personal',
        ...PILL_COLORS[12],
      },
      {
        id: 'personal-14',
        title: 'Stress-Free Parenting',
        description:
          'Evidence-based parenting strategies to raise confident, resilient children while managing your own wellbeing.',
        price: 38,
        rating: 4.8,
        thumbnail:
          'https://images.unsplash.com/photo-1476703993599-0035a21b17a9?w=400&h=300&fit=crop',
        instructor: 'Sara Lindqvist',
        category: 'personal',
        ...PILL_COLORS[13],
      },
      {
        id: 'personal-15',
        title: 'Sleep Science & Optimisation',
        description:
          'Improve sleep quality with science-backed techniques. Circadian rhythms, sleep hygiene and recovery.',
        price: 22,
        rating: 4.7,
        thumbnail:
          'https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?w=400&h=300&fit=crop',
        instructor: 'Dr. Nina West',
        category: 'personal',
        ...PILL_COLORS[14],
      },
      {
        id: 'personal-16',
        title: 'Creativity & Innovation',
        description:
          'Unlock your creative potential. Brainstorming techniques, creative blocks, flow states and idea generation.',
        price: 30,
        rating: 4.5,
        thumbnail:
          'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=400&h=300&fit=crop',
        instructor: 'Felix Owusu',
        category: 'personal',
        ...PILL_COLORS[15],
      },
      {
        id: 'personal-17',
        title: 'Confident Body Language',
        description:
          'Non-verbal communication, posture, eye contact and presence for interviews, meetings and daily life.',
        price: 25,
        rating: 4.6,
        thumbnail:
          'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=400&h=300&fit=crop',
        instructor: 'Yewande Bello',
        category: 'personal',
        ...PILL_COLORS[16],
      },
      {
        id: 'personal-18',
        title: 'Goal Setting & Achievement',
        description:
          'OKRs, SMART goals and vision boards. Turn big dreams into actionable plans with clear milestones.',
        price: 27,
        rating: 4.7,
        thumbnail:
          'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=400&h=300&fit=crop',
        instructor: 'Max Fischer',
        category: 'personal',
        ...PILL_COLORS[17],
      },
      {
        id: 'personal-19',
        title: 'Dealing with Difficult People',
        description:
          'Handle conflict, passive aggression and toxic behaviour with confidence. Workplace and personal scenarios.',
        price: 33,
        rating: 4.5,
        thumbnail:
          'https://images.unsplash.com/photo-1573497620053-ea5300f94f21?w=400&h=300&fit=crop',
        instructor: 'Aditi Nair',
        category: 'personal',
        ...PILL_COLORS[18],
      },
      {
        id: 'personal-20',
        title: 'Building Confidence & Self-Esteem',
        description:
          'Overcome self-doubt, imposter syndrome and limiting beliefs. Build unshakeable confidence from within.',
        price: 36,
        rating: 4.9,
        thumbnail:
          'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=300&fit=crop',
        instructor: 'Tolu Adebayo',
        category: 'personal',
        ...PILL_COLORS[19],
      },
    ],
  },
];
