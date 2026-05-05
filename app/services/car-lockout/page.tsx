import Link from 'next/link';
import { Phone, Clock, Shield, CheckCircle, ArrowRight, Star } from 'lucide-react';
import Button from '@/components/common/Button';
import Card from '@/components/common/Card';
import QuoteForm from '@/components/forms/QuoteForm';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Car Lockout Service Bed-Stuy | Emergency Unlock | 20-Min Response',
  description: 'Locked out of your car? Fast emergency car unlock in Bed-Stuy. 24/7 response, 20-minute arrival, non-destructive, all vehicles. Call (718) 568-6597.',
};

export default function CarLockoutPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Car Lockout Service",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Bed-Stuy Locksmith",
      "telephone": "(718) 568-6597"
    },
    "areaServed": "Bed-Stuy, Brooklyn",
    "availableChannel": {
      "@type": "ServiceChannel",
      "serviceUrl": "https://locksmithbedstuy.com/services/car-lockout"
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      
      <section className="bg-gradient-to-br from-trust-blue via-blue-900 to-blue-950 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-blue-500/20 backdrop-blur-sm px-4 py-2 rounded-full text-blue-300 text-sm font-bold mb-6 border border-blue-400/30">
                <Clock size={16} />
                <span>20-Minute Arrival • Available 24/7</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
                Car Lockout Service <br />
                <span className="text-action-orange text-3xl md:text-5xl">Bed-Stuy, Brooklyn</span>
              </h1>
              <p className="text-xl text-blue-100 mb-10 leading-relaxed max-w-xl">
                Locked out of your car? We provide fast 20-minute response for all vehicle types. Non-destructive entry, 24/7 service. 
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="tel:(718)568-6597">
                  <Button size="large" className="bg-action-orange hover:bg-orange-600 w-full sm:w-auto">
                    <Phone className="mr-2" size={20} />
                    (718) 568-6597
                  </Button>
                </a>
                <Link href="/quote">
                  <Button variant="secondary" size="large" className="bg-white/10 hover:bg-white/20 text-white border-white/30 w-full sm:w-auto">
                    Get Free Quote
                  </Button>
                </Link>
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="bg-white/5 p-8 rounded-3xl backdrop-blur-xl border border-white/10 shadow-2xl">
                <h3 className="text-2xl font-bold mb-6 text-white">Instant Car Unlock Quote</h3>
                <QuoteForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            <div className="lg:col-span-2">
              <div className="space-y-8 text-lg text-gray-700 leading-relaxed">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Locked Out of Your Car?</h2>
                <p>
                  You're locked out of your car. Maybe you left keys inside. Maybe they're lost. Maybe the lock jammed. Whatever happened, you need help fast. Being locked out is stressful, especially if you're stranded or late for something important. You need a <strong>locksmith</strong> who responds quickly and solves the problem without damage.
                </p>
                <p>
                  That's where we come in. Our <strong>emergency locksmith</strong> team handles <strong>car lockouts</strong> every day. We arrive within 20 minutes in most cases. We unlock your car safely using non-destructive techniques. We work on all vehicle types, from old cars to new luxury models. We charge fair prices with no hidden fees.
                </p>
                <p>
                  Don't try to break in yourself. You might damage your car. Don't call a tow truck unless absolutely necessary. Call us first. We're faster and cheaper. We're available 24/7, including nights, weekends, and holidays. Call (718) 568-6597 right now.
                </p>
              </div>

              <div className="mt-16">
                <h2 className="text-2xl font-bold mb-8">Our Car Unlock Process</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    { step: '1', title: 'Call (718) 568-6597', desc: 'Tell us your location and vehicle. We dispatch immediately.' },
                    { step: '2', title: 'Technician Dispatched', desc: 'You get a text with the estimated arrival time (avg 20 mins).' },
                    { step: '3', title: 'On-Site Arrival', desc: 'We arrive and assess the situation with professional tools.' },
                    { step: '4', title: 'Safe Unlock', desc: 'We unlock your car safely using non-destructive techniques.' },
                    { step: '5', title: 'Back on the Road', desc: 'Your car is unlocked. You pay and get a digital receipt.' }
                  ].map((item, i) => (
                    <div key={i} className="flex gap-4 p-6 bg-gray-50 rounded-2xl border border-gray-100">
                      <div className="flex-shrink-0 w-8 h-8 bg-trust-blue text-white rounded-full flex items-center justify-center font-bold">
                        {item.step}
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900">{item.title}</h4>
                        <p className="text-sm text-gray-600 mt-1">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="bg-blue-50 p-8 rounded-3xl border border-blue-100">
                <h3 className="text-xl font-bold mb-6">Why Choose Us</h3>
                <ul className="space-y-4">
                  {[
                    '20-Min Arrival Guarantee',
                    'Non-Destructive Entry',
                    'All Vehicle Makes & Models',
                    'Licensed & Insured Team',
                    'Fair, Honest Pricing',
                    'Available 24/7'
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-gray-700 font-medium">
                      <CheckCircle className="text-safety-green" size={20} />
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="mt-8">
                  <a href="tel:(718)568-6597">
                    <Button className="w-full bg-trust-blue text-white">
                      Call (718) 568-6597
                    </Button>
                  </a>
                </div>
              </div>

              <div className="bg-gray-900 text-white p-8 rounded-3xl">
                <h3 className="text-xl font-bold mb-6">Service Areas</h3>
                <div className="grid grid-cols-1 gap-2 text-sm opacity-80">
                  {['Bed-Stuy', 'Crown Heights', 'Prospect Heights', 'Williamsburg', 'Greenpoint', 'Bushwick', 'Astoria', 'Long Island City'].map((area) => (
                    <div key={area} className="flex items-center gap-2">
                      <span className="text-action-orange">•</span> {area}
                    </div>
                  ))}
                </div>
              </div>

              <Card className="p-8 border-gray-100 shadow-sm">
                 <h3 className="font-bold mb-4">Related Services</h3>
                 <ul className="space-y-3">
                   {[
                     { name: 'Car Key Replacement', href: '/services/car-key-replacement' },
                     { name: 'Ignition Repair', href: '/services/ignition-repair' },
                     { name: 'Automotive Locksmith', href: '/services/automotive-locksmith' },
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

      <section className="py-24 bg-gray-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-12">What Customers Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { author: 'Mike S.', content: 'Locked keys in my Honda. They arrived in 15 minutes and had it open in 2. Best price in Bed-Stuy.', rating: 5 },
              { author: 'Sarah P.', content: 'Professional and fast. Didn\'t scratch my car or anything. Highly recommend for any lockout.', rating: 5 },
              { author: 'David K.', content: 'Called them at 1 AM on a Tuesday. Still arrived within 20 minutes. Life savers!', rating: 5 }
            ].map((t, i) => (
              <Card key={i} className="p-8 bg-white border-none shadow-sm">
                <div className="flex justify-center gap-1 mb-4">
                  {[...Array(5)].map((_, j) => <Star key={j} className="fill-yellow-400 text-yellow-400" size={16} />)}
                </div>
                <p className="text-gray-700 italic mb-6">"{t.content}"</p>
                <p className="font-bold text-gray-900">— {t.author}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-trust-blue text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-8 text-action-orange">Emergency Car Unlock?</h2>
          <p className="text-xl mb-10 text-blue-100">
            Don't wait in the cold. Call (718) 568-6597 now. We'll be there in 20 minutes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:(718)568-6597">
              <Button size="large" className="bg-action-orange hover:bg-orange-600 px-12 py-6 text-2xl font-black w-full sm:w-auto">
                Call Now
              </Button>
            </a>
            <Link href="/quote">
              <Button size="large" variant="secondary" className="bg-white/10 hover:bg-white/20 text-white border-white/30 px-12 py-6 text-xl w-full sm:w-auto">
                Request Quote
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
