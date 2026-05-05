import Link from 'next/link';
import { Phone, Clock, Shield, CheckCircle, ArrowRight, AlertCircle } from 'lucide-react';
import Button from '@/components/common/Button';
import Card from '@/components/common/Card';
import QuoteForm from '@/components/forms/QuoteForm';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '24-Hour Locksmith Bed-Stuy | Emergency Service | Always Available',
  description: '24/7 emergency locksmith in Bed-Stuy. Car, home, business lockouts. Fast response, fair pricing. Call (718) 568-6597 anytime.',
};

export default function EmergencyLocksmithPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="bg-gradient-to-br from-trust-blue via-blue-900 to-blue-950 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-red-500/20 backdrop-blur-sm px-4 py-2 rounded-full text-red-300 text-sm font-bold mb-6 border border-red-400/30">
            <AlertCircle size={16} />
            <span>24/7 Emergency Dispatch Active</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
            24-Hour Locksmith <br />
            <span className="text-action-orange text-3xl md:text-5xl">Bed-Stuy, Brooklyn</span>
          </h1>
          <p className="text-xl text-blue-100 mb-10 leading-relaxed max-w-3xl mx-auto">
            Available anytime, any day. We respond to calls 24/7 and arrive within 20 minutes for any emergency.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:(718)568-6597">
              <Button size="large" className="bg-action-orange hover:bg-orange-600 px-10 py-5 text-xl font-black">
                <Phone className="mr-2" size={24} />
                (718) 568-6597
              </Button>
            </a>
            <Link href="/quote">
              <Button variant="secondary" size="large" className="bg-white/10 hover:bg-white/20 text-white border-white/30 px-8 py-5 text-lg">
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
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Always Here When You Need Us</h2>
              <p>
                Lockouts don't happen during business hours. That's why we're available 24/7. Midnight lockout? 3 AM emergency? Sunday morning? We're here. We respond to calls anytime, any day. We dispatch technicians immediately. We arrive within 20 minutes in most cases.
              </p>
              <p>
                We handle all types of emergencies. Car lockouts. House lockouts. Office lockouts. Broken locks. Lost keys. Ignition problems. Whatever your emergency, we solve it. We're licensed, insured, and professional. We use non-destructive techniques. We charge fair prices with no hidden fees.
              </p>
              <p>
                Don't wait until morning. Don't pay premium prices for after-hours service. Call us at (718) 568-6597. We're your <strong>24-hour locksmith</strong> in Bed-Stuy. We're ready to help, anytime.
              </p>
            </div>
            
            <div className="bg-gray-50 p-8 md:p-12 rounded-3xl border border-gray-100 shadow-sm">
              <h3 className="text-2xl font-bold mb-8 text-gray-900">Emergency Response</h3>
              <div className="space-y-6">
                {[
                  { title: 'Immediate Dispatch', desc: 'We send the nearest technician right away, no matter the hour.' },
                  { title: 'Fast Arrival', desc: '20-minute average response time across Bed-Stuy and Brooklyn.' },
                  { title: 'Professional Service', desc: 'Licensed, insured, and highly experienced emergency team.' },
                  { title: 'Fair Pricing', desc: 'No emergency surcharges, no hidden fees, ever.' },
                  { title: 'All Emergencies', desc: 'Car, home, business, and complex lock problems handled on-site.' }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="flex-shrink-0 w-6 h-6 text-trust-blue mt-1">
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

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
             {[
               { title: 'Peace of Mind', icon: <Shield className="text-trust-blue" size={32} /> },
               { title: 'Always Available', icon: <Clock className="text-trust-blue" size={32} /> },
               { title: 'Expert Results', icon: <CheckCircle className="text-trust-blue" size={32} /> }
             ].map((item, i) => (
               <Card key={i} className="p-8 text-center border-gray-100 shadow-sm">
                 <div className="flex justify-center mb-4">{item.icon}</div>
                 <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                 <p className="text-gray-600 text-sm leading-relaxed">Professional expertise and fair pricing, guaranteed 24 hours a day.</p>
               </Card>
             ))}
          </div>

          <div className="bg-trust-blue text-white p-8 md:p-16 rounded-3xl text-center">
             <h2 className="text-3xl font-bold mb-8">Not an Emergency?</h2>
             <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
               You can still book a scheduled service or request a free quote online. We'll get back to you within hours.
             </p>
             <div className="max-w-xl mx-auto">
               <QuoteForm />
             </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-2xl font-bold mb-8 text-center text-gray-900">Related Emergency Services</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: 'Car Lockout', href: '/services/car-lockout' },
              { name: 'Residential Lockout', href: '/services/residential-lockout' },
              { name: 'Lock Repair', href: '/services/lock-repair' },
              { name: 'Contact Us', href: '/contact' }
            ].map((s) => (
              <Link key={s.name} href={s.href}>
                <Card hover className="p-8 border-gray-100 text-center h-full flex flex-col justify-center">
                  <h3 className="font-bold text-trust-blue mb-2">{s.name}</h3>
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
