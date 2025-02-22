/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: [{ loader: '@svgr/webpack', options: { icon: true } }],
    });
    return config;
  },
};

// const withImages = require('next-images');

// module.exports = withImages({
//   webpack(config, options) {
//     return config;
//   },
// });

module.exports = nextConfig;
