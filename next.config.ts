import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  transpilePackages: [], // optional
  // experimental: {
  //   serverActions: false, // if you're on App Router and this is unused
  // },
  /* config options here */
};

export default nextConfig;
