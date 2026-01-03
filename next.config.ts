import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: "/about-teams",
  assetPrefix: "/about-teams/",
};

export default nextConfig;
