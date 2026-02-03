
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 h-[75vh] min-h-[600px] border-b-2 border-white/50 overflow-hidden bg-[#1a1919]">
      
      {/* LEFT BOX: Content Area */}
      <div className="p-12 lg:p-20 flex flex-col justify-center relative border-r-2 border-white/50 h-full overflow-hidden">
        
        <div className="max-w-[500px] relative z-20">
          {/* TOP LABEL */}
          <span className="text-[11px] lg:text-[14px] uppercase tracking-[0.5em] font-black text-white/90 mb-2 block ml-1">
            A BAR CALLED
          </span>

          {/* BRAND LOGO: Full Orange as requested */}
          <h1 className="text-[80px] lg:text-[110px] font-black leading-[0.85] text-[#F29100] tracking-tighter uppercase mb-10 select-none">
            Orange <br /> Rooms
          </h1>
          
          <div className="space-y-6">
            <h2 className="text-[34px] lg:text-[40px] font-bold tracking-tight text-white/95 leading-tight">
              Your neighborhood bar
            </h2>
            
            <p className="text-[15px] lg:text-[16px] text-white/70 leading-[1.8] font-light max-w-[440px]">
              You know that feeling you get when you're high on life? The very same feeling that used to occur when you had birthdays as a child? When you are madly in love? When you don't mind the rain, have pancakes in bed or champagne on a Monday? That very feeling was blasting through the windows of this very place like ray of fuckin' sunshine, the 3rd of March 2019.
            </p>
          </div>
        </div>

        {/* Floating Cocktail Glass Graphic - Using SVG URL for better performance */}
        <div className="absolute right-0 bottom-0 z-30 pointer-events-none transform translate-x-[30%] -rotate-[20deg] origin-bottom">
          <img 
            src="https://cdn.prod.website-files.com/625dca65ef10831541cfb895/62d53d99b24bb232731c4c92_gemma-cocktail.svg" 
            alt="Cocktail Illustration" 
            className="w-[224px] lg:w-[336px] h-auto opacity-80"
          />
        </div>
      </div>
      
      {/* RIGHT BOX: Atmosphere Video */}
      <div className="relative h-full group overflow-hidden bg-black">
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
        <div className="absolute inset-0 bg-gradient-to-r from-[#1a1919]/60 via-transparent to-transparent pointer-events-none"></div>
      </div>
      
    </section>
  );
};

export default Hero;