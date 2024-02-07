// node --version # Should be >= 18
// npm install @google/generative-ai

// import { chatHistory, initialMessage } from "./util";

const {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} = require("@google/generative-ai");

const MODEL_NAME = "gemini-pro";
const API_KEY = process.env.GOOGLE_API;

// ChatHistory: strucgture [{role: "user"/"model", parts: [{text: "the text"}]}, {...}]
// function chatHistory(chatInput) {
//   // Input structure [{user: "the question", model: "the answer"}]
// }

function chatConfig() {
  const genAI = new GoogleGenerativeAI(API_KEY);
  const model = genAI.getGenerativeModel({ model: MODEL_NAME });

  const generationConfig = {
    temperature: 0.9,
    topK: 1,
    topP: 1,
    maxOutputTokens: 2048,
  };

  const safetySettings = [
    {
      category: HarmCategory.HARM_CATEGORY_HARASSMENT,
      threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
    },
    {
      category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
      threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
    },
    {
      category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
      threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
    },
    {
      category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
      threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
    },
  ];

  return { model, generationConfig, safetySettings };
}

// async function runChat(
//   inputMessage = "Explain the benefits of having a stoic mindset"
// ) {
//   const { model, generationConfig, safetySettings } = chatConfig();

//   const history = chatHistory();

//   const chat = model.startChat({
//     generationConfig,
//     safetySettings,
//     history,
//   });

//   const result = await chat.sendMessage(inputMessage);
//   const response = result.response;
//   //   console.log(response.text());
//   return response.text();
// }

// async function initiateChat(
//   philosopher,
//   inputMessage = "Greetings. Introduce yourself."
// ) {
//   const { model, generationConfig, safetySettings } = chatConfig();

//   const history = initialMessage(philosopher);

//   const chat = model.startChat({
//     generationConfig,
//     safetySettings,
//     history,
//   });

//   console.log("Initial request", history[0].parts);

//   const result = await chat.sendMessage(inputMessage);
//   const response = result.response;
//   //   console.log(response.text());
//   return response.text();
// }

export async function customRunChat(history, inputMessage) {
  const { model, generationConfig, safetySettings } = chatConfig();

  const chat = model.startChat({
    generationConfig,
    safetySettings,
    history,
  });

  const result = await chat.sendMessage(inputMessage);
  const response = result.response;
  //   console.log(response.text());
  return response.text();
}

// runChat();
