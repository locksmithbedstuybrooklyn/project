import Link from 'next/link';
import { Phone, Clock, Shield, CheckCircle, ArrowRight, Home } from 'lucide-react';
import Button from '@/components/common/Button';
import Card from '@/components/common/Card';
import QuoteForm from '@/components/forms/QuoteForm';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Residential Lockout Bed-Stuy | House Lockout | Home Unlock',
  description: 'Locked out of your house? Fast residential lockout service in Bed-Stuy. Non-destructive, licensed, insured. Call (718) 568-6597.',
};

export default function ResidentialLockoutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="bg-gradient-to-br from-trust-blue via-blue-900 to-blue-950 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-blue-500/20 backdrop-blur-sm px-4 py-2 rounded-full text-blue-300 text-sm font-bold mb-6 border border-blue-400/30">
            <Home size={16} />
            <span>Fast, Non-Destructive Home Entry</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
            Residential Lockout <br />
            <span className="text-action-orange text-3xl md:text-5xl">Bed-Stuy, Brooklyn</span>
          </h1>
          <p className="text-xl text-blue-100 mb-10 leading-relaxed max-w-3xl mx-auto">
            Locked out of your home? We respond in 20 minutes to get you back inside safely without damaging your door or lock.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:(718)568-6597">
              <Button size="large" className="bg-action-orange hover:bg-orange-600 px-10 py-4 text-lg font-bold">
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
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 items-start">
            <div className="lg:col-span-2 space-y-12">
              <div className="space-y-8 text-lg text-gray-700 leading-relaxed">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Locked Out of Your House?</h2>
                <p>
                  You're locked out of your home. Maybe you forgot your keys. Maybe they're lost. Maybe the lock jammed. Whatever happened, you need to get inside. You need a <strong>locksmith</strong> who can open your door without damage. You need fast, professional service.
                </p>
                <p>
                  We handle residential lockouts every day. We open doors safely using proper techniques. We don't break windows or kick doors. We respect your property. We work on all types of doors and locks. We charge fair prices. We're available 24/7 for emergencies.
                </p>
                <p>
                  Call (718) 568-6597 right now. We'll send a technician to your location. We'll open your door quickly and professionally. You'll be back inside in minutes. We serve Bed-Stuy and surrounding areas with honest, reliable service.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-8">Our Home Unlock Process</h2>
                <div className="space-y-4">
                  {[
                    { step: '1', title: 'Contact Us', desc: 'Call (718) 568-6597. Tell us your location and situation.' },
                    { step: '2', title: 'Fast Dispatch', desc: 'We dispatch a technician immediately to your address.' },
                    { step: '3', title: 'Assessment', desc: 'We arrive and assess your door and lock type for the best entry method.' },
                    { step: '4', title: 'Professional Entry', desc: 'We open your door safely, without damage, using specialized tools.' },
                    { step: '5', title: 'Completion', desc: 'You\'re back inside. You pay and get a digital receipt.' }
                  ].map((item, i) => (
                    <div key={i} className="flex gap-6 p-6 bg-gray-50 rounded-2xl border border-gray-100 items-center">
                      <div className="flex-shrink-0 w-12 h-12 bg-trust-blue text-white rounded-full flex items-center justify-center font-bold text-xl">
                        {item.step}
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 text-lg">{item.title}</h4>
                        <p className="text-gray-600 mt-1">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <Card className="p-8 border-gray-100 bg-blue-50">
                <h3 className="text-xl font-bold mb-6">Why We're Different</h3>
                <ul className="space-y-4">
                  {[
                    'Non-destructive techniques',
                    '20-Minute arrival guarantee',
                    'Professional licensed service',
                    'Fair, transparent pricing',
                    'Licensed and insured',
                    'Bed-Stuy local experts'
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-gray-700 font-medium">
                      <CheckCircle className="text-safety-green flex-shrink-0" size={18} />
                      {item}
                    </li>
                  ))}
                </ul>
              </Card>

              <div className="bg-gray-900 text-white p-8 rounded-3xl">
                <h3 className="text-xl font-bold mb-6">Need Help Now?</h3>
                <p className="text-blue-100 mb-8 leading-relaxed">Available 24/7. Average 20-minute response time in Bed-Stuy.</p>
                <a href="tel:(718)568-6597">
                  <Button size="large" className="w-full bg-action-orange hover:bg-orange-600 text-lg">
                    (718) 568-6597
                  </Button>
                </a>
              </div>

              <Card className="p-8 border-gray-100 shadow-sm">
                 <h3 className="font-bold mb-4">Related Services</h3>
                 <ul className="space-y-3">
                   {[
                     { name: 'Lock Replacement', href: '/services/lock-replacement' },
                     { name: 'Lock Repair', href: '/services/lock-repair' },
                     { name: 'Lock Installation', href: '/services/lock-installation' },
                     { name: '24-Hour Locksmith', href: '/services/24-hour-locksmith' }
                   ].map((s) => (
                     <li key={s.name}>
                       <Link href={s.href} className="text-trust-blue hover:underline flex items-center gap-2 text-sm font-semibold">
                         <ArrowRight size={14} /> {s.name}
                       </Link>
                     </li>
                   ))}
                 </ul>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-12 text-gray-900">Request a Free Quote</h2>
          <div className="bg-white p-8 md:p-12 rounded-3xl border border-gray-100 shadow-xl text-left">
            <QuoteForm />
          </div>
        </div>
      </section>
    </div>
  );
}
