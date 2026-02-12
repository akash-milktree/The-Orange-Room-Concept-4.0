
import React from 'react';
import BookingSection from '../components/BookingSection.tsx';
import { Sparkles, Utensils, GlassWater, Clock, ChevronRight, Music, CheckCircle2 } from 'lucide-react';

const BrunchesPage: React.FC = () => {
  const brunchFeatures = [
    {
      title: "Bottomless Cocktails",
      desc: "2 hours of unlimited house cocktails, prosecco, or draught beer.",
      icon: <GlassWater className="w-10 h-10 text-[#F29100]" />
    },
    {
      title: "The Menu",
      desc: "From Sourdough stacks to Breakfast Burritos and tropical bowls.",
      icon: <Utensils className="w-10 h-10 text-[#F29100]" />
    },
    {
      title: "Live Soundtrack",
      desc: "Our resident DJs spinning Disco, House, and Retro anthems.",
      icon: <Music className="w-10 h-10 text-[#F29100]" />
    }
  ];

  return (
    <div className="bg-[#1a1919] min-h-screen">
      {/* HERO SECTION */}
      <section className="relative h-[65vh] md:h-[80vh] w-full overflow-hidden border-b-2 border-white/50">
        <img 
          src="https://www.orangerooms.co.uk/wp-content/uploads/2025/07/smores3-1-1.png" 
          alt="Bottomless Brunches" 
          className="w-full h-full object-cover brightness-[0.5] contrast-[1.1] scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1a1919] via-transparent to-black/60" />
        <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
          <span className="text-[10px] uppercase tracking-[0.8em] font-black text-[#F29100] mb-6 block">SATURDAY & SUNDAY</span>
          <h1 className="text-[54px] md:text-[90px] lg:text-[130px] font-black leading-none tracking-tighter text-white uppercase drop-shadow-2xl">
            Bottomless <br /> <span className="text-[#F29100]">Brunches</span>
          </h1>
          <div className="mt-10 flex items-center gap-4 bg-white/10 backdrop-blur-md px-10 py-5 border border-white/20">
            <Clock className="w-5 h-5 text-[#F29100]" />
            <span className="text-[14px] font-black tracking-[0.3em] uppercase">12:00 PM — 6:00 PM</span>
          </div>
        </div>
      </section>

      {/* INTRO SECTION */}
      <section className="bg-white text-[#1a1919] py-24 px-6 md:px-12 border-b-2 border-[#1a1919]">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <span className="text-[10px] uppercase tracking-[0.4em] font-black text-[#F29100] mb-8 block">THE DAYTIME TAKEOVER</span>
            <h2 className="text-[42px] md:text-[70px] font-black leading-[0.85] tracking-tighter uppercase mb-10">
              The Best <br /> <span className="text-[#F29100]">Party</span> in town.
            </h2>
            <p className="text-[18px] leading-relaxed font-light text-[#1a1919]/80 mb-12">
              Southampton’s most legendary daytime party. Our Bottomless Brunch sessions are the perfect way to celebrate anything from birthdays to 'just because'. Enjoy 2 hours of unlimited drinks, a delicious main course, and high-octane vibes in the coolest venue in town.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
               {brunchFeatures.slice(0, 2).map((f, i) => (
                 <div key={i} className="flex flex-col gap-4">
                   <div className="w-16 h-16 border-2 border-[#1a1919] flex items-center justify-center">{f.icon}</div>
                   <h4 className="text-[14px] font-black uppercase tracking-widest">{f.title}</h4>
                   <p className="text-[13px] text-[#1a1919]/60">{f.desc}</p>
                 </div>
               ))}
            </div>
          </div>
          <div className="relative aspect-[4/5] overflow-hidden">
             <img src="https://www.orangerooms.co.uk/wp-content/uploads/2024/01/themed-brunches.jpg" className="w-full h-full object-cover grayscale-[0.2]" />
             <div className="absolute top-10 right-10 bg-[#F29100] p-10 rotate-3 shadow-2xl">
                <span className="text-white text-[32px] font-black block leading-none">FROM</span>
                <span className="text-white text-[64px] font-black block leading-none">£25</span>
                <span className="text-white text-[12px] font-black uppercase tracking-widest">PER PERSON</span>
             </div>
          </div>
        </div>
      </section>

      {/* THE RULES SECTION */}
      <section className="bg-[#1a1919] py-24 px-6 border-b-2 border-white/50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-[32px] md:text-[50px] font-black text-white uppercase tracking-tighter mb-4">The <span className="text-[#F29100]">Bottomless</span> Rules</h3>
            <p className="text-white/40 text-[12px] uppercase tracking-[0.4em]">Fair play for the best party vibes</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
             {[
               "Unlimited drinks for exactly 120 minutes.",
               "One drink at a time per person.",
               "Choose one main dish from our brunch menu.",
               "Last drink orders are taken 15 mins before time ends.",
               "Management reserve the right to refuse service.",
               "Bookings are essential to guarantee your spot."
             ].map((rule, idx) => (
               <div key={idx} className="p-8 border-2 border-white/10 flex items-start gap-4 hover:border-[#F29100] transition-colors">
                 <CheckCircle2 className="w-5 h-5 text-[#F29100] shrink-0 mt-1" />
                 <span className="text-white text-[14px] font-light leading-relaxed">{rule}</span>
               </div>
             ))}
          </div>
        </div>
      </section>

      <BookingSection />
    </div>
  );
};

export default BrunchesPage;
