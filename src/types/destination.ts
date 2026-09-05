export interface DestinationExperience {
  title: string;
  description: string;
  image: string;
}

export interface DestinationPlace {
  name: string;
  description?: string;
  image?: string;
}

export interface TravelInfo {
  visa?: string;
  currency?: string;
  language?: string;
  bestTime?: string;
  flightTime?: string;
  timeZone?: string;
  electricity?: string;
  tips?: string[];
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface Destination {
  id: string;
  slug: string;
  name: string;
  heroImage: string;
  heroTagline: string;
  heroSubtitle: string;
  heroDescription: string;
  emotionalStatement: string;
  shortDescription: string;
  whyVisit: {
    title: string;
    description: string;
    highlights: string[];
  };
  places: DestinationPlace[];
  experiences: DestinationExperience[];
  travelInfo: TravelInfo;
  faqs: FAQItem[];
  seo: {
    title: string;
    description: string;
    keywords: string[];
  };
  /** Accent color for this destination (CSS variable name) */
  accentColor?: string;
  /** Gallery images for editorial sections */
  galleryImages: string[];
}
