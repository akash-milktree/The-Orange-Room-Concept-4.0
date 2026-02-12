
import React from 'react';
import BookingSection from '../components/BookingSection.tsx';
import { Crown, Star, Shield, GlassWater, Sparkles, ChevronRight } from 'lucide-react';

const VipBookingsPage: React.FC = () => {
  const packages = [
    {
      name: "The Gold Standard",
      price: "£150",
      includes: ["VIP Entry for 6", "1 Bottle of Spirits", "Unlimited Mixers", "Dedicated Host"]
    },
    {
      name: "The Platinum Vibe",
      price: "£300",
      includes: ["VIP Entry for 10", "2 Bottles of Spirits", "1 Bottle of Prosecco", "Unlimited Mixers"]
    },
    {
      name: "Legendary Status",
      price: "£500+",
      includes: ["Full Booth Control", "Premium Spirits", "Champagne Service", "Security Escort"]
    }
  ];

  return (
    <div className="bg-[#1a1919] min-h-screen">
      {/* HERO SECTION */}
      <section className="relative h-[65vh] md:h-[80vh] w-full overflow-hidden border-b-2 border-white/50">
        <img 
          src="https://www.orangerooms.co.uk/wp-content/uploads/2025/07/Neon-Booth.png" 
          alt="VIP Service" 
          className="w-full h-full object-cover brightness-[0.5] contrast-[1.2]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1a1919] via-transparent to-black/60" />
        <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
          <span className="text-[10px] md:text-[12px] uppercase tracking-[1em] font-black text-[#F29100] mb-6">PREMIUM EXPERIENCE</span>
          <h1 className="text-[60px] md:text-[100px] lg:text-[140px] font-black leading-none tracking-tighter text-white uppercase">
            VIP <span className="text-[#F29100]">Service</span>
          </h1>
          <Crown className="w-16 h-16 text-[#F29100] mt-8" />
        </div>
      </section>

      {/* PACKAGES SECTION */}
      <section className="bg-white py-24 px-6 border-b-2 border-[#1a1919]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <span className="text-[10px] uppercase tracking-[0.4em] font-black text-[#F29100] mb-4 block">LEVEL UP</span>
            <h2 className="text-[40px] md:text-[60px] font-black text-[#1a1919] uppercase tracking-tighter leading-none">Legendary <span className="text-[#F29100]">Packages</span></h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 border-2 border-[#1a1919]">
             {packages.map((pkg, i) => (
               <div key={i} className={`p-10 md:p-14 flex flex-col hover:bg-[#F29100]/5 transition-colors ${i < 2 ? 'lg:border-r-2 border-[#1a1919]' : ''} border-b-2 lg:border-b-0 border-[#1a1919]`}>
                  <div className="mb-10">
                    <h3 className="text-[28px] font-black text-[#1a1919] uppercase mb-2">{pkg.name}</h3>
                    <p className="text-[#F29100] text-[24px] font-black">FROM {pkg.price}</p>
                  </div>
                  <ul className="space-y-4 flex-1 mb-12">
                    {pkg.includes.map((item, idx) => (
                      <li key={idx} className="flex items-center gap-3 text-[13px] font-bold text-[#1a1919]/60 uppercase tracking-widest">
                        <Sparkles className="w-4 h-4 text-[#F29100]" /> {item}
                      </li>
                    ))}
                  </ul>
                  <a href="#dmn-booking-container" className="px-8 py-5 bg-[#1a1919] text-white text-[11px] font-black tracking-widest uppercase hover:bg-[#F29100] transition-colors text-center">
                    Reserve Table
                  </a>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* BOTTLE LIST PREVIEW */}
      <section className="grid grid-cols-1 lg:grid-cols-2 bg-[#1a1919] border-b-2 border-white/50">
        <div className="p-10 md:p-20 flex flex-col justify-center lg:border-r-2 border-white/50">
           <span className="text-[10px] uppercase tracking-[0.4em] font-black text-[#F29100] mb-8 block">BOTTLE SERVICE</span>
           <h2 className="text-[40px] md:text-[54px] font-black text-white uppercase tracking-tighter leading-none mb-10">Only the <br /><span className="text-[#F29100]">Finest</span> Spirits.</h2>
           <p className="text-white/60 text-[16px] font-light leading-relaxed mb-12">
             Our VIP menu features curated selections of Grey Goose, Cîroc, Hennessy, and premium Champagnes. Every bottle is served with a show—think sparklers, dedicated table service, and a custom setup designed for legends.
           </p>
           <div className="flex gap-12">
              <div className="flex flex-col gap-2">
                 <Shield className="w-8 h-8 text-[#F29100]" />
                 <span className="text-[11px] font-black text-white uppercase tracking-widest">QUEUE JUMP</span>
              </div>
              <div className="flex flex-col gap-2">
                 <GlassWater className="w-8 h-8 text-[#F29100]" />
                 <span className="text-[11px] font-black text-white uppercase tracking-widest">PERSONAL HOST</span>
              </div>
           </div>
        </div>
        <div className="relative aspect-video lg:aspect-auto overflow-hidden">
           <img src="https://www.orangerooms.co.uk/wp-content/uploads/2025/07/Small-Dance-Floor-Booth.png" className="w-full h-full object-cover grayscale-[0.5]" />
        </div>
      </section>

      <BookingSection />
    </div>
  );
};

export default VipBookingsPage;
