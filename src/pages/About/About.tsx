import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Award,
  Users,
  Globe,
  Handshake,
  ArrowRight,
  Plane,
  Building2,
  Headphones,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  MapPin
} from 'lucide-react';
import AnimatedSection from '../../components/common/AnimatedSection';
import { siteConfig } from '../../data/siteConfig';
import { testimonials } from '../../data/testimonials';

export default function About() {
  const [testimonialIdx, setTestimonialIdx] = useState(0);

  const nextTestimonial = () => setTestimonialIdx((prev) => (prev + 1) % testimonials.length);
  const prevTestimonial = () => setTestimonialIdx((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  const currentTestimonial = testimonials[testimonialIdx];

  return (
    <>
      <Helmet>
        <title>About Us | Holiday Star Tours & Travels Chennai</title>
        <meta
          name="description"
          content="Travel planned with people, not just bookings. Learn about Holiday Star Tours & Travels — Chennai's premier travel agency for curated international holidays."
        />
        <link rel="canonical" href="https://holidaystartours.com/about" />
      </Helmet>

      {/* SECTION 1: HERO */}
      <section className="relative min-h-[85vh] flex items-center pt-28 pb-16 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/hero_bg.png"
            alt="Woman looking at tropical islands"
            className="w-full h-full object-cover"
          />
          {/* Dark Full-Width Gradient Overlay */}
          <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-slate-950/95 via-slate-900/80 to-slate-950/40" />
        </div>

        {/* Cursive Annotations */}
        <div className="absolute top-28 right-8 md:right-24 z-20 font-script text-3xl md:text-4xl text-white rotate-[4deg] drop-shadow-md hidden sm:block">
          People. Places.<br />Experiences. For a<br />Brighter You ✨
        </div>

        <div className="relative z-10 container-hs w-full">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-sky-400 mb-4">
            <Link to="/" className="hover:underline">Home</Link>
            <span>/</span>
            <span>About Us</span>
          </div>

          <div className="max-w-xl md:max-w-2xl text-white">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="font-heading font-bold text-4xl sm:text-5xl md:text-6xl text-white leading-[1.12] mb-6"
            >
              Travel planned<br />
              <span className="text-sky-400 font-script text-4xl sm:text-5xl md:text-6xl font-normal">with people,</span><br />
              not just bookings.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              className="text-gray-200 text-base sm:text-lg md:text-xl leading-relaxed mb-8 max-w-xl font-light"
            >
              At Holiday Star Tours & Travels, we believe a great holiday is more than a flight and a hotel. It's about real experiences, thoughtfully planned and a team you can rely on.
            </motion.p>

            <div className="font-script text-3xl text-sky-300 flex items-center gap-2 rotate-[-2deg]">
              <span>Let's make more travel stories together.</span>
              <Plane className="w-5 h-5 rotate-45 text-emerald-400" />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: TRUST STRIP */}
      <section className="py-6 bg-white border-y border-gray-100 shadow-sm">
        <div className="container-hs">
          <AnimatedSection>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-center">
              {[
                { icon: Award, text: '11 Years in Tamil Nadu' },
                { icon: Users, text: 'Trusted by Thousands of Travellers' },
                { icon: Globe, text: 'Destination-Focused Expertise' },
                { icon: Handshake, text: 'Official Tourism Malaysia Campaign Partner, 2026' },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-hs-blue-50 border border-hs-blue-100 flex items-center justify-center shrink-0 text-hs-blue-600">
                    <item.icon className="w-5 h-5" />
                  </div>
                  <span className="text-xs md:text-sm font-semibold text-hs-navy leading-snug">
                    {item.text}
                  </span>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* SECTION 3: WHO WE ARE */}
      <section className="py-20 bg-white overflow-hidden">
        <div className="container-hs">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <AnimatedSection direction="left">
              <span className="text-xs font-semibold text-hs-blue-600 uppercase tracking-widest block mb-2">
                WHO WE ARE
              </span>
              <h2 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl text-hs-navy mb-6 leading-tight">
                A Chennai-based travel company with a bigger purpose.
              </h2>
              <div className="space-y-4 text-hs-text-secondary text-base sm:text-lg leading-relaxed mb-8 font-light">
                <p>
                  Holiday Star Tours & Travels is a Chennai-based travel company specialising in connecting travellers across Tamil Nadu with curated international destinations, experiences and travel solutions.
                </p>
                <p>
                  From families and couples to groups and corporate travellers, we help people explore the world with confidence, clarity and the right support at every step.
                </p>
              </div>

              <Link
                to="/plan-holiday"
                className="inline-flex items-center gap-2 px-8 py-4 bg-hs-blue-600 hover:bg-hs-navy text-white font-semibold rounded-full shadow-md hover:shadow-lg transition-all duration-300 text-sm sm:text-base"
              >
                Our Journey
                <ArrowRight className="w-4 h-4" />
              </Link>
            </AnimatedSection>

            {/* Right Collage with Polaroid */}
            <AnimatedSection direction="right" delay={0.15}>
              <div className="relative pl-4 pr-6 pt-4 pb-6">
                <div className="absolute top-0 left-4 z-20 font-script text-3xl text-hs-blue-600 rotate-[-6deg] bg-white/80 backdrop-blur-xs px-3 py-1 rounded-lg border border-hs-blue-100 shadow-sm">
                  Proudly based in Chennai
                </div>

                {/* Polaroid Frame of Chennai Landmark */}
                <div className="bg-white p-4 pb-8 rounded-2xl shadow-2xl border border-gray-200 max-w-md mx-auto">
                  <div className="h-64 sm:h-72 rounded-xl overflow-hidden mb-3">
                    <img
                      src="/images/chennai_landmark.png"
                      alt="Chennai Landmark"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="text-right pr-2">
                    <span className="font-script text-2xl text-hs-navy bg-hs-gold/20 px-3 py-1 rounded-md inline-block rotate-[-2deg]">
                      From Chennai to the World and Beyond. ✈️
                    </span>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* SECTION 4: KEY STATS STRIP */}
      <section className="py-12 bg-hs-blue-50 border-y border-hs-blue-100">
        <div className="container-hs">
          <AnimatedSection>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center text-center relative">
              <div className="flex flex-col items-center">
                <Plane className="w-8 h-8 text-hs-blue-600 mb-2" />
                <span className="font-heading font-bold text-4xl text-hs-navy">11+</span>
                <span className="text-xs font-semibold text-hs-text-muted uppercase tracking-wider mt-1">
                  Years in Service
                </span>
              </div>

              <div className="flex flex-col items-center">
                <Users className="w-8 h-8 text-hs-blue-600 mb-2" />
                <span className="font-heading font-bold text-4xl text-hs-navy">10,000+</span>
                <span className="text-xs font-semibold text-hs-text-muted uppercase tracking-wider mt-1">
                  Happy Travellers
                </span>
              </div>

              <div className="flex flex-col items-center">
                <Globe className="w-8 h-8 text-hs-blue-600 mb-2" />
                <span className="font-heading font-bold text-4xl text-hs-navy">7</span>
                <span className="text-xs font-semibold text-hs-text-muted uppercase tracking-wider mt-1">
                  International Destinations
                </span>
              </div>

              <div className="flex flex-col items-center relative">
                <MapPin className="w-8 h-8 text-hs-blue-600 mb-2" />
                <span className="font-heading font-bold text-4xl text-hs-navy">1</span>
                <span className="text-xs font-semibold text-hs-text-muted uppercase tracking-wider mt-1">
                  Home City Chennai
                </span>
              </div>

              {/* Cursive overlay right */}
              <div className="absolute -bottom-8 right-0 font-script text-3xl text-hs-blue-600 rotate-[4deg] hidden lg:block">
                Same People. New Horizons.
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* SECTION 5: WHAT WE DO */}
      <section className="py-20 bg-white border-b border-gray-100" aria-label="What we do">
        <div className="container-hs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Header Box */}
            <div className="lg:col-span-5">
              <span className="text-xs font-semibold text-hs-blue-600 uppercase tracking-widest block mb-2">
                WHAT WE DO
              </span>
              <h2 className="font-heading font-bold text-3xl sm:text-4xl text-hs-navy mb-4 leading-tight">
                More than travel.<br />A better way to explore.
              </h2>
              <p className="text-hs-text-secondary text-base mb-8 font-light">
                We bring together the key elements of your journey so you can focus on what matters most — enjoying the experiences.
              </p>
              <Link
                to="/packages"
                className="inline-flex items-center gap-2 px-8 py-4 bg-hs-blue-600 hover:bg-hs-navy text-white font-semibold rounded-full shadow-md hover:shadow-lg transition-all duration-300 text-sm sm:text-base"
              >
                View Holiday Packages
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Right 4 Services Grid */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                {
                  icon: Plane,
                  title: 'International Holidays',
                  desc: 'Curated tours to Malaysia, Thailand, Vietnam, Sri Lanka, Dubai, Singapore and Indonesia.',
                },
                {
                  icon: Users,
                  title: 'Family & Group Travel',
                  desc: 'Thoughtfully planned itineraries for families, friends and groups of all sizes.',
                },
                {
                  icon: Building2,
                  title: 'Complete Travel Planning',
                  desc: 'Flights, accommodation, transfers, sightseeing and more — all coordinated for you.',
                },
                {
                  icon: Headphones,
                  title: 'Personal Assistance',
                  desc: 'A dedicated team you can reach before, during and after your trip.',
                },
              ].map((service, idx) => (
                <AnimatedSection key={idx} delay={idx * 0.08}>
                  <div className="p-6 rounded-2xl bg-hs-cream border border-gray-100 hover:shadow-card transition-all duration-300 h-full flex flex-col justify-between">
                    <div>
                      <div className="w-12 h-12 rounded-xl bg-hs-blue-50 border border-hs-blue-100 flex items-center justify-center text-hs-blue-600 mb-4">
                        <service.icon className="w-6 h-6" />
                      </div>
                      <h3 className="font-heading font-bold text-lg text-hs-navy mb-2">
                        {service.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-hs-text-secondary leading-relaxed font-light">
                        {service.desc}
                      </p>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: WHY PEOPLE CHOOSE US */}
      <section className="py-20 bg-hs-cream border-b border-gray-100">
        <div className="container-hs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Image Signpost */}
            <div className="lg:col-span-4 relative">
              <div className="rounded-3xl overflow-hidden shadow-xl border-4 border-white h-[420px] relative">
                <img
                  src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80"
                  alt="Beach holiday signpost"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/20" />
                <div className="absolute top-1/3 left-6 font-script text-4xl text-white drop-shadow-md rotate-[-5deg]">
                  Better Holidays.<br />Happier People.
                </div>
              </div>
            </div>

            {/* Center Content Checklist */}
            <div className="lg:col-span-5">
              <span className="text-xs font-semibold text-hs-blue-600 uppercase tracking-widest block mb-2">
                WHY PEOPLE CHOOSE US
              </span>
              <h2 className="font-heading font-bold text-3xl sm:text-4xl text-hs-navy mb-4 leading-tight">
                A travel partner<br />you can count on.
              </h2>
              <p className="text-sm text-hs-text-secondary mb-6 font-light">
                We don't believe in one-size-fits-all holidays. Our focus is on understanding your travel goals and creating experiences that truly fit.
              </p>

              <div className="space-y-3">
                {[
                  'Chennai-based, with a travel network across Tamil Nadu',
                  'Destination focus — Malaysia & Southeast Asia',
                  'Curated international holidays & group travel',
                  'Clear communication and dependable support',
                  'Real reviews from real travellers',
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-hs-green shrink-0 mt-0.5" />
                    <span className="text-sm font-medium text-hs-navy">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Polaroid Photo Frame */}
            <div className="lg:col-span-3 flex justify-center">
              <div className="bg-white p-3 pb-6 rounded-2xl shadow-xl border border-gray-200 rotate-3 hover:rotate-0 transition-transform duration-500 max-w-xs w-full">
                <div className="h-56 rounded-xl overflow-hidden mb-3">
                  <img
                    src="https://images.unsplash.com/photo-1539635278303-d4002c07eae3?w=600&q=80"
                    alt="Happy travelers on holiday"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-center font-script text-2xl text-hs-blue-600">
                  Travelling Brings People Closer
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7: OUR TEAM */}
      <section className="py-20 bg-white border-b border-gray-100" aria-label="Our Team">
        <div className="container-hs">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 gap-4">
            <div>
              <span className="text-xs font-semibold text-hs-blue-600 uppercase tracking-widest block mb-2">
                OUR TEAM
              </span>
              <h2 className="font-heading font-bold text-3xl sm:text-4xl text-hs-navy">
                The people behind your journeys.
              </h2>
              <p className="text-hs-text-secondary text-sm mt-2 max-w-xl font-light">
                A passionate team of travel experts based in Chennai, working to make your holidays smoother, safer and more memorable.
              </p>
            </div>
            <Link
              to="/contact"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-hs-blue-600 hover:text-hs-navy transition-colors shrink-0"
            >
              Meet the Team
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <AnimatedSection>
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-gray-100">
              <img
                src="/images/team_photo.png"
                alt="Holiday Star Team"
                className="w-full h-[360px] sm:h-[450px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

              <div className="absolute bottom-6 right-8 font-script text-3xl md:text-4xl text-white drop-shadow-md">
                Different Destinations. One Dedicated Team.
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* SECTION 8: OUR PARTNERSHIPS */}
      <section className="py-16 bg-hs-cream border-b border-gray-100">
        <div className="container-hs">
          <div className="max-w-3xl">
            <span className="text-xs font-semibold text-hs-blue-600 uppercase tracking-widest block mb-2">
              OUR PARTNERSHIPS
            </span>
            <h2 className="font-heading font-bold text-3xl text-hs-navy mb-4">
              Stronger together.
            </h2>
            <p className="text-hs-text-secondary text-sm sm:text-base leading-relaxed font-light mb-8">
              We collaborate with trusted tourism boards, airlines, hotels and travel partners to bring you better experiences and greater value.
            </p>

            <div className="flex flex-wrap items-center gap-8 bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-red-50 border border-red-200 flex items-center justify-center font-bold text-red-600 text-xs">
                  MALAYSIA
                </div>
                <div>
                  <h4 className="font-bold text-hs-navy text-sm">Tourism Malaysia Partner 2026</h4>
                  <p className="text-xs text-hs-text-muted">Official Outbound Campaign Partner</p>
                </div>
              </div>
              <div className="text-xs text-hs-text-secondary italic border-l pl-6 border-gray-200">
                ...and our network of trusted airline, hotel and tourism partners around the world.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 9: REVIEWS */}
      <section className="py-20 bg-white border-b border-gray-100" aria-label="Reviews">
        <div className="container-hs">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 gap-4">
            <div>
              <span className="text-xs font-semibold text-hs-blue-600 uppercase tracking-widest block mb-2">
                WHAT OUR TRAVELLERS SAY
              </span>
              <h2 className="font-heading font-bold text-3xl text-hs-navy">
                Real experiences. Real smiles.
              </h2>
            </div>
            <a
              href="https://wa.me/916379799948"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-hs-blue-600 hover:text-hs-navy transition-colors shrink-0"
            >
              See more reviews
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          <div className="max-w-3xl bg-hs-cream p-8 sm:p-10 rounded-3xl border border-gray-100 shadow-sm">
            <div className="flex items-start gap-5">
              <div className="w-16 h-16 rounded-full overflow-hidden shrink-0 border-2 border-hs-blue-600">
                <img
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&q=80"
                  alt={currentTestimonial.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <AnimatePresence mode="wait">
                  <motion.blockquote
                    key={currentTestimonial.id}
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -10 }}
                    className="text-hs-navy text-base sm:text-lg font-normal leading-relaxed italic mb-4"
                  >
                    "{currentTestimonial.quote}"
                  </motion.blockquote>
                </AnimatePresence>
                <h4 className="font-heading font-bold text-hs-navy text-lg">
                  {currentTestimonial.name}
                </h4>
                <p className="text-xs text-hs-text-muted">
                  {currentTestimonial.destination} Traveller
                </p>
              </div>
            </div>

            <div className="flex items-center justify-between pt-6 border-t border-gray-200 mt-6">
              <div className="flex items-center gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setTestimonialIdx(i)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      i === testimonialIdx ? 'bg-hs-blue-600 w-6' : 'bg-gray-300 w-2'
                    }`}
                  />
                ))}
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={prevTestimonial}
                  className="w-9 h-9 rounded-full bg-white border border-gray-200 flex items-center justify-center text-hs-navy hover:bg-hs-blue-600 hover:text-white transition-colors"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={nextTestimonial}
                  className="w-9 h-9 rounded-full bg-white border border-gray-200 flex items-center justify-center text-hs-navy hover:bg-hs-blue-600 hover:text-white transition-colors"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 10: FINAL CTA BANNER */}
      <section className="relative overflow-hidden py-24 md:py-32 w-full">
        <div className="absolute inset-0">
          <img
            src="/images/hero_bg.png"
            alt="Tropical ocean"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-hs-navy/95 via-hs-blue-600/90 to-hs-navy/95" />
        </div>

        <div className="absolute top-10 right-8 font-script text-3xl md:text-4xl text-white rotate-[4deg] hidden sm:block">
          Good Holidays.<br />Brighter People.
        </div>

        <div className="relative z-10 container-hs text-center text-white">
          <AnimatedSection className="max-w-2xl mx-auto">
            <h2 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl mb-6">
              Ready to plan your next journey?
            </h2>
            <p className="text-white/90 text-base sm:text-lg mb-10 font-light">
              Tell us where you want to go. We'll help you take the next step.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                to="/plan-holiday"
                className="inline-flex items-center gap-2 px-8 py-4 bg-hs-blue-600 text-white font-semibold rounded-full hover:bg-white hover:text-hs-navy transition-all duration-300 shadow-xl text-sm sm:text-base"
              >
                Plan My Holiday
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href={`https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent(siteConfig.contact.whatsappMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-8 py-4 bg-white text-hs-navy font-semibold rounded-full border border-white hover:bg-hs-green-accent hover:text-hs-green transition-all duration-300 shadow-md text-sm sm:text-base"
              >
                <svg className="w-5 h-5 fill-current text-hs-green" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                </svg>
                Chat on WhatsApp
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
