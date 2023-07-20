/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'baesystems.com',
        port: '',
      },
    ],
  },
};

module.exports = nextConfig;
