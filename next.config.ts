import type { NextConfig } from "next";
import path from "node:path";

const nextConfig: NextConfig = {
  turbopack: {
    root: path.resolve(process.cwd()),
  },
  async rewrites() {
    return [{ source: "/sarvesh-gadkari.vcf", destination: "/api/vcard" }];
  },
};

export default nextConfig;
