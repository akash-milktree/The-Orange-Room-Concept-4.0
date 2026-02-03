
import React from 'react';

const MarqueeSection: React.FC = () => {
  const text = "When you don't mind the rain, have pancakes in bed or champagne on a Monday? ♦ When you don't mind the rain, have pancakes in bed or champagne on a Monday? ♦ ";
  
  return (
    <section className="bg-[#F29100] h-24 flex items-center overflow-hidden border-b-2 border-white/50 relative z-20">
      <div className="flex whitespace-nowrap animate-marquee">
        <span className="text-[32px] lg:text-[40px] font-serif italic font-semibold text-white tracking-tight px-4">
          {text}
        </span>
        <span className="text-[32px] lg:text-[40px] font-serif italic font-semibold text-white tracking-tight px-4">
          {text}
        </span>
        <span className="text-[32px] lg:text-[40px] font-serif italic font-semibold text-white tracking-tight px-4">
          {text}
        </span>
        <span className="text-[32px] lg:text-[40px] font-serif italic font-semibold text-white tracking-tight px-4">
          {text}
        </span>
      </div>
    </section>
  );
};

export default MarqueeSection;
