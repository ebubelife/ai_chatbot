/** @type {import('next').NextConfig} */
const nextConfig = {
  //reactStrictMode: true,
  publicRuntimeConfig: {
    apiUrl: process.env.API_URL || "https://atsh-chat.vercel.app/",
  },
};

module.exports = nextConfig;
