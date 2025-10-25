/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true, // required for static exports
  },
  trailingSlash: true, // optional but helps with GitHub Pages
};

module.exports = nextConfig;
