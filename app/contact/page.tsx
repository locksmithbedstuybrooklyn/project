import QuoteForm from '@/components/forms/QuoteForm';

export const metadata = {
  title: 'Contact Bed-Stuy Locksmith | Call (718) 568-6597 | 24/7',
  description: 'Contact Bed-Stuy Locksmith. Call (718) 568-6597 for 24/7 emergency locksmith service. Available day and night across Bed-Stuy and Brooklyn.',
};

export default function ContactPage() {
  return (
    <>
      <section className="bg-gradient-to-r from-trust-blue to-blue-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl text-blue-100">We're available 24/7. Call now for immediate emergency service.</p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
                <div className="space-y-5">
                  <a href="tel:(718)568-6597" className="flex items-center gap-4 p-5 bg-action-orange/10 border border-action-orange/30 rounded-xl hover:bg-action-orange/20 transition-colors group">
                    <span className="text-3xl">📞</span>
                    <div>
                      <p className="font-bold text-gray-900 group-hover:text-action-orange transition-colors text-xl">(718) 568-6597</p>
                      <p className="text-sm text-gray-600">Call now — available 24/7</p>
                    </div>
                  </a>
                  <a href="mailto:info@locksmithbedstuy.com" className="flex items-center gap-4 p-5 bg-gray-50 border border-gray-200 rounded-xl hover:bg-gray-100 transition-colors">
                    <span className="text-3xl">✉️</span>
                    <div>
                      <p className="font-bold text-gray-900">info@locksmithbedstuy.com</p>
                      <p className="text-sm text-gray-600">Email — we respond within hours</p>
                    </div>
                  </a>
                  <div className="flex items-center gap-4 p-5 bg-gray-50 border border-gray-200 rounded-xl">
                    <span className="text-3xl">📍</span>
                    <div>
                      <p className="font-bold text-gray-900">Service Area</p>
                      <p className="text-sm text-gray-600">Bed-Stuy + 5-mile radius across Brooklyn &amp; Queens</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">Business Hours</h2>
                <div className="bg-safety-green/10 border border-safety-green/30 rounded-xl p-5">
                  <p className="text-2xl font-bold text-safety-green">Open 24 Hours</p>
                  <p className="text-gray-700 mt-1">7 days a week — including holidays</p>
                  <p className="text-gray-600 text-sm mt-2">20-minute average response time</p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">Service Areas</h2>
                <div className="grid grid-cols-2 gap-2">
                  {['Bed-Stuyvesant', 'Crown Heights', 'Prospect Heights', 'Williamsburg', 'Greenpoint', 'Bushwick', 'Astoria', 'Long Island City'].map((area) => (
                    <span key={area} className="text-sm text-gray-700 flex items-center gap-2">
                      <span className="text-trust-blue">📍</span> {area}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Quote form */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Request a Free Quote</h2>
              <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm">
                <QuoteForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
