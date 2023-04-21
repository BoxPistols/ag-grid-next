/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  // hostname: ["localhost:3000, vercel.app"],
  // port: "3000",
  // domains: [""],
  // images: {
  //   unoptimized: true,
  // },
}
module.exports = nextConfig

// https://nextjs.org/docs/api-reference/next/image

// next.config.js
const path = require('path');

module.exports = {
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    // Note: we provide webpack above so you should not `require` it
    // Perform customizations to webpack config

    config.resolve.alias['@'] = path.resolve(__dirname, 'src');
    config.resolve.alias['@assets'] = path.resolve(__dirname, 'src/assets');

    // Important: return the modified config
    return config;
  },
};
