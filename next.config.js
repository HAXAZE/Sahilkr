
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "i.ibb.co", // Add this entry for the new image source
      },
    ],
  },
  experimental: {
    serverActions: true,
  },
};

module.exports = nextConfig;
