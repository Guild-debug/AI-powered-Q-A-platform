// worker.js
export default {
  async fetch(request) {
    return new Response("Hello from Cloudflare Worker!", { status: 200 });
  }
};
