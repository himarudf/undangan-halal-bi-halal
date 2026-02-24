import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-emerald-900 text-emerald-100 py-8 text-center border-t border-islamic-gold">
      <div className="max-w-4xl mx-auto px-4">
        <div className="font-amiri text-2xl mb-4">Halal bihalal Bani Samsuri</div>
        <p className="font-lato text-sm opacity-70 mb-4">
          Merupakan suatu kehormatan dan kebahagiaan bagi kami apabila Bapak/Ibu/Saudara/i berkenan hadir di acara kami.
        </p>
        <div className="flex justify-center space-x-4 text-islamic-gold">
          <i className="fas fa-star text-xs animate-pulse"></i>
          <i className="fas fa-moon text-lg"></i>
          <i className="fas fa-star text-xs animate-pulse"></i>
        </div>
        <p className="mt-6 text-xs text-emerald-500/50">
          © 2025 Undangan Digital. All rights reserved.
        </p>
      </div>
    </footer>
  );
};