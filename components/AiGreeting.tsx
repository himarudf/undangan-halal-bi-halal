import React, { useState } from 'react';
import { generateEidGreeting } from '../services/geminiService';

export const AiGreeting: React.FC = () => {
  const [name, setName] = useState('');
  const [relationship, setRelationship] = useState('Keluarga');
  const [greeting, setGreeting] = useState('');
  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {
    if (!name) return;
    setLoading(true);
    try {
      const result = await generateEidGreeting(name, relationship);
      setGreeting(result);
    } catch (error) {
      setGreeting("Maaf, gagal membuat ucapan saat ini.");
    } finally {
      setLoading(false);
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(greeting);
    alert("Ucapan berhasil disalin!");
  };

  return (
    <section className="py-20 px-4 bg-islamic-green text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 -mt-10 -mr-10 text-white opacity-5 text-[200px]">
        <i className="fas fa-moon"></i>
      </div>

      <div className="max-w-3xl mx-auto relative z-10">
        <div className="text-center mb-10">
          <h2 className="font-cinzel text-3xl md:text-4xl text-islamic-gold font-bold mb-4">
            Buat Ucapan Spesial
          </h2>
          <p className="font-lato text-emerald-100">
            Gunakan AI (Kecerdasan Buatan) kami untuk membuat ucapan Idul Fitri yang personal untuk kerabat Anda.
          </p>
        </div>

        <div className="bg-white/10 backdrop-blur-md p-6 md:p-8 rounded-2xl border border-emerald-700/50">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div>
              <label className="block text-sm font-bold text-islamic-gold mb-2">Nama Penerima</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Contoh: Budi, Siti..."
                className="w-full px-4 py-3 rounded-lg bg-emerald-900/50 border border-emerald-600 text-white placeholder-emerald-400 focus:outline-none focus:border-islamic-gold transition-colors"
              />
            </div>
            <div>
              <label className="block text-sm font-bold text-islamic-gold mb-2">Hubungan</label>
              <select
                value={relationship}
                onChange={(e) => setRelationship(e.target.value)}
                className="w-full px-4 py-3 rounded-lg bg-emerald-900/50 border border-emerald-600 text-white focus:outline-none focus:border-islamic-gold transition-colors"
              >
                <option value="Keluarga">Keluarga</option>
                <option value="Teman">Teman</option>
                <option value="Rekan Kerja">Rekan Kerja</option>
                <option value="Guru/Senior">Guru/Senior</option>
              </select>
            </div>
          </div>

          <button
            onClick={handleGenerate}
            disabled={loading || !name}
            className={`w-full py-3 px-6 rounded-lg font-cinzel font-bold text-lg tracking-wider transition-all duration-300 ${
              loading || !name
                ? 'bg-gray-500 cursor-not-allowed text-gray-300'
                : 'bg-islamic-gold text-emerald-900 hover:bg-amber-300 hover:shadow-[0_0_20px_rgba(212,175,55,0.5)]'
            }`}
          >
            {loading ? (
              <span><i className="fas fa-spinner fa-spin mr-2"></i> Merangkai Kata...</span>
            ) : (
              <span><i className="fas fa-magic mr-2"></i> Buat Ucapan</span>
            )}
          </button>

          {greeting && (
            <div className="mt-8 bg-cream-light text-emerald-900 p-6 rounded-xl relative animate-fade-in-up">
              <div className="font-amiri text-xl italic leading-loose text-center">
                "{greeting}"
              </div>
              <button
                onClick={copyToClipboard}
                className="absolute bottom-2 right-2 text-islamic-green hover:text-islamic-gold p-2"
                title="Salin Teks"
              >
                <i className="far fa-copy"></i>
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};