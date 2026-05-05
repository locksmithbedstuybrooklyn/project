import Link from 'next/link';
import { Phone, Clock, Shield, CheckCircle, ArrowRight, Star, Key } from 'lucide-react';
import Button from '@/components/common/Button';
import Card from '@/components/common/Card';
import QuoteForm from '@/components/forms/QuoteForm';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Car Key Replacement Bed-Stuy | Lost Keys | Key Duplication',
  description: 'Lost your car keys? We cut and program replacement keys on-site. All vehicle types. Bed-Stuy locksmith. Call (718) 568-6597.',
};

export default function CarKeyReplacementPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="bg-gradient-to-br from-trust-blue via-blue-900 to-blue-950 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-blue-500/20 backdrop-blur-sm px-4 py-2 rounded-full text-blue-300 text-sm font-bold mb-6 border border-blue-400/30">
            <Key size={16} />
            <span>On-Site Key Cutting & Programming</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
            Car Key Replacement <br />
            <span className="text-action-orange text-3xl md:text-5xl">Bed-Stuy, Brooklyn</span>
          </h1>
          <p className="text-xl text-blue-100 mb-10 leading-relaxed max-w-3xl mx-auto">
            Lost your keys? We cut and program replacement keys on-site for all vehicle types. 
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
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Lost Your Car Keys?</h2>
              <p>
                You lost your car keys. Or they broke. Or you need a spare. Whatever the reason, you need replacement keys fast. Dealerships charge high prices and take days. We cut and program keys on-site in minutes. We handle all vehicle types, from basic cars to luxury models with transponder keys.
              </p>
              <p>
                Our <strong>locksmith</strong> team uses modern key-cutting equipment and programming technology. We can make keys for vehicles from the 1990s to today's models. We create standard keys, transponder keys, and remote keys. We charge fair prices with no hidden fees. We're available 24/7 for emergencies.
              </p>
              <p>
                Don't go to the dealership. Don't wait days for your keys. Call us at (718) 568-6597. We'll cut and program your keys while you wait. You'll save money and time. We serve Bed-Stuy and surrounding areas with fast, professional service.
              </p>
            </div>
            
            <div className="bg-gray-50 p-8 md:p-12 rounded-3xl border border-gray-100">
              <h3 className="text-2xl font-bold mb-8 text-gray-900">Types of Keys We Make</h3>
              <div className="space-y-6">
                {[
                  { title: 'Standard Keys', desc: 'Basic car keys for older vehicles.' },
                  { title: 'Transponder Keys', desc: 'Keys with computer chips for modern cars.' },
                  { title: 'Remote Keys', desc: 'Keys with lock/unlock buttons.' },
                  { title: 'Proximity Keys', desc: 'Keyless entry systems (Key Fobs).' },
                  { title: 'Emergency Keys', desc: 'Quick replacements when you\'re stranded.' }
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

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-8 border-gray-100 bg-white shadow-sm text-center">
              <div className="w-16 h-16 bg-blue-50 text-trust-blue rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Shield size={32} />
              </div>
              <h3 className="text-xl font-bold mb-4">No Dealership Markup</h3>
              <p className="text-gray-600 text-sm">Save hundreds of dollars compared to dealership prices for the exact same keys.</p>
            </Card>
            <Card className="p-8 border-gray-100 bg-white shadow-sm text-center">
              <div className="w-16 h-16 bg-blue-50 text-trust-blue rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Clock size={32} />
              </div>
              <h3 className="text-xl font-bold mb-4">On-Site Service</h3>
              <p className="text-gray-600 text-sm">We come to you. No need to tow your car to a shop or wait for days.</p>
            </Card>
            <Card className="p-8 border-gray-100 bg-white shadow-sm text-center">
              <div className="w-16 h-16 bg-blue-50 text-trust-blue rounded-2xl flex items-center justify-center mx-auto mb-6">
                <CheckCircle size={32} />
              </div>
              <h3 className="text-xl font-bold mb-4">Instant Programming</h3>
              <p className="text-gray-600 text-sm">Our mobile units are equipped with the latest programming technology.</p>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
           <h2 className="text-3xl font-bold mb-6">Our Advantage</h2>
           <p className="text-xl text-gray-600 mb-12">
             On-site key cutting. Instant programming. All vehicle types. Fair pricing. No dealership markup.
           </p>
           <div className="bg-white p-8 md:p-12 rounded-3xl border border-gray-100 shadow-xl">
             <h3 className="text-2xl font-bold mb-8">Request an Estimate</h3>
             <QuoteForm />
           </div>
        </div>
      </section>

      <section className="py-20 bg-trust-blue text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-8">Need New Car Keys?</h2>
          <p className="text-xl mb-10 text-blue-100">
            Available 24/7. We serve Bed-Stuy and a 5-mile radius. Call now for on-site service.
          </p>
          <a href="tel:(718)568-6597">
            <Button size="large" className="bg-action-orange hover:bg-orange-600 px-12 py-6 text-2xl font-black">
              (718) 568-6597
            </Button>
          </a>
        </div>
      </section>
    </div>
  );
}
