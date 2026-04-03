import path from "path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    root: path.resolve(__dirname),
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "mlraba0m5wz3.i.optimole.com",
      },
      {
        protocol: "https",
        hostname: "lepouvoirdelautomobile.fr",
      },
    ],
  },
};

export default nextConfig;
