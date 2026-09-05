import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Plane } from 'lucide-react';
import { siteConfig } from '../../../data/siteConfig';

export default function HeroSection() {
  return (
    <section
      className="relative min-h-[85vh] sm:min-h-[88vh] lg:min-h-[90vh] w-full flex items-center pt-24 pb-16 overflow-hidden bg-hs-cream"
      aria-label="Hero"
    >
      {/* Background Image - Full Viewport Width */}
      <motion.div
        className="absolute inset-0 z-0 w-full h-full"
        initial={{ scale: 1.05 }}
        animate={{ scale: 1 }}
        transition={{ duration: 10, ease: 'easeOut' }}
      >
        <img
          src="/images/hero_bg.png"
          alt="Woman enjoying tropical bay view in Thailand"
          className="w-full h-full object-cover object-center"
        />
        {/* Soft daylight gradient overlay for crystal clear text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/85 to-transparent sm:w-4/5 md:w-3/4 lg:w-3/5" />
      </motion.div>

      {/* Decorative Handwritten Script Annotations */}
      <div className="absolute top-28 left-6 md:left-16 lg:left-24 z-20 hidden sm:flex items-center gap-2 text-hs-blue-600 font-script text-2xl md:text-3xl rotate-[-3deg] drop-shadow-xs">
        <span>More than destinations. A brighter you.</span>
        <Plane className="w-5 h-5 rotate-45 text-hs-sky-blue shrink-0" />
      </div>

      <div className="absolute top-28 right-8 md:right-20 lg:right-32 z-20 hidden md:block text-white font-script text-3xl md:text-4xl rotate-[4deg] drop-shadow-md">
        Good People.<br />Brighter Places.
      </div>

      {/* Content Container - Full Grid Alignment */}
      <div className="relative z-10 container-hs w-full">
        <div className="max-w-xl md:max-w-2xl">
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-hs-navy font-heading font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.1] mb-6 tracking-tight"
          >
            Your next holiday<br />
            <span className="text-hs-blue-600">starts here.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="text-hs-text-secondary text-base sm:text-lg md:text-xl leading-relaxed mb-8 max-w-xl font-normal"
          >
            Discover international holidays across Malaysia, Thailand, Vietnam, Sri Lanka, Dubai, Singapore and Indonesia, thoughtfully planned by a Chennai-based travel team.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="flex flex-wrap items-center gap-4"
          >
            <Link
              to="/destinations"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-hs-blue-600 hover:bg-hs-navy text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 text-sm sm:text-base"
            >
              Explore Holidays
              <ArrowRight className="w-4 h-4" />
            </Link>

            <a
              href={`https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent(siteConfig.contact.whatsappMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 px-7 py-4 bg-white text-hs-navy font-semibold rounded-full border border-gray-200 hover:border-hs-green hover:bg-hs-green-accent hover:text-hs-green transition-all duration-300 shadow-md text-sm sm:text-base"
            >
              <svg className="w-5 h-5 fill-current text-hs-green" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
              </svg>
              WhatsApp Us
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
