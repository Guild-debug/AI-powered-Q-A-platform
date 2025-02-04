
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Only POST requests allowed" });
  }

  const { question } = req.body;

  try {
    const response = await openai.completions.create({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: question }],
    });

    res.status(200).json({ answer: response.choices[0].message.content });
  } catch (error) {
    res.status(500).json({ error: "Error generating answer" });
  }
}
