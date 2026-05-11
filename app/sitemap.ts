import { MetadataRoute } from 'next';
import { services, locations, blogPosts } from '@/lib/content';

const BASE_URL = 'https://www.locksmithbedstuy.com';

// Deterministic random date generator based on a string seed (URL)
// Generates a date between Feb 1, 2026 and May 6, 2026
function getRandomDateFromUrl(url: string): Date {
  let hash = 0;
  for (let i = 0; i < url.length; i++) {
    hash = url.charCodeAt(i) + ((hash << 5) - hash);
  }
  
  // Convert hash to a pseudo-random number between 0 and 1
  const random = Math.abs(Math.sin(hash));
  
  // Feb 1, 2026 to May 6, 2026
  const start = new Date('2026-02-01T00:00:00Z').getTime();
  const end = new Date('2026-05-06T00:00:00Z').getTime();
  
  return new Date(start + random * (end - start));
}

export default function sitemap(): MetadataRoute.Sitemap {
  const corePages = [
    { url: BASE_URL, changeFrequency: 'weekly' as const, priority: 1.0 },
    { url: `${BASE_URL}/services`, changeFrequency: 'monthly' as const, priority: 0.9 },
    { url: `${BASE_URL}/locations`, changeFrequency: 'monthly' as const, priority: 0.9 },
    { url: `${BASE_URL}/about`, changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${BASE_URL}/contact`, changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${BASE_URL}/booking`, changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${BASE_URL}/quote`, changeFrequency: 'monthly' as const, priority: 0.9 },
    { url: `${BASE_URL}/blog`, changeFrequency: 'weekly' as const, priority: 0.9 },
    { url: `${BASE_URL}/gallery`, changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${BASE_URL}/testimonials`, changeFrequency: 'monthly' as const, priority: 0.7 },
  ];

  return [
    // Core pages
    ...corePages.map(page => ({
      ...page,
      lastModified: getRandomDateFromUrl(page.url),
    })),

    // Primary service pages
    ...services.map((service) => {
      const url = `${BASE_URL}/services/${service.slug}`;
      return {
        url,
        lastModified: getRandomDateFromUrl(url),
        changeFrequency: 'monthly' as const,
        priority: 0.9,
      };
    }),

    // Location pages
    ...locations.map((location) => {
      const url = `${BASE_URL}/locations/${location.slug}`;
      return {
        url,
        lastModified: getRandomDateFromUrl(url),
        changeFrequency: 'monthly' as const,
        priority: 0.8,
      };
    }),

    // Blog pages
    ...blogPosts.map((post) => {
      const url = `${BASE_URL}/blog/${post.slug}`;
      return {
        url,
        lastModified: getRandomDateFromUrl(url),
        changeFrequency: 'monthly' as const,
        priority: 0.8,
      };
    }),
  ];
}
