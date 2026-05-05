import Link from 'next/link';
import { locations } from '@/lib/content';

export const metadata = {
  title: 'Locksmith Service Areas | Bed-Stuy, Brooklyn & Queens | (718) 568-6597',
  description: 'Locksmith services across 8 neighborhoods: Bed-Stuy, Crown Heights, Williamsburg, Greenpoint, Bushwick, Prospect Heights, Astoria, Long Island City.',
};

export default function LocationsPage() {
  return (
    <>
      <section className="bg-gradient-to-r from-trust-blue to-blue-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Service Locations</h1>
          <p className="text-xl text-blue-100 mb-6">Serving Bed-Stuy and 8 neighborhoods within a 5-mile radius. 20-minute response.</p>
          <a href="tel:(718)568-6597" className="inline-block bg-action-orange text-white font-bold px-8 py-4 rounded-lg text-lg hover:bg-orange-600 transition-colors">
            Call (718) 568-6597
          </a>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {locations.map((location) => (
              <Link
                key={location.id}
                href={`/locations/${location.slug}`}
                className="group block bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-200"
              >
                <div className="text-3xl mb-3">📍</div>
                <h2 className="text-xl font-bold mb-2 text-gray-900 group-hover:text-trust-blue">{location.name}</h2>
                <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">{location.description}</p>
                <span className="mt-4 inline-block text-trust-blue font-semibold text-sm group-hover:underline">View Services →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
