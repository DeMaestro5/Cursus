export interface TestimonialSlide {
  id: number;
  image: string;
  name: string;
  testimonial: string;
  rating: number;
  reviews: number;
  at: string;
}

export const TESTIMONIAL_SLIDES: TestimonialSlide[] = [
  {
    id: 2,
    image: '/src/assets/landing/test5.jpg',
    name: 'Jennifer Rose',
    testimonial:
      "Thank you so much for your help. It's exactly what I've been looking for. Cursus is exactly what our business has been lacking.",
    rating: 5,
    reviews: 12,
    at: 'Yelp',
  },
  {
    id: 3,
    image: '/src/assets/landing/test2.jpg',
    name: 'Marcus Bell',
    testimonial:
      "I've tried many learning platforms but Cursus stands out completely. The instructors are world-class and the content is always up to date. My career changed after just three months.",
    rating: 5,
    reviews: 8,
    at: 'Google',
  },
  {
    id: 4,
    image: '/src/assets/landing/test3.jpg',
    name: 'Nadia Rousseau',
    testimonial:
      'Cursus helped me transition from a completely unrelated field into tech. The structured curriculum and mentor support made all the difference. I landed my first dev job within six months.',
    rating: 5,
    reviews: 21,
    at: 'Trustpilot',
  },
  {
    id: 5,
    image: '/src/assets/landing/test1.jpg',
    name: 'Samuel Adeyemi',
    testimonial:
      "The quality of courses here is unmatched. I've recommended Cursus to everyone on my team. It's not just learning — it's a complete transformation of how you think about problems.",
    rating: 4,
    reviews: 15,
    at: 'Google',
  },
  {
    id: 6,
    image: '/src/assets/landing/test4.jpg',
    name: 'Hana Suzuki',
    testimonial:
      'I was skeptical at first but Cursus exceeded every expectation. The platform is intuitive, the content is deep, and the community is incredibly supportive. Worth every penny.',
    rating: 5,
    reviews: 9,
    at: 'Yelp',
  },
];
