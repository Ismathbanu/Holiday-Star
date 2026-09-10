import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Layout from './components/layout/Layout';

// Eager load homepage for best LCP
import Home from './pages/Home/Home';

// Lazy load other pages
const DestinationsIndex = lazy(() => import('./pages/Destinations/DestinationsIndex'));
const DestinationPage = lazy(() => import('./pages/Destinations/DestinationPage'));
const PackagesPage = lazy(() => import('./pages/Packages/Packages'));
const SportsTourismPage = lazy(() => import('./pages/SportsTourism/SportsTourism'));
const AboutPage = lazy(() => import('./pages/About/About'));
const ContactPage = lazy(() => import('./pages/Contact/Contact'));
const PlanHolidayPage = lazy(() => import('./pages/PlanHoliday/PlanHoliday'));
const MalaysiaCampaignPage = lazy(() => import('./pages/MalaysiaCampaign/MalaysiaCampaign'));

function PageLoader() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-hs-cream">
      <div className="flex flex-col items-center gap-4">
        <div className="w-10 h-10 border-4 border-hs-blue-100 border-t-hs-blue-600 rounded-full animate-spin" />
        <p className="text-sm font-semibold text-hs-navy">Loading Holiday Star...</p>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="destinations" element={<DestinationsIndex />} />
              <Route path="destinations/:slug" element={<DestinationPage />} />
              <Route path="packages" element={<PackagesPage />} />
              <Route path="sports-tourism" element={<SportsTourismPage />} />
              <Route path="travel-guide" element={<Navigate to="/sports-tourism" replace />} />
              <Route path="about" element={<AboutPage />} />
              <Route path="contact" element={<ContactPage />} />
              <Route path="plan-holiday" element={<PlanHolidayPage />} />
              <Route path="campaigns/malaysia" element={<MalaysiaCampaignPage />} />
              <Route path="malaysia-campaign" element={<MalaysiaCampaignPage />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Route>
          </Routes>
        </Suspense>
      </BrowserRouter>
    </HelmetProvider>
  );
}
