
import React from 'react';
import { X, ChevronRight } from 'lucide-react';
import { View } from '../App.tsx';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate?: (view: View) => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose, onNavigate }) => {
  const menuItems = [
    { label: 'HOME', view: 'home' as const },
    { 
      label: 'VENUES', 
      submenu: [
        { label: 'OUR TABLES', view: 'tables' as const }, 
        { label: 'TIKI', view: 'tiki' as const }, 
        { label: 'OFF PISTE', view: 'off-piste' as const }, 
        { label: 'FULL VENUE', view: 'full-venue' as const }, 
        { label: 'HALF VENUE', view: 'half-venue' as const }, 
        { label: 'MILE HIGH', view: 'mile-high' as const }
      ] 
    },
    { 
      label: 'LINEUP', 
      submenu: [
        { label: 'COCKTAIL BAR', view: 'home' as const }, 
        { label: 'BOTTOMLESS BRUNCHES', view: 'home' as const }, 
        { label: 'PRIVATE HIRE', view: 'home' as const }, 
        { label: 'CORPORATE HIRE', view: 'home' as const }, 
        { label: 'VIP BOOKINGS', view: 'home' as const }, 
        { label: 'NEON JUNGLE', view: 'home' as const }
      ] 
    },
    { label: 'PRIVATE HIRE', view: 'full-venue' as const },
    { label: 'CORPORATE HIRE', view: 'full-venue' as const },
    { label: 'BOOK NOW', href: '#dmn-booking-container', isSpecial: true },
  ];

  const handleLinkClick = (view?: View) => {
    if (view && onNavigate) {
      onNavigate(view);
      onClose();
    }
  };

  return (
    <div className={`
      fixed inset-0 z-[150] bg-[#1a1919] transition-transform duration-500 ease-in-out lg:hidden
      ${isOpen ? 'translate-x-0' : '-translate-x-full'}
    `}>
      <button 
        onClick={onClose}
        className="absolute top-5 right-5 p-4 text-white hover:text-[#F29100] transition-colors z-[160]"
        aria-label="Close menu"
      >
        <X className="w-10 h-10" />
      </button>

      <div className="h-full flex flex-col p-8 pt-28 overflow-y-auto">
        <div className="flex flex-col space-y-8 pb-20">
          {menuItems.map((item) => (
            <div key={item.label} className="flex flex-col space-y-4">
              <a 
                href={item.href || '#'}
                onClick={(e) => {
                  if (item.view) {
                    e.preventDefault();
                    handleLinkClick(item.view);
                  }
                  if (item.href?.startsWith('#')) {
                    onClose();
                  }
                }}
                className={`
                  text-[32px] md:text-[48px] font-black uppercase tracking-tighter leading-none transition-colors
                  ${item.isSpecial ? 'text-[#F29100]' : 'text-white hover:text-[#F29100]'}
                `}
              >
                {item.label}
              </a>
              {item.submenu && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 pl-4 border-l-2 border-white/10">
                  {item.submenu.map((sub: any) => (
                    <a 
                      key={sub.label} 
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        handleLinkClick(sub.view);
                      }}
                      className="text-[14px] font-bold text-white/50 hover:text-[#F29100] uppercase tracking-widest flex items-center gap-2 group"
                    >
                      <ChevronRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                      {sub.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
