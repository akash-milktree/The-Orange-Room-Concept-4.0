
import React from 'react';
import BookingSection from '../components/BookingSection.tsx';
import { Briefcase, Zap, Award, Users, Presentation, ShieldCheck, Mail } from 'lucide-react';

const CorporateHirePage: React.FC = () => {
  return (
    <div className="bg-[#1a1919] min-h-screen">
      {/* HERO SECTION */}
      <section className="relative h-[65vh] md:h-[80vh] w-full overflow-hidden border-b-2 border-white/50">
        <img 
          src="https://www.orangerooms.co.uk/wp-content/uploads/2024/01/Order-Drinks-to-table-pic.jpg" 
          alt="Corporate Events" 
          className="w-full h-full object-cover brightness-[0.4] grayscale-[1]"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
          <span className="text-[10px] md:text-[12px] uppercase tracking-[1em] font-black text-[#F29100] mb-6">PROFESSIONAL IMPACT</span>
          <h1 className="text-[54px] md:text-[90px] lg:text-[130px] font-black leading-none tracking-tighter text-white uppercase">
            Corporate <span className="text-[#F29100]">Hire</span>
          </h1>
          <div className="w-24 md:w-40 h-1.5 md:h-2 bg-[#F29100] mt-10"></div>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <section className="bg-white py-24 px-6 md:px-12 border-b-2 border-[#1a1919]">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-20 items-center">
          <div className="lg:w-1/2 space-y-10">
            <span className="text-[10px] uppercase tracking-[0.4em] font-black text-[#F29100]">BEYOND THE BOARDROOM</span>
            <h2 className="text-[42px] md:text-[60px] font-black text-[#1a1919] uppercase leading-[0.9] tracking-tighter">Inspire <br /><span className="text-[#F29100]">Innovation</span>.</h2>
            <p className="text-[18px] text-[#1a1919]/70 leading-relaxed font-light">
              Ditch the sterile hotel conference room. Orange Rooms provides a Stimulating, high-energy environment for product launches, networking mixers, and team-building retreats. With 4 unique rooms, full AV capabilities, and high-speed Wi-Fi, we blend professional requirements with legendary vibes.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
               <div className="flex flex-col gap-4">
                  <Presentation className="w-10 h-10 text-[#F29100]" />
                  <h4 className="text-[13px] font-black uppercase tracking-widest text-[#1a1919]">AV & STAGING</h4>
                  <p className="text-[12px] text-[#1a1919]/60">Full projection, stage setup, and club-standard sound.</p>
               </div>
               <div className="flex flex-col gap-4">
                  <Zap className="w-10 h-10 text-[#F29100]" />
                  <h4 className="text-[13px] font-black uppercase tracking-widest text-[#1a1919]">TEAM BUILDING</h4>
                  <p className="text-[12px] text-[#1a1919]/60">Mixology masterclasses and interactive activities.</p>
               </div>
            </div>
          </div>
          <div className="lg:w-1/2 relative">
             <div className="border-4 border-[#1a1919] p-4 scale-95 hover:scale-100 transition-transform duration-700">
               <img src="https://www.orangerooms.co.uk/wp-content/uploads/2023/10/The-Full-Venue-scaled.jpg" className="w-full h-auto grayscale-[0.1]" />
             </div>
             <div className="absolute -top-10 -right-10 w-44 h-44 bg-[#F29100] flex items-center justify-center rounded-full hidden lg:flex shadow-2xl border-4 border-white">
                <Award className="w-16 h-16 text-white" />
             </div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="bg-[#1a1919] py-32 px-6 border-b-2 border-white/50">
        <div className="max-w-4xl mx-auto text-center">
           <span className="text-[10px] uppercase tracking-[0.6em] font-black text-[#F29100] mb-8 block">PLAN YOUR EVENT</span>
           <h3 className="text-[32px] md:text-[54px] font-black uppercase text-white mb-10 tracking-tighter leading-none">Elevate your <br /> <span className="text-[#F29100]">Corporate Identity</span>.</h3>
           <div className="flex flex-col sm:flex-row gap-6 justify-center">
             <a href="#dmn-booking-container" className="px-12 py-6 bg-[#F29100] text-white text-[12px] font-black tracking-[0.4em] uppercase hover:bg-white hover:text-black transition-all">
                Request Brochure
             </a>
             <a href="mailto:events@orangerooms.co.uk" className="px-12 py-6 border-2 border-white/30 text-white text-[12px] font-black tracking-[0.4em] uppercase hover:border-[#F29100] hover:text-[#F29100] transition-all flex items-center justify-center gap-3">
                <Mail className="w-4 h-4" /> Email Us
             </a>
           </div>
        </div>
      </section>

      <BookingSection />
    </div>
  );
};

export default CorporateHirePage;
