/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  typescript: {
    // Temporarily disable type checking during development
    ignoreBuildErrors: true,
  },
}

module.exports = nextConfig 