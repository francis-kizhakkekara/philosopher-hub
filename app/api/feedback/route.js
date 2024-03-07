import { chatSetup } from "@/lib/util";
import { MongoClient } from "mongodb";

export async function GET(request) {
  return Response.json({ data: "Feedback data" });
}

export async function POST(request) {
  const data = await request.json();
  console.log(data);

  await addFeedback(data["email"], data["message"]);
  return Response.json({ feedback: "yep" });
}

async function addFeedback(email = "default", message = "default message") {
  const uri = process.env.MONGO_URL;
  let mongoClient;

  try {
    mongoClient = await connectToCluster(uri);
    const db = mongoClient.db("philosopher");
    const collection = db.collection("feedbacks");

    await collection.insertOne({ email, message });
  } finally {
    await mongoClient.close();
  }
}

async function connectToCluster(uri) {
  let mongoClient;

  try {
    mongoClient = new MongoClient(uri);
    console.log("Connecting to MongoDB Atlas cluster...");
    await mongoClient.connect();
    console.log("Successfully connected to MongoDB Atlas!");

    return mongoClient;
  } catch (error) {
    console.error("Connection to MongoDB Atlas failed!", error);
    process.exit();
  }
}
