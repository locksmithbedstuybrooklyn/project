import Link from 'next/link';
import { Phone, Clock, Shield, CheckCircle, ArrowRight, MapPin } from 'lucide-react';
import Button from '@/components/common/Button';
import Card from '@/components/common/Card';
import QuoteForm from '@/components/forms/QuoteForm';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Locksmith Greenpoint | Car Unlock, Lock Repair, Emergency',
  description: 'Locksmith service in Greenpoint, Brooklyn. Car unlock, lock repair, lock installation. 20-minute response. Call (718) 568-6597.',
};

export default function GreenpointLocationPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="bg-gradient-to-br from-trust-blue via-blue-900 to-blue-950 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-blue-500/20 backdrop-blur-sm px-4 py-2 rounded-full text-blue-300 text-sm font-bold mb-6 border border-blue-400/30">
            <MapPin size={16} />
            <span>Serving Greenpoint 24/7</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
            Locksmith Greenpoint <br />
            <span className="text-action-orange text-3xl md:text-5xl">Brooklyn, NY</span>
          </h1>
          <p className="text-xl text-blue-100 mb-10 leading-relaxed max-w-3xl mx-auto">
            Fast, professional locksmith service for Greenpoint artists, families, and businesses. Expert local care.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:(718)568-6597">
              <Button size="large" className="bg-action-orange hover:bg-orange-600 px-8 py-4 text-lg font-bold">
                <Phone className="mr-2" size={20} />
                Call (718) 568-6597
              </Button>
            </a>
            <Link href="/quote">
              <Button variant="secondary" size="large" className="bg-white/10 hover:bg-white/20 text-white border-white/30 px-8 py-4 text-lg">
                Get Free Quote
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-20">
            <div className="space-y-8 text-lg text-gray-700 leading-relaxed">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Greenpoint Locksmith</h2>
              <p>
                Greenpoint residents know they can count on us for fast, professional locksmith service. We respond to emergencies quickly. We charge fair prices. We do quality work. We're available 24/7. Whether you're locked out of your car on Franklin Street or need lock repair on McGraw Avenue, we're here to help.
              </p>
              <p>
                Greenpoint is home to artists, families, and young professionals. We serve this diverse community with professional locksmith service. We handle car lockouts, residential lockouts, lock repairs, lock replacements, and lock installations. We work on all types of doors and locks.
              </p>
              <p>
                Call (718) 568-6597 for <strong>locksmith service in Greenpoint</strong>. We'll respond quickly. We'll solve your problem. We'll charge a fair price. We're your trusted Greenpoint locksmith.
              </p>
            </div>
            
            <div className="bg-gray-50 p-8 md:p-12 rounded-3xl border border-gray-100 shadow-sm">
              <h3 className="text-2xl font-bold mb-8 text-gray-900">Greenpoint Service Areas</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  'Franklin Street', 'McGraw Avenue', 'Greenpoint Avenue', 
                  'Noble Street', 'Calyer Street', 'Huron Street', 
                  'Newtown Creek'
                ].map((area, i) => (
                  <div key={i} className="flex items-center gap-3 bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
                    <CheckCircle className="text-safety-green flex-shrink-0" size={18} />
                    <span className="text-gray-700 font-medium">{area}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-trust-blue text-white p-12 rounded-3xl mb-20">
             <h2 className="text-3xl font-bold mb-8 text-center">Available Services in Greenpoint</h2>
             <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                {[
                  'Car Lockout', 'Residential Lockout', 'Lock Replacement', 
                  'Lock Repair', 'Lock Installation', 'Key Replacement'
                ].map((service, i) => (
                  <Card key={i} className="bg-white/10 border-white/20 p-6 text-center">
                    <span className="font-bold text-lg text-action-orange">{service}</span>
                  </Card>
                ))}
             </div>
          </div>

          <div className="max-w-4xl mx-auto mb-20 text-center">
             <h2 className="text-3xl font-bold mb-6 text-gray-900 text-center">Local Service Experts</h2>
             <p className="text-xl text-gray-600 mb-12">
               We serve Greenpoint. We respond fast. We're professional. We're available 24/7.
             </p>
             <div className="bg-gray-50 p-8 md:p-12 rounded-3xl border border-gray-100 shadow-xl text-left">
               <QuoteForm />
             </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-left">
            {[
              { name: 'Bed-Stuy Hub', href: '/locations/bed-stuy' },
              { name: 'Williamsburg', href: '/locations/williamsburg' },
              { name: 'Bushwick', href: '/locations/bushwick' },
              { name: 'Car Lockout', href: '/services/car-lockout' }
            ].map((link) => (
              <Link key={link.name} href={link.href}>
                <Card hover className="p-8 border-gray-100 h-full flex flex-col justify-center">
                  <h3 className="font-bold text-trust-blue mb-4 text-sm">{link.name}</h3>
                  <div className="flex justify-between items-center text-trust-blue">
                    <ArrowRight size={20} />
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
