import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {},
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "unsplash.com",
      }
    ]
  }
};

export default nextConfig;
