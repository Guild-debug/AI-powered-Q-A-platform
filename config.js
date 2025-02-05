// config.js
const config = {
  development: {
    apiBaseUrl: "http://localhost:3000/api",
    aiApiKey: process.env.NEXT_PUBLIC_AI_API_KEY,
  },
  production: {
    apiBaseUrl: "https://your-production-domain.com/api",
    aiApiKey: process.env.NEXT_PUBLIC_AI_API_KEY,
  },
};

const environment = process.env.NODE_ENV || "development";

module.exports = config[environment];
