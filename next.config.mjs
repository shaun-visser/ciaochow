/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'ciaochow.plusnarrative.biz',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
