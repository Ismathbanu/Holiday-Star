import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowRight,
  CheckCircle2,
  Calendar,
  MapPin,
  Trophy,
  Headphones,
  Plane,
  Flame,
  Sparkles,
  X,
  MessageCircle,
} from 'lucide-react';
import AnimatedSection from '../../components/common/AnimatedSection';
import { siteConfig } from '../../data/siteConfig';
import { pastSportsExperiences } from '../../data/sportsExperiences';

export default function SportsTourism() {
  const [showUpcomingModal, setShowUpcomingModal] = useState(false);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <Helmet>
        <title>Sports Tourism — Live the Sport & Experience the World | Holiday Star Tours & Travels</title>
        <meta
          name="description"
          content="From international cycling tours to world-class motorsport experiences, Holiday Star creates thoughtfully planned sports travel experiences around major sporting events."
        />
        <link rel="canonical" href="https://holidaystartours.com/sports-tourism" />
      </Helmet>

      {/* ── SECTION 1: SPORTS TOURISM HERO ── */}
      <section className="relative overflow-hidden bg-[#051329] text-white min-h-[600px] sm:min-h-[640px] lg:min-h-[700px] xl:min-h-[740px] flex items-center pt-32 pb-20 sm:pt-36 sm:pb-24 lg:pt-40 lg:pb-28">
        {/* Full-Width Panoramic Sports Hero Background Image */}
        <div className="absolute inset-0 z-0 select-none pointer-events-none">
          <img
            src="/images/sports-herobg.jpg"
            alt="Sports Tourism Experiences - Road cycling and MotoGP racing with Kuala Lumpur skyline"
            className="w-full h-full object-cover object-[75%_center] sm:object-[70%_center] md:object-center select-none"
            loading="eager"
            fetchPriority="high"
          />
          {/* Subtle Left Gradient overlay ensuring seamless blend with typography */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#051329]/90 via-[#051329]/60 md:via-transparent to-transparent w-full md:w-3/5 pointer-events-none" />
          {/* Subtle top shadow for transparent navbar text contrast */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-transparent to-transparent h-32 pointer-events-none" />
          {/* Bottom shadow blend */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#051329] via-transparent to-transparent h-28 mt-auto pointer-events-none" />
          {/* Mobile backdrop for enhanced readability on narrow screens */}
          <div className="md:hidden absolute inset-0 bg-[#051329]/50 backdrop-blur-[0.5px] pointer-events-none" />
        </div>

        <div className="container-hs relative z-10 w-full">
          <div className="max-w-xl lg:max-w-2xl text-center md:text-left">
            {/* Breadcrumbs inside hero */}
            <div className="flex items-center justify-center md:justify-start gap-2 text-xs text-white/75 mb-5 font-medium drop-shadow-sm">
              <Link to="/" className="hover:text-white transition-colors">
                Home
              </Link>
              <span className="text-white/40">&gt;</span>
              <span className="font-semibold text-[#00E5FF]">Sports Tourism</span>
            </div>

            <AnimatedSection direction="up">
              {/* Eyebrow badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] sm:text-xs font-bold uppercase tracking-[0.22em] text-[#00E5FF] bg-[#00E5FF]/10 border border-[#00E5FF]/30 backdrop-blur-md mb-3 shadow-xs">
                <span className="w-2 h-2 rounded-full bg-[#00D084] animate-pulse" />
                <span>SPORTS TOURISM EXPERIENCES</span>
              </div>

              {/* Main Heading with Script Accent */}
              <h1 className="font-heading font-black text-4xl sm:text-5xl md:text-6xl lg:text-[4.2rem] leading-[1.04] tracking-tight text-white mb-2 drop-shadow-[0_2px_12px_rgba(0,0,0,0.8)]">
                SPORTS TOURISM
              </h1>
              <div className="font-heading font-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#00D084] tracking-tight mb-5 select-none drop-shadow-[0_2px_12px_rgba(0,0,0,0.7)] uppercase">
                Experiences
              </div>

              {/* Supporting Text */}
              <p className="text-[#F1F5F9] text-sm sm:text-base md:text-lg leading-relaxed font-normal max-w-lg mx-auto md:mx-0 mb-8 sm:mb-9 text-balance drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
                From international cycling tours to world-class motorsport experiences, Holiday
                Star creates thoughtfully planned sports travel experiences around major sporting
                events.
              </p>

              {/* Dual Action CTAs */}
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-4">
                <button
                  onClick={() => scrollToSection('past-experiences')}
                  className="inline-flex items-center gap-2.5 px-7 sm:px-8 py-3.5 sm:py-4 rounded-full text-white font-bold text-xs sm:text-sm tracking-wide shadow-lg hover:shadow-cyan-500/25 hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer"
                  style={{
                    background: 'linear-gradient(90deg, #0066CC 0%, #00B4D8 100%)',
                    boxShadow: '0 4px 15px rgba(0, 180, 216, 0.35)',
                  }}
                >
                  <span>Explore Sports Experiences</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <Link
                  to="/plan-holiday"
                  className="inline-flex items-center gap-2 px-6 sm:px-7 py-3.5 sm:py-4 rounded-full bg-white/10 hover:bg-white text-white hover:text-[#0A2540] border border-white/25 backdrop-blur-md font-semibold text-xs sm:text-sm transition-all duration-300 shadow-md hover:scale-105 cursor-pointer"
                >
                  <span>Enquire Now</span>
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ── SECTION 2: TRUST / BENEFITS STRIP (Styled exactly like About Us Trust Section) ── */}
      <section className="relative py-6 sm:py-7 bg-gradient-to-r from-[#013f4a] via-[#071f3a] to-[#251648] text-white border-y border-white/10 shadow-md overflow-hidden">
        {/* Subtle background glow effects matching About Us page */}
        <div className="absolute top-0 left-0 w-80 h-full bg-[#00E5BE]/5 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-80 h-full bg-[#A855F7]/10 blur-3xl pointer-events-none" />

        {/* Global SVG Gradients for Icon Strokes matching About Us page */}
        <svg width="0" height="0" className="absolute pointer-events-none">
          <defs>
            <linearGradient id="sports-trust-grad-1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#2DD4BF" />
              <stop offset="100%" stopColor="#06B6D4" />
            </linearGradient>
            <linearGradient id="sports-trust-grad-2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#22D3EE" />
              <stop offset="100%" stopColor="#6366F1" />
            </linearGradient>
            <linearGradient id="sports-trust-grad-3" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#38BDF8" />
              <stop offset="100%" stopColor="#C084FC" />
            </linearGradient>
            <linearGradient id="sports-trust-grad-4" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#60A5FA" />
              <stop offset="100%" stopColor="#A855F7" />
            </linearGradient>
            <linearGradient id="sports-trust-grad-5" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#34D399" />
              <stop offset="100%" stopColor="#38BDF8" />
            </linearGradient>
          </defs>
        </svg>

        <div className="container-hs relative z-10">
          <AnimatedSection>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 lg:gap-6 items-center">
              {[
                { icon: Trophy, title: 'Curated Experiences', grad: 'url(#sports-trust-grad-1)' },
                { icon: Headphones, title: 'Expert Support', grad: 'url(#sports-trust-grad-2)' },
                { icon: Plane, title: 'Hassle-Free Travel', grad: 'url(#sports-trust-grad-3)' },
                { icon: Flame, title: 'Passion for Sports', grad: 'url(#sports-trust-grad-4)' },
                { icon: Sparkles, title: 'Memorable Journeys', grad: 'url(#sports-trust-grad-5)' },
              ].map((item, i) => (
                <div
                  key={i}
                  className={`flex items-center justify-center sm:justify-start gap-3 group ${
                    i === 4 ? 'col-span-2 sm:col-span-1' : ''
                  }`}
                >
                  <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white/10 backdrop-blur-xs border border-white/15 flex items-center justify-center shrink-0 shadow-inner group-hover:scale-105 transition-transform duration-300">
                    <item.icon
                      className="w-5 h-5 sm:w-5.5 sm:h-5.5"
                      style={{ stroke: item.grad, strokeWidth: 2 }}
                    />
                  </div>
                  <span className="text-xs sm:text-sm font-semibold text-slate-100 leading-snug group-hover:text-white transition-colors">
                    {item.title}
                  </span>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── SECTION 3: PAST SPORTS TOURISM EXPERIENCES ── */}
      <section
        id="past-experiences"
        className="relative py-16 sm:py-20 bg-gradient-to-b from-white via-[#F8FBFF] to-white overflow-hidden"
      >
        {/* Subtle Decorative Tropical Botanical Background (matching About page styling) */}
        <div className="absolute inset-0 z-0 select-none pointer-events-none opacity-40">
          <img
            src="/images/our_story_bg.jpg"
            alt="Decorative background"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white via-white/90 to-white" />
        </div>

        <div className="container-hs relative z-10">
          {/* Section Header */}
          <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
            <AnimatedSection>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#00A896] block mb-2">
                Our Sport Tourism Journey
              </span>
              <h2 className="font-heading font-black text-3xl sm:text-4xl lg:text-[2.6rem] text-[#0A2540] tracking-tight leading-tight mb-3">
                Our{' '}
                <span
                  className="inline-block text-transparent bg-clip-text drop-shadow-[0_2px_16px_rgba(0,180,216,0.35)]"
                  style={{
                    backgroundImage: 'linear-gradient(90deg, #0066CC 0%, #00B4D8 100%)',
                  }}
                >
                  Past Sport Tourism
                </span>{' '}
                Experiences
              </h2>
              <p className="text-[#64748B] text-sm sm:text-base leading-relaxed font-normal">
                These are the sports tourism experiences Holiday Star has organised.
              </p>
            </AnimatedSection>
          </div>

          {/* 6-Card Responsive Grid (3 columns on desktop, 2 on tablet, 1 on mobile) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 sm:gap-8">
            {pastSportsExperiences.map((exp, idx) => (
              <AnimatedSection key={exp.id} direction="up" delay={idx * 0.08}>
                <div className="bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-[0_8px_30px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_45px_rgba(0,102,204,0.12)] hover:-translate-y-1.5 transition-all duration-300 flex flex-col h-full group">
                  {/* Top Image Container with Status Badge */}
                  <div className="relative w-full h-48 sm:h-52 overflow-hidden bg-slate-100 shrink-0">
                    <img
                      src={exp.image}
                      alt={exp.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                    />

                    {/* Gradient Overlay on Image for clean edge */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none" />

                    {/* Past Event / Completed Badge */}
                    <div className="absolute top-3.5 left-3.5 z-10 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#00A896] text-white text-[10px] sm:text-[11px] font-bold tracking-wider uppercase shadow-md backdrop-blur-xs">
                      <CheckCircle2 className="w-3.5 h-3.5 stroke-[2.5]" />
                      <span>{exp.statusBadge}</span>
                    </div>
                  </div>

                  {/* Card Content Body */}
                  <div className="p-6 sm:p-7 flex flex-col flex-1 justify-between">
                    <div>
                      {/* Title */}
                      <h3 className="font-heading font-black text-lg sm:text-xl text-[#0A2540] tracking-tight leading-snug group-hover:text-[#0052CC] transition-colors mb-2.5">
                        {exp.title}
                      </h3>

                      {/* Category / Route */}
                      <div className="flex items-start gap-1.5 text-xs text-[#0066CC] font-semibold mb-1.5">
                        <MapPin className="w-3.5 h-3.5 text-[#00A896] shrink-0 mt-0.5" />
                        <span className="leading-snug">{exp.category}</span>
                      </div>

                      {/* Date */}
                      {exp.date && (
                        <div className="flex items-center gap-1.5 text-xs text-[#64748B] mb-3">
                          <Calendar className="w-3.5 h-3.5 text-[#64748B] shrink-0" />
                          <span>{exp.date}</span>
                        </div>
                      )}

                      {/* Tags / Experience Type Pills */}
                      <div className="flex flex-wrap items-center gap-1.5 mb-4">
                        {exp.distanceTags &&
                          exp.distanceTags.map((tag) => (
                            <span
                              key={tag}
                              className="px-2.5 py-0.5 rounded-md bg-[#EDE9FE] text-[#6D28D9] font-bold text-[11px] tracking-wide"
                            >
                              {tag}
                            </span>
                          ))}
                        {exp.experienceType && (
                          <span className="px-2.5 py-0.5 rounded-md bg-[#F0FDF4] text-[#16A34A] font-bold text-[11px] tracking-wide border border-emerald-100">
                            {exp.experienceType}
                          </span>
                        )}
                      </div>

                      {/* Experience Highlights Header */}
                      <div className="text-[11px] font-bold uppercase tracking-wider text-[#0A2540] mb-2.5">
                        Experience highlights
                      </div>

                      {/* 2-Column Highlights Checklist with Green Checkmarks */}
                      <div className="grid grid-cols-2 gap-x-2.5 gap-y-2 mb-6">
                        {exp.highlights.map((highlight, hIdx) => (
                          <div key={hIdx} className="flex items-start gap-1.5">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#00A896] shrink-0 stroke-[2.2] mt-0.5" />
                            <span className="text-[11px] sm:text-xs text-[#475569] leading-snug">
                              {highlight}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Card Footer */}
                    <div className="pt-4 border-t border-slate-100 flex items-center justify-between mt-auto">
                      <span className="text-xs font-semibold text-[#6366F1]">
                        Holiday Star Experience
                      </span>

                      <a
                        href={`https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent(
                          `Hi Holiday Star, I would like to enquire about the ${exp.title} sports tourism experience.`
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs font-bold shadow-xs hover:shadow-md hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer shrink-0"
                      >
                        <MessageCircle className="w-3.5 h-3.5 fill-white/20" />
                        <span>WhatsApp Us</span>
                      </a>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          {/* ── SECTION 4: UPCOMING SPORTS EXPERIENCES BANNER ── */}
          <AnimatedSection direction="up" className="mt-14 sm:mt-16">
            <div
              className="rounded-3xl overflow-hidden shadow-2xl relative text-white"
              style={{
                background:
                  'linear-gradient(135deg, #00A896 0%, #0066CC 45%, #6D28D9 100%)',
              }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
                {/* Left Side: Information & Button */}
                <div className="lg:col-span-6 p-7 sm:p-10 lg:p-12 text-center lg:text-left z-10">
                  <div className="flex flex-col lg:flex-row items-center lg:items-start gap-5 mb-5">
                    {/* Calendar Badge */}
                    <div className="w-14 h-14 rounded-2xl bg-white/15 backdrop-blur-md flex items-center justify-center border border-white/25 shrink-0 shadow-lg">
                      <Calendar className="w-7 h-7 text-white" />
                    </div>

                    <div>
                      <h3 className="font-heading font-black text-2xl sm:text-3xl text-white tracking-tight leading-snug mb-2">
                        Upcoming Sports Experiences
                      </h3>
                      <p className="text-white/85 text-xs sm:text-sm md:text-base font-normal max-w-md">
                        Exciting sports events are on the horizon. Stay tuned for our upcoming
                        packages.
                      </p>
                    </div>
                  </div>

                  <button
                    onClick={() => setShowUpcomingModal(true)}
                    className="inline-flex items-center gap-2 px-6 sm:px-7 py-3 rounded-full bg-white text-[#0A2540] hover:bg-[#F0F9FF] font-bold text-xs sm:text-sm tracking-wide shadow-md hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-300"
                  >
                    <span>View Upcoming Experiences</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>

                {/* Right Side: Sports Photography Collage */}
                <div className="lg:col-span-6 relative w-full h-56 sm:h-64 lg:h-full min-h-[240px] self-stretch overflow-hidden">
                  <img
                    src="/images/sports/sports_upcoming_banner.jpg"
                    alt="Upcoming Sports Experiences: Cycling, GT racing, Football and Stadium sports"
                    className="w-full h-full object-cover object-center select-none"
                  />
                  {/* Subtle blend on left edge */}
                  <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#0066CC] via-[#0066CC]/50 to-transparent pointer-events-none hidden lg:block" />
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── SECTION 5: FINAL SPORTS TOURISM CTA ── */}
      <section className="relative py-16 sm:py-20 bg-white overflow-hidden" aria-label="Plan sports adventure">
        {/* Soft Center Atmosphere */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse at center, rgba(240, 249, 255, 0.8) 0%, rgba(255, 255, 255, 1) 75%)',
          }}
        />

        <div className="container-hs relative z-10 text-center max-w-3xl mx-auto px-4">
          <AnimatedSection>
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#00A896] block mb-2">
              Ready to be part of the action?
            </span>

            {/* Heading */}
            <h2 className="font-heading font-black text-2xl sm:text-3xl md:text-4xl text-[#0A2540] tracking-tight leading-tight mb-3">
              Let's Plan Your{' '}
              <span className="text-[#0052CC]">Next Sports Adventure</span>
            </h2>

            {/* Supporting Text */}
            <p className="text-[#475569] text-xs sm:text-sm md:text-base font-medium max-w-xl mx-auto leading-relaxed mb-8">
              Join us for world-class sporting events and create memories that last a lifetime.
            </p>

            {/* Dual CTA Buttons matching reference exactly */}
            <div className="flex flex-wrap items-center justify-center gap-3.5 sm:gap-4">
              {/* Enquire Now Button (Green/Teal Pill) */}
              <Link
                to="/plan-holiday"
                className="inline-flex items-center gap-2 px-7 sm:px-8 py-3.5 sm:py-4 rounded-full bg-[#00A896] hover:bg-[#008f80] text-white font-bold text-xs sm:text-sm tracking-wide shadow-lg hover:shadow-emerald-500/25 hover:scale-105 active:scale-95 transition-all duration-300"
              >
                <span>Enquire Now</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              {/* WhatsApp Button */}
              <a
                href={`https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent(
                  'Hi Holiday Star, I am interested in your Sports Tourism packages and upcoming sports travel experiences.'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-7 sm:px-8 py-3.5 sm:py-4 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-xs sm:text-sm tracking-wide shadow-lg hover:shadow-emerald-500/25 hover:scale-105 active:scale-95 transition-all duration-300"
              >
                <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                </svg>
                <span>WhatsApp Us</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>


      {/* ── UPCOMING EXPERIENCES MODAL ── */}
      <AnimatePresence>
        {showUpcomingModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.25 }}
              className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-slate-100 text-center relative"
            >
              <button
                onClick={() => setShowUpcomingModal(false)}
                className="absolute top-4 right-4 w-8 h-8 rounded-full bg-slate-100 text-slate-600 hover:bg-slate-200 flex items-center justify-center transition-colors"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="w-16 h-16 rounded-full bg-sky-50 text-[#0066CC] mx-auto flex items-center justify-center mb-4">
                <Calendar className="w-8 h-8" />
              </div>

              <h3 className="font-heading font-black text-2xl text-[#0A2540] mb-2">
                Upcoming Sports Experiences
              </h3>
              <p className="text-sm text-[#64748B] leading-relaxed mb-6">
                We are actively curating exciting new sports itineraries including the 2026 MotoGP,
                LEKAS Night Ride, and premier European football travel packages. Register your interest
                early to get VIP access!
              </p>

              <div className="flex flex-col gap-3">
                <a
                  href={`https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent(
                    'Hi Holiday Star, please notify me when new sports tourism packages and MotoGP/Cycling packages are announced!'
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 rounded-full bg-[#00A896] hover:bg-[#008f80] text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg transition-all hover:scale-102"
                >
                  <span>Notify Me on WhatsApp</span>
                  <ArrowRight className="w-4 h-4" />
                </a>

                <Link
                  to="/contact"
                  className="w-full py-3 rounded-full bg-slate-100 hover:bg-slate-200 text-[#0A2540] font-semibold text-xs sm:text-sm transition-colors"
                >
                  Contact Chennai Office
                </Link>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
