import { MetadataRoute } from 'next';
import { services, locations, blogPosts } from '@/lib/content';

const BASE_URL = 'https://www.locksmithbedstuy.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return [
    // Core pages
    { url: BASE_URL, lastModified: now, changeFrequency: 'weekly', priority: 1.0 },
    { url: `${BASE_URL}/services`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE_URL}/locations`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE_URL}/service-areas`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/about`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/contact`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/booking`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/quote`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE_URL}/faq`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/blog`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${BASE_URL}/gallery`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/testimonials`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/price-estimator`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/privacy-policy`, lastModified: now, changeFrequency: 'yearly', priority: 0.4 },
    { url: `${BASE_URL}/terms-of-service`, lastModified: now, changeFrequency: 'yearly', priority: 0.4 },

    // Primary service pages
    ...services.map((service) => ({
      url: `${BASE_URL}/services/${service.slug}`,
      lastModified: service.updatedAt,
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    })),

    // Location pages
    ...locations.map((location) => ({
      url: `${BASE_URL}/locations/${location.slug}`,
      lastModified: location.updatedAt,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),

    // Blog pages
    ...blogPosts.map((post) => ({
      url: `${BASE_URL}/blog/${post.slug}`,
      lastModified: post.updatedAt,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),
  ];
}
