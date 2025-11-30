import { GoogleGenAI } from "@google/genai";
import { SYSTEM_INSTRUCTION } from '../constants';

// We do not instantiate 'ai' globally anymore because the key might change
// or be provided by the user at runtime.

export const sendMessageToGemini = async (message: string, customKey?: string): Promise<string> => {
  // Prioritize custom key (from UI), then fallback to env var
  const apiKey = customKey || process.env.API_KEY;

  if (!apiKey) {
    return "Configuration Error: No API Key provided.";
  }

  try {
    // Instantiate client on every request to ensure we use the latest key
    const ai = new GoogleGenAI({ apiKey });
    
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: message,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
      }
    });
    
    return response.text || "I'm having trouble thinking right now. Please try again later.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Connection error. Please check your network or API key configuration.";
  }
};