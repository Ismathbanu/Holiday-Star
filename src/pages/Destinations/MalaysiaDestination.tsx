import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import {
  Compass,
  MessageCircle,
  Plane,
  Camera,
  Building2,
  Users,
  Car,
  Utensils,
  Footprints,
  FileText,
  Calendar,
  Coins,
  ArrowRight,
  Check,
  Heart,
  Luggage,
  Map,
} from 'lucide-react';
import { siteConfig } from '../../data/siteConfig';

// ── 6 Popular Itineraries Data ──
interface MalaysiaItinerary {
  id: string;
  title: string;
  duration: string;
  tagline: string;
  description: string;
  image: string;
  days: Array<{ day: string; title: string; desc: string }>;
  highlights: string[];
}

const malaysiaItineraries: MalaysiaItinerary[] = [
  {
    id: 'kl-genting',
    title: 'Kuala Lumpur + Genting',
    duration: '3 Nights / 4 Days',
    tagline: 'City buzz meets mountain escape.',
    description: "Experience Kuala Lumpur's iconic city attractions before heading into the cooler surroundings of Genting.",
    image: '/images/malaysia_dest/itin_kl_genting.jpg',
    days: [
      { day: 'Day 1', title: 'Arrival in Kuala Lumpur', desc: 'Airport transfer to hotel, Bukit Bintang evening exploration & KLCC park view.' },
      { day: 'Day 2', title: 'KL City Highlights', desc: 'Petronas Twin Towers observation deck, Batu Caves rainbow steps & King’s Palace.' },
      { day: 'Day 3', title: 'Genting Highlands Day Escape', desc: 'Awana Skyway scenic cable car, Chin Swee Caves Temple & Genting SkyWorlds.' },
      { day: 'Day 4', title: 'Shopping & Return Flight', desc: 'Central Market handicraft souvenir shopping, transfer to KLIA for Chennai flight.' },
    ],
    highlights: ['Petronas Twin Towers Skybridge', 'Awana Skyway Glass Gondola', 'Batu Caves Lord Murugan Statue', 'Gentings Theme Park & Premium Outlets'],
  },
  {
    id: 'kl-melaka',
    title: 'Kuala Lumpur + Melaka',
    duration: '3 Nights / 4 Days',
    tagline: 'Modern Malaysia meets heritage.',
    description: 'Combine Kuala Lumpur’s contemporary cityscape with the history and charm of Melaka.',
    image: '/images/malaysia_dest/itin_kl_melaka.jpg',
    days: [
      { day: 'Day 1', title: 'Arrive in Kuala Lumpur', desc: 'Private transfer to hotel, stroll through Pavilion KL and Jalan Alor street food.' },
      { day: 'Day 2', title: 'Kuala Lumpur Metropolis', desc: 'KL Tower panorama, Merdeka Square heritage walk and Batu Caves excursion.' },
      { day: 'Day 3', title: 'Historic Melaka UNESCO Tour', desc: 'Stadthuys Red Square, Christ Church, A Famosa fortress and Melaka River cruise.' },
      { day: 'Day 4', title: 'Jonker Street & Departure', desc: 'Morning Nyonya delicacies tasting, Jonker Walk antique shopping & departure transfer.' },
    ],
    highlights: ['UNESCO Melaka Red Square & Christ Church', 'Scenic Melaka River Cruise', 'Jonker Street Nyonya Heritage', 'Petronas Towers & Batu Caves'],
  },
  {
    id: 'kl-langkawi',
    title: 'Kuala Lumpur + Langkawi',
    duration: '4 Nights / 5 Days',
    tagline: 'Urban energy meets island bliss.',
    description: 'Explore Malaysia’s capital before slowing down with beaches and island experiences in Langkawi.',
    image: '/images/malaysia_dest/itin_kl_langkawi.jpg',
    days: [
      { day: 'Day 1', title: 'Welcome to Kuala Lumpur', desc: 'Airport greeting, check into city hotel, evening skyline dining overlooking Twin Towers.' },
      { day: 'Day 2', title: 'KL Wonders & Flight to Langkawi', desc: 'Morning KL city tour, transfer for short scenic flight to Langkawi island & beach sunset.' },
      { day: 'Day 3', title: 'Langkawi Island Hopping Cruise', desc: 'Speedboat to Dayang Bunting (Lake of Pregnant Maiden), eagle feeding & Beras Basah.' },
      { day: 'Day 4', title: 'Langkawi SkyCab & SkyBridge', desc: 'Ascend Mount Machinchang via cable car, walk the breathtaking SkyBridge above canopy.' },
      { day: 'Day 5', title: 'Duty-Free Shopping & Home', desc: 'Cenang Beach leisure, Pantai Cenang duty-free shopping & flight to Chennai.' },
    ],
    highlights: ['Langkawi SkyBridge canopy walk', 'Southern Islands Speedboat Cruise', 'Bravura Cenang Beach sunsets', 'City excitement + beach relaxation'],
  },
  {
    id: 'kl-penang',
    title: 'Kuala Lumpur + Penang',
    duration: '4 Nights / 5 Days',
    tagline: 'City life meets heritage and flavours.',
    description: 'Discover Kuala Lumpur and experience Penang’s distinctive culture and food scene.',
    image: '/images/malaysia_dest/itin_kl_penang.jpg',
    days: [
      { day: 'Day 1', title: 'Arrive in Kuala Lumpur', desc: 'Hotel check-in, city orientation, evening food exploration in Bukit Bintang.' },
      { day: 'Day 2', title: 'Iconic Kuala Lumpur Tour', desc: 'Petronas Towers, National Mosque, Batu Caves & evening transit to Penang.' },
      { day: 'Day 3', title: 'George Town UNESCO Heritage', desc: 'Street art mural trail, Clan Jetties stilt village, Pinang Peranakan Mansion.' },
      { day: 'Day 4', title: 'Penang Hill & Kek Lok Si Temple', desc: 'Funicular train to Penang Hill summit, explore Southeast Asia’s largest Buddhist temple.' },
      { day: 'Day 5', title: 'Gurney Drive & Departure', desc: 'Savor Char Kway Teow and Assam Laksa, souvenir shopping & return flight.' },
    ],
    highlights: ['World-renowned George Town Street Art', 'Kek Lok Si grand pagoda & temple', 'Penang Hill funicular panoramic views', 'Michelin-guide street food tasting'],
  },
  {
    id: 'kl-genting-langkawi',
    title: 'KL + Genting + Langkawi',
    duration: '5 Nights / 6 Days',
    tagline: 'City, hills and island escape.',
    description: 'Bring together three contrasting Malaysian experiences in one holiday.',
    image: '/images/malaysia_dest/itin_genting_skyway.jpg',
    days: [
      { day: 'Day 1', title: 'Arrive in Kuala Lumpur', desc: 'Airport transfer, relax, evening walking tour of vibrant city center.' },
      { day: 'Day 2', title: 'Batu Caves & Genting Highlands', desc: 'Batu Caves photo stop, Awana Skyway cable car to Genting resort plateau & indoor parks.' },
      { day: 'Day 3', title: 'KL Metropolis to Langkawi', desc: 'Petronas Towers photo stop, flight to Langkawi paradise, beachfront resort check-in.' },
      { day: 'Day 4', title: 'Langkawi Mangrove & Eagle Safari', desc: 'Kilim Geoforest Park boat safari through limestone caves, bat cave & floating fish farm.' },
      { day: 'Day 5', title: 'Langkawi Cable Car & SkyBridge', desc: 'World’s steepest cable car ride, 3D Art in Paradise museum & evening beach dinner.' },
      { day: 'Day 6', title: 'Farewell Malaysia', desc: 'Morning swim, duty-free shopping at Kuah Town, transfer for flight back home.' },
    ],
    highlights: ['3-in-1: City skyline, cool highlands & tropical islands', 'Kilim Geoforest UNESCO Mangrove boat safari', 'Genting Skyway cable car', 'Duty-free island luxury'],
  },
  {
    id: 'kl-melaka-penang',
    title: 'KL + Melaka + Penang',
    duration: '6 Nights / 7 Days',
    tagline: 'A journey through Malaysian culture.',
    description: 'A longer escape combining modern city life, heritage and local flavours.',
    image: '/images/malaysia_dest/itin_melaka_fortress.jpg',
    days: [
      { day: 'Day 1', title: 'Arrive in Kuala Lumpur', desc: 'Airport welcome, transfer to luxury hotel, evening stroll at KLCC fountain show.' },
      { day: 'Day 2', title: 'KL Heritage & Contemporary', desc: 'Batu Caves, Petronas Towers, Thean Hou Temple & Chinatown Petaling Street.' },
      { day: 'Day 3', title: 'UNESCO Melaka Excursion', desc: 'Dutch Square Stadthuys, St. Paul’s Hill, A Famosa Portuguese gate & Jonker Street.' },
      { day: 'Day 4', title: 'Journey to Penang', desc: 'Scenic transfer across Penang Bridge to pearl of the Orient, George Town evening.' },
      { day: 'Day 5', title: 'Penang Cultural Immersion', desc: 'Khoo Kongsi clan house, street art hunt, Kapitan Keling Mosque & street food trail.' },
      { day: 'Day 6', title: 'Penang Hill & Kek Lok Si', desc: 'Habitat rainforest nature canopy walk at Penang Hill & Kek Lok Si Temple.' },
      { day: 'Day 7', title: 'Final Souvenirs & Flight', desc: 'Local coffee & pastry tasting, transfer to airport for Chennai flight.' },
    ],
    highlights: ['Dual UNESCO Heritage: Melaka & George Town', 'Deep culinary & cultural immersion', 'A Famosa 500-year Portuguese fortress', 'Penang Hill Habitat canopy walk'],
  },
];

export default function MalaysiaDestination() {
  const whatsappInquiryUrl = (topic: string) =>
    `https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent(
      `Hello Holiday Star! I'm interested in the Malaysia Destination package: ${topic}. Please share details and pricing.`
    )}`;

  return (
    <div className="w-full bg-white text-slate-800 font-sans">
      <Helmet>
        <title>Malaysia. Truly Asia | Curated Holiday Packages from Chennai | Holiday Star</title>
        <meta
          name="description"
          content="Explore Malaysia with Holiday Star Tours & Travels. Visa-free entry for Indian passport holders. Curated packages across Kuala Lumpur, Genting, Melaka, Langkawi and Penang."
        />
        <meta property="og:title" content="Malaysia. Truly Asia — Holiday Star Tours & Travels" />
        <meta
          property="og:description"
          content="City skylines. Cool mountain escapes. Heritage streets. Tropical islands. Incredible food. Curated Malaysia tours from Chennai."
        />
        <link rel="canonical" href="https://holidaystartours.com/destinations/malaysia" />
      </Helmet>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 1: HERO SECTION
          - Dusk Petronas Twin Towers skyline background
          - "Welcome to Malaysia ♡" in green script font
          - "Malaysia. Truly Asia." bold title
          - Dual subtitle texts
          - Emerald green + Purple CTA buttons
          - Bottom-left smooth curving emerald wave
      ───────────────────────────────────────────────────────────── */}
      <section className="relative min-h-[580px] lg:min-h-[660px] flex items-center overflow-hidden bg-[#0A121A] pt-28 pb-16 lg:pt-32 lg:pb-24">
        {/* Hero Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/hero-bg.jpg"
            alt="Kuala Lumpur skyline at sunset featuring illuminated Petronas Twin Towers, KL Tower, and a lantern-lit rainforest canopy walkway"
            className="w-full h-full object-cover object-center scale-100 select-none pointer-events-none"
            loading="eager"
            fetchPriority="high"
          />
          {/* Directional contrast gradient: provides crisp readability for text on the left while leaving the glowing Petronas Towers & sunset illuminated on the right */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 lg:via-black/40 to-transparent pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30 pointer-events-none" />
          {/* Mobile-only backdrop for extra readability on narrow screens */}
          <div className="lg:hidden absolute inset-0 bg-black/40 backdrop-blur-[1px] pointer-events-none" />
        </div>

        <div className="container-hs relative z-10 w-full">
          <div className="max-w-xl lg:max-w-2xl">
            {/* Eyebrow Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-emerald-300 bg-emerald-950/70 border border-emerald-500/30 backdrop-blur-md mb-3 shadow-sm w-fit">
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
              <span>Welcome to Malaysia</span>
            </div>

            {/* Bold Heading */}
            <h1 className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-[1.06] mb-4">
              <span className="text-white block drop-shadow-[0_2px_12px_rgba(0,0,0,0.8)]">Malaysia.</span>
              <span
                className="block text-transparent bg-clip-text drop-shadow-[0_2px_16px_rgba(0,180,216,0.4)]"
                style={{
                  backgroundImage: 'linear-gradient(90deg, #0066CC 0%, #00B4D8 100%)',
                }}
              >
                Truly Asia.
              </span>
            </h1>

            {/* Subtext 1 */}
            <p className="text-sm sm:text-base md:text-lg font-semibold text-white/95 mb-3 leading-snug drop-shadow-[0_1px_4px_rgba(0,0,0,0.8)]">
              City skylines. Cool mountain escapes. Heritage streets. Tropical islands. Incredible food.
            </p>

            {/* Subtext 2 */}
            <p className="text-xs sm:text-sm md:text-base text-slate-200/90 mb-8 leading-relaxed max-w-lg drop-shadow-[0_1px_3px_rgba(0,0,0,0.8)]">
              Malaysia brings together completely different experiences in one easy international holiday. From Chennai,
              it's closer than you think.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3.5">
              <a
                href="#malaysia-packages"
                className="px-6 py-3 text-white text-xs sm:text-sm font-semibold rounded-full transition-all duration-300 shadow-md hover:shadow-lg hover:scale-[1.02] flex items-center gap-2.5 group cursor-pointer"
                style={{
                  background: 'linear-gradient(90deg, #0066CC 0%, #00B4D8 100%)',
                  boxShadow: '0 3px 12px rgba(0, 180, 216, 0.35)',
                }}
              >
                <div className="w-5 h-5 rounded-full bg-white/25 flex items-center justify-center">
                  <Compass className="w-3.5 h-3.5 text-white" />
                </div>
                <span>Explore Malaysia Packages</span>
              </a>

              <a
                href={whatsappInquiryUrl('General Malaysia Inquiry')}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs sm:text-sm font-semibold rounded-full transition-all duration-300 shadow-md hover:shadow-lg hover:scale-[1.02] flex items-center gap-2 cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 text-white fill-white/20" />
                <span>WhatsApp Us</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 2: VISA-FREE ENTRY FOR INDIAN TRAVELLERS BANNER
          - Green to Purple smooth gradient
          - Passport illustration with verified check badge
          - Bold white copy
          - White Malaysia Truly Asia script + Red Hibiscus flower
      ───────────────────────────────────────────────────────────── */}
      <section className="py-8 bg-white">
        <div className="container-hs">
          <div className="relative rounded-2xl sm:rounded-3xl p-6 sm:p-7 lg:p-8 bg-gradient-to-r from-[#179b63] via-[#107d6d] to-[#602f9c] text-white shadow-lg overflow-hidden flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Left Content */}
            <div className="flex items-center gap-4 sm:gap-6 z-10">
              {/* Passport Icon Graphic with Green Check Badge */}
              <div className="relative shrink-0">
                <div className="w-14 h-18 sm:w-16 sm:h-20 bg-[#163f35] rounded-lg border-2 border-emerald-300/40 shadow-md flex flex-col items-center justify-center p-1.5 relative rotate-[-4deg]">
                  <div className="w-6 h-6 rounded-full border border-emerald-300/60 flex items-center justify-center mb-1">
                    <span className="text-[9px] font-bold text-emerald-200">PAS</span>
                  </div>
                  <div className="w-8 h-1 bg-emerald-300/40 rounded-full mb-1" />
                  <div className="w-6 h-1 bg-emerald-300/30 rounded-full" />
                </div>
                {/* Checkmark circular badge */}
                <div className="absolute -bottom-1.5 -right-1.5 w-7 h-7 rounded-full bg-emerald-500 border-2 border-white flex items-center justify-center shadow-md">
                  <Check className="w-4 h-4 text-white stroke-[3]" />
                </div>
              </div>

              <div>
                <h2 className="font-heading font-extrabold text-lg sm:text-xl lg:text-2xl text-white tracking-tight leading-tight mb-1">
                  Visa-Free Entry for Indian Travellers
                </h2>
                <p className="text-xs sm:text-sm text-emerald-50/95 font-normal max-w-xl leading-relaxed">
                  Indian passport holders can enjoy visa-free entry to Malaysia for up to 30 days for tourism purposes.
                </p>
              </div>
            </div>

            {/* Right: Malaysia Truly Asia Script & Hibiscus Flower */}
            <div className="flex items-center gap-3 shrink-0 z-10 self-center md:self-auto">
              <div className="text-right">
                <div className="font-heading text-2xl sm:text-3xl text-white font-black leading-none tracking-wider drop-shadow-xs uppercase">
                  Malaysia
                </div>
                <div className="font-sans text-[11px] sm:text-xs tracking-[0.2em] text-white/90 uppercase font-medium">
                  Truly Asia
                </div>
              </div>
              {/* Red Hibiscus (Bunga Raya) graphic */}
              <div className="w-10 h-10 sm:w-12 sm:h-12 relative flex items-center justify-center shrink-0">
                <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-md">
                  {/* Hibiscus Petals */}
                  <circle cx="50" cy="35" r="22" fill="#e11d48" opacity="0.95" />
                  <circle cx="65" cy="48" r="22" fill="#f43f5e" opacity="0.95" />
                  <circle cx="58" cy="68" r="22" fill="#be123c" opacity="0.95" />
                  <circle cx="42" cy="68" r="22" fill="#e11d48" opacity="0.95" />
                  <circle cx="35" cy="48" r="22" fill="#f43f5e" opacity="0.95" />
                  {/* Center Pistil & Stamen */}
                  <path d="M 50 50 Q 60 30 75 18" stroke="#fef08a" strokeWidth="4" strokeLinecap="round" fill="none" />
                  <circle cx="75" cy="18" r="4" fill="#fbbf24" />
                  <circle cx="72" cy="22" r="3" fill="#f59e0b" />
                  <circle cx="78" cy="22" r="3" fill="#f59e0b" />
                </svg>
              </div>
            </div>

            {/* Background subtle glow effect */}
            <div className="absolute top-0 right-0 w-72 h-72 bg-white/10 rounded-full blur-3xl pointer-events-none" />
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 3: WHY MALAYSIA? ONE COUNTRY. SO MANY WAYS TO HOLIDAY.
          - Cursive subtitle "Why Malaysia?"
          - Heading "One country. So many ways to holiday."
          - 4 Feature Cards (First-time, Families, Couples, Groups)
          - Right organic double-scallop graphic cutout
      ───────────────────────────────────────────────────────────── */}
      <section className="py-16 bg-white overflow-hidden">
        <div className="container-hs">
          {/* Section Heading */}
          <div className="mb-12">
            <div className="text-xs font-bold uppercase tracking-[0.2em] text-[#108560] mb-2">
              Why Malaysia?
            </div>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-4xl tracking-tight leading-tight mb-2">
              <span className="text-[#026079]">One country. So many </span>
              <span className="text-[#602f9c]">ways to holiday.</span>
            </h2>
            <div className="w-16 h-1 bg-[#0284c7] rounded-full" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            {/* Left: 4 Audience Cards in a 4-column (or 2x2 on tablet) layout */}
            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
              {/* Card 1: First-time travellers */}
              <div className="bg-white rounded-2xl p-5 sm:p-6 border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col items-center text-center group">
                <div className="w-13 h-13 rounded-full bg-[#10b981] flex items-center justify-center text-white mb-4 shadow-xs group-hover:scale-105 transition-transform">
                  <Plane className="w-6 h-6 rotate-[-45deg]" />
                </div>
                <h3 className="font-heading font-bold text-sm sm:text-base text-[#0f2744] mb-2 leading-snug">
                  For first-time international travellers
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed font-light">
                  An approachable destination for travellers planning their first overseas holiday.
                </p>
              </div>

              {/* Card 2: Families */}
              <div className="bg-white rounded-2xl p-5 sm:p-6 border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col items-center text-center group">
                <div className="w-13 h-13 rounded-full bg-[#0284c7] flex items-center justify-center text-white mb-4 shadow-xs group-hover:scale-105 transition-transform">
                  <Users className="w-6 h-6" />
                </div>
                <h3 className="font-heading font-bold text-sm sm:text-base text-[#0f2744] mb-2 leading-snug">
                  For families
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed font-light">
                  A mix of city attractions, comfortable stays and experiences for different ages.
                </p>
              </div>

              {/* Card 3: Couples */}
              <div className="bg-white rounded-2xl p-5 sm:p-6 border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col items-center text-center group">
                <div className="w-13 h-13 rounded-full bg-[#7c3aed] flex items-center justify-center text-white mb-4 shadow-xs group-hover:scale-105 transition-transform">
                  <Heart className="w-6 h-6 fill-white" />
                </div>
                <h3 className="font-heading font-bold text-sm sm:text-base text-[#0f2744] mb-2 leading-snug">
                  For couples
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed font-light">
                  City evenings, island sunsets, food and memorable experiences.
                </p>
              </div>

              {/* Card 4: Groups */}
              <div className="bg-white rounded-2xl p-5 sm:p-6 border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col items-center text-center group">
                <div className="w-13 h-13 rounded-full bg-[#059669] flex items-center justify-center text-white mb-4 shadow-xs group-hover:scale-105 transition-transform">
                  <Users className="w-6 h-6" />
                </div>
                <h3 className="font-heading font-bold text-sm sm:text-base text-[#0f2744] mb-2 leading-snug">
                  For groups
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed font-light">
                  Flexible combinations of destinations and experiences for shared travel.
                </p>
              </div>
            </div>

            {/* Right: Organic Curved Graphic Cutout (Double-Lobe: Petronas + Genting Tea Hills Cable Car) */}
            <div className="lg:col-span-4 flex justify-center">
              <div className="relative w-full max-w-[340px] aspect-[4/5] rounded-[36px] overflow-hidden shadow-xl border-4 border-white">
                {/* Top Half: Petronas Twin Towers Sky */}
                <div className="h-[48%] w-full overflow-hidden relative">
                  <img
                    src="/images/malaysia_dest/feature_petronas_day.jpg"
                    alt="Petronas Twin Towers in blue sunny sky"
                    className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700"
                  />
                  {/* Soft gradient blend */}
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/60" />
                </div>

                {/* Bottom Half: Genting Cable Car over Tea Terraces */}
                <div className="h-[52%] w-full overflow-hidden relative">
                  <img
                    src="/images/malaysia_dest/feature_genting_cablecar.jpg"
                    alt="Red cable car gondola floating over lush green tea plantations in Cameron Highlands"
                    className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-700"
                  />
                </div>

                {/* Floating pill badge */}
                <div className="absolute top-3 right-3 px-3 py-1 bg-white/90 backdrop-blur-md rounded-full shadow-sm text-[10px] font-bold text-[#026079]">
                  Explore Malaysia
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 4: POPULAR MALAYSIA ITINERARIES (6 CARDS)
          - Purple script title
          - 3 columns x 2 rows grid
          - Generated photography, bold titles, duration, taglines, green CTA
      ───────────────────────────────────────────────────────────── */}
      <section id="malaysia-packages" className="py-16 bg-[#fafbfd] border-y border-gray-100">
        <div className="container-hs">
          {/* Section Heading */}
          <div className="mb-10">
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-hs-navy mb-2 tracking-tight">
              Popular Malaysia Itineraries
            </h2>
            <div className="w-14 h-1 bg-[#0284c7] rounded-full" />
          </div>

          {/* 6 Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {malaysiaItineraries.map((itin) => (
              <div
                key={itin.id}
                className="bg-white rounded-2xl overflow-hidden border border-gray-200/70 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Card Image */}
                  <div className="aspect-[16/10] overflow-hidden relative">
                    <img
                      src={itin.image}
                      alt={itin.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                  </div>

                  {/* Card Content */}
                  <div className="p-5 sm:p-6">
                    <h3 className="font-heading font-extrabold text-base sm:text-lg text-[#0b3b64] mb-2 leading-snug">
                      {itin.title}
                    </h3>

                    {/* Duration & Tagline */}
                    <div className="flex flex-wrap items-center gap-1.5 text-xs mb-3">
                      <span className="font-bold text-[#0066CC]">{itin.duration}</span>
                      <span className="text-gray-300">|</span>
                      <span className="text-slate-600 font-medium">{itin.tagline}</span>
                    </div>

                    {/* Description */}
                    <p className="text-xs text-slate-500 leading-relaxed font-light line-clamp-3">
                      {itin.description}
                    </p>
                  </div>
                </div>

                {/* Card Button */}
                <div className="px-5 sm:px-6 pb-6 pt-0">
                  <Link
                    to="/plan-holiday#plan-holiday-form"
                    state={{ destination: 'Malaysia', packageTitle: itin.title }}
                    className="inline-flex px-4.5 py-2 text-white text-xs font-semibold rounded-full transition-all duration-300 shadow-sm hover:shadow-md hover:scale-[1.02] items-center gap-1.5 cursor-pointer group/btn"
                    style={{
                      background: 'linear-gradient(90deg, #0066CC 0%, #00B4D8 100%)',
                      boxShadow: '0 2px 10px rgba(0, 180, 216, 0.30)',
                    }}
                  >
                    <span>View Full Itinerary</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 4B: SAMPLE ITINERARY (MATCHING REFERENCE IMAGE EXACTLY)
          - Top Header: SAMPLE ITINERARY + teal underline + Malaysia Highlights + 4 NIGHTS / 5 DAYS + subtitle
          - 5-step horizontal connected timeline with circular 01-05 badges
          - Divider line
          - 3 perks (Car, Building2, Map) with soft mint circles & vertical dividers
          - Centered blue-to-cyan gradient CTA button: Customise This Itinerary →
      ───────────────────────────────────────────────────────────── */}
      <section className="relative py-20 overflow-hidden bg-white">
        {/* Section Background matching About Us Our Story section */}
        <div className="absolute inset-0 z-0 select-none pointer-events-none">
          <img
            src="/images/our_story_bg.jpg"
            alt="Our Story Background"
            className="w-full h-full object-cover object-left-bottom lg:object-center opacity-85"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/75 via-white/45 to-white/75 pointer-events-none" />
        </div>

        <div className="container-hs relative z-10">
          {/* Top Header */}
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="text-[11px] sm:text-xs font-bold tracking-[0.25em] uppercase text-[#0d9488] mb-1.5">
              SAMPLE ITINERARY
            </div>
            <div className="w-9 h-0.5 bg-[#00A3C4] mx-auto mb-4" />

            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-[#0b3b64] tracking-tight mb-2">
              Malaysia Highlights
            </h2>
            <div className="text-xs sm:text-sm font-bold tracking-[0.2em] uppercase text-[#0b3b64] mb-3">
              4 NIGHTS / 5 DAYS
            </div>
            <p className="text-xs sm:text-sm text-slate-500 font-light leading-relaxed max-w-xl mx-auto">
              A well-paced itinerary covering iconic city landmarks, cool mountain heights and colonial heritage.
            </p>
          </div>

          {/* 5-Step Connected Horizontal Timeline */}
          <div className="relative max-w-5xl mx-auto mb-14">
            {/* Horizontal dashed blue connector line behind circles */}
            <div className="hidden md:block absolute top-6 left-[8%] right-[8%] h-px border-t border-dashed border-sky-300 z-0" />

            <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-3 relative z-10">
              {[
                {
                  number: '01',
                  day: 'Day 1',
                  title: 'Arrive in Kuala Lumpur',
                  desc: 'Airport pickup, hotel check-in & evening city stroll.',
                },
                {
                  number: '02',
                  day: 'Day 2',
                  title: 'KL City Sightseeing',
                  desc: 'Petronas Twin Towers, Batu Caves & city highlights.',
                },
                {
                  number: '03',
                  day: 'Day 3',
                  title: 'Genting Highlands',
                  desc: 'Scenic Awana SkyWay cable car, theme parks & shopping.',
                },
                {
                  number: '04',
                  day: 'Day 4',
                  title: 'Melaka Heritage Tour',
                  desc: 'Historic river cruise, Dutch Square & Jonker Street walk.',
                },
                {
                  number: '05',
                  day: 'Day 5',
                  title: 'Shopping & Departure',
                  desc: 'Souvenir shopping at Bukit Bintang & departure flight.',
                },
              ].map((step) => (
                <div key={step.number} className="flex flex-col items-center text-center">
                  {/* Circular Number Badge */}
                  <div className="w-12 h-12 rounded-full bg-[#0066CC] text-white font-bold text-sm flex items-center justify-center shadow-md mb-3 shrink-0 ring-4 ring-white relative z-10">
                    {step.number}
                  </div>

                  {/* Day Label */}
                  <div className="text-xs text-slate-600 font-medium mb-1">
                    {step.day}
                  </div>

                  {/* Title */}
                  <h4 className="font-heading font-bold text-sm text-[#0b3b64] mb-1.5 leading-snug">
                    {step.title}
                  </h4>

                  {/* Description */}
                  <p className="text-[11px] sm:text-xs text-slate-500 font-light leading-relaxed max-w-[190px]">
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Thin Divider Line */}
          <div className="max-w-5xl mx-auto h-px bg-gray-200/70 mb-10" />

          {/* 3 Perks Row */}
          <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-12 mb-10 text-slate-700">
            {/* Perk 1 */}
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-full bg-[#E6F8F0] text-[#10B981] flex items-center justify-center shrink-0">
                <Car className="w-5 h-5" />
              </div>
              <div className="text-xs sm:text-sm font-medium leading-snug text-slate-700 text-left">
                Private AC transfers<br />throughout
              </div>
            </div>

            <div className="hidden sm:block w-px h-8 bg-gray-200" />

            {/* Perk 2 */}
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-full bg-[#E6F8F0] text-[#10B981] flex items-center justify-center shrink-0">
                <Building2 className="w-5 h-5" />
              </div>
              <div className="text-xs sm:text-sm font-medium leading-snug text-slate-700 text-left">
                Handpicked central<br />4★ / 5★ hotels
              </div>
            </div>

            <div className="hidden sm:block w-px h-8 bg-gray-200" />

            {/* Perk 3 */}
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-full bg-[#E6F8F0] text-[#10B981] flex items-center justify-center shrink-0">
                <Map className="w-5 h-5" />
              </div>
              <div className="text-xs sm:text-sm font-medium leading-snug text-slate-700 text-left">
                100% flexible<br />dates & activities
              </div>
            </div>
          </div>

          {/* Centered CTA Button */}
          <div className="text-center">
            <Link
              to="/plan-holiday#plan-holiday-form"
              state={{ destination: 'Malaysia', packageTitle: 'Malaysia Highlights (4N/5D)' }}
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 text-white font-semibold text-xs sm:text-sm rounded-full transition-all shadow-md hover:shadow-lg hover:scale-[1.02] cursor-pointer group"
              style={{
                background: 'linear-gradient(90deg, #0066CC 0%, #00B4D8 100%)',
              }}
            >
              <span>Customise This Itinerary</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 5: WHAT YOUR PACKAGE CAN INCLUDE & BEFORE YOU TRAVEL
          - Background: Sky with clouds and tropical leaf shadows
          - Left: 7 items with sky-blue line icons
          - Center: Vertical subtle divider
          - Right: 4 travel guidelines with circular badges + architectural watermark
      ───────────────────────────────────────────────────────────── */}
      <section className="py-20 relative overflow-hidden">
        {/* Background Asset matching About Us What We Do section */}
        <div className="absolute inset-0 z-0 select-none pointer-events-none">
          <img
            src="/images/what_we_do_bg.jpg"
            alt="What we do background with leaf shadows"
            className="w-full h-full object-cover object-center opacity-85"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-transparent to-white/70 pointer-events-none" />
        </div>

        <div className="container-hs relative z-10">
          <div className="bg-white/85 backdrop-blur-md rounded-3xl p-8 sm:p-10 lg:p-12 border border-white/90 shadow-xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
            {/* Left Column: What Your Package Can Include */}
            <div className="lg:col-span-6 lg:border-r lg:border-gray-100 lg:pr-10">
              <div className="mb-8">
                <h2 className="font-heading font-extrabold text-2xl sm:text-3xl tracking-tight leading-tight mb-2">
                  <span className="text-[#026079] block">What Your Package</span>
                  <span className="text-[#602f9c] block">Can Include</span>
                </h2>
                <div className="w-12 h-1 bg-[#0284c7] rounded-full" />
              </div>

              {/* 2-Column Grid of 7 Inclusions */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-6">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-sky-50 border border-sky-100 flex items-center justify-center text-[#0284c7] shrink-0">
                    <Plane className="w-4 h-4 rotate-[-45deg]" />
                  </div>
                  <span className="text-xs sm:text-sm text-slate-700 font-medium">
                    Flights, where included
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-sky-50 border border-sky-100 flex items-center justify-center text-[#0284c7] shrink-0">
                    <Camera className="w-4 h-4" />
                  </div>
                  <span className="text-xs sm:text-sm text-slate-700 font-medium">
                    Sightseeing
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-sky-50 border border-sky-100 flex items-center justify-center text-[#0284c7] shrink-0">
                    <Building2 className="w-4 h-4" />
                  </div>
                  <span className="text-xs sm:text-sm text-slate-700 font-medium">
                    Hotel accommodation
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-sky-50 border border-sky-100 flex items-center justify-center text-[#0284c7] shrink-0">
                    <Footprints className="w-4 h-4" />
                  </div>
                  <span className="text-xs sm:text-sm text-slate-700 font-medium">
                    Selected activities
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-sky-50 border border-sky-100 flex items-center justify-center text-[#0284c7] shrink-0">
                    <Car className="w-4 h-4" />
                  </div>
                  <span className="text-xs sm:text-sm text-slate-700 font-medium">
                    Airport and intercity transfers
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-sky-50 border border-sky-100 flex items-center justify-center text-[#0284c7] shrink-0">
                    <Users className="w-4 h-4" />
                  </div>
                  <span className="text-xs sm:text-sm text-slate-700 font-medium">
                    Group or private arrangements, where applicable
                  </span>
                </div>

                <div className="flex items-center gap-3 sm:col-span-2">
                  <div className="w-9 h-9 rounded-lg bg-sky-50 border border-sky-100 flex items-center justify-center text-[#0284c7] shrink-0">
                    <Utensils className="w-4 h-4" />
                  </div>
                  <span className="text-xs sm:text-sm text-slate-700 font-medium">
                    Meals, where included
                  </span>
                </div>
              </div>
            </div>

            {/* Right Column: Before You Travel */}
            <div className="lg:col-span-6 relative">
              {/* Background architectural line art watermark */}
              <div className="absolute right-0 top-0 bottom-0 w-64 pointer-events-none opacity-10 select-none overflow-hidden hidden sm:block">
                <svg viewBox="0 0 200 300" className="w-full h-full text-[#0284c7]" stroke="currentColor" fill="none" strokeWidth="1.5">
                  {/* Petronas Tower left spire */}
                  <line x1="60" y1="30" x2="60" y2="70" />
                  <polygon points="50,70 70,70 65,150 55,150" />
                  <polygon points="45,150 75,150 70,280 50,280" />
                  {/* Petronas Tower right spire */}
                  <line x1="120" y1="30" x2="120" y2="70" />
                  <polygon points="110,70 130,70 125,150 115,150" />
                  <polygon points="105,150 135,150 130,280 110,280" />
                  {/* Skybridge */}
                  <line x1="65" y1="170" x2="115" y2="170" strokeWidth="2" />
                  {/* Dome & Minaret */}
                  <path d="M 150 220 Q 165 190 180 220 Z" />
                  <line x1="165" y1="170" x2="165" y2="190" />
                </svg>
              </div>

              <div className="mb-6">
                <div className="text-xs font-bold uppercase tracking-[0.2em] text-[#108560] mb-1">
                  Before You Travel
                </div>
              </div>

              {/* 4 Guidelines List */}
              <div className="space-y-5 relative z-10">
                {/* 1. Visa */}
                <div className="flex items-start gap-4">
                  <div className="w-9 h-9 rounded-full bg-[#10b981] flex items-center justify-center text-white shrink-0 mt-0.5 shadow-xs">
                    <FileText className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-xs sm:text-sm text-[#0f2744] mb-0.5">
                      Visa & entry requirements
                    </h3>
                    <p className="text-xs text-slate-500 leading-relaxed font-light">
                      Current entry requirements depend on nationality and travel circumstances. Holiday Star can guide travellers through the applicable requirements for their trip.
                    </p>
                  </div>
                </div>

                {/* 2. Best time to visit */}
                <div className="flex items-start gap-4">
                  <div className="w-9 h-9 rounded-full bg-[#0284c7] flex items-center justify-center text-white shrink-0 mt-0.5 shadow-xs">
                    <Calendar className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-xs sm:text-sm text-[#0f2744] mb-0.5">
                      Best time to visit
                    </h3>
                    <p className="text-xs text-slate-500 leading-relaxed font-light">
                      Malaysia can be visited throughout much of the year, with weather conditions varying between regions.
                    </p>
                  </div>
                </div>

                {/* 3. Currency */}
                <div className="flex items-start gap-4">
                  <div className="w-9 h-9 rounded-full bg-[#7c3aed] flex items-center justify-center text-white shrink-0 mt-0.5 shadow-xs">
                    <Coins className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-xs sm:text-sm text-[#0f2744] mb-0.5">
                      Currency
                    </h3>
                    <p className="text-xs text-slate-500 leading-relaxed font-light">
                      Malaysian Ringgit (MYR).
                    </p>
                  </div>
                </div>

                {/* 4. Flight time */}
                <div className="flex items-start gap-4">
                  <div className="w-9 h-9 rounded-full bg-[#4338ca] flex items-center justify-center text-white shrink-0 mt-0.5 shadow-xs">
                    <Plane className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-xs sm:text-sm text-[#0f2744] mb-0.5">
                      Flight time
                    </h3>
                    <p className="text-xs text-slate-500 leading-relaxed font-light">
                      Approximately four hours from Chennai, depending on flight routing.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 6: "READY FOR MALAYSIA?" CTA BANNER
          - Blue to Purple gradient banner
          - Commercial airplane flying in clouds on left
          - Overwater tropical bungalows on right
          - Central call to action + 2 buttons
      ───────────────────────────────────────────────────────────── */}
      <section className="py-10 bg-white">
        <div className="container-hs">
          <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-[#035388] via-[#1e3a8a] to-[#581c87] text-white shadow-xl min-h-[220px] flex items-center">
            {/* Left Image: Airplane flying amidst clouds */}
            <div className="absolute left-0 top-0 bottom-0 w-1/4 sm:w-1/3 overflow-hidden pointer-events-none hidden sm:block">
              <img
                src="/images/malaysia_dest/cta_airplane_clouds.jpg"
                alt="Passenger jet in clouds"
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#035388]/60 to-[#035388]" />
            </div>

            {/* Right Image: Overwater wooden bungalows */}
            <div className="absolute right-0 top-0 bottom-0 w-1/4 sm:w-1/3 overflow-hidden pointer-events-none hidden sm:block">
              <img
                src="/images/malaysia_dest/cta_overwater_villas.jpg"
                alt="Tropical overwater bungalows in Malaysia"
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#581c87]/60 to-[#581c87]" />
            </div>

            {/* Center Content */}
            <div className="relative z-10 w-full py-10 px-6 sm:px-12 text-center max-w-2xl mx-auto flex flex-col items-center">
              <h2 className="font-heading font-extrabold text-2xl sm:text-3xl lg:text-4xl text-white tracking-tight mb-2">
                Ready for Malaysia?
              </h2>
              <p className="text-xs sm:text-sm text-cyan-50/90 font-light mb-6 max-w-lg leading-relaxed">
                Tell us your travel month, group size and preferred itinerary. We'll help you plan the rest.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center justify-center gap-3.5">
                <a
                  href={whatsappInquiryUrl('Custom Malaysia Holiday Planning')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 text-white text-xs sm:text-sm font-semibold rounded-full transition-all duration-300 shadow-md hover:shadow-lg hover:scale-[1.02] flex items-center gap-2 cursor-pointer"
                  style={{
                    background: 'linear-gradient(90deg, #0066CC 0%, #00B4D8 100%)',
                    boxShadow: '0 3px 12px rgba(0, 180, 216, 0.35)',
                  }}
                >
                  <Luggage className="w-4 h-4 text-white" />
                  <span>Plan My Malaysia Holiday</span>
                </a>

                <a
                  href={whatsappInquiryUrl('Malaysia Package Inquiry')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-[#7c3aed] hover:bg-[#6b21a8] text-white text-xs sm:text-sm font-semibold rounded-full transition-all duration-300 shadow-md hover:shadow-lg flex items-center gap-2 cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4 text-white fill-white/20" />
                  <span>WhatsApp Us</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
