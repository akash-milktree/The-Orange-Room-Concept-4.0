
import React from 'react';
import { X, ChevronRight } from 'lucide-react';
import { View } from '../App.tsx';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate?: (view: View) => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose, onNavigate }) => {
  const venuesSubmenu = [
    { label: 'Our Tables', view: 'tables' as const },
    { label: 'Tiki Lounge', view: 'tiki' as const },
    { label: 'Off Piste', view: 'off-piste' as const },
    { label: 'Full Venue', view: 'full-venue' as const },
    { label: 'Half Venue', view: 'half-venue' as const },
    { label: 'Mile High', view: 'mile-high' as const }
  ];

  const lineupSubmenu = [
    { label: 'Cocktail Bar', view: 'home' as const },
    { label: 'Bottomless Brunches', view: 'home' as const },
    { label: 'Private Hire', view: 'full-venue' as const },
    { label: 'Corporate Hire', view: 'full-venue' as const },
    { label: 'VIP Bookings', view: 'home' as const },
    { label: 'Neon Jungle', view: 'home' as const }
  ];

  const handleLinkClick = (view?: View) => {
    if (view && onNavigate) {
      onNavigate(view);
      onClose();
    }
  };

  return (
    <div className={`
      fixed inset-0 z-[180] bg-[#1a1919] transition-all duration-700 ease-[cubic-bezier(0.19,1,0.22,1)]
      ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'}
    `}>
      <div className="flex h-full w-full">
        
        {/* Placeholder for sidebar consistency */}
        <div className="w-20 lg:w-24 h-full" />

        {/* Main Menu Content */}
        <div className="flex-1 flex flex-col justify-center px-8 sm:px-20 lg:px-28 overflow-y-auto py-24 scrollbar-hide">
          <div className="flex flex-col space-y-2 md:space-y-4 lg:space-y-6">
            
            {/* HOME */}
            <div className={`transition-all duration-700 delay-75 ${isOpen ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
              <a href="#" onClick={(e) => { e.preventDefault(); handleLinkClick('home'); }} className="text-[52px] sm:text-[68px] md:text-[80px] lg:text-[100px] font-serif font-light text-[#f5f5f1] hover:text-[#F29100] leading-tight transition-all">
                Home
              </a>
            </div>

            {/* VENUES + Horizontal Submenu */}
            <div className={`transition-all duration-700 delay-150 ${isOpen ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
              <div className="flex flex-col xl:flex-row xl:items-center gap-4 xl:gap-12">
                <a href="#" onClick={(e) => { e.preventDefault(); handleLinkClick('tables'); }} className="text-[52px] sm:text-[68px] md:text-[80px] lg:text-[100px] font-serif font-light text-[#f5f5f1] hover:text-[#F29100] leading-tight transition-all">
                  Venues
                </a>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-2 py-2">
                  {venuesSubmenu.map((sub) => (
                    <button key={sub.label} onClick={() => handleLinkClick(sub.view)} className="text-[10px] md:text-[11px] font-sans font-black uppercase tracking-[0.2em] text-white/40 hover:text-[#F29100] transition-colors text-left flex items-center gap-1.5 group">
                      <ChevronRight className="w-2.5 h-2.5 group-hover:translate-x-1 transition-transform" /> {sub.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* LINEUP + Horizontal Submenu */}
            <div className={`transition-all duration-700 delay-225 ${isOpen ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
              <div className="flex flex-col xl:flex-row xl:items-center gap-4 xl:gap-12">
                <a href="#" onClick={(e) => { e.preventDefault(); handleLinkClick('home'); }} className="text-[52px] sm:text-[68px] md:text-[80px] lg:text-[100px] font-serif font-light text-[#f5f5f1] hover:text-[#F29100] leading-tight transition-all">
                  Lineup
                </a>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-2 py-2">
                  {lineupSubmenu.map((sub) => (
                    <button key={sub.label} onClick={() => handleLinkClick(sub.view)} className="text-[10px] md:text-[11px] font-sans font-black uppercase tracking-[0.2em] text-white/40 hover:text-[#F29100] transition-colors text-left flex items-center gap-1.5 group">
                      <ChevronRight className="w-2.5 h-2.5 group-hover:translate-x-1 transition-transform" /> {sub.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* PRIVATE HIRE */}
            <div className={`transition-all duration-700 delay-300 ${isOpen ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
              <a href="#" onClick={(e) => { e.preventDefault(); handleLinkClick('full-venue'); }} className="text-[52px] sm:text-[68px] md:text-[80px] lg:text-[100px] font-serif font-light text-[#f5f5f1] hover:text-[#F29100] leading-tight transition-all">
                Private Hire
              </a>
            </div>

            {/* CORPORATE HIRE */}
            <div className={`transition-all duration-700 delay-375 ${isOpen ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
              <a href="#" onClick={(e) => { e.preventDefault(); handleLinkClick('full-venue'); }} className="text-[52px] sm:text-[68px] md:text-[80px] lg:text-[100px] font-serif font-light text-[#f5f5f1] hover:text-[#F29100] leading-tight transition-all">
                Corporate Hire
              </a>
            </div>

            {/* BOOK */}
            <div className={`transition-all duration-700 delay-450 ${isOpen ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
              <a href="#dmn-booking-container" onClick={onClose} className="text-[52px] sm:text-[68px] md:text-[80px] lg:text-[100px] font-serif font-light text-[#F29100] hover:text-white leading-tight transition-all">
                Book
              </a>
            </div>

          </div>

          {/* Minimalist Footer Info */}
          <div className={`
            mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between gap-6
            transition-all duration-1000 delay-500
            ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
          `}>
            <div className="flex gap-12">
              <div className="space-y-1">
                <span className="text-[9px] font-black text-white/20 uppercase tracking-[0.4em]">LOCATION</span>
                <p className="text-[13px] text-white/50 font-light">Vernon Walk, Southampton</p>
              </div>
              <div className="space-y-1">
                <span className="text-[9px] font-black text-white/20 uppercase tracking-[0.4em]">CONTACT</span>
                <p className="text-[13px] text-white/50 font-light">info@orangerooms.co.uk</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Mobile Header Close button */}
      <button 
        onClick={onClose}
        className="lg:hidden absolute top-6 right-6 p-4 text-white hover:text-[#F29100] transition-colors z-[210]"
      >
        <X className="w-10 h-10" />
      </button>
    </div>
  );
};

export default MobileMenu;
