import {
    GoogleGenerativeAI,
    HarmCategory,
    HarmBlockThreshold,
} from "@google/generative-ai"

const MODEL_NAME = "gemini-1.0-pro";
const API_KEY = "AIzaSyA4VahyZdJJNGc8cMP7uPl9PcuZmn_abg0";

const genAI = new GoogleGenerativeAI('AIzaSyA4VahyZdJJNGc8cMP7uPl9PcuZmn_abg0');

const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
});

const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 64,
    maxOutputTokens: 8192,
    responseMimeType: "text/plain",
};

async function run(prompt) {
    const chatSession = model.startChat({
        generationConfig,
        history: [
        ],
    });

    const response = await chatSession.sendMessage(prompt);

    return response.response.text();
}

export default run;