
import React from 'react';
import BookingSection from '../components/BookingSection.tsx';
import { Palmtree, Zap, Waves, Sparkles, Sun, Flame } from 'lucide-react';

const NeonJunglePage: React.FC = () => {
  return (
    <div className="bg-[#1a1919] min-h-screen">
      {/* HERO SECTION */}
      <section className="relative h-[65vh] md:h-[80vh] w-full overflow-hidden border-b-2 border-white/50">
        <img 
          src="https://www.orangerooms.co.uk/wp-content/uploads/2023/12/Garden-Tables-1.png" 
          alt="Neon Jungle" 
          className="w-full h-full object-cover brightness-[0.5] contrast-[1.2] scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1a1919] via-transparent to-black/60" />
        <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
          <span className="text-[10px] md:text-[12px] uppercase tracking-[0.8em] font-black text-[#F29100] mb-6">A TROPICAL ODYSSEY</span>
          <h1 className="text-[54px] md:text-[90px] lg:text-[130px] font-black leading-none tracking-tighter text-white uppercase drop-shadow-2xl">
            Neon <span className="text-[#F29100]">Jungle</span>
          </h1>
          <p className="font-serif italic text-white/90 text-[18px] md:text-[24px] mt-6">Immersive greenery. Frozen vibes. Neon lights.</p>
        </div>
      </section>

      {/* PHILOSOPHY GRID */}
      <section className="bg-white py-24 px-6 md:px-12 border-b-2 border-[#1a1919]">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-20 items-center">
          <div className="lg:w-1/2 relative order-2 lg:order-1">
             <div className="absolute -inset-4 border-2 border-[#F29100] -translate-x-4 translate-y-4"></div>
             <img src="https://images.unsplash.com/photo-1545127398-14699f92334b?auto=format&fit=crop&q=80&w=1200" className="relative z-10 w-full aspect-square object-cover grayscale-[0.2]" />
          </div>
          <div className="lg:w-1/2 space-y-10 order-1 lg:order-2">
            <span className="text-[10px] uppercase tracking-[0.4em] font-black text-[#F29100]">WELCOME TO THE WILD</span>
            <h2 className="text-[42px] md:text-[60px] font-black text-[#1a1919] uppercase leading-[0.9] tracking-tighter">Enter the <br /><span className="text-[#F29100]">Oasis</span>.</h2>
            <p className="text-[18px] text-[#1a1919]/70 leading-relaxed font-light">
              Step into our fully immersive Neon Jungle—a fusion of urban grit and tropical paradise. Dense exotic greenery is illuminated by glowing neon signs, creating a sensory escape like no other in Southampton. Featuring its own dedicated frozen cocktail bar and semi-outdoor vibes, it’s the ultimate spot to lose yourself in the music.
            </p>
            <div className="grid grid-cols-2 gap-8">
               <div className="space-y-3">
                  <Sun className="w-10 h-10 text-[#F29100]" />
                  <h4 className="text-[12px] font-black uppercase tracking-widest text-[#1a1919]">AL FRESCO FEEL</h4>
               </div>
               <div className="space-y-3">
                  <Zap className="w-10 h-10 text-[#F29100]" />
                  <h4 className="text-[12px] font-black uppercase tracking-widest text-[#1a1919]">NEON ARTWORK</h4>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* FROZEN BAR HIGHLIGHT */}
      <section className="bg-[#1a1919] py-24 px-6 border-b-2 border-white/50 overflow-hidden relative">
         <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2 z-10">
               <span className="text-[10px] uppercase tracking-[0.4em] font-black text-[#F29100] mb-8 block">THE SUB-ZERO EXPERIENCE</span>
               <h3 className="text-[42px] md:text-[64px] font-black text-white uppercase tracking-tighter leading-none mb-10">The Frozen <br /> <span className="text-[#F29100]">Cocktail Bar</span></h3>
               <p className="text-white/60 text-[18px] font-light leading-relaxed mb-12">
                 Exclusive to the Neon Jungle, our dedicated frozen bar serves up ice-cold classics with a twist. From Frozen Daquiris to spiked Slushies, these are designed to keep you cool when the dance floor heats up.
               </p>
               <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-6 border-2 border-white/10 flex items-center gap-4">
                     <Waves className="w-8 h-8 text-[#F29100]" />
                     <span className="text-[11px] font-black text-white uppercase tracking-widest">ICED CLASSICS</span>
                  </div>
                  <div className="p-6 border-2 border-white/10 flex items-center gap-4">
                     <Flame className="w-8 h-8 text-[#F29100]" />
                     <span className="text-[11px] font-black text-white uppercase tracking-widest">HOUSE INFUSIONS</span>
                  </div>
               </div>
            </div>
            <div className="lg:w-1/2 relative aspect-video lg:aspect-square">
               <img src="https://www.orangerooms.co.uk/wp-content/uploads/2024/01/Bottomless-Cocktails.jpg" className="w-full h-full object-cover brightness-[0.7] grayscale-[0.4]" />
               <div className="absolute inset-0 bg-[#F29100]/20 mix-blend-color"></div>
            </div>
         </div>
      </section>

      <BookingSection />
    </div>
  );
};

export default NeonJunglePage;
