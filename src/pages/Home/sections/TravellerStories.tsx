import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import AnimatedSection from '../../../components/common/AnimatedSection';
import { testimonials } from '../../../data/testimonials';

export default function TravellerStories() {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  const testimonial = testimonials[current];

  return (
    <section className="py-20 bg-white border-b border-gray-100" aria-label="Traveller Stories">
      <div className="container-hs">
        {/* Header Strip */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-10 gap-4">
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-hs-navy">
            Real journeys. Real memories.
          </h2>
          <a
            href={`https://wa.me/916379799948`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-hs-blue-600 hover:text-hs-navy transition-colors shrink-0"
          >
            See more reviews
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        <AnimatedSection>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Card: Customer Review Box */}
            <div className="lg:col-span-7 bg-hs-cream p-8 sm:p-10 rounded-3xl border border-gray-100 relative shadow-sm flex flex-col justify-between min-h-[340px]">
              <div className="flex items-start gap-5">
                <div className="w-16 h-16 rounded-full overflow-hidden shrink-0 border-2 border-hs-blue-600 shadow-md">
                  <img
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&q=80"
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <AnimatePresence mode="wait">
                    <motion.blockquote
                      key={testimonial.id}
                      initial={{ opacity: 0, x: 10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -10 }}
                      transition={{ duration: 0.3 }}
                      className="text-hs-navy text-base sm:text-lg font-normal leading-relaxed italic mb-4"
                    >
                      "{testimonial.quote}"
                    </motion.blockquote>
                  </AnimatePresence>

                  <h4 className="font-heading font-bold text-hs-navy text-lg">
                    {testimonial.name}
                  </h4>
                  <p className="text-xs text-hs-text-muted">
                    {testimonial.destination} Traveller
                  </p>
                </div>
              </div>

              {/* Slider Controls */}
              <div className="flex items-center justify-between pt-6 border-t border-gray-200 mt-6">
                <div className="flex items-center gap-2">
                  {testimonials.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setCurrent(i)}
                      className={`h-2 rounded-full transition-all duration-300 ${
                        i === current ? 'bg-hs-blue-600 w-6' : 'bg-gray-300 w-2'
                      }`}
                      aria-label={`Go to slide ${i + 1}`}
                    />
                  ))}
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={prev}
                    className="w-9 h-9 rounded-full bg-white border border-gray-200 hover:bg-hs-blue-600 hover:text-white flex items-center justify-center text-hs-navy transition-colors shadow-xs"
                    aria-label="Previous review"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    onClick={next}
                    className="w-9 h-9 rounded-full bg-white border border-gray-200 hover:bg-hs-blue-600 hover:text-white flex items-center justify-center text-hs-navy transition-colors shadow-xs"
                    aria-label="Next review"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Right Card: Polaroid Photo Frame */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="bg-white p-4 pb-6 rounded-2xl shadow-xl border border-gray-200 rotate-2 hover:rotate-0 transition-transform duration-500 max-w-sm w-full">
                <div className="h-64 rounded-xl overflow-hidden mb-4">
                  <img
                    src="https://images.unsplash.com/photo-1539635278303-d4002c07eae3?w=800&q=80"
                    alt="Travelers enjoying vacation together"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-center font-script text-3xl text-hs-blue-600">
                  Travel Brings People Together
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
