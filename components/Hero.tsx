
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 min-h-[75vh] border-b-2 border-white/50 overflow-hidden bg-[#1a1919]">
      
      {/* LEFT BOX: Content Area */}
      <div className="p-6 sm:p-10 md:p-12 lg:p-20 flex flex-col justify-center relative border-b-2 lg:border-b-0 lg:border-r-2 border-white/50 h-full overflow-hidden">
        
        <div className="max-w-[500px] relative z-20">
          {/* TOP LABEL */}
          <span className="text-[10px] md:text-[12px] lg:text-[14px] uppercase tracking-[0.5em] font-black text-white/90 mb-2 block ml-1">
            A BAR CALLED
          </span>

          {/* BRAND LOGO */}
          <h1 className="text-[48px] sm:text-[64px] md:text-[80px] lg:text-[110px] font-black leading-[0.85] text-[#F29100] tracking-tighter uppercase mb-8 lg:mb-10 select-none">
            Orange <br className="hidden sm:block" /> Rooms
          </h1>
          
          <div className="space-y-4 md:space-y-6">
            <h2 className="text-[24px] sm:text-[28px] md:text-[34px] lg:text-[40px] font-bold tracking-tight text-white/95 leading-tight">
              Southampton's legendary sanctuary
            </h2>
            
            <p className="text-[14px] lg:text-[16px] text-white/70 leading-[1.6] lg:leading-[1.8] font-light max-w-[480px]">
              Celebrating 23 incredible years of magic! Step into our retro-inspired wonderland—from tropical Tiki escapes and après-ski beats in Off Piste to first-class luxury at Mile High. Whether for a masterclass or a late-night groove, we are the city’s destination to Meet, Drink, and Lounge until 3am.
            </p>
          </div>
        </div>

        {/* Floating Cocktail Glass Graphic */}
        <div className="absolute right-0 bottom-0 z-10 pointer-events-none transform translate-x-[20%] lg:translate-x-[30%] -rotate-[15deg] lg:-rotate-[20deg] origin-bottom opacity-20 md:opacity-40 lg:opacity-80">
          <img 
            src="https://cdn.prod.website-files.com/625dca65ef10831541cfb895/62d53d99b24bb232731c4c92_gemma-cocktail.svg" 
            alt="Cocktail Illustration" 
            className="w-[160px] sm:w-[200px] md:w-[224px] lg:w-[336px] h-auto"
          />
        </div>
      </div>
      
      {/* RIGHT BOX: Atmosphere Video */}
      <div className="relative h-[350px] sm:h-[450px] lg:h-full group overflow-hidden bg-black">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          className="w-full h-full object-cover object-center grayscale-[0.2] contrast-[1.1] transition-transform duration-[8000ms] ease-out"
        >
          <source src="https://www.orangerooms.co.uk/wp-content/uploads/2024/02/x2mate.com-Orange-Rooms-Cocktails-LG-1080p.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-[#1a1919]/60 via-transparent to-transparent pointer-events-none"></div>
      </div>
      
    </section>
  );
};

export default Hero;
