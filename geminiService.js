// geminiService.js
// تأكد من تثبيت مكتبة @google/generative-ai
import { GoogleGenerativeAI } from "@google/generative-ai";

// ضع هنا الـ API Key الخاص بك من Google AI Studio
const genAI = new GoogleGenerativeAI("AIzaSyBALzy4DHWm0zGbqL2Og_f-7snSxPJJkbE");

export async function getDocumentSummary(text) {
  try {
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    
    const prompt = `قم بتلخيص النص التالي بأسلوب أكاديمي ومختصر ومفيد للطلبة:\n\n${text}`;
    
    const result = await model.generateContent(prompt);
    const response = await result.response;
    return response.text();
  } catch (error) {
    console.error("خطأ في الاتصال بـ Gemini:", error);
    return "عذراً، لم نتمكن من تلخيص النص حالياً.";
  }
}