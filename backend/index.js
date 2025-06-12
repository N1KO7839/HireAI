import OpenAI from "openai";
import { config } from "dotenv";
import cors from "cors";
import express from "express";

config();
const app = express();
app.use(cors());
app.use(express.json());

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

app.post("/api/chat", async (req, res) => {
  try {
    const messages = req.body.messages;
    if (!messages) {
      return res.status(400).json({ error: "Missing messages in request body" });
    }

    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages,
      max_tokens: 512,
      temperature: 0.5,
      top_p: 0.9,
    });

    res.json({ reply: completion.choices[0].message.content });
  } catch (error) {
    console.error("OpenAI API error:", error);
    res.status(500).json({ error: "Failed to get response from AI" });
  }
});

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});