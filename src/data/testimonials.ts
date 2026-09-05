import type { Testimonial } from '../types';

export const testimonials: Testimonial[] = [
  {
    id: 'review-1',
    name: 'Boovisha Rajan',
    destination: 'Malaysia',
    quote:
      'If you are planning an international trip you can blindly choose Holiday Star. They organised everything — airport pickup, drop, city tours — and I had plenty of time to enjoy each place.',
    rating: 5,
  },
  {
    id: 'review-2',
    name: 'Priya Ramesh',
    destination: 'Malaysia',
    quote:
      'Our family trip to Malaysia was perfectly planned. The kids loved Genting and we enjoyed every moment in KL. Thank you Holiday Star for making it stress-free!',
    rating: 5,
  },
  {
    id: 'review-3',
    name: 'Karthik Sundaram',
    destination: 'Thailand',
    quote:
      'From airport transfers to hotel stays and sightseeing, everything was well-coordinated. The Bangkok and Phuket combination was amazing. Will definitely book again.',
    rating: 5,
  },
  {
    id: 'review-4',
    name: 'Meera Krishnan',
    destination: 'Singapore',
    quote:
      'We had a wonderful time in Singapore. The itinerary was well-planned and we didn\'t miss any major attraction. Holiday Star made our first international trip memorable.',
    rating: 5,
  },
  {
    id: 'review-5',
    name: 'Arun Prakash',
    destination: 'Dubai',
    quote:
      'The Dubai trip exceeded our expectations. Desert safari, Burj Khalifa, and the dhow cruise were highlights. Excellent planning by the Holiday Star team.',
    rating: 5,
  },
];

export const getTestimonialsByDestination = (destination: string): Testimonial[] =>
  testimonials.filter((t) => t.destination.toLowerCase() === destination.toLowerCase());
