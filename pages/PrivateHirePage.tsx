
import React from 'react';
import BookingSection from '../components/BookingSection.tsx';
import { PartyPopper, Layout, Music, Martini, CheckCircle2, Star } from 'lucide-react';

const PrivateHirePage: React.FC = () => {
  const rooms = [
    { name: "Tiki Lounge", cap: "150", vibe: "Exotic / Tropical" },
    { name: "Off Piste", cap: "100", vibe: "Alpine / Cozy" },
    { name: "Mile High", cap: "60", vibe: "Luxe / Aviation" },
    { name: "Neon Jungle", cap: "80", vibe: "Urban / Garden" }
  ];

  return (
    <div className="bg-[#1a1919] min-h-screen">
      {/* HERO SECTION */}
      <section className="relative h-[65vh] md:h-[80vh] w-full overflow-hidden border-b-2 border-white/50">
        <img 
          src="https://www.orangerooms.co.uk/wp-content/uploads/2023/10/The-Full-Venue-scaled.jpg" 
          alt="Private Hire" 
          className="w-full h-full object-cover brightness-[0.5] grayscale-[0.3]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1a1919] via-transparent to-black/60" />
        <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
          <span className="text-[10px] md:text-[12px] uppercase tracking-[1em] font-black text-[#F29100] mb-6">EXCLUSIVE EVENTS</span>
          <h1 className="text-[54px] md:text-[100px] lg:text-[140px] font-black leading-none tracking-tighter text-white uppercase">
            Private <span className="text-[#F29100]">Hire</span>
          </h1>
          <div className="w-24 md:w-40 h-1.5 md:h-2 bg-[#F29100] mt-10"></div>
        </div>
      </section>

      {/* PHILOSOPHY SECTION */}
      <section className="grid grid-cols-1 lg:grid-cols-2 bg-white text-[#1a1919] border-b-2 border-[#1a1919]">
        <div className="p-10 md:p-20 lg:p-24 flex flex-col justify-center border-b-2 lg:border-b-0 lg:border-r-2 border-[#1a1919]">
          <span className="text-[10px] uppercase tracking-[0.4em] font-black text-[#F29100] mb-10">CELEBRATE IN STYLE</span>
          <h2 className="text-[40px] md:text-[60px] font-black tracking-tighter uppercase leading-[0.9] mb-8">
            Your Vision, <br /> <span className="text-[#F29100]">Our Venue.</span>
          </h2>
          <p className="text-[17px] leading-relaxed font-light mb-12 text-[#1a1919]/80">
            From 21st birthdays to engagement parties and wedding receptions with a twist, Orange Rooms offers the ultimate flexible event space. Whether you need an intimate booth or a full-venue takeover for 500, our dedicated events team handles every detail—from custom cocktail menus to live entertainment.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div className="flex gap-4">
               <PartyPopper className="w-10 h-10 text-[#F29100]" />
               <h4 className="text-[12px] font-black uppercase tracking-widest mt-3">PARTY PLANNING</h4>
            </div>
            <div className="flex gap-4">
               <Layout className="w-10 h-10 text-[#F29100]" />
               <h4 className="text-[12px] font-black uppercase tracking-widest mt-3">BESPOKE SPACES</h4>
            </div>
          </div>
        </div>
        <div className="relative h-[400px] lg:h-auto bg-black">
          <img src="https://www.orangerooms.co.uk/wp-content/uploads/2025/07/Large-Cassette-Booth-Hero-image-1.png" className="absolute inset-0 w-full h-full object-cover opacity-80" />
        </div>
      </section>

      {/* ROOMS TABLE */}
      <section className="bg-[#1a1919] py-24 px-6 border-b-2 border-white/50">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <h3 className="text-[32px] md:text-[50px] font-black text-white uppercase tracking-tighter">Choose Your <span className="text-[#F29100]">Sanctuary</span></h3>
            <p className="text-white/40 text-[12px] uppercase tracking-[0.4em]">Available for private bookings 7 days a week</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 border-2 border-white/20">
            {rooms.map((room, i) => (
              <div key={i} className={`p-10 flex flex-col gap-6 hover:bg-[#F29100] transition-all group ${i < 3 ? 'md:border-r-2 border-white/20' : ''}`}>
                 <h4 className="text-[24px] font-black text-white uppercase group-hover:text-[#1a1919]">{room.name}</h4>
                 <div className="space-y-1">
                    <span className="text-[9px] font-black text-white/40 group-hover:text-black/40 uppercase tracking-widest">CAPACITY</span>
                    <p className="text-white group-hover:text-black font-bold">UP TO {room.cap} GUESTS</p>
                 </div>
                 <div className="space-y-1">
                    <span className="text-[9px] font-black text-white/40 group-hover:text-black/40 uppercase tracking-widest">VIBE</span>
                    <p className="text-white group-hover:text-black font-bold">{room.vibe}</p>
                 </div>
                 <a href="#dmn-booking-container" className="mt-8 text-[11px] font-black uppercase tracking-widest text-[#F29100] group-hover:text-black underline">ENQUIRE</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <BookingSection />
    </div>
  );
};

export default PrivateHirePage;
