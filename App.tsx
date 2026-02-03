
import React, { useState } from 'react';
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
import Footer from './components/Footer.tsx';
import MobileMenu from './components/MobileMenu.tsx';
import MobileHeader from './components/MobileHeader.tsx';

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="min-h-screen bg-[#1a1919] text-white selection:bg-orange-500 selection:text-white relative overflow-x-hidden">
      <Sidebar toggleMenu={toggleMenu} isMenuOpen={isMenuOpen} />
      <MobileHeader toggleMenu={toggleMenu} isMenuOpen={isMenuOpen} />
      <Navigation />
      <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
      
      {/* Main container: No left margin on mobile, only on large screens */}
      <main className="ml-0 lg:ml-24 pt-20 lg:pt-24 w-full">
        <Hero />
        <OfferingsSection />
        <MarqueeSection />
        <NewsSection />
        <AwardsSection />
        <BookingSection />
        <LogoMarqueeSection />
        <ReviewsSection />
        <VenuesTabsSection />
        <Footer />
      </main>
    </div>
  );
};

export default App;
