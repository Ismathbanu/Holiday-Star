import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import AnimatedSection from '../../components/common/AnimatedSection';
import { destinations } from '../../data/destinations';

export default function DestinationsIndex() {
  return (
    <>
      <Helmet>
        <title>International Holiday Destinations | Holiday Star Tours & Travels</title>
        <meta name="description" content="Explore international holiday destinations from Chennai — Malaysia, Thailand, Vietnam, Sri Lanka, Dubai, Singapore & Indonesia." />
        <link rel="canonical" href="https://holidaystartours.com/destinations" />
      </Helmet>

      {/* Hero */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-hs-deep-blue overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(66,165,245,0.3),transparent_50%)]" />
        </div>
        <div className="relative container-hs text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-heading font-bold text-white mb-4"
          >
            Explore Destinations
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-white/70 text-lg max-w-xl mx-auto"
          >
            Seven incredible international destinations, each offering unforgettable experiences — all thoughtfully planned from Chennai.
          </motion.p>
        </div>
      </section>

      {/* Destination Grid */}
      <section className="py-20 md:py-28">
        <div className="container-hs">
          <div className="space-y-16">
            {destinations.map((dest, i) => (
              <AnimatedSection key={dest.id} delay={0.05}>
                <Link
                  to={`/destinations/${dest.slug}`}
                  className={`group grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center ${
                    i % 2 === 1 ? 'lg:direction-rtl' : ''
                  }`}
                >
                  {/* Image */}
                  <div className={`aspect-[16/10] rounded-2xl overflow-hidden ${i % 2 === 1 ? 'lg:order-2' : ''}`}>
                    <img
                      src={dest.heroImage}
                      alt={`${dest.name} — ${dest.emotionalStatement}`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      loading="lazy"
                    />
                  </div>

                  {/* Text */}
                  <div className={`${i % 2 === 1 ? 'lg:order-1' : ''}`}>
                    <h2 className="font-heading font-bold text-3xl md:text-4xl text-hs-text-primary mb-2 group-hover:text-hs-deep-blue transition-colors">
                      {dest.name}
                    </h2>
                    <p className="text-hs-bright-blue italic text-lg mb-4">
                      "{dest.emotionalStatement}"
                    </p>
                    <p className="text-hs-text-secondary leading-relaxed mb-4 max-w-lg">
                      {dest.heroSubtitle}. {dest.heroDescription}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {dest.places.slice(0, 5).map((place) => (
                        <span key={place.name} className="text-xs px-3 py-1 bg-hs-light-blue text-hs-deep-blue rounded-full font-medium">
                          {place.name}
                        </span>
                      ))}
                    </div>
                    <span className="inline-flex items-center gap-2 text-sm font-semibold text-hs-deep-blue group-hover:gap-3 transition-all">
                      Explore {dest.name}
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </Link>

                {i < destinations.length - 1 && (
                  <hr className="border-hs-border-light mt-16" />
                )}
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
