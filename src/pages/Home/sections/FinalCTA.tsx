import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import AnimatedSection from '../../../components/common/AnimatedSection';
import { siteConfig } from '../../../data/siteConfig';

export default function FinalCTA() {
  return (
    <section className="relative overflow-hidden py-24 md:py-36 w-full" aria-label="Plan your holiday">
      {/* Background Image - Full Viewport Width */}
      <div className="absolute inset-0 w-full h-full">
        <img
          src="/images/hero_bg.png"
          alt="Tropical ocean and island landscape"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-hs-navy/95 via-hs-blue-600/90 to-hs-navy/95" />
      </div>

      {/* Cursive text overlay right */}
      <div className="absolute top-12 right-8 md:right-24 lg:right-36 font-script text-3xl md:text-5xl text-white rotate-[4deg] drop-shadow-md hidden sm:block">
        Same people.<br />New horizons.
      </div>

      {/* Content */}
      <div className="relative z-10 container-hs text-center text-white">
        <AnimatedSection className="max-w-3xl mx-auto">
          <h2 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-6 leading-tight">
            Thinking about your<br />next holiday?
          </h2>
          <p className="text-white/90 text-base sm:text-lg md:text-xl leading-relaxed mb-10 max-w-2xl mx-auto font-light">
            Tell us where you want to go, when you want to travel and who you're travelling with. We'll help turn the idea into a practical holiday plan.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/plan-holiday"
              className="inline-flex items-center gap-2 px-9 py-4 bg-hs-blue-600 text-white font-semibold rounded-full hover:bg-white hover:text-hs-navy transition-all duration-300 shadow-xl text-sm sm:text-base"
            >
              Plan My Holiday
              <ArrowRight className="w-4 h-4" />
            </Link>

            <a
              href={`https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent(siteConfig.contact.whatsappMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-8 py-4 bg-white text-hs-navy font-semibold rounded-full border border-white hover:bg-hs-green-accent hover:text-hs-green transition-all duration-300 shadow-md text-sm sm:text-base"
            >
              <svg className="w-5 h-5 fill-current text-hs-green" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
              </svg>
              Chat on WhatsApp
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
