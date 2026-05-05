import Link from 'next/link';
import { Phone, Clock, Shield, CheckCircle, ArrowRight, Tool } from 'lucide-react';
import Button from '@/components/common/Button';
import Card from '@/components/common/Card';
import QuoteForm from '@/components/forms/QuoteForm';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Lock Maintenance Tips | Keep Your Locks Working | Bed-Stuy',
  description: 'Lock maintenance tips: keep locks working properly, prevent problems, extend lock life. Bed-Stuy locksmith. Call (718) 568-6597.',
};

export default function LockMaintenanceBlogPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="bg-gradient-to-br from-trust-blue via-blue-900 to-blue-950 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-blue-500/20 backdrop-blur-sm px-4 py-2 rounded-full text-blue-300 text-sm font-bold mb-6 border border-blue-400/30">
            <Tool size={16} />
            <span>Preventative Care Guide</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
            Lock Maintenance Tips <br />
            <span className="text-action-orange text-3xl md:text-5xl">Extend Hardware Life</span>
          </h1>
          <p className="text-xl text-blue-100 mb-10 leading-relaxed max-w-3xl mx-auto">
            Small maintenance steps today can prevent expensive lock failures tomorrow. Learn how to keep your door hardware working smoothly.
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
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Keep Your Locks Working</h2>
              <p>
                Good lock maintenance prevents problems. Regular maintenance extends lock life. It keeps locks working smoothly. It prevents rust and corrosion. It prevents wear and tear. Simple maintenance takes minutes but saves money and stress.
              </p>
              <p>
                Maintain your locks by keeping them clean and lubricated. Use graphite powder or silicone-based lubricant. Never use oil-based lubricants. They attract dirt. Clean the lock regularly. Remove dirt and debris. Check locks for signs of wear. Replace worn locks before they fail.
              </p>
              <p>
                Call (718) 568-6597 for <strong>lock maintenance advice</strong>. We'll assess your locks. We'll recommend maintenance steps. We'll repair or replace locks if needed. We serve Bed-Stuy and surrounding areas. We're available 24/7 for emergencies.
              </p>
            </div>
            
            <div className="bg-gray-50 p-8 md:p-12 rounded-3xl border border-gray-100 shadow-sm">
              <h3 className="text-2xl font-bold mb-8 text-gray-900">Maintenance Tips</h3>
              <div className="space-y-4">
                {[
                  { title: 'Keep Locks Clean', desc: 'Periodically remove surface dirt and internal debris from the keyway.' },
                  { title: 'Lubricate Regularly', desc: 'Use graphite powder or dry silicone spray to keep mechanisms turning.' },
                  { title: 'Never Use Oil', desc: 'Avoid WD-40 or oil-based products; they attract dust and eventually gum up the lock.' },
                  { title: 'Check for Wear', desc: 'Watch for keys sticking or cylinders loosening. Catching wear early prevents lockouts.' },
                  { title: 'Test Regularly', desc: 'Cycle your locks once a month to ensure they engage and disengage effortlessly.' }
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
             <h2 className="text-3xl font-bold mb-8">Professional Help</h2>
             <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
               Not sure about the state of your locks? We can help with professional assessments and maintenance services.
             </p>
             <div className="flex justify-center">
                <Link href="/quote">
                  <Button size="large" className="bg-white text-trust-blue hover:bg-blue-50 font-bold px-10">
                    Request Lock Assessment
                  </Button>
                </Link>
             </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-2xl font-bold mb-8">Service Resources</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-left">
            {[
              { name: 'Lock Repair Service', href: '/services/lock-repair' },
              { name: 'Lock Replacement', href: '/services/lock-replacement' },
              { name: 'Lock Installation', href: '/services/lock-installation' },
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
