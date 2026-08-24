import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  allowedDevOrigins: ["192.168.1.4", "localhost", "127.0.0.1", "*.local"],
};

export default nextConfig;
