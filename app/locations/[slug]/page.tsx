import { locations, services, testimonials } from '@/lib/content';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  return locations.map((l) => ({ slug: l.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const location = locations.find((l) => l.slug === slug);
  if (!location) return {};
  return {
    title: `Locksmith ${location.name} | Car & Home Locksmith | (718) 568-6597`,
    description: location.description,
  };
}

export default async function LocationPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const location = locations.find((l) => l.slug === slug);
  if (!location) notFound();

  const localReview = testimonials.find((t) => t.location.toLowerCase().includes(location.name.toLowerCase().split(' ')[0]));

  return (
    <>
      <section className="bg-gradient-to-r from-trust-blue to-blue-900 text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-blue-300 mb-2 text-sm font-semibold uppercase tracking-wide">📍 Service Area</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{location.name} Locksmith</h1>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl">{location.description}</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="tel:(718)568-6597" className="inline-block bg-action-orange text-white font-bold px-8 py-4 rounded-lg text-lg hover:bg-orange-600 transition-colors text-center">
              Call (718) 568-6597
            </a>
            <Link href="/quote" className="inline-block bg-white text-trust-blue font-bold px-8 py-4 rounded-lg text-lg hover:bg-blue-50 transition-colors text-center">
              Get Free Quote
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-10">
              {/* About */}
              <div>
                <h2 className="text-2xl font-bold mb-4">Your Local {location.name} Locksmith</h2>
                <p className="text-gray-700 leading-relaxed text-lg">{location.description}</p>
                <p className="text-gray-700 leading-relaxed mt-4">
                  We handle all types of locksmith emergencies in {location.name}. Car lockouts, residential lockouts, lock repairs, key replacements, and 24-hour emergency service — whatever you need, we're here.
                </p>
              </div>

              {/* Services */}
              <div>
                <h2 className="text-2xl font-bold mb-6">Services Available in {location.name}</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {services.map((s) => (
                    <Link key={s.id} href={`/services/${s.slug}`} className="flex items-center gap-3 p-4 border border-gray-200 rounded-lg hover:border-trust-blue hover:bg-blue-50 transition-colors">
                      <span className="text-2xl">{s.icon}</span>
                      <span className="font-semibold text-gray-800">{s.name}</span>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Service areas */}
              <div>
                <h2 className="text-2xl font-bold mb-4">Streets We Cover in {location.name}</h2>
                <ul className="grid grid-cols-2 gap-2">
                  {location.serviceAreas.map((area) => (
                    <li key={area} className="flex items-center gap-2 text-gray-700">
                      <span className="text-safety-green">✓</span> {area}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Review */}
              {localReview && (
                <div>
                  <h2 className="text-2xl font-bold mb-4">What {location.name} Customers Say</h2>
                  <div className="bg-gray-50 rounded-lg p-5 border border-gray-200">
                    <div className="flex gap-1 mb-2">{Array.from({ length: localReview.rating }).map((_, i) => <span key={i} className="text-yellow-400">★</span>)}</div>
                    <p className="text-gray-700 italic mb-2">"{localReview.content}"</p>
                    <p className="font-semibold text-sm text-gray-800">— {localReview.author}, {localReview.location}</p>
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div>
              <div className="sticky top-24 space-y-6">
                <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                  <h3 className="text-xl font-bold mb-4">Get Help in {location.name}</h3>
                  <a href="tel:(718)568-6597" className="block w-full text-center bg-action-orange text-white font-bold px-6 py-3 rounded-lg text-lg hover:bg-orange-600 transition-colors mb-3">
                    📞 Call (718) 568-6597
                  </a>
                  <Link href="/quote" className="block w-full text-center border-2 border-trust-blue text-trust-blue font-bold px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors">
                    Get Free Quote
                  </Link>
                  <ul className="mt-6 space-y-2 text-sm text-gray-700">
                    <li>✓ 20-minute response</li>
                    <li>✓ Available 24/7</li>
                    <li>✓ Licensed &amp; insured</li>
                    <li>✓ No hidden fees</li>
                  </ul>
                </div>

                <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
                  <h3 className="text-lg font-bold mb-4">Other Neighborhoods</h3>
                  <ul className="space-y-2">
                    {locations.filter((l) => l.slug !== location.slug).slice(0, 5).map((l) => (
                      <li key={l.id}>
                        <Link href={`/locations/${l.slug}`} className="text-trust-blue hover:underline text-sm font-medium">
                          📍 {l.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
