/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
        port: '',
        pathname: '/images/t7u3qpl5/production/**', // Ensure this pathname is correct for your images
      },
    ],
  },
  experimental: {
    taint: true,
  },
  env: {
    SANITY_PROJECT_ID: process.env.SANITY_PROJECT_ID,
    SANITY_DATASET: process.env.SANITY_DATASET,
    SANITY_API_VERSION: process.env.SANITY_API_VERSION,
    SANITY_TOKEN: process.env.SANITY_TOKEN,
  },
}

export default nextConfig
