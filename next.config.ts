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
  },
  /* config options here */
  typescript: {
    // !! WARN !!
    // This will allow production builds to complete even with TS errors
    ignoreBuildErrors: true,
  },
  
  // Optional: Disable ESLint during build if you're getting ESLint errors
  eslint: {
    ignoreDuringBuilds: true,
  }
};

export default nextConfig;
