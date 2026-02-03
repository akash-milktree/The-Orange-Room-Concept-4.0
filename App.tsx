
import React from 'react';
import Navigation from './components/Navigation';
import Sidebar from './components/Sidebar';
import Hero from './components/Hero';
import OfferingsSection from './components/OfferingsSection';
import NewsSection from './components/NewsSection';
import MarqueeSection from './components/MarqueeSection';
import AwardsSection from './components/AwardsSection';
import BookingSection from './components/BookingSection';
import LogoMarqueeSection from './components/LogoMarqueeSection';
import ReviewsSection from './components/ReviewsSection';
import VenuesTabsSection from './components/VenuesTabsSection';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#1a1919] text-white selection:bg-orange-500 selection:text-white">
      <Sidebar />
      <Navigation />
      {/* Main container with margin to account for fixed sidebar (w-24) */}
      <main className="ml-24 pt-24">
        <Hero />
        <OfferingsSection />
        <MarqueeSection />
        <NewsSection />
        <AwardsSection />
        <BookingSection />
        <LogoMarqueeSection />
        <ReviewsSection />
        <VenuesTabsSection />
      </main>
    </div>
  );
};

export default App;