export interface Testimonial {
  id: string;
  name: string;
  destination: string;
  quote: string;
  image?: string;
  rating?: number;
  tripDate?: string;
}

export interface TravelGuide {
  id: string;
  slug: string;
  title: string;
  category: TravelGuideCategory;
  excerpt: string;
  image: string;
  readTime?: string;
  publishDate?: string;
  featured?: boolean;
}

export type TravelGuideCategory =
  | 'Malaysia Holiday Planning'
  | 'Visa-Free Destinations'
  | 'Tamil Traveller Guides'
  | 'Real Trip Recaps'
  | 'Destination Guides';
