import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const generateEidGreeting = async (name: string, relationship: string): Promise<string> => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `Buatlah ucapan selamat Idul Fitri dan Halal Bihalal yang hangat, puitis, dan islami dalam Bahasa Indonesia.
      
      Ucapan ini ditujukan untuk: ${name}
      Hubungan pengirim dengan penerima: ${relationship} (misal: Teman, Keluarga, Rekan Kerja, Umum).
      
      Panjang ucapan maksimal 2 kalimat panjang. Gunakan bahasa yang sopan dan menyentuh hati. Sertakan doa singkat.`,
    });

    return response.text || "Mohon maaf, terjadi kesalahan saat membuat ucapan.";
  } catch (error) {
    console.error("Error generating greeting:", error);
    throw new Error("Gagal menghubungi layanan AI.");
  }
};