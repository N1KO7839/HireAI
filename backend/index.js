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
  const userPrompt = req.body.message;

  const completion = await openai.chat.completions.create({
  model: "gpt-3.5-turbo",
  max_tokens: 256,
  temperature: 0.3,
  messages: [
    {
      role: "system",
      content: `
You are a professional recruiter conducting a formal job interview for the role the candidate has applied to. Ask one relevant and moderately technical question at a time, based directly on the candidate's background and the job description they provided. Use a polite and respectful tone. If the candidate's answer is incomplete, ask a follow-up with gentle guidance. If they are unsure, briefly explain the expected answer and move on to the next question. Maintain the character of a recruiter at all times.`,
    },
    {
      role: "user",
      content: userPrompt,
    },
  ],
});


  res.json({ reply: completion.choices[0].message.content });
});

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
