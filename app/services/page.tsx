import Link from 'next/link';
import { services } from '@/lib/content';

export const metadata = {
  title: 'Locksmith Services Bed-Stuy | Car, Home & Lock Services | 24/7',
  description: 'All locksmith services in Bed-Stuy: car lockout, key replacement, ignition repair, residential lockout, lock replacement, repair & installation. Call (718) 568-6597.',
};

export default function ServicesPage() {
  return (
    <>
      <section className="bg-gradient-to-r from-trust-blue to-blue-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Locksmith Services</h1>
          <p className="text-xl text-blue-100 mb-6">Complete locksmith solutions — car, home, and commercial. Available 24/7.</p>
          <a href="tel:(718)568-6597" className="inline-block bg-action-orange text-white font-bold px-8 py-4 rounded-lg text-lg hover:bg-orange-600 transition-colors">
            Call (718) 568-6597
          </a>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <Link key={service.id} href={`/services/${service.slug}`} className="group block bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-200">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h2 className="text-xl font-bold mb-2 text-gray-900 group-hover:text-trust-blue">{service.name}</h2>
                <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
                <span className="mt-4 inline-block text-trust-blue font-semibold text-sm group-hover:underline">Learn More →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-trust-blue text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Need help right now?</h2>
          <a href="tel:(718)568-6597" className="inline-block bg-action-orange text-white font-bold px-8 py-4 rounded-lg text-lg hover:bg-orange-600 transition-colors">
            Call (718) 568-6597 — Available 24/7
          </a>
        </div>
      </section>
    </>
  );
}
