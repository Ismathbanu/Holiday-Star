import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import {
  Search,
  ArrowRight,
  Heart,
  Plane,
  Building,
  Car,
  Binoculars,
  Utensils,
  Users,
  Star,
  DollarSign,
  Headphones
} from 'lucide-react';
import AnimatedSection from '../../components/common/AnimatedSection';
import { packages } from '../../data/packages';
import { destinations } from '../../data/destinations';

export default function Packages() {
  const [filterDest, setFilterDest] = useState('all');
  const [filterDuration, setFilterDuration] = useState('all');
  const [filterStyle, setFilterStyle] = useState('all');
  const [filterWith, setFilterWith] = useState('all');
  const [filterBudget, setFilterBudget] = useState('all');
  const [favorites, setFavorites] = useState<Record<string, boolean>>({});

  const toggleFavorite = (id: string, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setFavorites((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const filtered = useMemo(() => {
    let result = [...packages];
    if (filterDest !== 'all') result = result.filter((p) => p.destinationId === filterDest);
    if (filterDuration === 'short') result = result.filter((p) => p.nights <= 3);
    if (filterDuration === 'medium') result = result.filter((p) => p.nights >= 4 && p.nights <= 5);
    if (filterDuration === 'long') result = result.filter((p) => p.nights >= 6);
    if (filterStyle !== 'all') result = result.filter((p) => p.travelStyle?.includes(filterStyle as any));
    if (filterWith !== 'all') result = result.filter((p) => p.travellingWith?.includes(filterWith as any));
    return result;
  }, [filterDest, filterDuration, filterStyle, filterWith]);

  return (
    <>
      <Helmet>
        <title>International Holiday Packages from Chennai | Holiday Star Tours</title>
        <meta
          name="description"
          content="Curated international holiday packages with clear itineraries, handpicked experiences and complete travel support from Chennai. Malaysia, Thailand, Vietnam, Sri Lanka, Dubai, Singapore & Indonesia."
        />
        <link rel="canonical" href="https://holidaystartours.com/packages" />
      </Helmet>

      {/* SECTION 1: HERO */}
      <section className="relative min-h-[75vh] flex items-center pt-28 pb-16 overflow-hidden bg-hs-cream">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/hero_bg.png"
            alt="Woman looking at tropical bay"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/85 to-transparent sm:w-4/5 md:w-3/4 lg:w-3/5" />
        </div>

        {/* Cursive text overlay right */}
        <div className="absolute top-28 right-8 md:right-24 z-20 font-script text-3xl md:text-4xl text-white rotate-[4deg] drop-shadow-md hidden sm:block">
          Different<br />Destinations.<br />Brighter Stories.
        </div>

        <div className="relative z-10 container-hs w-full">
          <div className="max-w-xl md:max-w-2xl">
            <span className="text-xs font-semibold text-hs-blue-600 uppercase tracking-widest block mb-2">
              HOLIDAY PACKAGES
            </span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="font-heading font-bold text-4xl sm:text-5xl md:text-6xl text-hs-navy leading-[1.12] mb-4"
            >
              Find the holiday<br />
              <span className="text-hs-blue-600">that fits you.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              className="text-hs-text-secondary text-base sm:text-lg leading-relaxed mb-8 max-w-xl font-light"
            >
              Curated international holiday packages with clear itineraries, handpicked experiences and complete travel support from Chennai.
            </motion.p>

            {/* 4 Feature Pills */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              {[
                { icon: Star, text: 'Curated Itineraries' },
                { icon: DollarSign, text: 'Transparent Pricing' },
                { icon: Users, text: 'For Every Traveller' },
                { icon: Headphones, text: 'End-to-End Support' },
              ].map((pill, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 backdrop-blur-xs border border-gray-200 text-xs font-medium text-hs-navy shadow-xs"
                >
                  <pill.icon className="w-3.5 h-3.5 text-hs-blue-600" />
                  <span>{pill.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: INTERACTIVE FILTER BAR (HIDDEN AS REQUESTED) */}
      <section className="hidden py-8 bg-white border-b border-gray-100 sticky top-[68px] z-30 shadow-sm">
        <div className="container-hs">
          <div className="bg-hs-cream p-4 rounded-2xl border border-gray-200 shadow-md">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-3 items-center">
              {/* Destination Dropdown */}
              <div>
                <label className="block text-[0.65rem] font-bold text-hs-text-muted uppercase tracking-wider mb-1">
                  Destination
                </label>
                <select
                  value={filterDest}
                  onChange={(e) => setFilterDest(e.target.value)}
                  className="w-full text-xs font-semibold px-3 py-2.5 rounded-xl bg-white border border-gray-200 text-hs-navy focus:outline-none focus:border-hs-blue-600"
                >
                  <option value="all">All Destinations</option>
                  {destinations.map((d) => (
                    <option key={d.id} value={d.id}>{d.name}</option>
                  ))}
                </select>
              </div>

              {/* Duration Dropdown */}
              <div>
                <label className="block text-[0.65rem] font-bold text-hs-text-muted uppercase tracking-wider mb-1">
                  Duration
                </label>
                <select
                  value={filterDuration}
                  onChange={(e) => setFilterDuration(e.target.value)}
                  className="w-full text-xs font-semibold px-3 py-2.5 rounded-xl bg-white border border-gray-200 text-hs-navy focus:outline-none focus:border-hs-blue-600"
                >
                  <option value="all">Any Duration</option>
                  <option value="short">3–4 Days</option>
                  <option value="medium">5–6 Days</option>
                  <option value="long">7+ Days</option>
                </select>
              </div>

              {/* Travel Style Dropdown */}
              <div>
                <label className="block text-[0.65rem] font-bold text-hs-text-muted uppercase tracking-wider mb-1">
                  Travel Style
                </label>
                <select
                  value={filterStyle}
                  onChange={(e) => setFilterStyle(e.target.value)}
                  className="w-full text-xs font-semibold px-3 py-2.5 rounded-xl bg-white border border-gray-200 text-hs-navy focus:outline-none focus:border-hs-blue-600"
                >
                  <option value="all">Any Style</option>
                  <option value="family">Family</option>
                  <option value="romantic">Couples / Romantic</option>
                  <option value="adventure">Adventure</option>
                  <option value="relaxation">Relaxation</option>
                  <option value="cultural">Cultural</option>
                </select>
              </div>

              {/* Travelling With Dropdown */}
              <div>
                <label className="block text-[0.65rem] font-bold text-hs-text-muted uppercase tracking-wider mb-1">
                  Travelling With
                </label>
                <select
                  value={filterWith}
                  onChange={(e) => setFilterWith(e.target.value)}
                  className="w-full text-xs font-semibold px-3 py-2.5 rounded-xl bg-white border border-gray-200 text-hs-navy focus:outline-none focus:border-hs-blue-600"
                >
                  <option value="all">Any Group</option>
                  <option value="couple">Solo / Couple</option>
                  <option value="family">Family</option>
                  <option value="group">Group / Friends</option>
                </select>
              </div>

              {/* Budget Dropdown */}
              <div>
                <label className="block text-[0.65rem] font-bold text-hs-text-muted uppercase tracking-wider mb-1">
                  Budget
                </label>
                <select
                  value={filterBudget}
                  onChange={(e) => setFilterBudget(e.target.value)}
                  className="w-full text-xs font-semibold px-3 py-2.5 rounded-xl bg-white border border-gray-200 text-hs-navy focus:outline-none focus:border-hs-blue-600"
                >
                  <option value="all">Any Budget</option>
                  <option value="budget">Under ₹30,000</option>
                  <option value="mid">₹30,000 - ₹50,000</option>
                  <option value="luxury">₹50,000+</option>
                </select>
              </div>

              {/* Search Button */}
              <div className="pt-4 sm:pt-0">
                <button
                  type="button"
                  className="w-full py-3 bg-hs-blue-600 hover:bg-hs-navy text-white text-xs font-bold rounded-xl shadow-md transition-colors flex items-center justify-center gap-1.5 mt-2"
                >
                  <Search className="w-4 h-4" />
                  Search Packages
                </button>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between mt-3 px-1 text-xs text-hs-text-muted">
            <span>Showing <strong className="text-hs-navy">{filtered.length}</strong> holiday packages</span>
            {(filterDest !== 'all' || filterDuration !== 'all' || filterStyle !== 'all') && (
              <button
                onClick={() => {
                  setFilterDest('all');
                  setFilterDuration('all');
                  setFilterStyle('all');
                  setFilterWith('all');
                  setFilterBudget('all');
                }}
                className="text-hs-blue-600 hover:underline font-semibold"
              >
                Reset Filters
              </button>
            )}
          </div>
        </div>
      </section>

      {/* SECTION 3: PACKAGES GRID (2 ROWS OF 4 CARDS = 8 CARDS) */}
      <section className="py-16 bg-hs-cream" aria-label="Holiday Packages Grid">
        <div className="container-hs">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filtered.map((pkg, i) => (
              <AnimatedSection key={pkg.id} delay={i * 0.05}>
                <div className="group bg-white rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 border border-gray-100 flex flex-col h-full relative">
                  {/* Top Image */}
                  <div className="relative h-52 overflow-hidden">
                    <img
                      src={pkg.image}
                      alt={pkg.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      loading="lazy"
                    />

                    {/* Destination Pill Badge top left */}
                    <div className="absolute top-3 left-3">
                      <span className="px-2.5 py-1 bg-hs-green text-white text-[0.7rem] font-bold rounded-md uppercase tracking-wider shadow-sm">
                        {pkg.destinationName}
                      </span>
                    </div>

                    {/* Favorite Heart Button top right */}
                    <button
                      onClick={(e) => toggleFavorite(pkg.id, e)}
                      className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/30 backdrop-blur-md hover:bg-white text-white hover:text-red-500 flex items-center justify-center transition-colors shadow-sm"
                      aria-label="Save to favorites"
                    >
                      <Heart className={`w-4 h-4 ${favorites[pkg.id] ? 'fill-red-500 text-red-500' : ''}`} />
                    </button>
                  </div>

                  {/* Card Content */}
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

                    {/* Price & Action Button */}
                    <div className="pt-3 border-t border-gray-100 flex items-center justify-between">
                      <div>
                        <span className="text-[0.65rem] text-hs-text-muted block">Starting from</span>
                        <span className="font-heading font-bold text-base text-hs-navy">
                          {pkg.startingPrice ? `₹ ${pkg.startingPrice.toLocaleString()}` : '₹ XX,XXX'}
                        </span>
                      </div>

                      <Link
                        to="/plan-holiday"
                        className="flex items-center gap-1 text-xs font-bold text-hs-blue-600 hover:text-hs-navy transition-colors"
                      >
                        <span>View Itinerary</span>
                        <div className="w-7 h-7 rounded-full bg-hs-blue-50 group-hover:bg-hs-blue-600 flex items-center justify-center text-hs-blue-600 group-hover:text-white transition-colors duration-300">
                          <ArrowRight className="w-3.5 h-3.5" />
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: CUSTOMISE YOUR HOLIDAY BANNER */}
      <section className="py-16 bg-white overflow-hidden" aria-label="Customise Holiday">
        <div className="container-hs">
          <AnimatedSection>
            <div className="grid grid-cols-1 lg:grid-cols-12 rounded-3xl overflow-hidden shadow-xl border border-gray-100">
              {/* Left Image Side */}
              <div className="lg:col-span-5 relative min-h-[300px] lg:min-h-[360px]">
                <img
                  src="/images/travel_couple.png"
                  alt="Travelers looking at bay"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/20" />
                <div className="absolute bottom-6 left-6 font-script text-3xl text-white rotate-[-4deg] drop-shadow-md">
                  More destinations.<br />More memories.
                </div>
              </div>

              {/* Right Content Card Side */}
              <div className="lg:col-span-7 bg-hs-blue-50 p-8 sm:p-12 flex flex-col justify-between relative">
                {/* Circular Stamp Graphic */}
                <div className="absolute top-6 right-6 w-24 h-24 rounded-full border-2 border-dashed border-hs-blue-600/40 p-2 hidden sm:flex items-center justify-center text-center rotate-12 bg-white/50 backdrop-blur-xs">
                  <span className="text-[0.6rem] font-bold uppercase tracking-widest text-hs-blue-600 leading-tight">
                    TRAVEL<br />EXPLORE<br />DISCOVER<br />REPEAT
                  </span>
                </div>

                <div>
                  <span className="text-xs font-semibold text-hs-blue-600 uppercase tracking-widest block mb-2">
                    CUSTOMISE YOUR HOLIDAY
                  </span>
                  <h2 className="font-heading font-bold text-3xl sm:text-4xl text-hs-navy mb-4">
                    Can't find what you're looking for?
                  </h2>
                  <p className="text-hs-text-secondary text-sm sm:text-base leading-relaxed mb-8 max-w-lg font-light">
                    Tell us your travel plans and we'll create a customised itinerary that fits your destination, budget and travel style.
                  </p>
                </div>

                <div>
                  <Link
                    to="/plan-holiday"
                    className="inline-flex items-center gap-2 px-8 py-4 bg-hs-blue-600 hover:bg-hs-navy text-white font-semibold rounded-full shadow-md hover:shadow-lg transition-all duration-300 text-sm sm:text-base"
                  >
                    Plan a Custom Holiday
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* SECTION 5: INCLUSIONS / SERVICES STRIP */}
      <section className="py-12 bg-hs-cream border-t border-gray-200">
        <div className="container-hs">
          <AnimatedSection>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 items-center text-center">
              {[
                { icon: Plane, title: 'Flights', sub: 'As per your package' },
                { icon: Building, title: 'Hotel Accommodation', sub: 'Handpicked stays' },
                { icon: Car, title: 'Transfers', sub: 'Airport & intercity' },
                { icon: Binoculars, title: 'Sightseeing', sub: 'Top attractions' },
                { icon: Utensils, title: 'Meals', sub: 'As per itinerary' },
                { icon: Users, title: 'Group / Private', sub: 'Options available' },
              ].map((item, i) => (
                <div key={i} className="flex flex-col items-center p-3">
                  <div className="w-12 h-12 rounded-2xl bg-white border border-gray-200 flex items-center justify-center text-hs-blue-600 mb-3 shadow-xs">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <h4 className="font-heading font-bold text-sm text-hs-navy mb-0.5">
                    {item.title}
                  </h4>
                  <p className="text-[0.7rem] text-hs-text-muted">
                    {item.sub}
                  </p>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
