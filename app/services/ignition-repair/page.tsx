import Link from 'next/link';
import { Phone, Clock, Shield, CheckCircle, ArrowRight, Settings } from 'lucide-react';
import Button from '@/components/common/Button';
import Card from '@/components/common/Card';
import QuoteForm from '@/components/forms/QuoteForm';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Ignition Repair Bed-Stuy | Car Ignition Problem | Replacement',
  description: 'Car ignition problems? We repair or replace damaged ignition cylinders. Fast service, all vehicles. Bed-Stuy locksmith. Call (718) 568-6597.',
};

export default function IgnitionRepairPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="bg-gradient-to-br from-trust-blue via-blue-900 to-blue-950 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-blue-500/20 backdrop-blur-sm px-4 py-2 rounded-full text-blue-300 text-sm font-bold mb-6 border border-blue-400/30">
            <Settings size={16} />
            <span>Fast Ignition Repair & Replacement</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
            Ignition Repair Service <br />
            <span className="text-action-orange text-3xl md:text-5xl">Bed-Stuy, Brooklyn</span>
          </h1>
          <p className="text-xl text-blue-100 mb-10 leading-relaxed max-w-3xl mx-auto">
            Car ignition problems? We repair or replace damaged ignition cylinders on-site for all vehicle types. 
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:(718)568-6597">
              <Button size="large" className="bg-action-orange hover:bg-orange-600 px-8 py-4 text-lg">
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
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Common Ignition Problems</h2>
              <p>
                Your car's ignition is stuck, broken, or won't turn. Maybe the key won't go in. Maybe it turns but the car won't start. Maybe the ignition cylinder is damaged. These problems need professional attention. Driving with a broken ignition is risky. You need a <strong>locksmith</strong> who can repair or replace it quickly.
              </p>
              <p>
                We handle all types of ignition problems. We repair worn cylinders. We replace damaged ones. We work on all vehicle types. We use quality parts and proven techniques. We charge fair prices. We're available 24/7 for emergencies. If your car won't start because of ignition problems, we can help.
              </p>
              <p>
                Call (718) 568-6597 for fast <strong>ignition repair</strong>. We'll diagnose the problem and give you an honest estimate. If we can repair it, we will. If replacement is necessary, we'll do that too. Either way, you'll get your car running again.
              </p>
            </div>
            
            <div className="bg-gray-50 p-8 md:p-12 rounded-3xl border border-gray-100">
              <h3 className="text-2xl font-bold mb-8 text-gray-900">Symptoms We Fix</h3>
              <div className="space-y-6">
                {[
                  { title: 'Key Won\'t Turn', desc: 'Cylinder is stuck, jammed, or internally damaged.' },
                  { title: 'Key Won\'t Go In', desc: 'Foreign object, bent pins, or broken cylinder components.' },
                  { title: 'Car Won\'t Start', desc: 'Ignition switch failure or electrical connection issues.' },
                  { title: 'Worn Cylinder', desc: 'Key turns but feels loose, requiring wiggling to work.' },
                  { title: 'Broken Key in Ignition', desc: 'Key snapped off inside the cylinder and needs extraction.' }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 p-4 bg-white rounded-xl border border-gray-100 shadow-sm">
                    <div className="flex-shrink-0 w-6 h-6 text-action-orange mt-1">
                      <CheckCircle size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">{item.title}</h4>
                      <p className="text-gray-600 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-trust-blue text-white p-12 rounded-3xl mb-20">
             <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-3xl font-bold mb-6">Our Ignition Service</h2>
                  <p className="text-lg text-blue-100 mb-8">
                    Professional diagnosis. Quality repairs. Honest pricing. All vehicles. 24/7 availability.
                  </p>
                  <ul className="space-y-4">
                    {[
                      'Licensed & insured technicians',
                      'On-site repair and replacement',
                      'High-quality OEM or better parts',
                      'Full testing before completion',
                      'Serving all of Bed-Stuy & Brooklyn'
                    ].map((item, i) => (
                      <li key={i} className="flex items-center gap-3">
                        <CheckCircle className="text-action-orange" size={20} />
                        <span className="font-semibold">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-white/10 p-8 rounded-2xl backdrop-blur-sm border border-white/20">
                   <h3 className="text-xl font-bold mb-6 text-center">Need an Estimate?</h3>
                   <QuoteForm />
                </div>
             </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: 'Car Lockout', href: '/services/car-lockout' },
              { name: 'Key Replacement', href: '/services/car-key-replacement' },
              { name: 'Auto Locksmith', href: '/services/automotive-locksmith' },
              { name: '24-Hour Service', href: '/services/24-hour-locksmith' }
            ].map((s) => (
              <Link key={s.name} href={s.href}>
                <Card hover className="p-8 border-gray-100 text-center h-full">
                  <h3 className="font-bold text-trust-blue mb-4">{s.name}</h3>
                  <p className="text-xs text-gray-500 mb-4">Related Service</p>
                  <div className="flex justify-center text-trust-blue">
                    <ArrowRight size={20} />
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-action-orange text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-8">Car Won't Start?</h2>
          <p className="text-xl mb-10 text-orange-100">
            Available 24/7 for emergency ignition repair. Call (718) 568-6597 right now.
          </p>
          <a href="tel:(718)568-6597">
            <Button size="large" className="bg-white text-action-orange hover:bg-orange-50 px-12 py-6 text-2xl font-black">
              (718) 568-6597
            </Button>
          </a>
        </div>
      </section>
    </div>
  );
}
