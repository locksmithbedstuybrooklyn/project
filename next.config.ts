/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      { source: '/services/car-unlock', destination: '/services/car-lockout', permanent: true },
      { source: '/services/house-unlock', destination: '/services/residential-lockout', permanent: true },
      { source: '/services/key-replacement', destination: '/services/car-key-replacement', permanent: true },
      { source: '/emergency', destination: '/services/24-hour-locksmith', permanent: true },
      { source: '/about-us', destination: '/about', permanent: true },
      { source: '/contact-us', destination: '/contact', permanent: true },
      { source: '/locations/crown-heights', destination: '/locations/bed-stuy/crown-heights', permanent: true },
      { source: '/locations/prospect-heights', destination: '/locations/bed-stuy/prospect-heights', permanent: true },
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
