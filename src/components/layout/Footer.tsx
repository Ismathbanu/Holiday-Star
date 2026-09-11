import { Link } from 'react-router-dom';
import { Mail, MapPin, Phone, ArrowRight } from 'lucide-react';
import { siteConfig, destinationLinks } from '../../data/siteConfig';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-hs-navy text-white pt-16 pb-8 border-t border-white/10" role="contentinfo">
      <div className="container-hs">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">
          {/* Brand & Newsletter Column (2 cols) */}
          <div className="lg:col-span-2 space-y-6">
            <Link to="/" className="inline-block">
              <img src="/images/hsw-logo.png" alt="Holiday Star Tours & Travels" className="h-12 sm:h-14 w-auto object-contain" />
            </Link>

            <p className="text-white/70 text-sm leading-relaxed max-w-sm font-light">
              Chennai-based travel company specialising in curated international holidays across Asia and the Middle East.
            </p>

            {/* Newsletter box from reference image */}
            <div className="pt-2">
              <span className="text-xs font-medium text-white/80 uppercase tracking-wider block mb-2">
                Let's stay in touch
              </span>
              <div className="flex items-center max-w-sm rounded-xl overflow-hidden bg-white/10 border border-white/20 p-1">
                <input
                  type="email"
                  placeholder="Your email address..."
                  className="w-full px-3 py-2 bg-transparent text-sm text-white placeholder-white/40 focus:outline-none"
                />
                <button
                  type="button"
                  className="w-9 h-9 rounded-lg bg-hs-blue-600 hover:bg-hs-sky-blue text-white flex items-center justify-center shrink-0 transition-colors"
                  aria-label="Subscribe"
                >
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Destinations Column */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-white/50 mb-4">
              Destinations
            </h3>
            <ul className="space-y-2.5">
              {destinationLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm text-white/75 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-white/50 mb-4">
              Company
            </h3>
            <ul className="space-y-2.5">
              <li>
                <Link to="/about" className="text-sm text-white/75 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/packages" className="text-sm text-white/75 hover:text-white transition-colors">
                  Holiday Packages
                </Link>
              </li>
              <li>
                <Link to="/sports-tourism" className="text-sm text-white/75 hover:text-white transition-colors">
                  Sports Tourism
                </Link>
              </li>
              <li>
                <Link to="/campaigns/malaysia" className="text-sm text-white/75 hover:text-white transition-colors">
                  Malaysia Campaign
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-white/75 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-white/50 mb-4">
              Contact Us
            </h3>
            <div className="space-y-3 text-sm text-white/75">
              <p className="font-medium text-white">{siteConfig.contact.person}</p>
              <a
                href={`tel:${siteConfig.contact.phone}`}
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <Phone className="w-4 h-4 text-hs-sky-blue shrink-0" />
                {siteConfig.contact.phone}
              </a>
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4 text-hs-sky-blue shrink-0" />
                {siteConfig.contact.email}
              </a>
              <div className="flex items-start gap-2 pt-1">
                <MapPin className="w-4 h-4 text-hs-sky-blue shrink-0 mt-0.5" />
                <span className="text-xs text-white/60">
                  {siteConfig.contact.address.city}, {siteConfig.contact.address.state}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom copyright strip */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-white/80 gap-3">
          <p className="flex flex-wrap items-center justify-center sm:justify-start gap-x-2 gap-y-1 text-center sm:text-left text-white/90">
            <span>© {currentYear} Holiday Star Tours & Travels. All rights reserved.</span>
            <span className="hidden sm:inline text-white/40">•</span>
            <span>
              Powered by{' '}
              <a
                href="https://dgbirdmedia.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-hs-gold underline underline-offset-2 font-semibold transition-colors"
              >
                DGbird Media
              </a>
            </span>
          </p>
          <div className="flex items-center gap-6 text-white/70">
            <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-white transition-colors">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
