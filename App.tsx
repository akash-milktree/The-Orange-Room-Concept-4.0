
import React, { useState, useEffect } from 'react';
import Navigation from './components/Navigation.tsx';
import Sidebar from './components/Sidebar.tsx';
import Hero from './components/Hero.tsx';
import OfferingsSection from './components/OfferingsSection.tsx';
import MarqueeSection from './components/MarqueeSection.tsx';
import AwardsSection from './components/AwardsSection.tsx';
import BookingSection from './components/BookingSection.tsx';
import LogoMarqueeSection from './components/LogoMarqueeSection.tsx';
import ReviewsSection from './components/ReviewsSection.tsx';
import VenuesTabsSection from './components/VenuesTabsSection.tsx';
import Footer from './components/Footer.tsx';
import MobileMenu from './components/MobileMenu.tsx';
import MobileHeader from './components/MobileHeader.tsx';
import OurTablesPage from './pages/OurTablesPage.tsx';

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentView, setCurrentView] = useState<'home' | 'tables'>('home');

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  
  const navigateTo = (view: 'home' | 'tables') => {
    setCurrentView(view);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  // Listen for hash changes or simple state navigation
  useEffect(() => {
    const handlePopState = () => {
      if (window.location.hash === '#tables') {
        setCurrentView('tables');
      } else {
        setCurrentView('home');
      }
    };
    window.addEventListener('popstate', handlePopState);
    handlePopState();
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  return (
    <div className="min-h-screen bg-[#1a1919] text-white selection:bg-orange-500 selection:text-white relative overflow-x-hidden">
      <Sidebar toggleMenu={toggleMenu} isMenuOpen={isMenuOpen} />
      <MobileHeader toggleMenu={toggleMenu} isMenuOpen={isMenuOpen} />
      <Navigation onNavigate={navigateTo} />
      <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} onNavigate={navigateTo} />
      
      {/* Main container */}
      <main className="ml-0 lg:ml-24 pt-20 lg:pt-24 w-full">
        {currentView === 'home' ? (
          <>
            <Hero />
            <OfferingsSection />
            <MarqueeSection />
            <AwardsSection />
            <BookingSection />
            <LogoMarqueeSection />
            <ReviewsSection />
            <VenuesTabsSection />
          </>
        ) : (
          <OurTablesPage />
        )}
        <Footer />
      </main>
    </div>
  );
};

export default App;
