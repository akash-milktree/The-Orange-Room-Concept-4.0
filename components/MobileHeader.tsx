
import React from 'react';
import { Martini, Menu, X } from 'lucide-react';

interface MobileHeaderProps {
  toggleMenu: () => void;
  isMenuOpen: boolean;
}

const MobileHeader: React.FC<MobileHeaderProps> = ({ toggleMenu, isMenuOpen }) => {
  return (
    <header className="fixed top-0 left-0 right-0 h-20 bg-[#1a1919]/95 backdrop-blur-md z-[100] border-b-2 border-white/50 flex items-center lg:hidden">
      {/* Center Branding - Now on the left */}
      <div className="flex-1 px-6 flex items-center justify-between">
        <span className="text-[12px] font-black tracking-[0.4em] text-white uppercase truncate">
          Orange Rooms
        </span>
        <span className="text-[8px] font-black tracking-[0.2em] text-[#F29100] uppercase opacity-60">
          EST. 2019
        </span>
      </div>

      {/* Menu Trigger - Moved to the right */}
      <button 
        onClick={toggleMenu}
        className={`
          h-full w-20 flex items-center justify-center border-l-2 border-white/50 
          transition-colors duration-300
          ${isMenuOpen ? 'bg-[#F29100] border-transparent' : 'bg-transparent'}
        `}
        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
      >
        {isMenuOpen ? (
          <X className="w-8 h-8 text-white" />
        ) : (
          <div className="flex flex-col items-center justify-center">
            <div className="animate-spin-3d">
              <Martini className="w-8 h-8 text-white" />
            </div>
          </div>
        )}
      </button>
    </header>
  );
};

export default MobileHeader;
