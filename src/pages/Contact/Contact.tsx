import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, MessageCircle, Send, ExternalLink, CheckCircle } from 'lucide-react';
import AnimatedSection from '../../components/common/AnimatedSection';
import { siteConfig } from '../../data/siteConfig';

export default function Contact() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    destination: 'General Inquiry',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  const googleMapsUrl = `https://maps.google.com/maps?q=K.B.+Aluppy+Complex,+Dr.+Natesan+Road,+Royapettah,+Chennai+600014&t=&z=16&ie=UTF8&iwloc=&output=embed`;
  const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=K.B.+Aluppy+Complex,+Dr.+Natesan+Road,+Royapettah,+Chennai+600014`;

  return (
    <>
      <Helmet>
        <title>Contact Holiday Star Tours & Travels | Chennai</title>
        <meta
          name="description"
          content="Contact Holiday Star Tours & Travels in Chennai. Call, WhatsApp, or visit our Royapettah office to plan your next international holiday."
        />
        <link rel="canonical" href="https://holidaystartours.com/contact" />
      </Helmet>

      {/* Hero Header */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 bg-hs-deep-blue text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(66,165,245,0.3),transparent_50%)]" />
        </div>
        <div className="container-hs relative z-10 text-center">
          <span className="text-xs font-semibold text-hs-sky-blue uppercase tracking-widest block mb-3">
            HOLIDAY STAR TOURS & TRAVELS
          </span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl mb-4"
          >
            Get In Touch
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="text-white/80 text-base sm:text-lg max-w-xl mx-auto font-light"
          >
            Visit our office in Royapettah, Chennai, or reach out to our team of travel experts for personalised guidance.
          </motion.p>
        </div>
      </section>

      {/* Main Content: Office Details, Contact Cards, and Interactive Map */}
      <section className="py-16 md:py-20 bg-hs-cream/60">
        <div className="container-hs">
          {/* Top Row: Details & Map Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-12">
            
            {/* Left Column: Office Details Card with Company Logo */}
            <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
              <AnimatedSection>
                <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-card border border-gray-100 flex flex-col h-full">
                  {/* Company Logo Header */}
                  <div className="flex items-center gap-4 pb-6 border-b border-gray-100 mb-6">
                    <img
                      src="/images/hs-logo.png"
                      alt="Holiday Star Tours & Travels"
                      className="h-11 sm:h-12 w-auto object-contain"
                    />
                    <div>
                      <h2 className="font-heading font-bold text-lg text-hs-navy">
                        Holiday Star Tours & Travels
                      </h2>
                      <p className="text-xs text-hs-blue-600 font-medium">
                        Headquarters • Chennai, India
                      </p>
                    </div>
                  </div>

                  {/* Office Address Section */}
                  <div className="space-y-6 flex-1">
                    <div className="flex items-start gap-4">
                      <div className="w-11 h-11 rounded-2xl bg-hs-blue-50 text-hs-blue-600 flex items-center justify-center shrink-0 shadow-2xs">
                        <MapPin className="w-5 h-5" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xs font-bold text-hs-text-muted uppercase tracking-wider mb-1">
                          Office Address
                        </h3>
                        <p className="text-sm font-semibold text-hs-navy leading-snug">
                          {siteConfig.contact.address.line1}
                        </p>
                        <p className="text-sm text-hs-text-secondary leading-snug">
                          {siteConfig.contact.address.line2}
                        </p>
                        <p className="text-sm text-hs-text-secondary leading-snug">
                          {siteConfig.contact.address.city}, {siteConfig.contact.address.state} — {siteConfig.contact.address.pincode}
                        </p>
                        <a
                          href={directionsUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs font-bold text-hs-blue-600 hover:text-hs-navy mt-2 hover:underline"
                        >
                          <span>Get Directions on Google Maps</span>
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      </div>
                    </div>

                    {/* Working Hours */}
                    <div className="flex items-start gap-4">
                      <div className="w-11 h-11 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center shrink-0 shadow-2xs">
                        <Clock className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="text-xs font-bold text-hs-text-muted uppercase tracking-wider mb-1">
                          Working Hours
                        </h3>
                        <p className="text-sm font-semibold text-hs-navy">
                          {siteConfig.contact.workingHours}
                        </p>
                        <p className="text-xs text-hs-text-muted mt-0.5">
                          Sunday: By appointment only
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Direct Contact Buttons */}
                  <div className="pt-6 border-t border-gray-100 grid grid-cols-2 gap-3 mt-6">
                    <a
                      href={`tel:${siteConfig.contact.phone}`}
                      className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-hs-navy text-white text-xs font-bold hover:bg-hs-blue-600 transition-colors shadow-sm"
                    >
                      <Phone className="w-4 h-4" />
                      Call Now
                    </a>
                    <a
                      href={`https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent(siteConfig.contact.whatsappMessage)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-hs-green text-white text-xs font-bold hover:bg-green-700 transition-colors shadow-sm"
                    >
                      <MessageCircle className="w-4 h-4" />
                      WhatsApp
                    </a>
                  </div>
                </div>
              </AnimatedSection>
            </div>

            {/* Right Column: Google Maps Embed with Map Pin Card */}
            <div className="lg:col-span-7 flex flex-col">
              <AnimatedSection delay={0.1} className="h-full">
                <div className="bg-white rounded-3xl overflow-hidden shadow-card border border-gray-100 flex flex-col h-full min-h-[420px] relative">
                  {/* Map Header Strip */}
                  <div className="p-4 bg-white border-b border-gray-100 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                      <span className="text-xs font-bold text-hs-navy">
                        Office Location • Royapettah, Chennai
                      </span>
                    </div>
                    <a
                      href={directionsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-semibold text-hs-blue-600 hover:underline flex items-center gap-1"
                    >
                      Open in Maps
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>

                  {/* Interactive Map Iframe */}
                  <div className="flex-1 w-full min-h-[380px] relative">
                    <iframe
                      title="Holiday Star Tours & Travels Office Location"
                      src={googleMapsUrl}
                      className="w-full h-full border-0 absolute inset-0"
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    />
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>

          {/* Quick Contact Cards: 4 Balanced Metric Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
            <AnimatedSection delay={0}>
              <a
                href={`tel:${siteConfig.contact.phone}`}
                className="group block p-6 bg-white rounded-2xl shadow-card border border-gray-100 hover:border-hs-blue-600/30 hover:shadow-lg transition-all"
              >
                <div className="w-12 h-12 rounded-2xl bg-hs-blue-50 group-hover:bg-hs-blue-600 text-hs-blue-600 group-hover:text-white flex items-center justify-center mb-4 transition-colors">
                  <Phone className="w-5 h-5" />
                </div>
                <h3 className="text-xs font-bold text-hs-text-muted uppercase tracking-wider mb-1">
                  Call Directly
                </h3>
                <p className="text-base font-bold text-hs-navy">
                  {siteConfig.contact.phone}
                </p>
                <span className="text-xs text-hs-blue-600 font-semibold group-hover:underline mt-2 inline-block">
                  Click to dial &rarr;
                </span>
              </a>
            </AnimatedSection>

            <AnimatedSection delay={0.05}>
              <a
                href={`https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent(siteConfig.contact.whatsappMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group block p-6 bg-white rounded-2xl shadow-card border border-gray-100 hover:border-hs-green/30 hover:shadow-lg transition-all"
              >
                <div className="w-12 h-12 rounded-2xl bg-emerald-50 group-hover:bg-hs-green text-emerald-600 group-hover:text-white flex items-center justify-center mb-4 transition-colors">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <h3 className="text-xs font-bold text-hs-text-muted uppercase tracking-wider mb-1">
                  WhatsApp Us
                </h3>
                <p className="text-base font-bold text-hs-navy">
                  +91 {siteConfig.contact.whatsapp.slice(2)}
                </p>
                <span className="text-xs text-hs-green font-semibold group-hover:underline mt-2 inline-block">
                  Start instant chat &rarr;
                </span>
              </a>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="group block p-6 bg-white rounded-2xl shadow-card border border-gray-100 hover:border-amber-500/30 hover:shadow-lg transition-all"
              >
                <div className="w-12 h-12 rounded-2xl bg-amber-50 group-hover:bg-amber-500 text-amber-600 group-hover:text-white flex items-center justify-center mb-4 transition-colors">
                  <Mail className="w-5 h-5" />
                </div>
                <h3 className="text-xs font-bold text-hs-text-muted uppercase tracking-wider mb-1">
                  Send Email
                </h3>
                <p className="text-base font-bold text-hs-navy truncate">
                  {siteConfig.contact.email}
                </p>
                <span className="text-xs text-amber-600 font-semibold group-hover:underline mt-2 inline-block">
                  Write to us &rarr;
                </span>
              </a>
            </AnimatedSection>

            <AnimatedSection delay={0.15}>
              <div className="p-6 bg-white rounded-2xl shadow-card border border-gray-100">
                <div className="w-12 h-12 rounded-2xl bg-purple-50 text-purple-600 flex items-center justify-center mb-4">
                  <Clock className="w-5 h-5" />
                </div>
                <h3 className="text-xs font-bold text-hs-text-muted uppercase tracking-wider mb-1">
                  Office Timings
                </h3>
                <p className="text-base font-bold text-hs-navy">
                  9:00 AM – 6:00 PM
                </p>
                <span className="text-xs text-hs-text-muted mt-2 inline-block">
                  Monday to Saturday
                </span>
              </div>
            </AnimatedSection>
          </div>

          {/* Quick Message Form Section */}
          <div className="max-w-3xl mx-auto">
            <AnimatedSection delay={0.2}>
              <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-card border border-gray-100">
                <div className="text-center max-w-lg mx-auto mb-8">
                  <span className="text-xs font-semibold text-hs-blue-600 uppercase tracking-widest block mb-1">
                    SEND A MESSAGE
                  </span>
                  <h2 className="font-heading font-bold text-2xl sm:text-3xl text-hs-navy">
                    How can we help your holiday?
                  </h2>
                  <p className="text-sm text-hs-text-secondary mt-2">
                    Leave your details and our holiday expert will call you back within 2 business hours.
                  </p>
                </div>

                {formSubmitted ? (
                  <div className="p-8 rounded-2xl bg-emerald-50 text-center border border-emerald-200">
                    <CheckCircle className="w-12 h-12 text-emerald-600 mx-auto mb-3" />
                    <h3 className="font-heading font-bold text-xl text-hs-navy mb-1">
                      Thank You! Message Received.
                    </h3>
                    <p className="text-sm text-hs-text-secondary max-w-md mx-auto">
                      Our holiday consultant will get in touch with you shortly on {formData.phone || 'your phone number'}.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-hs-navy mb-1.5">
                          Your Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="e.g. Rahul Sharma"
                          className="w-[100%] px-4 py-3 text-sm rounded-xl border border-gray-200 focus:outline-none focus:border-hs-blue-600 bg-hs-cream/30"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-hs-navy mb-1.5">
                          Mobile / WhatsApp Number *
                        </label>
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="+91 98765 43210"
                          className="w-[100%] px-4 py-3 text-sm rounded-xl border border-gray-200 focus:outline-none focus:border-hs-blue-600 bg-hs-cream/30"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-hs-navy mb-1.5">
                          Email Address
                        </label>
                        <input
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="rahul@example.com"
                          className="w-[100%] px-4 py-3 text-sm rounded-xl border border-gray-200 focus:outline-none focus:border-hs-blue-600 bg-hs-cream/30"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-hs-navy mb-1.5">
                          Interested Destination
                        </label>
                        <select
                          value={formData.destination}
                          onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
                          className="w-[100%] px-4 py-3 text-sm rounded-xl border border-gray-200 focus:outline-none focus:border-hs-blue-600 bg-white"
                        >
                          <option value="General Inquiry">General Inquiry</option>
                          <option value="Malaysia">Malaysia</option>
                          <option value="Thailand">Thailand</option>
                          <option value="Vietnam">Vietnam</option>
                          <option value="Sri Lanka">Sri Lanka</option>
                          <option value="Dubai">Dubai</option>
                          <option value="Singapore">Singapore</option>
                          <option value="Indonesia / Bali">Indonesia / Bali</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-hs-navy mb-1.5">
                        Tell us about your trip (Dates, travellers, preferences)
                      </label>
                      <textarea
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="We are planning a family trip for 4 people in May..."
                        className="w-[100%] px-4 py-3 text-sm rounded-xl border border-gray-200 focus:outline-none focus:border-hs-blue-600 bg-hs-cream/30 resize-none"
                      />
                    </div>

                    <div className="pt-2">
                      <button
                        type="submit"
                        className="w-[100%] py-4 bg-hs-blue-600 hover:bg-hs-navy text-white text-sm font-bold rounded-xl shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
                      >
                        <Send className="w-4 h-4" />
                        Send Inquiry
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  );
}
