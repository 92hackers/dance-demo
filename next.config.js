/** @type {import('next').NextConfig} */
const path = require('path')

const nextConfig = {
  output: 'standalone',
  reactStrictMode: true,
  swcMinify: true,
  compress: true,
  // webpack: (config, options) => {
  //   config.resolve.alias['@'] = path.resolve(__dirname, './src')
  //   config.resolve.alias['public'] = path.resolve(__dirname, './public')
  //   return config
  // },
  // sassOptions: {
  //   includePaths: [path.join(__dirname, 'src', 'styles')],
  //   prependData: `@import "variables.scss";`,
  // },
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'static.dancedreamtv.com',
        port: '',
        pathname: '/static/**',
      },
    ],
  },
}

module.exports = nextConfig