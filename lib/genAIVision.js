// node --version # Should be >= 18
// npm install @google/generative-ai

const {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} = require("@google/generative-ai");
const fs = require("fs");

const API_KEY = process.env.GOOGLE_API;
const MODEL_NAME = "gemini-pro-vision";

function visionAIconfig() {
  const genAI = new GoogleGenerativeAI(API_KEY);
  const model = genAI.getGenerativeModel({ model: MODEL_NAME });
  const generationConfig = {
    temperature: 0.9,
    topK: 40,
    topP: 0.95,
    maxOutputTokens: 1024,
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

function trainingParts() {
  if (!fs.existsSync("image0.jpeg")) {
    throw new Error("Could not find images in current directory.");
  }

  const parts = [
    {
      text: "Extract the objects in the provided image and output them in a list in alphabetical order",
    },
    { text: "Image: " },
    {
      inlineData: {
        mimeType: "image/jpeg",
        data: Buffer.from(fs.readFileSync("image0.jpeg")).toString("base64"),
      },
    },
    {
      text: "List of Objects: - airplane\n- coffee cup\n- eiffel tower\n- globe\n- keyboard\n- mouse\n- money\n- notebook\n- passport\n- pen\n- sunglasses\n- shopping cart\n- tablet",
    },
    { text: "Image: " },
    {
      inlineData: {
        mimeType: "image/jpeg",
        data: Buffer.from(fs.readFileSync("image1.jpeg")).toString("base64"),
      },
    },
    {
      text: "List of Objects: - gardening gloves\n- rake\n- shovel\n- plants\n- pots\n- watering can",
    },
    { text: "Image: " },
    {
      inlineData: {
        mimeType: "image/jpeg",
        data: Buffer.from(fs.readFileSync("image2.jpeg")).toString("base64"),
      },
    },
    { text: "List of Objects: " },
  ];

  return parts;
}

async function run() {
  const { model, generationConfig, safetySettings } = visionAIconfig();

  const parts = trainingParts();

  const result = await model.generateContent({
    contents: [{ role: "user", parts }],
    generationConfig,
    safetySettings,
  });

  const response = result.response;
  console.log(response.text());
}

run();
