import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // GitHub Pages를 위한 정적 내보내기 옵션
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
