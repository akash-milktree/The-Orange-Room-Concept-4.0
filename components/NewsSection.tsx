
import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const NewsSection: React.FC = () => {
  const newsItems = [
    {
      title: "Catering.",
      label: "PERFECTLY TAILORED FOR YOU",
      content: "Are you looking for perfectly tailored cocktail program for your events, parties och other celebrative moments. Stay calm, just reach out to us."
    },
    {
      title: "The legendary Callooh 25/9",
      label: "ONE OF LONDON'S FINEST",
      content: "We are thrilled to have the legends in house upcoming Monday 25/9. These fine peeps start at 20:00 and will run until we close. Make your reservation!",
      link: "https://www.calloohcallaybar.com/"
    },
    {
      title: "Bird CPH in House 20/9",
      label: "CATCH THE BIRD",
      content: "We are proud to present Bird from Copenhagen/DK flying in and creating their magic during Negroni Week. Do not miss this friends."
    },
    {
      title: "We're turning 4 years old!",
      label: "SATURDAY MAY 27TH - 2023",
      content: "Time flies! We so happy and proud to have been rolling for 4 years. Swing by tonight for some celebrations and more of those happy times. We also want to thank all of you for all your support, laughter and vibes."
    }
  ];

  return (
    <section className="bg-[#1a1919] flex flex-col">
      {/* Section Header Bar */}
      <div className="h-20 sm:h-24 px-6 sm:px-12 nav-border flex items-center justify-between box-border">
        <span className="text-[9px] sm:text-[10px] uppercase tracking-[0.3em] font-black text-white">NEWS</span>
        <div className="flex items-center space-x-3 sm:space-x-4">
          <button className="w-8 h-8 rounded-full border-2 border-white/50 flex items-center justify-center hover:border-white transition-colors">
            <ChevronLeft className="w-4 h-4 text-white" />
          </button>
          <button className="w-8 h-8 rounded-full border-2 border-white/50 flex items-center justify-center hover:border-white transition-colors">
            <ChevronRight className="w-4 h-4 text-white" />
          </button>
        </div>
      </div>

      {/* Grid: Stacks on mobile, 2 cols on tablet, 4 on desktop */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 min-h-[400px]">
        {newsItems.map((item, idx) => (
          <div 
            key={idx} 
            className={`p-8 sm:p-10 lg:p-14 flex flex-col space-y-5 sm:space-y-6 
              ${idx < newsItems.length - 1 ? 'lg:block-border' : ''} 
              ${idx % 2 === 0 ? 'sm:border-r-2 sm:border-white/50 lg:border-r-0' : ''}
              border-b-2 sm:border-b-0 border-white/50 hover:bg-white/[0.02] transition-colors`}
          >
            <div className="space-y-2 sm:space-y-3">
              <h3 className="text-[24px] sm:text-[28px] font-bold tracking-tight text-white leading-tight">
                {item.title}
              </h3>
              <p className="text-[9px] uppercase tracking-[0.2em] font-black text-[#F29100]">
                {item.label}
              </p>
            </div>
            
            <p className="text-[13px] sm:text-[14px] text-white/60 leading-relaxed font-light">
              {item.content}
            </p>

            {item.link && (
              <a 
                href={item.link} 
                className="text-[11px] sm:text-[12px] text-white/40 hover:text-white underline decoration-white/20 underline-offset-8 transition-colors break-all mt-auto pt-4"
                target="_blank" 
                rel="noopener noreferrer"
              >
                {item.link}
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default NewsSection;
