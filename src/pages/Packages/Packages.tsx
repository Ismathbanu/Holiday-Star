import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import {
  Tag,
  Award,
  Heart,
  Calendar,
  Utensils,
  Car,
  Camera,
  ArrowRight,
  ShieldCheck,
  UserCheck,
  BadgePercent,
  Headphones,
  MapPin,
  MessageCircle,
  Plane,
} from 'lucide-react';
import { siteConfig } from '../../data/siteConfig';

// ── 7 Destination Category Icons Data (Presentation Icons) ──
const destinationCategories = [
  { id: 'malaysia', name: 'Malaysia', icon: 'malaysia' },
  { id: 'thailand', name: 'Thailand', icon: 'thailand' },
  { id: 'vietnam', name: 'Vietnam', icon: 'vietnam' },
  { id: 'sri-lanka', name: 'Sri Lanka', icon: 'sri-lanka' },
  { id: 'dubai', name: 'Dubai', icon: 'dubai' },
  { id: 'singapore', name: 'Singapore', icon: 'singapore' },
  { id: 'indonesia', name: 'Indonesia', icon: 'indonesia' },
];

// ── 8 Package Cards Data matching the reference design ──
export interface HolidayPackageCard {
  id: string;
  title: string;
  destinationId: string;
  badge: string;
  badgeColor: string;
  buttonGradient: string;
  route: string;
  image: string;
  duration: string;
  nights: number;
  days: number;
  price: string;
  priceNumeric: number;
  itinerary: Array<{ day: string; title: string; desc: string }>;
  highlights: string[];
}

const packageList: HolidayPackageCard[] = [
  {
    id: 'best-of-malaysia',
    title: 'Best of Malaysia',
    destinationId: 'malaysia',
    badge: 'MOST POPULAR',
    badgeColor: 'bg-[#10b981]',
    buttonGradient: 'linear-gradient(90deg, #0066CC 0%, #00B4D8 100%)',
    route: 'Kuala Lumpur • Genting Highlands • Malacca',
    image: '/images/malaysia_dest/hero_kl_twilight.jpg',
    duration: '4 Nights / 5 Days',
    nights: 4,
    days: 5,
    price: '₹32,999 /-',
    priceNumeric: 32999,
    itinerary: [
      { day: 'Day 1', title: 'Arrival in Kuala Lumpur', desc: 'Airport transfer, hotel check-in, evening stroll at Bukit Bintang & street food tour.' },
      { day: 'Day 2', title: 'KL City Sightseeing', desc: 'Petronas Twin Towers observation deck, Batu Caves rainbow staircase & King’s Palace.' },
      { day: 'Day 3', title: 'Genting Highlands Day Trip', desc: 'Awana Skyway cable car over mountain mist, Genting SkyWorlds & Premium Outlets.' },
      { day: 'Day 4', title: 'UNESCO Historic Malacca', desc: 'Stadthuys Red Square, Christ Church, A Famosa Portuguese fort & Jonker Street.' },
      { day: 'Day 5', title: 'Shopping & Return Flight', desc: 'Central Market handicraft souvenirs, transfer to KLIA for Chennai flight.' },
    ],
    highlights: ['Petronas Twin Towers Skybridge', 'Awana Skyway Cable Car', 'UNESCO Historic Malacca', 'Batu Caves Lord Murugan'],
  },
  {
    id: 'thailand-getaway',
    title: 'Thailand Getaway',
    destinationId: 'thailand',
    badge: 'BEACH ESCAPE',
    badgeColor: 'bg-[#8b5cf6]',
    buttonGradient: 'linear-gradient(90deg, #0066CC 0%, #00B4D8 100%)',
    route: 'Bangkok • Pattaya • Coral Island',
    image: '/images/package_dest/thailand_boat.jpg',
    duration: '4 Nights / 5 Days',
    nights: 4,
    days: 5,
    price: '₹29,999 /-',
    priceNumeric: 29999,
    itinerary: [
      { day: 'Day 1', title: 'Arrival & Transfer to Pattaya', desc: 'Warm greeting at Bangkok airport, scenic coastal drive to Pattaya & Alcazar Show.' },
      { day: 'Day 2', title: 'Coral Island Speedboat Tour', desc: 'Speedboat cruise to Koh Larn, parasailing, swimming in crystal waters & seafood lunch.' },
      { day: 'Day 3', title: 'Pattaya to Bangkok & Temple Tour', desc: 'Gems gallery, transfer to Bangkok, Wat Traimit (Golden Buddha) & Wat Pho.' },
      { day: 'Day 4', title: 'Chao Phraya River & Safari World', desc: 'Full day Safari World & Marine Park or Chao Phraya Princess Luxury Dinner Cruise.' },
      { day: 'Day 5', title: 'Indulgent Shopping & Departure', desc: 'Pratunam Market and Platinum Mall shopping, transfer to Suvarnabhumi Airport.' },
    ],
    highlights: ['Coral Island Speedboat Safari', 'Wat Traimit & Wat Pho Temples', 'Pattaya Beachfront Hotel', 'Chao Phraya Sunset Dinner'],
  },
  {
    id: 'vietnam-discovery',
    title: 'Vietnam Discovery',
    destinationId: 'vietnam',
    badge: 'CULTURE & NATURE',
    badgeColor: 'bg-[#0284c7]',
    buttonGradient: 'linear-gradient(90deg, #0066CC 0%, #00B4D8 100%)',
    route: 'Hanoi • Ha Long Bay • Da Nang',
    image: '/images/golden_bridge.png',
    duration: '5 Nights / 6 Days',
    nights: 5,
    days: 6,
    price: '₹42,999 /-',
    priceNumeric: 42999,
    itinerary: [
      { day: 'Day 1', title: 'Welcome to Hanoi', desc: 'Transfer to Old Quarter, rickshaw cyclos through 36 guild streets & famous egg coffee.' },
      { day: 'Day 2', title: 'Ha Long Bay Luxury Overnight Cruise', desc: 'Board traditional junk ship cruise amidst emerald limestone karsts, kayak caves.' },
      { day: 'Day 3', title: 'Tai Chi at Sunrise & Fly to Da Nang', desc: 'Morning cave exploration, brunch on board, transfer to airport for short flight to Da Nang.' },
      { day: 'Day 4', title: 'Ba Na Hills & Iconic Golden Bridge', desc: 'Cable car ascent to Mount Chua, walk the Golden Bridge held by stone hands.' },
      { day: 'Day 5', title: 'Ancient Lantern Town of Hoi An', desc: 'Japanese Covered Bridge, lantern-lit riverside walk, traditional basket boat ride.' },
      { day: 'Day 6', title: 'Marble Mountains & Departure', desc: 'Explore Marble Mountain limestone pagodas, transfer to Da Nang Airport.' },
    ],
    highlights: ['Golden Bridge Giant Hands Walk', 'Overnight Cruise on Ha Long Bay', 'Hoi An UNESCO Lantern Town', 'Hanoi Old Quarter Rickshaw Ride'],
  },
  {
    id: 'singapore-special',
    title: 'Singapore Special',
    destinationId: 'singapore',
    badge: 'CITY ESCAPE',
    badgeColor: 'bg-[#a855f7]',
    buttonGradient: 'linear-gradient(90deg, #0066CC 0%, #00B4D8 100%)',
    route: 'Singapore City • Sentosa • Marina Bay',
    image: '/images/singapore_card.jpg',
    duration: '4 Nights / 5 Days',
    nights: 4,
    days: 5,
    price: '₹46,999 /-',
    priceNumeric: 46999,
    itinerary: [
      { day: 'Day 1', title: 'Arrival & Night Safari', desc: 'Welcome at Changi, hotel check-in, evening tram safari in the world’s first nocturnal zoo.' },
      { day: 'Day 2', title: 'Gardens by the Bay & Marina Bay Sands', desc: 'Flower Dome, Cloud Forest misty waterfall, Supertree Grove & SkyPark observation deck.' },
      { day: 'Day 3', title: 'Sentosa Island Adventure', desc: 'Mount Faber Cable Car, Universal Studios Singapore rides & Wings of Time laser show.' },
      { day: 'Day 4', title: 'Cultural Heritage & Orchard Road', desc: 'Chinatown, Little India, Sri Veeramakaliamman Temple and luxury Orchard shopping.' },
      { day: 'Day 5', title: 'Jewel Changi Rain Vortex & Flight', desc: 'Explore Jewel Changi indoor waterfall and canopy park before flight to Chennai.' },
    ],
    highlights: ['Gardens by the Bay Supertrees', 'Universal Studios Sentosa', 'Marina Bay Sands SkyPark', 'World-Famous Night Safari'],
  },
  {
    id: 'indonesia-explorer',
    title: 'Indonesia Explorer',
    destinationId: 'indonesia',
    badge: 'ISLAND PARADISE',
    badgeColor: 'bg-[#a855f7]',
    buttonGradient: 'linear-gradient(90deg, #0066CC 0%, #00B4D8 100%)',
    route: 'Bali • Ubud • Nusa Dua',
    image: '/images/indonesia_card.jpg',
    duration: '4 Nights / 5 Days',
    nights: 4,
    days: 5,
    price: '₹36,999 /-',
    priceNumeric: 36999,
    itinerary: [
      { day: 'Day 1', title: 'Arrive in Tropical Bali', desc: 'Private transfer from Denpasar to hotel, evening sunset cocktail at Seminyak Beach.' },
      { day: 'Day 2', title: 'Ubud Cultural & Nature Wonder', desc: 'Tegallalang Rice Terraces, famous Bali jungle swing, Sacred Monkey Forest & coffee plantation.' },
      { day: 'Day 3', title: 'Nusa Penida Island Speedboat Day Tour', desc: 'Kelingking T-Rex cliff, Angel’s Billabong natural infinity pool, Broken Beach snorkeling.' },
      { day: 'Day 4', title: 'Uluwatu Sunset Temple & Kecak Dance', desc: 'Clifftop Uluwatu Temple overlooking Indian Ocean, traditional Kecak fire dance performance.' },
      { day: 'Day 5', title: 'Balinese Spa & Farewell', desc: 'Authentic 2-hour Balinese herbal massage, souvenir shopping, airport transfer.' },
    ],
    highlights: ['Ubud Jungle Swing & Rice Terraces', 'Nusa Penida Kelingking Beach', 'Uluwatu Clifftop Temple & Kecak Dance', 'Authentic Balinese Spa Massage'],
  },
  {
    id: 'sri-lanka-highlights',
    title: 'Sri Lanka Highlights',
    destinationId: 'sri-lanka',
    badge: 'NATURE & HERITAGE',
    badgeColor: 'bg-[#10b981]',
    buttonGradient: 'linear-gradient(90deg, #0066CC 0%, #00B4D8 100%)',
    route: 'Colombo • Kandy • Nuwara Eliya • Bentota',
    image: '/images/srilanka_card.jpg',
    duration: '5 Nights / 6 Days',
    nights: 5,
    days: 6,
    price: '₹37,999 /-',
    priceNumeric: 37999,
    itinerary: [
      { day: 'Day 1', title: 'Arrive Colombo & Transfer to Kandy', desc: 'Pinnawala Elephant Orphanage visit on way to royal hill capital Kandy.' },
      { day: 'Day 2', title: 'Kandy Temple & Royal Botanical Gardens', desc: 'Sacred Temple of the Tooth Relic, Peradeniya Botanical Gardens & cultural dance show.' },
      { day: 'Day 3', title: 'Scenic Tea Country of Nuwara Eliya', desc: 'Drive past Ramboda Waterfalls, Ceylon tea plantation tour & Little England colonial town.' },
      { day: 'Day 4', title: 'Bentota Golden Beach Haven', desc: 'Madu River mangrove boat safari, Kosgoda Turtle Hatchery & water sports.' },
      { day: 'Day 5', title: 'Colombo City Highlights', desc: 'Galle Face Green, Independence Square, Gangaramaya Temple & souvenir shopping.' },
      { day: 'Day 6', title: 'Short Flight Home to Chennai', desc: 'Transfer to Bandaranaike International Airport for 1.5-hour direct flight.' },
    ],
    highlights: ['Temple of the Tooth Relic', 'Ceylon Tea Plantation Experience', 'Madu River Mangrove Safari', 'Pinnawala Elephant Sanctuary'],
  },
  {
    id: 'dubai-extravaganza',
    title: 'Dubai Extravaganza',
    destinationId: 'dubai',
    badge: 'LUXURY',
    badgeColor: 'bg-[#7c3aed]',
    buttonGradient: 'linear-gradient(90deg, #0066CC 0%, #00B4D8 100%)',
    route: 'Dubai City Tour • Desert Safari • Abu Dhabi',
    image: '/images/dubai_card.jpg',
    duration: '5 Nights / 6 Days',
    nights: 5,
    days: 6,
    price: '₹55,999 /-',
    priceNumeric: 55999,
    itinerary: [
      { day: 'Day 1', title: 'Arrive in Dubai & Marina Dhow Cruise', desc: 'VIP airport transfer, luxury hotel check-in, evening 5-star Marina Dhow Dinner Cruise.' },
      { day: 'Day 2', title: 'Dubai City Tour & Burj Khalifa 124th Floor', desc: 'Dubai Frame photo stop, Dubai Mall, Burj Khalifa observation deck & dancing fountains.' },
      { day: 'Day 3', title: 'Thrilling Red Dune Desert Safari', desc: '4x4 dune bashing, camel ride, sandboarding, BBQ dinner buffet & belly dance show.' },
      { day: 'Day 4', title: 'Abu Dhabi Grand Mosque Day Tour', desc: 'Sheikh Zayed Grand Mosque architectural masterpiece, Emirates Palace & Corniche.' },
      { day: 'Day 5', title: 'Museum of the Future & Gold Souk', desc: 'Museum of the Future tour, Meena Bazaar, Deira Gold and Spice Souk shopping.' },
      { day: 'Day 6', title: 'Departure Flight to Chennai', desc: 'Leisure morning, hotel check-out, transfer to Dubai International Airport.' },
    ],
    highlights: ['Burj Khalifa 124th Floor At The Top', 'Red Dune Desert Safari & BBQ Dinner', 'Abu Dhabi Sheikh Zayed Grand Mosque', 'Dubai Marina Luxury Dhow Cruise'],
  },
  {
    id: 'malaysia-island-escape',
    title: 'Malaysia Island Escape',
    destinationId: 'malaysia',
    badge: 'ISLAND ESCAPE',
    badgeColor: 'bg-[#0284c7]',
    buttonGradient: 'linear-gradient(90deg, #0066CC 0%, #00B4D8 100%)',
    route: 'Langkawi • Kuala Lumpur',
    image: '/images/malaysia_dest/itin_kl_langkawi.jpg',
    duration: '5 Nights / 6 Days',
    nights: 5,
    days: 6,
    price: '₹38,999 /-',
    priceNumeric: 38999,
    itinerary: [
      { day: 'Day 1', title: 'Arrival in Langkawi Island', desc: 'Warm island greeting, transfer to beachfront resort, sunset dinner at Pantai Cenang.' },
      { day: 'Day 2', title: 'Langkawi Island Hopping & Eagle Feeding', desc: 'Speedboat cruise to Dayang Bunting, eagle feeding at Singa Besar & Beras Basah.' },
      { day: 'Day 3', title: 'Langkawi SkyCab & SkyBridge', desc: 'Ascend Mount Machinchang, walk the curved SkyBridge suspended above rainforest canopy.' },
      { day: 'Day 4', title: 'Scenic Flight to Kuala Lumpur', desc: 'Morning beach time, short flight to KL, hotel check-in & Bukit Bintang street shopping.' },
      { day: 'Day 5', title: 'Kuala Lumpur Skyline & Batu Caves', desc: 'Petronas Twin Towers, Batu Caves, Thean Hou Temple & KL Tower observation deck.' },
      { day: 'Day 6', title: 'Duty-Free Shopping & Home', desc: 'Last minute chocolate and souvenir shopping, transfer to KLIA for Chennai flight.' },
    ],
    highlights: ['Langkawi SkyBridge Canopy Walk', 'Island Hopping Speedboat Tour', 'Petronas Twin Towers Experience', 'Pantai Cenang Beachfront Resort'],
  },
];

// Helper to render destination SVG line art icons
function DestinationLineIcon({ type, className = 'w-7 h-7' }: { type: string; className?: string }) {
  switch (type) {
    case 'malaysia':
      return (
        <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className={className}>
          <line x1="14" y1="6" x2="14" y2="14" />
          <path d="M9 14 L19 14 L18 42 L10 42 Z" />
          <line x1="34" y1="6" x2="34" y2="14" />
          <path d="M29 14 L39 14 L38 42 L30 42 Z" />
          <line x1="18" y1="26" x2="30" y2="26" strokeWidth="2.8" />
        </svg>
      );
    case 'thailand':
      return (
        <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className={className}>
          <line x1="24" y1="4" x2="24" y2="10" />
          <path d="M20 10 L28 10 L26 20 L22 20 Z" />
          <path d="M16 20 L32 20 L30 30 L18 30 Z" />
          <path d="M12 30 L36 30 L38 44 L10 44 Z" />
          <line x1="24" y1="36" x2="24" y2="44" />
        </svg>
      );
    case 'vietnam':
      return (
        <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className={className}>
          <path d="M8 36 C14 36 20 40 28 40 C36 40 42 36 42 36" />
          <path d="M12 36 L24 8 L24 36 Z" />
          <path d="M26 14 L38 34 L26 34 Z" />
          <line x1="24" y1="8" x2="24" y2="38" />
        </svg>
      );
    case 'sri-lanka':
      return (
        <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className={className}>
          <line x1="24" y1="6" x2="24" y2="14" />
          <path d="M14 34 C14 20 34 20 34 34 Z" />
          <path d="M10 34 L38 34 L40 42 L8 42 Z" />
          <circle cx="24" cy="12" r="2" />
        </svg>
      );
    case 'dubai':
      return (
        <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className={className}>
          <path d="M16 42 L16 8 C16 8 38 18 38 42 Z" />
          <line x1="16" y1="42" x2="40" y2="42" />
          <line x1="10" y1="42" x2="16" y2="42" />
          <line x1="16" y1="20" x2="33" y2="20" />
          <line x1="16" y1="30" x2="37" y2="30" />
        </svg>
      );
    case 'singapore':
      return (
        <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className={className}>
          <path d="M26 8 C32 8 36 12 36 18 C36 24 32 28 28 32 C26 34 26 38 28 42" />
          <path d="M20 18 C20 12 24 8 26 8" />
          <path d="M18 24 C14 26 12 30 14 36 C16 40 22 42 28 42" />
          <path d="M36 20 C40 20 44 24 40 28" />
        </svg>
      );
    case 'indonesia':
      return (
        <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className={className}>
          <path d="M18 42 L18 10 L14 10 L14 16 L12 16 L12 24 L10 24 L10 32 L8 32 L8 42 Z" />
          <path d="M30 42 L30 10 L34 10 L34 16 L36 16 L36 24 L38 24 L38 32 L40 32 L40 42 Z" />
          <line x1="6" y1="42" x2="42" y2="42" />
        </svg>
      );
    default:
      return (
        <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className={className}>
          <circle cx="24" cy="24" r="16" />
          <path d="M12 24 A 12 12 0 0 0 36 24" />
          <line x1="8" y1="24" x2="40" y2="24" />
        </svg>
      );
  }
}

export default function Packages() {
  const [favorites, setFavorites] = useState<Record<string, boolean>>({});

  const toggleFavorite = (id: string, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setFavorites((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="w-full bg-white text-slate-800 font-sans">
      <Helmet>
        <title>Holiday Packages | International Tours from Chennai | Holiday Star</title>
        <meta
          name="description"
          content="Explore curated international holiday packages from Chennai to Malaysia, Thailand, Vietnam, Singapore, Indonesia, Sri Lanka & Dubai with Holiday Star Tours & Travels."
        />
        <meta property="og:title" content="Holiday Packages — Holiday Star Tours & Travels" />
        <meta
          property="og:description"
          content="Curated journeys, unforgettable memories. Handpicked holiday packages with clear itineraries and complete travel support."
        />
        <link rel="canonical" href="https://holidaystartours.com/packages" />
      </Helmet>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 1: HERO SECTION
          - Background: /images/holiday-herobg.jpg
          - Cursive Script: "Curated Journeys, Unforgettable Memories"
          - Big Title: "Holiday Packages" (Holiday in ocean teal, Packages in purple)
          - Subtitle: "Handpicked holiday packages to Malaysia and beyond..."
          - Dual Badges: Best Price Guarantee & Trusted by Travellers
          - Bottom-left smooth mint/cyan wave
      ───────────────────────────────────────────────────────────── */}
      <section className="relative min-h-[580px] lg:min-h-[660px] flex items-center overflow-hidden bg-[#0A121A] pt-28 pb-16 lg:pt-36 lg:pb-24">
        {/* Hero Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/pack-herobg.jpg"
            alt="Tropical coastal paradise with illuminated cliffside walkway, lanterns, turquoise bay and limestone islands at sunset"
            className="w-full h-full object-cover object-center scale-100 select-none pointer-events-none"
            loading="eager"
            fetchPriority="high"
          />
          {/* Directional contrast gradient: provides crisp readability for text on the left while leaving the glowing sunset & turquoise bay illuminated */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/55 lg:via-black/35 to-transparent pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30 pointer-events-none" />
          {/* Mobile-only backdrop for extra readability on narrow screens */}
          <div className="lg:hidden absolute inset-0 bg-black/40 backdrop-blur-[1px] pointer-events-none" />
        </div>

        <div className="container-hs relative z-10 w-full">
          <div className="max-w-xl lg:max-w-2xl">
            {/* Eyebrow Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-emerald-300 bg-emerald-950/70 border border-emerald-500/30 backdrop-blur-md mb-3 shadow-sm w-fit">
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
              <span>Curated Journeys, Unforgettable Memories</span>
            </div>

            {/* Bold Dual-Color Heading */}
            <h1 className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-[1.06] mb-4">
              <span className="text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.8)]">Holiday </span>
              <span
                className="text-transparent bg-clip-text drop-shadow-[0_2px_16px_rgba(0,180,216,0.4)]"
                style={{
                  backgroundImage: 'linear-gradient(90deg, #0066CC 0%, #00B4D8 100%)',
                }}
              >
                Packages
              </span>
            </h1>

            {/* Subtitles */}
            <p className="text-sm sm:text-base md:text-lg font-semibold text-white/95 mb-1 leading-snug drop-shadow-[0_1px_4px_rgba(0,0,0,0.8)]">
              Handpicked holiday packages to Malaysia and beyond.
            </p>
            <p className="text-xs sm:text-sm md:text-base text-slate-200/90 mb-8 leading-relaxed drop-shadow-[0_1px_3px_rgba(0,0,0,0.8)]">
              Great experiences. Comfortable stays. Hassle-free travel.
            </p>

            {/* Dual Guarantee Feature Badges */}
            <div className="flex flex-wrap items-center gap-3.5 sm:gap-4">
              {/* Badge 1: Best Price Guarantee */}
              <div className="bg-white/95 backdrop-blur-md rounded-2xl p-3 sm:p-3.5 border border-white/40 shadow-lg flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-[#10b981] shrink-0 shadow-2xs">
                  <Tag className="w-5 h-5 rotate-[-45deg]" />
                </div>
                <div>
                  <div className="font-heading font-bold text-xs sm:text-sm text-slate-900 leading-tight">
                    Best Price Guarantee
                  </div>
                  <div className="text-[11px] text-slate-500 font-light">
                    Competitive prices
                  </div>
                </div>
              </div>

              {/* Badge 2: Trusted by Travellers */}
              <div className="bg-white/95 backdrop-blur-md rounded-2xl p-3 sm:p-3.5 border border-white/40 shadow-lg flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-purple-50 border border-purple-200 flex items-center justify-center text-[#7c3aed] shrink-0 shadow-2xs">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-heading font-bold text-xs sm:text-sm text-slate-900 leading-tight">
                    Trusted by Travellers
                  </div>
                  <div className="text-[11px] text-slate-500 font-light">
                    Rated 4.8/5 by happy clients
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 2: DESTINATION CATEGORY ICONS STRIP (7 DESTINATIONS)
          - Presentation Icons only without filter function
          - Malaysia, Thailand, Vietnam, Sri Lanka, Dubai, Singapore, Indonesia
      ───────────────────────────────────────────────────────────── */}
      <section className="py-8 bg-white border-b border-gray-100">
        <div className="container-hs">
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3 sm:gap-4">
            {destinationCategories.map((cat) => (
              <div
                key={cat.id}
                className="p-3 sm:p-4 rounded-2xl border border-gray-100/90 bg-white shadow-2xs hover:shadow-xs transition-all duration-300 flex flex-col items-center justify-center text-center group"
              >
                <div className="w-11 h-11 rounded-xl bg-slate-50 text-[#0284c7] group-hover:bg-blue-50 flex items-center justify-center mb-2 transition-transform duration-300 group-hover:scale-105">
                  <DestinationLineIcon type={cat.icon} className="w-6 h-6" />
                </div>
                <span className="font-heading font-bold text-xs text-slate-700 leading-tight">
                  {cat.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 3: 8 PACKAGE CARDS (4 COLUMNS x 2 ROWS)
          - Badges (MOST POPULAR, BEACH ESCAPE, etc.)
          - Favorite heart toggle
          - Route details
          - 4 amenity items (Duration, Meals, Transfers, Sightseeing)
          - Price & Gradient "View Details →" button
      ───────────────────────────────────────────────────────────── */}
      <section className="py-16 bg-[#fafbfd]" aria-label="Featured Holiday Packages">
        <div className="container-hs">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {packageList.map((pkg) => {
              const isFav = !!favorites[pkg.id];
              return (
                <div
                  key={pkg.id}
                  className="bg-white rounded-2xl overflow-hidden border border-gray-200/80 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group relative"
                >
                  <div>
                    {/* Card Top Image & Badges */}
                    <div className="aspect-[16/10] overflow-hidden relative">
                      <Link to={`/destinations/${pkg.destinationId}`} className="block w-full h-full">
                        <img
                          src={pkg.image}
                          alt={pkg.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          loading="lazy"
                        />
                      </Link>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-black/10 pointer-events-none" />

                      {/* Top-Left Category Badge */}
                      <div
                        className={`absolute top-3 left-3 px-2.5 py-1 rounded-full text-[9.5px] font-extrabold tracking-wider text-white uppercase shadow-md ${pkg.badgeColor}`}
                      >
                        {pkg.badge}
                      </div>

                      {/* Top-Right Favorite Heart Button */}
                      <button
                        type="button"
                        onClick={(e) => toggleFavorite(pkg.id, e)}
                        className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/30 backdrop-blur-md border border-white/50 flex items-center justify-center text-white hover:text-red-500 transition-colors shadow-sm cursor-pointer z-10"
                        aria-label="Add to favorites"
                      >
                        <Heart
                          className={`w-4 h-4 transition-transform active:scale-125 ${
                            isFav ? 'fill-red-500 text-red-500' : 'text-white'
                          }`}
                        />
                      </button>
                    </div>

                    {/* Card Body */}
                    <div className="p-5">
                      <h3 className="font-heading font-extrabold text-base text-[#0b3b64] mb-1 leading-snug group-hover:text-[#0066CC] transition-colors">
                        <Link to={`/destinations/${pkg.destinationId}`}>
                          {pkg.title}
                        </Link>
                      </h3>
                      <p className="text-[11px] text-slate-500 leading-tight mb-4 font-normal line-clamp-1">
                        {pkg.route}
                      </p>

                      {/* 4 Amenity Items */}
                      <div className="grid grid-cols-4 gap-1 py-3 px-2 rounded-xl bg-[#f8fafc] border border-gray-100 text-center mb-4">
                        {/* 1. Duration */}
                        <div className="flex flex-col items-center">
                          <Calendar className="w-3.5 h-3.5 text-[#0284c7] mb-1" />
                          <span className="text-[9px] font-bold text-[#0b3b64] leading-tight">
                            {pkg.nights}N / {pkg.days}D
                          </span>
                        </div>

                        {/* 2. Meals */}
                        <div className="flex flex-col items-center">
                          <Utensils className="w-3.5 h-3.5 text-[#0284c7] mb-1" />
                          <span className="text-[9px] font-medium text-slate-600 leading-tight">
                            Meals
                          </span>
                        </div>

                        {/* 3. Transfers */}
                        <div className="flex flex-col items-center">
                          <Car className="w-3.5 h-3.5 text-[#0284c7] mb-1" />
                          <span className="text-[9px] font-medium text-slate-600 leading-tight">
                            Transfers
                          </span>
                        </div>

                        {/* 4. Sightseeing */}
                        <div className="flex flex-col items-center">
                          <Camera className="w-3.5 h-3.5 text-[#0284c7] mb-1" />
                          <span className="text-[9px] font-medium text-slate-600 leading-tight">
                            Sightseeing
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Card Footer: Price & Gradient Button */}
                  <div className="px-5 pb-5 pt-0 flex items-center justify-between gap-2 border-t border-gray-50 mt-auto">
                    <div>
                      <span className="text-[10px] text-slate-400 block font-normal leading-none mb-0.5">
                        From:
                      </span>
                      <span className="font-heading font-extrabold text-[#0066CC] text-sm sm:text-base leading-none">
                        {pkg.price}
                      </span>
                    </div>

                    <Link
                      to={`/destinations/${pkg.destinationId}`}
                      className="px-3.5 py-2 rounded-full text-white text-[11px] font-semibold shadow-xs hover:shadow-md hover:scale-[1.02] transition-all duration-300 flex items-center gap-1.5 cursor-pointer shrink-0"
                      style={{
                        background: pkg.buttonGradient,
                        boxShadow: '0 2px 8px rgba(0, 180, 216, 0.30)',
                      }}
                    >
                      <span>View Details</span>
                      <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 4: "WHY BOOK WITH HOLIDAY STAR?"
          - Navy to Purple gradient container
          - 4 Glowing Badge Columns: Trusted & Reliable, Personalised Support, Best Value, 24/7 Assistance
      ───────────────────────────────────────────────────────────── */}
      <section className="py-14 bg-white">
        <div className="container-hs">
          <div className="rounded-3xl p-8 sm:p-10 lg:p-12 text-white shadow-xl bg-gradient-to-r from-[#03396c] via-[#14213d] to-[#4a0e4e] relative overflow-hidden">
            {/* Title */}
            <div className="text-center mb-10">
              <h2 className="font-heading font-extrabold text-2xl sm:text-3xl lg:text-4xl text-white tracking-tight">
                Why Book with <span className="text-[#38bdf8]">Holiday</span>{' '}
                <span className="text-[#c084fc]">Star?</span>
              </h2>
            </div>

            {/* 4 Feature Columns */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
              {/* Feature 1 */}
              <div className="flex flex-col items-center text-center">
                <div className="w-14 h-14 rounded-full bg-gradient-to-tr from-[#0284c7] to-[#10b981] flex items-center justify-center text-white mb-4 shadow-lg ring-4 ring-white/10">
                  <ShieldCheck className="w-7 h-7" />
                </div>
                <h3 className="font-heading font-bold text-sm sm:text-base text-white mb-1.5">
                  Trusted & Reliable
                </h3>
                <p className="text-xs text-slate-300 font-light leading-relaxed max-w-xs">
                  Years of experience you can count on.
                </p>
              </div>

              {/* Feature 2 */}
              <div className="flex flex-col items-center text-center">
                <div className="w-14 h-14 rounded-full bg-gradient-to-tr from-[#7c3aed] to-[#d946ef] flex items-center justify-center text-white mb-4 shadow-lg ring-4 ring-white/10">
                  <UserCheck className="w-7 h-7" />
                </div>
                <h3 className="font-heading font-bold text-sm sm:text-base text-white mb-1.5">
                  Personalised Support
                </h3>
                <p className="text-xs text-slate-300 font-light leading-relaxed max-w-xs">
                  Travel experts available before, during & after your trip.
                </p>
              </div>

              {/* Feature 3 */}
              <div className="flex flex-col items-center text-center">
                <div className="w-14 h-14 rounded-full bg-gradient-to-tr from-[#0284c7] to-[#38bdf8] flex items-center justify-center text-white mb-4 shadow-lg ring-4 ring-white/10">
                  <BadgePercent className="w-7 h-7" />
                </div>
                <h3 className="font-heading font-bold text-sm sm:text-base text-white mb-1.5">
                  Best Value
                </h3>
                <p className="text-xs text-slate-300 font-light leading-relaxed max-w-xs">
                  Carefully curated packages at the best possible prices.
                </p>
              </div>

              {/* Feature 4 */}
              <div className="flex flex-col items-center text-center">
                <div className="w-14 h-14 rounded-full bg-gradient-to-tr from-[#6366f1] to-[#06b6d4] flex items-center justify-center text-white mb-4 shadow-lg ring-4 ring-white/10">
                  <Headphones className="w-7 h-7" />
                </div>
                <h3 className="font-heading font-bold text-sm sm:text-base text-white mb-1.5">
                  24/7 Assistance
                </h3>
                <p className="text-xs text-slate-300 font-light leading-relaxed max-w-xs">
                  We're here whenever you need us.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 5: "READY TO PLAN YOUR NEXT HOLIDAY?" CTA BANNER
          - Panoramic background image home-cta.jpg with ocean gradient overlay
          - Airplane with dotted flight path on left
          - Center copy + Enquire Now & WhatsApp Us buttons
          - Overlapping tilted polaroid photo frames on right
      ───────────────────────────────────────────────────────────── */}
      <section className="py-12 bg-white">
        <div className="container-hs">
          <div className="relative rounded-3xl overflow-hidden text-white shadow-xl p-8 sm:p-10 lg:p-12">
            {/* Background CTA Image */}
            <img
              src="/images/home-cta.jpg"
              alt="Plan holiday background"
              className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none"
            />
            {/* Ocean blue to purple translucent gradient overlay */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  'linear-gradient(90deg, rgba(2, 85, 140, 0.85) 0%, rgba(37, 99, 235, 0.72) 45%, rgba(124, 58, 237, 0.82) 100%)',
              }}
            />
            {/* Background Flight Path Dotted Line & Airplane */}
            <div className="absolute left-6 top-1/2 -translate-y-1/2 pointer-events-none opacity-80 hidden md:block">
              <div className="relative w-48 h-32">
                {/* Airplane graphic */}
                <Plane className="w-14 h-14 text-white rotate-[18deg] drop-shadow-lg" />
                {/* Dotted curve */}
                <svg viewBox="0 0 200 100" className="w-full h-full text-white/50" stroke="currentColor" fill="none" strokeWidth="2" strokeDasharray="4 4">
                  <path d="M 10 90 Q 70 30 140 20" />
                </svg>
                <div className="absolute bottom-2 left-2 flex items-center gap-1 text-white/70 text-[10px]">
                  <MapPin className="w-3.5 h-3.5 text-white" />
                  <span>Chennai</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
              {/* Center Content (in column 1 to 8 on desktop, with left padding for airplane) */}
              <div className="lg:col-span-8 md:pl-28 lg:pl-36 text-center md:text-left">
                <h2 className="font-heading font-extrabold text-2xl sm:text-3xl lg:text-4xl text-white tracking-tight mb-2">
                  Ready to Plan Your Next Holiday?
                </h2>
                <p className="text-xs sm:text-sm text-cyan-50/90 font-light mb-6 max-w-lg leading-relaxed">
                  Tell us your travel plans and we'll take care of the rest.
                </p>

                {/* Dual Action Buttons */}
                <div className="flex flex-wrap items-center justify-center md:justify-start gap-3.5">
                  <a
                    href={`https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent(
                      'Hello Holiday Star! I would like to plan my next international holiday.'
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 bg-[#10b981] hover:bg-[#059669] text-white text-xs sm:text-sm font-semibold rounded-full transition-all duration-300 shadow-md hover:shadow-lg flex items-center gap-2 cursor-pointer"
                  >
                    <span>Enquire Now</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>

                  <a
                    href={`https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent(
                      'Hello Holiday Star! I want to chat about holiday packages.'
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 bg-[#7c3aed] hover:bg-[#6b21a8] text-white text-xs sm:text-sm font-semibold rounded-full transition-all duration-300 shadow-md hover:shadow-lg flex items-center gap-2 cursor-pointer"
                  >
                    <MessageCircle className="w-4 h-4 text-white fill-white/20" />
                    <span>WhatsApp Us</span>
                  </a>
                </div>
              </div>

              {/* Right Side: Overlapping Tilted Polaroid Photos */}
              <div className="lg:col-span-4 flex justify-center lg:justify-end items-center">
                <div className="relative w-64 sm:w-72 h-44 sm:h-48">
                  {/* Photo 1: Petronas Towers (tilted left) */}
                  <div className="absolute left-0 top-0 w-36 sm:w-40 bg-white p-2 sm:p-2.5 rounded-xl shadow-2xl border border-gray-100 rotate-[-8deg] hover:rotate-0 transition-transform duration-300 z-10">
                    <div className="aspect-[4/3] rounded-lg overflow-hidden mb-1">
                      <img
                        src="/images/polaroid_kl.jpg"
                        alt="Kuala Lumpur Petronas Towers"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="text-[10px] font-bold text-slate-700 text-center uppercase tracking-wider">
                      Malaysia ✨
                    </div>
                  </div>

                  {/* Photo 2: Tropical Island (tilted right) */}
                  <div className="absolute right-0 bottom-0 w-36 sm:w-40 bg-white p-2 sm:p-2.5 rounded-xl shadow-2xl border border-gray-100 rotate-[6deg] hover:rotate-0 transition-transform duration-300 z-20">
                    <div className="aspect-[4/3] rounded-lg overflow-hidden mb-1">
                      <img
                        src="/images/polaroid_beach.jpg"
                        alt="Tropical paradise beach"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="text-[10px] font-bold text-slate-700 text-center uppercase tracking-wider">
                      Tropical Bliss 🌴
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
