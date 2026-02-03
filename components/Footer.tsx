
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#1a1919] border-t-2 border-white/50 flex flex-col relative overflow-hidden">
      <div className="flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:divide-x-2 lg:divide-white/50">
        
        {/* Column 1: Lets Connect */}
        <div className="p-8 md:p-12 lg:p-16 flex flex-col space-y-8 md:space-y-12 border-b-2 md:border-b-0 border-white/10 lg:border-b-0">
          <div className="space-y-4 md:space-y-6">
            <h3 className="text-[28px] md:text-[32px] font-bold tracking-tight text-white leading-none">Lets connect!</h3>
            <div className="space-y-4">
              <div>
                <p className="text-[9px] md:text-[10px] uppercase tracking-[0.2em] font-black text-[#F29100] mb-2">FOR RESERVATION INQUIRIES:</p>
                <a href="mailto:info@orangerooms.co.uk" className="text-[14px] md:text-[15px] text-white/80 hover:text-white transition-colors underline decoration-white/20 underline-offset-4">info@orangerooms.co.uk</a>
              </div>
              <div className="pt-1">
                <a href="tel:02380232333" className="text-[14px] md:text-[15px] text-white/80 hover:text-white transition-colors">023 8023 2333</a>
              </div>
            </div>
          </div>

          <div className="space-y-4 md:space-y-6">
            <div className="space-y-1">
              <p className="text-[14px] md:text-[15px] text-white/80">1-2 Vernon Walk, Southampton, SO15 2EJ</p>
            </div>
            <a href="mailto:contact@orangerooms.co.uk" className="text-[14px] md:text-[15px] text-white/80 hover:text-white transition-colors underline decoration-white/20 underline-offset-4 block">contact@orangerooms.co.uk</a>
          </div>

          <div className="pt-4 md:pt-8 space-y-4">
            <p className="text-[10px] md:text-[11px] text-white/40 leading-relaxed font-light italic">Age requirement: 21+<br />Under 21? Join us before 18:00/6pm.</p>
            <p className="text-[9px] md:text-[10px] text-white/20 uppercase tracking-widest font-black pt-2">Copyright © 2024 Orange Rooms. All rights reserved.</p>
          </div>
        </div>

        {/* Column 2: Opening Hours */}
        <div className="p-8 md:p-12 lg:p-16 flex flex-col border-b-2 md:border-b-0 border-white/10 lg:border-b-0">
          <h3 className="text-[28px] md:text-[32px] font-bold tracking-tight text-white leading-none mb-8 md:mb-12">Opening hours</h3>
          <div className="grid grid-cols-2 gap-y-4 md:gap-y-6 text-[14px] md:text-[15px]">
            <span className="text-white/80">Mon to Thu</span>
            <span className="text-white text-right">16:00-02:00</span>
            
            <span className="text-white/80">Fri</span>
            <span className="text-white text-right">16:00-03:00</span>
            
            <span className="text-white/80">Sat</span>
            <span className="text-white text-right">12:00-03:00</span>
            
            <span className="text-white/80 border-t border-white/10 pt-4">Sun</span>
            <span className="text-white text-right border-t border-white/10 pt-4">12:00-00:00</span>
          </div>
        </div>

        {/* Column 3: Quick Links */}
        <div className="p-8 md:p-12 lg:p-16 flex flex-col border-b-2 md:border-b-0 border-white/10 lg:border-b-0">
          <h3 className="text-[28px] md:text-[32px] font-bold tracking-tight text-white leading-none mb-8 md:mb-12">Quick Links</h3>
          <nav className="flex flex-col space-y-3 md:space-y-4">
            {['Private Party and Table Bookings', 'Terms of Use', 'Privacy Policy', 'Cookie Policy', 'Feedback', 'Jobs', 'Contact Us'].map((link) => (
              <a key={link} href="#" className="text-[11px] md:text-[13px] uppercase tracking-[0.2em] font-black text-white/40 hover:text-[#F29100] transition-colors">{link}</a>
            ))}
          </nav>
        </div>

        {/* Column 4: Brand Badge Element */}
        <div className="p-12 md:p-16 flex items-center justify-center relative bg-black/20 min-h-[350px]">
          <div className="relative w-48 h-48 md:w-64 md:h-64">
            <svg className="absolute inset-0 w-full h-full animate-[spin_15s_linear_infinite]" viewBox="0 0 100 100">
              <path id="circlePath" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" fill="transparent" />
              <text className="text-[7.5px] uppercase font-black fill-white/40 tracking-[0.1em]">
                <textPath xlinkHref="#circlePath">
                   • HIGH ON LIFE • EST. 2001 • ORANGE ROOMS • HIGH ON LIFE • EST. 2001 • ORANGE ROOMS
                </textPath>
              </text>
            </svg>
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <svg width="100" height="100" viewBox="0 0 100 100" className="opacity-80 scale-75 md:scale-100">
                <circle cx="50" cy="50" r="45" fill="none" stroke="#F29100" strokeWidth="1.5" />
                <path d="M5,50 Q50,0 95,50 Q50,100 5,50" fill="none" stroke="#F29100" strokeWidth="1" />
                <path d="M50,5 L50,95" fill="none" stroke="#F29100" strokeWidth="1" />
                <path d="M5,50 L95,50" fill="none" stroke="#F29100" strokeWidth="1" />
                <ellipse cx="50" cy="50" rx="20" ry="45" fill="none" stroke="#F29100" strokeWidth="1" />
              </svg>
            </div>
          </div>
        </div>

      </div>
      
      {/* Tiny Bottom Bar */}
      <div className="h-20 lg:h-24 flex flex-col md:flex-row items-center justify-center md:justify-between px-6 md:px-12 border-t-2 border-white/50 py-4 space-y-2 md:space-y-0 text-center">
        <span className="text-[8px] md:text-[10px] uppercase tracking-[0.3em] md:tracking-[0.5em] font-black text-white/20 whitespace-nowrap">SOUTHAMPTON'S LEGENDARY VENUE</span>
        <div className="flex items-center space-x-4 md:space-x-8">
           <span className="text-[8px] md:text-[10px] text-white/30 uppercase font-black tracking-widest whitespace-nowrap">
             Website by <a href="https://milktreeagency.com/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#F29100] transition-colors">Milktree Agency</a>
           </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
