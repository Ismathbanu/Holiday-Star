import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
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
  Briefcase,
  MapPin,
} from 'lucide-react';
import AnimatedSection from '../../components/common/AnimatedSection';
import { siteConfig } from '../../data/siteConfig';
import TravellerStories from '../Home/sections/TravellerStories';

export default function About() {
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
      <section className="relative min-h-[540px] sm:min-h-[580px] lg:min-h-[620px] xl:min-h-[660px] flex items-center pt-24 pb-12 sm:pt-28 sm:pb-14 lg:py-0 overflow-hidden bg-sky-50/40">
        {/* Full-width Background Image */}
        <div className="absolute inset-0 z-0 select-none pointer-events-none">
          <img
            src="/images/about_hero_banner.jpg"
            alt="Travel planned with people, not just bookings - Holiday Star Tours"
            className="w-full h-full object-cover object-[70%_center] sm:object-[65%_center] md:object-[60%_center] lg:object-center"
          />
          {/* Soft Left Atmospheric Overlay for Perfect Contrast */}
          <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/80 to-transparent sm:via-white/55 md:via-white/30 lg:via-white/10 lg:to-transparent pointer-events-none" />
          {/* Subtle Mobile Bottom Fade */}
          <div className="absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-white/30 to-transparent pointer-events-none sm:hidden" />
        </div>

        <div className="relative z-10 container-hs w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
            {/* Left Content Area (approx 40-45% on desktop) */}
            <div className="lg:col-span-6 xl:col-span-5 max-w-lg lg:max-w-xl">
              {/* Eyebrow */}
              <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 mb-3"
              >
                <span className="text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-[#00A896]">
                  ABOUT HOLIDAY STAR
                </span>
              </motion.div>

              {/* Main Headline */}
              <motion.h1
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-[44px] xl:text-[50px] text-[#0A2540] leading-[1.14] mb-4 sm:mb-5 tracking-tight"
              >
                Travel planned with<br />
                <span className="bg-gradient-to-r from-[#00A896] via-[#0284C7] to-[#7C3AED] bg-clip-text text-transparent inline-block">
                  people,
                </span>{' '}
                not just bookings.
              </motion.h1>

              {/* Supporting Copy */}
              <motion.p
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6 sm:mb-8 max-w-md lg:max-w-lg font-normal"
              >
                Holiday Star Tours & Travels is a Chennai-based travel company helping travellers from Tamil Nadu discover international destinations through thoughtfully planned holidays.
              </motion.p>

              {/* CTA Button */}
              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex items-center gap-4"
              >
                <Link
                  to="/packages"
                  className="group inline-flex items-center justify-center gap-2 px-7 py-3 sm:px-8 sm:py-3.5 rounded-full bg-gradient-to-r from-[#0284C7] to-[#0A2540] hover:from-[#0369A1] hover:to-[#0B1E33] text-white font-semibold text-sm sm:text-base shadow-lg shadow-sky-900/20 hover:shadow-xl hover:shadow-sky-900/30 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
                >
                  <span>Know Packages</span>
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </motion.div>
            </div>

            {/* Right Scenic Space with Polaroid Cards Stack */}
            <div className="hidden lg:flex lg:col-span-6 xl:col-span-7 justify-end items-center pr-2 xl:pr-6">
              <div className="relative w-64 xl:w-72 h-[440px] xl:h-[480px] flex items-center justify-center pointer-events-auto">
                {/* Top Polaroid - Kuala Lumpur */}
                <motion.div
                  initial={{ opacity: 0, y: -25, rotate: -10 }}
                  animate={{ opacity: 1, y: 0, rotate: -6 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  whileHover={{ scale: 1.06, rotate: -2, zIndex: 40 }}
                  className="absolute top-2 right-4 w-40 xl:w-46 bg-white p-2.5 pb-6 xl:pb-7 rounded-lg shadow-2xl shadow-slate-900/25 border border-slate-100 z-10 transition-shadow duration-300"
                >
                  <div className="w-2.5 h-2.5 rounded-full bg-slate-300/80 mx-auto mb-1.5 shadow-inner" />
                  <div className="aspect-[4/3] rounded overflow-hidden bg-slate-100 shadow-inner">
                    <img
                      src="/images/polaroid_kl.jpg"
                      alt="Kuala Lumpur Night Skyline"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </motion.div>

                {/* Middle Polaroid - Tropical Beach */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9, rotate: 12 }}
                  animate={{ opacity: 1, scale: 1, rotate: 7 }}
                  transition={{ duration: 0.6, delay: 0.35 }}
                  whileHover={{ scale: 1.06, rotate: 3, zIndex: 40 }}
                  className="absolute top-36 xl:top-40 right-0 w-42 xl:w-48 bg-white p-2.5 pb-7 xl:pb-8 rounded-lg shadow-2xl shadow-slate-900/30 border border-slate-100 z-20 transition-shadow duration-300"
                >
                  <div className="w-2.5 h-2.5 rounded-full bg-slate-300/80 mx-auto mb-1.5 shadow-inner" />
                  <div className="aspect-[4/3] rounded overflow-hidden bg-slate-100 shadow-inner">
                    <img
                      src="/images/polaroid_beach.jpg"
                      alt="Tropical Island Paradise Beach"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </motion.div>

                {/* Bottom Polaroid - Golden Buddha Temple */}
                <motion.div
                  initial={{ opacity: 0, y: 25, rotate: -8 }}
                  animate={{ opacity: 1, y: 0, rotate: -4 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  whileHover={{ scale: 1.06, rotate: 0, zIndex: 40 }}
                  className="absolute bottom-2 right-6 xl:right-8 w-40 xl:w-46 bg-white p-2.5 pb-6 xl:pb-7 rounded-lg shadow-2xl shadow-slate-900/25 border border-slate-100 z-30 transition-shadow duration-300"
                >
                  <div className="w-2.5 h-2.5 rounded-full bg-slate-300/80 mx-auto mb-1.5 shadow-inner" />
                  <div className="aspect-[4/3] rounded overflow-hidden bg-slate-100 shadow-inner">
                    <img
                      src="/images/polaroid_temple.jpg"
                      alt="Golden Buddha Temple Pagoda"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: TRUST STRIP */}
      <section className="relative py-6 sm:py-7 bg-gradient-to-r from-[#013f4a] via-[#071f3a] to-[#251648] text-white border-y border-white/10 shadow-md overflow-hidden">
        {/* Subtle background glow effects */}
        <div className="absolute top-0 left-0 w-80 h-full bg-[#00E5BE]/5 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-80 h-full bg-[#A855F7]/10 blur-3xl pointer-events-none" />

        {/* Global SVG Gradients for Icon Strokes */}
        <svg width="0" height="0" className="absolute pointer-events-none">
          <defs>
            <linearGradient id="trust-grad-1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#2DD4BF" />
              <stop offset="100%" stopColor="#06B6D4" />
            </linearGradient>
            <linearGradient id="trust-grad-2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#22D3EE" />
              <stop offset="100%" stopColor="#6366F1" />
            </linearGradient>
            <linearGradient id="trust-grad-3" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#38BDF8" />
              <stop offset="100%" stopColor="#C084FC" />
            </linearGradient>
            <linearGradient id="trust-grad-4" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#60A5FA" />
              <stop offset="100%" stopColor="#A855F7" />
            </linearGradient>
          </defs>
        </svg>

        <div className="container-hs relative z-10">
          <AnimatedSection>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8 items-center">
              {[
                { icon: Award, text: '11 Years in Tamil Nadu', grad: 'url(#trust-grad-1)' },
                { icon: Users, text: 'Trusted by Thousands of Travellers', grad: 'url(#trust-grad-2)' },
                { icon: Globe, text: 'Destination-Focused Expertise', grad: 'url(#trust-grad-3)' },
                { icon: Handshake, text: 'Official Tourism Malaysia Campaign Partner, 2026', grad: 'url(#trust-grad-4)' },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3.5 group">
                  <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white/10 backdrop-blur-xs border border-white/15 flex items-center justify-center shrink-0 shadow-inner group-hover:scale-105 transition-transform duration-300">
                    <item.icon
                      className="w-5 h-5 sm:w-6 sm:h-6"
                      style={{ stroke: item.grad, strokeWidth: 2 }}
                    />
                  </div>
                  <span className="text-xs sm:text-sm font-semibold text-slate-100 leading-snug group-hover:text-white transition-colors">
                    {item.text}
                  </span>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* SECTION 3: OUR STORY / WHO WE ARE */}
      <section className="relative py-20 lg:py-28 overflow-hidden bg-white">
        {/* Section Background with Atmospheric Gradient, Tropical Leaves & Skyline Line-art */}
        <div className="absolute inset-0 z-0 select-none pointer-events-none">
          <img
            src="/images/our_story_bg.jpg"
            alt="Our Story Background"
            className="w-full h-full object-cover object-left-bottom lg:object-center opacity-85"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/60 to-transparent pointer-events-none" />
        </div>

        <div className="relative z-10 container-hs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Content Area (approx 45-50% on desktop) */}
            <div className="lg:col-span-6 xl:col-span-5">
              <AnimatedSection direction="left">
                {/* Eyebrow */}
                <div className="inline-flex items-center gap-2 mb-3 sm:mb-4">
                  <span className="text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-[#00A896]">
                    OUR STORY
                  </span>
                </div>

                {/* Main Heading */}
                <h2 className="font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-[46px] xl:text-[50px] text-[#0A2540] leading-[1.15] mb-6 tracking-tight">
                  A simple idea.<br />
                  <span className="bg-gradient-to-r from-[#0284C7] via-[#2563EB] to-[#7C3AED] bg-clip-text text-transparent inline-block">
                    Happier travellers.
                  </span>
                </h2>

                {/* Body Copy */}
                <div className="space-y-4 text-slate-600 text-base sm:text-lg leading-relaxed font-normal">
                  <p>
                    We believe a good holiday is about more than booking a flight and hotel. It’s about understanding the journey, knowing what has been arranged and having someone you can reach when you need help.
                  </p>
                  <p>
                    Our aim is simple: make international travel easier to plan, clearer to understand and more enjoyable to experience.
                  </p>
                </div>
              </AnimatedSection>
            </div>

            {/* Right Side: Floating Layered Travel Photo Cards (No box background) */}
            <div className="lg:col-span-6 xl:col-span-7">
              <AnimatedSection direction="right" delay={0.15}>
                <div className="relative w-full max-w-lg lg:max-w-xl mx-auto h-[380px] sm:h-[420px] md:h-[460px] flex items-center justify-center">
                  {/* Photo 1: Top-Left - Kuala Lumpur */}
                  <motion.div
                    initial={{ opacity: 0, y: -20, rotate: -8 }}
                    whileInView={{ opacity: 1, y: 0, rotate: -4 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    whileHover={{ scale: 1.05, rotate: -2, zIndex: 30 }}
                    className="absolute top-0 left-2 sm:left-4 w-[48%] sm:w-[46%] bg-white p-2 sm:p-2.5 pb-4 sm:pb-5 rounded-xl shadow-2xl shadow-slate-900/20 border border-slate-100 z-10 cursor-pointer"
                  >
                    <div className="aspect-[4/3] rounded-lg overflow-hidden bg-slate-100 shadow-inner">
                      <img
                        src="/images/polaroid_kl.jpg"
                        alt="Kuala Lumpur Petronas Towers"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </motion.div>

                  {/* Photo 2: Top-Right - Tropical Beach */}
                  <motion.div
                    initial={{ opacity: 0, y: -20, rotate: 10 }}
                    whileInView={{ opacity: 1, y: 0, rotate: 6 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.15 }}
                    whileHover={{ scale: 1.05, rotate: 3, zIndex: 30 }}
                    className="absolute top-2 right-2 sm:right-4 w-[48%] sm:w-[46%] bg-white p-2 sm:p-2.5 pb-4 sm:pb-5 rounded-xl shadow-2xl shadow-slate-900/20 border border-slate-100 z-10 cursor-pointer"
                  >
                    <div className="aspect-[4/3] rounded-lg overflow-hidden bg-slate-100 shadow-inner">
                      <img
                        src="/images/polaroid_beach.jpg"
                        alt="Malaysian Tropical Island Beach"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </motion.div>

                  {/* Photo 3: Bottom-Center - Family Travel Moment (Main Focal Point) */}
                  <motion.div
                    initial={{ opacity: 0, y: 25, scale: 0.95 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1, rotate: -1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.25 }}
                    whileHover={{ scale: 1.04, rotate: 0, zIndex: 35 }}
                    className="absolute bottom-0 left-[8%] sm:left-[10%] w-[84%] sm:w-[80%] bg-white p-2.5 sm:p-3 pb-5 sm:pb-6 rounded-2xl shadow-2xl shadow-slate-950/25 border border-slate-100 z-20 cursor-pointer"
                  >
                    <div className="aspect-[16/10] sm:aspect-[16/9] rounded-xl overflow-hidden bg-slate-100 shadow-inner">
                      <img
                        src="/images/polaroid_family.jpg"
                        alt="Family Travel Adventure"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </motion.div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: KEY STATS STRIP */}
      <section className="relative py-12 sm:py-14 bg-gradient-to-r from-[#013f4a] via-[#071f3a] to-[#251648] text-white border-y border-white/10 shadow-md overflow-hidden">
        {/* Subtle background glow effects matching Trust Section */}
        <div className="absolute top-0 left-0 w-80 h-full bg-[#00E5BE]/5 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-80 h-full bg-[#A855F7]/10 blur-3xl pointer-events-none" />

        {/* Global SVG Gradients for Stats Icon Strokes */}
        <svg width="0" height="0" className="absolute pointer-events-none">
          <defs>
            <linearGradient id="stats-grad-1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#2DD4BF" />
              <stop offset="100%" stopColor="#06B6D4" />
            </linearGradient>
            <linearGradient id="stats-grad-2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#22D3EE" />
              <stop offset="100%" stopColor="#6366F1" />
            </linearGradient>
            <linearGradient id="stats-grad-3" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#38BDF8" />
              <stop offset="100%" stopColor="#C084FC" />
            </linearGradient>
            <linearGradient id="stats-grad-4" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#60A5FA" />
              <stop offset="100%" stopColor="#A855F7" />
            </linearGradient>
          </defs>
        </svg>

        <div className="container-hs relative z-10">
          <AnimatedSection>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 items-center text-center">
              {[
                { icon: Plane, value: '11+', label: 'Years in Service', grad: 'url(#stats-grad-1)' },
                { icon: Users, value: '10,000+', label: 'Happy Travellers', grad: 'url(#stats-grad-2)' },
                { icon: Globe, value: '7', label: 'International Destinations', grad: 'url(#stats-grad-3)' },
                { icon: MapPin, value: '1', label: 'Home City Chennai', grad: 'url(#stats-grad-4)' },
              ].map((item, idx) => (
                <div key={idx} className="flex flex-col items-center group">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white/10 backdrop-blur-xs border border-white/15 flex items-center justify-center mb-3 shadow-inner group-hover:scale-110 transition-transform duration-300">
                    <item.icon
                      className="w-6 h-6 sm:w-7 sm:h-7"
                      style={{ stroke: item.grad, strokeWidth: 2 }}
                    />
                  </div>
                  <span className="font-heading font-black text-3xl sm:text-4xl text-white tracking-tight">
                    {item.value}
                  </span>
                  <span className="text-xs sm:text-sm font-semibold text-slate-300 uppercase tracking-wider mt-1">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* SECTION 5: WHAT WE DO */}
      <section className="relative py-20 lg:py-28 overflow-hidden bg-white" aria-label="What we do">
        {/* Background Asset with Soft Aqua Gradient & Corner Tropical Botanical Silhouettes */}
        <div className="absolute inset-0 z-0 select-none pointer-events-none">
          <img
            src="/images/what_we_do_bg.jpg"
            alt="What We Do Background"
            className="w-full h-full object-cover object-center opacity-85"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-transparent to-white/70 pointer-events-none" />
        </div>

        <div className="relative z-10 container-hs">
          {/* Section Header */}
          <div className="max-w-3xl mb-12 lg:mb-16">
            <AnimatedSection direction="up">
              <span className="text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-[#00A896] block mb-2.5">
                WHAT WE DO
              </span>
              <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-[44px] xl:text-[48px] text-[#0A2540] leading-[1.18] mb-4 tracking-tight">
                More than travel.{' '}
                <span className="bg-gradient-to-r from-[#0284C7] via-[#2563EB] to-[#7C3AED] bg-clip-text text-transparent inline-block">
                  A better way to explore.
                </span>
              </h2>
              <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-normal">
                We bring together the key elements of your journey so you can focus on what matters most — enjoying the experiences.
              </p>
            </AnimatedSection>
          </div>

          {/* 4 Large Service Cards (1 Row on Desktop, 2x2 Tablet, Stacked Mobile) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-5 xl:gap-7 items-stretch">
            {[
              {
                icon: Plane,
                iconBorder: 'border-sky-200 bg-sky-50/90 text-[#0284C7]',
                title: 'International Holidays',
                desc: 'Curated focus on Malaysia, Thailand, Vietnam, Sri Lanka, Dubai, Singapore and beyond.',
                image: '/images/what_we_do_international.jpg',
                alt: 'International Holidays Tropical Seascape',
              },
              {
                icon: Users,
                iconBorder: 'border-purple-200 bg-purple-50/90 text-[#7C3AED]',
                title: 'Family & Group Travel',
                desc: 'Thoughtfully planned itineraries for families, friends and groups of travellers.',
                image: '/images/what_we_do_family.jpg',
                alt: 'Family and Group Travel on Tropical Beach',
              },
              {
                icon: Briefcase,
                iconBorder: 'border-blue-200 bg-blue-50/90 text-[#2563EB]',
                title: 'Complete Travel Planning',
                desc: 'Flights, accommodation, transfers, sightseeing and more — all arranged for you.',
                image: '/images/what_we_do_planning.jpg',
                alt: 'Complete Travel Planning Marina Bay Skyline',
              },
              {
                icon: Headphones,
                iconBorder: 'border-teal-200 bg-teal-50/90 text-[#00A896]',
                title: 'Personal Assistance',
                desc: 'A dedicated team you can reach before, during and after your trip.',
                image: '/images/what_we_do_support.png',
                alt: 'Holiday Star Personal Assistance Travel Advisor',
              },
            ].map((card, idx) => (
              <AnimatedSection key={idx} delay={idx * 0.1}>
                <div className="group bg-white rounded-3xl border border-slate-100/90 shadow-xl shadow-slate-900/5 hover:shadow-2xl hover:shadow-sky-900/15 hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between h-full overflow-hidden">
                  {/* Top Content Area (~45%) */}
                  <div className="p-6 sm:p-7 flex flex-col items-start flex-grow">
                    {/* Icon Badge */}
                    <div className={`w-12 h-12 sm:w-13 sm:h-13 rounded-2xl flex items-center justify-center mb-4.5 border shadow-inner transition-transform duration-300 group-hover:scale-105 ${card.iconBorder}`}>
                      <card.icon className="w-6 h-6 stroke-[1.8]" />
                    </div>

                    {/* Title */}
                    <h3 className="font-heading font-bold text-lg sm:text-xl text-[#0A2540] mb-2 leading-snug group-hover:text-[#0284C7] transition-colors duration-300">
                      {card.title}
                    </h3>

                    {/* Description */}
                    <p className="text-xs sm:text-sm text-slate-500 leading-relaxed font-normal">
                      {card.desc}
                    </p>
                  </div>

                  {/* Bottom Image Area (~55%) */}
                  <div className="relative h-44 sm:h-48 lg:h-44 xl:h-52 w-full overflow-hidden rounded-b-3xl">
                    <img
                      src={card.image}
                      alt={card.alt}
                      className="w-full h-full object-cover group-hover:scale-106 transition-transform duration-500 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/15 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6: WHY PEOPLE CHOOSE US */}
      <section className="relative min-h-[500px] sm:min-h-[540px] lg:min-h-[580px] xl:min-h-[620px] flex items-center py-16 lg:py-20 overflow-hidden bg-sky-50/30">
        {/* Full-width Background Image - Group of Travellers overlooking Tropical Mountains & Coast */}
        <div className="absolute inset-0 z-0 select-none pointer-events-none">
          <img
            src="/images/why_choose_us_banner.png"
            alt="A travel partner you can count on - Holiday Star Tours"
            className="w-full h-full object-cover object-[80%_center] sm:object-[75%_center] md:object-[68%_center] lg:object-center"
          />
          {/* Soft Left Atmospheric Overlay for Razor-Sharp Text Contrast */}
          <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/80 to-transparent sm:via-white/60 md:via-white/30 lg:via-white/10 lg:to-transparent pointer-events-none" />
          {/* Subtle Mobile Bottom Fade */}
          <div className="absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-white/30 to-transparent pointer-events-none sm:hidden" />
        </div>

        <div className="relative z-10 container-hs w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">
            {/* Left Content Area (~45% on desktop) */}
            <div className="lg:col-span-6 xl:col-span-5 max-w-lg lg:max-w-xl">
              <AnimatedSection direction="left">
                {/* Eyebrow */}
                <div className="inline-flex items-center gap-1.5 mb-3">
                  <span className="text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-[#0284C7]">
                    WHY PEOPLE
                  </span>
                  <span className="text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-[#7C3AED]">
                    CHOOSE US
                  </span>
                </div>

                {/* Main Heading */}
                <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-[44px] xl:text-[48px] text-[#0A2540] leading-[1.15] mb-4 tracking-tight">
                  A travel partner<br />
                  <span className="bg-gradient-to-r from-[#0284C7] via-[#2563EB] to-[#7C3AED] bg-clip-text text-transparent inline-block">
                    you can count on.
                  </span>
                </h2>

                {/* Supporting Copy */}
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-7 max-w-lg font-normal">
                  We don't believe in one-size-fits-all holidays. Our focus is on understanding your travel goals and creating experiences that truly fit.
                </p>

                {/* 5 Feature Checklist Points */}
                <div className="space-y-3.5">
                  {[
                    'Chennai-based, with a travel network across Tamil Nadu',
                    'Destination focus – Malaysia & Southeast Asia',
                    'Curated international holidays & group travel',
                    'Clear communication and dependable support',
                    'Real reviews from travellers',
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3 group">
                      <div className="w-6 h-6 rounded-full bg-teal-50 border border-teal-200 flex items-center justify-center shrink-0 shadow-xs group-hover:scale-110 transition-transform duration-200">
                        <CheckCircle2 className="w-4 h-4 text-[#00A896] stroke-[2.2]" />
                      </div>
                      <span className="text-xs sm:text-sm md:text-[15px] font-semibold text-[#0A2540] leading-snug">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </AnimatedSection>
            </div>

            {/* Right Scenic Space - Preserves unobstructed view of the 4 travellers & mountain seascape */}
            <div className="hidden lg:block lg:col-span-6 xl:col-span-7 min-h-[360px] pointer-events-none" />
          </div>
        </div>
      </section>

      {/* SECTION 7: OUR TEAM & OFFICE */}
      <section className="relative py-20 lg:py-24 overflow-hidden bg-white" aria-label="Our Team & Office">
        {/* Subtle Background Gradient Asset */}
        <div className="absolute inset-0 z-0 select-none pointer-events-none">
          <img
            src="/images/what_we_do_bg.jpg"
            alt="Office Section Background"
            className="w-full h-full object-cover object-center opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-white pointer-events-none" />
        </div>

        <div className="relative z-10 container-hs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 xl:gap-10 items-center">
            {/* Left Column: Heading, Copy & CTA (~35% width) */}
            <div className="lg:col-span-4 xl:col-span-4">
              <AnimatedSection direction="left">
                {/* Eyebrow */}
                <span className="text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-[#00A896] block mb-2.5">
                  OUR TEAM & OFFICE
                </span>

                {/* Main Heading */}
                <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-[38px] xl:text-[42px] text-[#0A2540] leading-[1.15] mb-4 tracking-tight">
                  Based in Chennai.<br />
                  <span className="bg-gradient-to-r from-[#0284C7] via-[#2563EB] to-[#7C3AED] bg-clip-text text-transparent inline-block">
                    Here for your journey.
                  </span>
                </h2>

                {/* Body Copy */}
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-8 font-normal">
                  Our team in Chennai works closely with travellers from across Tamil Nadu, providing guidance, support and coordination before, during and after your trip.
                </p>

                {/* CTA Button */}
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2.5 px-8 py-3.5 sm:px-9 sm:py-4 rounded-full bg-gradient-to-r from-[#00A896] via-[#0284C7] to-[#0284C7] hover:from-[#00897B] hover:to-[#0369A1] text-white font-semibold text-sm sm:text-base shadow-lg shadow-teal-900/15 hover:shadow-xl hover:shadow-teal-900/25 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
                >
                  <span>Get in Touch</span>
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </AnimatedSection>
            </div>

            {/* Center Column: Reception Office Photo (~40% width) */}
            <div className="lg:col-span-5 xl:col-span-5">
              <AnimatedSection direction="up" delay={0.1}>
                <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-sky-950/15 border border-slate-100 bg-white group">
                  <img
                    src="/images/our_team_office.png"
                    alt="Holiday Star Tours & Travels Chennai Reception Office"
                    className="w-full h-[280px] sm:h-[340px] lg:h-[360px] object-cover group-hover:scale-104 transition-transform duration-700 ease-out"
                  />
                </div>
              </AnimatedSection>
            </div>

            {/* Right Column: Values Card & Flight Trail (~25% width) */}
            <div className="lg:col-span-3 xl:col-span-3">
              <AnimatedSection direction="right" delay={0.2}>
                <div className="bg-gradient-to-b from-sky-50/70 via-sky-50/40 to-white p-6 sm:p-7 rounded-3xl border border-sky-100/90 shadow-xl shadow-sky-900/5 relative overflow-hidden">
                  {/* Card Title */}
                  <div className="mb-6">
                    <span className="text-xs sm:text-sm font-bold uppercase tracking-[0.15em] text-[#00A896] block leading-tight">
                      A TRAVEL COMPANY
                    </span>
                    <span className="text-xs sm:text-sm font-bold uppercase tracking-[0.15em] text-[#0284C7] block leading-tight mt-0.5">
                      THAT CARES
                    </span>
                  </div>

                  {/* 3 Values Checklist */}
                  <div className="space-y-4 mb-5 relative z-10">
                    {[
                      'Responsive support',
                      'Clear information',
                      'Traveller-focused approach',
                    ].map((point, i) => (
                      <div key={i} className="flex items-center gap-3 group">
                        <div className="w-6 h-6 rounded-full bg-teal-50 border border-teal-200 flex items-center justify-center shrink-0 shadow-xs group-hover:scale-110 transition-transform duration-200">
                          <CheckCircle2 className="w-4 h-4 text-[#00A896] stroke-[2.2]" />
                        </div>
                        <span className="text-xs sm:text-sm font-semibold text-[#0A2540] leading-snug">
                          {point}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Flight Trail with Airplane */}
                  <div className="relative pt-1 flex justify-end items-center">
                    <svg className="w-28 h-12 text-[#0284C7]" viewBox="0 0 100 45" fill="none">
                      <path
                        d="M 5 35 Q 50 45, 65 20 T 95 8"
                        stroke="#0284C7"
                        strokeWidth="1.6"
                        strokeDasharray="3 3"
                        fill="none"
                      />
                    </svg>
                    <Plane className="w-4 h-4 text-[#0284C7] rotate-45 absolute top-0.5 right-0" />
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 8: OUR PARTNERSHIPS */}
      <section
        className="relative py-16 sm:py-20 lg:py-24 overflow-hidden bg-white border-t border-b border-slate-100/80"
        aria-label="Our Partnerships"
      >
        {/* Section Background matching Our Story section */}
        <div className="absolute inset-0 z-0 select-none pointer-events-none">
          <img
            src="/images/our_story_bg.jpg"
            alt="Partnerships Background"
            className="w-full h-full object-cover object-left-bottom lg:object-center opacity-85"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/75 to-transparent pointer-events-none" />
        </div>

        {/* Content Container */}
        <div className="container-hs relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-12 items-center">
            {/* Left Column (Span 7): Header & Floating Partner Card */}
            <div className="lg:col-span-7">
              {/* Section Header Text */}
              <AnimatedSection className="mb-6 sm:mb-8">
                <span className="text-xs sm:text-sm font-bold uppercase tracking-[0.25em] text-[#00A3FF] block mb-2 sm:mb-3">
                  OUR PARTNERSHIPS
                </span>
                <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-[#0A2540] tracking-tight leading-tight mb-3">
                  Stronger together.
                </h2>
                <p className="text-[#475569] text-sm sm:text-base leading-relaxed font-normal max-w-xl">
                  We collaborate with trusted tourism boards, airlines, hotels and travel partners to bring you better experiences and greater value.
                </p>
              </AnimatedSection>

              {/* White Floating Partnership Card (matching reference layout) */}
              <AnimatedSection direction="up" delay={0.1}>
                <div className="bg-white rounded-3xl p-6 sm:p-7 shadow-[0_10px_35px_rgba(0,0,0,0.06)] border border-slate-100">
                  <div className="flex flex-col sm:flex-row items-center justify-between gap-6 sm:gap-8">
                    {/* Left Side: Tourism Malaysia Official Logo & Partner Details */}
                    <div className="flex flex-col items-center sm:items-start text-center sm:text-left shrink-0">
                      <img
                        src="/images/tourism_malaysia_clean.svg"
                        alt="Tourism Malaysia Official Outbound Campaign Partner"
                        className="h-10 sm:h-12 w-auto object-contain mb-2.5"
                      />
                      <h4 className="font-heading font-bold text-sm sm:text-base text-[#0A2540]">
                        Tourism Malaysia
                      </h4>
                      <p className="text-xs sm:text-sm text-[#64748B] mt-0.5">
                        Official Outbound Campaign Partner
                      </p>
                    </div>

                    {/* Vertical Divider on Desktop */}
                    <div className="hidden sm:block w-px h-16 bg-sky-100 shrink-0" />

                    {/* Horizontal Divider on Mobile */}
                    <div className="w-full h-px bg-slate-100 sm:hidden" />

                    {/* Right Side: 3 Partner Columns with Blue Icons */}
                    <div className="grid grid-cols-3 gap-3 sm:gap-6 text-center w-full sm:w-auto flex-1">
                      {/* Column 1: Airlines */}
                      <div className="flex flex-col items-center">
                        <div className="w-10 h-10 rounded-full flex items-center justify-center mb-1 text-[#0066FF]">
                          <Plane className="w-5 h-5 sm:w-6 sm:h-6 stroke-[2.2]" />
                        </div>
                        <h4 className="font-heading font-bold text-xs sm:text-sm text-[#0A2540]">
                          Airlines
                        </h4>
                        <p className="text-[10px] sm:text-xs text-[#64748B] mt-0.5">
                          Preferred Partners
                        </p>
                      </div>

                      {/* Column 2: Hotels */}
                      <div className="flex flex-col items-center">
                        <div className="w-10 h-10 rounded-full flex items-center justify-center mb-1 text-[#0066FF]">
                          <Building2 className="w-5 h-5 sm:w-6 sm:h-6 stroke-[2.2]" />
                        </div>
                        <h4 className="font-heading font-bold text-xs sm:text-sm text-[#0A2540]">
                          Hotels
                        </h4>
                        <p className="text-[10px] sm:text-xs text-[#64748B] mt-0.5">
                          Trusted Stays
                        </p>
                      </div>

                      {/* Column 3: Tourism Boards */}
                      <div className="flex flex-col items-center">
                        <div className="w-10 h-10 rounded-full flex items-center justify-center mb-1 text-[#0066FF]">
                          <Users className="w-5 h-5 sm:w-6 sm:h-6 stroke-[2.2]" />
                        </div>
                        <h4 className="font-heading font-bold text-xs sm:text-sm text-[#0A2540]">
                          Tourism Boards
                        </h4>
                        <p className="text-[10px] sm:text-xs text-[#64748B] mt-0.5">
                          Global Support
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            </div>

            {/* Right Column (Span 5): Clean Malaysia Image */}
            <div className="lg:col-span-5">
              <AnimatedSection direction="right" delay={0.2}>
                <div className="relative rounded-3xl overflow-hidden shadow-xl shadow-slate-900/10 border border-slate-100 bg-white group">
                  <img
                    src="/images/polaroid_kl.jpg"
                    alt="Malaysia Kuala Lumpur Twin Towers"
                    className="w-full h-[260px] sm:h-[300px] lg:h-[320px] object-cover group-hover:scale-103 transition-transform duration-500 ease-out"
                  />
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 9: REVIEWS / TRAVELLER STORIES (Identical to Home Page) */}
      <TravellerStories />

      {/* SECTION 10: FINAL CTA BANNER (Recreated matching user reference) */}
      <section className="relative w-full overflow-hidden bg-[#0A2540]" aria-label="Plan your adventure">
        <div className="relative w-full min-h-[300px] sm:min-h-[340px] md:min-h-[360px] lg:min-h-[380px] flex items-center justify-center py-14 sm:py-16 md:py-20">
          {/* Panoramic Tropical Island Background Image */}
          <img
            src="/images/home-cta.jpg"
            alt="Ready to plan your next adventure?"
            className="absolute inset-0 w-full h-full object-cover object-center select-none pointer-events-none"
          />

          {/* Soft Atmospheric Center Glow for Crystal Clear Text Legibility Matching Reference */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                'radial-gradient(ellipse at center, rgba(255, 255, 255, 0.94) 0%, rgba(255, 255, 255, 0.82) 40%, rgba(240, 249, 255, 0.35) 75%, transparent 100%)',
            }}
          />

          {/* Centered CTA Content */}
          <div className="container-hs relative z-10 text-center max-w-3xl mx-auto px-4">
            <AnimatedSection>
              {/* Heading */}
              <h2 className="font-heading font-extrabold text-2xl sm:text-3xl md:text-4xl lg:text-[2.6rem] text-[#0052CC] tracking-tight leading-tight drop-shadow-xs mb-3 sm:mb-3.5">
                Ready to plan your next adventure?
              </h2>

              {/* Subtitle */}
              <p className="text-[#0A2540] text-xs sm:text-sm md:text-base font-semibold max-w-xl mx-auto leading-relaxed drop-shadow-2xs mb-7 sm:mb-8">
                Talk to our Chennai team and let's turn your travel plans into unforgettable memories.
              </p>

              {/* Dual Action Buttons */}
              <div className="flex flex-wrap items-center justify-center gap-3.5 sm:gap-4">
                {/* 1. Enquire Now Button (Blue-to-Purple Gradient Pill) */}
                <Link
                  to="/plan-holiday"
                  className="inline-flex items-center gap-2 px-7 sm:px-8 py-3.5 sm:py-4 rounded-full text-white font-bold text-xs sm:text-sm tracking-wide shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-300"
                  style={{
                    background: 'linear-gradient(90deg, #00A3FF 0%, #7928CA 100%)',
                  }}
                >
                  <span>Enquire Now</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                </Link>

                {/* 2. Chat on WhatsApp Button (Green Pill) */}
                <a
                  href={`https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent(
                    siteConfig.contact.whatsappMessage
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 px-7 sm:px-8 py-3.5 sm:py-4 rounded-full bg-[#00B562] hover:bg-[#009E54] text-white font-bold text-xs sm:text-sm tracking-wide shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-300"
                >
                  <svg className="w-4 h-4 sm:w-4.5 sm:h-4.5 fill-white" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                  </svg>
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  );
}

