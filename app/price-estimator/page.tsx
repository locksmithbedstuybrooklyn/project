import Link from 'next/link';
import { Phone, Clock, Shield, CheckCircle, ArrowRight, Calculator, DollarSign, ArrowLeft } from 'lucide-react';
import Button from '@/components/common/Button';
import InteractiveEstimator from '@/components/pricing/InteractiveEstimator';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Instant Locksmith Price Estimator | 2026 Transparent Pricing | Bed-Stuy',
  description: 'Get an instant, transparent price estimate for any locksmith service in Bed-Stuy and Brooklyn. No hidden fees, flat-rate options, and immediate dispatch available 24/7.',
};

export default function PriceEstimatorPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* Dynamic Hero */}
      <section className="bg-gray-900 text-white pt-40 pb-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 bg-action-orange/10 border border-action-orange/30 px-6 py-2 rounded-full text-action-orange text-xs font-black uppercase tracking-widest mb-8 italic">
            <Calculator size={14} />
            Instant Digital Quotes
          </div>
          <h1 className="text-5xl md:text-8xl font-black mb-8 tracking-tighter uppercase italic leading-none">
            Pricing <span className="text-action-orange">Transparency</span>
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 mb-12 max-w-3xl mx-auto font-medium leading-relaxed">
            Eliminating the "Bait and Switch" culture. Get a technical price range for your specific situation in under 30 seconds.
          </p>
        </div>
      </section>

      {/* Main Estimator Section */}
      <section className="py-24 relative">
        <div className="absolute top-0 left-0 w-full h-96 bg-gray-900"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 items-center">
            {/* Value Props */}
            <div className="lg:col-span-2 text-white lg:text-left text-center">
              <h2 className="text-3xl md:text-4xl font-black mb-8 uppercase italic tracking-tight">Why Our Estimates are <span className="text-action-orange text-5xl block mt-2">Accurate</span></h2>
              <div className="space-y-8">
                {[
                  { title: 'Technical Categorization', desc: 'We differentiate between standard and high-security hardware immediately.' },
                  { title: 'Vehicle Specificity', desc: 'Price ranges are tailored to your car\'s specific security architecture.' },
                  { title: 'No Hidden Surcharges', desc: 'We don\'t charge "emergency fees" or "after-hours" premiums.' }
                ].map((item, i) => (
                  <div key={i} className="flex flex-col md:flex-row items-center md:items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-action-orange text-white flex items-center justify-center font-black italic flex-shrink-0">
                      {i + 1}
                    </div>
                    <div>
                      <h4 className="font-black uppercase italic tracking-tight text-xl mb-1">{item.title}</h4>
                      <p className="text-blue-200 text-sm font-medium">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-12 pt-12 border-t border-white/10 hidden lg:block">
                 <p className="text-xs font-black uppercase tracking-widest text-gray-400 mb-4 italic text-center lg:text-left">Immediate Assistance</p>
                 <a href="tel:(718)568-6597" className="inline-flex items-center gap-4 text-3xl font-black text-white hover:text-action-orange transition-colors italic">
                    <Phone size={32} className="text-action-orange" />
                    (718) 568-6597
                 </a>
              </div>
            </div>

            {/* The Tool */}
            <div className="lg:col-span-3">
              <InteractiveEstimator />
            </div>
          </div>
        </div>
      </section>

      {/* Trust & Policy Section */}
      <section className="py-24 bg-gray-50 border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black mb-6 uppercase italic tracking-tighter">Our Fair Pricing <span className="text-trust-blue">Commitment</span></h2>
            <p className="text-xl text-gray-600 font-medium max-w-2xl mx-auto">
              We abide by the DCWP locksmith standards and the Brooklyn community's trust protocols.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Shield, title: 'Licensed Quotes', desc: 'All estimates are provided by licensed NYC technicians, not sales reps.' },
              { icon: Clock, title: 'No Rush Fees', desc: 'Whether it is 3 PM or 3 AM, the technical labor rate remains consistent.' },
              { icon: DollarSign, title: 'Fixed Range Policy', desc: 'If the on-site situation matches your selection, we honor the range.' }
            ].map((item, i) => (
              <div key={i} className="p-10 bg-white rounded-3xl border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-500">
                <div className="w-14 h-14 bg-trust-blue text-white rounded-2xl flex items-center justify-center mb-8">
                  <item.icon size={28} />
                </div>
                <h3 className="text-xl font-black mb-4 uppercase italic tracking-tight">{item.title}</h3>
                <p className="text-gray-500 text-sm font-medium leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs or Secondary CTA */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-900 rounded-[3rem] p-12 md:p-24 text-white relative flex flex-col md:flex-row items-center gap-16">
             <div className="absolute top-0 right-0 w-96 h-96 bg-trust-blue/10 rounded-full -mr-48 -mt-48 blur-3xl"></div>
             <div className="flex-1 text-center md:text-left relative z-10">
                <h2 className="text-4xl md:text-6xl font-black mb-8 uppercase italic tracking-tighter leading-none">Need a <span className="text-action-orange italic">Custom</span> Project Quote?</h2>
                <p className="text-xl text-blue-100 mb-12 font-medium max-w-xl">
                  For large-scale commercial installations, multi-family rekeying, or unique architectural challenges, we provide on-site technical assessments.
                </p>
                <Link href="/quote">
                  <Button size="large" className="bg-white text-gray-900 hover:bg-blue-50 font-black px-12 py-8 text-xl rounded-2xl uppercase italic shadow-2xl">
                    Request Full Audit <ArrowRight className="ml-2 inline-block" />
                  </Button>
                </Link>
             </div>
             <div className="flex-shrink-0 relative z-10 hidden md:block">
               <div className="w-64 h-64 border-8 border-action-orange rounded-full flex items-center justify-center text-action-orange text-6xl font-black italic -rotate-12">
                 NYC
               </div>
             </div>
          </div>
        </div>
      </section>
    </div>
  );
}
