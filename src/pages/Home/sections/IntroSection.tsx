import { Plane, ShieldCheck, Heart } from 'lucide-react';
import AnimatedSection from '../../../components/common/AnimatedSection';

const featureList = [
  {
    icon: Plane,
    title: 'Expert Guidance',
    description: 'Trusted travel experts',
    iconColor: 'text-[#00A896]',
    badgeBg: 'bg-[#E0F7F6]',
  },
  {
    icon: ShieldCheck,
    title: 'Best Value',
    description: 'Great holidays, fair prices',
    iconColor: 'text-[#0284C7]',
    badgeBg: 'bg-[#E0F2FE]',
  },
  {
    icon: Heart,
    title: 'Your Journey',
    description: 'Our Priority',
    iconColor: 'text-[#1D4ED8]',
    badgeBg: 'bg-[#EFF6FF]',
  },
];

export default function IntroSection() {
  return (
    <section
      className="relative py-14 sm:py-16 md:py-20 lg:py-24 bg-white overflow-hidden"
      aria-label="About Holiday Star"
    >
      <div className="container-hs relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-12 items-center">
          {/* ── Left Column: Travel Essentials Image ── */}
          <div className="lg:col-span-4 xl:col-span-4">
            <AnimatedSection direction="left">
              <div className="relative rounded-3xl md:rounded-[28px] overflow-hidden shadow-lg border border-gray-100/90 group">
                <img
                  src="/images/home-aboutus.jpg"
                  alt="Travel essentials — passport, world map, model airplane and sun hat"
                  className="w-full h-auto aspect-[1.28/1] object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
            </AnimatedSection>
          </div>

          {/* ── Center Column: About Holiday Star Text ── */}
          <div className="lg:col-span-5 xl:col-span-5 flex flex-col justify-center">
            <AnimatedSection direction="up" delay={0.1}>
              {/* Eyebrow */}
              <p className="text-xs sm:text-sm font-bold uppercase tracking-[0.25em] text-[#00A896] mb-3">
                About Holiday Star
              </p>

              {/* Main Heading */}
              <h2 className="font-heading font-extrabold text-3xl sm:text-4xl md:text-[2.6rem] lg:text-[2.75rem] leading-[1.14] tracking-tight text-[#0A2540] mb-5">
                Travel farther. Plan<br />
                better. Enjoy more.
              </h2>

              {/* Paragraph 1 */}
              <p className="text-sm sm:text-base leading-relaxed text-[#4A5568] mb-4">
                Planning an international holiday should be exciting, not exhausting.
                From choosing the right destination to arranging your stay, transfers
                and experiences, Holiday Star helps bring the important details
                together so you can focus on enjoying the journey.
              </p>

              {/* Paragraph 2 */}
              <p className="text-sm sm:text-base leading-relaxed text-[#4A5568] mb-5">
                Based in Chennai and serving travellers across Tamil Nadu,
                we specialise in curated international holidays and group travel.
              </p>

              {/* Accent dots */}
              <div className="flex items-center gap-1.5 pt-1">
                <span className="w-2.5 h-2.5 rounded-full bg-[#00A896]" />
                <span className="w-2 h-2 rounded-full bg-[#00A896]/60" />
              </div>
            </AnimatedSection>
          </div>

          {/* ── Right Column: Highlights Card ── */}
          <div className="lg:col-span-3 xl:col-span-3 flex justify-center lg:justify-end">
            <AnimatedSection direction="right" delay={0.2} className="w-full max-w-sm lg:max-w-none">
              <div className="bg-[#F0F9FB] rounded-3xl p-6 sm:p-7 md:p-8 flex flex-col justify-center gap-6 border border-[#E2F2F6] shadow-xs">
                {featureList.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <div key={index} className="flex items-center gap-4">
                      {/* Round icon badge */}
                      <div
                        className={`w-12 h-12 rounded-full ${item.badgeBg} flex items-center justify-center shrink-0 shadow-xs`}
                      >
                        <Icon className={`w-5 h-5 ${item.iconColor}`} />
                      </div>

                      {/* Text details */}
                      <div>
                        <h3 className="font-heading font-bold text-sm sm:text-base text-[#0A2540] leading-snug">
                          {item.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-[#64748B] mt-0.5">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>

      {/* ── Decorative Looped Flight Trail & Airplane at bottom-right ── */}
      <div className="absolute bottom-2 right-4 sm:bottom-4 sm:right-12 pointer-events-none opacity-80 hidden sm:block">
        <svg
          width="160"
          height="56"
          viewBox="0 0 160 56"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Dashed flight loop path */}
          <path
            d="M 8 40 C 35 52, 60 56, 85 45 C 96 40, 102 32, 98 24 C 94 17, 85 18, 82 27 C 79 38, 92 45, 108 42 C 122 39, 136 30, 148 16"
            stroke="#22D3EE"
            strokeWidth="1.8"
            strokeDasharray="4 4"
            strokeLinecap="round"
          />
          {/* Small tilted airplane at trail terminus */}
          <g transform="translate(142, 4) rotate(42)">
            <path
              d="M10 2 L12 8 L18 9 L13 13 L14 19 L10 15 L6 19 L7 13 L2 9 L8 8 Z"
              fill="#06B6D4"
            />
          </g>
        </svg>
      </div>
    </section>
  );
}
