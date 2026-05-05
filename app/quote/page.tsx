import QuoteForm from '@/components/forms/QuoteForm';
import { services } from '@/lib/content';

export const metadata = {
  title: 'Free Locksmith Quote | Instant Estimate | Bed-Stuy (718) 568-6597',
  description: 'Get a free locksmith quote in Bed-Stuy. Transparent pricing, no hidden fees. Car lockout, key replacement, lock repair. Call (718) 568-6597 or fill out the form.',
};

export default function QuotePage() {
  return (
    <>
      <section className="bg-gradient-to-r from-trust-blue to-blue-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Get a Free Quote</h1>
          <p className="text-xl text-blue-100">Transparent pricing. No hidden fees. No emergency surcharges.</p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold mb-6">Request Your Free Quote</h2>
              <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm">
                <QuoteForm />
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-action-orange/10 border border-action-orange/30 rounded-xl p-6">
                <h3 className="text-lg font-bold mb-2">Need Help Right Now?</h3>
                <p className="text-sm text-gray-700 mb-4">For immediate emergencies, call us directly — we're available 24/7.</p>
                <a href="tel:(718)568-6597" className="block w-full text-center bg-action-orange text-white font-bold px-6 py-3 rounded-lg hover:bg-orange-600 transition-colors">
                  📞 Call (718) 568-6597
                </a>
              </div>

              <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                <h3 className="text-lg font-bold mb-4">Why Our Pricing is Fair</h3>
                <ul className="space-y-3 text-sm text-gray-700">
                  {['No hidden fees', 'No emergency surcharges', 'No after-hours markup', 'Free estimates always', 'Payment due on completion'].map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <span className="text-safety-green font-bold">✓</span> {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
                <h3 className="text-lg font-bold mb-4">Services We Quote</h3>
                <ul className="space-y-2">
                  {services.map((s) => (
                    <li key={s.id} className="text-sm text-gray-700 flex items-center gap-2">
                      <span>{s.icon}</span> {s.name}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
