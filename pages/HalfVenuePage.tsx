
import React from 'react';
import BookingSection from '../components/BookingSection.tsx';
import { Users, Split, Sparkles, ChevronRight } from 'lucide-react';

const HalfVenuePage: React.FC = () => {
  return (
    <div className="bg-[#1a1919] min-h-screen">
      <section className="relative h-[60vh] md:h-[70vh] w-full overflow-hidden border-b-2 border-white/50">
        <img 
          src="https://www.orangerooms.co.uk/wp-content/uploads/2024/01/Order-Drinks-to-table-pic.jpg" 
          alt="Half Venue Booking" 
          className="w-full h-full object-cover brightness-[0.6] grayscale-[0.2]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1a1919] via-transparent to-black/40" />
        <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
          <span className="text-[10px] md:text-[12px] uppercase tracking-[0.6em] font-black text-[#F29100] mb-4">VERSATILE SPACES</span>
          <h1 className="text-[54px] md:text-[88px] lg:text-[110px] font-black leading-none tracking-tighter text-white uppercase">
            Half <span className="text-[#F29100]">Venue</span>
          </h1>
          <div className="mt-6 flex items-center gap-3">
             <Users className="w-4 h-4 text-[#F29100]" />
             <span className="text-[12px] font-black tracking-widest uppercase text-white/70">UP TO 250 GUESTS</span>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-[32px] md:text-[48px] font-black uppercase text-[#1a1919] leading-none mb-6">The Perfect <span className="text-[#F29100]">Mid-Size</span> Solution</h2>
          <p className="text-[16px] md:text-[18px] text-[#1a1919]/70 leading-relaxed font-light mb-12">
            Need more than a room but not the whole venue? Our Half Venue option provides the perfect balance. typically combining the Tiki Lounge and Mile High, or the Main Floor and Off Piste, this configuration allows for distinct zones while maintaining a cohesive party atmosphere.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
            <div className="p-10 border-2 border-[#1a1919] flex flex-col items-center text-center">
              <Split className="w-10 h-10 text-[#F29100] mb-6" />
              <h4 className="text-[14px] font-black uppercase tracking-widest mb-4">Flexible Zoning</h4>
              <p className="text-[13px] text-[#1a1919]/60">Perfect for separating the 'networking zone' from the 'dance zone'.</p>
            </div>
            <div className="p-10 border-2 border-[#1a1919] flex flex-col items-center text-center">
              <Sparkles className="w-10 h-10 text-[#F29100] mb-6" />
              <h4 className="text-[14px] font-black uppercase tracking-widest mb-4">Themed Immersion</h4>
              <p className="text-[13px] text-[#1a1919]/60">Keep the high-energy main floor but offer a tropical Tiki escape.</p>
            </div>
          </div>
          <div className="mt-16">
            <a href="#dmn-booking-container" className="inline-block px-10 py-5 bg-[#1a1919] text-white text-[11px] font-black tracking-widest uppercase hover:bg-[#F29100] transition-colors">Start Planning</a>
          </div>
        </div>
      </section>

      <BookingSection />
    </div>
  );
};

export default HalfVenuePage;
