/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn2.unrealengine.com',
      },
      {
        protocol: 'https',
        hostname: 'cdn1.epicgames.com',
      },
    ],
  },
}

export default nextConfig
