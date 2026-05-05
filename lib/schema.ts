const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://locksmithbedstuy.com';
const SITE_NAME = 'Bed-Stuy Locksmith';
const PHONE = '(718) 568-6597';

export function generateLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: SITE_NAME,
    telephone: PHONE,
    email: 'info@locksmithbedstuy.com',
    url: SITE_URL,
    description: 'Fast emergency locksmith service in Bed-Stuy. Car unlock, key replacement, lock repair. 20-minute response. Available 24/7.',
    areaServed: [
      'Bed-Stuyvesant', 'Crown Heights', 'Prospect Heights',
      'Williamsburg', 'Greenpoint', 'Bushwick', 'Astoria', 'Long Island City',
    ],
    priceRange: '$$',
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: '00:00',
      closes: '23:59',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '273',
      bestRating: '5',
      worstRating: '1',
    },
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
