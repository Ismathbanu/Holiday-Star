export interface Package {
  id: string;
  slug: string;
  destinationId: string;
  destinationName: string;
  name: string;
  duration: string;
  nights: number;
  days: number;
  positioning: string;
  description?: string;
  highlights: string[];
  inclusions?: string[];
  exclusions?: string[];
  image: string;
  /** Only show price if verified */
  startingPrice?: number;
  priceLabel?: string;
  travelStyle?: TravelStyle[];
  travellingWith?: TravellingWith[];
}

export type TravelStyle =
  | 'adventure'
  | 'relaxation'
  | 'cultural'
  | 'romantic'
  | 'family'
  | 'luxury'
  | 'budget';

export type TravellingWith =
  | 'solo'
  | 'couple'
  | 'family'
  | 'group'
  | 'friends';
