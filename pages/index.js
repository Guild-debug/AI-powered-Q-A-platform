import { useState } from "react";

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
    <div style={{ textAlign: "center", marginTop: "50px", color: "#ffffff", backgroundColor: "#121212", height: "100vh" }}>
      <h1 style={{ color: "#00ffcc" }}>AI Q&A Platform</h1>
      <input
        type="text"
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        placeholder="Ask me anything..."
        style={{ width: "60%", padding: "10px", fontSize: "16px", backgroundColor: "#333", color: "#fff" }}
      />
      <button onClick={askQuestion} style={{ marginLeft: "10px", padding: "10px", backgroundColor: "#00ffcc", border: "none", cursor: "pointer" }}>
        Ask AI
      </button>
      <div style={{ marginTop: "20px", fontSize: "18px", color: "#ffffff" }}>
        <strong>Answer:</strong> {answer}
      </div>
    </div>
  );
}
