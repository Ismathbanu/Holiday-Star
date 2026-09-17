import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import {
  ArrowRight,
  Plane,
  Camera,
  Users,
  Mountain,
  Check,
  X,
  Building2,
  Landmark,
  Soup,
  Waves,
} from 'lucide-react';
import AnimatedSection from '../../components/common/AnimatedSection';
import { siteConfig } from '../../data/siteConfig';
import { captureUTM, getPersistedUTM } from '../../utils/utm';
import { getDynamicTravelMonths } from '../../utils/travelMonths';

// Dynamically generated upcoming travel months based on the current date
const dynamicTravelMonths = getDynamicTravelMonths({ count: 8 });

// ── Form Validation Schema ──
const formSchema = z.object({
  name: z.string().min(2, 'Please enter your full name'),
  phone: z.string().regex(/^[0-9+\s-]{10,15}$/, 'Enter a valid WhatsApp phone number'),
  travelMonth: z.string().min(1, 'Select tentative travel month'),
  groupSize: z.string().min(1, 'Select number of travellers'),
  travelCompanion: z.string().min(1, 'Select who you are travelling with'),
  preferredPackage: z.string().min(1, 'Select preferred package'),
  passportHelp: z.string().optional(),
  message: z.string().optional(),
});

type FormData = z.infer<typeof formSchema>;

// ── 5 Highlights / Destinations Data ──
const malaysiaDestinations = [
  {
    id: 'kuala-lumpur',
    name: 'KUALA LUMPUR',
    tagline: 'The City That Never Stops',
    image: '/images/malaysia_card.jpg',
  },
  {
    id: 'genting-highlands',
    name: 'GENTING HIGHLANDS',
    tagline: 'Escape to the Mountains',
    image: '/images/genting_highlands.jpg',
  },
  {
    id: 'langkawi',
    name: 'LANGKAWI',
    tagline: 'Your Tropical Island Escape',
    image: '/images/langkawi_island.jpg',
  },
  {
    id: 'malacca',
    name: 'MALACCA',
    tagline: "Step into Malaysia's Heritage",
    image: '/images/melaka_heritage.jpg',
  },
  {
    id: 'penang',
    name: 'PENANG',
    tagline: 'Culture, Colour & Character',
    image: '/images/penang_street.png',
  },
];

// ── 6 Multi-Destination Packages Data ──
interface CampaignPackage {
  id: string;
  code: string;
  title: string;
  duration: string;
  tagline: string;
  image: string;
  highlights: string[];
}

const campaignPackages: CampaignPackage[] = [
  {
    id: 'pkg-1',
    code: '01',
    title: 'KUALA LUMPUR + GENTING',
    duration: '3 Nights / 4 Days',
    tagline: 'City sights + mountain escape',
    image: '/images/malaysia_card.jpg',
    highlights: [
      'Petronas Twin Towers & Skybridge visit',
      'Genting Highlands Awana SkyWay Cable Car',
      'Batu Caves Murugan Temple stopover',
      'Kuala Lumpur City & Shopping Tour',
      'Comfortable private airport & hotel transfers',
    ],
  },
  {
    id: 'pkg-2',
    code: '02',
    title: 'KUALA LUMPUR + MALACCA',
    duration: '3 Nights / 4 Days',
    tagline: 'Modern city + heritage experiences',
    image: '/images/melaka_heritage.jpg',
    highlights: [
      'UNESCO World Heritage historical Malacca tour',
      'Dutch Red Square & Christ Church',
      'Jonker Street antique & culinary walk',
      'Kuala Lumpur modern skyline exploration',
      'Full-day private guided heritage journey',
    ],
  },
  {
    id: 'pkg-3',
    code: '03',
    title: 'KUALA LUMPUR + LANGKAWI',
    duration: '4 Nights / 5 Days',
    tagline: 'City life + tropical island escape',
    image: '/images/langkawi_island.jpg',
    highlights: [
      'Kuala Lumpur City discovery & shopping',
      'Petronas Twin Towers photo stop',
      'Langkawi SkyCab & SkyBridge experience',
      'Tropical Island Hopping & Eagle Square',
      'White sand beach leisure & sunset views',
    ],
  },
  {
    id: 'pkg-4',
    code: '04',
    title: 'KUALA LUMPUR + PENANG',
    duration: '4 Nights / 5 Days',
    tagline: 'City + heritage + local experiences',
    image: '/images/penang_street.png',
    highlights: [
      'George Town UNESCO heritage street art trail',
      'Penang Hill Funicular train ascent',
      'Kek Lok Si Temple & heritage clan jetties',
      'World-famous Malaysian street food tasting',
      'Kuala Lumpur central city sightseeing',
    ],
  },
  {
    id: 'pkg-5',
    code: '05',
    title: 'KUALA LUMPUR + GENTING + LANGKAWI',
    duration: '5 Nights / 6 Days',
    tagline: 'Highlands + city + island',
    image: '/images/home-feature.jpg',
    highlights: [
      'The ultimate 3-in-1 Malaysian journey',
      'Petronas Towers & vibrant Bukit Bintang',
      'Cool mountain climate at Genting Highlands',
      'Cable car ride with mountain mist views',
      'Tropical beach days & boat cruises in Langkawi',
    ],
  },
  {
    id: 'pkg-6',
    code: '06',
    title: 'KUALA LUMPUR + MALACCA + PENANG',
    duration: '6 Nights / 7 Days',
    tagline: 'A journey through city, culture and heritage',
    image: '/images/malaysia_dest/itin_melaka_fortress.jpg',
    highlights: [
      'Comprehensive cultural & historical expedition',
      'Modern capital highlights in Kuala Lumpur',
      'Colonial Portuguese & Dutch heritage in Malacca',
      'Peranakan culture & murals in George Town',
      'Daily breakfast & dedicated tour coordinators',
    ],
  },
];

// ── 5 Experience Pillars Data ──
const experiencePillars = [
  {
    icon: Building2,
    title: 'EXPLORE',
    desc: 'Iconic cities and attractions.',
    iconColor: '#0284C7',
    titleColor: '#0284C7',
  },
  {
    icon: Mountain,
    title: 'ESCAPE',
    desc: 'From cool highlands to tropical islands.',
    iconColor: '#00A896',
    titleColor: '#00A896',
  },
  {
    icon: Landmark,
    title: 'DISCOVER',
    desc: 'Culture, heritage and traditions.',
    iconColor: '#A855F7',
    titleColor: '#00A896',
  },
  {
    icon: Soup,
    title: 'TASTE',
    desc: 'Incredible local food experiences.',
    iconColor: '#8B5CF6',
    titleColor: '#00A896',
  },
  {
    icon: Waves,
    title: 'ADVENTURE',
    desc: 'Exciting attractions and experiences.',
    iconColor: '#0284C7',
    titleColor: '#0284C7',
  },
];

export default function MalaysiaCampaign() {
  useEffect(() => {
    captureUTM();
  }, []);

  // Modal State for Package Details
  const [activePackage, setActivePackage] = useState<CampaignPackage | null>(null);

  // Modal State for Booking Popup
  const [bookingPackage, setBookingPackage] = useState<CampaignPackage | null>(null);
  const [bookingForm, setBookingForm] = useState({
    name: '',
    phone: '',
    travelMonth: dynamicTravelMonths[0] || 'Immediate / Next 30 Days',
    travellers: '2 Travellers (Couple / Friends)',
    startingPoint: 'Chennai',
    flightPreference: 'Require air tickets from our side',
  });

  // Form State
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      travelCompanion: 'Couple',
      groupSize: '2 Travellers',
      preferredPackage: 'Kuala Lumpur + Langkawi (4N/5D)',
    },
  });

  const selectedCompanion = watch('travelCompanion');

  const onSubmit = (data: FormData) => {
    const utm = getPersistedUTM();

    const message = `Hello Holiday Star Tours!
I would like to inquire about the Malaysia Campaign Packages:

*Name:* ${data.name}
*WhatsApp:* ${data.phone}
*Tentative Travel Month:* ${data.travelMonth}
*Number of Travellers:* ${data.groupSize}
*Travelling With:* ${data.travelCompanion}
*Preferred Package:* ${data.preferredPackage}
${data.passportHelp ? `*Passport/Visa Assistance Needed:* ${data.passportHelp}` : ''}
${data.message ? `*Notes:* ${data.message}` : ''}

*Source:* ${utm?.utm_source || 'Direct Website'}
*Campaign:* Malaysia Special Campaign`;

    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/${siteConfig.contact.whatsapp}?text=${encoded}`, '_blank');
    reset();
  };

  const scrollToForm = () => {
    const el = document.getElementById('enquiry-form');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white text-[#0A2540]">
      <Helmet>
        <title>Experience Malaysia | Exclusive International Holiday Packages from Chennai</title>
        <meta
          name="description"
          content="Discover Malaysia with Holiday Star Tours & Travels. Visa-free travel for Indian passport holders, 4-hour flights from Chennai, and curated itineraries across Kuala Lumpur, Genting, Langkawi & Penang."
        />
      </Helmet>

      {/* ── SECTION 1: Grand Cinematic Hero ── */}
      <section className="relative w-full min-h-[580px] lg:min-h-[660px] flex items-center overflow-hidden bg-[#0A121A] pt-28 pb-16 sm:pt-32 sm:pb-20 lg:pt-36 lg:pb-24">
        {/* Full-width Background Image (Same as Malaysia Destination Page) */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/hero-bg.jpg"
            alt="Malaysia - Kuala Lumpur skyline at sunset featuring illuminated Petronas Twin Towers, KL Tower, and a lantern-lit rainforest canopy walkway"
            className="w-full h-full object-cover object-center scale-100 select-none pointer-events-none"
            loading="eager"
            fetchPriority="high"
          />
          {/* Directional contrast gradient: provides crisp readability for text on the left while leaving glowing Petronas Towers & sunset illuminated on the right */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 lg:via-black/40 to-transparent pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30 pointer-events-none" />
          {/* Mobile-only backdrop for extra readability on narrow screens */}
          <div className="lg:hidden absolute inset-0 bg-black/40 backdrop-blur-[1px] pointer-events-none" />
        </div>

        {/* Hero Content Container */}
        <div className="container-hs relative z-10 md:pl-8 lg:pl-16 xl:pl-20">
          <AnimatedSection>
            <div className="max-w-xl lg:max-w-2xl text-white">
              {/* Co-Branding Logos: Holiday Star, Tourism Malaysia & Visit Malaysia */}
              <div className="inline-flex items-center gap-3 sm:gap-4.5 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-white/95 backdrop-blur-md shadow-xl border border-white/90 mb-6 sm:mb-8 max-w-full">
                {/* 1. Holiday Star */}
                <img
                  src="/images/hs-logo.png"
                  alt="Holiday Star Tours & Travels"
                  className="h-7 sm:h-8 w-auto object-contain shrink-0"
                />

                <span className="w-px h-6 sm:h-7 bg-gray-200 shrink-0" />

                {/* 2. Tourism Malaysia */}
                <img
                  src="/images/tourism_malaysia_clean.svg"
                  alt="Tourism Malaysia"
                  className="h-6.5 sm:h-7.5 w-auto object-contain shrink-0"
                />

                <span className="w-px h-6 sm:h-7 bg-gray-200 shrink-0" />

                {/* 3. Visit Malaysia 2026-2027 Truly Asia */}
                <img
                  src="/images/Visit Malaysia Logo.png"
                  alt="Visit Malaysia 2026-2027 Truly Asia"
                  className="h-11 sm:h-12 lg:h-14 w-auto object-contain shrink-0"
                />
              </div>

              {/* Bold Main Title with Malaysia Destination Page Styling */}
              <h1 className="font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] tracking-tight leading-[1.12] mb-3 sm:mb-4">
                <span className="text-white block drop-shadow-[0_2px_12px_rgba(0,0,0,0.8)]">
                  Malaysia.
                </span>
                <span
                  className="block text-transparent bg-clip-text drop-shadow-[0_2px_16px_rgba(0,180,216,0.4)]"
                  style={{
                    backgroundImage: 'linear-gradient(90deg, #0066CC 0%, #00B4D8 100%)',
                  }}
                >
                  Truly Asia.
                </span>
              </h1>

              {/* Subtitle */}
              <p className="font-heading font-bold text-base sm:text-xl md:text-2xl text-white drop-shadow-md mb-3">
                Your Next Holiday Is Closer Than You Think.
              </p>

              {/* Description */}
              <p className="text-white/90 text-xs sm:text-sm md:text-base leading-relaxed font-normal max-w-lg drop-shadow-sm mb-7 sm:mb-8">
                Discover vibrant cities, misty highlands, tropical islands, rich heritage and
                unforgettable experiences across Malaysia. Curated Malaysia holidays by Holiday
                Star Tours & Travels.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3.5 sm:gap-4">
                <button
                  onClick={scrollToForm}
                  className="inline-flex items-center gap-2 px-7 sm:px-8 py-3.5 sm:py-4 rounded-full font-bold text-white text-xs sm:text-sm tracking-wide shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95 bg-[#00BFA5] hover:bg-[#00a892]"
                >
                  Explore Holiday Packages
                  <ArrowRight className="w-4 h-4" />
                </button>

                <a
                  href={`https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent(
                    siteConfig.contact.whatsappMessage
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 sm:px-7 py-3.5 sm:py-4 rounded-full bg-black/45 hover:bg-black/65 backdrop-blur-md border border-white/40 text-white font-semibold text-xs sm:text-sm shadow-md transition-all duration-300 hover:scale-103"
                >
                  <svg className="w-4 h-4 fill-[#25D366]" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                  </svg>
                  <span>WhatsApp Us</span>
                </a>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── SECTION 2: Floating Visa-Free Entry Banner ── */}
      <section className="relative z-20 -mt-10 sm:-mt-14 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="bg-white rounded-[26px] p-3 sm:p-4 shadow-[0_16px_40px_rgba(0,0,0,0.08)] border border-gray-100 flex flex-col lg:flex-row items-center justify-between gap-5">
          {/* Gradient Banner on Left */}
          <div
            className="w-full lg:w-auto flex-1 rounded-2xl p-4 sm:p-5 flex items-center gap-4 text-white"
            style={{
              background: 'linear-gradient(90deg, #00C4B4 0%, #2563EB 55%, #8B5CF6 100%)',
            }}
          >
            {/* Circular Malaysia Flag Badge */}
            <div className="w-12 h-12 rounded-full overflow-hidden shrink-0 border-2 border-white shadow-md flex items-center justify-center bg-white">
              <svg viewBox="0 0 64 64" className="w-full h-full">
                {/* 14 Stripes */}
                {[...Array(14)].map((_, i) => (
                  <rect
                    key={i}
                    y={(i * 64) / 14}
                    width="64"
                    height={64 / 14}
                    fill={i % 2 === 0 ? '#CC0000' : '#FFFFFF'}
                  />
                ))}
                {/* Canton */}
                <rect width="32" height="32" fill="#000066" />
                {/* Crescent & 14-point star */}
                <circle cx="16" cy="16" r="10" fill="#FFCC00" />
                <circle cx="19" cy="16" r="8" fill="#000066" />
                <polygon
                  points="22,12 23,15 26,13 25,16 28,16 25,18 27,20 24,19 23,22 21,19 19,21 20,18 17,17 20,16"
                  fill="#FFCC00"
                />
              </svg>
            </div>
            <div>
              <h3 className="font-heading font-black text-sm sm:text-base tracking-wide uppercase">
                VISA-FREE ENTRY FOR INDIAN TRAVELLERS
              </h3>
              <p className="text-white/90 text-xs sm:text-[13px] font-normal">
                One more reason to make Malaysia your next international holiday.
              </p>
            </div>
          </div>

          {/* 3 Travel Feature Points */}
          <div className="flex flex-wrap items-center justify-center lg:justify-end gap-5 sm:gap-6 px-2 text-xs sm:text-[13px] font-semibold text-[#0A2540]">
            <div className="flex items-center gap-2 text-center sm:text-left">
              <div className="w-8 h-8 rounded-full bg-sky-50 flex items-center justify-center text-[#0284C7]">
                <Plane className="w-4 h-4" />
              </div>
              <span>Easy International Gateway</span>
            </div>
            <div className="flex items-center gap-2 text-center sm:text-left">
              <div className="w-8 h-8 rounded-full bg-teal-50 flex items-center justify-center text-[#00A896]">
                <Camera className="w-4 h-4" />
              </div>
              <span>Diverse Experiences</span>
            </div>
            <div className="flex items-center gap-2 text-center sm:text-left">
              <div className="w-8 h-8 rounded-full bg-purple-50 flex items-center justify-center text-[#8B5CF6]">
                <Users className="w-4 h-4" />
              </div>
              <span>Perfect for Every Traveller</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 3: Discover Malaysia (5 Destination Cards) ── */}
      <section className="relative py-14 sm:py-18 md:py-20 overflow-hidden bg-white">
        {/* Scenic Tropical Backdrop with corner leaves and hibiscus flower */}
        <div className="absolute inset-0 pointer-events-none select-none">
          <img
            src="/images/malaysia-discover.jpg"
            alt="Discover Malaysia backdrop"
            className="w-full h-full object-fill"
          />
          {/* Soft White Overlay matching reference */}
          <div className="absolute inset-0 bg-white/40" />
        </div>

        {/* Content Container */}
        <div className="container-hs relative z-10">
          {/* Left-Aligned Heading matching reference image */}
          <div className="max-w-2xl mb-8 sm:mb-10 text-left">
            <span className="text-xs sm:text-sm font-bold uppercase tracking-[0.25em] text-[#00A896] block mb-2 sm:mb-2.5">
              DISCOVER MALAYSIA
            </span>
            <h2 className="font-heading font-extrabold text-2xl sm:text-3xl md:text-[2.35rem] text-[#0A2540] tracking-tight leading-[1.2]">
              Vibrant cities.{' '}
              <span className="bg-gradient-to-r from-[#0284C7] to-[#4F46E5] bg-clip-text text-transparent">
                Serene highlands.
              </span>
              <br />
              Tropical islands.{' '}
              <span className="bg-gradient-to-r from-[#7C3AED] to-[#9333EA] bg-clip-text text-transparent">
                Rich heritage.
              </span>
            </h2>
          </div>

          {/* 5 Destination Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-5">
            {malaysiaDestinations.map((dest, i) => (
              <AnimatedSection key={dest.id} delay={i * 0.08}>
                <div
                  onClick={scrollToForm}
                  className="group relative h-[300px] sm:h-[310px] md:h-[320px] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-1.5 cursor-pointer"
                >
                  <img
                    src={dest.image}
                    alt={dest.name}
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                    loading="lazy"
                  />
                  {/* Card Bottom Text Section with dark gradient & side-by-side arrow */}
                  <div className="absolute inset-x-0 bottom-0 pt-16 pb-4 px-3.5 bg-gradient-to-t from-[#02182B] via-[#02182B]/85 to-transparent flex items-end justify-between gap-2">
                    <div className="min-w-0 flex-1">
                      <h3 className="font-heading font-extrabold text-[13px] sm:text-[14px] text-white tracking-wide uppercase leading-tight mb-1 truncate">
                        {dest.name}
                      </h3>
                      <p className="text-white/80 text-[11px] sm:text-xs font-normal leading-tight truncate">
                        {dest.tagline}
                      </p>
                    </div>
                    <div className="flex-shrink-0 mb-0.5">
                      <span className="w-7 h-7 sm:w-7.5 sm:h-7.5 rounded-full bg-white text-[#0A2540] group-hover:bg-[#00A896] group-hover:text-white flex items-center justify-center transition-all duration-300 shadow-md group-hover:scale-110">
                        <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
                      </span>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 4: Malaysia Holiday Collection (Packages Grid) ── */}
      <section
        className="relative py-14 sm:py-18 md:py-20 overflow-hidden bg-white"
        id="packages-collection"
      >
        {/* Background matching About Us Our Story section */}
        <div className="absolute inset-0 z-0 select-none pointer-events-none">
          <img
            src="/images/our_story_bg.jpg"
            alt="Our Story Background"
            className="w-full h-full object-cover object-left-bottom lg:object-center opacity-85"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/60 to-transparent pointer-events-none" />
        </div>

        <div className="container-hs relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-start">
            {/* Left Column: Heading */}
            <div className="lg:col-span-4 lg:pt-2">
              <span className="text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-[#0284C7] block mb-1">
                MALAYSIA HOLIDAY
              </span>
              <h2 className="font-heading font-black text-3xl sm:text-4xl text-[#0A2540] tracking-tight leading-tight mb-2">
                COLLECTION
              </h2>
              <p className="font-heading font-bold text-sm sm:text-base text-[#6366F1] mb-3">
                Curated Multi-Destination Experiences
              </p>
              <p className="text-[#475569] text-xs sm:text-sm leading-relaxed max-w-sm">
                Choose a holiday that brings together Malaysia&apos;s cities, highlands, heritage and
                islands.
              </p>
            </div>

            {/* Right Column: 6 Packages Grid (3x2) */}
            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 lg:gap-4.5">
              {campaignPackages.map((pkg) => (
                <div
                  key={pkg.id}
                  className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl border border-gray-100 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 group"
                >
                  <div>
                    {/* Package Image */}
                    <div className="relative h-36 sm:h-40 overflow-hidden">
                      <img
                        src={pkg.image}
                        alt={pkg.title}
                        className="w-full h-full object-cover group-hover:scale-106 transition-transform duration-500"
                        loading="lazy"
                      />
                    </div>

                    {/* Package Content */}
                    <div className="p-3.5 sm:p-4">
                      <h3 className="font-heading font-black text-xs sm:text-[13px] text-[#0A2540] tracking-wide leading-snug mb-1">
                        {pkg.code} | {pkg.title}
                      </h3>
                      <p className="text-xs font-bold text-[#00A896] mb-1">{pkg.duration}</p>
                      <p className="text-[#64748B] text-[11px] sm:text-xs leading-normal line-clamp-2">
                        {pkg.tagline}
                      </p>
                    </div>
                  </div>

                  {/* Get Details Button */}
                  <div className="p-3.5 sm:p-4 pt-0">
                    <button
                      onClick={() => setActivePackage(pkg)}
                      className="w-full py-2 sm:py-2.5 rounded-full bg-[#00A896] hover:bg-[#008f80] text-white font-bold text-xs transition-all shadow-sm hover:shadow-md hover:scale-[1.02]"
                    >
                      Get Package Details
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Interactive Package Details Modal (matching reference image) ── */}
      <AnimatePresence>
        {activePackage && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.92 }}
              className="bg-white rounded-3xl max-w-2xl w-full overflow-hidden shadow-2xl relative border border-gray-100"
            >
              {/* Close Button */}
              <button
                onClick={() => setActivePackage(null)}
                className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-white/90 hover:bg-white text-gray-700 flex items-center justify-center shadow-md transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="grid grid-cols-1 md:grid-cols-2">
                {/* Left: Package Image */}
                <div className="relative h-64 md:h-auto min-h-[260px]">
                  <img
                    src={activePackage.image}
                    alt={activePackage.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-5">
                    <div>
                      <span className="bg-[#00A896] text-white text-xs font-bold px-3 py-1 rounded-full uppercase">
                        {activePackage.duration}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Right: Package Details & CTA */}
                <div className="p-6 sm:p-7 flex flex-col justify-between">
                  <div>
                    <h3 className="font-heading font-black text-xl text-[#0A2540] tracking-tight leading-snug mb-1">
                      {activePackage.title}
                    </h3>
                    <p className="text-xs font-semibold text-[#00A896] uppercase tracking-wider mb-4">
                      {activePackage.tagline}
                    </p>

                    <h4 className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-2.5">
                      Highlights:
                    </h4>
                    <ul className="space-y-1.5 mb-6">
                      {activePackage.highlights.map((hl, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs text-[#475569]">
                          <Check className="w-3.5 h-3.5 text-[#00A896] shrink-0 mt-0.5" />
                          <span>{hl}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-2">
                    <button
                      onClick={() => {
                        const targetPkg = activePackage;
                        setActivePackage(null);
                        setBookingPackage(targetPkg);
                      }}
                      className="w-full py-3.5 rounded-full text-white font-bold text-xs uppercase tracking-wider shadow-md hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2 cursor-pointer"
                      style={{
                        background: 'linear-gradient(90deg, #0066CC 0%, #00B4D8 100%)',
                        boxShadow: '0 4px 15px rgba(0, 180, 216, 0.35)',
                      }}
                    >
                      <span>BOOK NOW</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* ── Booking Details Collection Modal (Compact & Clean) ── */}
      <AnimatePresence>
        {bookingPackage && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/65 backdrop-blur-sm overflow-y-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 10 }}
              className="bg-white rounded-2xl sm:rounded-3xl max-w-lg w-full overflow-hidden shadow-2xl relative border border-gray-100 my-auto"
            >
              {/* Integrated Compact Header */}
              <div className="bg-gradient-to-r from-[#00A896] via-[#0284C7] to-[#1E3A8A] px-5 py-3.5 sm:px-6 sm:py-4 text-white relative flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-emerald-200 block">
                    MALAYSIA PACKAGE BOOKING
                  </span>
                  <h3 className="font-heading font-black text-base sm:text-lg tracking-tight leading-snug">
                    {bookingPackage.code} | {bookingPackage.title}
                  </h3>
                  <span className="inline-block mt-0.5 text-[11px] font-semibold text-emerald-200 bg-white/15 px-2 py-0.5 rounded-md">
                    {bookingPackage.duration}
                  </span>
                </div>

                <button
                  type="button"
                  onClick={() => setBookingPackage(null)}
                  className="w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 text-white flex items-center justify-center transition-colors shrink-0 ml-4 cursor-pointer"
                  aria-label="Close booking modal"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Compact Booking Form Body */}
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  if (!bookingForm.name.trim() || !bookingForm.phone.trim()) {
                    alert('Please enter your Name and WhatsApp Number.');
                    return;
                  }

                  const text = `Hello Holiday Star Tours!
I would like to book this Malaysia package:

*Package:* ${bookingPackage.title} (${bookingPackage.duration})
*Name:* ${bookingForm.name}
*WhatsApp No:* ${bookingForm.phone}
*Starting Point:* ${bookingForm.startingPoint}
*Travel Month:* ${bookingForm.travelMonth}
*No. of Travellers:* ${bookingForm.travellers}
*Flight Preference:* ${bookingForm.flightPreference}

Please share booking details and confirmed quote.`;

                  window.open(`https://wa.me/919444370254?text=${encodeURIComponent(text)}`, '_blank');
                  setBookingPackage(null);
                }}
                className="p-4 sm:p-5 space-y-3 text-left"
              >
                {/* Row 1: Name & WhatsApp */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-gray-700 mb-1">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Ramesh Kumar"
                      value={bookingForm.name}
                      onChange={(e) => setBookingForm({ ...bookingForm, name: e.target.value })}
                      className="w-full px-3 py-2 text-xs sm:text-sm bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:outline-none focus:border-[#00A896] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-gray-700 mb-1">
                      WhatsApp Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={bookingForm.phone}
                      onChange={(e) => setBookingForm({ ...bookingForm, phone: e.target.value })}
                      className="w-full px-3 py-2 text-xs sm:text-sm bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:outline-none focus:border-[#00A896] transition-colors"
                    />
                  </div>
                </div>

                {/* Row 2: Starting City & Travel Month */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-gray-700 mb-1">
                      Starting Point
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Chennai, Bengaluru"
                      value={bookingForm.startingPoint}
                      onChange={(e) => setBookingForm({ ...bookingForm, startingPoint: e.target.value })}
                      className="w-full px-3 py-2 text-xs sm:text-sm bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:outline-none focus:border-[#00A896] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-gray-700 mb-1">
                      Travel Month
                    </label>
                    <select
                      value={bookingForm.travelMonth}
                      onChange={(e) => setBookingForm({ ...bookingForm, travelMonth: e.target.value })}
                      className="w-full px-3 py-2 text-xs sm:text-sm bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:outline-none focus:border-[#00A896] transition-colors cursor-pointer"
                    >
                      {dynamicTravelMonths.map((month) => (
                        <option key={month} value={month}>
                          {month}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Row 3: Travellers */}
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-gray-700 mb-1">
                    No. of Travellers
                  </label>
                  <select
                    value={bookingForm.travellers}
                    onChange={(e) => setBookingForm({ ...bookingForm, travellers: e.target.value })}
                    className="w-full px-3 py-2 text-xs sm:text-sm bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:outline-none focus:border-[#00A896] transition-colors"
                  >
                    <option value="1 Traveller (Solo)">1 Traveller (Solo)</option>
                    <option value="2 Travellers (Couple / Friends)">2 Travellers (Couple / Friends)</option>
                    <option value="3 Travellers">3 Travellers</option>
                    <option value="4 Travellers (Family)">4 Travellers (Family)</option>
                    <option value="5+ Travellers (Group)">5+ Travellers (Group)</option>
                  </select>
                </div>

                {/* Row 4: Flight Preference (Compact 2-card grid) */}
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-gray-700 mb-1">
                    Flight Preference:
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    <label
                      className={`flex items-center gap-2 p-2 rounded-xl border cursor-pointer transition-all ${
                        bookingForm.flightPreference === 'Require air tickets from our side'
                          ? 'border-[#00A896] bg-emerald-50/80 text-emerald-900 font-semibold'
                          : 'border-gray-200 bg-gray-50/70 hover:bg-gray-100/70 text-gray-700'
                      }`}
                    >
                      <input
                        type="radio"
                        name="flightPreference"
                        value="Require air tickets from our side"
                        checked={bookingForm.flightPreference === 'Require air tickets from our side'}
                        onChange={(e) => setBookingForm({ ...bookingForm, flightPreference: e.target.value })}
                        className="w-3.5 h-3.5 text-[#00A896] focus:ring-[#00A896]"
                      />
                      <span className="text-xs leading-tight">
                        Require air tickets from our side
                      </span>
                    </label>

                    <label
                      className={`flex items-center gap-2 p-2 rounded-xl border cursor-pointer transition-all ${
                        bookingForm.flightPreference === 'Will arrange air tickets on your own'
                          ? 'border-[#00A896] bg-emerald-50/80 text-emerald-900 font-semibold'
                          : 'border-gray-200 bg-gray-50/70 hover:bg-gray-100/70 text-gray-700'
                      }`}
                    >
                      <input
                        type="radio"
                        name="flightPreference"
                        value="Will arrange air tickets on your own"
                        checked={bookingForm.flightPreference === 'Will arrange air tickets on your own'}
                        onChange={(e) => setBookingForm({ ...bookingForm, flightPreference: e.target.value })}
                        className="w-3.5 h-3.5 text-[#00A896] focus:ring-[#00A896]"
                      />
                      <span className="text-xs leading-tight">
                        Will arrange air tickets on your own
                      </span>
                    </label>
                  </div>
                </div>

                {/* Submit to WhatsApp */}
                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-3 px-5 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-xs sm:text-sm shadow-md hover:shadow-lg hover:scale-[1.01] active:scale-[0.98] transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
                      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                    </svg>
                    <span>Send on WhatsApp</span>
                  </button>
                  <p className="text-center text-[10px] text-gray-400 mt-1">
                    Connects directly to our Malaysia desk on WhatsApp.
                  </p>
                </div>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* ── SECTION 5: More Than a Destination. It's an Experience ── */}
      <section className="relative py-14 sm:py-16 md:py-20 overflow-hidden bg-white">
        {/* Scenic Tropical Backdrop from About Us page (Our Story) */}
        <div className="absolute inset-0 pointer-events-none select-none">
          <img
            src="/images/our_story_bg.jpg"
            alt="Malaysia Experience backdrop"
            className="w-full h-full object-cover object-left-bottom lg:object-center opacity-85"
          />
          {/* Atmospheric White Gradient for text and icon legibility */}
          <div className="absolute inset-0 bg-gradient-to-r from-white/85 via-white/55 to-transparent pointer-events-none" />
        </div>

        <div className="container-hs relative z-10">
          {/* Left-Aligned Heading matching reference image */}
          <div className="text-left mb-8 sm:mb-10 max-w-2xl">
            <h2 className="font-heading font-black text-2xl sm:text-3xl md:text-[2.2rem] text-[#0A2540] tracking-tight leading-[1.2]">
              MORE THAN A DESTINATION.
              <br />
              IT&apos;S AN{' '}
              <span className="text-[#0284C7]">
                EXPERIENCE.
              </span>
            </h2>
          </div>

          {/* 5 Pillars Row evenly spaced */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-4 lg:gap-0">
            {experiencePillars.map((item, i) => (
              <AnimatedSection key={i} delay={i * 0.08}>
                <div className="flex flex-col items-center text-center px-3 lg:px-4 lg:border-r lg:border-sky-100/80 last:lg:border-r-0 group">
                  <div className="h-11 flex items-center justify-center mb-2 transition-transform duration-300 group-hover:scale-110">
                    <item.icon className="w-8 h-8 sm:w-9 sm:h-9 stroke-[2]" style={{ color: item.iconColor }} />
                  </div>
                  <h3
                    className="font-heading font-black text-xs sm:text-[13px] tracking-wider uppercase mb-1"
                    style={{ color: item.titleColor }}
                  >
                    {item.title}
                  </h3>
                  <p className="text-[#475569] text-[11px] sm:text-xs leading-relaxed max-w-[170px]">
                    {item.desc}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 6: Lead Capture Form ("Ready to Experience Malaysia?") ── */}
      <section
        id="enquiry-form"
        className="relative py-16 sm:py-20 md:py-24 overflow-hidden bg-[#0A2540]"
      >
        {/* Scenic Tropical Backdrop with Island, Traveler, and Flower */}
        <div className="absolute inset-0 pointer-events-none select-none">
          <img
            src="/images/malaysia-formbg.jpg"
            alt="Malaysia Form backdrop"
            className="w-full h-full object-cover object-center"
          />
          {/* Protective Left Gradient Overlay ensuring text is sharply visible and distinct from the bright sky */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#07162c]/92 via-[#07162c]/75 to-transparent pointer-events-none" />
          <div className="absolute inset-0 bg-[#07162c]/20 pointer-events-none" />
        </div>

        {/* Floating Animated Parachute in the Sky */}
        <motion.div
          className="absolute top-14 sm:top-18 md:top-20 left-6 sm:left-12 lg:left-16 z-20 pointer-events-none"
          animate={{
            y: [0, -18, 0],
            x: [0, 8, 0],
            rotate: [-4, 5, -4],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          <svg className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 drop-shadow-xl" viewBox="0 0 64 64" fill="none">
            {/* Parachute Canopy */}
            <path
              d="M 6 28 C 6 8, 58 8, 58 28 Z"
              fill="url(#paraGradient)"
              stroke="#ffffff"
              strokeWidth="1.8"
            />
            <path d="M 18 28 C 18 14, 26 10, 32 8" stroke="#ffffff" strokeWidth="1.2" strokeOpacity="0.8" />
            <path d="M 46 28 C 46 14, 38 10, 32 8" stroke="#ffffff" strokeWidth="1.2" strokeOpacity="0.8" />
            <path d="M 32 28 L 32 8" stroke="#ffffff" strokeWidth="1.2" strokeOpacity="0.8" />
            {/* Suspension Lines */}
            <line x1="8" y1="28" x2="32" y2="48" stroke="#ffffff" strokeWidth="1.2" strokeOpacity="0.9" />
            <line x1="20" y1="28" x2="32" y2="48" stroke="#ffffff" strokeWidth="1" strokeOpacity="0.85" />
            <line x1="32" y1="28" x2="32" y2="48" stroke="#ffffff" strokeWidth="1" strokeOpacity="0.85" />
            <line x1="44" y1="28" x2="32" y2="48" stroke="#ffffff" strokeWidth="1" strokeOpacity="0.85" />
            <line x1="56" y1="28" x2="32" y2="48" stroke="#ffffff" strokeWidth="1.2" strokeOpacity="0.9" />
            {/* Paraglider / Adventurer Figure */}
            <circle cx="32" cy="49" r="2.5" fill="#ffffff" />
            <path d="M 30 52 L 34 52 L 33 58 L 31 58 Z" fill="#0284C7" />
            <defs>
              <linearGradient id="paraGradient" x1="6" y1="18" x2="58" y2="18" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#00E5FF" />
                <stop offset="33%" stopColor="#F59E0B" />
                <stop offset="66%" stopColor="#EC4899" />
                <stop offset="100%" stopColor="#00A896" />
              </linearGradient>
            </defs>
          </svg>
        </motion.div>

        <div className="container-hs relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">
            {/* Left Prompt Column */}
            <div className="lg:col-span-4 text-white z-10">
              <div className="inline-block px-3 py-1 rounded-full bg-[#00E5FF]/20 border border-[#00E5FF]/40 backdrop-blur-sm mb-3.5 shadow-sm">
                <span className="text-xs sm:text-sm font-extrabold uppercase tracking-[0.25em] text-[#00E5FF]">
                  READY TO EXPERIENCE
                </span>
              </div>
              <h2 className="font-heading font-black text-4xl sm:text-5xl tracking-tight leading-tight mb-3 text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.6)]">
                MALAYSIA?
              </h2>
              <p className="font-heading font-bold text-lg sm:text-xl text-[#7DD3FC] mb-3 drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)]">
                Let Holiday Star plan your holiday.
              </p>
              <p className="text-slate-100 text-xs sm:text-sm leading-relaxed max-w-sm font-medium drop-shadow-[0_1px_6px_rgba(0,0,0,0.7)]">
                Tell us a little about your travel plans and our Holiday Star team will help you
                choose the right Malaysia package.
              </p>
            </div>

            {/* Center Form Column */}
            <div className="lg:col-span-5 bg-white rounded-3xl p-6 sm:p-7 shadow-2xl text-[#0A2540]">
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-3.5">
                {/* 3-Column Top Row: Name, Phone, Month */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-gray-600 mb-1">
                      Full Name*
                    </label>
                    <input
                      type="text"
                      {...register('name')}
                      placeholder="Your name"
                      className="w-full px-3 py-2 rounded-xl border border-gray-200 text-xs focus:outline-none focus:border-[#00A896]"
                    />
                    {errors.name && (
                      <p className="text-red-500 text-[10px] mt-0.5">{errors.name.message}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-gray-600 mb-1">
                      WhatsApp Number*
                    </label>
                    <input
                      type="tel"
                      {...register('phone')}
                      placeholder="+91 98765 43210"
                      className="w-full px-3 py-2 rounded-xl border border-gray-200 text-xs focus:outline-none focus:border-[#00A896]"
                    />
                    {errors.phone && (
                      <p className="text-red-500 text-[10px] mt-0.5">{errors.phone.message}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-gray-600 mb-1">
                      Travel Month*
                    </label>
                    <select
                      {...register('travelMonth')}
                      className="w-full px-3 py-2 rounded-xl border border-gray-200 text-xs focus:outline-none focus:border-[#00A896] bg-white cursor-pointer"
                    >
                      <option value="">Select travel month</option>
                      {dynamicTravelMonths.map((month) => (
                        <option key={month} value={month}>
                          {month}
                        </option>
                      ))}
                    </select>
                    {errors.travelMonth && (
                      <p className="text-red-500 text-[10px] mt-0.5">{errors.travelMonth.message}</p>
                    )}
                  </div>
                </div>

                {/* 2-Column Row: Passport Guidance & Number of Travellers */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-gray-600 mb-1">
                      Passport/Visa Help?
                    </label>
                    <select
                      {...register('passportHelp')}
                      className="w-full px-3 py-2 rounded-xl border border-gray-200 text-xs focus:outline-none focus:border-[#00A896] bg-white"
                    >
                      <option value="Valid Passport Ready">Valid Passport Ready</option>
                      <option value="Applying for Passport">Applying for Passport</option>
                      <option value="Need Guidance">Need Guidance</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-gray-600 mb-1">
                      Number of Travellers*
                    </label>
                    <select
                      {...register('groupSize')}
                      className="w-full px-3 py-2 rounded-xl border border-gray-200 text-xs focus:outline-none focus:border-[#00A896] bg-white"
                    >
                      <option value="1 Traveller">1 Traveller</option>
                      <option value="2 Travellers">2 Travellers (Couple)</option>
                      <option value="3-4 Travellers">3–4 Travellers</option>
                      <option value="5-8 Travellers">5–8 Travellers</option>
                      <option value="9+ Group">9+ Travellers (Group)</option>
                    </select>
                  </div>
                </div>

                {/* Who are you travelling with? */}
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-gray-600 mb-1.5">
                    Who are you travelling with?
                  </label>
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5">
                    {['Couple', 'Family', 'Friends / Group', 'Solo', 'Corporate'].map((comp) => (
                      <label
                        key={comp}
                        className="flex items-center gap-1.5 cursor-pointer text-xs text-gray-700 select-none hover:text-[#00A896] transition-colors"
                      >
                        <input
                          type="radio"
                          name="travelCompanionRadio"
                          value={comp}
                          checked={selectedCompanion === comp}
                          onChange={() => setValue('travelCompanion', comp)}
                          className="w-3.5 h-3.5 text-[#00A896] focus:ring-[#00A896] accent-[#00A896]"
                        />
                        <span>{comp}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Preferred Package */}
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-gray-600 mb-1">
                    Preferred Package*
                  </label>
                  <select
                    {...register('preferredPackage')}
                    className="w-full px-3 py-2 rounded-xl border border-gray-200 text-xs focus:outline-none focus:border-[#00A896] bg-white"
                  >
                    <option value="Kuala Lumpur + Genting (3N/4D)">
                      Kuala Lumpur + Genting (3N/4D)
                    </option>
                    <option value="Kuala Lumpur + Malacca (3N/4D)">
                      Kuala Lumpur + Malacca (3N/4D)
                    </option>
                    <option value="Kuala Lumpur + Langkawi (4N/5D)">
                      Kuala Lumpur + Langkawi (4N/5D)
                    </option>
                    <option value="Kuala Lumpur + Penang (4N/5D)">
                      Kuala Lumpur + Penang (4N/5D)
                    </option>
                    <option value="Kuala Lumpur + Genting + Langkawi (5N/6D)">
                      Kuala Lumpur + Genting + Langkawi (5N/6D)
                    </option>
                    <option value="Kuala Lumpur + Malacca + Penang (6N/7D)">
                      Kuala Lumpur + Malacca + Penang (6N/7D)
                    </option>
                    <option value="Custom Malaysia Holiday">Custom Malaysia Holiday Plan</option>
                  </select>
                </div>

                {/* Additional Message */}
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-gray-600 mb-1">
                    Additional Message / Travel Requirements (Optional)
                  </label>
                  <textarea
                    {...register('message')}
                    rows={2}
                    placeholder="Tell us more about your travel plans..."
                    className="w-full px-3 py-2 rounded-xl border border-gray-200 text-xs focus:outline-none focus:border-[#00A896] resize-none"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 rounded-full text-white font-bold text-xs tracking-wider uppercase shadow-lg hover:shadow-xl hover:scale-102 active:scale-95 transition-all duration-300"
                  style={{
                    background: 'linear-gradient(90deg, #0066CC 0%, #00B4D8 100%)',
                    boxShadow: '0 4px 15px rgba(0, 180, 216, 0.35)',
                  }}
                >
                  GET MY MALAYSIA HOLIDAY PLAN 🚀
                </button>

                <p className="text-center text-[11px] text-gray-500 mt-1">
                  Our travel expert will contact you with package details.
                </p>
              </form>
            </div>

            {/* Right Column: WhatsApp Direct Card */}
            <div className="lg:col-span-3 rounded-3xl p-6 sm:p-7 text-white shadow-2xl relative overflow-hidden bg-gradient-to-br from-[#00A896]/90 via-[#008f80]/85 to-[#0284C7]/80 backdrop-blur-md border border-white/25">
              <div className="w-11 h-11 rounded-full bg-white/20 flex items-center justify-center mb-3.5">
                <svg className="w-6 h-6 fill-white" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                </svg>
              </div>
              <h3 className="font-heading font-black text-lg tracking-wide uppercase mb-1">
                PREFER TO CHAT?
              </h3>
              <p className="font-semibold text-xs sm:text-sm text-white mb-3">
                Talk to a Holiday Star Travel Expert on WhatsApp.
              </p>
              <p className="text-white/85 text-xs leading-relaxed mb-6 font-normal">
                Get help choosing destinations, packages and travel options for your Malaysia
                holiday.
              </p>

              <a
                href={`https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent(
                  siteConfig.contact.whatsappMessage
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 rounded-full bg-[#00A896] hover:bg-[#008f80] text-white font-bold text-xs flex items-center justify-center gap-2 shadow-md hover:scale-103 transition-transform"
              >
                <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                </svg>
                <span>Chat on WhatsApp</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 7: Footer Banner ("Your Malaysia Story Starts Here.") ── */}
      <section className="relative py-20 sm:py-24 bg-[#0A2540] overflow-hidden">
        {/* Malaysia Sunset & KL Skyline Backdrop */}
        <img
          src="/images/malaysia-cta.jpg"
          alt="Malaysia sunset skyline CTA backdrop"
          className="absolute inset-0 w-full h-full object-cover object-center opacity-85 select-none pointer-events-none"
        />
        {/* Soft Radial & Ambient Overlay for text readability while preserving vibrant skyline & sunset */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse at center, rgba(10, 37, 64, 0.78) 0%, rgba(10, 37, 64, 0.65) 45%, rgba(7, 22, 44, 0.85) 100%)',
          }}
        />

        <div className="container-hs relative z-10 text-center text-white">
          <span className="text-xs sm:text-sm font-bold uppercase tracking-[0.25em] text-[#00E5FF] block mb-2">
            YOUR MALAYSIA STORY
          </span>
          <h2 className="font-heading font-black text-3xl sm:text-4xl md:text-5xl tracking-tight mb-3">
            STARTS HERE.
          </h2>
          <p className="font-heading font-semibold text-base sm:text-lg text-[#E0F2FE] mb-2">
            Discover. Experience. Plan.
          </p>
          <p className="text-white/80 text-xs sm:text-sm max-w-xl mx-auto font-normal mb-8">
            From city skylines to mountain escapes and tropical islands, your Malaysian holiday is
            waiting.
          </p>

          <button
            onClick={scrollToForm}
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-white font-bold text-xs sm:text-sm tracking-wide shadow-lg hover:shadow-2xl hover:scale-105 active:scale-95 transition-all duration-300"
            style={{
              background: 'linear-gradient(90deg, #0066CC 0%, #00B4D8 100%)',
              boxShadow: '0 4px 15px rgba(0, 180, 216, 0.35)',
            }}
          >
            Enquire Now
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>
    </div>
  );
}
