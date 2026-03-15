const isProd = process.env.NODE_ENV === 'production';

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // GitHub Pages 리포지토리 이름 설정 (운영 배포 시에만 적용)
  basePath: isProd ? '/yoonjoo-portfolio' : '',
  assetPrefix: isProd ? '/yoonjoo-portfolio/' : '',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
