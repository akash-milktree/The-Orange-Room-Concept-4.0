
import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 min-h-[85vh] border-b-2 border-white/50 overflow-hidden bg-[#1a1919]">
      
      {/* LEFT BOX: Content Area */}
      <div className="p-6 sm:p-10 md:p-12 lg:p-20 flex flex-col justify-center relative border-b-2 lg:border-b-0 lg:border-r-2 border-white/50 h-full overflow-hidden">
        
        <div className="max-w-[550px] relative z-20">
          {/* TOP LABEL */}
          <span className="text-[10px] md:text-[12px] lg:text-[14px] uppercase tracking-[0.5em] font-black text-[#F29100] mb-4 block ml-1">
            ESTABLISHED 2001
          </span>

          {/* BRAND LOGO */}
          <h1 className="text-[48px] sm:text-[64px] md:text-[80px] lg:text-[110px] font-black leading-[0.85] text-white tracking-tighter uppercase mb-8 lg:mb-10 select-none">
            Orange <br className="hidden sm:block" /> Rooms
          </h1>
          
          <div className="space-y-6 md:space-y-8">
            <h2 className="text-[24px] sm:text-[28px] md:text-[34px] lg:text-[44px] font-bold tracking-tight text-white/95 leading-tight">
              Southampton's legendary sanctuary for <span className="text-[#F29100] font-serif italic">Good Vibes</span>.
            </h2>
            
            <p className="text-[14px] lg:text-[16px] text-white/70 leading-[1.6] lg:leading-[1.8] font-light max-w-[480px]">
              Celebrating 23 incredible years! Step into our retro-inspired wonderland—from tropical Tiki escapes to alpine beats in Off Piste. 
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a 
                href="#dmn-booking-container" 
                className="inline-flex items-center justify-center gap-3 px-8 py-5 bg-[#F29100] text-white font-black text-[12px] tracking-[0.2em] uppercase hover:bg-white hover:text-[#1a1919] transition-all group shadow-2xl"
              >
                Book A Table <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="#" 
                className="inline-flex items-center justify-center px-8 py-5 border-2 border-white/30 text-white font-black text-[12px] tracking-[0.2em] uppercase hover:border-[#F29100] hover:text-[#F29100] transition-all"
              >
                Our Lineup
              </a>
            </div>
          </div>
        </div>

        {/* Floating Cocktail Glass Graphic */}
        <div className="absolute right-0 bottom-0 z-10 pointer-events-none transform translate-x-[20%] lg:translate-x-[30%] -rotate-[15deg] lg:-rotate-[20deg] origin-bottom opacity-10 md:opacity-20 lg:opacity-60">
          <img 
            src="https://cdn.prod.website-files.com/625dca65ef10831541cfb895/62d53d99b24bb232731c4c92_gemma-cocktail.svg" 
            alt="Cocktail Illustration" 
            className="w-[160px] sm:w-[200px] md:w-[224px] lg:w-[336px] h-auto"
          />
        </div>
      </div>
      
      {/* RIGHT BOX: Atmosphere Video */}
      <div className="relative h-[400px] lg:h-full group overflow-hidden bg-black">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          className="w-full h-full object-cover object-center grayscale-[0.2] contrast-[1.1] transition-transform duration-[8000ms] ease-out scale-105"
        >
          <source src="https://www.orangerooms.co.uk/wp-content/uploads/2024/02/x2mate.com-Orange-Rooms-Cocktails-LG-1080p.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-[#1a1919]/40 via-transparent to-transparent pointer-events-none"></div>
      </div>
      
    </section>
  );
};

export default Hero;
