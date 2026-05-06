import Link from 'next/link';
import { Phone, Clock, Shield, CheckCircle, ArrowRight, AlertCircle, Car } from 'lucide-react';
import Button from '@/components/common/Button';
import Card from '@/components/common/Card';
import QuoteForm from '@/components/forms/QuoteForm';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'What to Do When Locked Out of Your Car | Bed-Stuy Locksmith',
  description: 'Locked out of your car? Here\'s what to do. Don\'t panic. Call (718) 568-6597 for fast emergency car unlock in Bed-Stuy.',
};

export default function LockedOutCarBlogPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="bg-gradient-to-br from-trust-blue via-blue-900 to-blue-950 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-blue-500/20 backdrop-blur-sm px-4 py-2 rounded-full text-blue-300 text-sm font-bold mb-6 border border-blue-400/30">
            <Car size={16} />
            <span>Emergency Car Lockout Guide</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
            Locked Out of Your Car? <br />
            <span className="text-action-orange text-3xl md:text-5xl">Here's What to Do</span>
          </h1>
          <p className="text-xl text-blue-100 mb-10 leading-relaxed max-w-3xl mx-auto">
            Stay calm and follow these steps to get back on the road quickly and safely without damaging your vehicle.
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
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Don't Panic</h2>
              <p>
                You're locked out of your car. Your keys are inside. Your heart is racing. Take a breath. This happens to everyone. You're not alone. There are steps you can take right now. First, don't try to break in yourself. You might damage your car. Don't call a tow truck unless absolutely necessary. Call a <strong>locksmith</strong> first.
              </p>
              <p>
                We handle car lockouts every day. We respond fast. We unlock your car safely. We don't damage your vehicle. We charge fair prices. We're available 24/7. We serve Bed-Stuy and surrounding areas. We're your best option when you're locked out.
              </p>
              <p>
                Call (718) 568-6597 right now. Tell us your location and vehicle. We'll dispatch a technician immediately. We'll arrive within 20 minutes in most cases. We'll unlock your car. You'll be back on the road. Don't wait. Call us now.
              </p>
            </div>
            
            <div className="bg-gray-50 p-8 md:p-12 rounded-3xl border border-gray-100 shadow-sm">
              <h3 className="text-2xl font-bold mb-8 text-gray-900 flex items-center gap-2">
                <AlertCircle size={24} className="text-action-orange" />
                Action Steps
              </h3>
              <div className="space-y-6">
                {[
                  { step: '1', title: 'Don\'t try to break in', desc: 'Modern cars have complex locking systems; DIY attempts usually cause expensive damage.' },
                  { step: '2', title: 'Skip the tow truck', desc: 'Towing is slow and expensive. A locksmith comes to you and solves the problem on the spot.' },
                  { step: '3', title: 'Call (718) 568-6597', desc: 'Tell us your location and car model. We\'ll give you an honest arrival time.' },
                  { step: '4', title: 'Dispatch & Arrival', desc: 'We\'ll send the nearest technician. They usually arrive within 20 minutes.' },
                  { step: '5', title: 'Safe Unlocking', desc: 'We use professional tools to unlock your car without any damage to locks or glass.' }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-trust-blue text-white rounded-full flex items-center justify-center font-bold">
                      {item.step}
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

          <div className="bg-gray-900 text-white p-12 rounded-3xl mb-20 text-center">
             <h2 className="text-3xl font-bold mb-8">Why Call a Professional Locksmith?</h2>
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {[
                  { title: 'Fast Response', desc: 'Average 20-min arrival' },
                  { title: 'Expert Technique', desc: 'Non-destructive methods' },
                  { title: 'Fair Pricing', desc: 'Honest, upfront estimates' },
                  { title: 'Peace of Mind', desc: 'Licensed and insured' }
                ].map((item, i) => (
                  <div key={i}>
                    <CheckCircle className="text-action-orange mx-auto mb-4" size={32} />
                    <h4 className="font-bold text-lg mb-2">{item.title}</h4>
                    <p className="text-blue-100 opacity-80 text-sm">{item.desc}</p>
                  </div>
                ))}
             </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-2xl font-bold mb-8 text-gray-900">Related Resources</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-left">
            {[
              { name: 'Car Lockout Service', href: '/services/automotive-locksmith' },
              { name: '24-Hour Locksmith', href: '/services/24-hour-emergency-locksmith' },
              { name: 'Contact Us', href: '/contact' },
              { name: 'Get a Quote', href: '/quote' }
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
