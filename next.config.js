/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    API_AERIS_BACKEND: "http://31.220.101.22:3100",
  },
};

module.exports = nextConfig;
