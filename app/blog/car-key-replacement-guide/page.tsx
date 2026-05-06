import Link from 'next/link';
import { Phone, Clock, Shield, CheckCircle, ArrowRight, Key } from 'lucide-react';
import Button from '@/components/common/Button';
import Card from '@/components/common/Card';
import QuoteForm from '@/components/forms/QuoteForm';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Car Key Replacement Guide | Lost Keys, Spare Keys | Bed-Stuy',
  description: 'Car key replacement guide: lost keys, spare keys, transponder keys. Bed-Stuy locksmith. Call (718) 568-6597.',
};

export default function CarKeyReplacementGuideBlogPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="bg-gradient-to-br from-trust-blue via-blue-900 to-blue-950 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-blue-500/20 backdrop-blur-sm px-4 py-2 rounded-full text-blue-300 text-sm font-bold mb-6 border border-blue-400/30">
            <Key size={16} />
            <span>Complete Car Key Guide</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
            Car Key Replacement <br />
            <span className="text-action-orange text-3xl md:text-5xl">The Definitive Guide</span>
          </h1>
          <p className="text-xl text-blue-100 mb-10 leading-relaxed max-w-3xl mx-auto">
            Lost keys? Damaged fob? Learn everything you need to know about replacing car keys quickly and affordably.
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
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Your Keys Are Lost</h2>
              <p>
                You lost your car keys. Or they broke. Or you need a spare. Whatever happened, you need replacement keys. You have options. Dealerships charge high prices and take days. We cut and program keys on-site in minutes. We handle all vehicle types. We charge fair prices.
              </p>
              <p>
                We make various types of keys. Standard keys for older cars. Transponder keys with computer chips. Remote keys with lock/unlock buttons. Proximity keys for keyless entry. We have the technology and expertise. We can make keys for vehicles from the 1990s to today's models.
              </p>
              <p>
                Call (718) 568-6597 for <strong>car key replacement</strong>. We'll cut and program your keys while you wait. You'll save money and time. We serve Bed-Stuy and surrounding areas. We're faster and cheaper than dealerships.
              </p>
            </div>
            
            <div className="bg-gray-50 p-8 md:p-12 rounded-3xl border border-gray-100 shadow-sm">
              <h3 className="text-2xl font-bold mb-8 text-gray-900">Types of Keys</h3>
              <div className="space-y-4">
                {[
                  { title: 'Standard Keys', desc: 'Mechanical keys for older vehicles without chips.' },
                  { title: 'Transponder Keys', desc: 'Keys with embedded security chips that must be programmed.' },
                  { title: 'Remote Keys', desc: 'Integrated lock/unlock buttons for convenience.' },
                  { title: 'Proximity Keys', desc: 'Push-to-start and keyless entry systems.' },
                  { title: 'Emergency Keys', desc: 'Quick laser-cut replacements when you\'re stranded.' }
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

          <div className="bg-gray-900 text-white p-12 rounded-3xl mb-20 text-center">
             <h2 className="text-3xl font-bold mb-8">Why Choose Us Over Dealerships?</h2>
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {[
                  { title: 'On-site Cutting', desc: 'We come to you' },
                  { title: 'Instant Programming', desc: 'No waiting for days' },
                  { title: 'All Vehicle Types', desc: 'Foreign and domestic' },
                  { title: 'Fair Pricing', desc: 'No dealership markup' }
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
          <h3 className="text-2xl font-bold mb-8">Related Links</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-left">
            {[
              { name: 'Car Key Replacement Service', href: '/services/automotive-locksmith' },
              { name: 'Automotive Locksmith', href: '/services/automotive-locksmith' },
              { name: 'Car Lockout Service', href: '/services/automotive-locksmith' },
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
