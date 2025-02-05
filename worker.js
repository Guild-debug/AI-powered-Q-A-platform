// worker.js
export default {
  async fetch(request) {
    if (request.method === "POST" && new URL(request.url).pathname === "/api/ask") {
      const { question } = await request.json();
      
      // For simplicity, echo the question back as the answer.
      const answer = `You asked: ${question}`;
      
      return new Response(JSON.stringify({ answer }), {
        headers: { "Content-Type": "application/json" },
        status: 200,
      });
    }
    
    return new Response("Not found", { status: 404 });
  }
};
