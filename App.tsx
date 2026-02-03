
import React from 'react';
import Navigation from './components/Navigation.tsx';
import Sidebar from './components/Sidebar.tsx';
import Hero from './components/Hero.tsx';
import OfferingsSection from './components/OfferingsSection.tsx';
import NewsSection from './components/NewsSection.tsx';
import MarqueeSection from './components/MarqueeSection.tsx';
import AwardsSection from './components/AwardsSection.tsx';
import BookingSection from './components/BookingSection.tsx';
import LogoMarqueeSection from './components/LogoMarqueeSection.tsx';
import ReviewsSection from './components/ReviewsSection.tsx';
import VenuesTabsSection from './components/VenuesTabsSection.tsx';

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
