import { Helmet } from 'react-helmet-async';
import HeroSection from './sections/HeroSection';
import TrustStrip from './sections/TrustStrip';
import IntroSection from './sections/IntroSection';
import DestinationDiscovery from './sections/DestinationDiscovery';
import WhyHolidayStar from './sections/WhyHolidayStar';
import MalaysiaFeature from './sections/MalaysiaFeature';
import MalaysiaPackages from './sections/MalaysiaPackages';
import TravellerStories from './sections/TravellerStories';
import TravelGuidePreview from './sections/TravelGuidePreview';
import FinalCTA from './sections/FinalCTA';

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Holiday Star Tours & Travels | International Holiday Packages from Chennai</title>
        <meta
          name="description"
          content="Discover international holidays across Malaysia, Thailand, Vietnam, Sri Lanka, Dubai, Singapore and Indonesia. Thoughtfully planned by a Chennai-based travel team."
        />
        <meta property="og:title" content="Holiday Star Tours & Travels | International Holiday Packages from Chennai" />
        <meta property="og:description" content="Curated international holiday packages from Chennai. Malaysia, Thailand, Vietnam, Sri Lanka, Dubai, Singapore & Indonesia." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://holidaystartours.com" />
        <link rel="canonical" href="https://holidaystartours.com" />
      </Helmet>

      <HeroSection />
      <TrustStrip />
      <IntroSection />
      <DestinationDiscovery />
      <WhyHolidayStar />
      <MalaysiaFeature />
      <MalaysiaPackages />
      <TravellerStories />
      <TravelGuidePreview />
      <FinalCTA />
    </>
  );
}
