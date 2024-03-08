/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: "https",
          hostname: "cdn.sanity.io",
          port: "",
        },
      ],
    },
    experimental: {
      taint: true,
    },
    // ...other config settings
  };

  export default nextConfig;