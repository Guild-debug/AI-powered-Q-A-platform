import { useState } from "react";

export default function Home() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const askQuestion = async () => {
    setLoading(true);
    setError("");
    setAnswer("");
    try {
      const response = await fetch("/api/ask", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question }),
      });
      if (!response.ok) {
        throw new Error("Failed to fetch the answer.");
      }
      const data = await response.json();
      setAnswer(data.answer);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <h1>AI Q&A Platform</h1>
      <input
        type="text"
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        placeholder="Ask me anything..."
        className="input"
      />
      <button onClick={askQuestion} className="button" disabled={loading}>
        Ask AI
      </button>
      {loading && <p>Loading...</p>}
      {error && <p className="error">{error}</p>}
      {answer && (
        <div className="answer">
          <strong>Answer:</strong> {answer}
        </div>
      )}
      <style jsx>{`
        .container {
          text-align: "center";
          margin-top: "50px";
        }
        .input {
          width: "60%";
          padding: "10px";
          font-size: "16px";
        }
        .button {
          margin-left: "10px";
          padding: "10px";
        }
        .answer {
          margin-top: "20px";
          font-size: "18px";
        }
        .error {
          color: "red";
        }
      `}</style>
    </div>
  );
}
