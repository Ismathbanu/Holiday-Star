import type { Testimonial } from '../types';

export const testimonials: Testimonial[] = [
  {
    id: 'review-1',
    name: 'Boovisha Rajan',
    destination: 'Malaysia',
    tripDate: 'Jan 2025',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&q=80',
    quote:
      'If you are planning an international trip you can blindly choose Holiday Star. They organised everything — airport pickup, drop, city tours — and I had plenty of time to enjoy each place.',
    rating: 5,
  },
  {
    id: 'review-2',
    name: 'Arun Prakash',
    destination: 'Thailand',
    tripDate: 'Nov 2024',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80',
    quote:
      'Excellent service and great communication. Our Thailand trip was well planned and hassle free. Highly recommend!',
    rating: 5,
  },
  {
    id: 'review-3',
    name: 'Priya Nair',
    destination: 'Dubai',
    tripDate: 'Sep 2024',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&q=80',
    quote:
      'Amazing experience in Dubai! The team was very supportive throughout the trip. Will definitely travel again with Holiday Star.',
    rating: 5,
  },
  {
    id: 'review-4',
    name: 'Ramesh Kumar',
    destination: 'Singapore',
    tripDate: 'Aug 2024',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80',
    quote:
      'Our family trip to Singapore was perfectly organised. Thank you for making our holiday so special!',
    rating: 5,
  },
  {
    id: 'review-5',
    name: 'Meera Krishnan',
    destination: 'Vietnam',
    tripDate: 'Dec 2024',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&q=80',
    quote:
      'The Da Nang and Hanoi tour was spectacular. From Golden Bridge to Halong Bay cruises, every single voucher and guide was punctual and helpful.',
    rating: 5,
  },
  {
    id: 'review-6',
    name: 'Karthik Sundaram',
    destination: 'Sri Lanka',
    tripDate: 'Oct 2024',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=80',
    quote:
      'Our honeymoon in Sri Lanka was unforgettable. The scenic train to Ella and tea plantation resort arranged by Holiday Star was pure luxury.',
    rating: 5,
  },
];

export const getTestimonialsByDestination = (destination: string): Testimonial[] =>
  testimonials.filter((t) => t.destination.toLowerCase() === destination.toLowerCase());

