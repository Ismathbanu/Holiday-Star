import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import {
  ArrowRight,
  Plane,
  Clock,
  Heart,
  Users,
  Shield,
  Headphones,
  CheckCircle2,
  Tv,
  Utensils,
  Newspaper,
  Lock,
  ChevronLeft,
  ChevronRight,
  Calendar
} from 'lucide-react';
import AnimatedSection from '../../components/common/AnimatedSection';
import { siteConfig } from '../../data/siteConfig';
import { captureUTM, getPersistedUTM } from '../../utils/utm';
import { testimonials } from '../../data/testimonials';

const formSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  phone: z.string().regex(/^[0-9+\s-]{10,15}$/, 'Enter a valid phone number'),
  city: z.string().min(2, 'Enter your city'),
  travelMonth: z.string().min(1, 'Select tentative travel month'),
  groupSize: z.string().min(1, 'Select group size'),
});

type FormData = z.infer<typeof formSchema>;

const malaysiaSights = [
  {
    name: 'Kuala Lumpur',
    desc: 'Iconic landmarks, shopping and food',
    image: 'https://images.unsplash.com/photo-1596422846543-75c6fc197f07?w=600&q=80',
  },
  {
    name: 'Genting Highlands',
    desc: 'Cooler mountains, entertainment and views',
    image: 'https://images.unsplash.com/photo-1592364395653-83e648b20cc2?w=600&q=80',
  },
  {
    name: 'Melaka',
    desc: 'History, heritage and culture',
    image: 'https://images.unsplash.com/photo-1598025362874-49e4e498e5da?w=600&q=80',
  },
  {
    name: 'Penang',
    desc: 'Colourful streets and incredible food',
    image: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=600&q=80',
  },
  {
    name: 'Langkawi',
    desc: 'Beaches, islands and relaxation',
    image: 'https://images.unsplash.com/photo-1609946860441-a51ffcf22198?w=600&q=80',
  },
];

export default function MalaysiaCampaign() {
  useEffect(() => {
    captureUTM();
  }, []);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors, isSubmitting, isSubmitSuccessful },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      groupSize: 'Couple',
    },
  });

  const selectedGroupSize = watch('groupSize');
  const [testimonialIndex, setTestimonialIndex] = useState(0);

  const handlePrevTestimonial = () => {
    setTestimonialIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleNextTestimonial = () => {
    setTestimonialIndex((prev) => (prev + 1) % testimonials.length);
  };

  const onSubmit = (data: FormData) => {
    const utm = getPersistedUTM();

    const message = `Hello Holiday Star Tours!
I'm interested in the Tourism Malaysia Outbound Campaign.
Name: ${data.name}
Phone: ${data.phone}
City: ${data.city}
Travel Month: ${data.travelMonth}
Group Size: ${data.groupSize}
${utm.utm_source ? `UTM Source: ${utm.utm_source}` : ''}`;

    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/${siteConfig.contact.whatsapp}?text=${encoded}`, '_blank');
    reset();
  };

  return (
    <>
      <Helmet>
        <title>Malaysia is Closer Than You Think | Holiday Star × Tourism Malaysia</title>
        <meta
          name="description"
          content="Official Visit Malaysia campaign by Holiday Star Tours & Travels. 10% OFF selected Malaysia tour packages from Chennai. Visa-free entry, direct flights."
        />
        <link rel="canonical" href="https://holidaystartours.com/campaigns/malaysia" />
      </Helmet>

      {/* SECTION 1: HERO */}
      <section className="relative min-h-[88vh] flex items-center pt-28 pb-16 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1596422846543-75c6fc197f07?w=1920&q=80"
            alt="Petronas Twin Towers Kuala Lumpur"
            className="w-full h-full object-cover"
          />
          {/* Dark Full-Width Gradient Overlay */}
          <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-slate-950/95 via-slate-900/80 to-slate-950/40" />
        </div>

        {/* Cursive Annotations */}
        <div className="absolute top-28 right-8 md:right-24 z-20 font-script text-3xl md:text-4xl text-white rotate-[4deg] drop-shadow-md hidden sm:block">
          Same People.<br />New Horizons ✨
        </div>
        <div className="absolute bottom-12 right-8 z-20 font-script text-3xl md:text-4xl text-amber-300 rotate-[-3deg] drop-shadow-md hidden sm:block">
          Truly Asia.<br />Truly Closer.
        </div>

        <div className="relative z-10 container-hs w-full">
          <div className="max-w-xl md:max-w-2xl text-white">
            {/* Dual Brand Logos Header */}
            <div className="flex items-center gap-3 mb-6 bg-white/10 backdrop-blur-md p-2.5 rounded-2xl border border-white/20 inline-flex shadow-xs">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-red-500 inline-block" />
                <span className="font-bold text-xs text-white tracking-tight">Tourism Malaysia • Truly Asia</span>
              </div>
              <span className="text-gray-300 font-light">×</span>
              <div className="flex items-center gap-1.5">
                <span className="font-heading font-bold text-xs text-sky-300">Holiday Star</span>
              </div>
            </div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="font-heading font-bold text-4xl sm:text-5xl md:text-6xl text-white leading-[1.12] mb-6"
            >
              Malaysia is closer<br />
              <span className="text-sky-400 font-script text-4xl sm:text-5xl md:text-6xl font-normal">than you think.</span>
            </motion.h1>

            {/* 3 Quick Badges */}
            <div className="flex flex-wrap items-center gap-3 mb-8">
              <div className="flex items-center gap-2 px-3.5 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-semibold text-white shadow-xs">
                <Plane className="w-4 h-4 text-sky-400" />
                <span>Visa-free entry</span>
              </div>
              <div className="flex items-center gap-2 px-3.5 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-semibold text-white shadow-xs">
                <Clock className="w-4 h-4 text-sky-400" />
                <span>4-hour flight from Chennai</span>
              </div>
              <div className="flex items-center gap-2 px-3.5 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-semibold text-white shadow-xs">
                <Heart className="w-4 h-4 text-sky-400" />
                <span>Curated by Holiday Star, backed by Tourism Malaysia.</span>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#enquiry-form"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#0066CC] hover:bg-[#0052A3] text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 text-sm sm:text-base cursor-pointer"
              >
                Get My Free Malaysia Itinerary
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href={`https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent('Hi Holiday Star! I want to know more about the Malaysia Campaign 10% OFF offer.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-7 py-4 bg-white/90 text-slate-900 hover:bg-white font-semibold rounded-full border border-white/50 transition-all duration-300 shadow-md text-sm sm:text-base cursor-pointer"
              >
                <svg className="w-5 h-5 fill-current text-emerald-600" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                </svg>
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: EXCLUSIVE CAMPAIGN OFFER BANNER */}
      <section className="py-8 bg-amber-50/80 border-y border-amber-200/60 relative overflow-hidden">
        <div className="container-hs">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 relative z-10">
            <div className="flex items-center gap-5">
              {/* Red Hibiscus Graphic Icon */}
              <div className="w-14 h-14 rounded-2xl bg-red-600 text-white flex items-center justify-center font-bold text-2xl shrink-0 shadow-md">
                🌺
              </div>
              <div>
                <span className="text-[0.7rem] font-bold text-red-600 uppercase tracking-widest block mb-0.5">
                  EXCLUSIVE CAMPAIGN OFFER
                </span>
                <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-hs-navy">
                  10% OFF <span className="font-normal text-base sm:text-xl text-hs-navy">selected Malaysia holiday packages</span>
                </h3>
                <p className="text-xs text-hs-text-secondary mt-0.5">
                  Valid for enquiries made through this page. October – November 2026.
                </p>
              </div>
            </div>

            {/* Circular Stamp Graphic */}
            <div className="w-20 h-20 rounded-full border-2 border-dashed border-hs-navy/30 p-1 flex items-center justify-center text-center rotate-12 bg-white/40 shrink-0 hidden md:flex">
              <span className="text-[0.55rem] font-bold uppercase tracking-widest text-hs-navy leading-tight">
                TRAVEL<br />EXPLORE<br />DISCOVER<br />REPEAT
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: EXPERIENCE THE MANY SIDES OF MALAYSIA */}
      <section className="py-20 bg-hs-cream border-b border-gray-100" aria-label="Sights">
        <div className="container-hs">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
            <div>
              <h2 className="font-heading font-bold text-3xl sm:text-4xl text-hs-navy mb-2">
                Experience the many sides of Malaysia
              </h2>
              <p className="text-hs-text-secondary text-sm sm:text-base max-w-2xl font-light">
                From vibrant cities to cool highlands, heritage towns and tropical islands — Malaysia gives you a new experience at every turn.
              </p>
            </div>
            <div className="font-script text-3xl text-hs-blue-600 rotate-[-3deg] shrink-0 hidden md:block">
              One Country. Many Experiences.
            </div>
          </div>

          {/* 5 Vertical Sights Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {malaysiaSights.map((sight, i) => (
              <AnimatedSection key={i} delay={i * 0.06}>
                <div className="group relative block h-[380px] rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 border border-gray-100">
                  <img
                    src={sight.image}
                    alt={sight.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent" />

                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white flex flex-col justify-between h-full">
                    <div />
                    <div>
                      <h3 className="font-heading font-bold text-xl text-white mb-1">
                        {sight.name}
                      </h3>
                      <p className="text-white/80 text-xs font-light leading-snug line-clamp-2 mb-3">
                        {sight.desc}
                      </p>
                      <div className="flex justify-end pt-1">
                        <div className="w-7 h-7 rounded-full bg-white/20 backdrop-blur-md group-hover:bg-hs-blue-600 flex items-center justify-center text-white transition-colors duration-300 shadow-sm">
                          <ArrowRight className="w-3.5 h-3.5" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: AS SEEN AT / MEDIA STRIP */}
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="container-hs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-4">
              <h3 className="font-heading font-bold text-2xl text-hs-navy mb-1">
                As seen at
              </h3>
              <p className="text-xs text-hs-text-muted">
                Our Malaysia campaign is reaching travellers across Chennai and beyond.
              </p>
            </div>

            <div className="lg:col-span-6 grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div className="p-3 rounded-xl bg-hs-cream border border-gray-100 text-center">
                <Tv className="w-5 h-5 text-hs-blue-600 mx-auto mb-1" />
                <span className="font-bold text-xs text-hs-navy block">PVR Escape</span>
                <span className="text-[0.65rem] text-hs-text-muted block">Express Avenue</span>
              </div>
              <div className="p-3 rounded-xl bg-hs-cream border border-gray-100 text-center">
                <Utensils className="w-5 h-5 text-hs-blue-600 mx-auto mb-1" />
                <span className="font-bold text-xs text-hs-navy block">Smoke Hub</span>
                <span className="text-[0.65rem] text-hs-text-muted block">Chennai & Madurai</span>
              </div>
              <div className="p-3 rounded-xl bg-hs-cream border border-gray-100 text-center">
                <Newspaper className="w-5 h-5 text-hs-blue-600 mx-auto mb-1" />
                <span className="font-bold text-xs text-hs-navy block">Newspaper</span>
                <span className="text-[0.65rem] text-hs-text-muted block">Local Edition</span>
              </div>
              <div className="p-3 rounded-xl bg-hs-cream border border-gray-100 text-center">
                <svg className="w-5 h-5 fill-hs-blue-600 mx-auto mb-1" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                <span className="font-bold text-xs text-hs-navy block">Instagram</span>
                <span className="text-[0.65rem] text-hs-text-muted block">Featured Reels</span>
              </div>
            </div>

            <div className="lg:col-span-2 font-script text-2xl text-hs-green rotate-[4deg] text-center lg:text-right">
              Spreading the Travel Love 💚
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: CAMPAIGN FORM & REVIEWS SPLIT */}
      <section id="enquiry-form" className="py-20 bg-hs-cream border-b border-gray-100">
        <div className="container-hs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
            {/* Left Image & Review Card */}
            <div className="lg:col-span-5 relative rounded-3xl overflow-hidden shadow-xl border border-gray-100 flex flex-col justify-between p-6 sm:p-8 min-h-[480px]">
              <img
                src="/images/hero_bg.png"
                alt="Karst bay landscape"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-black/30" />

              <div className="relative z-10 font-script text-3xl sm:text-4xl text-white rotate-[-3deg] drop-shadow-md leading-tight">
                Better Holidays.<br />Happier People.
              </div>

              {/* Review Card Overlay with Navigation Arrows */}
              <div className="relative z-10 mt-auto flex items-center gap-2">
                <button
                  type="button"
                  onClick={handlePrevTestimonial}
                  aria-label="Previous review"
                  className="w-8 h-8 rounded-full bg-white/90 hover:bg-white text-hs-navy shadow-md flex items-center justify-center flex-shrink-0 transition-transform active:scale-95 cursor-pointer"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>

                <div className="flex-1 bg-white/95 backdrop-blur-md p-4 sm:p-5 rounded-2xl shadow-xl border border-white/20">
                  <div className="flex items-center gap-3 mb-2.5">
                    <img
                      src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&q=80"
                      alt={testimonials[testimonialIndex]?.name || 'Traveller'}
                      className="w-11 h-11 rounded-full object-cover border-2 border-[#0066CC]"
                    />
                    <div className="min-w-0 flex-1">
                      <h4 className="font-heading font-bold text-hs-navy text-sm truncate">
                        {testimonials[testimonialIndex]?.name || 'Boovisha Rajan'}
                      </h4>
                      <p className="text-[0.65rem] text-hs-text-muted">
                        Malaysia Traveller
                      </p>
                    </div>
                    <div className="text-amber-400 font-bold text-xs flex items-center gap-0.5 flex-shrink-0">
                      ★★★★★
                    </div>
                  </div>
                  <p className="text-xs text-hs-text-secondary leading-relaxed italic line-clamp-3">
                    "{testimonials[testimonialIndex]?.quote || 'If you are planning an international trip you can blindly choose Holiday Star. They organised everything — airport pickup, stay, city tours — and I had plenty of time to enjoy each place.'}"
                  </p>
                </div>

                <button
                  type="button"
                  onClick={handleNextTestimonial}
                  aria-label="Next review"
                  className="w-8 h-8 rounded-full bg-white/90 hover:bg-white text-hs-navy shadow-md flex items-center justify-center flex-shrink-0 transition-transform active:scale-95 cursor-pointer"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Right Campaign Form Card - Matching Reference Image */}
            <div className="lg:col-span-7 bg-[#F0F6FC] p-8 sm:p-10 rounded-3xl shadow-lg border border-blue-100 flex flex-col justify-between relative overflow-hidden">
              {/* Palm Leaf Graphic Top Right */}
              <div className="absolute -top-4 -right-4 w-36 h-36 text-emerald-600/30 pointer-events-none hidden sm:block">
                <svg viewBox="0 0 100 100" className="w-full h-full fill-current">
                  <path d="M100 0 C80 20 60 40 40 50 C20 60 10 80 0 100 C20 80 40 60 50 40 C60 20 80 10 100 0 Z" opacity="0.4" />
                  <path d="M100 0 C70 30 50 60 30 80 C15 90 0 100 0 100 C20 85 40 70 60 50 C80 30 95 15 100 0 Z" />
                </svg>
              </div>

              <div>
                <h3 className="font-heading font-bold text-2xl sm:text-3xl text-hs-navy mb-2 leading-tight">
                  Tell us about your<br />Malaysia holiday.
                </h3>
                <p className="text-xs text-hs-text-secondary mb-6 font-light">
                  Fill in your details and we'll get back to you with a customised itinerary. No spam. No obligation.
                </p>

                {isSubmitSuccessful ? (
                  <div className="p-6 rounded-2xl bg-hs-green-accent text-center border border-hs-green/30">
                    <CheckCircle2 className="w-12 h-12 text-hs-green mx-auto mb-2" />
                    <h4 className="font-bold text-lg text-hs-navy mb-1">Enquiry Sent Successfully!</h4>
                    <p className="text-xs text-hs-text-secondary">
                      Opening WhatsApp to connect you directly with our travel expert...
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-hs-navy mb-1.5">
                          Name *
                        </label>
                        <input
                          {...register('name')}
                          type="text"
                          placeholder="Your Name"
                          className="w-[100%] px-4 py-3 rounded-xl border border-blue-200/80 text-sm focus:outline-none focus:border-[#0066CC] focus:ring-2 focus:ring-[#0066CC]/20 bg-white shadow-2xs text-hs-navy placeholder:text-gray-400"
                        />
                        {errors.name && <span className="text-[0.65rem] text-red-500 mt-1 block">{errors.name.message}</span>}
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-hs-navy mb-1.5">
                          WhatsApp Number *
                        </label>
                        <input
                          {...register('phone')}
                          type="tel"
                          placeholder="+91 Phone Number"
                          className="w-[100%] px-4 py-3 rounded-xl border border-blue-200/80 text-sm focus:outline-none focus:border-[#0066CC] focus:ring-2 focus:ring-[#0066CC]/20 bg-white shadow-2xs text-hs-navy placeholder:text-gray-400"
                        />
                        {errors.phone && <span className="text-[0.65rem] text-red-500 mt-1 block">{errors.phone.message}</span>}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-hs-navy mb-1.5">
                          City *
                        </label>
                        <input
                          {...register('city')}
                          type="text"
                          placeholder="e.g. Chennai"
                          className="w-[100%] px-4 py-3 rounded-xl border border-blue-200/80 text-sm focus:outline-none focus:border-[#0066CC] focus:ring-2 focus:ring-[#0066CC]/20 bg-white shadow-2xs text-hs-navy placeholder:text-gray-400"
                        />
                        {errors.city && <span className="text-[0.65rem] text-red-500 mt-1 block">{errors.city.message}</span>}
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-hs-navy mb-1.5">
                          Preferred Travel Month
                        </label>
                        <div className="relative">
                          <input
                            {...register('travelMonth')}
                            type="text"
                            placeholder="Select Month"
                            className="w-[100%] px-4 py-3 pr-10 rounded-xl border border-blue-200/80 text-sm focus:outline-none focus:border-[#0066CC] focus:ring-2 focus:ring-[#0066CC]/20 bg-white shadow-2xs text-hs-navy placeholder:text-gray-400"
                          />
                          <div className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">
                            <Calendar className="w-4 h-4 text-gray-400" />
                          </div>
                        </div>
                        {errors.travelMonth && <span className="text-[0.65rem] text-red-500 mt-1 block">{errors.travelMonth.message}</span>}
                      </div>
                    </div>

                    {/* Group Size Radio Buttons */}
                    <div>
                      <label className="block text-xs font-semibold text-hs-navy mb-2.5">
                        Group Size *
                      </label>
                      <div className="flex flex-wrap items-center gap-6 pt-0.5">
                        {['Solo', 'Couple', 'Family', 'Group'].map((size) => {
                          const isSelected = selectedGroupSize === size;
                          return (
                            <label
                              key={size}
                              className="inline-flex items-center gap-2 cursor-pointer group select-none"
                            >
                              <input
                                type="radio"
                                value={size}
                                checked={isSelected}
                                onChange={() => setValue('groupSize', size)}
                                className="sr-only"
                              />
                              <div
                                className={`w-4 h-4 rounded-full border flex items-center justify-center transition-all duration-200 ${
                                  isSelected
                                    ? 'border-[#0066CC] bg-white ring-2 ring-[#0066CC]/20'
                                    : 'border-gray-300 bg-white group-hover:border-[#0066CC]'
                                }`}
                              >
                                {isSelected && (
                                  <span className="w-2 h-2 rounded-full bg-[#0066CC]" />
                                )}
                              </div>
                              <span
                                className={`text-xs font-medium transition-colors ${
                                  isSelected
                                    ? 'text-[#0066CC] font-semibold'
                                    : 'text-hs-navy group-hover:text-[#0066CC]'
                                }`}
                              >
                                {size}
                              </span>
                            </label>
                          );
                        })}
                      </div>
                      {errors.groupSize && (
                        <span className="text-[0.65rem] text-red-500 mt-1 block">
                          {errors.groupSize.message}
                        </span>
                      )}
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-[100%] py-3.5 sm:py-4 px-6 bg-[#0066CC] hover:bg-[#0052A3] text-white font-bold text-sm sm:text-base rounded-xl transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5 flex items-center justify-center gap-2.5 mt-5 cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <span>Sending...</span>
                      ) : (
                        <>
                          <span>Get My Free Malaysia Itinerary</span>
                          <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 stroke-[2.5]" />
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>

              <div className="flex items-center justify-center gap-2 text-[0.7rem] text-hs-text-muted mt-5 pt-3 border-t border-blue-100">
                <Lock className="w-3.5 h-3.5 text-[#0066CC]" />
                <span>We'll respond within 24 hours. No spam. No obligation.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: WHY TRAVEL WITH HOLIDAY STAR? */}
      <section className="py-20 bg-white border-b border-gray-100">
        <div className="container-hs">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="font-heading font-bold text-3xl sm:text-4xl text-hs-navy">
              Why travel with Holiday Star?
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Plane,
                title: 'Curated Itineraries',
                desc: 'Thoughtfully planned Malaysia holidays.',
              },
              {
                icon: Users,
                title: 'Chennai-Based Team',
                desc: 'A team that understands Tamil Nadu travellers.',
              },
              {
                icon: Shield,
                title: 'Trusted Partnership',
                desc: 'Official campaign partner for Visit Malaysia 2026–2027.',
              },
              {
                icon: Headphones,
                title: 'End-to-End Support',
                desc: 'From planning to your return journey.',
              },
            ].map((item, i) => (
              <AnimatedSection key={i} delay={i * 0.08}>
                <div className="p-6 rounded-2xl bg-hs-cream border border-gray-100 text-center h-full flex flex-col items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-hs-blue-50 border border-hs-blue-100 flex items-center justify-center text-hs-blue-600 mb-4">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-heading font-bold text-base text-hs-navy mb-1">
                    {item.title}
                  </h3>
                  <p className="text-xs text-hs-text-muted font-light">
                    {item.desc}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 7: FINAL CTA BANNER */}
      <section className="relative overflow-hidden py-24 md:py-32 w-full">
        <div className="absolute inset-0">
          <img
            src="/images/hero_bg.png"
            alt="Malaysia longtail boat beach"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-hs-navy/95 via-hs-blue-600/90 to-hs-navy/95" />
        </div>

        <div className="absolute top-10 left-8 font-script text-3xl md:text-4xl text-white rotate-[-4deg] hidden sm:block">
          Closer Journeys.<br />Brighter Stories.
        </div>

        <div className="relative z-10 container-hs text-center text-white">
          <AnimatedSection className="max-w-2xl mx-auto">
            <h2 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl mb-4">
              Your next holiday could be<br />just a few hours away.
            </h2>
            <p className="text-white/90 text-base sm:text-lg mb-8 font-light">
              Malaysia is waiting. Let's plan it together.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href="#enquiry-form"
                className="inline-flex items-center gap-2 px-8 py-4 bg-hs-blue-600 text-white font-semibold rounded-full hover:bg-white hover:text-hs-navy transition-all duration-300 shadow-xl text-sm sm:text-base"
              >
                Get My Free Itinerary
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href={`https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent('Hi Holiday Star! I want to book a Malaysia Holiday package.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-8 py-4 bg-white text-hs-navy font-semibold rounded-full border border-white hover:bg-hs-green-accent hover:text-hs-green transition-all duration-300 shadow-md text-sm sm:text-base"
              >
                <svg className="w-5 h-5 fill-current text-hs-green" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                </svg>
                WhatsApp Us
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
