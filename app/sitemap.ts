import { MetadataRoute } from 'next';

const BASE_URL = 'https://www.locksmithbedstuy.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const services = [
    'automotive-locksmith',
    'lock-installation',
    'lock-replacement',
    'lock-repair',
    'lock-rekeying',
    'residential-lockout',
    '24-hour-emergency-locksmith',
  ];

  const locations = [
    'bed-stuy',
    'crown-heights',
    'prospect-heights',
    'williamsburg',
    'greenpoint',
    'bushwick',
    'astoria',
    'long-island-city',
  ];

  const blog = [
    'locked-out-car',
    'prevent-lockouts',
    'car-key-replacement-guide',
    'ignition-problems',
    'home-security-checklist',
    'lock-replacement-guide',
    'lock-repair-vs-replacement',
    'high-security-locks',
    'emergency-locksmith-tips',
    'lock-maintenance',
    'bed-stuy-locksmith-guide',
  ];

  const now = new Date('2026-05-06');

  return [
    // Core pages
    { url: BASE_URL, lastModified: now, changeFrequency: 'weekly', priority: 1.0 },
    { url: `${BASE_URL}/services`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE_URL}/locations`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE_URL}/about`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/contact`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/quote`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE_URL}/faq`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/blog`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 }, // Higher priority for fresh blog content
    { url: `${BASE_URL}/gallery`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/service-areas`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/testimonials`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/price-estimator`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/privacy-policy`, lastModified: now, changeFrequency: 'yearly', priority: 0.4 },
    { url: `${BASE_URL}/terms-of-service`, lastModified: now, changeFrequency: 'yearly', priority: 0.4 },

    // Primary service pages
    ...services.map((slug) => ({
      url: `${BASE_URL}/services/${slug}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    })),

    // Location pages
    ...locations.map((slug) => ({
      url: `${BASE_URL}/locations/${slug}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),

    // Blog pages
    ...blog.map((slug) => ({
      url: `${BASE_URL}/blog/${slug}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.8, // Increased priority for long-form authoritative guides
    })),
  ];
}
