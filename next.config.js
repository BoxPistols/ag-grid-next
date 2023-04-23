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

// module.exports = {
//   webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
//     config.resolve.alias['@'] = path.resolve(__dirname, 'src');
//     config.resolve.alias['@assets'] = path.resolve(__dirname, 'src/assets');
//     return config;
//   },
// };
