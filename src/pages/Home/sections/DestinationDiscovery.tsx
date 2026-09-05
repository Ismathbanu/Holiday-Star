import { Link } from 'react-router-dom';
import { ArrowRight, Plus } from 'lucide-react';
import AnimatedSection from '../../../components/common/AnimatedSection';
import { destinations } from '../../../data/destinations';

export default function DestinationDiscovery() {
  return (
    <section className="py-20 bg-hs-cream border-b border-gray-100" aria-label="Destinations">
      <div className="container-hs">
        {/* Header Strip */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <span className="text-xs font-semibold text-hs-blue-600 uppercase tracking-widest block mb-2">
              DESTINATIONS
            </span>
            <h2 className="font-heading font-bold text-3xl sm:text-4xl text-hs-navy">
              Where will you go next?
            </h2>
            <p className="text-hs-text-secondary text-sm sm:text-base mt-2 max-w-2xl font-light">
              From quick international escapes to family holidays, romantic getaways and group adventures, discover destinations selected for unforgettable experiences.
            </p>
          </div>
          <Link
            to="/destinations"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-hs-blue-600 hover:text-hs-navy transition-colors shrink-0"
          >
            See all destinations
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* 4-Column Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {destinations.map((dest, i) => (
            <AnimatedSection key={dest.id} delay={i * 0.05}>
              <Link
                to={`/destinations/${dest.slug}`}
                className="group relative block h-[320px] sm:h-[350px] rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 border border-gray-100/80"
              >
                {/* Image */}
                <img
                  src={dest.heroImage}
                  alt={dest.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=800&q=80';
                  }}
                />

                {/* Dark Gradient Overlay for Contrast */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent" />

                {/* Content Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-5 text-white flex flex-col justify-between h-full">
                  <div />
                  <div>
                    <h3 className="font-heading font-bold text-xl sm:text-2xl text-white mb-1.5 leading-tight">
                      {dest.name}
                    </h3>
                    <p className="text-white/80 text-xs sm:text-sm font-light leading-snug line-clamp-2 mb-3">
                      {dest.shortDescription || dest.emotionalStatement}
                    </p>
                    
                    {/* Plus / Expand Badge Button */}
                    <div className="flex items-center justify-between pt-1">
                      <span className="text-[0.7rem] font-semibold text-blue-200 uppercase tracking-wider">
                        Explore {dest.name} &rarr;
                      </span>
                      <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md group-hover:bg-[#0066CC] flex items-center justify-center text-white transition-colors duration-300 shadow-sm">
                        <Plus className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
