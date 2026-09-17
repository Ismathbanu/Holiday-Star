import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import AnimatedSection from '../../../components/common/AnimatedSection';

export default function MalaysiaFeature() {
  return (
    <section
      className="relative w-full overflow-hidden bg-[#031525]"
      aria-label="Featured Destination - Malaysia"
    >
      <div className="relative w-full min-h-[480px] sm:min-h-[520px] md:min-h-[560px] lg:min-h-[580px] xl:min-h-[620px] flex items-center">
        {/* Full-width Panoramic Artwork Image */}
        <img
          src="/images/home-feature.jpg"
          alt="Malaysia - Kuala Lumpur, Genting Highlands, Langkawi"
          className="absolute inset-0 w-full h-full object-cover object-[68%_center] sm:object-center select-none pointer-events-none"
        />

        {/* ── Responsive Contrast Scrim Layers for Flawless Readability ── */}
        {/* 1. Mobile Full-Width Tint (Vertical gradient ensuring 100% legibility on small screens) */}
        <div
          className="absolute inset-0 md:hidden pointer-events-none"
          style={{
            background:
              'linear-gradient(180deg, rgba(3, 17, 36, 0.90) 0%, rgba(4, 25, 52, 0.93) 45%, rgba(3, 17, 36, 0.97) 100%)',
          }}
        />

        {/* 2. Tablet Extended Gradient (md to lg) */}
        <div
          className="absolute inset-0 hidden md:block lg:hidden pointer-events-none"
          style={{
            background:
              'linear-gradient(90deg, rgba(3, 17, 36, 0.96) 0%, rgba(4, 23, 48, 0.92) 46%, rgba(5, 31, 62, 0.78) 72%, rgba(6, 42, 82, 0.35) 90%, transparent 100%)',
          }}
        />

        {/* 3. Desktop Directional Gradient (lg+) - dark left for text, completely reveals right artwork */}
        <div
          className="absolute inset-0 hidden lg:block pointer-events-none"
          style={{
            background:
              'linear-gradient(90deg, rgba(3, 17, 36, 0.96) 0%, rgba(4, 23, 48, 0.90) 36%, rgba(5, 31, 62, 0.70) 54%, rgba(6, 42, 82, 0.25) 75%, transparent 92%)',
          }}
        />

        {/* 4. Ambient Cyan Glow for Rich Brand Atmosphere */}
        <div
          className="absolute inset-0 pointer-events-none opacity-30 mix-blend-screen"
          style={{
            background:
              'radial-gradient(circle at 18% 45%, rgba(6, 182, 212, 0.3) 0%, transparent 65%)',
          }}
        />

        {/* Content Container positioned on Left Side */}
        <div className="container-hs relative z-10 py-12 sm:py-16 md:py-20 lg:py-24">
          <AnimatedSection>
            <div className="max-w-md sm:max-w-lg lg:max-w-xl">
              {/* Eyebrow Pill Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/80 border border-cyan-400/40 backdrop-blur-md mb-3.5 sm:mb-4 shadow-sm w-fit">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                <span className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.22em] text-cyan-300">
                  FEATURED DESTINATION
                </span>
              </div>

              {/* Main Heading */}
              <h2 className="font-heading font-extrabold text-2xl sm:text-3xl md:text-4xl lg:text-[2.85rem] text-white tracking-tight leading-[1.16] drop-shadow-[0_2px_12px_rgba(0,0,0,0.75)] mb-3.5 sm:mb-4.5">
                Malaysia is closer<br className="hidden sm:inline" /> than you think.
              </h2>

              {/* Descriptive Body Text */}
              <p className="text-slate-100/95 sm:text-slate-100 text-xs sm:text-sm md:text-[0.95rem] leading-relaxed font-normal max-w-lg drop-shadow-[0_1px_4px_rgba(0,0,0,0.6)] mb-5 sm:mb-6">
                Visa-free entry, around a four-hour flight from Chennai, and a destination filled with experiences. From Kuala Lumpur's skyline to Genting's cool mountain air, Melaka and Penang's heritage to Langkawi's beaches, Malaysia lets you build very different holidays from one destination.
              </p>

              {/* Highlight Perks Pills */}
              <div className="flex flex-wrap items-center gap-2 sm:gap-2.5 mb-6 sm:mb-8">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] sm:text-xs font-medium text-sky-100 bg-white/10 backdrop-blur-md border border-white/15 shadow-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  Visa-Free Entry
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] sm:text-xs font-medium text-sky-100 bg-white/10 backdrop-blur-md border border-white/15 shadow-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                  ~4 Hours from Chennai
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] sm:text-xs font-medium text-sky-100 bg-white/10 backdrop-blur-md border border-white/15 shadow-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                  Diverse Experiences
                </span>
              </div>

              {/* CTA Button */}
              <div>
                <Link
                  to="/destinations/malaysia"
                  className="inline-flex items-center gap-2.5 px-6 sm:px-7 py-3 sm:py-3.5 rounded-full bg-white text-[#00897B] hover:text-[#00695C] hover:bg-cyan-50 font-bold text-xs sm:text-sm shadow-[0_4px_20px_rgba(0,0,0,0.3)] hover:shadow-[0_8px_25px_rgba(0,229,255,0.4)] hover:scale-105 active:scale-95 transition-all duration-300"
                >
                  Explore Malaysia Holidays
                  <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}



