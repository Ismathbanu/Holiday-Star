import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import {
  ArrowRight,
  MessageCircle,
  CheckCircle,
  User,
  Phone,
  MapPin,
  Plane,
  Calendar,
  Users,
  MessageSquare,
  Clock,
  Compass,
  Heart,
  Mail,
  Headset,
  ChevronDown
} from 'lucide-react';
import AnimatedSection from '../../components/common/AnimatedSection';
import { siteConfig } from '../../data/siteConfig';
import { destinations } from '../../data/destinations';

const schema = z.object({
  name: z.string().min(2, 'Please enter your full name'),
  whatsapp: z.string().min(10, 'Please enter a valid WhatsApp number'),
  city: z.string().min(2, 'Please enter your city'),
  destination: z.string().min(1, 'Please select a destination'),
  travelMonth: z.string().min(1, 'Please select a travel month'),
  travellers: z.string().min(1, 'Please select number of travellers'),
  notes: z.string().optional(),
});

type FormData = z.infer<typeof schema>;

const months = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December', 'Flexible'
];

export default function PlanHoliday() {
  const [submitted, setSubmitted] = useState(false);
  const [selectedTravellers, setSelectedTravellers] = useState('Solo');

  const { register, handleSubmit, setValue, formState: { errors, isSubmitting } } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      travellers: 'Solo',
    }
  });

  const onSubmit = async (data: FormData) => {
    console.log('Enquiry submitted:', data);
    setSubmitted(true);
  };

  const handleTravellerSelect = (val: string) => {
    setSelectedTravellers(val);
    setValue('travellers', val, { shouldValidate: true });
  };

  return (
    <>
      <Helmet>
        <title>Plan My Holiday | Holiday Star Tours & Travels</title>
        <meta
          name="description"
          content="Tell us your travel plans and our travel experts will help you create a customized itinerary from Chennai. Tailor-made holidays made simple."
        />
        <link rel="canonical" href="https://holidaystartours.com/plan-holiday" />
      </Helmet>

      {/* ── HERO SECTION ── */}
      <section className="relative min-h-[580px] lg:min-h-[660px] flex items-center pt-28 pb-16 sm:pt-32 sm:pb-16 lg:pt-36 lg:pb-20 overflow-hidden bg-[#0A121A]">
        {/* Full-width Background Image */}
        <div className="absolute inset-0 z-0 select-none pointer-events-none">
          <img
            src="/images/aboutus-hero.jpg"
            alt="Misty lake with waterfall, floating luxury chalets, and illuminated Petronas Towers at sunrise - Holiday Star Tours"
            className="w-full h-full object-cover object-center"
            loading="eager"
            fetchPriority="high"
          />
          {/* Directional contrast gradient: ensures crisp readability for text on the left */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/55 lg:via-black/35 to-transparent pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30 pointer-events-none" />
          {/* Mobile-only backdrop for extra readability on narrow screens */}
          <div className="lg:hidden absolute inset-0 bg-black/40 backdrop-blur-[1px] pointer-events-none" />
        </div>

        <div className="relative z-10 container-hs w-full">
          <div className="max-w-xl lg:max-w-2xl">
            {/* Inline Breadcrumb Navigation */}
            <div className="flex items-center gap-2 text-xs text-slate-300/80 mb-4">
              <Link to="/" className="hover:text-amber-300 transition-colors">Home</Link>
              <span>/</span>
              <span className="text-white font-medium">Plan My Holiday</span>
            </div>

            {/* Eyebrow Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-emerald-300 bg-emerald-950/70 border border-emerald-500/30 backdrop-blur-md mb-4 shadow-sm w-fit">
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
              PLAN YOUR HOLIDAY
            </div>

            {/* Main Headline matching About Us style */}
            <h1 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-[44px] xl:text-[50px] leading-[1.14] mb-4 sm:mb-5 tracking-tight">
              <span className="text-white block drop-shadow-[0_2px_12px_rgba(0,0,0,0.8)]">
                Travel planned with
              </span>
              <span
                className="inline-block text-transparent bg-clip-text drop-shadow-[0_2px_16px_rgba(251,191,36,0.35)]"
                style={{
                  backgroundImage: 'linear-gradient(90deg, #FCD34D 0%, #F59E0B 50%, #FB7185 100%)',
                }}
              >
                people,
              </span>{' '}
              <span className="text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.8)]">
                not just bookings.
              </span>
            </h1>

            {/* Supporting Copy */}
            <p className="text-slate-200/90 text-sm sm:text-base leading-relaxed mb-6 sm:mb-8 max-w-md lg:max-w-lg font-normal drop-shadow-[0_1px_3px_rgba(0,0,0,0.8)]">
              Already know where you want to go? Or simply know that it's time for a break? Tell us a little about your plans and our Chennai travel specialists will craft your perfect tailor-made itinerary.
            </p>

            {/* 3 Feature Badges */}
            <div className="flex flex-wrap items-center gap-3">
              <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-semibold text-white shadow-xs">
                <Compass className="w-4 h-4 text-amber-300" />
                <span>Tailor-made itineraries</span>
              </div>
              <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-semibold text-white shadow-xs">
                <Users className="w-4 h-4 text-amber-300" />
                <span>Expert advice from real travellers</span>
              </div>
              <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-semibold text-white shadow-xs">
                <Heart className="w-4 h-4 text-amber-300" />
                <span>Hassle-free planning</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FORM SECTION ("YOUR DETAILS") ── */}
      <section className="py-20 bg-hs-cream border-b border-gray-100 relative overflow-hidden">
        <div className="container-hs overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start min-w-0">
            {/* Left Column: Decorative Graphics (Polaroid + Stamp) */}
            <div className="lg:col-span-4 relative flex flex-col items-center lg:items-start space-y-6">
              {/* Polaroid Frame */}
              <div className="w-64 bg-white p-3.5 rounded-2xl shadow-xl border border-gray-200 rotate-[-4deg] relative z-10">
                <div className="aspect-[4/3] rounded-xl overflow-hidden mb-3">
                  <img
                    src="https://images.unsplash.com/photo-1528181304800-259b08848526?w=600&q=80"
                    alt="Tropical limestone islands"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="font-heading font-bold text-xs uppercase tracking-wider text-[#0066CC] text-center leading-snug">
                  Same Passion<br />More Destinations
                </div>
              </div>

              {/* Stamp Watermark Graphic */}
              <div className="w-36 h-36 rounded-full border-2 border-dashed border-blue-200 flex flex-col items-center justify-center p-3 rotate-[12deg] text-[#0066CC]/50 pointer-events-none select-none bg-white/40 backdrop-blur-2xs ml-12 hidden sm:flex">
                <Plane className="w-7 h-7 mb-1 text-[#0066CC]" />
                <span className="font-heading font-bold text-[0.65rem] tracking-wider text-center leading-tight">
                  TRAVEL MORE<br />LIVE FULLER
                </span>
              </div>
            </div>

            {/* Right Column: Form Card */}
            <div className="lg:col-span-8 bg-white p-6 sm:p-10 rounded-3xl border border-gray-100 shadow-xl min-w-0 overflow-hidden">
              {submitted ? (
                <AnimatedSection>
                  <div className="text-center py-12">
                    <CheckCircle className="w-16 h-16 text-emerald-500 mx-auto mb-4 animate-bounce" />
                    <h2 className="font-heading font-bold text-3xl text-hs-navy mb-2">
                      Thank You!
                    </h2>
                    <p className="text-sm text-hs-text-secondary mb-6 font-light max-w-md mx-auto">
                      We have received your enquiry. Our travel consultant will get back to you within 24 hours with a customized itinerary.
                    </p>
                    <a
                      href={`https://wa.me/${siteConfig.contact.whatsapp}?text=Hello!%20I%20just%20submitted%20a%20holiday%20enquiry.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-7 py-3.5 bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-sm rounded-full transition-all shadow-md"
                    >
                      <MessageCircle className="w-4 h-4 fill-white" />
                      <span>Chat on WhatsApp Now</span>
                    </a>
                  </div>
                </AnimatedSection>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 min-w-0 overflow-hidden">
                  <div>
                    <h2 className="font-heading font-bold text-3xl sm:text-4xl text-hs-navy mb-1">
                      Your Details
                    </h2>
                    <p className="text-xs sm:text-sm text-hs-text-secondary font-light">
                      Tell us about your travel plans.
                    </p>
                  </div>

                  {/* Row 1: Name & WhatsApp */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 min-w-0">
                    <div className="min-w-0">
                      <label className="block text-xs font-bold text-hs-navy mb-2">
                        Name <span className="text-red-500">*</span>
                      </label>
                      <div className="relative flex items-center min-w-0">
                        <User className="w-4 h-4 text-hs-text-muted absolute left-3.5 pointer-events-none" />
                        <input
                          {...register('name')}
                          type="text"
                          placeholder="Your full name"
                          className="w-[100%] min-w-0 pl-10 pr-4 h-[46px] rounded-xl bg-hs-cream border border-gray-200 text-xs sm:text-sm text-hs-navy placeholder:text-gray-400 focus:outline-none focus:border-[#0066CC] focus:bg-white transition-colors"
                        />
                      </div>
                      {errors.name && (
                        <p className="text-red-500 text-[0.7rem] mt-1">{errors.name.message}</p>
                      )}
                    </div>

                    <div className="min-w-0">
                      <label className="block text-xs font-bold text-hs-navy mb-2">
                        WhatsApp number <span className="text-red-500">*</span>
                      </label>
                      <div className="relative flex items-center min-w-0">
                        <Phone className="w-4 h-4 text-hs-text-muted absolute left-3.5 pointer-events-none" />
                        <input
                          {...register('whatsapp')}
                          type="tel"
                          placeholder="+91 98765 43210"
                          className="w-[100%] min-w-0 pl-10 pr-4 h-[46px] rounded-xl bg-hs-cream border border-gray-200 text-xs sm:text-sm text-hs-navy placeholder:text-gray-400 focus:outline-none focus:border-[#0066CC] focus:bg-white transition-colors"
                        />
                      </div>
                      {errors.whatsapp && (
                        <p className="text-red-500 text-[0.7rem] mt-1">{errors.whatsapp.message}</p>
                      )}
                    </div>
                  </div>

                  {/* Row 2: City & Preferred Destination */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 min-w-0">
                    <div className="min-w-0">
                      <label className="block text-xs font-bold text-hs-navy mb-2">
                        City <span className="text-red-500">*</span>
                      </label>
                      <div className="relative flex items-center min-w-0">
                        <MapPin className="w-4 h-4 text-hs-text-muted absolute left-3.5 pointer-events-none" />
                        <input
                          {...register('city')}
                          type="text"
                          placeholder="Your city"
                          className="w-[100%] min-w-0 pl-10 pr-4 h-[46px] rounded-xl bg-hs-cream border border-gray-200 text-xs sm:text-sm text-hs-navy placeholder:text-gray-400 focus:outline-none focus:border-[#0066CC] focus:bg-white transition-colors"
                        />
                      </div>
                      {errors.city && (
                        <p className="text-red-500 text-[0.7rem] mt-1">{errors.city.message}</p>
                      )}
                    </div>

                    <div className="min-w-0">
                      <label className="block text-xs font-bold text-hs-navy mb-2">
                        Preferred destination <span className="text-red-500">*</span>
                      </label>
                      <div className="relative flex items-center min-w-0">
                        <Plane className="w-4 h-4 text-hs-text-muted absolute left-3.5 pointer-events-none z-10" />
                        <select
                          {...register('destination')}
                          className="w-[100%] min-w-0 pl-10 pr-8 h-[46px] rounded-xl bg-hs-cream border border-gray-200 text-xs sm:text-sm text-hs-navy focus:outline-none focus:border-[#0066CC] focus:bg-white transition-colors appearance-none cursor-pointer"
                        >
                          <option value="">Select a destination</option>
                          {destinations.map((d) => (
                            <option key={d.id} value={d.name}>{d.name}</option>
                          ))}
                          <option value="Multiple Destinations">Multiple Destinations</option>
                          <option value="Not sure yet">Not sure yet</option>
                        </select>
                        <ChevronDown className="w-4 h-4 text-hs-text-muted absolute right-3.5 pointer-events-none" />
                      </div>
                      {errors.destination && (
                        <p className="text-red-500 text-[0.7rem] mt-1">{errors.destination.message}</p>
                      )}
                    </div>
                  </div>

                  {/* Row 3: Travel Month */}
                  <div className="min-w-0">
                    <label className="block text-xs font-bold text-hs-navy mb-2">
                      Preferred travel month <span className="text-red-500">*</span>
                    </label>
                    <div className="relative flex items-center min-w-0">
                      <Calendar className="w-4 h-4 text-hs-text-muted absolute left-3.5 pointer-events-none z-10" />
                      <select
                        {...register('travelMonth')}
                        className="w-[100%] min-w-0 pl-10 pr-8 h-[46px] rounded-xl bg-hs-cream border border-gray-200 text-xs sm:text-sm text-hs-navy focus:outline-none focus:border-[#0066CC] focus:bg-white transition-colors appearance-none cursor-pointer"
                      >
                        <option value="">Select a month</option>
                        {months.map((m) => (
                          <option key={m} value={m}>{m}</option>
                        ))}
                      </select>
                      <ChevronDown className="w-4 h-4 text-hs-text-muted absolute right-3.5 pointer-events-none" />
                    </div>
                    {errors.travelMonth && (
                      <p className="text-red-500 text-[0.7rem] mt-1">{errors.travelMonth.message}</p>
                    )}
                  </div>

                  {/* Row 4: Number of travellers (Group Size) — Full Width Grid */}
                  <div className="min-w-0">
                    <label className="block text-xs font-bold text-hs-navy mb-2">
                      Number of travellers <span className="text-red-500">*</span>
                    </label>
                    <input type="hidden" {...register('travellers')} />
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 min-w-0">
                      {[
                        { id: 'Solo', label: 'Solo' },
                        { id: 'Couple', label: 'Couple' },
                        { id: 'Family', label: 'Family' },
                        { id: 'Group', label: 'Group' },
                      ].map((opt) => {
                        const isSelected = selectedTravellers === opt.id;
                        return (
                          <button
                            type="button"
                            key={opt.id}
                            onClick={() => handleTravellerSelect(opt.id)}
                            className={`h-[46px] px-3 rounded-xl border flex items-center justify-center gap-2 transition-all duration-300 text-xs font-semibold cursor-pointer ${
                              isSelected
                                ? 'border-[#0066CC] bg-blue-50/80 text-[#0066CC] shadow-2xs ring-2 ring-[#0066CC]/20'
                                : 'border-gray-200 bg-hs-cream text-hs-navy hover:border-gray-300 hover:bg-gray-50'
                            }`}
                          >
                            <div className={`w-3.5 h-3.5 rounded-full border flex items-center justify-center shrink-0 transition-colors ${
                              isSelected ? 'border-[#0066CC] bg-[#0066CC]' : 'border-gray-400 bg-white'
                            }`}>
                              {isSelected && <div className="w-1.5 h-1.5 rounded-full bg-white" />}
                            </div>
                            <span>{opt.label}</span>
                          </button>
                        );
                      })}
                    </div>
                    {errors.travellers && (
                      <p className="text-red-500 text-[0.7rem] mt-1">{errors.travellers.message}</p>
                    )}
                  </div>

                  {/* Row 5: Notes */}
                  <div className="min-w-0">
                    <label className="block text-xs font-bold text-hs-navy mb-2">
                      Anything else we should know?
                    </label>
                    <div className="relative min-w-0">
                      <MessageSquare className="w-4 h-4 text-hs-text-muted absolute left-3.5 top-3.5" />
                      <textarea
                        {...register('notes')}
                        rows={3}
                        placeholder="Share your preferences, special requests, budget or any other details..."
                        className="w-[100%] min-w-0 pl-10 pr-4 py-3 rounded-xl bg-hs-cream border border-gray-200 text-xs sm:text-sm text-hs-navy placeholder:text-gray-400 focus:outline-none focus:border-[#0066CC] focus:bg-white transition-colors resize-none"
                      />
                    </div>
                  </div>

                  {/* Row 6: Submit Buttons */}
                  <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-[100%] sm:flex-1 h-[48px] px-6 bg-[#0066CC] hover:bg-[#0052A3] text-white font-bold text-xs sm:text-sm rounded-full transition-all duration-300 shadow-md hover:shadow-lg active:scale-[0.99] flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60"
                    >
                      <span>Start Planning</span>
                      <ArrowRight className="w-4 h-4 shrink-0" />
                    </button>
                    <a
                      href={`https://wa.me/${siteConfig.contact.whatsapp}?text=Hello!%20I'm%20looking%20to%20plan%20a%20holiday.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-[100%] sm:flex-1 h-[48px] px-6 bg-white hover:bg-emerald-50 text-slate-800 font-semibold text-xs sm:text-sm rounded-full border border-emerald-500/80 transition-all duration-300 shadow-2xs hover:shadow-md flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <MessageCircle className="w-4 h-4 text-emerald-600 fill-emerald-600 shrink-0" />
                      <span>Chat on WhatsApp</span>
                    </a>
                  </div>

                  {/* Guarantee Note */}
                  <p className="text-[0.725rem] text-hs-text-muted font-light text-center flex items-center justify-center gap-1.5 pt-2">
                    <Clock className="w-3.5 h-3.5 text-hs-navy shrink-0" />
                    <span>We'll respond within 24 hours. No spam. No obligation.</span>
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ── PREFER TO SPEAK WITH US? SECTION ── */}
      <section className="py-20 bg-hs-cream border-b border-gray-100 relative overflow-hidden">
        <div className="container-hs overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Content Box */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-[0.2em] text-[#0066CC] bg-blue-50 border border-blue-200/80">
                <Headset className="w-3.5 h-3.5 text-[#0066CC]" />
                <span>DIRECT CONSULTATION</span>
              </div>

              <div>
                <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-hs-navy mb-3 leading-tight">
                  Prefer to speak<br />with our travel experts?
                </h2>
                <div className="w-16 h-1 bg-emerald-500 rounded-full mb-4" />
                <p className="text-sm text-hs-text-secondary font-light max-w-lg leading-relaxed">
                  Skip the form and reach out directly. Our Chennai-based holiday specialists are ready to answer your questions, recommend handpicked destinations, and craft a bespoke itinerary tailored to your rhythm.
                </p>
              </div>

              {/* 3 Value Points */}
              <div className="space-y-3 pt-2">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 border border-emerald-100">
                    <CheckCircle className="w-4 h-4" />
                  </div>
                  <span className="text-xs sm:text-sm font-medium text-hs-navy">
                    Personalised advice from real travellers, not chatbots
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-blue-50 text-[#0066CC] flex items-center justify-center shrink-0 border border-blue-100">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <span className="text-xs sm:text-sm font-medium text-hs-navy">
                    Chennai office with dedicated local support
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-amber-50 text-amber-600 flex items-center justify-center shrink-0 border border-amber-100">
                    <Clock className="w-4 h-4" />
                  </div>
                  <span className="text-xs sm:text-sm font-medium text-hs-navy">
                    Quick response within 2 hours during business hours
                  </span>
                </div>
              </div>
            </div>

            {/* Right Contact Hub Card */}
            <div className="lg:col-span-6 relative min-w-0">
              <div className="bg-white p-7 sm:p-9 rounded-3xl border border-gray-100 shadow-xl relative overflow-hidden">
                <div className="flex items-center justify-between pb-6 mb-6 border-b border-gray-100">
                  <div>
                    <h3 className="font-heading font-extrabold text-xl sm:text-2xl text-hs-navy">
                      Holiday Star Travel Desk
                    </h3>
                    <p className="text-xs text-hs-text-muted mt-1">
                      Mon – Sat: 9:30 AM – 7:30 PM IST
                    </p>
                  </div>
                  <div className="w-12 h-12 rounded-2xl bg-[#0066CC]/10 text-[#0066CC] flex items-center justify-center shrink-0">
                    <Headset className="w-6 h-6" />
                  </div>
                </div>

                <div className="space-y-4 mb-8">
                  {/* Phone */}
                  <a
                    href={`tel:${siteConfig.contact.phone}`}
                    className="flex items-center gap-4 p-3.5 rounded-2xl bg-gray-50/80 hover:bg-blue-50/60 border border-gray-100 hover:border-blue-200 transition-all duration-300 group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-white shadow-xs border border-gray-200/60 flex items-center justify-center text-[#0066CC] group-hover:scale-110 transition-transform">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[11px] font-bold uppercase tracking-wider text-hs-text-muted block">Direct Phone</span>
                      <span className="text-sm font-bold text-hs-navy group-hover:text-[#0066CC] transition-colors">{siteConfig.contact.phone}</span>
                    </div>
                  </a>

                  {/* Email */}
                  <a
                    href={`mailto:${siteConfig.contact.email}`}
                    className="flex items-center gap-4 p-3.5 rounded-2xl bg-gray-50/80 hover:bg-blue-50/60 border border-gray-100 hover:border-blue-200 transition-all duration-300 group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-white shadow-xs border border-gray-200/60 flex items-center justify-center text-[#0066CC] group-hover:scale-110 transition-transform">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[11px] font-bold uppercase tracking-wider text-hs-text-muted block">Email Enquiry</span>
                      <span className="text-sm font-bold text-hs-navy group-hover:text-[#0066CC] transition-colors">{siteConfig.contact.email}</span>
                    </div>
                  </a>

                  {/* Location */}
                  <div className="flex items-center gap-4 p-3.5 rounded-2xl bg-gray-50/80 border border-gray-100">
                    <div className="w-10 h-10 rounded-xl bg-white shadow-xs border border-gray-200/60 flex items-center justify-center text-[#0066CC]">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[11px] font-bold uppercase tracking-wider text-hs-text-muted block">Chennai Office</span>
                      <span className="text-sm font-medium text-hs-navy">{siteConfig.contact.address.city}, {siteConfig.contact.address.state}</span>
                    </div>
                  </div>
                </div>

                {/* WhatsApp Action */}
                <a
                  href={`https://wa.me/${siteConfig.contact.whatsapp}?text=Hello!%20I'd%20like%20to%20speak%20with%20your%20team%20about%20planning%20a%20holiday.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-4 px-6 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-sm sm:text-base rounded-full transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center gap-2.5 cursor-pointer"
                >
                  <MessageCircle className="w-5 h-5 fill-white" />
                  <span>Connect on WhatsApp</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
