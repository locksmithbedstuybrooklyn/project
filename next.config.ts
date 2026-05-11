/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  async redirects() {
    return [
      { source: '/services/car-unlock', destination: '/services/automotive-locksmith', permanent: true },
      { source: '/services/car-lockout', destination: '/services/automotive-locksmith', permanent: true },
      { source: '/services/car-key-replacement', destination: '/services/automotive-locksmith', permanent: true },
      { source: '/services/ignition-repair', destination: '/services/automotive-locksmith', permanent: true },
      { source: '/services/house-unlock', destination: '/services/residential-lockout', permanent: true },
      { source: '/services/key-replacement', destination: '/services/automotive-locksmith', permanent: true },
      { source: '/emergency', destination: '/services/24-hour-emergency-locksmith', permanent: true },
      { source: '/services/24-hour-locksmith', destination: '/services/24-hour-emergency-locksmith', permanent: true },
      { source: '/about-us', destination: '/about', permanent: true },
      { source: '/contact-us', destination: '/contact', permanent: true },
      { source: '/services/lock-replacement/residential', destination: '/services/lock-replacement', permanent: true },
      { source: '/services/lock-replacement/commercial', destination: '/services/lock-replacement', permanent: true },
      { source: '/services/lock-repair/residential', destination: '/services/lock-repair', permanent: true },
      { source: '/services/lock-installation/residential', destination: '/services/lock-installation', permanent: true },
    ];
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          { key: 'X-DNS-Prefetch-Control', value: 'on' },
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
        ],
      },
    ];
  },
};

export default nextConfig;
