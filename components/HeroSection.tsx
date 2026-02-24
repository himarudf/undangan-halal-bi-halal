import React from 'react';

export const HeroSection: React.FC = () => {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 py-12 overflow-hidden bg-gradient-to-b from-islamic-green to-emerald-900 text-white">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-32 h-32 md:w-64 md:h-64 bg-islamic-gold rounded-full blur-[100px] opacity-20"></div>
      <div className="absolute bottom-0 right-0 w-32 h-32 md:w-64 md:h-64 bg-islamic-gold rounded-full blur-[100px] opacity-20"></div>

      <div className="z-10 animate-fade-in-up space-y-4 max-w-2xl mx-auto flex flex-col items-center">
        <h3 className="font-amiri text-2xl md:text-3xl text-islamic-gold tracking-widest mb-2">
          بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيم
        </h3>
        
        <p className="font-lato text-sm md:text-base uppercase tracking-widest text-emerald-100/80 mb-1">
          Undangan 
        </p>
        
        <h1 className="font-cinzel text-xl md:text-6xl lg:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-islamic-gold to-amber-200 drop-shadow-sm mb-4">
        HALAL BI HALAL <br />BANI SAMSURI 1447 H 
        </h1>

        {/* Photo Frame */}
        <div className="relative group my-6">
          <div className="absolute -inset-1 bg-gradient-to-r from-islamic-gold to-amber-300 rounded-[2rem] blur opacity-30 group-hover:opacity-60 transition duration-1000 group-hover:duration-200"></div>
         <div className="relative w-64 h-64 md:w-80 md:h-80 bg-emerald-900 rounded-[2rem] p-1.5 ring-1 ring-white/20">
            <div className="w-full h-full rounded-[1.7rem] overflow-hidden relative">
              <div className="absolute inset-0 border border-white/20 rounded-[1.7rem] z-20 pointer-events-none"></div>
              {/* NOTE: Ganti src di bawah ini dengan path foto yang Anda upload */}
              <img 
                src="/poto.jpeg"
                alt="Foto Keluarga Besar" 
                className="w-full h-full object-cover sepia-[0.2] hover:sepia-0 transition-all duration-500 scale-105 group-hover:scale-110"
              />
            </div>
          </div>
        </div>

        <p className="font-lato text-lg md:text-xl text-emerald-50 leading-relaxed px-6 italic">
          Rasulullah SAW bersabda, "Barangsiapa yang ingin diluaskan rizkinya dan dipanjangkan umurnya, maka sambunglah tali silaturahmi" <br />(HR. Bukhari & Muslim).
        </p>

        <div className="w-24 h-1 bg-islamic-gold mx-auto my-6 rounded-full"></div>

        
        
        <div className="mt-8 animate-bounce">
          <i className="fas fa-chevron-down text-islamic-gold text-2xl"></i>
        </div>
      </div>
    </div>
  );
};