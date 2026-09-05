import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import AnimatedSection from '../../../components/common/AnimatedSection';

const travelGuidesData = [
  {
    id: 'guide-1',
    category: 'Malaysia Guide',
    title: 'Malaysia from Chennai: Complete Travel Guide',
    excerpt: 'Everything you need to know before you travel.',
    image: 'https://images.unsplash.com/photo-1596422846543-75c6fc197f07?w=600&q=80',
    tagColor: 'bg-green-100 text-green-800',
  },
  {
    id: 'guide-2',
    category: 'Thailand Guide',
    title: 'Best Places to Visit in Thailand',
    excerpt: 'Beaches, cities and hidden gems worth exploring.',
    image: 'https://images.unsplash.com/photo-1528181304800-259b08848526?w=600&q=80',
    tagColor: 'bg-blue-100 text-blue-800',
  },
  {
    id: 'guide-3',
    category: 'Travel Tips',
    title: 'Visa-Free Destinations for Indian Travellers',
    excerpt: 'Explore more with less paperwork.',
    image: 'https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?w=600&q=80',
    tagColor: 'bg-amber-100 text-amber-800',
  },
  {
    id: 'guide-4',
    category: 'Travel Planning Guide',
    title: 'How to Plan an International Trip from Chennai',
    excerpt: 'A simple step-by-step guide.',
    image: 'https://images.unsplash.com/photo-1586523969990-168e44f39abb?w=600&q=80',
    tagColor: 'bg-emerald-100 text-emerald-800',
  },
];

export default function TravelGuidePreview() {
  return (
    <section className="py-20 bg-hs-cream border-b border-gray-100" aria-label="Travel Guide">
      <div className="container-hs">
        {/* Header Strip */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-10 gap-4">
          <div>
            <span className="text-xs font-semibold text-hs-blue-600 uppercase tracking-widest block mb-2">
              TRAVEL GUIDES
            </span>
            <h2 className="font-heading font-bold text-3xl sm:text-4xl text-hs-navy">
              Before you go, know more.
            </h2>
          </div>
          <Link
            to="/travel-guide"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-hs-blue-600 hover:text-hs-navy transition-colors shrink-0"
          >
            See all guides
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* 4 Cards Grid - Perfect Alignment */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {travelGuidesData.map((guide, i) => (
            <AnimatedSection key={guide.id} delay={i * 0.08}>
              <Link
                to="/travel-guide"
                className="group bg-white rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 border border-gray-100 flex flex-col h-full"
              >
                <div className="h-48 overflow-hidden relative">
                  <img
                    src={guide.image}
                    alt={guide.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3">
                    <span className={`px-2.5 py-1 rounded-md text-[0.7rem] font-bold uppercase tracking-wider ${guide.tagColor}`}>
                      {guide.category}
                    </span>
                  </div>
                </div>

                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-heading font-bold text-base text-hs-navy mb-2 group-hover:text-hs-blue-600 transition-colors line-clamp-2 leading-snug">
                      {guide.title}
                    </h3>
                    <p className="text-xs text-hs-text-secondary leading-relaxed font-light mb-4">
                      {guide.excerpt}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-gray-100 flex items-center gap-1 text-xs font-semibold text-hs-blue-600 group-hover:text-hs-navy transition-colors">
                    <span>Read guide</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
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
