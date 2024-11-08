import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  images: {
    domains: ['i.scdn.co', 'charts-images.scdn.co', 'concerts.spotifycdn.com','t.scdn.co'],
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.devtool = 'source-map'; // Enable source maps for client-side code
    }
    return config;
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
