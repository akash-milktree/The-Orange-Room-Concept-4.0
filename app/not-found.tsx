import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="bg-[#1a1919] min-h-[80vh] flex flex-col items-center justify-center px-6 text-center">
      <span className="text-[10px] uppercase tracking-[0.8em] font-black text-[#F29100] mb-6">
        PAGE NOT FOUND
      </span>
      <h1 className="text-[80px] md:text-[140px] lg:text-[200px] font-black leading-none tracking-tighter text-white uppercase">
        4<span className="text-[#F29100]">0</span>4
      </h1>
      <p className="mt-6 text-[16px] md:text-[20px] text-white/60 max-w-md">
        Looks like this page has left the building. Let&apos;s get you back to the party.
      </p>
      <Link
        href="/"
        className="mt-10 inline-flex items-center justify-center px-10 py-5 bg-[#F29100] text-white font-black text-[12px] tracking-[0.25em] uppercase hover:bg-white hover:text-[#1a1919] transition-all shadow-2xl"
      >
        Back to Home
      </Link>
    </div>
  );
}
