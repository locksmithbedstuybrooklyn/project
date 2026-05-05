import Link from 'next/link';
import { Phone, Clock, Shield, CheckCircle, ArrowRight, Car } from 'lucide-react';
import Button from '@/components/common/Button';
import Card from '@/components/common/Card';
import QuoteForm from '@/components/forms/QuoteForm';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Automotive Locksmith Bed-Stuy | Auto Locksmith | Car Door Unlock',
  description: 'Automotive locksmith services: car unlock, key replacement, ignition repair, trunk unlock. All vehicles. Bed-Stuy. Call (718) 568-6597.',
};

export default function AutomotiveLocksmithPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="bg-gradient-to-br from-trust-blue via-blue-900 to-blue-950 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-blue-500/20 backdrop-blur-sm px-4 py-2 rounded-full text-blue-300 text-sm font-bold mb-6 border border-blue-400/30">
            <Car size={16} />
            <span>Complete Auto Lock & Key Solutions</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
            Automotive Locksmith <br />
            <span className="text-action-orange text-3xl md:text-5xl">Bed-Stuy, Brooklyn</span>
          </h1>
          <p className="text-xl text-blue-100 mb-10 leading-relaxed max-w-3xl mx-auto">
            Car, truck, or SUV — we handle all automotive lock and key problems. 24/7 service in Bed-Stuy.
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
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Complete Auto Services</h2>
              <p>
                We're not just for lockouts. We handle all automotive lock and key problems. Car won't start? Trunk stuck? Door lock broken? Ignition damaged? We fix it all. Our <strong>automotive locksmith</strong> team has years of experience with every vehicle type. From basic cars to luxury models, we know how to help.
              </p>
              <p>
                We use professional tools and proven techniques. We don't damage your car. We charge fair prices. We're licensed and insured. We work 24/7, including nights and weekends. Whether it's a quick key replacement or a complex ignition repair, we handle it with expertise.
              </p>
              <p>
                Call (718) 568-6597 for any automotive lock or key problem. We'll respond quickly, diagnose the issue, and give you an honest estimate. We serve Bed-Stuy and surrounding areas. We're the <strong>locksmith</strong> you can trust.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { title: 'Car Lockout', desc: 'Unlock your car safely with non-destructive entry.' },
                { title: 'Key Replacement', desc: 'Cut and program new keys on-site immediately.' },
                { title: 'Ignition Repair', desc: 'Fix or replace jammed or broken ignition cylinders.' },
                { title: 'Trunk Unlock', desc: 'Open stuck or jammed trunks without damage.' },
                { title: 'Door Lock Repair', desc: 'Fix broken or malfunctioning vehicle door locks.' },
                { title: 'Emergency Service', desc: '24/7 availability for any auto lock crisis.' }
              ].map((item, i) => (
                <Card key={i} className="p-6 border-gray-100 bg-gray-50 flex flex-col justify-between">
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">{item.title}</h4>
                    <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                  </div>
                  <div className="mt-4 text-trust-blue">
                    <ArrowRight size={20} />
                  </div>
                </Card>
              ))}
            </div>
          </div>

          <div className="max-w-5xl mx-auto">
             <div className="bg-gray-900 rounded-3xl p-8 md:p-16 text-center text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-action-orange/10 rounded-full -mr-32 -mt-32"></div>
                <h3 className="text-3xl font-bold mb-8">Why We're Different</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                   <div>
                     <div className="text-action-orange text-4xl font-black mb-4">20m</div>
                     <p className="font-bold">Fast Response</p>
                     <p className="text-sm text-gray-400 mt-2">Average arrival time in Bed-Stuy and surrounding areas.</p>
                   </div>
                   <div>
                     <div className="text-action-orange text-4xl font-black mb-4">100%</div>
                     <p className="font-bold">Safe Entry</p>
                     <p className="text-sm text-gray-400 mt-2">Non-destructive techniques used on every vehicle type.</p>
                   </div>
                   <div>
                     <div className="text-action-orange text-4xl font-black mb-4">24/7</div>
                     <p className="font-bold">Availability</p>
                     <p className="text-sm text-gray-400 mt-2">Day or night, weekend or holiday, we answer the phone.</p>
                   </div>
                </div>
                <div className="mt-12 pt-12 border-t border-white/10">
                   <p className="text-blue-100 mb-8 max-w-xl mx-auto">Licensed and insured professional expertise. Fair pricing on every single job.</p>
                   <a href="tel:(718)568-6597">
                     <Button variant="primary" size="large" className="bg-action-orange hover:bg-orange-600 px-10 py-5 text-xl">
                       Call (718) 568-6597
                     </Button>
                   </a>
                </div>
             </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: 'Car Lockout', href: '/services/car-lockout' },
              { name: 'Key Replacement', href: '/services/car-key-replacement' },
              { name: 'Ignition Repair', href: '/services/ignition-repair' },
              { name: '24-Hour Service', href: '/services/24-hour-locksmith' }
            ].map((s) => (
              <Link key={s.name} href={s.href}>
                <Card hover className="p-8 border-gray-100 text-center h-full flex flex-col justify-center">
                  <h3 className="font-bold text-trust-blue text-lg mb-2">{s.name}</h3>
                  <div className="flex justify-center text-trust-blue mt-4">
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
