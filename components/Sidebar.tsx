
import React from 'react';
import { Instagram, Facebook, Martini } from 'lucide-react';

const Sidebar: React.FC = () => {
  return (
    <aside className="fixed left-0 top-0 h-full w-24 border-r-2 border-white/40 flex flex-col items-center z-[60] bg-[#1a1919]">
      {/* Top Icon Box - Matches Navigation Height */}
      <div className="w-full h-24 flex items-center justify-center border-b-2 border-white/50 mb-12">
        <div className="animate-spin-3d inline-block">
          <Martini className="w-12 h-12 text-white" />
        </div>
      </div>
      
      {/* Vertical Branding Labels */}
      <div className="flex-1 flex flex-col items-center justify-center space-y-32">
        <span className="vertical-text text-[9px] uppercase tracking-[0.6em] text-white/60 font-black whitespace-nowrap">ORANGE ROOMS</span>
        <span className="vertical-text text-[9px] uppercase tracking-[0.6em] text-white/60 font-black whitespace-nowrap">EST. 2019</span>
        <span className="vertical-text text-[9px] uppercase tracking-[0.6em] text-white/60 font-black whitespace-nowrap">SOUTHAMPTON</span>
      </div>
      
      {/* Social Links */}
      <div className="mt-12 space-y-10 flex flex-col items-center pb-12">
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