import { faqs } from '@/lib/content';

export const metadata = {
  title: 'FAQ | Bed-Stuy Locksmith Frequently Asked Questions | (718) 568-6597',
  description: 'Frequently asked questions about Bed-Stuy Locksmith. Response times, pricing, service areas, and what to expect. Call (718) 568-6597.',
};

export default function FAQPage() {
  return (
    <>
      <section className="bg-gradient-to-r from-trust-blue to-blue-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Frequently Asked Questions</h1>
          <p className="text-xl text-blue-100">Everything you need to know about our locksmith services.</p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                <h2 className="text-lg font-bold text-gray-900 mb-3">{faq.question}</h2>
                <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-trust-blue text-white rounded-xl p-8 text-center">
            <h2 className="text-2xl font-bold mb-2">Still have questions?</h2>
            <p className="text-blue-200 mb-6">Call us anytime — we're available 24/7 and happy to help.</p>
            <a href="tel:(718)568-6597" className="inline-block bg-action-orange text-white font-bold px-8 py-4 rounded-lg text-lg hover:bg-orange-600 transition-colors">
              Call (718) 568-6597
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
