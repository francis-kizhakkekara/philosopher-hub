import { chatSetup } from "@/lib/util";

export async function GET(request) {
  return Response.json({ data: "Fake Data" });
}

export async function POST(request) {
  // const res = await fetch("https://data.mongodb-api.com/...", {
  //   headers: {
  //     "Content-Type": "application/json",
  //     "API-Key": process.env.DATA_API_KEY,
  //   },
  // });
  const data = await request.json();

  // console.log("Post req.body:", data, data.initialChat);
  let aiResp = "";

  if (data && data.initialChat) {
    // Initiate chat with philosopher
    const newHistory = await chatSetup(data.philosopher, true);
    return Response.json(newHistory);
  } else {
    // console.log("Empty history", data.chatHistory);
    if (!data.chatHistory || data.chatHistory.length === 0) {
      return Response.json([
        { role: "none" },
        { role: "none" },
        { role: "none" },
        { role: "model", text: "Select a philosopher" },
      ]);
    }
    const newHistory = await chatSetup(
      data.philosopher,
      false,
      data.chatHistory,
      data.message
    );

    return Response.json(newHistory);
  }
}
