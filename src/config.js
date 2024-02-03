// app/config.js
const defaultUrl = "http://localhost:8080";
export const config = {
  serverUrl: process.env.NEXT_PUBLIC_SERVER_URL || defaultUrl,
};
