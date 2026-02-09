
import { GoogleGenAI, Type } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export async function getMenuRecommendation(mood: string, diet?: string) {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `Rekomendasikan menu dari "Nasi Uduk Bebek Goreng Bu Bibit" berdasarkan suasana hati (mood): "${mood}" ${diet ? `dan batasan diet: "${diet}"` : ''}. 
      Menu yang tersedia: Bebek Goreng, Nasi Uduk, Ayam Goreng, Teh Solo, Sambal Lalapan.
      Berikan respon dalam format JSON dengan properti 'recommendation' dan 'reason'.`,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            recommendation: { type: Type.STRING },
            reason: { type: Type.STRING }
          },
          required: ["recommendation", "reason"]
        }
      }
    });

    return JSON.parse(response.text);
  } catch (error) {
    console.error("Gemini Error:", error);
    return {
      recommendation: "Bebek Goreng Spesial",
      reason: "Menu andalan kami yang selalu cocok untuk segala suasana!"
    };
  }
}
