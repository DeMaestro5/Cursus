export type NewsCategory = 'NEWS' | 'PRESS RELEASE';

export interface NewsItem {
  id: number;
  thumbnail: string;
  category: NewsCategory;
  title: string;
  description: string;
}

export const FEATURED_NEWS: NewsItem = {
  id: 1,
  thumbnail:
    'https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?w=800',
  category: 'NEWS',
  title:
    'Class adds $30 million to its balance sheet for a Zoom-friendly edtech solution',
  description:
    'Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively with Zoom video conferencing and has raised a total of $30 million to expand its platform.',
};

export const COMPACT_NEWS: NewsItem[] = [
  {
    id: 2,
    thumbnail:
      'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400',
    category: 'PRESS RELEASE',
    title:
      'Class Technologies Inc. Closes $30 Million Series A Financing to Meet High Demand',
    description:
      "Class Technologies Inc., the company that created Class, the world's first ed-tech platform built on top of Zoom, today announced it has closed $30 million in Series A financing.",
  },
  {
    id: 3,
    thumbnail:
      'https://images.unsplash.com/photo-1610484826967-09c5720778c7?w=400',
    category: 'NEWS',
    title:
      "Zoom's earliest investors are betting millions on a better Zoom for schools",
    description:
      'Zoom was never created to be a consumer product. Nonetheless, the pandemic made it one. Now investors are betting that the next wave of edtech will be built directly on top of it.',
  },
  {
    id: 4,
    thumbnail:
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400',
    category: 'NEWS',
    title:
      'Former Blackboard CEO Raises $16M to Bring LMS Features to Zoom Classrooms',
    description:
      'This year, investors have reaped big financial returns from betting on Zoom. Now some of those same investors are doubling down on tools built around the video conferencing platform.',
  },
];
