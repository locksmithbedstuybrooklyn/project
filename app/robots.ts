import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/admin/', '/private/', '/temp/'],
    },
    sitemap: 'https://locksmithbedstuy.com/sitemap.xml',
  };
}
