import type { TravelGuide } from '../types';

export const travelGuides: TravelGuide[] = [
  {
    id: 'guide-1',
    slug: 'malaysian-tour-guide-best-times-for-a-perfect-vacation',
    title: 'Malaysian Tour Guide: Best Times for a Perfect Vacation',
    category: 'Malaysia Holiday Planning',
    excerpt:
      'Discover the ideal months to visit Malaysia, what to expect in each season, and how to plan your trip around the best weather and festivals.',
    image: 'https://images.unsplash.com/photo-1596422846543-75c6fc197f07?w=800&q=80',
    readTime: '5 min read',
    featured: true,
  },
  {
    id: 'guide-2',
    slug: 'visa-free-destinations-from-india',
    title: 'Top Visa-Free Destinations for Indian Travellers',
    category: 'Visa-Free Destinations',
    excerpt:
      'Planning a quick international getaway? Here are the best visa-free and visa-on-arrival destinations you can fly to from Chennai.',
    image: 'https://images.unsplash.com/photo-1488085061387-422e29b40080?w=800&q=80',
    readTime: '4 min read',
    featured: true,
  },
  {
    id: 'guide-3',
    slug: 'singapore-style-guide-best-times-things-to-do',
    title: 'Singapore In Style: Your Guide to The Best Times to Travel',
    category: 'Destination Guides',
    excerpt:
      'Everything you need to know about visiting Singapore — when to go, what to see, and how to make the most of your trip.',
    image: 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=800&q=80',
    readTime: '6 min read',
    featured: true,
  },
  {
    id: 'guide-4',
    slug: 'first-international-trip-from-chennai',
    title: 'Planning Your First International Trip from Chennai',
    category: 'Tamil Traveller Guides',
    excerpt:
      'A practical guide for first-time international travellers from Tamil Nadu — from choosing a destination to packing essentials.',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80',
    readTime: '7 min read',
    featured: false,
  },
];

export const getFeaturedGuides = (): TravelGuide[] =>
  travelGuides.filter((g) => g.featured);

export const getGuidesByCategory = (category: string): TravelGuide[] =>
  travelGuides.filter((g) => g.category === category);
