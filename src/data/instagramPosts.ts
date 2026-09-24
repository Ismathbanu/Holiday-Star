export interface InstagramPost {
  id: string;
  mediaUrl: string;
  mediaType: 'image' | 'reel' | 'carousel';
  caption: string;
  location: string;
  likes: number;
  comments: number;
  timestamp: string;
  permalink: string;
}

export const curatedInstagramPosts: InstagramPost[] = [
  {
    id: 'post-1',
    mediaUrl: '/images/malaysia_card.jpg',
    mediaType: 'reel',
    caption: 'Golden hour at the Petronas Twin Towers! 🇲🇾✨ There is nothing quite like looking up at the illuminated KL skyline after a full day of street food hopping and shopping in Bukit Bintang. Our 5D4N Malaysia Highlights tour includes city tours, Genting Highlands cable car ride, and Batu Caves! Send us a DM to plan your family trip from Chennai. ✈️🌟 #HolidayStarTours #VisitMalaysia #KualaLumpur #TravelFromChennai #MalaysiaHoliday',
    location: 'Kuala Lumpur, Malaysia',
    likes: 428,
    comments: 39,
    timestamp: '2 days ago',
    permalink: 'https://www.instagram.com/holidaystartours',
  },
  {
    id: 'post-2',
    mediaUrl: '/images/singapore_cruise_experience.jpg',
    mediaType: 'carousel',
    caption: 'Waking up to boundless sapphire oceans aboard the Resorts World Genting Dream Cruise! 🛳️🌊 Pure luxury on the open waters — world-class dining, deck waterslides, theater musicals, and port stops in Penang & Phuket. Chennai travelers, this is the ultimate cruise vacation you have been waiting for! 🥂☀️ #SingaporeCruise #GentleDreamCruise #CruiseLife #LuxuryVacation #HolidayStar',
    location: 'Singapore Cruise Port',
    likes: 582,
    comments: 47,
    timestamp: '4 days ago',
    permalink: 'https://www.instagram.com/holidaystartours',
  },
  {
    id: 'post-3',
    mediaUrl: '/images/thailand_card.jpg',
    mediaType: 'reel',
    caption: 'Gliding between towering limestone cliffs on emerald waters in Phi Phi Islands! 🇹🇭🏝️ Phuket & Krabi island hopping is unmatched. From Maya Bay to snorkeling with tropical fish and sunset beach dinners, Thailand never fails to amaze. Custom group & couple itineraries now open for booking! 🌴🚤 #ThailandHoliday #PhuketIslands #Krabi #PhiPhiIslands #IslandVibes #TravelGoals',
    location: 'Phuket & Krabi, Thailand',
    likes: 615,
    comments: 52,
    timestamp: '6 days ago',
    permalink: 'https://www.instagram.com/holidaystartours',
  },
  {
    id: 'post-4',
    mediaUrl: '/images/dubai_card.jpg',
    mediaType: 'image',
    caption: 'Golden sunsets over the Arabian desert followed by starlit barbecue and thrilling 4x4 dune bashing! 🏜️🇦🇪 Dubai is the perfect blend of high-octane luxury and futuristic wonder — Burj Khalifa at 148th floor, Dubai Mall dancing fountain, and Desert Safari adventures. Ask us about our 5D4N Dubai packages! 🏙️🐪 #DubaiTour #BurjKhalifa #DesertSafari #LuxuryDubai #ChennaiTravels',
    location: 'Dubai Desert, UAE',
    likes: 389,
    comments: 28,
    timestamp: '1 week ago',
    permalink: 'https://www.instagram.com/holidaystartours',
  },
  {
    id: 'post-5',
    mediaUrl: '/images/indonesia_card.jpg',
    mediaType: 'carousel',
    caption: 'Stepping into serenity through Bali\'s iconic temple gates surrounded by misty volcanoes and emerald rice terraces. 🇮🇩🌺 Bali is pure soul rejuvenation: sunrise Mount Batur trek, Nusa Penida Kelingking beach, sacred water temples, and traditional Balinese spa retreats. Book your Bali dream escape today! 🥥🌸 #BaliTour #WonderfulIndonesia #UbudBali #NusaPenida #TropicalParadise',
    location: 'Bali, Indonesia',
    likes: 724,
    comments: 63,
    timestamp: '1 week ago',
    permalink: 'https://www.instagram.com/holidaystartours',
  },
  {
    id: 'post-6',
    mediaUrl: '/images/golden_bridge.png',
    mediaType: 'reel',
    caption: 'Held in the hands of the mountain gods! 🇻🇳⛰️ The breathtaking Golden Bridge at Ba Na Hills, Da Nang. Surrounded by mountain fog, European-styled French village castles, and scenic cable cars. Vietnam is this year\'s most sought-after destination from South India! Let our team craft your seamless visa and holiday itinerary. ✨🛵 #VietnamTravel #GoldenBridge #BaNaHills #DaNang #HanoiToSaigon',
    location: 'Ba Na Hills, Da Nang, Vietnam',
    likes: 512,
    comments: 41,
    timestamp: '2 weeks ago',
    permalink: 'https://www.instagram.com/holidaystartours',
  },
  {
    id: 'post-7',
    mediaUrl: '/images/langkawi_island.jpg',
    mediaType: 'image',
    caption: 'Langkawi\'s pristine turquoise shores and calm breezes. 🏖️🦅 Whether you want to stroll along the Sky Bridge 660 meters above sea level, take a mangrove safari tour, or relax at duty-free beach resorts, Langkawi is pure relaxation. 🌅🌴 #Langkawi #MalaysiaTrulyAsia #IslandEscape #BeachResort #HolidayStarTours',
    location: 'Langkawi Island, Malaysia',
    likes: 346,
    comments: 22,
    timestamp: '2 weeks ago',
    permalink: 'https://www.instagram.com/holidaystartours',
  },
  {
    id: 'post-8',
    mediaUrl: '/images/genting_highlands.jpg',
    mediaType: 'carousel',
    caption: 'Floating above the clouds on the Awana SkyWay cable car to Genting Highlands! 🚠☁️ Theme parks, cool mountain breezes, indoor casinos, and panoramic views of Malaysia\'s ancient rainforest. Perfect 1-day getaway just an hour outside KL! 🎡🌲 #GentingHighlands #AwanaSkyway #MalaysiaTravel #ThemePark #TravelWithHolidayStar',
    location: 'Genting Highlands, Malaysia',
    likes: 467,
    comments: 35,
    timestamp: '3 weeks ago',
    permalink: 'https://www.instagram.com/holidaystartours',
  },
];
