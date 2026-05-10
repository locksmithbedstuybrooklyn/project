import QuoteForm from '@/components/forms/QuoteForm';
import { Phone, Mail, MapPin, Clock, Shield, CheckCircle, ArrowRight } from 'lucide-react';
import Button from '@/components/common/Button';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Contact Bed-Stuy Locksmith | Call (718) 568-6597 | 24/7',
  description: 'Contact us: (718) 568-6597. Available 24/7 for emergencies. Email, phone, or visit us. Fast response guaranteed.',
  alternates: { canonical: 'https://www.locksmithbedstuy.com/contact' },
};

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Massive Hero */}
      <section className="bg-gray-900 text-white py-32 border-b border-white/10 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-6xl md:text-8xl font-black mb-8 tracking-tighter uppercase italic leading-none">
            Contact <span className="text-action-orange">Us</span>
          </h1>
          <p className="text-2xl md:text-3xl text-blue-100 mb-10 max-w-3xl mx-auto font-medium italic">
            Available 24/7 for emergency service. Call now for immediate help.
          </p>
        </div>
      </section>

      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
            <div className="space-y-16">
              <div>
                <h2 className="text-4xl md:text-6xl font-black text-gray-900 mb-8 uppercase tracking-tighter italic">Get In Touch</h2>
                <p className="text-xl text-gray-600 leading-relaxed mb-12 italic font-medium">
                  We respond to calls, texts, and emails. For emergencies, calling is fastest. We'll dispatch a technician immediately.
                </p>
                <div className="space-y-6">
                  <a href="tel:(718)568-6597" className="flex items-center gap-8 p-8 bg-gray-50 border border-gray-100 rounded-[2rem] group hover:border-trust-blue hover:bg-blue-50 transition-all">
                    <div className="bg-action-orange text-white p-6 rounded-2xl group-hover:scale-110 transition-transform shadow-xl">
                      <Phone size={32} />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 font-black uppercase tracking-[0.2em] italic mb-1">Emergency Phone</p>
                      <p className="text-3xl font-black text-gray-900 uppercase italic tracking-tight">(718) 568-6597</p>
                    </div>
                  </a>
                  
                  <a href="mailto:info@locksmithbedstuy.com" className="flex items-center gap-8 p-8 bg-gray-50 border border-gray-100 rounded-[2rem] group hover:border-trust-blue hover:bg-blue-50 transition-all">
                    <div className="bg-gray-900 text-white p-6 rounded-2xl group-hover:scale-110 transition-transform">
                      <Mail size={32} />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 font-black uppercase tracking-[0.2em] italic mb-1">Email Support</p>
                      <p className="text-xl font-bold text-gray-900">info@locksmithbedstuy.com</p>
                    </div>
                  </a>
                  
                  <div className="flex items-center gap-8 p-8 bg-gray-50 border border-gray-100 rounded-[2rem]">
                    <div className="bg-gray-900 text-white p-6 rounded-2xl">
                      <MapPin size={32} />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 font-black uppercase tracking-[0.2em] italic mb-1">Service Area</p>
                      <p className="text-xl font-bold text-gray-900">Bed-Stuy and 5-mile radius</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="bg-gray-900 text-white p-10 rounded-[2.5rem] relative overflow-hidden">
                  <div className="absolute -bottom-8 -right-8 opacity-10">
                    <Clock size={150} />
                  </div>
                  <Clock className="text-action-orange mb-6" size={40} />
                  <h3 className="text-2xl font-black mb-3 uppercase italic tracking-tight">Available 24/7</h3>
                  <p className="text-gray-400 font-medium italic">Nights, weekends, and holidays.</p>
                </div>
                <div className="bg-gray-900 text-white p-10 rounded-[2.5rem] relative overflow-hidden">
                  <div className="absolute -bottom-8 -right-8 opacity-10">
                    <Shield size={150} />
                  </div>
                  <Shield className="text-safety-green mb-6" size={40} />
                  <h3 className="text-2xl font-black mb-3 uppercase italic tracking-tight">20-Min Arrival</h3>
                  <p className="text-gray-400 font-medium italic">Fast response across our area.</p>
                </div>
              </div>

              <div>
                <h3 className="text-3xl font-black text-gray-900 mb-8 uppercase tracking-tighter italic">Why Call Us</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {[
                    'Fast response guaranteed',
                    'Professional licensed service',
                    'Transparent honest pricing',
                    'Licensed and insured',
                    'Serving Bed-Stuy since 2010',
                    'Non-destructive techniques'
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-4 text-gray-700 font-bold italic">
                      <CheckCircle className="text-safety-green flex-shrink-0" size={24} />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="sticky top-32 bg-white p-10 md:p-14 rounded-[3rem] border border-gray-100 shadow-2xl">
                <h2 className="text-4xl font-black text-gray-900 mb-10 uppercase italic tracking-tighter">Request a Quote</h2>
                <QuoteForm />
                <div className="mt-10 pt-10 border-t border-gray-100">
                   <div className="flex items-center justify-center gap-3 text-gray-500 text-sm font-bold uppercase tracking-widest italic">
                     <Shield size={18} className="text-safety-green" />
                     Data is 100% Secure
                   </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 bg-gray-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white rounded-[3rem] p-12 shadow-sm border border-gray-200 inline-block max-w-2xl w-full">
             <div className="flex flex-col sm:flex-row gap-10 items-center text-left">
                <div className="w-32 h-32 flex-shrink-0 bg-gray-900 rounded-3xl flex items-center justify-center text-white">
                  <MapPin size={56} />
                </div>
                <div>
                  <h3 className="text-3xl font-black mb-4 uppercase italic tracking-tighter text-gray-900">Service Area Coverage</h3>
                  <p className="text-gray-500 font-medium mb-6 italic leading-relaxed">We are a mobile locksmith service based in Bed-Stuyvesant, Brooklyn, serving all neighborhoods within a 5-mile radius.</p>
                  <Link href="/locations" className="text-action-orange font-black flex items-center gap-2 hover:gap-4 uppercase tracking-widest text-sm transition-all italic">
                    View coverage map <ArrowRight size={18} />
                  </Link>
                </div>
             </div>
          </div>
        </div>
      </section>
    </div>
  );
}

