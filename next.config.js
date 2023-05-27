/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    API_AERIS_BACKEND: "http://localhost:3100/",
  },
};

module.exports = nextConfig;
