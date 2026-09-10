import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import AnimatedSection from '../../../components/common/AnimatedSection';

export default function MalaysiaFeature() {
  return (
    <section
      className="relative w-full overflow-hidden bg-white"
      aria-label="Featured Destination - Malaysia"
    >
      <div className="relative w-full min-h-[460px] sm:min-h-[500px] md:min-h-[540px] lg:min-h-[580px] xl:min-h-[620px] flex items-center">
        {/* Full-width Panoramic Artwork Image */}
        <img
          src="/images/home-feature.jpg"
          alt="Malaysia - Kuala Lumpur, Genting Highlands, Langkawi"
          className="absolute inset-0 w-full h-full object-cover object-[center_right] sm:object-center select-none pointer-events-none"
        />

        {/* Subtle, Light Sky Gradient on Left for Crisp Text Legibility while Preserving Vibrant Blue Sky */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'linear-gradient(90deg, rgba(2, 105, 168, 0.42) 0%, rgba(2, 132, 199, 0.22) 32%, rgba(2, 132, 199, 0.08) 55%, transparent 72%)',
          }}
        />

        {/* Content Container positioned on Left Side (matching reference image) */}
        <div className="container-hs relative z-10 py-14 sm:py-18 md:py-22 lg:py-24">
          <AnimatedSection>
            <div className="max-w-md sm:max-w-lg lg:max-w-xl">
              {/* Eyebrow */}
              <span className="text-xs sm:text-[13px] font-bold uppercase tracking-[0.25em] text-[#00E5FF] block mb-3 sm:mb-4 drop-shadow-sm">
                FEATURED DESTINATION
              </span>

              {/* Main Heading */}
              <h2 className="font-heading font-extrabold text-3xl sm:text-4xl md:text-[2.65rem] lg:text-[3.1rem] text-white tracking-tight leading-[1.14] drop-shadow-md mb-4 sm:mb-5">
                Malaysia is closer<br />than you think.
              </h2>

              {/* Descriptive Body Text */}
              <p className="text-white text-xs sm:text-sm md:text-[0.95rem] leading-relaxed font-normal max-w-lg drop-shadow-sm mb-7 sm:mb-9">
                Visa-free entry, around a four-hour flight from Chennai, and a destination filled with experiences. From Kuala Lumpur's skyline to Genting's cool mountain air, Melaka and Penang's heritage to Langkawi's beaches, Malaysia lets you build very different holidays from one destination.
              </p>

              {/* Single White Pill CTA Button matching reference image */}
              <div>
                <Link
                  to="/destinations/malaysia"
                  className="inline-flex items-center gap-2.5 px-6 sm:px-7 py-3 sm:py-3.5 rounded-full bg-white text-[#00A896] hover:text-[#087f71] font-semibold text-xs sm:text-sm shadow-md hover:shadow-lg hover:scale-105 active:scale-95 transition-all duration-300"
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



