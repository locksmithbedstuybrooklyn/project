const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.locksmithbedstuy.com';
const SITE_NAME = 'Bed-Stuy Locksmith';
const PHONE = '(718) 568-6597';

export function generateArticleSchema(post: any) {
  return {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    headline: post.title,
    description: post.description,
    image: post.image.startsWith('http') ? post.image : `${SITE_URL}${post.image}`,
    author: {
      '@type': 'Person',
      name: post.author,
      url: `${SITE_URL}/about`,
      jobTitle: 'Lead Technician',
    },
    publisher: {
      '@type': 'Organization',
      name: SITE_NAME,
      logo: {
        '@type': 'ImageObject',
        url: `${SITE_URL}/images/logo.png`,
      },
    },
    datePublished: post.publishedAt.toISOString(),
    dateModified: post.updatedAt.toISOString(),
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${SITE_URL}/blog/${post.slug}`,
    },
    articleSection: post.category,
    keywords: post.keywords.join(', '),
  };
}

export function generateLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Locksmith',
    name: SITE_NAME,
    telephone: PHONE,
    email: 'info@locksmithbedstuy.com',
    url: SITE_URL,
    image: `${SITE_URL}/images/og-image.png`,
    description: 'Expert emergency locksmith in Bed-Stuy. 24/7 car unlock, lock replacement, and high-security installations. 20-minute response time.',
    priceRange: '$$',
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: '00:00',
      closes: '23:59',
    },
    areaServed: [
      { '@type': 'City', name: 'Brooklyn', sameAs: 'https://www.wikidata.org/wiki/Q18419' },
      { '@type': 'Neighborhood', name: 'Bed-Stuy', sameAs: 'https://en.wikipedia.org/wiki/Bedford%E2%80%93Stuyvesant,_Brooklyn' },
      { '@type': 'Neighborhood', name: 'Williamsburg', sameAs: 'https://en.wikipedia.org/wiki/Williamsburg,_Brooklyn' },
      { '@type': 'Neighborhood', name: 'Bushwick', sameAs: 'https://en.wikipedia.org/wiki/Bushwick,_Brooklyn' },
    ],
    geo: {
      '@type': 'GeoCircle',
      geoCenter: {
        '@type': 'GeoCoordinates',
        latitude: '40.6836',
        longitude: '-73.9412',
      },
      geoRadius: '8000',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '273',
      bestRating: '5',
      worstRating: '1',
    },
    knowsAbout: [
      'Automotive Locksmithing',
      'High-Security Locks',
      'Smart Lock Installation',
      'Emergency Lockout Services',
    ],
  };
}

export function generateServiceSchema(serviceName: string, description: string, slug: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: serviceName,
    description,
    url: `${SITE_URL}/services/${slug}`,
    provider: {
      '@type': 'LocalBusiness',
      name: SITE_NAME,
      telephone: PHONE,
      url: SITE_URL,
    },
    areaServed: 'Bed-Stuy, Brooklyn, New York',
    availableChannel: {
      '@type': 'ServiceChannel',
      servicePhone: { '@type': 'ContactPoint', telephone: PHONE, contactType: 'customer service' },
    },
  };
}

export function generateBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function generateFAQSchema(faqs: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: { '@type': 'Answer', text: faq.answer },
    })),
  };
}
