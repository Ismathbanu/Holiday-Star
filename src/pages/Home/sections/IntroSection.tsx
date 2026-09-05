import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import AnimatedSection from '../../../components/common/AnimatedSection';

export default function IntroSection() {
  return (
    <section className="py-20 md:py-28 bg-white overflow-hidden" aria-label="Introduction">
      <div className="container-hs">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Text Column */}
          <AnimatedSection direction="left">
            <div>
              <span className="text-xs font-semibold text-hs-blue-600 uppercase tracking-widest block mb-3">
                TRAVEL FARTHER
              </span>
              <h2 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl text-hs-navy mb-6 leading-tight">
                Plan better.<br />Enjoy more.
              </h2>
              <p className="text-hs-text-secondary text-base md:text-lg leading-relaxed mb-8 max-w-lg">
                Planning an international holiday should be exciting, not exhausting. From choosing the right destination to arranging your stay, transfers and experiences, Holiday Star helps bring the important details together so you can focus on enjoying the journey.
              </p>
              <Link
                to="/plan-holiday"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-hs-blue-600 hover:bg-hs-navy text-white font-semibold rounded-full shadow-md hover:shadow-lg transition-all duration-300 text-sm md:text-base"
              >
                Plan Your Holiday
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </AnimatedSection>

          {/* Right Collage Column */}
          <AnimatedSection direction="right" delay={0.15}>
            <div className="relative pl-4 pr-6 pt-4 pb-6">
              {/* Cursive overlay top center */}
              <div className="absolute top-0 right-12 z-20 font-script text-3xl text-hs-blue-600 rotate-[-4deg] bg-white/80 backdrop-blur-xs px-3 py-1 rounded-lg border border-hs-blue-100 shadow-sm">
                Travel Creates Happier Stories
              </div>

              {/* Main Couple Image */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white max-w-md mx-auto">
                <img
                  src="/images/travel_couple.png"
                  alt="Happy couple traveling with backpacks"
                  className="w-full h-[380px] sm:h-[420px] object-cover"
                />
              </div>

              {/* Secondary Corner Image */}
              <div className="absolute -top-4 right-0 w-32 h-32 sm:w-40 sm:h-40 rounded-2xl overflow-hidden shadow-xl border-4 border-white hidden sm:block">
                <img
                  src="https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=400&q=80"
                  alt="Scenic island bay"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Cursive overlay bottom right */}
              <div className="absolute -bottom-2 right-4 sm:right-8 z-20 font-script text-3xl text-hs-green rotate-[3deg] bg-white/90 backdrop-blur-xs px-4 py-1.5 rounded-xl border border-hs-green-accent shadow-md">
                Collect Moments Not Things
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
