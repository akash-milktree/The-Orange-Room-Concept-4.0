
import React from 'react';
import { Clock, Phone, Mail, MessageCircle, Users, GlassWater, PartyPopper, Utensils, CalendarCheck, AlertCircle, CheckCircle } from 'lucide-react';
import BookingSection from '../components/BookingSection.tsx';

const BookPage: React.FC = () => {
  const bookingTypes = [
    { icon: <Utensils className="w-8 h-8" />, title: 'Table Only', desc: 'Reserve your spot for the evening.' },
    { icon: <GlassWater className="w-8 h-8" />, title: 'Bottomless Cocktails', desc: 'Unlimited cocktails every Friday & Saturday.' },
    { icon: <CalendarCheck className="w-8 h-8" />, title: 'Saturday Brunch', desc: 'Brunch with bottomless drinks and good vibes.' },
    { icon: <PartyPopper className="w-8 h-8" />, title: 'Private Parties', desc: 'Celebrate in style with exclusive packages.' },
    { icon: <Users className="w-8 h-8" />, title: 'Corporate Events', desc: 'Impress clients and reward your team.' },
    { icon: <GlassWater className="w-8 h-8" />, title: 'Cocktail Masterclass', desc: 'Learn to mix like a pro with our bartenders.' },
  ];

  const galleryImages = [
    'https://www.orangerooms.co.uk/wp-content/uploads/2024/02/DSC08596-scaled.jpg',
    'https://www.orangerooms.co.uk/wp-content/uploads/2024/02/DSC08659-scaled.jpg',
    'https://www.orangerooms.co.uk/wp-content/uploads/2024/02/DSC08537-scaled.jpg',
    'https://www.orangerooms.co.uk/wp-content/uploads/2024/02/DSC08610-scaled.jpg',
    'https://www.orangerooms.co.uk/wp-content/uploads/2024/02/DSC08620-scaled.jpg',
    'https://www.orangerooms.co.uk/wp-content/uploads/2024/02/DSC08646-scaled.jpg',
  ];

  return (
    <div className="bg-[#1a1919] min-h-screen">

      {/* HERO SECTION */}
      <section className="relative h-[60vh] md:h-[70vh] w-full overflow-hidden border-b-2 border-white/50">
        <img
          src="https://www.orangerooms.co.uk/wp-content/uploads/2024/02/DSC08596-scaled.jpg"
          alt="Reserve a Table at Orange Rooms"
          className="w-full h-full object-cover brightness-[0.4] contrast-[1.2] grayscale-[0.1] scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1a1919] via-transparent to-black/60" />
        <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
          <span className="text-[10px] md:text-[12px] uppercase tracking-[0.8em] font-black text-[#F29100] mb-6">WALK-INS WELCOME &bull; TABLE BOOKING SERVICE</span>
          <h1 className="text-[54px] md:text-[90px] lg:text-[140px] font-black leading-none tracking-tighter text-white uppercase">
            Reserve <span className="text-[#F29100]">a Table</span>
          </h1>
          <p className="mt-6 text-[16px] md:text-[20px] font-serif italic text-white/80 max-w-xl">
            Secure your spot at Southampton's legendary venue
          </p>
          <div className="w-24 md:w-40 h-1.5 md:h-2.5 bg-[#F29100] mt-10 shadow-2xl" />
        </div>
      </section>

      {/* BOOKING WIDGET SECTION */}
      <BookingSection />

      {/* BOOKING INFO SECTION (White) */}
      <section className="bg-white text-[#1a1919] border-b-2 border-[#1a1919]">
        <div className="grid grid-cols-1 lg:grid-cols-2">

          {/* Left: Policies */}
          <div className="p-10 md:p-16 lg:p-24 flex flex-col justify-center border-b-2 lg:border-b-0 lg:border-r-2 border-[#1a1919]">
            <span className="text-[10px] uppercase tracking-[0.5em] font-black text-[#F29100] mb-6">IMPORTANT INFORMATION</span>
            <h2 className="text-[36px] md:text-[54px] lg:text-[64px] font-black uppercase leading-[0.9] tracking-tighter mb-12">
              Before <br /><span className="text-[#F29100]">You Book</span>
            </h2>

            <div className="space-y-8">
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center border-2 border-[#1a1919] text-[#F29100]">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-[14px] font-black uppercase tracking-[0.1em] mb-1">Arrive 15 Minutes Early</h4>
                  <p className="text-[14px] text-[#1a1919]/60 font-light leading-relaxed">Please arrive a minimum of 15 minutes before your booking time to ensure everything is ready for you.</p>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center border-2 border-[#1a1919] text-[#F29100]">
                  <AlertCircle className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-[14px] font-black uppercase tracking-[0.1em] mb-1">Cancellation Policy</h4>
                  <p className="text-[14px] text-[#1a1919]/60 font-light leading-relaxed">If you have not arrived 15 minutes after your booking start time, your booking will be cancelled automatically.</p>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center border-2 border-[#1a1919] text-[#F29100]">
                  <CheckCircle className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-[14px] font-black uppercase tracking-[0.1em] mb-1">Walk-ins Welcome</h4>
                  <p className="text-[14px] text-[#1a1919]/60 font-light leading-relaxed">No reservation? No problem. Walk-ups are always welcome, subject to availability. Booking in advance is recommended for weekends.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Booking Types */}
          <div className="p-10 md:p-16 lg:p-24 flex flex-col justify-center">
            <span className="text-[10px] uppercase tracking-[0.5em] font-black text-[#F29100] mb-6">WHAT ARE YOU CELEBRATING?</span>
            <h2 className="text-[36px] md:text-[54px] lg:text-[64px] font-black uppercase leading-[0.9] tracking-tighter mb-12">
              Booking <br /><span className="text-[#F29100]">Types</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {bookingTypes.map((type, idx) => (
                <div key={idx} className="p-6 border-2 border-[#1a1919] flex flex-col gap-3 group hover:bg-[#1a1919] hover:text-white transition-all duration-500 cursor-pointer">
                  <div className="text-[#F29100]">{type.icon}</div>
                  <h4 className="text-[13px] font-black uppercase tracking-[0.15em]">{type.title}</h4>
                  <p className="text-[13px] font-light opacity-60 leading-relaxed">{type.desc}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* CONTACT SECTION (Dark) */}
      <section className="bg-[#1a1919] py-24 lg:py-32 border-b-2 border-white/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-[10px] uppercase tracking-[0.5em] font-black text-[#F29100] mb-6 block">PREFER TO SPEAK TO SOMEONE?</span>
            <h2 className="text-[36px] md:text-[54px] lg:text-[70px] font-black uppercase leading-[0.9] tracking-tighter text-white">
              Get in <span className="font-serif italic font-light text-white/90">Touch</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <a href="tel:02380232333" className="group p-10 md:p-14 border-2 border-white/20 hover:border-[#F29100] transition-all duration-500 text-center flex flex-col items-center gap-6">
              <div className="w-16 h-16 rounded-full border-2 border-white/20 group-hover:border-[#F29100] flex items-center justify-center transition-all duration-500">
                <Phone className="w-6 h-6 text-white/60 group-hover:text-[#F29100] transition-colors" />
              </div>
              <div>
                <h4 className="text-[12px] font-black uppercase tracking-[0.2em] text-white/40 mb-2 group-hover:text-[#F29100] transition-colors">Call Us</h4>
                <p className="text-[18px] md:text-[22px] font-bold text-white tracking-tight">023 8023 2333</p>
              </div>
            </a>

            <a href="mailto:info@orangerooms.co.uk" className="group p-10 md:p-14 border-2 border-white/20 hover:border-[#F29100] transition-all duration-500 text-center flex flex-col items-center gap-6">
              <div className="w-16 h-16 rounded-full border-2 border-white/20 group-hover:border-[#F29100] flex items-center justify-center transition-all duration-500">
                <Mail className="w-6 h-6 text-white/60 group-hover:text-[#F29100] transition-colors" />
              </div>
              <div>
                <h4 className="text-[12px] font-black uppercase tracking-[0.2em] text-white/40 mb-2 group-hover:text-[#F29100] transition-colors">Email Us</h4>
                <p className="text-[16px] md:text-[18px] font-bold text-white tracking-tight">info@orangerooms.co.uk</p>
              </div>
            </a>

            <a href="https://www.facebook.com/OrangeRoomsSoton" target="_blank" rel="noopener noreferrer" className="group p-10 md:p-14 border-2 border-white/20 hover:border-[#F29100] transition-all duration-500 text-center flex flex-col items-center gap-6">
              <div className="w-16 h-16 rounded-full border-2 border-white/20 group-hover:border-[#F29100] flex items-center justify-center transition-all duration-500">
                <MessageCircle className="w-6 h-6 text-white/60 group-hover:text-[#F29100] transition-colors" />
              </div>
              <div>
                <h4 className="text-[12px] font-black uppercase tracking-[0.2em] text-white/40 mb-2 group-hover:text-[#F29100] transition-colors">Message Us</h4>
                <p className="text-[16px] md:text-[18px] font-bold text-white tracking-tight">Facebook Messenger</p>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* VENUE GALLERY STRIP */}
      <section className="border-b-2 border-white/50 overflow-hidden">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
          {galleryImages.map((img, idx) => (
            <div key={idx} className="aspect-square overflow-hidden group">
              <img
                src={img}
                alt={`Orange Rooms venue ${idx + 1}`}
                className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
              />
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};

export default BookPage;
