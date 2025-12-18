
import { GoogleGenAI } from "@google/genai";
import { Message } from "../types";
import { SYSTEM_INSTRUCTION } from "../constants";

// Helper function to fetch response from Gemini API using @google/genai SDK
export const getGeminiResponse = async (history: Message[]): Promise<string> => {
  try {
    // Initializing with mandatory process.env.API_KEY and named parameter
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    
    // Using recommended ai.models.generateContent direct await pattern
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: history.map(m => ({ 
        role: m.role === 'user' ? 'user' : 'model', 
        parts: [{ text: m.content }] 
      })),
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
      },
    });

    // Accessing response.text property directly as per latest SDK guidelines
    return response.text || "I apologize, but I am unable to process your request at the moment. Please try again later.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "An error occurred while connecting to the assistant. Please ensure your connection is stable.";
  }
};
