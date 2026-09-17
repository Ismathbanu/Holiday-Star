import { useParams, Link, Navigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
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
  Heart,
  Luggage,
  Map,
} from 'lucide-react';
import { getDestinationBySlug } from '../../data/destinations';
import { getPackagesByDestination } from '../../data/packages';
import { siteConfig } from '../../data/siteConfig';
import MalaysiaDestination from './MalaysiaDestination';

// ── Destination Custom Data & Layout Configurations ──
interface DestinationConfig {
  headline1: string;
  headline2: string;
  subtext1: string;
  subtext2: string;
  whyEyebrow: string;
  whyTitle1: string;
  whyTitle2: string;
  audienceCards: {
    firstTime: string;
    families: string;
    couples: string;
    groups: string;
  };
  cutoutTop: string;
  cutoutBottom: string;
  ctaScenery: string;
  sampleItinerary: {
    title: string;
    subtitle: string;
    description: string;
    steps: Array<{
      number: string;
      day: string;
      title: string;
      desc: string;
    }>;
  };
}

const destinationConfigs: Record<string, DestinationConfig> = {
  thailand: {
    headline1: 'Thailand.',
    headline2: 'Amazing Escape.',
    subtext1: "From Bangkok's vibrant energy to tropical islands, ancient temples and world-famous street food.",
    subtext2: 'Discover a holiday that balances thrilling adventure, rich cultural heritage and serene beach relaxation. Just 3.5 hours from Chennai.',
    whyEyebrow: 'Why Thailand?',
    whyTitle1: 'One destination. So many ',
    whyTitle2: 'ways to holiday.',
    audienceCards: {
      firstTime: 'Welcoming culture, convenient direct flights and intuitive travel infrastructure make it effortlessly accessible.',
      families: 'Vibrant water theme parks, gentle elephant sanctuaries and world-class family beachfront resorts.',
      couples: 'Intimate pool villas, private island speedboat trips and romantic rooftop sunset dinners.',
      groups: 'Exciting street food trails, lively night markets, diving adventures and vibrant entertainment.',
    },
    cutoutTop: '/images/wat_arun.png',
    cutoutBottom: 'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=800&q=80',
    ctaScenery: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80',
    sampleItinerary: {
      title: 'Thailand Highlights',
      subtitle: '5 NIGHTS / 6 DAYS',
      description: "A well-paced journey balancing Bangkok's historic temples with Phuket's breathtaking turquoise beaches.",
      steps: [
        { number: '01', day: 'Day 1', title: 'Arrive in Bangkok', desc: 'Airport transfer, hotel check-in & Chao Phraya riverside dinner cruise.' },
        { number: '02', day: 'Day 2', title: 'Bangkok City & Temples', desc: 'Grand Palace, Wat Pho Reclining Buddha & Wat Arun riverside views.' },
        { number: '03', day: 'Day 3', title: 'Fly to Phuket', desc: 'Scenic flight to Phuket island, resort check-in & Patong beach sunset.' },
        { number: '04', day: 'Day 4', title: 'Phi Phi Islands Cruise', desc: 'Speedboat day tour, Maya Bay, snorkeling & crystal lagoon swim.' },
        { number: '05', day: 'Day 5', title: 'Big Buddha & Leisure', desc: 'Phuket Old Town heritage walk, Big Buddha viewpoint & departure.' },
      ],
    },
  },
  vietnam: {
    headline1: 'Vietnam.',
    headline2: 'Timeless Charm.',
    subtext1: 'Emerald karst bays, lantern-lit ancient towns, lush rice terraces and unforgettable cuisine.',
    subtext2: 'Discover an astonishing land of contrast and beauty, from the storied streets of Hanoi to the world wonder of Ha Long Bay.',
    whyEyebrow: 'Why Vietnam?',
    whyTitle1: 'One country. So many ',
    whyTitle2: 'ways to holiday.',
    audienceCards: {
      firstTime: 'Exceptional hospitality, affordable luxury stays and easy connections for first-time visitors.',
      families: 'Fascinating folklore, scenic boat rides through limestone caves and calm pedestrian-only towns.',
      couples: 'Lantern-lit ancient streets in Hoi An, private balcony cruise cabins and intimate boutique cafes.',
      groups: 'Street food adventures, scenic mountain passes, cave exploration and vibrant coffee culture.',
    },
    cutoutTop: '/images/golden_bridge.png',
    cutoutBottom: '/images/hoi_an.png',
    ctaScenery: '/images/hero_bg.png',
    sampleItinerary: {
      title: 'Vietnam Highlights',
      subtitle: '4 NIGHTS / 5 DAYS',
      description: 'A classic itinerary connecting the historical charms of Hanoi with an overnight luxury cruise in Ha Long Bay.',
      steps: [
        { number: '01', day: 'Day 1', title: 'Arrive in Hanoi', desc: 'Old Quarter cyclo rickshaw walk, Hoan Kiem Lake & egg coffee tasting.' },
        { number: '02', day: 'Day 2', title: 'Transfer to Ha Long Bay', desc: 'Board luxury overnight cruise ship amidst emerald limestone karsts.' },
        { number: '03', day: 'Day 3', title: 'Morning Tai Chi & Return', desc: 'Sung Sot cave exploration, bamboo kayaking & return transfer to Hanoi.' },
        { number: '04', day: 'Day 4', title: 'Hanoi Cultural Heritage', desc: 'Temple of Literature, Ho Chi Minh Complex & traditional water puppet show.' },
        { number: '05', day: 'Day 5', title: 'Local Street Food & Flight', desc: 'Morning French quarter souvenir shopping & departure transfer.' },
      ],
    },
  },
  'sri-lanka': {
    headline1: 'Sri Lanka.',
    headline2: 'The Wonder of Asia.',
    subtext1: 'Misty tea gardens, scenic mountain trains, golden sandy beaches and rich colonial heritage.',
    subtext2: 'Just 1.5 hours from Chennai — an enchanting island escape that packs world-class diversity into easy reach.',
    whyEyebrow: 'Why Sri Lanka?',
    whyTitle1: 'One island. So many ',
    whyTitle2: 'ways to holiday.',
    audienceCards: {
      firstTime: 'Closest international destination with free ETA, English fluency and familiar culinary comfort.',
      families: 'Gentle elephant sanctuaries, open-air train rides and golden sandy beach resorts.',
      couples: 'Misty colonial tea estate bungalows, scenic train rides and secluded oceanfront retreats.',
      groups: 'Thrilling wildlife leopard safaris, coastal surfing breaks and iconic hiking peaks.',
    },
    cutoutTop: 'https://images.unsplash.com/photo-1580674285054-bed31e145f59?w=800&q=80',
    cutoutBottom: '/images/sri_lanka_train.png',
    ctaScenery: '/images/sri_lanka_tea.jpg',
    sampleItinerary: {
      title: 'Sri Lanka Highlights',
      subtitle: '5 NIGHTS / 6 DAYS',
      description: 'A breathtaking journey from sacred cultural hills and scenic tea plantations to coastal Colombo.',
      steps: [
        { number: '01', day: 'Day 1', title: 'Arrive & Transfer to Kandy', desc: 'Airport welcome, scenic drive via Pinnawala Elephant Orphanage & check-in.' },
        { number: '02', day: 'Day 2', title: 'Sacred Kandy Sightseeing', desc: 'Temple of the Tooth Relic, Royal Botanical Gardens & Kandy cultural dance.' },
        { number: '03', day: 'Day 3', title: 'Scenic Blue Train to Ella', desc: 'World-famous train ride winding through misty tea terraces & mountain peaks.' },
        { number: '04', day: 'Day 4', title: 'Nine Arches Bridge & Falls', desc: 'Iconic colonial viaduct walk, Little Adam’s Peak hike & Ravana Falls.' },
        { number: '05', day: 'Day 5', title: 'Colombo Heritage & Return', desc: 'Galle Face Green sunset, Independence Square shopping & return flight.' },
      ],
    },
  },
  dubai: {
    headline1: 'Dubai.',
    headline2: 'Bigger, Bolder, Unforgettable.',
    subtext1: 'Futuristic skylines, desert dune adventures, world-class shopping and legendary Arabian hospitality.',
    subtext2: 'Where cutting-edge architectural marvels meet timeless desert serenity in uncompromising comfort.',
    whyEyebrow: 'Why Dubai?',
    whyTitle1: 'One emirate. So many ',
    whyTitle2: 'ways to holiday.',
    audienceCards: {
      firstTime: 'Ultra-modern infrastructure, exceptional safety and quick 4-hour direct flights from Chennai.',
      families: 'Giant waterparks, indoor ski slopes, colossal aquariums and world-class theme parks.',
      couples: 'Private desert dinner under starlight, sunset luxury yacht cruises and rooftop infinity lounges.',
      groups: 'High-octane red dune bashing, quad biking, beach clubs and mega shopping festivals.',
    },
    cutoutTop: 'https://images.unsplash.com/photo-1518684079-3c830dcef090?w=800&q=80',
    cutoutBottom: 'https://images.unsplash.com/photo-1451337516015-6b6e9a44a8a3?w=800&q=80',
    ctaScenery: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&q=80',
    sampleItinerary: {
      title: 'Dubai Highlights Escape',
      subtitle: '4 NIGHTS / 5 DAYS',
      description: 'An exhilarating blend of futuristic architectural icons, golden desert dunes and luxury waterfront dining.',
      steps: [
        { number: '01', day: 'Day 1', title: 'Arrive in Dubai', desc: 'Private airport pickup, hotel check-in & evening Marina Dhow Cruise dinner.' },
        { number: '02', day: 'Day 2', title: 'Burj Khalifa & Modern City', desc: 'Burj Khalifa 124th floor observation deck, Dubai Mall & fountain show.' },
        { number: '03', day: 'Day 3', title: 'Red Dune Desert Safari', desc: '4x4 dune bashing, camel riding, sandboarding & BBQ dinner with live show.' },
        { number: '04', day: 'Day 4', title: 'Museum & Palm Jumeirah', desc: 'Museum of the Future photo stop, Atlantis view & Souk Madinat Jumeirah.' },
        { number: '05', day: 'Day 5', title: 'Gold Souk & Departure', desc: 'Meena Bazaar and Gold Souk shopping, transfer to Dubai Airport.' },
      ],
    },
  },
  singapore: {
    headline1: 'Singapore.',
    headline2: 'Passion Made Possible.',
    subtext1: 'Supertree groves, rooftop infinity vistas, world-class theme parks and vibrant hawker culture.',
    subtext2: 'A gleaming global garden city offering seamless wonder, effortless travel and excitement for every generation.',
    whyEyebrow: 'Why Singapore?',
    whyTitle1: 'One city. So many ',
    whyTitle2: 'ways to holiday.',
    audienceCards: {
      firstTime: 'Ultra-clean, English-speaking, safe and exceptionally easy to navigate for first-time travellers.',
      families: 'Universal Studios, Night Safari, interactive science museums and kid-friendly attractions.',
      couples: 'Marina Bay waterfront walks, stunning rooftop infinity pools and Michelin-starred dining.',
      groups: 'Lively rooftop bars, trendy speakeasies, concerts, mega malls and world-famous hawker feasts.',
    },
    cutoutTop: 'https://images.unsplash.com/photo-1496939376851-89342e90adcd?w=800&q=80',
    cutoutBottom: 'https://images.unsplash.com/photo-1506351421178-63b52a2d2562?w=800&q=80',
    ctaScenery: 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=800&q=80',
    sampleItinerary: {
      title: 'Singapore Wonder Escape',
      subtitle: '4 NIGHTS / 5 DAYS',
      description: 'Futuristic sky-gardens, world-class island theme parks and legendary multicultural hawker cuisine.',
      steps: [
        { number: '01', day: 'Day 1', title: 'Arrive in Singapore', desc: 'Airport greeting, hotel check-in & evening open tram ride at Night Safari.' },
        { number: '02', day: 'Day 2', title: 'Gardens & Marina Bay', desc: 'Cloud Forest, Flower Dome, Supertree Grove & Marina Bay Sands Skypark.' },
        { number: '03', day: 'Day 3', title: 'Sentosa Island Magic', desc: 'Scenic Cable Car ride, S.E.A. Aquarium & Wings of Time night show.' },
        { number: '04', day: 'Day 4', title: 'Chinatown & Hawker Trail', desc: 'Buddha Tooth Relic Temple, Little India & famous Maxwell Food Centre.' },
        { number: '05', day: 'Day 5', title: 'Jewel Changi & Flight', desc: 'Rain Vortex indoor waterfall, Canopy Park stroll & return flight.' },
      ],
    },
  },
  indonesia: {
    headline1: 'Indonesia.',
    headline2: 'Island of the Gods.',
    subtext1: 'Emerald rice terraces, clifftop sunset temples, pristine beaches and tranquil jungle wellness.',
    subtext2: 'Experience the captivating spirituality, cultural warmth and breathtaking natural beauty of Bali. Closer than you imagine.',
    whyEyebrow: 'Why Indonesia?',
    whyTitle1: 'One archipelago. So many ',
    whyTitle2: 'ways to holiday.',
    audienceCards: {
      firstTime: 'Relaxed tropical island lifestyle, visa on arrival ease and warm English-speaking local hosts.',
      families: 'Spacious private pool villas, Bali Safari & Marine Park, waterparks and gentle sandy beaches.',
      couples: 'Secluded jungle infinity pools, candlelit beach seafood dinners and holistic couples’ spa retreats.',
      groups: 'Nusa Penida speedboat island hopping, surfing breaks, trendy beach clubs and sunrise volcano hikes.',
    },
    cutoutTop: 'https://images.unsplash.com/photo-1604999333679-b86d54738315?w=800&q=80',
    cutoutBottom: 'https://images.unsplash.com/photo-1531592937781-2a5c3e340d1a?w=800&q=80',
    ctaScenery: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800&q=80',
    sampleItinerary: {
      title: 'Bali Island Discovery',
      subtitle: '4 NIGHTS / 5 DAYS',
      description: 'Cascading emerald rice terraces, sacred clifftop temples, tropical beaches and Balinese hospitality.',
      steps: [
        { number: '01', day: 'Day 1', title: 'Arrive in Bali', desc: 'Airport greeting, private transfer to hotel or villa & Kuta beach sunset.' },
        { number: '02', day: 'Day 2', title: 'Ubud Cultural Heart', desc: 'Tegallalang rice terraces, iconic jungle swing & Sacred Monkey Forest.' },
        { number: '03', day: 'Day 3', title: 'Nusa Penida Island Tour', desc: 'Speedboat to Kelingking T-Rex cliff, Angel’s Billabong & Broken Beach.' },
        { number: '04', day: 'Day 4', title: 'Clifftop Uluwatu Temple', desc: 'Dramatic ocean cliff temple walk & magical sunset Kecak Fire Dance.' },
        { number: '05', day: 'Day 5', title: 'Balinese Spa & Departure', desc: 'Rejuvenating traditional massage, souvenir shopping & departure flight.' },
      ],
    },
  },
};

export default function DestinationPage() {
  const { slug } = useParams<{ slug: string }>();
  const destination = getDestinationBySlug(slug || '');

  if (!destination) {
    return <Navigate to="/destinations" replace />;
  }

  // If viewing Malaysia destination, render the dedicated Malaysia destination page (which includes the Visa Banner)
  if (destination.slug === 'malaysia') {
    return <MalaysiaDestination />;
  }

  const packages = getPackagesByDestination(destination.id);
  const config = destinationConfigs[destination.slug] || destinationConfigs.thailand;

  const whatsappInquiryUrl = (topic: string) =>
    `https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent(
      `Hello Holiday Star! I'm interested in the ${destination.name} Destination package: ${topic}. Please share details and pricing.`
    )}`;

  return (
    <div className="w-full bg-white text-slate-800 font-sans">
      <Helmet>
        <title>{destination.seo.title}</title>
        <meta name="description" content={destination.seo.description} />
        <meta property="og:title" content={destination.seo.title} />
        <meta property="og:description" content={destination.seo.description} />
        <link rel="canonical" href={`https://holidaystartours.com/destinations/${destination.slug}`} />
      </Helmet>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 1: HERO SECTION
          - Full-width hero background image
          - Dark directional gradient overlays for crisp readability
          - Eyebrow pill with pulsing yellow dot: "Welcome to [Destination]"
          - Bold Heading: White Title + Gradient Tagline
          - Descriptive Subtexts
          - Dual CTA Buttons: Gradient "Explore Packages" + Green WhatsApp Us
      ───────────────────────────────────────────────────────────── */}
      <section className="relative min-h-[580px] lg:min-h-[660px] flex items-center overflow-hidden bg-[#0A121A] pt-28 pb-16 lg:pt-32 lg:pb-24">
        {/* Hero Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src={destination.heroImage}
            alt={`${destination.name} — ${destination.heroSubtitle}`}
            className="w-full h-full object-cover object-center scale-100 select-none pointer-events-none"
            loading="eager"
            fetchPriority="high"
          />
          {/* Directional contrast gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 lg:via-black/40 to-transparent pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30 pointer-events-none" />
          {/* Mobile-only backdrop for extra readability */}
          <div className="lg:hidden absolute inset-0 bg-black/40 backdrop-blur-[1px] pointer-events-none" />
        </div>

        <div className="container-hs relative z-10 w-full">
          <div className="max-w-xl lg:max-w-2xl">
            {/* Eyebrow Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-emerald-300 bg-emerald-950/70 border border-emerald-500/30 backdrop-blur-md mb-3 shadow-sm w-fit">
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
              <span>Welcome to {destination.name}</span>
            </div>

            {/* Bold Heading */}
            <h1 className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-[1.06] mb-4">
              <span className="text-white block drop-shadow-[0_2px_12px_rgba(0,0,0,0.8)]">
                {config.headline1}
              </span>
              <span
                className="block text-transparent bg-clip-text drop-shadow-[0_2px_16px_rgba(0,180,216,0.4)]"
                style={{
                  backgroundImage: 'linear-gradient(90deg, #0066CC 0%, #00B4D8 100%)',
                }}
              >
                {config.headline2}
              </span>
            </h1>

            {/* Subtext 1 */}
            <p className="text-sm sm:text-base md:text-lg font-semibold text-white/95 mb-3 leading-snug drop-shadow-[0_1px_4px_rgba(0,0,0,0.8)]">
              {config.subtext1}
            </p>

            {/* Subtext 2 */}
            <p className="text-xs sm:text-sm md:text-base text-slate-200/90 mb-8 leading-relaxed max-w-lg drop-shadow-[0_1px_3px_rgba(0,0,0,0.8)]">
              {config.subtext2}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3.5">
              <a
                href={`#${destination.slug}-packages`}
                className="px-6 py-3 text-white text-xs sm:text-sm font-semibold rounded-full transition-all duration-300 shadow-md hover:shadow-lg hover:scale-[1.02] flex items-center gap-2.5 group cursor-pointer"
                style={{
                  background: 'linear-gradient(90deg, #0066CC 0%, #00B4D8 100%)',
                  boxShadow: '0 3px 12px rgba(0, 180, 216, 0.35)',
                }}
              >
                <div className="w-5 h-5 rounded-full bg-white/25 flex items-center justify-center">
                  <Compass className="w-3.5 h-3.5 text-white" />
                </div>
                <span>Explore {destination.name} Packages</span>
              </a>

              <a
                href={whatsappInquiryUrl(`General ${destination.name} Inquiry`)}
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
          SECTION 2: WHY [DESTINATION]? ONE DESTINATION. SO MANY WAYS TO HOLIDAY.
          - Eyebrow "Why [Destination]?"
          - Two-tone heading "One destination. So many ways to holiday."
          - 4 Feature Cards (First-time, Families, Couples, Groups)
          - Right organic double-rounded graphic cutout
      ───────────────────────────────────────────────────────────── */}
      <section className="py-16 bg-white overflow-hidden">
        <div className="container-hs">
          {/* Section Heading */}
          <div className="mb-12">
            <div className="text-xs font-bold uppercase tracking-[0.2em] text-[#108560] mb-2">
              {config.whyEyebrow}
            </div>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-4xl tracking-tight leading-tight mb-2">
              <span className="text-[#026079]">{config.whyTitle1}</span>
              <span className="text-[#602f9c]">{config.whyTitle2}</span>
            </h2>
            <div className="w-16 h-1 bg-[#0284c7] rounded-full" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            {/* Left: 4 Audience Cards */}
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
                  {config.audienceCards.firstTime}
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
                  {config.audienceCards.families}
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
                  {config.audienceCards.couples}
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
                  {config.audienceCards.groups}
                </p>
              </div>
            </div>

            {/* Right: Organic Curved Graphic Cutout */}
            <div className="lg:col-span-4 flex justify-center">
              <div className="relative w-full max-w-[340px] aspect-[4/5] rounded-[36px] overflow-hidden shadow-xl border-4 border-white">
                {/* Top Half: Landmark */}
                <div className="h-[48%] w-full overflow-hidden relative">
                  <img
                    src={config.cutoutTop}
                    alt={`${destination.name} landmark`}
                    className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700"
                  />
                  {/* Soft gradient blend */}
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/60" />
                </div>

                {/* Bottom Half: Scenic Landscape */}
                <div className="h-[52%] w-full overflow-hidden relative">
                  <img
                    src={config.cutoutBottom}
                    alt={`${destination.name} scenic landscape`}
                    className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-700"
                  />
                </div>

                {/* Floating pill badge */}
                <div className="absolute top-3 right-3 px-3 py-1 bg-white/90 backdrop-blur-md rounded-full shadow-sm text-[10px] font-bold text-[#026079]">
                  Explore {destination.name}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 3: POPULAR ITINERARIES GRID
          - Responsive 3-column card grid
          - Card photography, title, duration & tagline, description
          - Gradient pill button linking to plan holiday form
      ───────────────────────────────────────────────────────────── */}
      <section id={`${destination.slug}-packages`} className="py-16 bg-[#fafbfd] border-y border-gray-100">
        <div className="container-hs">
          {/* Section Heading */}
          <div className="mb-10">
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-hs-navy mb-2 tracking-tight">
              Popular {destination.name} Itineraries
            </h2>
            <div className="w-14 h-1 bg-[#0284c7] rounded-full" />
          </div>

          {/* Cards Grid */}
          <div className={`grid grid-cols-1 md:grid-cols-2 ${packages.length === 4 ? 'lg:grid-cols-4' : 'lg:grid-cols-3'} gap-6 lg:gap-7`}>
            {packages.map((pkg) => (
              <div
                key={pkg.id}
                className="bg-white rounded-2xl overflow-hidden border border-gray-200/70 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Card Image */}
                  <div className="aspect-[16/10] overflow-hidden relative">
                    <img
                      src={pkg.image || destination.heroImage}
                      alt={pkg.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                  </div>

                  {/* Card Content */}
                  <div className="p-5 sm:p-6">
                    <h3 className="font-heading font-extrabold text-base sm:text-lg text-[#0b3b64] mb-2 leading-snug">
                      {pkg.name}
                    </h3>

                    {/* Duration & Tagline */}
                    <div className="flex flex-wrap items-center gap-1.5 text-xs mb-3">
                      <span className="font-bold text-[#0066CC]">{pkg.duration}</span>
                      {pkg.positioning && (
                        <>
                          <span className="text-gray-300">|</span>
                          <span className="text-slate-600 font-medium">{pkg.positioning}</span>
                        </>
                      )}
                    </div>

                    {/* Highlights or custom description */}
                    <p className="text-xs text-slate-500 leading-relaxed font-light line-clamp-3">
                      {pkg.description || pkg.highlights.join(' • ')}
                    </p>
                  </div>
                </div>

                {/* Card Button */}
                <div className="px-5 sm:px-6 pb-6 pt-0">
                  <Link
                    to="/plan-holiday#plan-holiday-form"
                    state={{ destination: destination.name, packageTitle: pkg.name }}
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
          SINGAPORE CRUISE EXPERIENCE BANNER
          Full-width premium banner with deep teal-navy gradient,
          twilight cruise ship photography blending from right,
          clean neon-cyan outline icons in an evenly spaced row
      ───────────────────────────────────────────────────────────── */}
      {destination.slug === 'singapore' && (
        <section className="relative overflow-hidden" style={{ background: 'linear-gradient(100deg, #004D5C 0%, #00384F 20%, #002B4A 40%, #0A2545 60%, #112040 80%, #151B3D 100%)' }}>
          {/* Full-bleed cruise ship photography — right half on desktop, subtle behind on mobile */}
          <div className="absolute inset-0 pointer-events-none select-none">
            <img
              src="/images/singapore_cruise_twilight.jpg"
              alt="Luxury cruise ship sailing from Singapore at twilight with Marina Bay Sands skyline"
              className="w-full h-full object-cover object-right-bottom"
              loading="lazy"
            />
            {/* Multi-layer gradient blend: solid on the left, fade into image on right */}
            <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, #004D5C 0%, #00384Fee 18%, #002B4Acc 35%, transparent 62%)' }} />
            {/* Bottom fade for clean edge */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#151B3D]/60 via-transparent to-[#004D5C]/30" />
            {/* Mobile: stronger overlay so text is readable */}
            <div className="lg:hidden absolute inset-0 bg-[#003547]/80 backdrop-blur-[2px]" />
          </div>

          {/* Decorative glow accent behind heading area */}
          <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[420px] h-[420px] rounded-full bg-[#00C9DB]/8 blur-[120px] pointer-events-none" />

          <div className="container-hs relative z-10 py-12 sm:py-14 lg:py-16">
            <div className="block group">
              <div className="max-w-xl lg:max-w-[54%]">
                {/* Eyebrow */}
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-6 h-px bg-[#00E5FF]" />
                  <span className="text-[10px] sm:text-xs font-bold tracking-[0.28em] uppercase text-[#00E5FF]">
                    Singapore Cruise Experience
                  </span>
                </div>

                {/* Heading */}
                <h3 className="font-heading font-extrabold text-[1.65rem] sm:text-3xl lg:text-[2.5rem] text-white tracking-tight leading-[1.15] mb-3">
                  More to your{' '}
                  <span className="text-transparent bg-clip-text" style={{ backgroundImage: 'linear-gradient(90deg, #00F0D8 0%, #00C9DB 50%, #00AAFF 100%)' }}>
                    Singapore
                  </span>{' '}
                  journey.
                </h3>

                {/* Subtitle */}
                <p className="text-[13px] sm:text-sm text-cyan-50/85 font-light leading-relaxed max-w-lg mb-9">
                  Set sail from Singapore and enjoy world-class entertainment, family fun and unforgettable experiences at sea.
                </p>
              </div>

              {/* ── Feature Icons Row ── */}
              <div className="flex flex-wrap lg:flex-nowrap items-start gap-0">
                {[
                  {
                    label: 'Broadway-Quality\nShows',
                    icon: (
                      <svg viewBox="0 0 40 40" className="w-11 h-11" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                        {/* Theatre masks */}
                        <path d="M5 16c0-5.5 4-10 9-10s9 4.5 9 10-4 10-9 10-9-4.5-9-10z" />
                        <circle cx="10.5" cy="13" r="1.3" fill="currentColor" />
                        <circle cx="17.5" cy="13" r="1.3" fill="currentColor" />
                        <path d="M10 19c1.2 1.4 2.6 2 4 2s2.8-.6 4-2" />
                        <path d="M23 11c3.8.5 6.5 4 6.5 8.2 0 5-4 9-9 9-1.7 0-3.3-.5-4.5-1.3" />
                        <circle cx="24" cy="17" r="1.1" fill="currentColor" />
                        <path d="M21.5 23.5c1.2-.9 2.4-1.1 3.5-.9" />
                      </svg>
                    ),
                  },
                  {
                    label: 'Fireworks\nat Sea',
                    icon: (
                      <svg viewBox="0 0 40 40" className="w-11 h-11" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                        {/* Starburst */}
                        <line x1="20" y1="4" x2="20" y2="12" />
                        <line x1="20" y1="28" x2="20" y2="36" />
                        <line x1="4" y1="20" x2="12" y2="20" />
                        <line x1="28" y1="20" x2="36" y2="20" />
                        <line x1="8.5" y1="8.5" x2="14.5" y2="14.5" />
                        <line x1="25.5" y1="25.5" x2="31.5" y2="31.5" />
                        <line x1="8.5" y1="31.5" x2="14.5" y2="25.5" />
                        <line x1="25.5" y1="14.5" x2="31.5" y2="8.5" />
                        <circle cx="20" cy="20" r="3" fill="currentColor" />
                        <circle cx="20" cy="2" r="1.2" fill="currentColor" />
                        <circle cx="20" cy="38" r="1.2" fill="currentColor" />
                        <circle cx="2" cy="20" r="1.2" fill="currentColor" />
                        <circle cx="38" cy="20" r="1.2" fill="currentColor" />
                      </svg>
                    ),
                  },
                  {
                    label: 'Character\nExperiences',
                    icon: (
                      <svg viewBox="0 0 40 40" className="w-11 h-11" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                        {/* Mickey-style ears */}
                        <circle cx="20" cy="24" r="9.5" />
                        <circle cx="11" cy="11" r="6" />
                        <circle cx="29" cy="11" r="6" />
                      </svg>
                    ),
                  },
                  {
                    label: 'Movie\nScreenings',
                    icon: (
                      <svg viewBox="0 0 40 40" className="w-11 h-11" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                        {/* Film clapboard */}
                        <rect x="5" y="15" width="30" height="19" rx="2.5" />
                        <path d="M5 15l30-7v7H5z" />
                        <line x1="12" y1="15" x2="14.5" y2="9" />
                        <line x1="20" y1="15" x2="22.5" y2="10" />
                        <line x1="28" y1="15" x2="30.5" y2="11" />
                        <line x1="5" y1="22" x2="35" y2="22" />
                      </svg>
                    ),
                  },
                  {
                    label: 'Pools',
                    icon: (
                      <svg viewBox="0 0 40 40" className="w-11 h-11" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                        {/* Swimming pool with ladder */}
                        <path d="M23 8v14M29 8v14" />
                        <path d="M23 8a2.5 2.5 0 0 0-5 0v1.5" />
                        <line x1="23" y1="12" x2="29" y2="12" />
                        <line x1="23" y1="16" x2="29" y2="16" />
                        <line x1="23" y1="20" x2="29" y2="20" />
                        <path d="M4 25c2.5-1.2 5-1.2 7.5 0s5 1.2 7.5 0 5-1.2 7.5 0 5 1.2 7.5 0" />
                        <path d="M4 31c2.5-1.2 5-1.2 7.5 0s5 1.2 7.5 0 5-1.2 7.5 0 5 1.2 7.5 0" />
                      </svg>
                    ),
                  },
                  {
                    label: 'Waterslides, Splash\nZones & Wading Pools',
                    icon: (
                      <svg viewBox="0 0 40 40" className="w-11 h-11" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                        {/* Waterslide with ladder */}
                        <line x1="10" y1="10" x2="10" y2="28" />
                        <line x1="6.5" y1="15" x2="10" y2="15" />
                        <line x1="6.5" y1="21" x2="10" y2="21" />
                        <path d="M10 12c3.5-2.5 7-1.5 9.5 3l3.5 7c2 4.5 5.5 5.5 10 4.5" />
                        <path d="M13.5 12c2.5-1.5 5 0 7 3.5l3.5 7c2 3.5 4.5 4.5 9 3.5" />
                        <path d="M4 32c2.5-1 5-1 7.5 0s5 1 7.5 0 5-1 7.5 0 5 1 7.5 0" />
                      </svg>
                    ),
                  },
                ].map((feature, i, arr) => (
                  <div key={i} className="flex items-start" style={{ flex: i === arr.length - 1 ? '1.5 1 0%' : '1 1 0%' }}>
                    {/* Vertical divider (hidden on first) */}
                    {i > 0 && (
                      <div className="hidden lg:block w-px self-stretch bg-white/15 shrink-0" />
                    )}
                    <div className="flex flex-col items-center text-center w-full py-2 px-1 sm:px-3">
                      <div className="w-14 h-14 flex items-center justify-center text-[#00E5FF] mb-2 shrink-0 group-hover:scale-110 transition-transform duration-300 drop-shadow-[0_0_6px_rgba(0,229,255,0.25)]">
                        {feature.icon}
                      </div>
                      <span className="text-[10px] sm:text-[11px] font-medium text-white/90 leading-tight whitespace-pre-line">
                        {feature.label}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ─────────────────────────────────────────────────────────────
          SECTION 4: SAMPLE ITINERARY (MATCHING REFERENCE IMAGE EXACTLY)
          - Background: /images/our_story_bg.jpg
          - Top Header: SAMPLE ITINERARY + teal underline + Title + Duration + subtitle
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
              {config.sampleItinerary.title}
            </h2>
            <div className="text-xs sm:text-sm font-bold tracking-[0.2em] uppercase text-[#0b3b64] mb-3">
              {config.sampleItinerary.subtitle}
            </div>
            <p className="text-xs sm:text-sm text-slate-500 font-light leading-relaxed max-w-xl mx-auto">
              {config.sampleItinerary.description}
            </p>
          </div>

          {/* 5-Step Connected Horizontal Timeline */}
          <div className="relative max-w-5xl mx-auto mb-14">
            {/* Horizontal dashed blue connector line behind circles */}
            <div className="hidden md:block absolute top-6 left-[8%] right-[8%] h-px border-t border-dashed border-sky-300 z-0" />

            <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-3 relative z-10">
              {config.sampleItinerary.steps.map((step) => (
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
              state={{
                destination: destination.name,
                packageTitle: `${config.sampleItinerary.title} (${config.sampleItinerary.subtitle})`,
              }}
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
          - Background: /images/what_we_do_bg.jpg
          - Left: 7 Package Inclusions with sky-blue icons
          - Right: Before You Travel (Visa, Best Time, Currency, Flight Time)
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
                        {destination.travelInfo.visa} Holiday Star can assist with guidance and visa documentation for your travel.
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
                        {destination.travelInfo.bestTime}
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
                        {destination.travelInfo.currency}
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
                        {destination.travelInfo.flightTime}
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
          SECTION 6: "READY FOR [DESTINATION]?" CTA BANNER
          - Blue to Purple gradient banner
          - Commercial airplane flying in clouds on left
          - Destination scenery on right
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

            {/* Right Image: Destination Scenery */}
            <div className="absolute right-0 top-0 bottom-0 w-1/4 sm:w-1/3 overflow-hidden pointer-events-none hidden sm:block">
              <img
                src={config.ctaScenery}
                alt={`${destination.name} scenery`}
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#581c87]/60 to-[#581c87]" />
            </div>

            {/* Center Content */}
            <div className="relative z-10 w-full py-10 px-6 sm:px-12 text-center max-w-2xl mx-auto flex flex-col items-center">
              <h2 className="font-heading font-extrabold text-2xl sm:text-3xl lg:text-4xl text-white tracking-tight mb-2">
                Ready for {destination.name}?
              </h2>
              <p className="text-xs sm:text-sm text-cyan-50/90 font-light mb-6 max-w-lg leading-relaxed">
                Tell us your travel month, group size and preferred itinerary. We'll help you plan the rest.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center justify-center gap-3.5">
                <Link
                  to="/plan-holiday#plan-holiday-form"
                  state={{ destination: destination.name }}
                  className="px-6 py-3 text-white text-xs sm:text-sm font-semibold rounded-full transition-all duration-300 shadow-md hover:shadow-lg hover:scale-[1.02] flex items-center gap-2 cursor-pointer"
                  style={{
                    background: 'linear-gradient(90deg, #0066CC 0%, #00B4D8 100%)',
                    boxShadow: '0 3px 12px rgba(0, 180, 216, 0.35)',
                  }}
                >
                  <Luggage className="w-4 h-4 text-white" />
                  <span>Plan My {destination.name} Holiday</span>
                </Link>

                <a
                  href={whatsappInquiryUrl(`${destination.name} Package Inquiry`)}
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
