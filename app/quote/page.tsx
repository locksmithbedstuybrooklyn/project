import QuoteForm from '@/components/forms/QuoteForm';
import { services } from '@/lib/content';
import { Shield, Clock, Phone, CheckCircle, FileText, Camera, MapPin, Zap, Target } from 'lucide-react';
import Card from '@/components/common/Card';
import Button from '@/components/common/Button';
import { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Free Locksmith Quote',
  description: 'Get a transparent locksmith quote in seconds. Instant pricing for car lockouts, key replacement, and lock repairs in Bed-Stuy. Call (718) 568-6597.',
  alternates: { canonical: 'https://www.locksmithbedstuy.com/quote' },
  openGraph: { url: 'https://www.locksmithbedstuy.com/quote' },
};

export default function QuotePage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Massive Authority Hero */}
      <section className="bg-gray-900 text-white pt-32 pb-24 relative overflow-hidden text-center">
        <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-trust-blue/20 to-transparent"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="inline-flex items-center gap-2 bg-blue-500/20 backdrop-blur-sm px-6 py-2 rounded-full text-blue-300 text-sm font-black mb-8 border border-blue-400/30 uppercase italic tracking-widest">
            <Target size={16} className="text-action-orange" />
            <span>Fixed-Rate Precision</span>
          </div>
          <h1 className="text-5xl md:text-8xl font-black mb-8 tracking-tighter uppercase italic leading-none">
            Get A <span className="text-action-orange">Quote</span>
          </h1>
          <p className="text-xl md:text-3xl text-blue-100 mb-12 max-w-4xl mx-auto font-medium italic leading-tight">
            No games. No hidden fees. Just <span className="text-white font-bold underline decoration-action-orange underline-offset-8">honest, professional estimates</span> for your security needs.
          </p>
        </div>
      </section>

      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
            <div className="order-2 lg:order-1 relative">
               <div className="absolute -inset-4 bg-trust-blue rounded-[4rem] blur-3xl opacity-10"></div>
               <div className="bg-white p-12 md:p-20 rounded-[4rem] border-2 border-gray-100 shadow-3xl relative z-10">
                 <h2 className="text-4xl font-black text-gray-900 mb-12 uppercase italic tracking-tighter leading-none">Estimate <span className="text-trust-blue">Request</span></h2>
                 <QuoteForm />
                 <div className="mt-12 pt-12 border-t border-gray-100 flex items-center gap-4 text-gray-500 text-xs font-black uppercase italic tracking-widest">
                   <Shield size={24} className="text-safety-green" />
                   <span>100% Secure & No-Obligation</span>
                 </div>
               </div>
            </div>

            <div className="order-1 lg:order-2 space-y-16">
              <div>
                <h2 className="text-4xl font-black text-gray-900 mb-12 uppercase italic tracking-tighter leading-none">How It <span className="text-trust-blue">Works</span></h2>
                <div className="space-y-10">
                  {[
                    { step: '01', title: 'Service Details', desc: 'Specify the exact issue (e.g., Car Key Replacement, Lock Installation).', icon: <FileText /> },
                    { step: '02', title: 'Location Sync', desc: 'Identify your neighborhood for precise arrival window estimation.', icon: <MapPin /> },
                    { step: '03', title: 'Technical Review', desc: 'A Master Locksmith reviews your request and provides a fixed-price range.', icon: <Target /> },
                    { step: '04', title: 'Instant Dispatch', desc: 'Once approved, we dispatch the nearest technician within 60 seconds.', icon: <Zap /> }
                  ].map((item, i) => (
                    <div key={i} className="flex gap-8 group">
                      <div className="flex-shrink-0 w-16 h-16 bg-gray-900 text-white rounded-[1.5rem] flex items-center justify-center font-black text-2xl italic shadow-lg group-hover:bg-action-orange transition-colors">
                        {item.step}
                      </div>
                      <div>
                        <h3 className="text-2xl font-black text-gray-900 mb-2 uppercase italic tracking-tight leading-none group-hover:text-trust-blue transition-colors">{item.title}</h3>
                        <p className="text-gray-500 font-medium italic text-lg leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gray-900 text-white p-12 rounded-[3rem] relative overflow-hidden">
                <div className="absolute top-0 right-0 w-48 h-48 bg-trust-blue rounded-full blur-3xl opacity-20 -mr-24 -mt-24"></div>
                <h3 className="text-3xl font-black mb-8 uppercase italic tracking-tighter leading-none">Critical <span className="text-action-orange">Emergency?</span></h3>
                <p className="text-blue-100 font-medium italic text-lg mb-12 leading-relaxed">
                   If you are locked out right now or in a high-risk security situation, <span className="text-white font-bold">do not wait for a web form response</span>. Call our priority dispatch line immediately.
                </p>
                <a href="tel:(718)568-6597">
                  <Button size="large" className="w-full bg-action-orange hover:bg-orange-600 text-white font-black py-8 rounded-2xl text-3xl uppercase italic tracking-tighter shadow-2xl">
                     (718) 568-6597
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="py-24 bg-gray-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { label: 'Licensed', val: 'NYC Approved', icon: <Shield /> },
                { label: 'Response', val: '20-Min Goal', icon: <Clock /> },
                { label: 'Pricing', val: 'Fixed-Rate', icon: <Target /> },
                { label: 'Support', val: '24/7 Dispatch', icon: <Phone /> }
              ].map((item, i) => (
                <div key={i} className="flex flex-col items-center text-center">
                   <div className="text-action-orange mb-4">{item.icon}</div>
                   <span className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-1 italic">{item.label}</span>
                   <span className="text-lg font-black text-gray-900 uppercase italic tracking-tight leading-none">{item.val}</span>
                </div>
              ))}
           </div>
        </div>
      </section>
    </div>
  );
}


