import React from 'react';

// Komponen SVG untuk Ketupat
const Ketupat = ({ className = "", style = {} }: { className?: string; style?: React.CSSProperties }) => (
  <div className={`relative ${className} drop-shadow-lg`} style={style}>
    <svg viewBox="0 0 100 100" className="w-full h-full overflow-visible">
      {/* Tali Gantungan */}
      <path d="M50 5 Q40 -15 20 -15" stroke="#86efac" strokeWidth="4" fill="none" />
      
      {/* Badan Ketupat (Diamond) */}
      <path d="M50 10 L90 50 L50 90 L10 50 Z" fill="#4ade80" stroke="#15803d" strokeWidth="2"/>
      
      {/* Pola Anyaman */}
      <path d="M30 30 L70 70" stroke="#15803d" strokeWidth="1" />
      <path d="M70 30 L30 70" stroke="#15803d" strokeWidth="1" />
      <path d="M50 10 L50 90" stroke="#15803d" strokeWidth="1" />
      <path d="M10 50 L90 50" stroke="#15803d" strokeWidth="1" />
      <rect x="30" y="30" width="40" height="40" transform="rotate(45 50 50)" fill="none" stroke="#bbf7d0" strokeWidth="1"/>
      
      {/* Ekor Pita */}
      <path d="M10 50 Q-5 70 5 85" stroke="#86efac" strokeWidth="6" fill="none" />
      <path d="M90 50 Q105 70 95 85" stroke="#86efac" strokeWidth="6" fill="none" />
    </svg>
  </div>
);

// Komponen SVG untuk Lontong
const Lontong = ({ className = "" }: { className?: string }) => (
  <div className={`relative ${className} drop-shadow-md`}>
    <svg viewBox="0 0 100 50" className="w-full h-full overflow-visible">
       {/* Badan Lontong */}
       <rect x="10" y="10" width="80" height="30" rx="5" fill="#86efac" stroke="#15803d" strokeWidth="2" />
       {/* Detail Daun Pisang */}
       <path d="M20 10 Q30 25 20 40" stroke="#15803d" strokeWidth="1" fill="none" opacity="0.6"/>
       <path d="M40 10 Q50 25 40 40" stroke="#15803d" strokeWidth="1" fill="none" opacity="0.6"/>
       <path d="M60 10 Q70 25 60 40" stroke="#15803d" strokeWidth="1" fill="none" opacity="0.6"/>
       <path d="M80 10 Q90 25 80 40" stroke="#15803d" strokeWidth="1" fill="none" opacity="0.6"/>
       {/* Ikatan Ujung */}
       <circle cx="10" cy="25" r="4" fill="#166534" />
       <circle cx="90" cy="25" r="4" fill="#166534" />
    </svg>
  </div>
);

// Komponen SVG untuk Lampion
const Lampion = ({ className = "", delay = "0s" }: { className?: string, delay?: string }) => (
    <div className={`relative ${className} origin-top animate-swing`} style={{ animationDelay: delay }}>
         <svg viewBox="0 0 100 160" className="w-full h-full drop-shadow-[0_0_15px_rgba(253,224,71,0.6)]">
            {/* Tali */}
            <line x1="50" y1="0" x2="50" y2="20" stroke="#d4af37" strokeWidth="2" />
            {/* Atap Lampion */}
            <path d="M35 20 L65 20 L75 40 L25 40 Z" fill="#b45309" stroke="#d4af37" />
            {/* Badan Kaca */}
            <path d="M25 40 L15 100 L50 130 L85 100 L75 40 Z" fill="url(#lampGrad)" stroke="#d4af37" strokeWidth="1.5" />
            {/* Hiasan Bawah */}
            <path d="M50 130 L50 155" stroke="#d4af37" strokeWidth="2" />
            <circle cx="50" cy="155" r="4" fill="#b45309" />
            
            {/* Detail Garis */}
            <line x1="25" y1="40" x2="50" y2="130" stroke="#d4af37" strokeWidth="0.5" opacity="0.5"/>
            <line x1="75" y1="40" x2="50" y2="130" stroke="#d4af37" strokeWidth="0.5" opacity="0.5"/>
            
            <defs>
                <radialGradient id="lampGrad" cx="0.5" cy="0.5" r="0.5">
                    <stop offset="0%" stopColor="#fef9c3" stopOpacity="0.9" />
                    <stop offset="100%" stopColor="#ca8a04" stopOpacity="0.8" />
                </radialGradient>
            </defs>
         </svg>
    </div>
);

export const RamadanDecorations: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-30 overflow-hidden">
       {/* === Lampion Atas === */}
       <div className="absolute top-0 right-4 md:right-10 w-20 h-32 md:w-28 md:h-48">
          <Lampion className="w-full h-full" delay="0s" />
       </div>
       <div className="absolute top-[-10px] left-6 md:left-20 w-16 h-28 md:w-24 md:h-40">
          <Lampion className="w-full h-full" delay="1s" />
       </div>

       {/* === Hiasan Pojok Bawah (Hidden di Mobile agar tidak menutupi konten) === */}
       <div className="hidden md:block absolute bottom-0 left-0">
          <div className="relative w-64 h-48">
             {/* Cluster Ketupat & Lontong Kiri Bawah */}
             <Lontong className="absolute bottom-6 left-2 w-32 h-16 rotate-[-10deg] z-10" />
             <Lontong className="absolute bottom-2 left-10 w-32 h-16 rotate-[5deg] z-0" />
             <Ketupat className="absolute bottom-10 left-20 w-24 h-24 rotate-12 z-20" />
          </div>
       </div>

       <div className="hidden md:block absolute bottom-10 right-0 translate-x-1/4">
           {/* Ketupat Besar Kanan Bawah */}
           <Ketupat className="w-40 h-40 opacity-90 rotate-[-15deg]" />
       </div>
       
       <style>{`
         @keyframes swing {
           0%, 100% { transform: rotate(-3deg); }
           50% { transform: rotate(3deg); }
         }
         .animate-swing {
           animation: swing 5s ease-in-out infinite;
         }
       `}</style>
    </div>
  )
}