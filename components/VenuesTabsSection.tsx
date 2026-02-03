
import React, { useState } from 'react';

interface Venue {
  id: string;
  name: string;
  title: string;
  subtitle: string;
  image: string;
}

const venues: Venue[] = [
  {
    id: 'tables',
    name: 'Our Tables',
    title: 'Start your weekend in style!',
    subtitle: 'Bottomless cocktail sessions available from only £25 - 2 hours unlimited cocktails!',
    image: 'https://www.orangerooms.co.uk/wp-content/uploads/2024/01/Bottomless-Cocktails.jpg'
  },
  {
    id: 'tiki',
    name: 'Tiki',
    title: 'Exotic Escape awaits',
    subtitle: 'Step into our tropical paradise with world-class Mai Tais and immersive decor.',
    image: 'https://www.orangerooms.co.uk/wp-content/uploads/2023/12/Garden-Tables-1.png'
  },
  {
    id: 'off-piste',
    name: 'Off Piste',
    title: 'The Alpine Lodge Experience',
    subtitle: 'Cozy up in our mountain-inspired retreat. Perfect for intimate gatherings.',
    image: 'https://www.orangerooms.co.uk/wp-content/uploads/2024/01/themed-brunches.jpg'
  },
  {
    id: 'full-venue',
    name: 'Full Venue',
    title: 'The Ultimate Space',
    subtitle: 'Host up to 500 guests for the grandest celebrations in Southampton.',
    image: 'https://www.orangerooms.co.uk/wp-content/uploads/2025/07/Large-Cassette-Booth-Hero-image-1.png'
  },
  {
    id: 'half-venue',
    name: 'Half Venue',
    title: 'Versatile Hosting',
    subtitle: 'Perfect for medium-sized events, networking, and private parties.',
    image: 'https://www.orangerooms.co.uk/wp-content/uploads/2024/01/Order-Drinks-to-table-pic.jpg'
  },
  {
    id: 'mile-high',
    name: 'Mile High',
    title: 'First Class Lounge',
    subtitle: 'Take your night to new heights in our exclusive aviation-themed VIP lounge.',
    image: 'https://www.orangerooms.co.uk/wp-content/uploads/2025/07/smores3-1-1.png'
  }
];

const VenuesTabsSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState(venues[0]);

  return (
    <section className="bg-[#1a1919] flex flex-col relative pb-32">
      {/* 1. Top Content: Title Box & Subtitle (Adjusted spacing since header bar is removed) */}
      <div className="flex flex-col items-center pt-24 pb-16 px-6 bg-[#1a1919] border-b-2 border-white/50">
        <div className="text-center max-w-4xl">
           {/* Primary Brand Orange Header - Sharp editorial look with solid white border */}
           <div className="inline-block bg-[#F29100] border-2 border-white px-12 py-6 shadow-2xl mb-8">
              <h3 className="text-[28px] lg:text-[44px] font-bold tracking-tight text-white leading-tight">
                {activeTab.title}
              </h3>
           </div>
           <p className="text-[16px] lg:text-[18px] text-white/60 leading-relaxed font-light">
             {activeTab.subtitle}
           </p>
        </div>
      </div>

      {/* 2. Tab Menu - Styled EXACTLY like top navigation */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 h-24 nav-border box-border">
        {venues.map((venue, idx) => (
          <button
            key={venue.id}
            onMouseEnter={() => setActiveTab(venue)}
            onClick={() => setActiveTab(venue)}
            className={`
              flex items-center justify-center transition-all duration-300 uppercase tracking-[0.3em] text-[10px] font-black h-full
              ${activeTab.id === venue.id ? 'bg-[#F29100] text-white' : 'text-white/60 hover:bg-white/10'}
              ${idx < venues.length - 1 ? 'block-border' : ''}
            `}
          >
            {venue.name}
          </button>
        ))}
      </div>

      {/* 3. Main Media Area */}
      <div className="flex flex-col items-center py-20 px-6">
        <div className="w-full max-w-[1100px] relative">
          <div className="p-1 lg:p-px bg-white/40 rounded-none overflow-hidden shadow-2xl">
            <div className="aspect-video relative overflow-hidden bg-black/50">
              <img 
                src={activeTab.image} 
                alt={activeTab.name}
                className="w-full h-full object-cover transition-all duration-1000 ease-out scale-100 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            </div>
          </div>

          {/* Buttons Row */}
          <div className="mt-16 flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8">
            <a 
              href="#" 
              className="w-full sm:w-72 py-6 bg-[#F29100] text-white text-[11px] font-black uppercase tracking-[0.4em] text-center hover:bg-white hover:text-[#1a1919] transition-all duration-300 shadow-2xl"
            >
              View Details
            </a>
            <a 
              href="#" 
              className="w-full sm:w-72 py-6 border-2 border-white/40 text-white text-[11px] font-black uppercase tracking-[0.4em] text-center hover:border-[#F29100] hover:text-[#F29100] transition-all duration-300 shadow-2xl"
            >
              Book Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VenuesTabsSection;
