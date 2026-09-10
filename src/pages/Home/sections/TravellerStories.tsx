import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import AnimatedSection from '../../../components/common/AnimatedSection';
import { testimonials } from '../../../data/testimonials';

export default function TravellerStories() {
  // Page index for carousel
  const [startIndex, setStartIndex] = useState(0);
  const totalItems = testimonials.length;
  // 4 items visible at once on desktop, so max start index can cycle through
  const next = () => setStartIndex((prev) => (prev + 1) % totalItems);
  const prev = () => setStartIndex((prev) => (prev - 1 + totalItems) % totalItems);

  // Get current 4 items for desktop view (wrapping around)
  const visibleItems = [
    testimonials[startIndex % totalItems],
    testimonials[(startIndex + 1) % totalItems],
    testimonials[(startIndex + 2) % totalItems],
    testimonials[(startIndex + 3) % totalItems],
  ];

  return (
    <section
      className="relative py-16 sm:py-20 bg-white overflow-hidden"
      aria-label="Traveller Stories"
    >
      <div className="container-hs relative z-10">
        {/* Section Header matching reference image */}
        <div className="mb-10 sm:mb-12">
          <span className="text-xs sm:text-sm font-bold uppercase tracking-[0.25em] text-[#00A896] block mb-2 sm:mb-3">
            TRAVELLER STORIES
          </span>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl md:text-[2.6rem] text-[#0A2540] tracking-tight leading-[1.15]">
            Don't just take our word for it.
          </h2>
        </div>

        {/* Carousel Container with Side Navigation Arrows */}
        <div className="relative px-2 sm:px-4">
          {/* Left Arrow Button */}
          <button
            onClick={prev}
            className="absolute -left-3 sm:-left-5 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white border border-gray-200/80 shadow-md hover:shadow-lg flex items-center justify-center text-[#0A2540] hover:text-[#00A896] hover:scale-105 active:scale-95 transition-all duration-200"
            aria-label="Previous testimonials"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Right Arrow Button */}
          <button
            onClick={next}
            className="absolute -right-3 sm:-right-5 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white border border-gray-200/80 shadow-md hover:shadow-lg flex items-center justify-center text-[#0A2540] hover:text-[#00A896] hover:scale-105 active:scale-95 transition-all duration-200"
            aria-label="Next testimonials"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* 4 Cards Grid */}
          <AnimatedSection>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              <AnimatePresence mode="popLayout">
                {visibleItems.map((item, idx) => (
                  <motion.div
                    key={`${item.id}-${startIndex}-${idx}`}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.35, delay: idx * 0.05 }}
                    className="bg-white rounded-2xl p-6 shadow-[0_4px_22px_rgba(0,0,0,0.05)] border border-gray-100 flex flex-col justify-between h-full min-h-[260px] sm:min-h-[275px] hover:shadow-[0_8px_30px_rgba(0,0,0,0.09)] hover:-translate-y-1 transition-all duration-300"
                  >
                    <div>
                      {/* Top Row: Avatar & 5 Stars */}
                      <div className="flex items-center gap-3.5 mb-4">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-12 h-12 rounded-full object-cover shrink-0 ring-2 ring-sky-50 shadow-xs"
                          loading="lazy"
                          onError={(e) => {
                            (e.target as HTMLImageElement).src =
                              'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&q=80';
                          }}
                        />
                        <div className="flex items-center gap-0.5">
                          {[...Array(item.rating || 5)].map((_, starIdx) => (
                            <Star
                              key={starIdx}
                              className="w-4 h-4 fill-amber-400 text-amber-400"
                            />
                          ))}
                        </div>
                      </div>

                      {/* Review Quote */}
                      <blockquote className="text-[#475569] text-xs sm:text-[0.82rem] leading-relaxed font-normal italic">
                        "{item.quote}"
                      </blockquote>
                    </div>

                    {/* Bottom: Reviewer Name & Trip Details */}
                    <div className="pt-4 mt-2 border-t border-gray-50">
                      <h4 className="font-heading font-bold text-sm sm:text-[0.95rem] text-[#0A2540] tracking-tight">
                        {item.name}
                      </h4>
                      <p className="text-[11px] sm:text-xs text-[#64748B] font-normal mt-0.5">
                        {item.destination} • {item.tripDate || 'Verified Traveller'}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </AnimatedSection>

          {/* Pagination Dots matching reference image (active dot is amber #F59E0B) */}
          <div className="flex items-center justify-center gap-2 mt-8 sm:mt-10">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setStartIndex(i)}
                className={`transition-all duration-300 h-2 rounded-full ${
                  i === startIndex % totalItems
                    ? 'bg-amber-400 w-5 shadow-xs'
                    : 'bg-[#BAE6FD] hover:bg-sky-300 w-2'
                }`}
                aria-label={`Go to testimonial page ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

