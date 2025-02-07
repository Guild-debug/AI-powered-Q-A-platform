import { useState } from "react";
import Layout from "../components/layout";

export default function Home() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  const askQuestion = async () => {
    const response = await fetch("/api/ask", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ question }),
    });
    const data = await response.json();
    setAnswer(data.answer);
  };

  return (
    <Layout>
      <div className="container">
        <h1>AI Q&A Platform</h1>
        <input
          type="text"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          placeholder="Ask me anything..."
        />
        <button onClick={askQuestion}>
          Ask AI
        </button>
        <div className="answer">
          <strong>Answer:</strong> {answer}
        </div>
      </div>
    </Layout>
  );
}
