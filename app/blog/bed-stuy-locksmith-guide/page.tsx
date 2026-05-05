import Link from 'next/link';
import { Phone, Clock, Shield, CheckCircle, ArrowRight, MapPin } from 'lucide-react';
import Button from '@/components/common/Button';
import Card from '@/components/common/Card';
import QuoteForm from '@/components/forms/QuoteForm';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Bed-Stuy Locksmith Guide | Services, Tips, Local Info | Bed-Stuy',
  description: 'Bed-Stuy locksmith guide: services, tips, local information. Your trusted neighborhood locksmith. Call (718) 568-6597.',
};

export default function BedStuyLocksmithGuideBlogPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="bg-gradient-to-br from-trust-blue via-blue-900 to-blue-950 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-blue-500/20 backdrop-blur-sm px-4 py-2 rounded-full text-blue-300 text-sm font-bold mb-6 border border-blue-400/30">
            <MapPin size={16} />
            <span>Local Neighborhood Guide</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
            Bed-Stuy Locksmith <br />
            <span className="text-action-orange text-3xl md:text-5xl">The Essential Guide</span>
          </h1>
          <p className="text-xl text-blue-100 mb-10 leading-relaxed max-w-3xl mx-auto">
            Everything you need to know about locksmith services in Bedford-Stuyvesant, from emergency lockouts to residential upgrades.
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
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Your Bed-Stuy Locksmith</h2>
              <p>
                Bed-Stuyvesant is our home. We've served this neighborhood since 2010. We know the streets, the buildings, the community. We're not a big corporation. We're your neighbors. We care about Bed-Stuy. We respond fast. We charge fair prices. We do quality work.
              </p>
              <p>
                We offer complete locksmith services. Car lockouts. Car key replacement. Ignition repair. Residential lockouts. Lock replacement. Lock repair. Lock installation. 24-hour emergency service. Whatever your locksmith need, we handle it. We're available 24/7, including nights and weekends.
              </p>
              <p>
                Call (718) 568-6597 for <strong>Bed-Stuy locksmith service</strong>. We'll respond quickly. We'll solve your problem. We'll charge a fair price. We're your trusted neighborhood locksmith.
              </p>
            </div>
            
            <div className="bg-gray-50 p-8 md:p-12 rounded-3xl border border-gray-100 shadow-sm">
              <h3 className="text-2xl font-bold mb-8 text-gray-900">Services Available</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  'Car Lockout', 'Car Key Replacement', 'Ignition Repair', 
                  'Residential Lockout', 'Lock Replacement', 'Lock Repair', 
                  'Lock Installation', '24-Hour Emergency'
                ].map((service, i) => (
                  <div key={i} className="flex items-center gap-3 bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
                    <CheckCircle className="text-safety-green flex-shrink-0" size={18} />
                    <span className="text-gray-700 font-medium">{service}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-gray-900 text-white p-12 rounded-3xl mb-20 text-center">
             <h2 className="text-3xl font-bold mb-6">Why Choose Local?</h2>
             <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
               We're here. We know the neighborhood. We respond fast. We charge fair prices. We care about Bed-Stuy.
             </p>
             <a href="tel:(718)568-6597">
               <Button size="large" className="bg-action-orange hover:bg-orange-600 font-bold px-10">
                 Call (718) 568-6597
               </Button>
             </a>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-2xl font-bold mb-8 text-gray-900">Quick Links</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
            {[
              { name: 'Bed-Stuy Location', href: '/locations/bed-stuy' },
              { name: 'Car Lockout Service', href: '/services/car-lockout' },
              { name: 'Residential Lockout', href: '/services/residential-lockout' },
              { name: '24-Hour Locksmith', href: '/services/24-hour-locksmith' },
              { name: 'All Services', href: '/services' },
              { name: 'Request Quote', href: '/quote' }
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
