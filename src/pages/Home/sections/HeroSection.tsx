import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { siteConfig } from '../../../data/siteConfig';


const trustBadges = [
  'Curated itineraries',
  'Clear planning',
  'End-to-end travel support',
];

export default function HeroSection() {
  return (
    <section
      className="relative w-full overflow-hidden bg-[#031511]"
      aria-label="Hero"
    >
      {/* ── Background Banner Image ── */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/homy-hero.jpg"
          alt="Holiday Star travel panorama — Malaysian rainforest river boat, illuminated Petronas Twin Towers, KL Tower, and iconic Langkawi Eagle at golden sunset"
          className="w-full h-full object-cover object-center pointer-events-none select-none"
          loading="eager"
          fetchPriority="high"
        />
        {/* Cinematic gradient overlay: ensures crisp readability for text on the left while keeping the temple, sunlight & boat illuminated */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/55 lg:via-black/40 to-transparent pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20 pointer-events-none" />
        {/* Soft mobile-only backdrop to maintain effortless readability on narrow screens */}
        <div className="lg:hidden absolute inset-0 bg-black/40 backdrop-blur-[1px] pointer-events-none" />
      </div>

      {/* ── Hero Content Grid ── */}
      <div className="relative z-10 container-hs w-full min-h-[640px] sm:min-h-[680px] lg:min-h-[720px] xl:min-h-[760px] 2xl:min-h-[820px] flex items-center pt-28 pb-14 sm:pt-32 sm:pb-16 lg:pt-36 lg:pb-20">
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column: Heading, Copy, Buttons, Trust Badges */}
          <div className="lg:col-span-6 xl:col-span-5 flex flex-col justify-center">
            {/* Eyebrow subtitle */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-emerald-300 bg-emerald-950/70 border border-emerald-500/30 backdrop-blur-md mb-3 sm:mb-4 shadow-sm w-fit"
            >
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
              Explore the World
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] xl:text-[3.75rem] leading-[1.08] tracking-tight text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.7)] mb-4 sm:mb-5"
            >
              Your next holiday{' '}
              <br className="hidden sm:block" />
              <span
                className="inline-block text-transparent bg-clip-text drop-shadow-[0_2px_16px_rgba(251,191,36,0.35)]"
                style={{
                  backgroundImage: 'linear-gradient(90deg, #FCD34D 0%, #F59E0B 50%, #FB7185 100%)',
                }}
              >
                starts here.
              </span>
            </motion.h1>

            {/* Subtitle / Paragraph */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="text-emerald-50/90 text-sm sm:text-base md:text-[1.02rem] leading-relaxed max-w-lg mb-8 drop-shadow-[0_1px_4px_rgba(0,0,0,0.7)]"
            >
              Discover international holidays across Malaysia, Thailand,
              Vietnam, Sri Lanka, Dubai, Singapore and Indonesia, thoughtfully
              planned by a Chennai-based travel team.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-wrap items-center gap-4 mb-8"
            >
              {/* Primary "Explore Holidays →" Button */}
              <Link
                to="/destinations"
                className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 sm:px-8 sm:py-4 rounded-full font-semibold text-white text-sm sm:text-base shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
                style={{
                  background: 'linear-gradient(90deg, #1E58F4 0%, #4F46E5 50%, #8B5CF6 100%)',
                }}
              >
                Explore Holidays
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
              </Link>

              {/* Secondary "WhatsApp Us" Button */}
              <a
                href={`https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent(siteConfig.contact.whatsappMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 sm:px-7 sm:py-4 rounded-full font-semibold text-[#0D7A68] hover:text-[#065F46] bg-white border-2 border-emerald-400 hover:border-emerald-300 hover:bg-emerald-50 text-sm sm:text-base shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
              >
                <svg className="w-5 h-5 fill-current text-[#25D366]" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                </svg>
                WhatsApp Us
              </a>
            </motion.div>

            {/* Trust Badges */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.65 }}
              className="flex flex-wrap items-center gap-x-5 sm:gap-x-6 gap-y-2"
            >
              {trustBadges.map((badge) => (
                <span
                  key={badge}
                  className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium text-emerald-100/90 drop-shadow-sm"
                >
                  {/* Warm amber star badge icon matching the boat lanterns and brand */}
                  <svg
                    className="w-3.5 h-3.5 text-amber-400 shrink-0"
                    viewBox="0 0 16 16"
                    fill="none"
                    stroke="currentColor"
                  >
                    <path
                      d="M8 1L10 6L15 8L10 10L8 15L6 10L1 8L6 6L8 1Z"
                      fill="#FBBF24"
                      stroke="#FBBF24"
                      strokeWidth="1.2"
                      strokeLinejoin="round"
                    />
                  </svg>
                  {badge}
                </span>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
