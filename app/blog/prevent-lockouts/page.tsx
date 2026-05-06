import Link from 'next/link';
import { Phone, Clock, Shield, CheckCircle, ArrowRight, Lightbulb } from 'lucide-react';
import Button from '@/components/common/Button';
import Card from '@/components/common/Card';
import QuoteForm from '@/components/forms/QuoteForm';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'How to Prevent Car Lockouts | Bed-Stuy Locksmith Tips',
  description: 'How to prevent car lockouts. Simple steps to avoid getting locked out. Bed-Stuy locksmith tips.',
};

export default function PreventLockoutsBlogPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="bg-gradient-to-br from-trust-blue via-blue-900 to-blue-950 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-blue-500/20 backdrop-blur-sm px-4 py-2 rounded-full text-blue-300 text-sm font-bold mb-6 border border-blue-400/30">
            <Lightbulb size={16} />
            <span>Locksmith Pro Tips</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
            How to Prevent <br />
            <span className="text-action-orange text-3xl md:text-5xl">Car Lockouts</span>
          </h1>
          <p className="text-xl text-blue-100 mb-10 leading-relaxed max-w-3xl mx-auto">
            The best lockout is the one that never happens. Follow these simple habits to keep your keys in hand and your car accessible.
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
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Prevention is Better</h2>
              <p>
                The best lockout is the one that never happens. You can prevent most car lockouts with simple habits. Check your keys before closing the door. Keep a spare key in a safe place. Use your car's keyless entry if available. Be aware of your keys. These simple steps prevent most lockouts.
              </p>
              <p>
                Develop good habits. Always check for your keys before closing the door. Keep a spare key in your wallet or with a trusted friend. Use your car's keyless entry system if you have one. Be mindful of your keys. These habits take seconds but save you hours of stress.
              </p>
              <p>
                If you do get locked out, don't panic. Call us at (718) 568-6597. We respond fast. We unlock your car safely. We charge fair prices. We're available 24/7. We serve Bed-Stuy and surrounding areas.
              </p>
            </div>
            
            <div className="bg-gray-50 p-8 md:p-12 rounded-3xl border border-gray-100 shadow-sm">
              <h3 className="text-2xl font-bold mb-8 text-gray-900">Prevention Tips</h3>
              <div className="space-y-4">
                {[
                  { title: 'Check Before Closing', desc: 'Develop the habit of touching your keys before the door shuts.' },
                  { title: 'Keep a Spare', desc: 'Store a spare key in your wallet or with a trusted neighbor.' },
                  { title: 'Use Keyless Entry', desc: 'Leverage your car\'s electronic entry systems for convenience.' },
                  { title: 'Be Mindful', desc: 'Stay aware of where your keys are at all times, especially when distracted.' },
                  { title: 'Develop Habits', desc: 'Consistent checks make lockout prevention automatic.' }
                ].map((item, i) => (
                  <div key={i} className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm flex items-start gap-4">
                     <div className="text-trust-blue mt-1">
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

          <div className="bg-trust-blue text-white p-12 rounded-3xl mb-20 text-center">
             <h2 className="text-3xl font-bold mb-8">When Prevention Fails</h2>
             <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
               We're here to help 24/7. Fast response, professional service, and fair pricing in Bed-Stuy.
             </p>
             <div className="flex justify-center gap-4">
                <a href="tel:(718)568-6597">
                  <Button size="large" className="bg-action-orange hover:bg-orange-600 font-bold px-10">
                    Call (718) 568-6597
                  </Button>
                </a>
             </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-2xl font-bold mb-8">Quick Links</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-left">
            {[
              { name: 'Car Lockout Service', href: '/services/automotive-locksmith' },
              { name: 'Car Key Replacement', href: '/services/automotive-locksmith' },
              { name: '24-Hour Locksmith', href: '/services/24-hour-emergency-locksmith' },
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
