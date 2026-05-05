import QuoteForm from '@/components/forms/QuoteForm';
import { services } from '@/lib/content';
import { Shield, Clock, Phone, CheckCircle, FileText, Camera, MapPin } from 'lucide-react';
import Card from '@/components/common/Card';
import Button from '@/components/common/Button';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Free Locksmith Quote | Bed-Stuy | Instant Estimate',
  description: 'Get a free locksmith quote in seconds. Tell us your service, location, and vehicle. Instant estimate, no hidden fees.',
};

export default function QuotePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="bg-gradient-to-br from-trust-blue via-blue-900 to-blue-950 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight">Free Locksmith Quote</h1>
          <p className="text-xl md:text-2xl text-blue-100 mb-10 max-w-3xl mx-auto">
            Transparent pricing. No hidden fees. No surprises.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div className="order-2 lg:order-1">
              <div className="bg-white p-8 md:p-12 rounded-3xl border border-gray-100 shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-bl-full -mr-16 -mt-16"></div>
                <h2 className="text-3xl font-bold text-gray-900 mb-8">Get Your Free Quote</h2>
                <QuoteForm />
                <div className="mt-8 pt-8 border-t border-gray-100 flex items-center justify-center gap-3 text-gray-500 text-sm font-medium">
                  <Shield size={18} className="text-safety-green" />
                  Your request is 100% free and no-obligation.
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2 space-y-12">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-8">How to Get a Quote</h2>
                <div className="space-y-6">
                  {[
                    { step: '1', title: 'Select Your Service', desc: 'Choose from car lockout, key replacement, lock repair, etc.', icon: <FileText /> },
                    { step: '2', title: 'Tell Us Your Location', desc: 'Specify your neighborhood or zip code in Brooklyn or Queens.', icon: <MapPin /> },
                    { step: '3', title: 'Describe the Issue', desc: 'Briefly explain the situation (e.g., keys locked in car, broken lock).', icon: <CheckCircle /> },
                    { step: '4', title: 'Optional: Upload a Photo', desc: 'A photo of the lock or vehicle helps us give a more accurate estimate.', icon: <Camera /> },
                    { step: '5', title: 'Get Instant Estimate', desc: 'We\'ll provide an honest range before we dispatch a technician.', icon: <Clock /> }
                  ].map((item, i) => (
                    <div key={i} className="flex gap-6">
                      <div className="flex-shrink-0 w-12 h-12 bg-blue-50 text-trust-blue rounded-xl flex items-center justify-center font-bold text-xl border border-blue-100">
                        {item.step}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-1">{item.title}</h3>
                        <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Why Get a Quote?</h3>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Know the price before we arrive. No surprises. Transparent pricing. We're honest about costs. If you decide to proceed, we'll confirm the price before starting work.
                </p>
                <div className="space-y-3">
                  {['No hidden service fees', 'No after-hours surcharges', 'Licensed & Insured work'].map((item, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm font-bold text-gray-800">
                      <CheckCircle className="text-safety-green" size={16} />
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-action-orange text-white p-8 rounded-3xl text-center">
                <h3 className="text-2xl font-bold mb-4">In a Rush?</h3>
                <p className="mb-8 opacity-90">For immediate emergencies, calling is always fastest.</p>
                <a href="tel:(718)568-6597" className="inline-block bg-white text-action-orange font-black px-10 py-4 rounded-xl text-2xl hover:bg-orange-50 transition-colors shadow-lg">
                  (718) 568-6597
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

