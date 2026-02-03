
import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const Navigation: React.FC = () => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const menuItems = [
    { label: 'HOME', href: '#', hasSubmenu: false },
    { 
      label: 'VENUES', 
      href: '#', 
      hasSubmenu: true, 
      submenu: ['OUR TABLES', 'TIKI', 'OFF PISTE', 'FULL VENUE', 'HALF VENUE', 'MILE HIGH'] 
    },
    { 
      label: 'LINEUP', 
      href: '#', 
      hasSubmenu: true, 
      submenu: ['COCKTAIL BAR', 'BOTTOMLESS BRUNCHES', 'PRIVATE HIRE', 'CORPORATE HIRE', 'VIP BOOKINGS', 'NEON JUNGLE'] 
    },
    { label: 'PRIVATE HIRE', href: '#', hasSubmenu: false },
    { label: 'CORPORATE HIRE', href: '#', hasSubmenu: false },
    { label: 'BOOK', href: '#', hasSubmenu: false, isSpecial: true },
  ];

  return (
    <nav className="fixed top-0 left-20 lg:left-24 right-0 z-50 h-20 lg:h-24 nav-border bg-[#1a1919]/95 backdrop-blur-md box-border hidden lg:block">
      <div className="grid grid-cols-6 h-full">
        {menuItems.map((item, idx) => {
          const isActive = activeDropdown === item.label;
          
          return (
            <div 
              key={item.label}
              className={`relative group ${idx < 5 ? 'block-border' : ''}`}
              onMouseEnter={() => item.hasSubmenu && setActiveDropdown(item.label)}
              onMouseLeave={() => item.hasSubmenu && setActiveDropdown(null)}
            >
              {/* Main Navigation Item */}
              <a 
                href={item.href} 
                className={`
                  flex items-center justify-center h-full w-full transition-all duration-300 uppercase tracking-[0.3em] text-[10px] font-black
                  ${item.isSpecial 
                    ? 'bg-[#F29100] text-white hover:bg-white hover:text-[#F29100]' 
                    : (isActive ? 'bg-[#F29100] text-white' : 'text-white hover:bg-[#F29100] hover:text-white')
                  }
                `}
              >
                <span className="flex items-center gap-1.5">
                  {item.label}
                  {item.hasSubmenu && (
                    isActive 
                      ? <ChevronUp className="w-3.5 h-3.5 text-white" />
                      : <ChevronDown className="w-3.5 h-3.5 opacity-50 group-hover:text-white transition-opacity" />
                  )}
                </span>
              </a>

              {/* Submenu Dropdown */}
              {item.hasSubmenu && (
                <div className={`
                  absolute top-full left-[-2px] right-[-2px] bg-[#1a1919] border-x-2 border-b-2 border-white/50 
                  transition-all duration-300 origin-top shadow-2xl overflow-hidden z-[70]
                  ${isActive ? 'opacity-100 scale-y-100 visible' : 'opacity-0 scale-y-95 invisible'}
                `}>
                  <div className="flex flex-col">
                    {item.submenu?.map((sub) => (
                      <a 
                        key={sub}
                        href="#" 
                        className={`
                          flex items-center px-10 h-24 text-[10px] font-black uppercase tracking-[0.3em] 
                          transition-all duration-200 border-b-2 border-white/20 last:border-b-0
                          text-white hover:bg-[#F29100] hover:text-white
                        `}
                      >
                        {sub}
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </nav>
  );
};

export default Navigation;
