/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  basePath: '/coursekiya-webapp', // 👈 must match your repo name
  assetPrefix: '/coursekiya-webapp/', // 👈 add this
};

module.exports = nextConfig;
