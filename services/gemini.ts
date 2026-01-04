
import { GoogleGenAI } from "@google/genai";

// Always use new GoogleGenAI({ apiKey: process.env.API_KEY })
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const getGeminiResponse = async (userPrompt: string, history: { role: string; text: string }[]) => {
  const systemInstruction = `
    You are an AI assistant for Sandy Irawan's professional portfolio.
    Sandy is a Senior Web Developer with experience since 2012.
    
    His Key Projects:
    - Queue Systems: Bank Jateng, Bank BRI, Bank Mandiri, Rumah Sakit, Klinik.
    - Government: Ditlantas Polda Jateng (Public Satisfaction), Pemda Tidore, Asset Management.
    - Industrial: Wood Production, Inventory Systems.
    - Healthcare: Clinic apps, Outpatient Clinic apps.
    
    His Stack:
    - Languages/Frameworks: HTML, CSS, Bootstrap, JavaScript, React JS, PHP, Embarcadero Delphi.
    - Databases: PostgreSQL, MySQL, Supabase.
    
    Style: Professional, helpful, and confident. Use Indonesian language by default unless asked in English.
    Highlight his reliability, long-term experience (12+ years), and ability to build high-stakes systems (like bank queues).
  `;

  try {
    // Incorporate history into the contents array for context-aware responses
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: [
        ...history.map(m => ({
          role: m.role,
          parts: [{ text: m.text }]
        })),
        { role: 'user', parts: [{ text: userPrompt }] }
      ],
      config: {
        systemInstruction,
        temperature: 0.7,
      },
    });

    // Access the .text property directly (not a method)
    return response.text || "Mohon maaf, saya sedang mengalami kendala teknis. Silakan hubungi Sandy langsung.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Terjadi kesalahan saat menghubungi asisten AI.";
  }
};