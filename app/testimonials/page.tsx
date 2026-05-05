import { testimonials } from '@/lib/content';
import Link from 'next/link';

export const metadata = {
  title: 'Customer Testimonials | 4.9 Stars | Bed-Stuy Locksmith',
  description: 'Customer reviews and testimonials for Bed-Stuy Locksmith. 4.9-star rating from 273 verified customers across Brooklyn and Queens.',
};

export default function TestimonialsPage() {
  return (
    <>
      <section className="bg-gradient-to-r from-trust-blue to-blue-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Customer Testimonials</h1>
          <div className="flex items-center justify-center gap-2 text-2xl font-bold">
            <span className="text-yellow-400">★★★★★</span>
            <span>4.9 — 273 Reviews</span>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div key={t.id} className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                <div className="flex gap-1 mb-3">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <span key={i} className="text-yellow-400 text-xl">★</span>
                  ))}
                </div>
                <p className="text-gray-700 leading-relaxed italic mb-4">"{t.content}"</p>
                <div className="border-t border-gray-100 pt-4">
                  <p className="font-bold text-gray-900">{t.author}</p>
                  <p className="text-sm text-gray-500">{t.location} · {t.date.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <div className="bg-safety-green/10 border border-safety-green/30 rounded-2xl p-8 max-w-lg mx-auto">
              <p className="text-5xl font-bold text-safety-green">4.9 ★</p>
              <p className="text-gray-700 mt-2">Average from 273 verified customer reviews</p>
              <p className="text-sm text-gray-500 mt-1">89.8% five-star ratings</p>
            </div>

            <div className="mt-8">
              <a href="tel:(718)568-6597" className="inline-block bg-action-orange text-white font-bold px-8 py-4 rounded-lg text-xl hover:bg-orange-600 transition-colors">
                Join Our Happy Customers — Call (718) 568-6597
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
