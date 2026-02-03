
import React from 'react';
import { X } from 'lucide-react';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  const menuItems = [
    { label: 'HOME', href: '#' },
    { label: 'VENUES', href: '#', submenu: ['OUR TABLES', 'TIKI', 'OFF PISTE', 'FULL VENUE', 'HALF VENUE', 'MILE HIGH'] },
    { label: 'LINEUP', href: '#', submenu: ['COCKTAIL BAR', 'BOTTOMLESS BRUNCHES', 'PRIVATE HIRE', 'CORPORATE HIRE', 'VIP BOOKINGS', 'NEON JUNGLE'] },
    { label: 'PRIVATE HIRE', href: '#' },
    { label: 'CORPORATE HIRE', href: '#' },
    { label: 'BOOK NOW', href: '#', isSpecial: true },
  ];

  return (
    <div className={`
      fixed inset-0 z-[90] bg-[#1a1919] transition-transform duration-500 ease-in-out lg:hidden
      ${isOpen ? 'translate-x-0' : '-translate-x-full'}
    `}>
      {/* Close Button - Top Right */}
      <button 
        onClick={onClose}
        className="absolute top-5 right-5 p-4 text-white hover:text-[#F29100] transition-colors z-[110]"
        aria-label="Close menu"
      >
        <X className="w-10 h-10" />
      </button>

      <div className="h-full flex flex-col p-8 pt-28 overflow-y-auto">
        <div className="flex flex-col space-y-8">
          {menuItems.map((item) => (
            <div key={item.label} className="flex flex-col space-y-4">
              <a 
                href={item.href}
                onClick={onClose}
                className={`
                  text-[32px] md:text-[48px] font-black uppercase tracking-tighter leading-none transition-colors
                  ${item.isSpecial ? 'text-[#F29100]' : 'text-white hover:text-[#F29100]'}
                `}
              >
                {item.label}
              </a>
              {item.submenu && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3 pl-2">
                  {item.submenu.map((sub) => (
                    <a 
                      key={sub} 
                      href="#" 
                      onClick={onClose}
                      className="text-[10px] md:text-[12px] font-black uppercase tracking-[0.3em] text-white/40 hover:text-white transition-colors"
                    >
                      {sub}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-16 pt-12 border-t-2 border-white/10 pb-12">
          <p className="text-[#F29100] font-black text-[12px] uppercase tracking-widest mb-4">Contact us</p>
          <a href="tel:02380232333" className="text-white text-[20px] font-bold block mb-2">023 8023 2333</a>
          <a href="mailto:info@orangerooms.co.uk" className="text-white/60 text-[14px] hover:text-white underline underline-offset-4">info@orangerooms.co.uk</a>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
