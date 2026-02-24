import React from 'react';

export const EventDetails: React.FC = () => {
  return (
    <section className="relative py-20 px-4 bg-cream-light z-10">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-cinzel text-3xl md:text-4xl text-islamic-green font-bold mb-4">
            Waktu & Tempat
          </h2>
          <p className="font-lato text-gray-600">
            Insya Allah acara akan diselenggarakan pada:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {/* Date Card */}
          <div className="bg-white p-8 rounded-2xl shadow-xl border border-amber-100 transform hover:-translate-y-2 transition-transform duration-300">
            <div className="w-16 h-16 bg-islamic-green rounded-full flex items-center justify-center mx-auto mb-6">
              <i className="far fa-calendar-alt text-islamic-gold text-2xl"></i>
            </div>
            <h3 className="font-cinzel text-xl font-bold text-gray-800 mb-2">Hari & Tanggal</h3>
            <p className="font-lato text-gray-600">Ahad</p>
            <p className="font-amiri text-2xl font-bold text-islamic-green my-2">3 Syawwal 1447 H</p>
            <p className="font-lato text-gray-600">22 Maret 2026</p>
          </div>

          {/* Time Card */}
          <div className="bg-white p-8 rounded-2xl shadow-xl border border-amber-100 transform hover:-translate-y-2 transition-transform duration-300">
            <div className="w-16 h-16 bg-islamic-green rounded-full flex items-center justify-center mx-auto mb-6">
              <i className="far fa-clock text-islamic-gold text-2xl"></i>
            </div>
            <h3 className="font-cinzel text-xl font-bold text-gray-800 mb-2">Waktu</h3>
            <p className="font-lato text-gray-600">Pukul</p>
            <p className="font-amiri text-2xl font-bold text-islamic-green my-2">10:00 - Selesai</p>
            <p className="font-lato text-gray-600">WIB</p>
          </div>

          {/* Location Card */}
          <div className="bg-white p-8 rounded-2xl shadow-xl border border-amber-100 transform hover:-translate-y-2 transition-transform duration-300">
            <div className="w-16 h-16 bg-islamic-green rounded-full flex items-center justify-center mx-auto mb-6">
              <i className="fas fa-map-marker-alt text-islamic-gold text-2xl"></i>
            </div>
            <h3 className="font-cinzel text-xl font-bold text-gray-800 mb-2">Lokasi</h3>
            <p className="font-lato text-gray-600">Rumah mba Sarifah RS Binti Amir Syamsudin & mas Bambang Eka Nugraha</p>
            <p className="font-lato text-sm text-gray-500 my-2">Bodrorejo RT23 RW08, Gaden, Trucuk Klaten</p>
            <div className="mt-6 mx-auto w-full max-w-xs md:max-w-sm aspect-square rounded-xl overflow-hidden shadow-lg">
            <img
              src="/rumah.jpeg"
              alt="Foto Rumah"
              className="w-full h-full object-cover"
            />
            </div>
            <a 
              href="https://maps.app.goo.gl/bCikftQae4JdDd6k6" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block mt-4 text-islamic-green hover:text-islamic-gold font-bold text-sm uppercase tracking-wider border-b-2 border-transparent hover:border-islamic-gold transition-all"
            >
              Lihat Peta
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};