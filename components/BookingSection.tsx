
import React, { useEffect, useRef } from 'react';

const BookingSection: React.FC = () => {
  const widgetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Give the DOM a tick to render the widget div, then trigger DMN init
    const timer = setTimeout(() => {
      // If the DMN script has already loaded and exposed an init method, call it
      const win = window as any;
      if (win.DMN && typeof win.DMN.init === 'function') {
        win.DMN.init();
      } else if (win.BookingsPartner && typeof win.BookingsPartner.init === 'function') {
        win.BookingsPartner.init();
      } else {
        // Script not loaded yet — append it dynamically as fallback
        if (!document.querySelector('script[data-dmn-widget]')) {
          const s = document.createElement('script');
          s.src = 'https://widgets.designmynight.com/bookings-partner.min.js';
          s.setAttribute('data-dmn-widget', 'true');
          s.async = true;
          document.body.appendChild(s);
        }
      }
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="bg-[#1a1919] py-24 lg:py-32 border-b-2 border-white/50 flex flex-col items-center justify-center relative overflow-hidden">
      {/* Background Graphic Elements */}
      <div className="absolute top-0 left-0 w-full h-2 bg-[#F29100]/20 blur-xl opacity-20"></div>

      {/* Heading */}
      <div className="text-center mb-16 px-6">
        <span className="text-[10px] uppercase tracking-[0.5em] font-black text-[#F29100] mb-6 block">RESERVATIONS</span>
        <h2 className="text-[50px] lg:text-[80px] font-bold tracking-tighter text-white leading-none">
          JOIN THE <span className="text-white/90">CLUB</span>
        </h2>
      </div>

      {/* Widget Container */}
      <div className="w-full max-w-[1000px] px-6">
        <div className="relative z-10 p-1 lg:p-px bg-white/40 rounded-sm overflow-hidden shadow-2xl">
          {/* DesignMyNight widget — data attributes on the div itself */}
          <div
            ref={widgetRef}
            id="dmn-booking-container"
            className="bg-[#1a1919] min-h-[450px] transition-all duration-500"
            data-dmn-booking-form="true"
            data-venue="5f996292f3f8486bfd7679b4"
            data-hide-offers="false"
            data-hide-powered-by="false"
            data-search-venues="false"
            data-monday-first="true"
            data-show-type-first="true"
            data-google-analytics-code="UA-54986825-1"
            data-return-url="https://www.orangerooms.co.uk/booking/thank-you/"
          />
        </div>

        {/* Footer info */}
        <div className="mt-8 flex flex-col md:flex-row justify-between items-center text-[11px] uppercase tracking-widest font-bold text-white/30 space-y-4 md:space-y-0">
          <div className="flex items-center space-x-6">
            <span>INSTANT CONFIRMATION</span>
            <span className="w-1 h-1 bg-white/20 rounded-full"></span>
            <span>SECURE DEPOSIT</span>
          </div>
          <div className="text-white/20 hover:text-[#F29100] transition-colors cursor-pointer">
            NEED HELP? CONTACT@ORANGEROOMS.CO.UK
          </div>
        </div>
      </div>

      {/* Side Label */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 h-40 hidden lg:flex items-center justify-center border-r-2 border-white/50">
        <span className="vertical-text text-[9px] uppercase tracking-[0.6em] text-white/20 font-black px-4">BOOKING</span>
      </div>
    </section>
  );
};

export default BookingSection;
