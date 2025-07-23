import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
   images: {
    domains: ['www.vietourist.com.vn','localhost'],
    unoptimized: true,
  },
  output:"standalone"
};

export default nextConfig;
