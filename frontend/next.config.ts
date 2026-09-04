import type { NextConfig } from "next";

const isGithubActions = process.env.GITHUB_ACTIONS || false;
const subfolder = process.env.SUBFOLDER || (isGithubActions ? "jordanstory" : "");
const basePath = subfolder ? `/${subfolder.replace(/^\/+|\/+$/g, '')}` : "";

const nextConfig: NextConfig = {
  output: "export",
  basePath: basePath,
  assetPrefix: basePath ? `${basePath}/` : undefined,
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
  images: {
    unoptimized: true,
  },
  allowedDevOrigins: ["192.168.1.4", "localhost", "127.0.0.1", "*.local"],
};

export default nextConfig;
