import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'computing.psu.ac.th',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'img.advice.co.th',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'upload.wikimedia.org',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'media.ctmusicshop.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'www.johnsonstring.com',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
