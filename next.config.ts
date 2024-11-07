import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  images: {
    domains: ['i.scdn.co', 'charts-images.scdn.co'],
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/home', // Redirect root to /home
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
