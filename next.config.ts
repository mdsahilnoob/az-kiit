import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "drive.google.com",
        port: "",
        //pathname: "/uc*", // This will match the correct image URL format
      },
    ],
  },
};

export default nextConfig;
