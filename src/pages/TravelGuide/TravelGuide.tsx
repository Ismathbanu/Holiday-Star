import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  BookOpen,
  Users,
  Feather,
  Heart,
  Building2,
  Landmark,
  Compass,
  Trees,
  Camera,
  Palmtree,
  Globe,
  Shield,
  FileCheck,
  Briefcase,
  Banknote,
  MessageCircle,
  ChevronDown
} from 'lucide-react';
import AnimatedSection from '../../components/common/AnimatedSection';
import { siteConfig } from '../../data/siteConfig';

export default function TravelGuide() {
  return (
    <>
      <Helmet>
        <title>Travel Guide — Essential Tips & Destination Guides | Holiday Star</title>
        <meta
          name="description"
          content="Everything you need to know before you go — visas, best time to visit, culture, currency and practical tips for your international holiday."
        />
        <link rel="canonical" href="https://holidaystartours.com/travel-guide" />
      </Helmet>

      {/* Breadcrumb Navigation */}
      <div className="bg-hs-cream py-3 border-b border-gray-100">
        <div className="container-hs flex items-center gap-2 text-xs text-hs-text-muted">
          <Link to="/" className="hover:text-[#0066CC] transition-colors">Home</Link>
          <span>&gt;</span>
          <span className="font-semibold text-hs-navy">Travel Guide</span>
        </div>
      </div>

      {/* ── HERO SECTION ── */}
      <section className="relative min-h-[520px] lg:min-h-[580px] flex items-center overflow-hidden py-16 lg:py-24">
        {/* Full-width background image */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1920&q=80"
            alt="Traveler looking at tropical beach bay"
            className="w-full h-full object-cover"
          />
          {/* Dark Full-Width Gradient Overlay */}
          <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-slate-950/95 via-slate-900/80 to-slate-950/40" />
        </div>

        {/* Top Right Cursive Annotation */}
        <div className="absolute top-12 right-8 lg:right-16 z-10 font-script text-3xl lg:text-4xl text-white rotate-[-3deg] drop-shadow-md hidden sm:block">
          Know • Plan • Explore<br />Go Further ✨
        </div>

        <div className="relative z-10 container-hs w-full">
          <div className="max-w-2xl text-white">
            <h1 className="font-heading font-bold text-4xl sm:text-5xl lg:text-6xl text-white mb-2 leading-[1.1]">
              Travel <span className="font-script text-sky-400 font-normal rotate-[-2deg] inline-block">Guide</span>
            </h1>
            <h2 className="font-heading font-semibold text-lg sm:text-xl text-blue-200 mb-4">
              Plan Better. Travel Smarter. Experience More.
            </h2>
            <p className="text-sm sm:text-base text-gray-200 mb-8 leading-relaxed max-w-xl font-light">
              Everything you need to know before you go — from visas and best time to visit, to local tips, culture, currency and more. Our travel guides help you explore each destination with confidence and make the most of your holiday.
            </p>

            {/* 4 Feature Badges */}
            <div className="flex flex-wrap items-center gap-3">
              <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-semibold text-white shadow-xs">
                <BookOpen className="w-4 h-4 text-sky-400" />
                <span>Expert insights</span>
              </div>
              <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-semibold text-white shadow-xs">
                <Users className="w-4 h-4 text-sky-400" />
                <span>Destination-specific tips</span>
              </div>
              <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-semibold text-white shadow-xs">
                <Feather className="w-4 h-4 text-sky-400" />
                <span>Practical information</span>
              </div>
              <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-semibold text-white shadow-xs">
                <Heart className="w-4 h-4 text-sky-400" />
                <span>Real traveller recommendations</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── REGIONAL FILTERS STRIP (7 DESTINATIONS) ── */}
      <section className="py-8 bg-white border-y border-gray-100 shadow-2xs">
        <div className="container-hs">
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-4">
            {[
              { name: 'Malaysia', icon: Building2, link: '/destinations/malaysia' },
              { name: 'Thailand', icon: Landmark, link: '/destinations/thailand' },
              { name: 'Vietnam', icon: Compass, link: '/destinations/vietnam' },
              { name: 'Sri Lanka', icon: Trees, link: '/destinations/sri-lanka' },
              { name: 'Dubai', icon: Building2, link: '/destinations/dubai' },
              { name: 'Singapore', icon: Camera, link: '/destinations/singapore' },
              { name: 'Indonesia', icon: Palmtree, link: '/destinations/indonesia' },
            ].map((item, i) => (
              <Link
                key={i}
                to={item.link}
                className="p-3.5 rounded-2xl bg-hs-cream hover:bg-blue-50 border border-gray-100 hover:border-blue-200 text-center transition-all duration-300 group flex flex-col items-center justify-center cursor-pointer"
              >
                <div className="w-10 h-10 rounded-full bg-white shadow-2xs flex items-center justify-center text-[#0066CC] group-hover:scale-110 transition-transform mb-2">
                  <item.icon className="w-5 h-5" />
                </div>
                <h4 className="font-heading font-bold text-xs text-hs-navy leading-tight group-hover:text-[#0066CC] transition-colors">
                  {item.name}
                </h4>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── GUIDES BY DESTINATION ── */}
      <section className="py-20 bg-hs-cream border-b border-gray-100">
        <div className="container-hs">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="font-heading font-bold text-3xl sm:text-4xl text-hs-navy mb-2">
                Guides by Destination
              </h2>
              <p className="text-xs sm:text-sm text-hs-text-secondary font-light">
                Get detailed travel information, cultural insights, local experiences and helpful tips for your favourite destinations.
              </p>
            </div>
            <Link
              to="/destinations"
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#0066CC] hover:text-hs-navy transition-colors"
            >
              <span>Explore All Guides</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: 'Malaysia',
                desc: 'Visa info, best time to visit, what to see, local food & more.',
                image: 'https://images.unsplash.com/photo-1596422846543-75c6fc197f07?w=600&q=80',
                link: '/destinations/malaysia',
              },
              {
                title: 'Thailand',
                desc: 'Visa info, best time to visit, what to see, local food & more.',
                image: 'https://images.unsplash.com/photo-1528181304800-259b08848526?w=600&q=80',
                link: '/destinations/thailand',
              },
              {
                title: 'Vietnam',
                desc: 'Visa info, best time to visit, what to see, local food & more.',
                image: 'https://images.unsplash.com/photo-1557750255-c76072572add?w=600&q=80',
                link: '/destinations/vietnam',
              },
              {
                title: 'Sri Lanka',
                desc: 'Visa info, best time to visit, what to see, local food & more.',
                image: 'https://images.unsplash.com/photo-1586523969990-168e44f39abb?w=600&q=80',
                link: '/destinations/sri-lanka',
              },
              {
                title: 'Dubai',
                desc: 'Visa info, best time to visit, what to see, local food & more.',
                image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=600&q=80',
                link: '/destinations/dubai',
              },
              {
                title: 'Singapore',
                desc: 'Visa info, best time to visit, what to see, local food & more.',
                image: 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=600&q=80',
                link: '/destinations/singapore',
              },
              {
                title: 'Indonesia',
                desc: 'Visa info, best time to visit, what to see, local food & more.',
                image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=600&q=80',
                link: '/destinations/indonesia',
              },
            ].map((item, i) => (
              <AnimatedSection key={i} delay={i * 0.08}>
                <div className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 h-full flex flex-col justify-between group">
                  <div>
                    <div className="aspect-[4/3] overflow-hidden relative">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-5">
                      <h3 className="font-heading font-bold text-base text-hs-navy mb-1.5">
                        {item.title}
                      </h3>
                      <p className="text-xs text-hs-text-secondary leading-relaxed font-light">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                  <div className="px-5 pb-5">
                    <Link
                      to={item.link}
                      className="inline-flex items-center gap-1 text-xs font-bold text-[#0066CC] hover:text-hs-navy transition-colors"
                    >
                      <span>View Guide</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </AnimatedSection>
            ))}

            {/* 8th Card: "Not sure where to go next?" */}
            <AnimatedSection delay={0.56}>
              <div className="bg-[#F0F6FC] p-6 rounded-2xl border border-blue-100 shadow-sm h-full flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-full bg-white shadow-2xs flex items-center justify-center text-[#0066CC] mb-4">
                    <Globe className="w-6 h-6" />
                  </div>
                  <h3 className="font-heading font-bold text-lg text-hs-navy mb-2 leading-snug">
                    Not sure where to go next?
                  </h3>
                  <p className="text-xs text-hs-text-secondary leading-relaxed font-light mb-6">
                    Compare destinations and find your perfect holiday.
                  </p>
                </div>
                <Link
                  to="/destinations"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-[#0066CC] hover:bg-[#0052A3] text-white font-bold text-xs rounded-full transition-all duration-300 shadow-md w-full"
                >
                  <span>Explore Destinations</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ── TRAVEL TIPS ── */}
      <section className="py-20 bg-white border-b border-gray-100">
        <div className="container-hs">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="font-heading font-bold text-3xl sm:text-4xl text-hs-navy mb-2">
                Travel Tips
              </h2>
              <p className="text-xs sm:text-sm text-hs-text-secondary font-light">
                Useful advice to make your journey smooth, safe and memorable.
              </p>
            </div>
            <a
              href="#travel-faqs"
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#0066CC] hover:text-hs-navy transition-colors"
            >
              <span>View More Tips</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {[
              {
                title: 'Visa & Entry Requirements',
                desc: 'Know what documents you need for a hassle-free trip.',
                image: 'https://images.unsplash.com/photo-1544717305-2782549b5136?w=600&q=80',
              },
              {
                title: 'Packing Essentials',
                desc: 'What to pack for a comfortable and worry-free holiday.',
                image: 'https://images.unsplash.com/photo-1581553680321-4fffae59fccd?w=600&q=80',
              },
              {
                title: 'Flight & Airport Tips',
                desc: 'From check-in to baggage, travel with ease.',
                image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=600&q=80',
              },
              {
                title: 'Local Etiquette & Culture',
                desc: 'Respect local customs and make meaningful connections.',
                image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&q=80',
              },
              {
                title: 'Stay Connected',
                desc: 'SIM cards, internet options and useful travel apps.',
                image: 'https://images.unsplash.com/photo-1512428559087-560fa5ceab42?w=600&q=80',
              },
            ].map((tip, i) => (
              <AnimatedSection key={i} delay={i * 0.08}>
                <div className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 h-full flex flex-col group">
                  <div className="aspect-[4/3] overflow-hidden relative">
                    <img
                      src={tip.image}
                      alt={tip.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-5 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="font-heading font-bold text-sm text-hs-navy mb-1.5">
                        {tip.title}
                      </h3>
                      <p className="text-xs text-hs-text-secondary leading-relaxed font-light">
                        {tip.desc}
                      </p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── BEST TIME TO VISIT BANNER ── */}
      <section className="py-20 bg-hs-cream border-b border-gray-100">
        <div className="container-hs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
            {/* Left Column: Image with Cursive Script */}
            <div className="lg:col-span-5 relative rounded-3xl overflow-hidden shadow-xl min-h-[380px] p-8 flex items-end">
              <img
                src="https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=1000&q=80"
                alt="Sunset Temple Bali"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
              <div className="relative z-10 font-script text-3xl sm:text-4xl text-white rotate-[-3deg] drop-shadow-md leading-tight">
                Every Destination<br />Has Its Perfect Time
              </div>
            </div>

            {/* Right Column: Light Blue Container */}
            <div className="lg:col-span-7 bg-[#F0F6FC] p-8 sm:p-10 rounded-3xl border border-blue-100 shadow-md flex flex-col justify-between relative overflow-hidden">
              {/* Top Right Polaroid Photo Graphic */}
              <div className="absolute -top-3 -right-3 w-40 bg-white p-2 rounded-xl shadow-lg border border-gray-200 rotate-[8deg] hidden sm:block">
                <div className="aspect-[4/3] rounded-lg overflow-hidden mb-1">
                  <img
                    src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&q=80"
                    alt="Tropical Beach Palm"
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="font-script text-[0.65rem] text-center text-hs-navy">
                  Right Time Brighter Experiences ☀️
                </p>
              </div>

              <div>
                <h3 className="font-heading font-bold text-2xl sm:text-3xl text-hs-navy mb-3 leading-tight max-w-md">
                  Best Time to Visit
                </h3>
                <p className="text-xs sm:text-sm text-hs-text-secondary mb-8 font-light max-w-md leading-relaxed">
                  Discover the ideal seasons, weather conditions and local events for each destination.
                </p>
              </div>

              <Link
                to="/destinations"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#0066CC] hover:bg-[#0052A3] text-white font-bold text-xs sm:text-sm rounded-full transition-all duration-300 shadow-md w-fit"
              >
                <span>Check Destination Seasons</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── DOWNLOADABLE RESOURCES ── */}
      <section className="py-20 bg-white border-b border-gray-100">
        <div className="container-hs">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="font-heading font-bold text-3xl sm:text-4xl text-hs-navy mb-2">
                Downloadable Resources
              </h2>
              <p className="text-xs sm:text-sm text-hs-text-secondary font-light">
                Helpful checklists and guides to plan your trip.
              </p>
            </div>
            <a
              href="#travel-faqs"
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#0066CC] hover:text-hs-navy transition-colors"
            >
              <span>View All Resources</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {[
              { title: 'Pre-Travel Checklist', desc: 'Be ready before you go', icon: FileCheck },
              { title: 'Packing Checklist', desc: "Don't forget the essentials", icon: Briefcase },
              { title: 'Travel Insurance Guide', desc: 'Travel with peace of mind', icon: Shield },
              { title: 'Destination Brochures', desc: 'Quick destination highlights', icon: BookOpen },
              { title: 'Currency & Budget Guide', desc: 'Plan your expenses smartly', icon: Banknote },
            ].map((item, i) => (
              <div key={i} className="p-6 rounded-2xl bg-hs-cream border border-gray-100 text-center flex flex-col items-center justify-center hover:bg-blue-50 transition-colors">
                <div className="w-12 h-12 rounded-full bg-white shadow-2xs flex items-center justify-center text-[#0066CC] mb-3">
                  <item.icon className="w-6 h-6" />
                </div>
                <h4 className="font-heading font-bold text-xs sm:text-sm text-hs-navy mb-1 leading-tight">
                  {item.title}
                </h4>
                <p className="text-[0.65rem] text-hs-text-muted leading-tight font-light mt-0.5">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FREQUENTLY ASKED QUESTIONS ── */}
      <section id="travel-faqs" className="py-20 bg-hs-cream border-b border-gray-100">
        <div className="container-hs">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="font-heading font-bold text-3xl sm:text-4xl text-hs-navy mb-2">
                Frequently asked questions
              </h2>
              <p className="text-xs sm:text-sm text-hs-text-secondary font-light">
                Quick answers to common travel queries.
              </p>
            </div>
            <Link
              to="/contact"
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#0066CC] hover:text-hs-navy transition-colors"
            >
              <span>See all FAQs</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {[
              {
                q: 'Do I need a visa for these destinations?',
                a: 'Malaysia is Visa-Free for Indian passport holders. Thailand, Sri Lanka, and Indonesia offer Visa-on-Arrival or e-Visas. Dubai, Singapore, and Vietnam require pre-arranged e-Visas, which Holiday Star can assist with.'
              },
              {
                q: 'Is travel insurance necessary?',
                a: 'Yes, we strongly recommend comprehensive travel insurance covering flight delays, medical emergencies, and baggage loss for peace of mind.'
              },
              {
                q: 'What is the best time to visit?',
                a: 'Southeast Asian destinations like Thailand and Malaysia are great year-round, while Dubai is best from November to March, and Indonesia (Bali) is ideal from April to October.'
              },
              {
                q: 'How can I stay connected abroad?',
                a: 'You can purchase local SIM cards at arrival airports or activate international roaming on your Indian carrier. Portable Wi-Fi devices are also available.'
              },
              {
                q: 'What currency should I carry?',
                a: 'We recommend carrying a mix of local currency and international forex cards (USD/EUR) which offer better exchange rates and widespread card acceptance.'
              },
              {
                q: 'Can you help with itinerary planning?',
                a: 'Absolutely! Our travel experts customize itineraries based on your preferences, budget, and travel group. Contact us anytime.'
              },
            ].map((faq, idx) => (
              <FAQItem key={idx} question={faq.q} answer={faq.a} />
            ))}
          </div>
        </div>
      </section>

      {/* ── STILL HAVE QUESTIONS? PRE-FOOTER CTA BANNER ── */}
      <section className="py-20 relative overflow-hidden bg-hs-navy">
        <img
          src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=1200&q=80"
          alt="Traveler overwater bungalow resort"
          className="absolute inset-0 w-full h-full object-cover opacity-35"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-hs-navy via-hs-navy/90 to-transparent" />

        <div className="container-hs relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5 font-script text-3xl sm:text-4xl text-amber-300 rotate-[-4deg] drop-shadow-md">
              Better Preparation<br />Brighter Journeys
            </div>

            <div className="lg:col-span-7 text-left lg:text-right">
              <h2 className="font-heading font-bold text-3xl sm:text-4xl text-white mb-3 leading-tight">
                Still have questions?
              </h2>
              <p className="text-xs sm:text-sm text-white/80 font-light mb-6 max-w-xl lg:ml-auto">
                Our travel experts are here to help you plan the perfect holiday.
              </p>

              <div className="flex flex-wrap items-center justify-start lg:justify-end gap-4">
                <Link
                  to="/plan-holiday"
                  className="px-7 py-3.5 bg-[#0066CC] hover:bg-[#0052A3] text-white font-semibold text-sm rounded-full transition-all duration-300 shadow-md flex items-center gap-2"
                >
                  <span>Talk to Our Experts</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <a
                  href={`https://wa.me/${siteConfig.contact.whatsapp}?text=Hello!%20I%20have%20questions%20about%20my%20travel%20plans.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-7 py-3.5 bg-white hover:bg-emerald-50 text-slate-800 font-semibold text-sm rounded-full border border-emerald-500/80 transition-all duration-300 shadow-2xs flex items-center gap-2"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-600 fill-emerald-600" />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

/* FAQ Item Sub-component */
function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-white border border-gray-200/80 rounded-2xl overflow-hidden transition-all shadow-2xs">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between p-5 text-left hover:bg-blue-50/50 transition-colors cursor-pointer"
        aria-expanded={open}
      >
        <span className="font-heading font-bold text-xs sm:text-sm text-hs-navy pr-4">{question}</span>
        <ChevronDown className={`w-4 h-4 text-[#0066CC] shrink-0 transition-transform duration-300 ${open ? 'rotate-180' : ''}`} />
      </button>
      {open && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="px-5 pb-5 pt-1"
        >
          <p className="text-xs text-hs-text-secondary leading-relaxed font-light">{answer}</p>
        </motion.div>
      )}
    </div>
  );
}
