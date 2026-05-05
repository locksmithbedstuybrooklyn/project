import Link from 'next/link';
import Button from '@/components/common/Button';
import Card from '@/components/common/Card';
import QuoteForm from '@/components/forms/QuoteForm';
import { services, testimonials, locations, faqs } from '@/lib/content';
import { Phone, CheckCircle } from 'lucide-react';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-trust-blue to-blue-900 text-white py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Emergency Locksmith Service
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100">
            Available 24/7 • Fast Response • Fair Pricing
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a href="tel:(718)568-6597">
              <Button variant="primary" size="large" className="bg-action-orange hover:bg-orange-600">
                <Phone className="inline mr-2" size={20} />
                Call Now (718) 568-6597
              </Button>
            </a>
            <Link href="/quote">
              <Button variant="secondary" size="large">
                Get Free Quote
              </Button>
            </Link>
          </div>

          <div className="flex flex-col sm:flex-row gap-8 justify-center text-sm">
            <div className="flex items-center gap-2">
              <CheckCircle size={20} />
              <span>Licensed &amp; Insured</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle size={20} />
              <span>Fair Pricing</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle size={20} />
              <span>20-Minute Response</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.slice(0, 3).map((service) => (
              <Card key={service.id} hover className="text-center">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold mb-2">{service.name}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <Link href={`/services/${service.slug}`} className="text-trust-blue font-semibold hover:underline">
                  Learn More &rarr;
                </Link>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      {/* Contact Section */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Need a Locksmith Now?</h2>
              <p className="text-lg text-gray-600 mb-8">
                Fill out the form to get a free quote, or call us directly for immediate emergency service.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-4 text-lg">
                  <div className="bg-blue-100 p-3 rounded-full text-trust-blue">
                    <Phone size={24} />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Call Us 24/7</p>
                    <a href="tel:(718)568-6597" className="text-trust-blue font-bold">(718) 568-6597</a>
                  </div>
                </div>
              </div>
            </div>
            <Card>
              <h3 className="text-2xl font-bold mb-6">Request a Quote</h3>
              <QuoteForm />
            </Card>
          </div>
        </div>
      </section>
    </>
  );
}
