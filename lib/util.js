import { getPhilosopher } from "./chatDB";
import { customRunChat } from "./genAI";

export function combineMessages(history, question, answer) {
  if (question) history.push({ role: "user", text: question });
  if (answer) history.push({ role: "model", text: answer });
  return history;
}

export async function chatSetup(
  philosopherLoc,
  initialChat,
  clientHistory,
  message
) {
  // Change philosopherLoc to philosopher name
  const philosopher = getPhilosopher(philosopherLoc);
  if (initialChat) {
    const googleHistory = initialGoogleHistory(philosopher);
    const initialMessage = "Greetings. Introduce yourself.";
    // combine it with initial google history
    const aiResponse = await customRunChat(googleHistory, initialMessage);

    // Transform to client history
    const resultClientHistory = combineHistoryAndResponseToClient(
      googleHistory,
      initialMessage,
      aiResponse
    );

    // return client history
    return resultClientHistory;
  } else {
    // transform client history to google history
    const googleHistory = clientToGoogleHistory(clientHistory);
    const aiResponse = await customRunChat(googleHistory, message);

    // Transform to client history
    const resultClientHistory = combineHistoryAndResponseToClient(
      googleHistory,
      message,
      aiResponse
    );

    // return client history
    return resultClientHistory;
  }
}

function combineHistoryAndResponseToClient(
  googleHistory,
  inputMessage,
  response
) {
  const clientHistory = googleToClientHistory(googleHistory);

  if (inputMessage) clientHistory.push({ role: "user", text: inputMessage });
  if (response) clientHistory.push({ role: "model", text: response });
  return clientHistory;
}

function clientToGoogleHistory(clientHistory) {
  // [{role: user/model, text: "..."}] to
  return clientHistory.map((message) => ({
    role: message.role,
    parts: [{ text: message.text }],
  }));
}

function googleToClientHistory(googleHistory) {
  return googleHistory.map((msg) => ({
    role: msg.role,
    text: msg.parts[0].text,
  }));
}

export function initialGoogleHistory(philosopher) {
  return [
    {
      role: "user",
      parts: [
        {
          text: `You are ${philosopher}. Have a conversation with me. Reply to me without using bullet points or numbers.`,
        },
      ],
    },
    {
      role: "model",
      parts: [
        {
          text: "Ok",
        },
      ],
    },
  ];
}
