import React from 'react';

export const RsvpForm: React.FC = () => {
  // NOTE: Silakan ganti URL di bawah ini dengan link Google Form yang sudah Anda buat
  const googleFormUrl = "https://forms.google.com";

  return (
    <section className="py-20 px-4 bg-cream-light relative">
      <div className="max-w-lg mx-auto bg-white p-8 md:p-10 rounded-2xl shadow-2xl relative overflow-hidden text-center">
        {/* Decorative corner */}
        <div className="absolute top-0 left-0 w-20 h-20 border-t-4 border-l-4 border-islamic-gold rounded-tl-3xl"></div>
        <div className="absolute bottom-0 right-0 w-20 h-20 border-b-4 border-r-4 border-islamic-gold rounded-br-3xl"></div>

        <div className="relative z-10">
          <div className="w-20 h-20 bg-emerald-50 rounded-full flex items-center justify-center mx-auto mb-6">
             <i className="fas fa-envelope-open-text text-islamic-green text-3xl"></i>
          </div>

          <h2 className="font-cinzel text-3xl font-bold text-islamic-green mb-4">
            Konfirmasi Kehadiran
          </h2>
          
          <p className="font-lato text-gray-600 mb-8 leading-relaxed">
            Merupakan suatu kehormatan dan kebahagiaan bagi kami apabila Bapak/Ibu/Saudara/i berkenan hadir di acara kami.
            <br /><br />
            Untuk memudahkan pendataan, mohon kesediaan Anda mengisi konfirmasi kehadiran melalui tombol di bawah ini:
          </p>

          <a 
            href="https://forms.gle/kVS7zva3Gvqs2tDy6"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center w-full md:w-auto px-8 py-4 bg-gradient-to-r from-islamic-green to-emerald-800 text-white font-bold rounded-lg shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300 font-cinzel tracking-wider group"
          >
            <span>Isi Form Kehadiran</span>
            <i className="fas fa-external-link-alt ml-3 group-hover:translate-x-1 transition-transform"></i>
          </a>
          
          <p className="mt-6 text-xs text-gray-400 italic">
            *Tautan akan membuka tab baru ke halaman Google Form
          </p>
        </div>
      </div>
    </section>
  );
};