/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['www.uniworld.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.uniworld.com'
      },
      {
        protocol: 'https',
        hostname: 'images.uniworld.com'
      }
    ]
  },
  experimental: {
    optimizePackageImports: ['@headlessui/react']
  }
};

module.exports = nextConfig; 