import QuoteForm from '@/components/forms/QuoteForm';
import { Phone, Mail, MapPin, Clock, Shield, CheckCircle, ArrowRight } from 'lucide-react';
import Button from '@/components/common/Button';
import Card from '@/components/common/Card';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Bed-Stuy Locksmith | Call (718) 568-6597 | 24/7',
  description: 'Contact us: (718) 568-6597. Available 24/7 for emergencies. Email, phone, or visit us. Fast response guaranteed.',
};

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="bg-gradient-to-br from-trust-blue via-blue-900 to-blue-950 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight">Contact Us</h1>
          <p className="text-xl md:text-2xl text-blue-100 mb-10 max-w-3xl mx-auto">
            Available 24/7 for emergency service. Call now for immediate help.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="space-y-12">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-8">Get in Touch</h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  Call us anytime, 24/7: <strong>(718) 568-6597</strong>. We respond to calls, texts, and emails. For emergencies, calling is fastest. We'll dispatch a technician to your location immediately.
                </p>
                <div className="space-y-6">
                  <a href="tel:(718)568-6597" className="flex items-center gap-6 p-6 bg-blue-50 border border-blue-100 rounded-2xl group transition-all hover:shadow-md">
                    <div className="bg-trust-blue text-white p-4 rounded-xl group-hover:bg-blue-800 transition-colors">
                      <Phone size={28} />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 font-semibold uppercase tracking-wider">Emergency Phone</p>
                      <p className="text-2xl font-bold text-gray-900">(718) 568-6597</p>
                    </div>
                  </a>
                  <a href="mailto:info@locksmithbedstuy.com" className="flex items-center gap-6 p-6 bg-gray-50 border border-gray-100 rounded-2xl group transition-all hover:shadow-md">
                    <div className="bg-gray-200 text-gray-600 p-4 rounded-xl group-hover:bg-gray-300 transition-colors">
                      <Mail size={28} />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 font-semibold uppercase tracking-wider">Email Support</p>
                      <p className="text-xl font-bold text-gray-900">info@locksmithbedstuy.com</p>
                    </div>
                  </a>
                  <div className="flex items-center gap-6 p-6 bg-gray-50 border border-gray-100 rounded-2xl">
                    <div className="bg-gray-200 text-gray-600 p-4 rounded-xl">
                      <MapPin size={28} />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 font-semibold uppercase tracking-wider">Service Area</p>
                      <p className="text-xl font-bold text-gray-900">Bed-Stuy and 5-mile radius</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <Card className="p-8 border-gray-100 bg-gray-50">
                  <Clock className="text-action-orange mb-4" size={32} />
                  <h3 className="text-xl font-bold mb-2">Available 24/7</h3>
                  <p className="text-gray-600 text-sm">Including nights, weekends, and all major holidays.</p>
                </Card>
                <Card className="p-8 border-gray-100 bg-gray-50">
                  <Shield className="text-safety-green mb-4" size={32} />
                  <h3 className="text-xl font-bold mb-2">20-Min Arrival</h3>
                  <p className="text-gray-600 text-sm">Average response time across our entire service area.</p>
                </Card>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center lg:text-left">Why Call Us</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    'Fast response guaranteed',
                    'Professional licensed service',
                    'Transparent honest pricing',
                    'Licensed and insured',
                    'Serving Bed-Stuy since 2010',
                    'Non-destructive techniques'
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3 text-gray-700 font-medium">
                      <CheckCircle className="text-safety-green flex-shrink-0" size={18} />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="sticky top-24 bg-white p-8 md:p-12 rounded-3xl border border-gray-100 shadow-2xl">
                <h2 className="text-3xl font-bold text-gray-900 mb-8">Request a Quote</h2>
                <QuoteForm />
                <div className="mt-8 pt-8 border-t border-gray-100">
                   <div className="flex items-center justify-center gap-2 text-gray-500 text-sm font-semibold italic">
                     <Shield size={16} />
                     Your information is safe and secure.
                   </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-12">Visit Us</h2>
          <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-200 inline-block text-left max-w-xl">
             <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="aspect-square w-32 bg-trust-blue rounded-2xl flex items-center justify-center text-white">
                  <MapPin size={48} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">Service Area Coverage</h3>
                  <p className="text-gray-600 mb-4">We are a mobile locksmith service based in Bed-Stuyvesant, Brooklyn, serving all neighborhoods within a 5-mile radius.</p>
                  <Link href="/locations" className="text-trust-blue font-bold flex items-center gap-2 hover:gap-3 transition-all">
                    View full coverage map <ArrowRight size={18} />
                  </Link>
                </div>
             </div>
          </div>
        </div>
      </section>
    </div>
  );
}

