
import React from 'react';
import BookingSection from '../components/BookingSection.tsx';
import { Utensils, Zap, Heart, Sparkles, Star, ChevronRight, Clock } from 'lucide-react';

const FoodMenuPage: React.FC = () => {
  const sections = [
    {
      title: "Tropical Bites",
      items: [
        { name: "Tiki Taco Tray", price: "£14.00", desc: "Choice of pulled pork or spicy jackfruit, topped with pineapple salsa and lime crema. (4 Tacos)" },
        { name: "Volcano Wings", price: "£8.50", desc: "Crispy wings tossed in our signature hot sauce with a honey glaze. SPICY!" },
        { name: "Mango Shrimp Skewers", price: "£9.00", desc: "Grilled king prawns with a spicy mango dip." },
        { name: "Sweet Potato Wedges", price: "£5.50", desc: "Served with a sriracha mayo dip. Vegan friendly." }
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
            <span className="text-[14px] font-black tracking-[0.2em] uppercase">KITCHEN OPEN TIL 10:00 PM</span>
          </div>
        </div>
      </section>

      {/* MENU GRID */}
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
