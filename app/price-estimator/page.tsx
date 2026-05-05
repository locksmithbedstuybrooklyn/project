import Link from 'next/link';
import { Phone, Clock, Shield, CheckCircle, ArrowRight, Calculator, DollarSign } from 'lucide-react';
import Button from '@/components/common/Button';
import Card from '@/components/common/Card';
import QuoteForm from '@/components/forms/QuoteForm';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Free Locksmith Price Estimator | Instant Quote | Bed-Stuy',
  description: 'Get an instant locksmith price estimate. Select your service and vehicle type. No hidden fees. Bed-Stuy. Call (718) 568-6597.',
};

export default function PriceEstimatorPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="bg-gradient-to-br from-trust-blue via-blue-900 to-blue-950 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-blue-500/20 backdrop-blur-sm px-4 py-2 rounded-full text-blue-300 text-sm font-bold mb-6 border border-blue-400/30">
            <Calculator size={16} />
            <span>Transparent Pricing Tool</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
            Locksmith Price Estimator <br />
            <span className="text-action-orange text-3xl md:text-5xl">No Hidden Fees</span>
          </h1>
          <p className="text-xl text-blue-100 mb-10 leading-relaxed max-w-3xl mx-auto">
            Get an instant estimate for your locksmith needs. We believe in honest, upfront pricing for every customer in Bed-Stuy.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:(718)568-6597">
              <Button size="large" className="bg-action-orange hover:bg-orange-600 px-8 py-4 text-lg font-bold">
                <Phone className="mr-2" size={20} />
                Call (718) 568-6597
              </Button>
            </a>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-20">
            <div className="space-y-8 text-lg text-gray-700 leading-relaxed">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Transparent Pricing</h2>
              <p>
                We believe in transparent pricing. No hidden fees. No surprises. You know the cost before we start. Use our free price estimator to get an instant quote. Select your service type. Select your vehicle or property type. Get a price range immediately.
              </p>
              <p>
                Our pricing is fair and competitive. We don't charge emergency surcharges. We don't charge after-hours fees. We don't charge hidden fees. What you see is what you pay. We're honest about pricing. We respect your budget.
              </p>
              <p>
                Get your free estimate now. Use the tool below. If you have questions, call (718) 568-6597. We're available 24/7. We're happy to answer your questions.
              </p>
            </div>
            
            <div className="bg-gray-50 p-8 md:p-12 rounded-3xl border border-gray-100 shadow-xl">
               <h3 className="text-2xl font-bold mb-8 text-center text-gray-900">Get Instant Estimate</h3>
               <QuoteForm />
               <p className="mt-6 text-sm text-gray-500 text-center italic">
                 *Estimates are subject to on-site verification of lock condition and vehicle type.
               </p>
            </div>
          </div>

          <div className="bg-trust-blue text-white p-12 rounded-3xl mb-20">
             <h2 className="text-3xl font-bold mb-8 text-center">Why Our Pricing is Fair</h2>
             <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
                {[
                  'No Hidden Fees', 'No Surprises', 'Transparent Pricing', 
                  'Honest Estimates', 'Fair Rates'
                ].map((item, i) => (
                  <div key={i} className="bg-white/10 p-6 rounded-2xl border border-white/20 text-center">
                    <DollarSign className="text-action-orange mx-auto mb-4" size={24} />
                    <span className="font-bold text-sm">{item}</span>
                  </div>
                ))}
             </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-2xl font-bold mb-8">Quick Links</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-left">
            {[
              { name: 'Request Quote', href: '/quote' },
              { name: 'Contact Us', href: '/contact' },
              { name: 'All Services', href: '/services' },
              { name: 'About Us', href: '/about' }
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
