
import React, { useState } from 'react';
import BookingSection from '../components/BookingSection.tsx';
import { Utensils, Zap, Heart, Sparkles, Star, ChevronLeft, ChevronRight, Maximize2, X, Info, Download, Clock, Cookie } from 'lucide-react';

const FoodMenuPage: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  // Placeholder URLs for the actual food menu board images
  const menuImages = [
    "https://www.orangerooms.co.uk/wp-content/uploads/2024/01/Food-Menu-Board-1.jpg",
    "https://www.orangerooms.co.uk/wp-content/uploads/2024/01/Food-Menu-Board-2.jpg",
  ];

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % menuImages.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + menuImages.length) % menuImages.length);

  const fonduePricing = [
    { label: "1 person", price: "£7.99" },
    { label: "2 people", price: "£14.95" },
    { label: "3 people", price: "£19.95" },
    { label: "4 people", price: "£24.95" },
    { label: "5 people", price: "£29.95" },
    { label: "6 people", price: "£34.95" },
  ];

  const sections = [
    {
      title: "Tropical Tacos",
      items: [
        { name: "Tiki Taco Tray", price: "£14.00", desc: "Choice of pulled pork or spicy jackfruit, topped with pineapple salsa and lime crema. (4 Tacos)" },
        { name: "Crispy Shrimp Tacos", price: "£15.00", desc: "Panko prawns, slaw, sriracha mayo and coriander." },
        { name: "Halloumi Sunshine", price: "£13.50", desc: "Grilled halloumi, smashed avocado, and mango habanero sauce." },
        { name: "Beef Barbacoa", price: "£15.50", desc: "Slow cooked beef, pickled red onions and chipotle cream." }
      ]
    },
    {
      title: "Brunch Favorites",
      items: [
        { name: "Sourdough Stacks", price: "£9.50", desc: "Smashed avocado, poached eggs, and chili flakes on thick sourdough." },
        { name: "Breakfast Burrito", price: "£10.00", desc: "Scrambled eggs, chorizo, black beans, cheese and house salsa." },
        { name: "Pancake Tower", price: "£8.50", desc: "Fluffy pancakes with maple syrup, berries and whipped cream." },
        { name: "The OG Breakfast", price: "£11.00", desc: "The full works. Eggs, bacon, sausage, beans, mushrooms and toast." }
      ]
    },
    {
      title: "Party Sharing",
      items: [
        { name: "Orange Rooms Platter", price: "£22.00", desc: "Wings, tacos, wedges, and onion rings. Perfect for 3-4 people." },
        { name: "Nachos Supremo", price: "£12.50", desc: "Heaps of cheese, jalapeños, salsa, guac and sour cream. Add chili for £3." },
        { name: "Slider Selection", price: "£15.00", desc: "Six mini burgers: 2 beef, 2 chicken, 2 veggie. Great for groups." },
        { name: "Churro Box", price: "£7.50", desc: "Warm churros with cinnamon sugar and a chocolate dipping sauce." }
      ]
    }
  ];

  return (
    <div className="bg-[#1a1919] min-h-screen">
      {/* HERO SECTION */}
      <section className="relative h-[60vh] md:h-[70vh] w-full overflow-hidden border-b-2 border-white/50">
        <img 
          src="https://www.orangerooms.co.uk/wp-content/uploads/2024/01/themed-brunches.jpg" 
          alt="Food Menu" 
          className="w-full h-full object-cover brightness-[0.5] contrast-[1.2]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1a1919] via-transparent to-black/60" />
        <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
          <span className="text-[10px] uppercase tracking-[1em] font-black text-[#F29100] mb-6">FEED YOUR SOUL</span>
          <h1 className="text-[54px] md:text-[90px] lg:text-[120px] font-black leading-none tracking-tighter text-white uppercase">
            Food <span className="text-[#F29100]">Menu</span>
          </h1>
          <div className="mt-10 flex items-center gap-4 bg-white/10 backdrop-blur-md px-8 py-4 border border-white/20">
            <Clock className="w-5 h-5 text-[#F29100]" />
            <span className="text-[14px] font-black tracking-[0.2em] uppercase">KITCHEN OPEN TUESDAY — SUNDAY</span>
          </div>
        </div>
      </section>

      {/* FONDUE EXPERIENCE SECTION (From Screenshot) */}
      <section className="bg-white text-[#1a1919] py-24 px-6 border-b-2 border-[#1a1919] relative overflow-hidden">
         <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
               <div className="space-y-12">
                  <div className="space-y-4">
                     <span className="text-[10px] uppercase tracking-[0.5em] font-black text-[#F29100]">SIGNATURE SPECIAL</span>
                     <h2 className="text-[42px] md:text-[64px] font-black uppercase leading-[0.9] tracking-tighter">
                        Bottomless <br /> <span className="text-[#F29100]">Fondue</span> Experience
                     </h2>
                     <p className="text-[18px] font-light leading-relaxed text-[#1a1919]/70">
                        Welcome to Orange Rooms Southampton, proudly serving the city for 23 incredible years! Dip into something delicious with our Bottomless Fondue – perfect for date nights, mate nights, or any excuse to indulge.
                     </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                     <div className="p-8 border-2 border-[#1a1919] flex flex-col gap-4 group hover:bg-[#1a1919] hover:text-white transition-all">
                        <Cookie className="w-10 h-10 text-[#F29100]" />
                        <h4 className="text-[18px] font-black uppercase">SWEET</h4>
                        <p className="text-[14px] font-medium opacity-70">Flowing chocolate, marshmallows, and sweet treats.</p>
                     </div>
                     <div className="p-8 border-2 border-[#1a1919] flex flex-col gap-4 group hover:bg-[#1a1919] hover:text-white transition-all">
                        <Utensils className="w-10 h-10 text-[#F29100]" />
                        <h4 className="text-[18px] font-black uppercase">SAVOURY</h4>
                        <p className="text-[14px] font-medium opacity-70">Gooey melted cheese, cured meats, and savoury bites.</p>
                     </div>
                  </div>
               </div>

               <div className="bg-[#1a1919] p-10 md:p-14 relative shadow-2xl">
                  <div className="absolute top-0 right-0 w-20 h-20 bg-[#F29100] flex items-center justify-center -translate-y-1/2 translate-x-1/2 rotate-12">
                     <Star className="text-white w-10 h-10 fill-white" />
                  </div>
                  <h3 className="text-white text-[24px] font-black uppercase tracking-widest mb-10 border-b border-white/10 pb-4">PRICING (PER GROUP)</h3>
                  <div className="space-y-6">
                     {fonduePricing.map((item, idx) => (
                        <div key={idx} className="flex justify-between items-center group">
                           <span className="text-white/40 text-[14px] font-black uppercase tracking-[0.2em] group-hover:text-[#F29100] transition-colors">{item.label}</span>
                           <div className="flex-1 mx-4 border-b border-white/5 border-dotted"></div>
                           <span className="text-white text-[18px] font-black">{item.price}</span>
                        </div>
                     ))}
                  </div>
                  <a href="#dmn-booking-container" className="w-full mt-12 py-5 bg-[#F29100] text-white text-[12px] font-black uppercase tracking-[0.3em] hover:bg-white hover:text-black transition-all flex items-center justify-center gap-2">
                     BOOK FONDUE NOW <ChevronRight className="w-4 h-4" />
                  </a>
               </div>
            </div>
         </div>
      </section>

      {/* REFRESHED MENU CAROUSEL (Gallery) */}
      <section className="bg-[#1a1919] py-20 px-6 border-b-2 border-white/50">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div className="space-y-4">
              <span className="text-[10px] uppercase tracking-[0.5em] font-black text-[#F29100]">THE KITCHEN</span>
              <h2 className="text-[32px] md:text-[54px] font-black text-white uppercase leading-none tracking-tighter">
                New Refreshed <span className="text-[#F29100]">Food Menu</span>
              </h2>
            </div>
            <div className="flex gap-4">
              <button onClick={prevSlide} className="w-12 h-12 rounded-full border-2 border-white/20 flex items-center justify-center hover:border-[#F29100] hover:text-[#F29100] transition-all text-white">
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button onClick={nextSlide} className="w-12 h-12 rounded-full border-2 border-white/20 flex items-center justify-center hover:border-[#F29100] hover:text-[#F29100] transition-all text-white">
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>

          <div className="relative group aspect-[16/9] md:aspect-[21/9] overflow-hidden bg-black/40 border-2 border-white/10">
            <div 
              className="w-full h-full flex transition-transform duration-700 ease-[cubic-bezier(0.23,1,0.32,1)]"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {menuImages.map((src, idx) => (
                <div key={idx} className="min-w-full h-full relative p-4 md:p-8">
                  <img 
                    src={src} 
                    alt={`Food Menu Board ${idx + 1}`}
                    className="w-full h-full object-contain cursor-zoom-in"
                    onClick={() => setIsLightboxOpen(true)}
                    onError={(e) => {
                       // Fallback placeholder with colorful style
                       e.currentTarget.src = "https://www.orangerooms.co.uk/wp-content/uploads/2023/10/Summer-At-Orange-Menu-Screenshot-Placeholder.jpg";
                    }}
                  />
                  <div className="absolute bottom-10 right-10 flex gap-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button 
                      onClick={() => setIsLightboxOpen(true)}
                      className="bg-white/10 backdrop-blur-md p-4 rounded-full border border-white/20 text-white hover:bg-[#F29100] transition-colors"
                    >
                      <Maximize2 className="w-6 h-6" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Slide Indicators */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3">
              {menuImages.map((_, i) => (
                <button 
                  key={i} 
                  onClick={() => setCurrentSlide(i)}
                  className={`w-2 h-2 rounded-full transition-all ${currentSlide === i ? 'bg-[#F29100] w-8' : 'bg-white/20'}`}
                />
              ))}
            </div>
          </div>
          
          <div className="mt-8 flex items-center justify-center gap-6">
             <div className="flex items-center gap-2 text-white/40 text-[11px] font-black uppercase tracking-widest">
                <Info className="w-4 h-4 text-[#F29100]" /> Click image to expand for full details
             </div>
             <a href="#" className="flex items-center gap-2 text-[#F29100] text-[11px] font-black uppercase tracking-widest hover:text-white transition-colors">
                <Download className="w-4 h-4" /> Download PDF Menu
             </a>
          </div>
        </div>
      </section>

      {/* LIGHTBOX OVERLAY */}
      {isLightboxOpen && (
        <div className="fixed inset-0 z-[300] bg-black/95 backdrop-blur-xl flex flex-col items-center justify-center p-4 md:p-12 animate-fade-in">
           <button 
            onClick={() => setIsLightboxOpen(false)}
            className="absolute top-8 right-8 text-white/60 hover:text-white transition-colors p-4"
           >
             <X className="w-10 h-10" />
           </button>
           
           <div className="w-full h-full max-w-6xl max-h-[85vh] relative flex items-center justify-center">
              <img 
                src={menuImages[currentSlide]} 
                alt="Full Menu View" 
                className="w-full h-full object-contain shadow-2xl"
                onError={(e) => {
                  e.currentTarget.src = "https://www.orangerooms.co.uk/wp-content/uploads/2023/10/Summer-At-Orange-Menu-Screenshot-Placeholder.jpg";
                }}
              />
           </div>

           <div className="mt-8 flex gap-8">
              <button onClick={prevSlide} className="text-white flex items-center gap-2 font-black uppercase tracking-widest text-[12px] hover:text-[#F29100]">
                <ChevronLeft /> Previous Board
              </button>
              <span className="text-white/40 font-black tracking-widest text-[12px]">{currentSlide + 1} / {menuImages.length}</span>
              <button onClick={nextSlide} className="text-white flex items-center gap-2 font-black uppercase tracking-widest text-[12px] hover:text-[#F29100]">
                Next Board <ChevronRight />
              </button>
           </div>
        </div>
      )}

      {/* TEXT MENU GRID */}
      <section className="bg-white text-[#1a1919] py-24 px-6 border-b-2 border-[#1a1919]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 lg:gap-0 lg:divide-x-2 lg:divide-[#1a1919]/10">
            {sections.map((section, idx) => (
              <div key={idx} className="px-0 lg:px-12 space-y-12">
                <div className="space-y-2">
                  <h2 className="text-[32px] md:text-[42px] font-black uppercase tracking-tighter leading-none">{section.title}</h2>
                  <div className="w-12 h-1 bg-[#F29100]"></div>
                </div>
                <div className="space-y-10">
                  {section.items.map((item, i) => (
                    <div key={i} className="group">
                      <div className="flex justify-between items-baseline mb-2">
                        <h4 className="text-[18px] font-black uppercase tracking-tight group-hover:text-[#F29100] transition-colors">{item.name}</h4>
                        <span className="text-[14px] font-bold text-[#F29100]">{item.price}</span>
                      </div>
                      <p className="text-[13px] text-[#1a1919]/60 font-light leading-relaxed">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SPECIAL NOTICE */}
      <section className="bg-[#1a1919] py-20 px-6 border-b-2 border-white/50 text-center">
        <div className="max-w-2xl mx-auto border-2 border-[#F29100] p-10">
           <Heart className="w-10 h-10 text-[#F29100] mx-auto mb-6" />
           <h3 className="text-[24px] font-black uppercase text-white mb-4">Allergies & Dietary</h3>
           <p className="text-white/60 text-[14px] font-light leading-relaxed mb-8">
             We cater to all! Our menu has plenty of Vegan and Gluten-Free options. Please inform your server of any allergies before ordering.
           </p>
           <a href="mailto:info@orangerooms.co.uk" className="text-[12px] font-black text-[#F29100] uppercase tracking-widest underline underline-offset-8">Download Full Allergen Guide</a>
        </div>
      </section>

      <BookingSection />
    </div>
  );
};

export default FoodMenuPage;
