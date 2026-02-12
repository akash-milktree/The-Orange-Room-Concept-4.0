
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
import TikiPage from './pages/TikiPage.tsx';
import FullVenuePage from './pages/FullVenuePage.tsx';
import HalfVenuePage from './pages/HalfVenuePage.tsx';
import OffPistePage from './pages/OffPistePage.tsx';
import MileHighPage from './pages/MileHighPage.tsx';
import CocktailBarPage from './pages/CocktailBarPage.tsx';
import BrunchesPage from './pages/BrunchesPage.tsx';
import PrivateHirePage from './pages/PrivateHirePage.tsx';
import CorporateHirePage from './pages/CorporateHirePage.tsx';
import VipBookingsPage from './pages/VipBookingsPage.tsx';
import NeonJunglePage from './pages/NeonJunglePage.tsx';
import DrinksMenuPage from './pages/DrinksMenuPage.tsx';
import FoodMenuPage from './pages/FoodMenuPage.tsx';

export type View = 
  | 'home' 
  | 'tables' 
  | 'tiki' 
  | 'full-venue' 
  | 'half-venue' 
  | 'off-piste' 
  | 'mile-high' 
  | 'cocktail-bar'
  | 'brunches'
  | 'private-hire'
  | 'corporate-hire'
  | 'vip-bookings'
  | 'neon-jungle'
  | 'drinks-menu'
  | 'food-menu';

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentView, setCurrentView] = useState<View>('home');

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  
  const navigateTo = (view: View) => {
    setCurrentView(view);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsMenuOpen(false);
    
    if (view === 'home') window.location.hash = '';
    else window.location.hash = view;
  };

  useEffect(() => {
    const handlePopState = () => {
      const hash = window.location.hash.replace('#', '');
      const validViews: View[] = [
        'tables', 'tiki', 'full-venue', 'half-venue', 'off-piste', 
        'mile-high', 'cocktail-bar', 'brunches', 'private-hire', 
        'corporate-hire', 'vip-bookings', 'neon-jungle', 'drinks-menu', 'food-menu'
      ];
      if (validViews.includes(hash as View)) {
        setCurrentView(hash as View);
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
      
      <main className="ml-0 lg:ml-24 pt-20 lg:pt-24 w-full">
        {currentView === 'home' && (
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
        )}
        {currentView === 'tables' && <OurTablesPage />}
        {currentView === 'tiki' && <TikiPage />}
        {currentView === 'full-venue' && <FullVenuePage />}
        {currentView === 'half-venue' && <HalfVenuePage />}
        {currentView === 'off-piste' && <OffPistePage />}
        {currentView === 'mile-high' && <MileHighPage />}
        {currentView === 'cocktail-bar' && <CocktailBarPage />}
        {currentView === 'brunches' && <BrunchesPage />}
        {currentView === 'private-hire' && <PrivateHirePage />}
        {currentView === 'corporate-hire' && <CorporateHirePage />}
        {currentView === 'vip-bookings' && <VipBookingsPage />}
        {currentView === 'neon-jungle' && <NeonJunglePage />}
        {currentView === 'drinks-menu' && <DrinksMenuPage />}
        {currentView === 'food-menu' && <FoodMenuPage />}
        <Footer />
      </main>
    </div>
  );
};

export default App;
