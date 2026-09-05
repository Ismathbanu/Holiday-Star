import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import AnimatedSection from '../../../components/common/AnimatedSection';

export default function MalaysiaFeature() {
  return (
    <section className="py-20 bg-white overflow-hidden" aria-label="Malaysia Feature">
      <div className="container-hs">
        <AnimatedSection>
          <div className="grid grid-cols-1 lg:grid-cols-2 rounded-3xl overflow-hidden shadow-2xl border border-gray-100">
            {/* Left Image Side */}
            <div className="relative min-h-[380px] lg:min-h-[480px]">
              <img
                src="https://images.unsplash.com/photo-1596422846543-75c6fc197f07?w=1200&q=80"
                alt="Petronas Twin Towers Kuala Lumpur Malaysia"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/30" />

              {/* Cursive overlay */}
              <div className="absolute top-8 left-8 font-script text-3xl text-white rotate-[-5deg] drop-shadow-lg">
                A little Larger than<br />a whole new you
              </div>
            </div>

            {/* Right Card Side */}
            <div className="bg-hs-blue-50/80 p-8 sm:p-12 lg:p-14 flex flex-col justify-between relative">
              {/* Circular Partner Badge */}
              <div className="absolute top-6 right-6 w-20 h-20 rounded-full border-2 border-dashed border-hs-blue-600/40 p-1 flex items-center justify-center text-center rotate-12 bg-white/60 backdrop-blur-xs shadow-sm">
                <span className="text-[0.65rem] font-bold uppercase tracking-tight text-hs-blue-600 leading-tight">
                  TRULY ASIA<br />MALAYSIA<br />PARTNER 2026
                </span>
              </div>

              <div>
                <span className="text-xs font-semibold text-hs-blue-600 uppercase tracking-widest block mb-3">
                  FEATURED DESTINATION
                </span>
                <h2 className="font-heading font-bold text-3xl sm:text-4xl text-hs-navy mb-4 leading-tight">
                  Malaysia is closer<br />than you think.
                </h2>
                <p className="font-semibold text-hs-navy text-base sm:text-lg mb-4">
                  Visa-free entry. Around four hours from Chennai. Incredible experiences.
                </p>
                <p className="text-hs-text-secondary text-sm sm:text-base leading-relaxed mb-8 max-w-md">
                  From Kuala Lumpur's skyline to Genting's cool mountain air, Melaka and Penang's heritage to Langkawi's beaches, Malaysia lets you experience very different sides of one unforgettable destination.
                </p>
              </div>

              <div>
                <Link
                  to="/destinations/malaysia"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-hs-blue-600 hover:bg-hs-navy text-white font-semibold rounded-full shadow-md hover:shadow-lg transition-all duration-300 text-sm sm:text-base"
                >
                  Explore Malaysia Holidays
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
