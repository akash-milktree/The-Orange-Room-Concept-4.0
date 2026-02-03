
import React from 'react';
import { Instagram, Facebook, Martini, Menu, X } from 'lucide-react';

interface SidebarProps {
  toggleMenu: () => void;
  isMenuOpen: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({ toggleMenu, isMenuOpen }) => {
  return (
    <aside className={`
      fixed left-0 top-0 h-full z-[100] bg-[#1a1919] transition-all duration-300
      w-24 border-r-2 border-white/40 flex-col items-center
      hidden lg:flex
      ${isMenuOpen ? 'bg-[#F29100]' : 'bg-[#1a1919]'}
    `}>
      {/* Burger / Logo Trigger Area */}
      <button 
        onClick={toggleMenu}
        className={`
          w-full h-24 flex items-center justify-center border-b-2 border-white/50 
          transition-colors duration-300 group hover:bg-[#F29100]
          ${isMenuOpen ? 'bg-white text-[#F29100]' : ''}
        `}
      >
        <div className="relative">
          {isMenuOpen ? (
            <X className="w-8 h-8 text-[#F29100]" />
          ) : (
            <div className="flex flex-col items-center justify-center group">
              <div className="animate-spin-3d group-hover:hidden">
                <p className="font-black text-white text-xs mb-1">OR</p>
                <Martini className="w-10 h-10 text-white" />
              </div>
              <Menu className="w-10 h-10 text-white hidden group-hover:block" />
            </div>
          )}
        </div>
      </button>
      
      {/* Vertical Branding Labels */}
      <div className="flex-1 flex flex-col items-center justify-center space-y-32 py-10">
        <span className="vertical-text text-[9px] uppercase tracking-[0.6em] text-white/60 font-black whitespace-nowrap">ORANGE ROOMS</span>
        <span className="vertical-text text-[9px] uppercase tracking-[0.6em] text-white/60 font-black whitespace-nowrap">EST. 2019</span>
        <span className="vertical-text text-[9px] uppercase tracking-[0.6em] text-white/60 font-black whitespace-nowrap">SOUTHAMPTON</span>
      </div>
      
      {/* Social Links */}
      <div className="mt-auto space-y-10 flex flex-col items-center pb-12">
        <a href="https://www.instagram.com/orangerooms/" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-white transition-colors">
          <Instagram className="w-6 h-6" />
        </a>
        <a href="https://www.facebook.com/orangerooms/" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-white transition-colors">
          <Facebook className="w-6 h-6" />
        </a>
      </div>
    </aside>
  );
};

export default Sidebar;
