import type { NextConfig } from "next";
import path from "node:path";

const nextConfig: NextConfig = {
  turbopack: {
    root: path.resolve(process.cwd()),
  },
  async redirects() {
    return [
      { source: "/sarvesh", destination: "/", permanent: true },
      { source: "/sarvesh/qr", destination: "/qr", permanent: true },
    ];
  },
};

export default nextConfig;
