import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import AnimatedSection from '../../../components/common/AnimatedSection';

interface DestinationItem {
  id: string;
  name: string;
  slug: string;
  tagline: string;
  image: string;
}

const topRowDestinations: DestinationItem[] = [
  {
    id: 'malaysia',
    name: 'Malaysia',
    slug: 'malaysia',
    tagline: 'Truly Asia, made easy.',
    image: '/images/malaysia_card.jpg',
  },
  {
    id: 'thailand',
    name: 'Thailand',
    slug: 'thailand',
    tagline: 'Beaches, temples and vibrant city life.',
    image: '/images/thailand_card.jpg',
  },
  {
    id: 'vietnam',
    name: 'Vietnam',
    slug: 'vietnam',
    tagline: 'Landscapes, culture and unforgettable flavours.',
    image: '/images/vietnam_card.jpg',
  },
  {
    id: 'sri-lanka',
    name: 'Sri Lanka',
    slug: 'sri-lanka',
    tagline: 'Culture, coastlines and tea country.',
    image: '/images/srilanka_card.jpg',
  },
];

const bottomRowDestinations: DestinationItem[] = [
  {
    id: 'dubai',
    name: 'Dubai',
    slug: 'dubai',
    tagline: 'Where the extraordinary feels everyday.',
    image: '/images/dubai_card.jpg',
  },
  {
    id: 'singapore',
    name: 'Singapore',
    slug: 'singapore',
    tagline: 'A world-class city in one unforgettable escape.',
    image: '/images/singapore_card.jpg',
  },
  {
    id: 'indonesia',
    name: 'Indonesia',
    slug: 'indonesia',
    tagline: 'Island life, culture and natural beauty.',
    image: '/images/indonesia_card.jpg',
  },
];
function DestinationCard({ dest }: { dest: DestinationItem }) {
  return (
    <Link
      to={`/destinations/${dest.slug}`}
      className="group relative block h-[350px] sm:h-[370px] md:h-[390px] rounded-[22px] overflow-hidden shadow-[0_8px_30px_rgba(4,60,95,0.09)] hover:shadow-[0_22px_48px_rgba(4,60,95,0.24)] transition-all duration-500 hover:-translate-y-1.5 border border-white/40"
    >
      {/* Destination Landmark Photo with smooth zoom on hover */}
      <img
        src={dest.image}
        alt={dest.name}
        className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-700 ease-out"
        loading="lazy"
        onError={(e) => {
          (e.target as HTMLImageElement).src =
            'https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=800&q=80';
        }}
      />

      {/* Blurred Vibrant Frosted Glass Background Layer in White (reduced overlay) */}
      <div
        className="absolute inset-x-0 bottom-0 top-[50%] pointer-events-none transition-all duration-300"
        style={{
          background:
            'radial-gradient(ellipse 90% 65% at 50% 0%, rgba(255, 255, 255, 0.5) 0%, transparent 75%), linear-gradient(180deg, rgba(255, 255, 255, 0.55) 0%, rgba(255, 255, 255, 0.8) 32%, rgba(255, 255, 255, 0.9) 100%)',
          backdropFilter: 'blur(14px) saturate(140%)',
          WebkitBackdropFilter: 'blur(14px) saturate(140%)',
          maskImage:
            'linear-gradient(to bottom, transparent 0%, rgba(0, 0, 0, 0.85) 20%, black 100%)',
          WebkitMaskImage:
            'linear-gradient(to bottom, transparent 0%, rgba(0, 0, 0, 0.85) 20%, black 100%)',
        }}
      />

      {/* Unmasked Content Layer (Guarantees 100% crisp visibility of heading, tagline, and button) */}
      <div className="absolute inset-x-0 bottom-0 flex flex-col justify-end p-5 sm:p-6 z-10 pointer-events-none">
        {/* Destination Name */}
        <h3 className="font-heading font-bold text-[1.4rem] sm:text-[1.6rem] text-[#0066CC] group-hover:text-[#0052A3] tracking-tight leading-tight pointer-events-auto transition-colors duration-200">
          {dest.name}
        </h3>

        {/* Tagline */}
        <p className="text-[#1E3A8A] text-xs sm:text-[0.82rem] font-medium leading-relaxed mt-1 mb-3.5 pointer-events-auto">
          {dest.tagline}
        </p>

        {/* Gradient Pill Button matching the reference image */}
        <div className="pt-0.5 pointer-events-auto">
          <span
            className="inline-flex items-center gap-1.5 px-4 sm:px-4.5 py-1.5 sm:py-2 rounded-full font-medium text-white text-xs sm:text-[0.8rem] tracking-wide shadow-md group-hover:shadow-lg transition-all duration-300 group-hover:scale-[1.03]"
            style={{
              background:
                'linear-gradient(90deg, #0066CC 0%, #00B4D8 100%)',
              boxShadow: '0 2px 10px rgba(0, 180, 216, 0.35)',
            }}
          >
            Explore {dest.name}
            <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
          </span>
        </div>
      </div>
    </Link>
  );
}

export default function DestinationDiscovery() {
  return (
    <section
      className="relative py-16 sm:py-20 md:py-24 overflow-hidden border-t border-sky-100/60"
      style={{
        background:
          'linear-gradient(180deg, #F0F7FD 0%, #E3F2FC 22%, #EEF6FD 65%, #FFFFFF 100%)',
      }}
      aria-label="Popular Destinations"
    >
      {/* ── Light Sky & Soft Clouds Layer ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none" aria-hidden="true">
        {/* Atmospheric soft sky light glows */}
        <div
          className="absolute top-0 right-0 w-[650px] h-[400px] rounded-full opacity-80"
          style={{
            background:
              'radial-gradient(circle at 75% 20%, rgba(255, 255, 255, 0.95) 0%, rgba(227, 242, 252, 0.6) 45%, transparent 75%)',
          }}
        />
        <div
          className="absolute top-8 left-0 w-[550px] h-[350px] rounded-full opacity-70"
          style={{
            background:
              'radial-gradient(circle at 25% 30%, rgba(255, 255, 255, 0.95) 0%, rgba(238, 246, 253, 0.5) 50%, transparent 75%)',
          }}
        />
        <div
          className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] rounded-full opacity-50"
          style={{
            background:
              'radial-gradient(ellipse at center, rgba(255, 255, 255, 0.8) 0%, transparent 70%)',
          }}
        />

        {/* Delicate, Light Fluffy Clouds Across Sky Background */}
        <svg
          className="absolute inset-0 w-full h-full"
          preserveAspectRatio="none"
          viewBox="0 0 1440 850"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* Soft cloud feathering filter */}
            <filter id="cloud-blur" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="8" />
            </filter>
            <filter id="cloud-soft" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="3.5" />
            </filter>

            {/* Cloud Gradients */}
            <linearGradient id="cloud-grad-1" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.9" />
              <stop offset="60%" stopColor="#FFFFFF" stopOpacity="0.65" />
              <stop offset="100%" stopColor="#E0F2FE" stopOpacity="0.1" />
            </linearGradient>

            <linearGradient id="cloud-grad-2" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#EBF4FC" stopOpacity="0.15" />
            </linearGradient>
          </defs>

          {/* Top-Right Cloud Cluster (soft billowy sky) */}
          <g filter="url(#cloud-soft)" opacity="0.85">
            <path
              d="M1080 50 C1110 25, 1160 20, 1195 38 C1230 18, 1285 15, 1325 35 C1365 20, 1415 25, 1440 50 L1440 140 C1390 155, 1310 150, 1230 135 C1160 125, 1110 100, 1080 50 Z"
              fill="url(#cloud-grad-1)"
            />
            <path
              d="M1180 80 C1220 55, 1290 50, 1335 70 C1375 60, 1420 70, 1440 90 L1440 170 C1370 175, 1290 165, 1210 145 C1175 125, 1165 95, 1180 80 Z"
              fill="url(#cloud-grad-2)"
              opacity="0.65"
            />
          </g>

          {/* Top-Left Soft Billow Cloud (behind title area) */}
          <g filter="url(#cloud-soft)" opacity="0.75">
            <path
              d="M-40 50 C0 20, 50 15, 90 35 C130 15, 190 20, 230 45 C270 30, 330 38, 360 70 C390 100, 370 135, 330 150 C260 170, 150 160, 50 150 L-40 130 Z"
              fill="url(#cloud-grad-1)"
            />
          </g>

          {/* Center Mid-Sky Floating Cloud Wisps */}
          <g filter="url(#cloud-blur)" opacity="0.65">
            <ellipse cx="720" cy="160" rx="280" ry="48" fill="#FFFFFF" />
            <ellipse cx="840" cy="145" rx="200" ry="40" fill="#FFFFFF" />
            <ellipse cx="620" cy="175" rx="210" ry="38" fill="#E8F4FD" />
          </g>

          {/* Additional Soft Floating Clouds across middle-right */}
          <g filter="url(#cloud-soft)" opacity="0.55">
            <path
              d="M960 260 C990 240, 1040 235, 1070 250 C1100 238, 1150 242, 1180 260 C1210 248, 1250 255, 1270 275 C1290 295, 1275 320, 1240 330 C1170 345, 1080 340, 1010 325 C970 310, 950 280, 960 260 Z"
              fill="url(#cloud-grad-2)"
            />
          </g>

          {/* Far Left Mid-Height Cloud Puff */}
          <g filter="url(#cloud-soft)" opacity="0.5">
            <ellipse cx="140" cy="380" rx="160" ry="40" fill="#FFFFFF" />
            <ellipse cx="200" cy="365" rx="120" ry="35" fill="#FFFFFF" />
          </g>
        </svg>
      </div>

      <div className="container-hs relative z-10">
        {/* Section Header with Flight Trail & Airplane on the Right (exactly like reference image) */}
        <div className="relative mb-10 sm:mb-12">
          {/* Header text */}
          <div className="max-w-2xl">
            <span className="text-xs sm:text-sm font-bold uppercase tracking-[0.25em] text-[#00A896] block mb-2 sm:mb-3">
              POPULAR DESTINATIONS
            </span>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl md:text-[2.6rem] text-[#0A2540] tracking-tight leading-[1.15]">
              Where will you go next?
            </h2>
            <p className="text-[#4A5568] text-sm sm:text-base leading-relaxed mt-3">
              From quick international escapes to family holidays, romantic
              getaways and group adventures, discover destinations selected for
              unforgettable experiences.
            </p>
          </div>

          {/* Decorative Dashed Flight Trail & Airplane in the open space to the right */}
          <div className="absolute top-2 right-0 sm:top-0 sm:right-6 md:right-12 pointer-events-none opacity-90 hidden sm:block">
            <svg
              width="260"
              height="110"
              viewBox="0 0 260 110"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Topmost faint flight loop curve */}
              <path
                d="M 180 0 C 205 16, 235 14, 252 0"
                stroke="#38BDF8"
                strokeWidth="1.8"
                strokeDasharray="4 4"
                strokeOpacity="0.45"
                strokeLinecap="round"
              />
              {/* Main flight arc curve heading up to the right */}
              <path
                d="M 8 85 C 65 78, 115 32, 172 54 C 196 64, 218 46, 235 22"
                stroke="#38BDF8"
                strokeWidth="2"
                strokeDasharray="5 5"
                strokeLinecap="round"
              />
              {/* Airplane flying towards top-right */}
              <g transform="translate(230, 16) rotate(34)">
                <path
                  d="M12 2 L14.5 9 L22 10 L15.5 15 L17 22 L12 18 L7 22 L8.5 15 L2 10 L9.5 9 Z"
                  fill="#0EA5E9"
                />
              </g>
            </svg>
          </div>
        </div>

        {/* 12-Column Responsive Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-5 sm:gap-6">
          {/* Top Row: 4 cards (Malaysia, Thailand, Vietnam, Sri Lanka) each col-span-3 */}
          {topRowDestinations.map((dest, i) => (
            <div key={dest.id} className="lg:col-span-3">
              <AnimatedSection delay={i * 0.08}>
                <DestinationCard dest={dest} />
              </AnimatedSection>
            </div>
          ))}

          {/* Bottom Row: 3 wider cards (Dubai, Singapore, Indonesia) each col-span-4 */}
          {bottomRowDestinations.map((dest, i) => (
            <div key={dest.id} className="lg:col-span-4">
              <AnimatedSection delay={0.32 + i * 0.08}>
                <DestinationCard dest={dest} />
              </AnimatedSection>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

