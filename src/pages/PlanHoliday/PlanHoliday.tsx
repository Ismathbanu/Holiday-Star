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
  Shield,
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

      {/* Breadcrumb Navigation */}
      <div className="bg-hs-cream py-3 border-b border-gray-100">
        <div className="container-hs flex items-center gap-2 text-xs text-hs-text-muted">
          <Link to="/" className="hover:text-[#0066CC] transition-colors">Home</Link>
          <span>&gt;</span>
          <span className="font-semibold text-hs-navy">Plan My Holiday</span>
        </div>
      </div>

      {/* ── HERO SECTION ── */}
      <section className="relative min-h-[520px] lg:min-h-[580px] flex items-center overflow-hidden py-16 lg:py-24">
        {/* Full-width background image */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1920&q=80"
            alt="Tropical island bay"
            className="w-full h-full object-cover"
          />
          {/* Dark Full-Width Gradient Overlay */}
          <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-slate-950/95 via-slate-900/80 to-slate-950/40" />
        </div>

        {/* Top Right Cursive Annotation */}
        <div className="absolute top-12 right-8 lg:right-16 z-10 font-script text-3xl lg:text-4xl text-white rotate-[-3deg] drop-shadow-md hidden sm:block">
          Good Journeys.<br />Brighter People ✨
        </div>

        <div className="relative z-10 container-hs w-full">
          <div className="max-w-2xl text-white">
            <span className="text-xs font-bold tracking-[0.25em] text-blue-300 uppercase mb-3 block">
              DREAM &nbsp; PLAN &nbsp; EXPLORE &nbsp; REPEAT
            </span>

            <h1 className="font-heading font-bold text-4xl sm:text-5xl lg:text-6xl text-white mb-2 leading-[1.1]">
              Let's plan your
            </h1>
            <div className="relative inline-block mb-4">
              <span className="font-script text-3xl sm:text-4xl lg:text-5xl text-sky-400 font-normal rotate-[-2deg] block">
                next holiday.
              </span>
              <svg className="absolute -bottom-1 left-0 w-full h-2 text-emerald-400" viewBox="0 0 100 20" preserveAspectRatio="none">
                <path d="M0 15 Q 50 0 100 15" stroke="currentColor" strokeWidth="4" fill="none" strokeLinecap="round" />
              </svg>
            </div>

            <p className="text-sm sm:text-base text-gray-200 mb-8 leading-relaxed max-w-xl font-light">
              Already know where you want to go? Or simply know that it's time for a break? Tell us a little about your plans and we'll help you take the next step.
            </p>

            {/* 3 Feature Badges */}
            <div className="flex flex-wrap items-center gap-3">
              <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-semibold text-white shadow-xs">
                <Compass className="w-4 h-4 text-sky-400" />
                <span>Tailor-made itineraries</span>
              </div>
              <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-semibold text-white shadow-xs">
                <Users className="w-4 h-4 text-sky-400" />
                <span>Expert advice from real travellers</span>
              </div>
              <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-semibold text-white shadow-xs">
                <Heart className="w-4 h-4 text-sky-400" />
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
                <div className="font-script text-xl text-[#0066CC] font-bold text-center leading-tight">
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
            <div className="lg:col-span-6">
              <span className="text-xs font-bold tracking-[0.2em] text-[#0066CC] uppercase mb-2 block">
                GET IN TOUCH
              </span>
              <h2 className="font-heading font-bold text-3xl sm:text-4xl text-hs-navy mb-2 leading-tight">
                Prefer to speak<br />with us?
              </h2>

              {/* Green Underline Accent */}
              <div className="w-20 h-1 bg-emerald-500 rounded-full mb-4" />

              <p className="text-xs sm:text-sm text-hs-text-secondary mb-8 font-light max-w-md">
                We're here to help you plan the perfect holiday.
              </p>

              {/* 3 Feature Badges */}
              <div className="flex flex-wrap items-center gap-4">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-full bg-white shadow-2xs border border-blue-100 flex items-center justify-center text-[#0066CC]">
                    <Headset className="w-4 h-4" />
                  </div>
                  <span className="text-xs font-semibold text-hs-navy">Friendly support</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-full bg-white shadow-2xs border border-blue-100 flex items-center justify-center text-[#0066CC]">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <span className="text-xs font-semibold text-hs-navy">Chennai-based team</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-full bg-white shadow-2xs border border-blue-100 flex items-center justify-center text-[#0066CC]">
                    <Shield className="w-4 h-4" />
                  </div>
                  <span className="text-xs font-semibold text-hs-navy">Safe & secure enquiries</span>
                </div>
              </div>
            </div>

            {/* Right Consultant Contact Card */}
            <div className="lg:col-span-6 relative min-w-0 overflow-hidden">
              <div className="bg-white p-6 sm:p-8 rounded-3xl border border-gray-100 shadow-xl relative overflow-hidden">
                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 min-w-0">
                  {/* Consultant Photo */}
                  <img
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&q=80"
                    alt="Najmunnisa Bilal - Travel Consultant"
                    className="w-24 h-24 rounded-full object-cover border-4 border-blue-50 shadow-md shrink-0"
                  />

                  {/* Details */}
                  <div className="flex-1 min-w-0 text-center sm:text-left">
                    <h3 className="font-heading font-bold text-xl text-hs-navy mb-0.5">
                      Najmunnisa Bilal
                    </h3>
                    <p className="text-xs text-hs-text-muted mb-4">
                      Travel Consultant
                    </p>

                    <div className="space-y-2 mb-6 text-xs text-hs-text-secondary">
                      <div className="flex items-center justify-center sm:justify-start gap-2">
                        <Phone className="w-3.5 h-3.5 text-[#0066CC]" />
                        <span>+91 6379799943</span>
                      </div>
                      <div className="flex items-center justify-center sm:justify-start gap-2">
                        <Mail className="w-3.5 h-3.5 text-[#0066CC]" />
                        <span>hello@holidaystartours.com</span>
                      </div>
                      <div className="flex items-center justify-center sm:justify-start gap-2">
                        <MapPin className="w-3.5 h-3.5 text-[#0066CC]" />
                        <span>Chennai, Tamil Nadu</span>
                      </div>
                    </div>

                    <a
                      href={`https://wa.me/${siteConfig.contact.whatsapp}?text=Hello%20Najmunnisa!%20I'd%20like%20to%20speak%20about%20planning%20a%20holiday.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-[100%] py-3.5 px-6 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-xs sm:text-sm rounded-full transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center gap-2 cursor-pointer box-border"
                    >
                      <MessageCircle className="w-4 h-4 fill-white" />
                      <span>WhatsApp Us</span>
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Bottom Right Cursive Overlay */}
              <div className="font-script text-2xl sm:text-3xl text-[#0066CC] rotate-[-4deg] absolute -bottom-8 right-2 hidden sm:block pointer-events-none">
                Let's Make<br />Travel Happen
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
