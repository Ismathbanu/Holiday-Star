import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, ChevronDown } from 'lucide-react';
import { destinationLinks, siteConfig } from '../../data/siteConfig';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [destinationsOpen, setDestinationsOpen] = useState(false);
  const [mobileDestinationsOpen, setMobileDestinationsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu & dropdown on route change
  useEffect(() => {
    setIsOpen(false);
    setDestinationsOpen(false);
    setMobileDestinationsOpen(false);
  }, [location.pathname]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  const isHome = location.pathname === '/';
  const isMalaysiaDestination = location.pathname === '/destinations/malaysia';
  const isPackages = location.pathname === '/packages';
  const isAbout = location.pathname === '/about';
  const isSportsTourism = location.pathname === '/sports-tourism';
  const isPlanHoliday = location.pathname === '/plan-holiday';
  const isCampaign = location.pathname.startsWith('/campaigns') || location.pathname.includes('campaign');
  const isTransparentNav = !scrolled && (isHome || isMalaysiaDestination || isPackages || isAbout || isSportsTourism || isPlanHoliday || isCampaign);
  const isDarkNav = isTransparentNav || !scrolled;

  const isActive = (href: string) =>
    href === '/' ? location.pathname === '/' : location.pathname.startsWith(href);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isTransparentNav
            ? 'bg-gradient-to-b from-black/70 via-black/30 to-transparent py-4 border-b border-white/10 shadow-none'
            : isDarkNav
              ? 'bg-hs-navy/90 backdrop-blur-md py-4 border-b border-white/10'
              : scrolled
                ? 'bg-white/95 backdrop-blur-md shadow-card py-2.5 border-b border-gray-100'
                : 'bg-white/95 backdrop-blur-md shadow-xs py-3 border-b border-gray-100/70'
        }`}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="container-hs flex items-center justify-between">
          {/* Logo with optional Tourism Malaysia co-branding */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            <Link
              to="/"
              className="flex items-center group py-0.5 shrink-0"
              aria-label="Holiday Star — Home"
            >
              <img
                src={isDarkNav ? '/images/hsw-logo.png' : '/images/hs-logo.png'}
                alt="Holiday Star Tours & Travels"
                className="h-10 sm:h-11 lg:h-12 w-auto object-contain transition-all duration-300"
              />
            </Link>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-1 xl:gap-2">
            <Link
              to="/"
              className={`px-3 py-2 text-sm font-semibold rounded-lg transition-colors ${
                isActive('/')
                  ? !isDarkNav ? 'text-hs-blue-600 bg-hs-blue-50' : 'text-white bg-white/10'
                  : !isDarkNav ? 'text-hs-text-primary hover:text-hs-blue-600' : 'text-white/80 hover:text-white'
              }`}
            >
              Home
            </Link>

            {/* Destinations Dropdown Trigger */}
            <div
              className="relative"
              onMouseEnter={() => setDestinationsOpen(true)}
              onMouseLeave={() => setDestinationsOpen(false)}
            >
              <button
                onClick={() => setDestinationsOpen(!destinationsOpen)}
                className={`flex items-center gap-1 px-3 py-2 text-sm font-semibold rounded-lg transition-colors ${
                  isActive('/destinations')
                    ? !isDarkNav ? 'text-hs-blue-600 bg-hs-blue-50' : 'text-white bg-white/10'
                    : !isDarkNav ? 'text-hs-text-primary hover:text-hs-blue-600' : 'text-white/80 hover:text-white'
                }`}
                aria-expanded={destinationsOpen}
              >
                Destinations
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${destinationsOpen ? 'rotate-180' : ''}`} />
              </button>

              {/* Destinations Mega Menu Dropdown */}
              <AnimatePresence>
                {destinationsOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 w-72 pt-2 z-50"
                  >
                    <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-3 space-y-1">
                      <div className="px-3 py-1.5 text-xs font-semibold text-hs-text-muted uppercase tracking-wider">
                        Explore Outbound Destinations
                      </div>

                      {destinationLinks.map((dest) => (
                        <Link
                          key={dest.href}
                          to={dest.href}
                          className="flex items-center justify-between px-3 py-2.5 rounded-xl hover:bg-hs-blue-50 text-sm font-medium text-hs-text-primary hover:text-hs-blue-600 transition-colors"
                        >
                          <span>{dest.label}</span>
                          <span className="text-xs text-hs-text-muted">Explore &rarr;</span>
                        </Link>
                      ))}

                      <div className="border-t border-gray-100 my-1 pt-1">
                        <Link
                          to="/destinations"
                          className="block px-3 py-2 text-xs font-semibold text-center text-hs-blue-600 hover:underline"
                        >
                          View All Destinations
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link
              to="/packages"
              className={`px-3 py-2 text-sm font-semibold rounded-lg transition-colors ${
                isActive('/packages')
                  ? !isDarkNav ? 'text-hs-blue-600 bg-hs-blue-50' : 'text-white bg-white/10'
                  : !isDarkNav ? 'text-hs-text-primary hover:text-hs-blue-600' : 'text-white/80 hover:text-white'
              }`}
            >
              Holiday Packages
            </Link>

            <Link
              to="/sports-tourism"
              className={`px-3 py-2 text-sm font-semibold rounded-lg transition-colors ${
                isActive('/sports-tourism')
                  ? !isDarkNav ? 'text-hs-blue-600 bg-hs-blue-50' : 'text-white bg-white/10'
                  : !isDarkNav ? 'text-hs-text-primary hover:text-hs-blue-600' : 'text-white/80 hover:text-white'
              }`}
            >
              Sports Tourism
            </Link>

            <Link
              to="/about"
              className={`px-3 py-2 text-sm font-semibold rounded-lg transition-colors ${
                isActive('/about')
                  ? !isDarkNav ? 'text-hs-blue-600 bg-hs-blue-50' : 'text-white bg-white/10'
                  : !isDarkNav ? 'text-hs-text-primary hover:text-hs-blue-600' : 'text-white/80 hover:text-white'
              }`}
            >
              About Us
            </Link>

            <Link
              to="/contact"
              className={`px-3 py-2 text-sm font-semibold rounded-lg transition-colors ${
                isActive('/contact')
                  ? !isDarkNav ? 'text-hs-blue-600 bg-hs-blue-50' : 'text-white bg-white/10'
                  : !isDarkNav ? 'text-hs-text-primary hover:text-hs-blue-600' : 'text-white/80 hover:text-white'
              }`}
            >
              Contact
            </Link>
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center">
            <Link
              to="/plan-holiday"
              className="px-6 py-2.5 text-sm font-bold text-hs-navy bg-hs-gold hover:bg-amber-400 rounded-xl transition-all shadow-md hover:shadow-lg whitespace-nowrap"
            >
              Plan My Holiday
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`lg:hidden p-2 rounded-xl transition-colors ${
              !isDarkNav ? 'text-hs-navy' : 'text-white'
            }`}
            aria-label="Toggle Menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm lg:hidden"
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="absolute top-0 right-0 bottom-0 w-[85%] max-w-sm bg-white p-6 shadow-2xl overflow-y-auto flex flex-col justify-between"
              onClick={(e) => e.stopPropagation()}
            >
              <div>
                <div className="flex items-center justify-between pb-6 border-b border-gray-100 mb-6">
                  <img src="/images/hs-logo.png" alt="Holiday Star Tours & Travels" className="h-11 w-auto object-contain" />
                  <button
                    onClick={() => setIsOpen(false)}
                    className="p-2 text-gray-500 hover:text-hs-navy"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                <div className="space-y-3">
                  <Link
                    to="/"
                    className="block py-2 text-base font-semibold text-hs-navy"
                  >
                    Home
                  </Link>

                  {/* Mobile Destinations Expandable Accordion */}
                  <div>
                    <button
                      onClick={() => setMobileDestinationsOpen(!mobileDestinationsOpen)}
                      className="w-full flex items-center justify-between py-2 text-base font-semibold text-hs-navy"
                    >
                      <span>Destinations</span>
                      <ChevronDown className={`w-4 h-4 transition-transform ${mobileDestinationsOpen ? 'rotate-180' : ''}`} />
                    </button>
                    {mobileDestinationsOpen && (
                      <div className="pl-4 py-2 space-y-2 border-l-2 border-hs-blue-100 my-1">
                        {destinationLinks.map((d) => (
                          <Link
                            key={d.href}
                            to={d.href}
                            className="block py-1.5 text-sm text-hs-text-muted hover:text-hs-blue-600 font-medium"
                          >
                            {d.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>

                  <Link
                    to="/packages"
                    className="block py-2 text-base font-semibold text-hs-navy"
                  >
                    Holiday Packages
                  </Link>

                  <Link
                    to="/sports-tourism"
                    className="block py-2 text-base font-semibold text-hs-navy"
                  >
                    Sports Tourism
                  </Link>

                  <Link
                    to="/about"
                    className="block py-2 text-base font-semibold text-hs-navy"
                  >
                    About Us
                  </Link>

                  <Link
                    to="/contact"
                    className="block py-2 text-base font-semibold text-hs-navy"
                  >
                    Contact
                  </Link>
                </div>
              </div>

              <div className="pt-6 border-t border-gray-100 space-y-3 mt-6 w-[100%]">
                <Link
                  to="/plan-holiday"
                  className="block w-[100%] py-3.5 px-4 text-center font-bold text-hs-navy bg-hs-gold rounded-xl shadow-md hover:bg-amber-400 transition-colors"
                >
                  Plan My Holiday
                </Link>
                <a
                  href={`https://wa.me/${siteConfig.contact.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-[100%] py-3.5 px-4 font-semibold text-white bg-hs-green rounded-xl hover:bg-emerald-600 transition-colors shadow-sm"
                >
                  <Phone className="w-4 h-4" />
                  WhatsApp Us
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
