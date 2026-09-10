import { Calendar, Compass, MessageSquare, Luggage, MapPin } from 'lucide-react';
import AnimatedSection from '../../../components/common/AnimatedSection';

interface WhyFeatureItem {
  id: string;
  icon: typeof Calendar;
  title: string;
  description: string;
  iconColor: string;
  badgeBg: string;
}

const features: WhyFeatureItem[] = [
  {
    id: 'itineraries',
    icon: Calendar,
    title: 'Thoughtfully planned itineraries',
    description: 'Know what your holiday looks like before you travel.',
    iconColor: '#00A896',
    badgeBg: '#DFF6F5',
  },
  {
    id: 'expertise',
    icon: Compass,
    title: 'Destination-focused expertise',
    description: 'We focus on selected international destinations.',
    iconColor: '#10B981',
    badgeBg: '#D4F7E6',
  },
  {
    id: 'communication',
    icon: MessageSquare,
    title: 'Clear communication',
    description: 'From your first enquiry to your return journey.',
    iconColor: '#8B5CF6',
    badgeBg: '#EFE7FD',
  },
  {
    id: 'support',
    icon: Luggage,
    title: 'End-to-end travel support',
    description: 'Flights, accommodation, transfers, sightseeing and more.',
    iconColor: '#0284C7',
    badgeBg: '#E0F2FE',
  },
  {
    id: 'chennai',
    icon: MapPin,
    title: 'Based in Chennai',
    description: 'A Chennai-based team serving travellers across Tamil Nadu.',
    iconColor: '#7C3AED',
    badgeBg: '#EDE9FE',
  },
];

export default function WhyHolidayStar() {
  return (
    <section
      className="relative py-16 sm:py-20 md:py-24 overflow-hidden"
      style={{
        background:
          'linear-gradient(180deg, #F0F8FD 0%, #E3F1FB 32%, #EEF7FD 70%, #FFFFFF 100%)',
      }}
      aria-label="Why Holiday Star - Your Trusted Travel Partner"
    >
      {/* ── Background Sky, Clouds & Horizon Silhouettes ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none" aria-hidden="true">
        {/* Atmospheric soft light glows */}
        <div
          className="absolute -top-12 left-1/4 w-[600px] h-[350px] rounded-full opacity-60"
          style={{
            background:
              'radial-gradient(ellipse at center, rgba(255, 255, 255, 0.95) 0%, rgba(227, 241, 251, 0.4) 50%, transparent 75%)',
          }}
        />
        <div
          className="absolute top-10 right-10 w-[500px] h-[300px] rounded-full opacity-50"
          style={{
            background:
              'radial-gradient(circle at center, rgba(255, 255, 255, 0.9) 0%, transparent 70%)',
          }}
        />

        {/* Soft Cumulus Clouds & Distant Mist Silhouette SVG */}
        <svg
          className="absolute inset-0 w-full h-full"
          preserveAspectRatio="none"
          viewBox="0 0 1440 600"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <filter id="why-cloud-blur" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="8" />
            </filter>
            <filter id="why-cloud-soft" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="4" />
            </filter>

            <linearGradient id="why-cloud-g1" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.85" />
              <stop offset="70%" stopColor="#FFFFFF" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#E0F2FE" stopOpacity="0.1" />
            </linearGradient>

            <linearGradient id="why-horizon-g" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#38BDF8" stopOpacity="0.08" />
              <stop offset="100%" stopColor="#0284C7" stopOpacity="0.02" />
            </linearGradient>
          </defs>

          {/* Faint Distant Hill/Tree Silhouette Horizon behind icons */}
          <path
            d="M0 420 C180 390, 320 410, 480 385 C640 360, 780 400, 960 375 C1120 350, 1280 390, 1440 370 L1440 600 L0 600 Z"
            fill="url(#why-horizon-g)"
          />

          {/* Soft White Cloud Layers */}
          <g filter="url(#why-cloud-soft)" opacity="0.7">
            <path
              d="M1020 70 C1060 40, 1120 35, 1160 55 C1200 35, 1260 30, 1310 50 C1360 35, 1420 40, 1450 65 L1450 160 C1390 175, 1290 165, 1200 150 C1140 140, 1070 120, 1020 70 Z"
              fill="url(#why-cloud-g1)"
            />
            <path
              d="M-50 40 C0 15, 60 10, 110 30 C160 10, 230 15, 280 40 C330 25, 400 35, 430 70 L430 150 C340 170, 220 160, 110 140 L-50 120 Z"
              fill="url(#why-cloud-g1)"
            />
          </g>

          <g filter="url(#why-cloud-blur)" opacity="0.55">
            <ellipse cx="680" cy="120" rx="300" ry="50" fill="#FFFFFF" />
            <ellipse cx="850" cy="100" rx="220" ry="40" fill="#FFFFFF" />
          </g>
        </svg>

        {/* ── Left Side Animated Banana Leaves & Tropical Foliage ── */}
        <div
          className="absolute -left-6 sm:-left-4 bottom-2 sm:bottom-6 z-0 pointer-events-none transition-transform duration-700 hover:scale-105"
          style={{
            transformOrigin: 'bottom left',
          }}
        >
          <svg
            className="w-40 sm:w-56 md:w-68 h-auto drop-shadow-sm animate-leaf-breeze"
            viewBox="0 0 240 320"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{
              transformOrigin: 'bottom left',
            }}
          >
            <defs>
              {/* Soft tropical teal/mint gradients */}
              <linearGradient id="banana-leaf-grad-1" x1="0" y1="1" x2="1" y2="0">
                <stop offset="0%" stopColor="#8ADED0" stopOpacity="0.55" />
                <stop offset="50%" stopColor="#AEE9F2" stopOpacity="0.45" />
                <stop offset="100%" stopColor="#C8F1F7" stopOpacity="0.25" />
              </linearGradient>

              <linearGradient id="banana-leaf-grad-2" x1="0" y1="1" x2="0.8" y2="0.2">
                <stop offset="0%" stopColor="#7CD4C5" stopOpacity="0.6" />
                <stop offset="60%" stopColor="#9CE3ED" stopOpacity="0.45" />
                <stop offset="100%" stopColor="#C4EFF6" stopOpacity="0.2" />
              </linearGradient>

              <linearGradient id="banana-stem-grad" x1="0" y1="1" x2="0.7" y2="0">
                <stop offset="0%" stopColor="#4FBDA8" stopOpacity="0.6" />
                <stop offset="100%" stopColor="#7CD4C5" stopOpacity="0.3" />
              </linearGradient>
            </defs>

            {/* Back secondary banana leaf */}
            <g opacity="0.75" className="animate-leaf-sway-slow" style={{ transformOrigin: 'bottom left' }}>
              <path
                d="M10 290 C25 240, 50 170, 95 120 C130 80, 175 60, 205 50 C185 85, 170 125, 140 165 C105 210, 65 255, 10 290 Z"
                fill="url(#banana-leaf-grad-1)"
              />
              {/* Vein lines */}
              <path
                d="M30 255 C55 225, 100 175, 150 135"
                stroke="rgba(255,255,255,0.4)"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <path
                d="M50 230 C80 195, 130 150, 185 110"
                stroke="rgba(255,255,255,0.4)"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </g>

            {/* Main Foreground Banana Leaf with organic fronds & notches */}
            <g className="animate-leaf-sway-main" style={{ transformOrigin: 'bottom left' }}>
              {/* Broad Musa / Banana Leaf Silhouette */}
              <path
                d="M0 320 C15 260, 45 190, 80 130 C105 85, 140 45, 175 20 C160 55, 150 85, 130 115 C132 118, 125 125, 122 132 C105 165, 80 205, 55 245 C35 275, 15 300, 0 320 Z"
                fill="url(#banana-leaf-grad-2)"
              />
              {/* Left blade section */}
              <path
                d="M0 320 C20 270, 50 215, 80 160 C90 142, 95 125, 110 100 C80 130, 55 170, 35 215 C18 250, 5 285, 0 320 Z"
                fill="url(#banana-leaf-grad-1)"
                opacity="0.8"
              />
              {/* Main curved central midrib stem */}
              <path
                d="M0 320 C25 250, 65 170, 115 105 C140 70, 165 40, 175 20"
                stroke="url(#banana-stem-grad)"
                strokeWidth="3.2"
                strokeLinecap="round"
              />
              {/* Secondary delicate lateral veins */}
              <path
                d="M40 230 C65 210, 95 195, 120 185"
                stroke="rgba(255,255,255,0.5)"
                strokeWidth="1.8"
                strokeLinecap="round"
              />
              <path
                d="M60 195 C88 172, 122 155, 145 145"
                stroke="rgba(255,255,255,0.5)"
                strokeWidth="1.8"
                strokeLinecap="round"
              />
              <path
                d="M82 158 C108 135, 138 120, 160 108"
                stroke="rgba(255,255,255,0.5)"
                strokeWidth="1.6"
                strokeLinecap="round"
              />
              <path
                d="M105 122 C125 102, 150 90, 170 80"
                stroke="rgba(255,255,255,0.5)"
                strokeWidth="1.4"
                strokeLinecap="round"
              />
            </g>

            {/* Lower small tropical frond sprout */}
            <path
              d="M0 310 C15 285, 35 260, 60 240 C50 260, 35 285, 0 310 Z"
              fill="url(#banana-leaf-grad-1)"
              opacity="0.6"
            />
          </svg>
        </div>
      </div>

      <div className="container-hs relative z-10">
        {/* Section Header (matching reference image) */}
        <div className="mb-12 sm:mb-16">
          <span className="text-xs sm:text-sm font-bold uppercase tracking-[0.25em] text-[#00A896] block mb-2 sm:mb-3">
            WHY HOLIDAY STAR?
          </span>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl md:text-[2.6rem] text-[#0A2540] tracking-tight leading-[1.15]">
            Your trusted travel partner
          </h2>
        </div>

        {/* 5-Column Feature Row with Circular Badges & Thin Vertical Dividers */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 sm:gap-6 lg:gap-0 lg:divide-x lg:divide-sky-200/50">
          {features.map((item, i) => (
            <AnimatedSection key={item.id} delay={i * 0.08}>
              <div className="group text-center px-3 sm:px-4 lg:px-5 flex flex-col items-center h-full transition-all duration-300 hover:-translate-y-1">
                {/* Circular Badge with Icon */}
                <div
                  className="w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mb-4 sm:mb-5 transition-transform duration-300 group-hover:scale-110 shadow-sm"
                  style={{
                    backgroundColor: item.badgeBg,
                  }}
                >
                  <item.icon
                    className="w-7 h-7 sm:w-8 sm:h-8 transition-transform duration-300 group-hover:rotate-6"
                    style={{ color: item.iconColor }}
                    strokeWidth={2}
                  />
                </div>

                {/* Feature Title */}
                <h3 className="font-heading font-bold text-[1.02rem] sm:text-[1.08rem] text-[#0A2540] tracking-tight leading-snug mb-2 min-h-[44px] flex items-center justify-center">
                  {item.title}
                </h3>

                {/* Feature Description */}
                <p className="text-[#4A5568] text-xs sm:text-[0.82rem] leading-relaxed font-normal max-w-[220px] mx-auto">
                  {item.description}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}

