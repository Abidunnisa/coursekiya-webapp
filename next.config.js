const path = require('path');

const nextConfig = {
  output: 'export',
  images: { unoptimized: true },
  trailingSlash: true,
  assetPrefix: '',
  basePath: '',
  webpack: (config) => {
    config.resolve.alias['@components'] = path.join(__dirname, './src/components');
    config.resolve.alias['@public'] = path.join(__dirname, './public');
    config.resolve.alias['@'] = path.join(__dirname, 'src');
    return config;
  },
};

module.exports = nextConfig;
