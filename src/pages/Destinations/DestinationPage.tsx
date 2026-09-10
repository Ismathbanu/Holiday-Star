import { useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import {
  ArrowRight,
  Calendar,
  Plane,
  Clock,
  Banknote,
  Globe,
  ChevronDown,
  MessageCircle,
  Heart,
  Building2,
  Landmark,
  Utensils,
  Palmtree,
  Trees,
  Compass,
  Ticket,
  ShoppingBag,
  Camera,
  Anchor,
  HelpCircle
} from 'lucide-react';
import AnimatedSection from '../../components/common/AnimatedSection';
import { getDestinationBySlug } from '../../data/destinations';
import { getPackagesByDestination } from '../../data/packages';
import { siteConfig } from '../../data/siteConfig';
import MalaysiaDestination from './MalaysiaDestination';

// ── FAQ Accordion Item Component ──
function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-2xs overflow-hidden transition-all duration-300">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-5 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-blue-50/50 transition-colors"
      >
        <div className="flex items-center gap-3">
          <HelpCircle className="w-4 h-4 text-[#0066CC] shrink-0" />
          <span className="font-heading font-bold text-xs sm:text-sm text-hs-navy">
            {question}
          </span>
        </div>
        <div className={`w-7 h-7 rounded-full bg-hs-cream flex items-center justify-center text-hs-navy transition-transform duration-300 ${isOpen ? 'rotate-180 bg-blue-100 text-[#0066CC]' : ''}`}>
          <ChevronDown className="w-4 h-4" />
        </div>
      </button>
      {isOpen && (
        <div className="px-5 pb-5 pt-0 text-xs text-hs-text-secondary leading-relaxed font-light border-t border-gray-50 mt-1">
          <p className="pt-3">{answer}</p>
        </div>
      )}
    </div>
  );
}

// ── Attraction Strips Data per Destination ──
const destinationAttractions: Record<string, Array<{ name: string; tag: string; icon: any }>> = {
  malaysia: [
    { name: 'Kuala Lumpur', tag: 'Capital & Towers', icon: Building2 },
    { name: 'Genting Highlands', tag: 'Cool Mountains', icon: Trees },
    { name: 'Melaka', tag: 'UNESCO Heritage', icon: Landmark },
    { name: 'Penang', tag: 'Street Food Capital', icon: Utensils },
    { name: 'Langkawi', tag: 'Island & Skybridge', icon: Palmtree },
    { name: 'Sabah', tag: 'Borneo Adventure', icon: Compass },
    { name: 'Sarawak', tag: 'Rainforest & Culture', icon: Anchor },
  ],
  thailand: [
    { name: 'Bangkok', tag: 'Temples & Nightlife', icon: Building2 },
    { name: 'Phuket', tag: 'Tropical Beaches', icon: Palmtree },
    { name: 'Chiang Mai', tag: 'Mountain Heritage', icon: Landmark },
    { name: 'Krabi', tag: 'Limestone Cliffs', icon: Compass },
    { name: 'Pattaya', tag: 'Beach Resort City', icon: Camera },
    { name: 'Ayutthaya', tag: 'Ancient Ruins', icon: Landmark },
    { name: 'Koh Samui', tag: 'Luxury Island', icon: Palmtree },
  ],
  vietnam: [
    { name: 'Ha Long Bay', tag: 'Emerald Karst Cruise', icon: Anchor },
    { name: 'Hoi An', tag: 'Lantern Ancient Town', icon: Landmark },
    { name: 'Ho Chi Minh', tag: 'Vibrant Metropolis', icon: Building2 },
    { name: 'Hanoi', tag: 'Historic Capital', icon: Compass },
    { name: 'Da Nang', tag: 'Golden Bridge & Coast', icon: Palmtree },
    { name: 'Sapa', tag: 'Rice Terraces & Peaks', icon: Trees },
    { name: 'Phu Quoc', tag: 'Island Retreat', icon: Utensils },
  ],
  'sri-lanka': [
    { name: 'Sigiriya', tag: 'Lion Rock Fortress', icon: Landmark },
    { name: 'Kandy', tag: 'Sacred Hill Capital', icon: Compass },
    { name: 'Nuwara Eliya', tag: 'Little England & Tea', icon: Trees },
    { name: 'Ella', tag: 'Nine Arches Train', icon: Palmtree },
    { name: 'Galle', tag: 'Colonial Dutch Fort', icon: Anchor },
    { name: 'Colombo', tag: 'Vibrant Capital', icon: Building2 },
    { name: 'Yala', tag: 'Wildlife Safari', icon: Trees },
  ],
  dubai: [
    { name: 'Burj Khalifa', tag: 'World\'s Tallest', icon: Building2 },
    { name: 'Desert Safari', tag: 'Red Dune Adventure', icon: Compass },
    { name: 'Dubai Mall', tag: 'Shopping & Fountains', icon: ShoppingBag },
    { name: 'Palm Jumeirah', tag: 'Man-Made Island', icon: Palmtree },
    { name: 'Old Dubai', tag: 'Gold & Spice Souks', icon: Landmark },
    { name: 'Dubai Marina', tag: 'Yacht & Waterfront', icon: Anchor },
    { name: 'Future Museum', tag: 'Futuristic Marvel', icon: Ticket },
  ],
  singapore: [
    { name: 'Marina Bay', tag: 'Iconic Skyline', icon: Building2 },
    { name: 'Gardens by Bay', tag: 'Supertree Grove', icon: Trees },
    { name: 'Sentosa Island', tag: 'Universal & Beaches', icon: Palmtree },
    { name: 'Chinatown', tag: 'Heritage & Food', icon: Landmark },
    { name: 'Orchard Road', tag: 'Shopping Paradise', icon: ShoppingBag },
    { name: 'Night Safari', tag: 'Nocturnal Wildlife', icon: Compass },
    { name: 'Jewel Changi', tag: 'Rain Vortex & Parks', icon: Anchor },
  ],
  indonesia: [
    { name: 'Bali', tag: 'Island of Gods', icon: Palmtree },
    { name: 'Jakarta', tag: 'Vibrant Capital', icon: Building2 },
    { name: 'Yogyakarta', tag: 'Culture & Temples', icon: Landmark },
    { name: 'Labuan Bajo', tag: 'Natural Wonders', icon: Compass },
    { name: 'Komodo Island', tag: 'Unique Wildlife', icon: Trees },
    { name: 'Lombok', tag: 'Pristine Beaches', icon: Palmtree },
    { name: 'Raja Ampat', tag: 'Diving Paradise', icon: Anchor },
  ],
};

// ── Sample Itineraries per Destination ──
const sampleItineraries: Record<string, { title: string; subtitle: string; days: Array<{ day: string; text: string }> }> = {
  malaysia: {
    title: 'Sample itinerary',
    subtitle: 'Malaysia Highlights (4N/5D)',
    days: [
      { day: 'Day 1', text: 'Arrive in Kuala Lumpur — Airport pickup, hotel check-in & evening city stroll' },
      { day: 'Day 2', text: 'KL City Sightseeing — Petronas Twin Towers, Batu Caves & KL Tower' },
      { day: 'Day 3', text: 'Genting Highlands Day Trip — Scenic cable car ride, theme parks & shopping' },
      { day: 'Day 4', text: 'Melaka UNESCO Day Tour — River cruise, Jonker Street & red square' },
      { day: 'Day 5', text: 'Shopping at Bukit Bintang & Departure flight back to Chennai' },
    ],
  },
  thailand: {
    title: 'Sample itinerary',
    subtitle: 'Bangkok + Phuket Bliss (5N/6D)',
    days: [
      { day: 'Day 1', text: 'Arrive in Bangkok — Airport transfer & hotel check-in' },
      { day: 'Day 2', text: 'Bangkok City & Temple Tour — Grand Palace, Wat Arun & Chao Phraya River' },
      { day: 'Day 3', text: 'Fly to Phuket — Hotel check-in & Patong Beach evening sunset' },
      { day: 'Day 4', text: 'Phi Phi Islands Speedboat Day Tour — Snorkeling, Maya Bay & buffet lunch' },
      { day: 'Day 5', text: 'Big Buddha, Phuket Old Town & leisure shopping' },
      { day: 'Day 6', text: 'Breakfast at hotel & transfer to Phuket Airport for flight to Chennai' },
    ],
  },
  vietnam: {
    title: 'Sample itinerary',
    subtitle: 'Hanoi + Ha Long Bay (4N/5D)',
    days: [
      { day: 'Day 1', text: 'Arrive in Hanoi — Old Quarter rickshaw walk & egg coffee tasting' },
      { day: 'Day 2', text: 'Transfer to Ha Long Bay — Board luxury overnight cruise ship' },
      { day: 'Day 3', text: 'Morning Tai Chi on deck, cave exploration & return to Hanoi' },
      { day: 'Day 4', text: 'Hanoi Cultural Tour — Ho Chi Minh Complex, Temple of Literature & Water Puppets' },
      { day: 'Day 5', text: 'Free time for local street food shopping & flight to Chennai' },
    ],
  },
  'sri-lanka': {
    title: 'Sample itinerary',
    subtitle: 'Kandy + Ella + Colombo (5N/6D)',
    days: [
      { day: 'Day 1', text: 'Arrive in Colombo — Transfer to Kandy via Pinnawala Elephant Sanctuary' },
      { day: 'Day 2', text: 'Temple of the Tooth Relic, Royal Botanical Gardens & Kandy Lake' },
      { day: 'Day 3', text: 'Scenic Train Ride from Kandy to Ella through tea gardens & mountains' },
      { day: 'Day 4', text: 'Ella Nine Arches Bridge hike, Little Adam\'s Peak & Ravana Falls' },
      { day: 'Day 5', text: 'Transfer to Colombo — Galle Face Green walk & Independence Square' },
      { day: 'Day 6', text: 'Souvenir shopping in Colombo & 1.5 hour flight to Chennai' },
    ],
  },
  dubai: {
    title: 'Sample itinerary',
    subtitle: 'Dubai Highlights Escape (4N/5D)',
    days: [
      { day: 'Day 1', text: 'Arrive in Dubai — Airport pickup & evening Marina Dhow Cruise Dinner' },
      { day: 'Day 2', text: 'Half-day City Tour — Burj Khalifa 124th Floor & Dubai Mall Fountains' },
      { day: 'Day 3', text: 'Morning Gold Souk & Afternoon Desert Safari with Dune Bashing & BBQ' },
      { day: 'Day 4', text: 'Museum of the Future or Miracle Garden & Palm Jumeirah view' },
      { day: 'Day 5', text: 'Leisure morning, shopping at Meena Bazaar & flight to Chennai' },
    ],
  },
  singapore: {
    title: 'Sample itinerary',
    subtitle: 'Singapore Wonder (3N/4D)',
    days: [
      { day: 'Day 1', text: 'Arrive in Singapore — Hotel check-in & evening Night Safari tram tour' },
      { day: 'Day 2', text: 'Gardens by the Bay (Cloud Forest + Flower Dome) & Marina Bay Sands' },
      { day: 'Day 3', text: 'Full day Sentosa Island — Cable Car, S.E.A. Aquarium & Wings of Time' },
      { day: 'Day 4', text: 'Chinatown food tour, Jewel Changi Rain Vortex & flight to Chennai' },
    ],
  },
  indonesia: {
    title: 'Sample itinerary',
    subtitle: 'Bali Getaway (4N/5D)',
    days: [
      { day: 'Day 1', text: 'Arrive in Bali — Airport pickup, hotel check-in & Kuta sunset' },
      { day: 'Day 2', text: 'Ubud Tour — Tegallalang Rice Terraces, Sacred Monkey Forest & Swing' },
      { day: 'Day 3', text: 'Full day Nusa Penida Island Speedboat Tour — Kelingking Beach & Broken Beach' },
      { day: 'Day 4', text: 'Uluwatu Clifftop Temple & Kecak Fire Dance sunset performance' },
      { day: 'Day 5', text: 'Balinese massage, souvenir shopping & flight to Chennai' },
    ],
  },
};

export default function DestinationPage() {
  const { slug } = useParams<{ slug: string }>();
  const destination = getDestinationBySlug(slug || '');

  if (!destination) {
    return <Navigate to="/destinations" replace />;
  }

  // If viewing Malaysia destination, render the dedicated recreated Malaysia destination page
  if (destination.slug === 'malaysia') {
    return <MalaysiaDestination />;
  }

  const packages = getPackagesByDestination(destination.id);
  const attractions = destinationAttractions[destination.slug] || destinationAttractions.malaysia;
  const itinerary = sampleItineraries[destination.slug] || sampleItineraries.malaysia;

  return (
    <>
      <Helmet>
        <title>{destination.seo.title}</title>
        <meta name="description" content={destination.seo.description} />
        <meta property="og:title" content={destination.seo.title} />
        <meta property="og:description" content={destination.seo.description} />
        <link rel="canonical" href={`https://holidaystartours.com/destinations/${destination.slug}`} />
      </Helmet>

      {/* Breadcrumb Navigation */}
      <div className="bg-hs-cream py-3 border-b border-gray-100">
        <div className="container-hs flex items-center gap-2 text-xs text-hs-text-muted">
          <Link to="/" className="hover:text-[#0066CC] transition-colors">Home</Link>
          <span>&gt;</span>
          <Link to="/destinations" className="hover:text-[#0066CC] transition-colors">Destinations</Link>
          <span>&gt;</span>
          <span className="font-semibold text-hs-navy">{destination.name}</span>
        </div>
      </div>

      {/* ── SECTION 1: HERO (FULL-WIDTH BACKGROUND WITH LEFT GRADIENT OVERLAY) ── */}
      <section className="relative min-h-[520px] lg:min-h-[580px] flex items-center overflow-hidden py-16 lg:py-24">
        {/* Full-width Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src={destination.heroImage}
            alt={`${destination.name} — ${destination.heroSubtitle}`}
            className="w-full h-full object-cover"
          />
          {/* Dark Full-Width Gradient Overlay */}
          <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-slate-950/95 via-slate-900/80 to-slate-950/40" />
        </div>

        {/* Top Right Cursive Script Annotation */}
        <div className="absolute top-12 right-8 lg:right-16 z-10 font-script text-3xl lg:text-4xl text-amber-300 rotate-[-3deg] drop-shadow-md text-right hidden sm:block">
          {destination.emotionalStatement} ✨
        </div>

        <div className="relative z-10 container-hs w-full">
          <div className="max-w-2xl text-white">
            <h1 className="font-heading font-bold text-4xl sm:text-5xl lg:text-6xl text-white mb-2 leading-[1.1]">
              {destination.name}.
            </h1>
            <div className="font-script text-3xl sm:text-4xl lg:text-5xl text-sky-400 font-normal rotate-[-2deg] mb-4">
              {destination.heroTagline}
            </div>
            <p className="text-sm sm:text-base text-gray-200 mb-8 leading-relaxed max-w-xl font-light">
              {destination.heroSubtitle}. {destination.heroDescription}
            </p>

            {/* 3 Feature Badges */}
            <div className="flex flex-wrap items-center gap-3 mb-8">
              <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-semibold text-white shadow-xs">
                <Plane className="w-4 h-4 text-sky-400" />
                <span>Flight time: <span className="text-gray-300 font-normal">{destination.travelInfo.flightTime}</span></span>
              </div>
              <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-semibold text-white shadow-xs">
                <Heart className="w-4 h-4 text-sky-400" />
                <span>Ideal for <span className="text-gray-300 font-normal">families, couples & groups</span></span>
              </div>
              <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-semibold text-white shadow-xs">
                <Globe className="w-4 h-4 text-sky-400" />
                <span>Visa: <span className="text-gray-300 font-normal">{destination.travelInfo.visa}</span></span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <a
                href={`#${destination.slug}-packages`}
                className="px-7 py-3.5 bg-[#0066CC] hover:bg-[#0052A3] text-white font-semibold text-sm rounded-full transition-all duration-300 shadow-md hover:shadow-lg flex items-center gap-2 cursor-pointer"
              >
                <span>Explore {destination.name} Packages</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href={`https://wa.me/${siteConfig.contact.whatsapp}?text=Hello!%20I'm%20interested%20in%20${destination.name}%20packages.`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-7 py-3.5 bg-white/90 hover:bg-white text-slate-900 font-semibold text-sm rounded-full border border-white/50 transition-all duration-300 shadow-2xs flex items-center gap-2 cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 text-emerald-600 fill-emerald-600" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 2: REGIONAL FILTERS STRIP (7 ATTRACTIONS) ── */}
      <section className="py-8 bg-white border-y border-gray-100 shadow-2xs">
        <div className="container-hs">
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-4">
            {attractions.map((item, i) => (
              <a
                key={i}
                href={`#${destination.slug}-packages`}
                className="p-3.5 rounded-2xl bg-hs-cream hover:bg-blue-50 border border-gray-100 hover:border-blue-200 text-center transition-all duration-300 group flex flex-col items-center justify-center cursor-pointer"
              >
                <div className="w-10 h-10 rounded-full bg-white shadow-2xs flex items-center justify-center text-[#0066CC] group-hover:scale-110 transition-transform mb-2">
                  <item.icon className="w-5 h-5" />
                </div>
                <h4 className="font-heading font-bold text-xs text-hs-navy leading-tight group-hover:text-[#0066CC] transition-colors">
                  {item.name}
                </h4>
                <span className="text-[0.65rem] text-hs-text-muted mt-0.5">
                  {item.tag}
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 3: WHY VISIT {DESTINATION.NAME}? ── */}
      <section className="py-20 bg-hs-cream border-b border-gray-100">
        <div className="container-hs">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <h2 className="font-heading font-bold text-3xl sm:text-4xl text-hs-navy mb-3">
                Why visit {destination.name}?
              </h2>
              <p className="text-xs sm:text-sm text-hs-text-secondary max-w-2xl font-light">
                {destination.whyVisit.description}
              </p>
            </div>
            <div className="font-script text-2xl sm:text-3xl text-[#0066CC] rotate-[-4deg] text-right shrink-0">
              Unforgettable Places<br />Timeless Memories
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {destination.places.slice(0, 4).map((place, i) => (
              <AnimatedSection key={i} delay={i * 0.08}>
                <div className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 h-full flex flex-col group relative">
                  <div className="aspect-[4/3] overflow-hidden relative">
                    <img
                      src={place.image || destination.heroImage}
                      alt={place.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <button className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/20 backdrop-blur-md border border-white/40 flex items-center justify-center text-white hover:text-red-500 transition-colors">
                      <Heart className="w-4 h-4" />
                    </button>
                  </div>
                  <div className="p-5 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="font-heading font-bold text-base text-hs-navy mb-1.5">
                        {place.name}
                      </h3>
                      <p className="text-xs text-hs-text-secondary leading-relaxed font-light line-clamp-2">
                        {place.description}
                      </p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 4: OUR {DESTINATION.NAME} HOLIDAY PACKAGES ── */}
      <section id={`${destination.slug}-packages`} className="py-20 bg-white border-b border-gray-100">
        <div className="container-hs">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="font-heading font-bold text-3xl sm:text-4xl text-hs-navy mb-2">
                Our {destination.name} holiday packages
              </h2>
              <p className="text-xs sm:text-sm text-hs-text-secondary font-light">
                Handpicked itineraries to help you experience the best of {destination.name}.
              </p>
            </div>
            <Link
              to={`/packages?destination=${destination.id}`}
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#0066CC] hover:text-hs-navy transition-colors"
            >
              <span>View all packages</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {(packages.length > 0 ? packages : [
              {
                id: `${destination.id}-classic`,
                name: `${destination.name} Discovery`,
                duration: '4 Nights / 5 Days',
                positioning: `The complete ${destination.name} getaway.`,
                image: destination.heroImage,
              },
              {
                id: `${destination.id}-grand`,
                name: `Grand ${destination.name} Explorer`,
                duration: '5 Nights / 6 Days',
                positioning: `Unforgettable sights & curated experiences.`,
                image: destination.places[0]?.image || destination.heroImage,
              },
              {
                id: `${destination.id}-relax`,
                name: `${destination.name} Beach & Culture`,
                duration: '4 Nights / 5 Days',
                positioning: `Relaxation and authentic local vibes.`,
                image: destination.places[1]?.image || destination.heroImage,
              },
              {
                id: `${destination.id}-deluxe`,
                name: `Luxury ${destination.name} Escape`,
                duration: '6 Nights / 7 Days',
                positioning: `Premium stays, private tours and fine dining.`,
                image: destination.places[2]?.image || destination.heroImage,
              },
            ]).map((pkg: any, i: number) => (
              <AnimatedSection key={i} delay={i * 0.08}>
                <div className="bg-white rounded-2xl overflow-hidden border border-gray-200/80 shadow-sm hover:shadow-lg transition-all duration-300 group flex flex-col justify-between h-full relative">
                  <div>
                    <div className="aspect-[16/10] overflow-hidden relative">
                      <img
                        src={pkg.image || destination.heroImage}
                        alt={pkg.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <button className="absolute top-2.5 right-2.5 w-7 h-7 rounded-full bg-white/20 backdrop-blur-md border border-white/40 flex items-center justify-center text-white hover:text-red-500 transition-colors">
                        <Heart className="w-3.5 h-3.5" />
                      </button>
                      <div className="absolute top-2.5 left-2.5 px-2.5 py-1 bg-white/90 backdrop-blur-md rounded-full text-[0.65rem] font-bold text-hs-navy shadow-xs">
                        {pkg.duration}
                      </div>
                    </div>
                    <div className="p-4">
                      <h3 className="font-heading font-bold text-sm sm:text-base text-hs-navy mb-1 leading-snug">
                        {pkg.name}
                      </h3>
                      <p className="text-xs text-hs-text-secondary font-light mb-3 leading-relaxed">
                        {pkg.positioning || `Curated ${destination.name} itinerary.`}
                      </p>
                    </div>
                  </div>
                  <div className="px-4 pb-4 pt-0">
                    <Link
                      to="/plan-holiday"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0066CC] hover:text-hs-navy transition-colors"
                    >
                      <span>View itinerary</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 5: UNFORGETTABLE EXPERIENCES AWAIT ── */}
      <section className="py-20 bg-hs-cream border-b border-gray-100">
        <div className="container-hs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
            {/* Left Column: Image with Cursive Script */}
            <div className="lg:col-span-5 relative rounded-3xl overflow-hidden shadow-xl min-h-[380px] p-8 flex items-end">
              <img
                src={destination.places[0]?.image || destination.heroImage}
                alt={`${destination.name} landmark`}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
              <div className="relative z-10 font-script text-3xl sm:text-4xl text-white rotate-[-3deg] drop-shadow-md leading-tight">
                More than just<br />a destination.
              </div>
            </div>

            {/* Right Column: Light Blue Container */}
            <div className="lg:col-span-7 bg-[#F0F6FC] p-8 sm:p-10 rounded-3xl border border-blue-100 shadow-md flex flex-col justify-between relative overflow-hidden">
              {/* Top Right Polaroid Photo Graphic */}
              <div className="absolute -top-3 -right-3 w-40 bg-white p-2 rounded-xl shadow-lg border border-gray-200 rotate-[8deg] hidden sm:block">
                <div className="aspect-[4/3] rounded-lg overflow-hidden mb-1">
                  <img
                    src={destination.places[1]?.image || destination.heroImage}
                    alt={`${destination.name} polaroid`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="font-script text-[0.65rem] text-center text-hs-navy">
                  Explore Discover Experience Enjoy 🌴
                </p>
              </div>

              <div>
                <h3 className="font-heading font-bold text-2xl sm:text-3xl text-hs-navy mb-3 leading-tight max-w-md">
                  Unforgettable<br />experiences await.
                </h3>
                <p className="text-xs sm:text-sm text-hs-text-secondary mb-8 font-light max-w-md leading-relaxed">
                  From breathtaking landscapes to rich local culture, {destination.name} offers a world of experiences that will leave you in awe.
                </p>
              </div>

              <Link
                to="/plan-holiday"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#0066CC] hover:bg-[#0052A3] text-white font-bold text-xs sm:text-sm rounded-full transition-all duration-300 shadow-md w-fit"
              >
                <span>See All Experiences</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 6: EXPERIENCE CATEGORIES ICON STRIP (6) ── */}
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="container-hs">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { title: 'Beautiful Beaches', desc: 'Coastlines & crystal clear waters', icon: Palmtree },
              { title: 'Cultural Heritage', desc: 'Temples, palaces & historic sites', icon: Landmark },
              { title: 'Natural Wonders', desc: 'Mountains, forests & waterfalls', icon: Trees },
              { title: 'Island Hopping', desc: 'Explore coastal islands & bays', icon: Compass },
              { title: 'Adventure Activities', desc: 'Trekking, snorkeling & water sports', icon: Anchor },
              { title: 'Local Cuisine', desc: 'Authentic flavors & street food', icon: Utensils },
            ].map((item, i) => (
              <div key={i} className="p-4 rounded-2xl bg-hs-cream border border-gray-100 text-center flex flex-col items-center justify-center">
                <div className="w-10 h-10 rounded-full bg-white shadow-2xs flex items-center justify-center text-[#0066CC] mb-2.5">
                  <item.icon className="w-5 h-5" />
                </div>
                <h4 className="font-heading font-bold text-xs text-hs-navy mb-1 leading-tight">
                  {item.title}
                </h4>
                <p className="text-[0.65rem] text-hs-text-muted leading-tight font-light mt-0.5">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 7: SAMPLE ITINERARY & TRAVEL INFO SPLIT ── */}
      <section className="py-20 bg-hs-cream border-b border-gray-100">
        <div className="container-hs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
            {/* Left Box: Sample Itinerary */}
            <div className="lg:col-span-6 bg-white p-8 sm:p-10 rounded-3xl border border-gray-100 shadow-md flex flex-col justify-between">
              <div>
                <h3 className="font-heading font-bold text-2xl text-hs-navy mb-1">
                  {itinerary.title}
                </h3>
                <p className="font-heading font-semibold text-lg text-[#0066CC] mb-6">
                  {itinerary.subtitle}
                </p>

                <div className="space-y-4 mb-8">
                  {itinerary.days.map((step, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div className="w-7 h-7 rounded-full bg-blue-100 text-[#0066CC] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                        {idx + 1}
                      </div>
                      <div className="text-xs sm:text-sm text-hs-navy">
                        <span className="font-bold mr-1.5">{step.day}:</span>
                        <span className="text-hs-text-secondary font-light">{step.text}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <Link
                to="/plan-holiday"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0066CC] hover:text-hs-navy transition-colors"
              >
                <span>View Full Itinerary</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Right Box: Travel Information */}
            <div className="lg:col-span-6 bg-[#F0F6FC] p-8 sm:p-10 rounded-3xl border border-blue-100 shadow-md flex flex-col justify-between relative overflow-hidden">
              {/* Top Right Postal Stamp Badge */}
              <div className="absolute top-6 right-6 w-24 h-24 rounded-full border-2 border-dashed border-blue-200/80 flex flex-col items-center justify-center p-2 rotate-[12deg] text-[#0066CC]/40 pointer-events-none select-none hidden sm:flex">
                <span className="font-script text-[0.65rem] font-bold text-center leading-tight">
                  TRAVEL<br />EXPLORE<br />DISCOVER<br />REPEAT
                </span>
              </div>

              <div>
                <h3 className="font-heading font-bold text-2xl text-hs-navy mb-6">
                  Travel information
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-xl bg-white shadow-2xs border border-blue-100 flex items-center justify-center text-[#0066CC] shrink-0">
                      <Plane className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="font-bold text-xs text-hs-navy">Visa</h4>
                      <p className="text-xs text-hs-text-secondary font-light">{destination.travelInfo.visa}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-xl bg-white shadow-2xs border border-blue-100 flex items-center justify-center text-[#0066CC] shrink-0">
                      <Clock className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="font-bold text-xs text-hs-navy">Flight time</h4>
                      <p className="text-xs text-hs-text-secondary font-light">{destination.travelInfo.flightTime}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-xl bg-white shadow-2xs border border-blue-100 flex items-center justify-center text-[#0066CC] shrink-0">
                      <Calendar className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="font-bold text-xs text-hs-navy">Best time to visit</h4>
                      <p className="text-xs text-hs-text-secondary font-light">{destination.travelInfo.bestTime}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-xl bg-white shadow-2xs border border-blue-100 flex items-center justify-center text-[#0066CC] shrink-0">
                      <MessageCircle className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="font-bold text-xs text-hs-navy">Language</h4>
                      <p className="text-xs text-hs-text-secondary font-light">{destination.travelInfo.language}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-xl bg-white shadow-2xs border border-blue-100 flex items-center justify-center text-[#0066CC] shrink-0">
                      <Banknote className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="font-bold text-xs text-hs-navy">Currency</h4>
                      <p className="text-xs text-hs-text-secondary font-light">{destination.travelInfo.currency}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-xl bg-white shadow-2xs border border-blue-100 flex items-center justify-center text-[#0066CC] shrink-0">
                      <Globe className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="font-bold text-xs text-hs-navy">Time zone</h4>
                      <p className="text-xs text-hs-text-secondary font-light">{destination.travelInfo.timeZone}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 8: WHAT OUR TRAVELLERS SAY ── */}
      <section className="py-20 bg-white border-b border-gray-100">
        <div className="container-hs">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="font-heading font-bold text-3xl sm:text-4xl text-hs-navy mb-2">
                What our travellers say
              </h2>
              <p className="text-xs sm:text-sm text-hs-text-secondary font-light">
                Real stories from travellers who explored {destination.name} with Holiday Star.
              </p>
            </div>
            <Link
              to="/about"
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#0066CC] hover:text-hs-navy transition-colors"
            >
              <span>See more reviews</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                name: 'Sana Fathima',
                role: 'Family Traveller',
                quote: `Our ${destination.name} trip was a dream come true! Everything was so well organized. Holiday Star made it hassle-free and truly memorable.`,
                avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&q=80',
              },
              {
                name: 'Arjun Menon',
                role: 'Group Traveller',
                quote: `From the itinerary to the hotel suggestions, everything was perfect. The local sightseeing was the highlight of our trip to ${destination.name}!`,
                avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&q=80',
              },
              {
                name: 'Neha & Rohan',
                role: 'Couple Travellers',
                quote: `Beautiful destinations, great support and smooth travel arrangements. Highly recommend Holiday Star for ${destination.name}!`,
                avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&q=80',
              },
            ].map((review, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="p-6 rounded-2xl bg-hs-cream border border-gray-100 flex flex-col justify-between h-full">
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <img
                        src={review.avatar}
                        alt={review.name}
                        className="w-12 h-12 rounded-full object-cover border-2 border-[#0066CC]"
                      />
                      <div>
                        <h4 className="font-heading font-bold text-hs-navy text-sm">
                          {review.name}
                        </h4>
                        <p className="text-[0.65rem] text-hs-text-muted">
                          {review.role}
                        </p>
                      </div>
                      <div className="ml-auto text-amber-400 font-bold text-xs">
                        ★★★★★
                      </div>
                    </div>
                    <p className="text-xs text-hs-text-secondary leading-relaxed italic">
                      "{review.quote}"
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 9: FREQUENTLY ASKED QUESTIONS ── */}
      <section className="py-20 bg-hs-cream border-b border-gray-100">
        <div className="container-hs">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="font-heading font-bold text-3xl sm:text-4xl text-hs-navy mb-2">
                Frequently asked questions
              </h2>
              <p className="text-xs sm:text-sm text-hs-text-secondary font-light">
                Everything you need to know about planning a trip to {destination.name}.
              </p>
            </div>
            <Link
              to="/contact"
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#0066CC] hover:text-hs-navy transition-colors"
            >
              <span>See all FAQs</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {destination.faqs.map((faq, idx) => (
              <FAQItem key={idx} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 10: READY TO PLAN YOUR {DESTINATION.NAME} HOLIDAY? PRE-FOOTER BANNER ── */}
      <section className="py-20 relative overflow-hidden bg-hs-navy">
        <img
          src={destination.heroImage}
          alt={`${destination.name} landscape`}
          className="absolute inset-0 w-full h-full object-cover opacity-35"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-hs-navy via-hs-navy/90 to-transparent" />

        <div className="container-hs relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5 font-script text-3xl sm:text-4xl text-amber-300 rotate-[-4deg] drop-shadow-md">
              New Places<br />New Stories<br />A Happier You
            </div>

            <div className="lg:col-span-7 text-left lg:text-right">
              <h2 className="font-heading font-bold text-3xl sm:text-4xl text-white mb-3 leading-tight">
                Ready to plan your {destination.name} holiday?
              </h2>
              <p className="text-xs sm:text-sm text-white/80 font-light mb-6 max-w-xl lg:ml-auto">
                Tell us your travel plans and we'll help you create a customized itinerary from Chennai.
              </p>

              <div className="flex flex-wrap items-center justify-start lg:justify-end gap-4">
                <Link
                  to="/plan-holiday"
                  className="px-7 py-3.5 bg-[#0066CC] hover:bg-[#0052A3] text-white font-semibold text-sm rounded-full transition-all duration-300 shadow-md flex items-center gap-2 cursor-pointer"
                >
                  <span>Plan My Holiday</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <a
                  href={`https://wa.me/${siteConfig.contact.whatsapp}?text=Hello!%20I'm%20ready%20to%20plan%20my%20${destination.name}%20holiday.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-7 py-3.5 bg-white hover:bg-emerald-50 text-slate-800 font-semibold text-sm rounded-full border border-emerald-500/80 transition-all duration-300 shadow-2xs flex items-center gap-2 cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-600 fill-emerald-600" />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
