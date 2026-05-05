import { testimonials } from '@/lib/content';
import QuoteForm from '@/components/forms/QuoteForm';

export const metadata = {
  title: 'About Bed-Stuy Locksmith | 15+ Years Serving Brooklyn | (718) 568-6597',
  description: 'About Bed-Stuy Locksmith. Serving Bed-Stuyvesant since 2010. Licensed, insured, 24/7 emergency service. Your trusted neighborhood locksmith.',
};

export default function AboutPage() {
  return (
    <>
      <section className="bg-gradient-to-r from-trust-blue to-blue-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Bed-Stuy Locksmith</h1>
          <p className="text-xl text-blue-100 max-w-2xl">Your trusted neighborhood locksmith since 2010. Licensed, insured, and committed to Bed-Stuyvesant.</p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold mb-4">Who We Are</h2>
                <p className="text-gray-700 leading-relaxed text-lg">
                  Bed-Stuy Locksmith is a hyper-local emergency locksmith service rooted in Bed-Stuyvesant, Brooklyn. We've served this neighborhood since 2010 — not as a faceless corporation, but as your neighbors who genuinely care about the community.
                </p>
                <p className="text-gray-700 leading-relaxed text-lg mt-4">
                  We know the streets, the brownstones, the parking challenges of Bed-Stuy. When you call us, you get a real person who will dispatch a real technician within minutes. No call centers. No runaround. Just fast, professional locksmith service.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6">
                {[
                  { stat: '15+', label: 'Years of Experience' },
                  { stat: '4.9★', label: '273 Customer Reviews' },
                  { stat: '20 min', label: 'Average Response Time' },
                  { stat: '24/7', label: 'Always Available' },
                ].map((item) => (
                  <div key={item.label} className="bg-blue-50 rounded-xl p-5 text-center">
                    <div className="text-3xl font-bold text-trust-blue">{item.stat}</div>
                    <div className="text-sm text-gray-600 mt-1">{item.label}</div>
                  </div>
                ))}
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">Our Commitment</h2>
                <ul className="space-y-3">
                  {[
                    'Licensed & fully insured in New York State',
                    'Non-destructive techniques — we never damage your property',
                    'Transparent pricing with no hidden fees or emergency surcharges',
                    '24/7 availability including nights, weekends, and holidays',
                    '20-minute average response time across our service area',
                    'Professional, courteous technicians who respect your home',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-gray-700">
                      <span className="text-safety-green font-bold mt-0.5">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">Services We Offer</h2>
                <div className="grid grid-cols-2 gap-2">
                  {['Car Lockout', 'Car Key Replacement', 'Ignition Repair', 'Residential Lockout', 'Lock Replacement', 'Lock Repair', 'Lock Installation', '24-Hour Emergency'].map((s) => (
                    <span key={s} className="text-sm text-gray-700 flex items-center gap-2">
                      <span className="text-trust-blue">→</span> {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Testimonials sidebar */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold">What Our Customers Say</h2>
              {testimonials.slice(0, 4).map((t) => (
                <div key={t.id} className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
                  <div className="flex gap-1 mb-2">{Array.from({ length: t.rating }).map((_, i) => <span key={i} className="text-yellow-400">★</span>)}</div>
                  <p className="text-gray-700 italic mb-3 text-sm">"{t.content}"</p>
                  <p className="font-semibold text-sm text-gray-800">— {t.author}, {t.location}</p>
                </div>
              ))}

              <div className="bg-trust-blue text-white rounded-xl p-6 text-center">
                <p className="text-3xl font-bold">4.9 ⭐</p>
                <p className="text-blue-200 mt-1">273 verified customer reviews</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Work With Us?</h2>
          <p className="text-gray-600 mb-8">Call us anytime or fill out the form for a free quote. We respond fast.</p>
          <a href="tel:(718)568-6597" className="inline-block bg-action-orange text-white font-bold px-8 py-4 rounded-lg text-xl hover:bg-orange-600 transition-colors">
            Call (718) 568-6597
          </a>
        </div>
      </section>
    </>
  );
}
