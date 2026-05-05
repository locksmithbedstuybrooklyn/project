import { services, testimonials, faqs } from '@/lib/content';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import QuoteForm from '@/components/forms/QuoteForm';

export async function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const service = services.find((s) => s.slug === params.slug);
  if (!service) return {};
  return {
    title: `${service.name} Bed-Stuy | Emergency Service | (718) 568-6597`,
    description: service.description,
  };
}

export default function ServicePage({ params }: { params: { slug: string } }) {
  const service = services.find((s) => s.slug === params.slug);
  if (!service) notFound();

  const related = services.filter((s) => s.slug !== service.slug).slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-r from-trust-blue to-blue-900 text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-5xl mb-4">{service.icon}</div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{service.name}</h1>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl">{service.description}</p>
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

      {/* Trust bar */}
      <div className="bg-safety-green text-white py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap gap-6 justify-center text-sm font-semibold">
          <span>✓ Licensed &amp; Insured</span>
          <span>✓ 20-Minute Response</span>
          <span>✓ Non-Destructive Techniques</span>
          <span>✓ Fair Pricing — No Hidden Fees</span>
          <span>✓ Available 24/7</span>
        </div>
      </div>

      {/* Main content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Content */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="text-2xl font-bold mb-4">About This Service</h2>
                <p className="text-gray-700 leading-relaxed text-lg">{service.description}</p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">Our Process</h2>
                <ol className="space-y-3">
                  {['Call (718) 568-6597 with your location and situation.', 'We dispatch the nearest technician immediately.', 'Technician arrives — typically within 20 minutes.', 'We assess and resolve your issue professionally.', 'You pay a fair price and receive a receipt.'].map((step, i) => (
                    <li key={i} className="flex gap-3">
                      <span className="flex-shrink-0 w-7 h-7 rounded-full bg-trust-blue text-white flex items-center justify-center text-sm font-bold">{i + 1}</span>
                      <span className="text-gray-700">{step}</span>
                    </li>
                  ))}
                </ol>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">Why Choose Bed-Stuy Locksmith</h2>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {['Fast 20-minute response', 'Licensed & insured', 'Non-destructive techniques', 'Fair, transparent pricing', 'All vehicle & lock types', 'Available 24/7'].map((point) => (
                    <li key={point} className="flex items-center gap-2 text-gray-700">
                      <span className="text-safety-green font-bold">✓</span> {point}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Reviews */}
              <div>
                <h2 className="text-2xl font-bold mb-6">What Customers Say</h2>
                <div className="space-y-4">
                  {testimonials.slice(0, 2).map((t) => (
                    <div key={t.id} className="bg-gray-50 rounded-lg p-5 border border-gray-200">
                      <div className="flex gap-1 mb-2">{Array.from({ length: t.rating }).map((_, i) => <span key={i} className="text-yellow-400">★</span>)}</div>
                      <p className="text-gray-700 italic mb-2">"{t.content}"</p>
                      <p className="font-semibold text-sm text-gray-800">— {t.author}, {t.location}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* FAQs */}
              <div>
                <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
                <div className="space-y-4">
                  {faqs.slice(0, 4).map((faq, i) => (
                    <div key={i} className="border border-gray-200 rounded-lg p-5">
                      <h3 className="font-bold text-gray-900 mb-2">{faq.question}</h3>
                      <p className="text-gray-700 text-sm">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                  <h3 className="text-xl font-bold mb-4">Get Help Now</h3>
                  <a href="tel:(718)568-6597" className="block w-full text-center bg-action-orange text-white font-bold px-6 py-3 rounded-lg text-lg hover:bg-orange-600 transition-colors mb-3">
                    📞 Call (718) 568-6597
                  </a>
                  <Link href="/quote" className="block w-full text-center border-2 border-trust-blue text-trust-blue font-bold px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors">
                    Get Free Quote
                  </Link>
                  <ul className="mt-6 space-y-2 text-sm text-gray-700">
                    <li>✓ Available 24/7</li>
                    <li>✓ 20-minute response</li>
                    <li>✓ Licensed &amp; insured</li>
                    <li>✓ Fair pricing</li>
                  </ul>
                </div>

                <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
                  <h3 className="text-lg font-bold mb-4">Related Services</h3>
                  <ul className="space-y-2">
                    {related.map((s) => (
                      <li key={s.id}>
                        <Link href={`/services/${s.slug}`} className="text-trust-blue hover:underline text-sm font-medium">
                          {s.icon} {s.name}
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

      {/* Quote CTA */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-8">Request a Free Quote</h2>
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
            <QuoteForm />
          </div>
        </div>
      </section>
    </>
  );
}
