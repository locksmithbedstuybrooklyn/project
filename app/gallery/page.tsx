import Link from 'next/link';
import { services, locations, blogPosts } from '@/lib/content';

export const metadata = {
  title: 'Professional Locksmith Gallery | Bed-Stuy Locksmith',
  description: 'Gallery of locksmith services in Bed-Stuy: car lockout, lock replacement, key replacement, and more. Serving Brooklyn and Queens.',
};

const categories = [
  {
    title: 'Service Gallery',
    emoji: '🔧',
    items: services.map((s) => ({ label: s.name, href: `/services/${s.slug}`, icon: s.icon })),
  },
  {
    title: 'Service Locations',
    emoji: '📍',
    items: locations.map((l) => ({ label: `${l.name} Locksmith`, href: `/locations/${l.slug}`, icon: '📍' })),
  },
  {
    title: 'Tips & Guides',
    emoji: '📖',
    items: blogPosts.map((p) => ({ label: p.title, href: `/blog/${p.slug}`, icon: '📰' })),
  },
];

export default function GalleryPage() {
  return (
    <>
      <section className="bg-gradient-to-r from-trust-blue to-blue-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Service Gallery</h1>
          <p className="text-xl text-blue-100">Explore our services, locations, and guides.</p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {categories.map((cat) => (
            <div key={cat.title}>
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <span>{cat.emoji}</span> {cat.title}
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {cat.items.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="group relative bg-gray-100 rounded-xl overflow-hidden aspect-video flex flex-col items-center justify-center hover:bg-blue-50 border border-gray-200 hover:border-trust-blue transition-all duration-200 p-4 text-center"
                  >
                    <span className="text-4xl mb-2">{item.icon}</span>
                    <span className="text-sm font-semibold text-gray-800 group-hover:text-trust-blue leading-snug">
                      {item.label}
                    </span>
                    <span className="text-xs text-trust-blue mt-1 opacity-0 group-hover:opacity-100 transition-opacity">
                      View →
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-trust-blue text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to get started?</h2>
          <a href="tel:(718)568-6597" className="inline-block bg-action-orange text-white font-bold px-8 py-4 rounded-lg text-lg hover:bg-orange-600 transition-colors">
            Call (718) 568-6597 — 24/7
          </a>
        </div>
      </section>
    </>
  );
}
