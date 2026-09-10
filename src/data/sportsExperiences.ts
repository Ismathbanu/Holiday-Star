export interface SportsExperience {
  id: string;
  title: string;
  category: string;
  date?: string;
  experienceType?: string;
  distanceTags?: string[];
  image: string;
  statusBadge: string;
  highlights: string[];
  description: string;
  inclusions?: string[];
}

export const sportsTrustBenefits = [
  {
    id: 'curated',
    title: 'Curated Experiences',
    desc: 'Handcrafted itineraries around premier sporting events',
    icon: 'Trophy',
  },
  {
    id: 'support',
    title: 'Expert Support',
    desc: 'Dedicated on-ground managers & mechanical crews',
    icon: 'Headphones',
  },
  {
    id: 'hassle-free',
    title: 'Hassle-Free Travel',
    desc: 'Flights, visa, bike transport & VIP passes covered',
    icon: 'Plane',
  },
  {
    id: 'passion',
    title: 'Passion for Sports',
    desc: 'Built by sports enthusiasts for passionate travellers',
    icon: 'Flame',
  },
  {
    id: 'memorable',
    title: 'Memorable Journeys',
    desc: 'Unforgettable moments both trackside and beyond',
    icon: 'Sparkles',
  },
];

export const pastSportsExperiences: SportsExperience[] = [
  {
    id: 'lekas-night-ride',
    title: 'LEKAS HIGHWAY NIGHT RIDE',
    category: 'Malaysia | Cycling',
    date: '9–13 October 2025',
    experienceType: 'Sports Tourism Experience',
    distanceTags: ['105 KM', '78 KM'],
    image: '/images/sports/sports_card_lekas_night_ride.jpg',
    statusBadge: 'PAST EVENT / COMPLETED',
    highlights: [
      'International cycling event',
      'Hotel accommodation',
      'Group cycling experience',
      'Sightseeing',
      'Cycle & bike logistics',
      'Mechanical support',
    ],
    description:
      'Experience Malaysia’s flagship nocturnal cycling extravaganza on the fully illuminated Kajang–Seremban Highway (LEKAS). Enjoy completely car-free highway riding under the night stars with comprehensive mechanical backing, luggage transfers, and premium hotel stays in Kuala Lumpur.',
    inclusions: [
      'Official LEKAS Night Ride entry slot & bib',
      '4 nights in 4-star Kuala Lumpur hotel with breakfast',
      'Airport & event day transfers with bike carriers',
      'Dedicated mechanics & spare parts support',
      'Post-ride recovery meal & city celebration dinner',
    ],
  },
  {
    id: 'motogp-malaysia',
    title: 'MOTOGP MALAYSIA 2025',
    category: 'Sepang International Circuit | Motorsport',
    date: '24–26 October 2025',
    experienceType: 'VIP Racing Experience',
    image: '/images/sports/sports_card_motogp_sepang.jpg',
    statusBadge: 'PAST EVENT / COMPLETED',
    highlights: [
      'Official MotoGP race access',
      'Airport / hotel / circuit transfers',
      '4D/3N stay',
      'Dedicated tour support',
      'Hotel & breakfast',
      'Group, private & luxury options',
    ],
    description:
      'Feel the deafening roar of 300+ km/h MotoGP prototypes cornering at Sepang International Circuit. Includes premier grandstand or VIP Village paddock hospitality, meet-and-greets, luxury transfers, and curated night experiences in Kuala Lumpur.',
    inclusions: [
      'Official 3-Day Sepang MotoGP ticket (Main Grandstand / Paddock)',
      '3 nights accommodation at selected 4★ or 5★ hotel',
      'Daily circuit transfers in private air-conditioned coach',
      'Official rider merchandise gift pack',
      'Holiday Star tour manager escort throughout',
    ],
  },
  {
    id: 'penang-cycling-tour',
    title: 'PENANG CYCLING TOUR 2026',
    category: 'Penang, Malaysia | Cycling',
    date: '2–4 January 2026',
    experienceType: 'Cycling Experience',
    image: '/images/sports/sports_card_penang_cycling.jpg',
    statusBadge: 'PAST EVENT / COMPLETED',
    highlights: [
      'International cycling event',
      'Hotel accommodation',
      'Penang city exploration',
      'Transfers',
      'Event registration & kit',
      'Cycling community experience',
    ],
    description:
      'Ride across Penang’s spectacular coastal bridges, winding hill passes, and UNESCO World Heritage streets. Combines exhilarating road cycling with Penang’s world-renowned culinary heritage and beachfront resort relaxation.',
    inclusions: [
      'Official Penang cycling event entry & finisher medal',
      '3 nights resort accommodation in Batu Ferringhi / George Town',
      'Luggage & bike box transport between hotel and start line',
      'Guided culinary heritage tour of George Town',
      'Support vehicle with hydration, nutrition & tools',
    ],
  },
  {
    id: 'malaysia-cycling-expedition',
    title: 'MALAYSIA CYCLING EXPEDITION',
    category: 'Johor → Malacca → Port Dickson → Kuala Lumpur → LEKAS',
    date: '6–13 September | 6 Nights / 7 Days',
    experienceType: 'Cycling Expedition',
    image: '/images/sports/sports_card_cycling_expedition.jpg',
    statusBadge: 'PAST EVENT / COMPLETED',
    highlights: [
      'International flight coordination',
      'Hydration & mechanical assistance',
      'LEKAS Night Ride',
      'Bike logistics',
      'Official jersey & goodies',
      'Accommodation & meals',
      'Dedicated ride support',
      'Finisher experience',
    ],
    description:
      'The ultimate multi-state Malaysian cycling odyssey spanning coastal roads, historic Malacca straits, rolling hills, and concluding with the electric LEKAS Night Ride. Features professional convoy vehicles, paramedic crew, and handpicked local dining.',
    inclusions: [
      '6 nights in premium handpicked boutique & 4★ hotels',
      'All meals, daily ride nutrition, electrolytes & fruit stations',
      'Lead convoy, follow support vehicles & luggage portage',
      'Custom expedition cycling kit (2 jerseys + bib shorts)',
      'Complete bike assembly, maintenance & packing service',
    ],
  },
  {
    id: 'michelin-12h-sepang',
    title: 'MICHELIN 12H SEPANG',
    category: 'Sepang International Circuit | Motorsport',
    experienceType: 'VIP Racing Experience',
    image: '/images/sports/sports_card_michelin_12h.jpg',
    statusBadge: 'PAST EVENT / COMPLETED',
    highlights: [
      'VIP motorsport experience',
      'Special access / hospitality',
      'Sepang International Circuit',
      'Dedicated tour support',
      'Race-day experience',
      'Hotel accommodation',
    ],
    description:
      'Witness international GT3 and touring cars push human endurance and mechanical limits across 12 grueling hours from midday sun into the midnight tropical darkness at Sepang. Exclusive pit lane access, catering, and air-conditioned lounge suites.',
    inclusions: [
      'VIP Suite Pass with complimentary gourmet catering & bar',
      'Exclusive Grid Walk & Pit Lane Walk during pre-race buildup',
      '4★ hotel near KLIA / Sepang with fast-track circuit shuttles',
      'Behind-the-scenes race control & team garage viewing',
      'Dedicated tour coordinator assistance',
    ],
  },
  {
    id: 'malaysia-f1-experience',
    title: 'MALAYSIA F1 EXPERIENCE',
    category: 'Kuala Lumpur / Sepang | Motorsport',
    date: '2026',
    experienceType: 'F1 Travel Experience',
    image: '/images/sports/sports_card_f1_malaysia.jpg',
    statusBadge: 'PAST EVENT / COMPLETED',
    highlights: [
      '5D / 4N experience',
      'Visa & travel guidance',
      '5★ accommodation',
      'Dedicated trip assistance',
      '3-day race access',
      'Curated for Indian travellers',
      'Airport & circuit transfers',
    ],
    description:
      'Immerse yourself in high-octane Formula 1 excitement. A comprehensive 5-day luxury itinerary including premium grandstand seats, 5-star hotel in downtown Kuala Lumpur, circuit shuttles, and curated sightseeing tailored specifically for Indian travellers.',
    inclusions: [
      '3-Day Official Formula 1 Grandstand / Hospitality pass',
      '4 nights in luxury 5★ Kuala Lumpur city center hotel',
      'Seamless airport and daily roundtrip circuit transfers',
      'Malaysia visa processing assistance and travel insurance',
      'Exclusive post-race concert access & dinner party',
    ],
  },
];
