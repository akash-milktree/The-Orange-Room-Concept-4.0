
import React from 'react';

const OfferingsSection: React.FC = () => {
  const offerings = [
    {
      title: "Cocktail Bar",
      label: "INNOVATIVE MIXOLOGY",
      content: "The heart of Southampton's nightlife. Discover our award-winning cocktail menu, crafted by master mixologists using premium spirits and unique infusions.",
      cta: "Explore Menu",
      bgImage: "https://www.orangerooms.co.uk/wp-content/uploads/2024/01/Bottomless-Cocktails.jpg"
    },
    {
      title: "Bottomless Brunches",
      label: "THE ULTIMATE DAYTIME PARTY",
      content: "Southampton's favorite weekend ritual. Enjoy two hours of unlimited drinks, incredible food, and high-energy vibes with the city's best DJs.",
      cta: "Join The Party",
      bgImage: "https://www.orangerooms.co.uk/wp-content/uploads/2025/07/smores3-1-1.png"
    },
    {
      title: "Private Hire",
      label: "YOUR EXCLUSIVE EVENT",
      content: "From intimate birthday gatherings to grand wedding receptions, our versatile spaces offer the perfect backdrop for any celebration.",
      cta: "Book Your Space",
      bgImage: "https://www.orangerooms.co.uk/wp-content/uploads/2024/01/themed-brunches.jpg"
    },
    {
      title: "Corporate Hire",
      label: "BUSINESS WITH A TWIST",
      content: "Ditch the boring boardroom. Host your next networking event, product launch, or team-building social in a venue that inspires.",
      cta: "Let's Talk Business",
      bgImage: "https://www.orangerooms.co.uk/wp-content/uploads/2024/01/Order-Drinks-to-table-pic.jpg"
    },
    {
      title: "VIP Bookings",
      label: "THE LEGENDARY EXPERIENCE",
      content: "Secure an exclusive VIP booth with premium bottle service and a dedicated host. Skip the queue and party like a legend.",
      cta: "Go VIP",
      bgImage: "https://www.orangerooms.co.uk/wp-content/uploads/2025/07/Large-Cassette-Booth-Hero-image-1.png"
    },
    {
      title: "Neon Jungle",
      label: "SUMMER IS COMING",
      content: "Step into our immersive tropical oasis. Think neon lights, exotic greenery, and frozen cocktails under the Southampton sky.",
      cta: "Step Inside",
      bgImage: "https://www.orangerooms.co.uk/wp-content/uploads/2023/12/Garden-Tables-1.png"
    }
  ];

  return (
    <section className="bg-[#1a1919] flex flex-col">
      {/* Section Header Bar - Matched to Nav height h-24 and grid columns */}
      <div className="h-24 nav-border grid grid-cols-6 box-border">
        <div className="flex items-center justify-center h-full">
          <span className="text-[10px] uppercase tracking-[0.3em] font-black text-white">THE LINEUP</span>
        </div>
        <div className="col-span-5 h-full opacity-0" />
      </div>

      {/* 3-Column / 2-Row Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {offerings.map((item, idx) => (
          <div 
            key={idx} 
            className={`
              relative overflow-hidden group transition-all duration-500 cursor-pointer border-b-2 border-white/40
              ${(idx + 1) % 3 !== 0 ? 'lg:border-r-2 lg:border-white/40' : ''} 
              ${(idx + 1) % 2 !== 0 ? 'md:border-r-2 md:border-white/40' : ''}
            `}
          >
            <div 
              className="absolute top-0 left-0 w-full h-full z-0 opacity-0 group-hover:opacity-70 transition-all duration-700 bg-cover bg-center scale-110 group-hover:scale-100"
              style={{ backgroundImage: `url(${item.bgImage})` }}
            />
            <div className="absolute top-0 left-0 w-full h-full z-[1] bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative z-10 flex flex-col h-full space-y-6 p-10 lg:p-14 pointer-events-none">
              <div className="space-y-3">
                <h3 className="text-[30px] font-bold tracking-tight text-white leading-tight transition-colors duration-300 group-hover:text-[#F29100]">
                  {item.title}
                </h3>
                <p className="text-[10px] uppercase tracking-[0.2em] font-black text-[#F29100]">
                  {item.label}
                </p>
              </div>
              <p className="text-[14.5px] text-white/70 group-hover:text-white leading-relaxed font-light transition-colors duration-300 drop-shadow-sm">
                {item.content}
              </p>
              <div className="pt-4 mt-auto">
                <span className="inline-block text-[11px] uppercase tracking-[0.3em] font-bold text-white/40 group-hover:text-white transition-all border-b border-white/20 group-hover:border-[#F29100] pb-1">
                  {item.cta}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OfferingsSection;
