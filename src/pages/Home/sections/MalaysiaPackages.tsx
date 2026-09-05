import { Link } from 'react-router-dom';
import { ArrowRight, Plus } from 'lucide-react';
import AnimatedSection from '../../../components/common/AnimatedSection';
import { getPackagesByDestination } from '../../../data/packages';

export default function MalaysiaPackages() {
  const malaysiaPackages = getPackagesByDestination('malaysia').slice(0, 4);

  return (
    <section className="py-20 bg-hs-cream border-b border-gray-100" aria-label="Malaysia Packages">
      <div className="container-hs">
        {/* Header Strip */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-10 gap-4">
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-hs-navy">
            Popular Malaysia holidays
          </h2>
          <Link
            to="/destinations/malaysia"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-hs-blue-600 hover:text-hs-navy transition-colors shrink-0"
          >
            View all Malaysia packages
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* 4 Cards Grid - Perfect Equal Widths */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {malaysiaPackages.map((pkg, i) => (
            <AnimatedSection key={pkg.id} delay={i * 0.08}>
              <Link
                to="/packages"
                className="group bg-white rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 border border-gray-100 flex flex-col h-full"
              >
                {/* Image */}
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={pkg.image}
                    alt={pkg.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                </div>

                {/* Content */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-heading font-bold text-lg text-hs-navy mb-1.5 leading-snug">
                      {pkg.name}
                    </h3>
                    <p className="text-xs font-semibold text-hs-blue-600 mb-2">
                      {pkg.duration}
                    </p>
                    <p className="text-xs text-hs-text-secondary leading-relaxed font-light mb-4">
                      {pkg.positioning}
                    </p>
                  </div>

                  <div className="flex justify-end pt-3 border-t border-gray-100">
                    <div className="w-8 h-8 rounded-full bg-hs-blue-50 group-hover:bg-hs-blue-600 flex items-center justify-center text-hs-blue-600 group-hover:text-white transition-colors duration-300">
                      <Plus className="w-4 h-4" />
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
