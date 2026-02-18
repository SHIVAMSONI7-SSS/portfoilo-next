import { NextResponse } from "next/server";
import Groq from "groq-sdk";

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();

    const chatCompletion = await groq.chat.completions.create({
      messages: [
        {
          role: "system",
          content: "You are an AI assistant for Shivam Soni's portfolio. Shivam is an AI/ML Engineer from Hazaribag. Keep answers short, professional, and highlight Shivam's skills in Python, ML, and Web Dev."
        },
        ...messages,
      ],
      model: "llama-3.3-70b-versatile",
    });

    return NextResponse.json({ text: chatCompletion.choices[0]?.message?.content });
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch from Groq" }, { status: 500 });
  }
}