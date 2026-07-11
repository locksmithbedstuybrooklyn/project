import { HelpCircle, Phone, ArrowRight, Shield, Clock, CreditCard, MapPin, Zap, Target, Award } from 'lucide-react';
import Button from '@/components/common/Button';
import Card from '@/components/common/Card';
import { Metadata } from 'next';
import Link from 'next/link';
import { generateFAQSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Locksmith FAQ | Expert Answers | Bed-Stuy Brooklyn',
  description: 'Frequently asked questions about Brooklyn locksmith services: pricing, response times, licensed technicians, and emergency support. Call (718) 568-6597.',
  alternates: { canonical: 'https://www.locksmithbedstuy.com/faq' },
  openGraph: {
    title: 'Locksmith FAQ | Expert Answers | Bed-Stuy',
    description: 'Frequently asked questions about locksmith services: pricing, response times, and emergency support in Bed-Stuy, Brooklyn.',
    url: 'https://www.locksmithbedstuy.com/faq',
    type: 'website',
  },
};

export default function FAQPage() {
  const faqs = [
    {
      question: 'How fast do you respond?',
      answer: 'Our average arrival time in Bed-Stuy is 15-20 minutes. Our dispatchers use GPS tracking to send the closest technician to your location immediately.'
    },
    {
      question: 'Do you charge for quotes?',
      answer: 'No. We provide free, transparent estimates over the phone. We don\'t believe in hidden fees or "bait and switch" pricing tactics.'
    },
    {
      question: 'Are you available now?',
      answer: 'Yes. We are available 24 hours a day, 7 days a week, 365 days a year. We never close, not even on holidays or in the middle of the night.'
    },
    {
      question: 'Are your locksmiths licensed?',
      answer: 'Yes. Every technician is fully licensed by the NYC Department of Consumer Affairs. We are also fully insured for your protection.'
    },
    {
      question: 'What if you can\'t open it?',
      answer: 'We have a 99% success rate for damage-free entry. In the extremely rare case where a lock is completely seized or broken, we will explain the situation and provide replacement options.'
    },
    {
      question: 'How do I pay?',
      answer: 'We accept all major credit cards, debit cards, and cash. You only pay after the job is completed to your satisfaction.'
    }
  ];

  const faqSchema = generateFAQSchema(
    faqs.map((f) => ({ question: f.question, answer: f.answer }))
  );

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      {/* Massive Authority Hero */}
      <section className="bg-gray-900 text-white pt-32 pb-24 relative overflow-hidden text-center">
        <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-trust-blue/20 to-transparent"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="inline-flex items-center gap-2 bg-blue-500/20 backdrop-blur-sm px-6 py-2 rounded-full text-blue-300 text-sm font-black mb-8 border border-blue-400/30 uppercase italic tracking-widest">
            <Zap size={16} className="text-action-orange" />
            <span>Instant Intelligence</span>
          </div>
          <h1 className="text-5xl md:text-8xl font-black mb-8 tracking-tighter uppercase italic leading-none">
            Common <span className="text-action-orange">Questions</span>
          </h1>
          <p className="text-xl md:text-3xl text-blue-100 mb-12 max-w-4xl mx-auto font-medium italic leading-tight">
            High-authority answers to the most <span className="text-white font-bold underline decoration-action-orange underline-offset-8">critical security inquiries</span> in Brooklyn.
          </p>
        </div>
      </section>

      {/* Main FAQ Content */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-24">
            {faqs.map((faq, i) => (
              <Card key={i} className="p-12 border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-500 bg-gray-50 rounded-[3rem] group">
                <div className="flex gap-8">
                  <div className="flex-shrink-0 w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-trust-blue shadow-sm group-hover:bg-trust-blue group-hover:text-white transition-all">
                    <HelpCircle size={32} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-black text-gray-900 mb-6 uppercase italic tracking-tight leading-none group-hover:text-trust-blue transition-colors">{faq.question}</h3>
                    <p className="text-gray-600 leading-relaxed font-medium italic text-lg">{faq.answer}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Emergency CTA Box */}
          <div className="bg-gray-950 text-white rounded-[4rem] p-12 md:p-24 relative overflow-hidden shadow-3xl">
             <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1510127034890-ba27508e9f1c?auto=format&fit=crop&q=80')] bg-cover bg-center grayscale"></div>
             <div className="relative z-10 text-center max-w-4xl mx-auto">
                <h2 className="text-4xl md:text-7xl font-black mb-8 tracking-tighter uppercase italic leading-none">
                  Need <span className="text-action-orange">Expert</span> Advice?
                </h2>
                <p className="text-xl md:text-2xl text-blue-100 mb-12 font-medium italic leading-relaxed">
                   Don't waste time searching for generic answers. Speak directly to a <span className="text-white font-bold">Master Locksmith</span> right now for your specific situation.
                </p>
                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                   <a href="tel:(718)568-6597" className="w-full sm:w-auto">
                      <Button size="large" className="w-full bg-action-orange hover:bg-orange-600 text-white font-black px-16 py-10 rounded-[2.5rem] text-4xl shadow-2xl uppercase italic tracking-tighter">
                         (718) 568-6597
                      </Button>
                   </a>
                </div>
                <div className="mt-16 flex flex-wrap justify-center gap-10 opacity-40">
                   <div className="flex items-center gap-3">
                      <Shield className="text-safety-green" size={24} />
                      <span className="text-xs font-black uppercase tracking-widest italic text-white">Licensed NYC Locksmith</span>
                   </div>
                   <div className="flex items-center gap-3">
                      <Clock className="text-safety-green" size={24} />
                      <span className="text-xs font-black uppercase tracking-widest italic text-white">24/7 Expert Dispatch</span>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Trust Pillars */}
      <section className="py-32 bg-gray-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="grid grid-cols-1 md:grid-cols-3 gap-16 text-center">
              <div className="flex flex-col items-center">
                 <div className="w-24 h-24 bg-white rounded-[2rem] flex items-center justify-center text-action-orange shadow-lg mb-8 border border-gray-100">
                    <Shield size={48} />
                 </div>
                 <h4 className="text-2xl font-black uppercase italic tracking-tight mb-4 text-gray-900 leading-none">Insured Work</h4>
                 <p className="text-gray-500 font-medium italic">Every service call is backed by $2M in liability coverage for your absolute peace of mind.</p>
              </div>
              <div className="flex flex-col items-center">
                 <div className="w-24 h-24 bg-white rounded-[2rem] flex items-center justify-center text-trust-blue shadow-lg mb-8 border border-gray-100">
                    <Award size={48} />
                 </div>
                 <h4 className="text-2xl font-black uppercase italic tracking-tight mb-4 text-gray-900 leading-none">Master Techs</h4>
                 <p className="text-gray-500 font-medium italic">We don't send trainees. You get an experienced professional with 10+ years of NYC security expertise.</p>
              </div>
              <div className="flex flex-col items-center">
                 <div className="w-24 h-24 bg-white rounded-[2rem] flex items-center justify-center text-safety-green shadow-lg mb-8 border border-gray-100">
                    <CreditCard size={48} />
                 </div>
                 <h4 className="text-2xl font-black uppercase italic tracking-tight mb-4 text-gray-900 leading-none">Fair Rates</h4>
                 <p className="text-gray-500 font-medium italic">No bait-and-switch. We provide honest, fixed-price estimates that reflect the real cost of quality security.</p>
              </div>
           </div>
        </div>
      </section>

      {/* Related Reading */}
      <section className="py-24 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="flex flex-col md:flex-row justify-between items-center gap-12">
              <div className="text-center md:text-left">
                 <h3 className="text-3xl font-black uppercase italic tracking-tighter text-gray-900 mb-4 leading-none">Deep-Dive Guides</h3>
                 <p className="text-gray-500 font-medium italic">Need more detailed technical information? Explore our professional security blog.</p>
              </div>
              <Link href="/blog">
                 <Button variant="secondary" className="border-2 border-gray-900 text-gray-900 font-black px-12 py-6 rounded-2xl uppercase italic tracking-widest hover:bg-gray-900 hover:text-white transition-all">
                    View Help Center
                 </Button>
              </Link>
           </div>
        </div>
      </section>
    </div>
  );
}


