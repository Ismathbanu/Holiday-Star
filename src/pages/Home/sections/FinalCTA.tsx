import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import AnimatedSection from '../../../components/common/AnimatedSection';
import { siteConfig } from '../../../data/siteConfig';

export default function FinalCTA() {
  return (
    <section
      className="relative w-full overflow-hidden bg-[#0A2540]"
      aria-label="Plan your holiday"
    >
      <div className="relative w-full min-h-[340px] sm:min-h-[380px] md:min-h-[420px] lg:min-h-[460px] flex items-center">
        {/* Panoramic Tropical Beach & Island Artwork */}
        <img
          src="/images/home-cta.jpg"
          alt="Luxury overwater villas in the Maldives at golden hour sunset with turquoise ocean and palm trees"
          className="absolute inset-0 w-full h-full object-cover object-[center_right] sm:object-center select-none pointer-events-none"
        />

        {/* Subtle, Translucent Gradient on Left for Crisp Text Legibility */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'linear-gradient(90deg, rgba(5, 45, 80, 0.75) 0%, rgba(3, 70, 120, 0.50) 30%, rgba(2, 100, 160, 0.20) 55%, transparent 75%)',
          }}
        />

        {/* Content Container on Left Side (matching reference image) */}
        <div className="container-hs relative z-10 py-12 sm:py-16 md:py-20">
          <AnimatedSection>
            <div className="max-w-lg lg:max-w-xl text-left">
              {/* Main Heading */}
              <h2 className="font-heading font-extrabold text-2xl sm:text-3xl md:text-4xl lg:text-[2.6rem] text-white tracking-tight leading-[1.18] drop-shadow-md mb-3 sm:mb-4">
                Thinking about your next holiday?
              </h2>

              {/* Descriptive Body Text */}
              <p className="text-white text-xs sm:text-sm md:text-[0.95rem] leading-relaxed font-normal max-w-lg drop-shadow-sm mb-6 sm:mb-8">
                Tell us where you want to go, when you want to travel and who you're travelling with. We'll help turn the idea into a practical holiday plan.
              </p>

              {/* Dual CTA Buttons (matching reference image) */}
              <div className="flex flex-wrap items-center gap-3.5 sm:gap-4">
                {/* 1. Plan My Holiday Button (Gradient from Blue to Purple) */}
                <Link
                  to="/plan-holiday"
                  className="inline-flex items-center gap-2 px-6 sm:px-7 py-3 sm:py-3.5 rounded-full text-white font-semibold text-xs sm:text-sm shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-300"
                  style={{
                    background:
                      'linear-gradient(90deg, #0066CC 0%, #00B4D8 100%)',
                    boxShadow: '0 4px 15px rgba(0, 180, 216, 0.35)',
                  }}
                >
                  Plan My Holiday
                  <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                </Link>

                {/* 2. Chat on WhatsApp Button (Pure White Pill with Green WhatsApp Icon) */}
                <a
                  href={`https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent(
                    siteConfig.contact.whatsappMessage
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 px-6 sm:px-7 py-3 sm:py-3.5 rounded-full bg-white text-[#00A896] hover:text-[#008080] font-semibold text-xs sm:text-sm shadow-md hover:shadow-lg hover:scale-105 active:scale-95 transition-all duration-300"
                >
                  {/* WhatsApp SVG Icon */}
                  <svg
                    className="w-4 h-4 sm:w-4.5 sm:h-4.5 fill-[#25D366]"
                    viewBox="0 0 24 24"
                  >
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                  </svg>
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}

