/** Holiday Star site-wide configuration */
export const siteConfig = {
  name: 'Holiday Star Tours & Travels',
  tagline: "Let's book your next holiday!",
  url: 'https://holidaystartours.com',

  contact: {
    person: 'Najmunnisa Bilal',
    phone: '+91 6379799948',
    email: 'hello@holidaystartours.com',
    whatsapp: '916379799948',
    whatsappMessage: 'Hi Holiday Star! I\'m interested in planning a holiday. Can you help?',
    address: {
      line1: 'No. 8, 1st Floor, K.B. Aluppy Complex',
      line2: 'Dr. Natesan Road, Royapettah',
      city: 'Chennai',
      state: 'Tamil Nadu',
      pincode: '600014',
      full: 'No. 8, 1st Floor, K.B. Aluppy Complex, Dr. Natesan Road, Royapettah, Chennai 600014',
    },
    workingHours: 'Monday – Saturday: 9:00 AM – 6:00 PM',
  },

  social: {
    facebook: 'https://www.facebook.com/holidaystartours/',
    linkedin: 'https://www.linkedin.com/company/holiday-star-tours-travels/',
    instagram: 'https://www.instagram.com/holidaystartours',
  },

  trust: {
    yearsInTN: 11,
    tourismMalaysiaPartner: true,
    campaignYear: '2026',
  },

  analytics: {
    ga4Id: import.meta.env.VITE_GA4_ID || '',
    gtmId: import.meta.env.VITE_GTM_ID || '',
    metaPixelId: import.meta.env.VITE_META_PIXEL_ID || '',
  },

  api: {
    baseUrl: import.meta.env.VITE_API_BASE_URL || '',
  },
} as const;

export const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Destinations', href: '/destinations' },
  { label: 'Holiday Packages', href: '/packages' },
  { label: 'Travel Guide', href: '/travel-guide' },
  { label: 'About Us', href: '/about' },
  { label: 'Contact', href: '/contact' },
] as const;

export const destinationLinks = [
  { label: 'Malaysia', href: '/destinations/malaysia' },
  { label: 'Thailand', href: '/destinations/thailand' },
  { label: 'Vietnam', href: '/destinations/vietnam' },
  { label: 'Sri Lanka', href: '/destinations/sri-lanka' },
  { label: 'Dubai', href: '/destinations/dubai' },
  { label: 'Singapore', href: '/destinations/singapore' },
  { label: 'Indonesia', href: '/destinations/indonesia' },
] as const;
