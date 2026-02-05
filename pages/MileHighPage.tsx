
import React from 'react';
import BookingSection from '../components/BookingSection.tsx';
import { Wind, Shield, Users, Sparkles, ChevronRight } from 'lucide-react';

const MileHighPage: React.FC = () => {
  return (
    <div className="bg-[#1a1919] min-h-screen">
      <section className="relative h-[65vh] md:h-[80vh] w-full overflow-hidden border-b-2 border-white/50">
        <img 
          src="https://www.orangerooms.co.uk/wp-content/uploads/2024/01/mile-high-logo.jpg" 
          alt="Mile High First Class Lounge" 
          className="w-full h-full object-cover brightness-[0.5] contrast-[1.1] scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1a1919] via-[#1a1919]/20 to-black/60" />
        <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
          <span className="text-[10px] md:text-[12px] uppercase tracking-[1em] font-black text-[#F29100] mb-6">PREPARE FOR TAKE-OFF</span>
          <h1 className="text-[54px] md:text-[90px] lg:text-[130px] font-black leading-none tracking-tighter text-white uppercase drop-shadow-2xl">
            Mile <span className="text-[#F29100]">High</span>
          </h1>
          <div className="flex items-center gap-3 mt-10">
             <div className="h-px w-10 bg-white/40"></div>
             <span className="text-[12px] font-black tracking-widest uppercase text-white/80">FIRST CLASS ONLY</span>
             <div className="h-px w-10 bg-white/40"></div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-32 px-6 overflow-hidden">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-16 items-center">
          <div className="flex-1 space-y-10">
            <span className="text-[10px] uppercase tracking-[0.5em] font-black text-[#F29100]">ELITE INDULGENCE</span>
            <h2 className="text-[42px] md:text-[64px] font-black text-[#1a1919] uppercase leading-[0.9] tracking-tighter">Your <span className="text-[#F29100]">Luxury</span> Destination.</h2>
            <p className="text-[16px] md:text-[18px] text-[#1a1919]/70 leading-relaxed font-light">
              Elevate your evening in our aviation-themed sanctuary. With sleek curves, private booth service, and a dedicated 'First Class' bar, Mile High is Southampton's premium destination for those who appreciate the finer details. This is an exclusive area designed for intimate gatherings and VIP celebrations.
            </p>
            <div className="grid grid-cols-2 gap-8">
              <div className="space-y-4">
                 <Shield className="w-8 h-8 text-[#F29100]" />
                 <h4 className="text-[12px] font-black uppercase tracking-widest text-[#1a1919]">Private Entrance</h4>
                 <p className="text-[11px] text-[#1a1919]/60">Exclusive access for Mile High guests.</p>
              </div>
              <div className="space-y-4">
                 <Sparkles className="w-8 h-8 text-[#F29100]" />
                 <h4 className="text-[12px] font-black uppercase tracking-widest text-[#1a1919]">VIP Service</h4>
                 <p className="text-[11px] text-[#1a1919]/60">Dedicated host and premium bottle menu.</p>
              </div>
            </div>
          </div>
          <div className="flex-1 relative">
            <div className="absolute -inset-4 border-2 border-[#F29100] translate-x-4 translate-y-4"></div>
            <img src="https://www.orangerooms.co.uk/wp-content/uploads/2025/07/Neon-Booth.png" className="relative z-10 w-full h-auto grayscale-[0.2]" />
          </div>
        </div>
      </section>

      <section className="bg-[#1a1919] py-20 border-y-2 border-white/50">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h3 className="text-[28px] md:text-[42px] font-black uppercase text-white mb-8 tracking-tighter">Ready for <span className="text-[#F29100]">Boarding?</span></h3>
          <p className="text-white/40 text-[14px] font-light leading-relaxed mb-12">Reservations in Mile High are highly sought after. Secure your boarding pass today to guarantee your spot in our first-class cabin.</p>
          <a href="#dmn-booking-container" className="inline-block px-12 py-6 bg-white text-black text-[12px] font-black tracking-[0.4em] uppercase hover:bg-[#F29100] hover:text-white transition-all">Book First Class</a>
        </div>
      </section>

      <BookingSection />
    </div>
  );
};

export default MileHighPage;
