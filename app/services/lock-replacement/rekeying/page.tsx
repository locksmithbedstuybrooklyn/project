import Link from 'next/link';
import { Phone, Clock, Shield, CheckCircle, ArrowRight, RotateCw, Key } from 'lucide-react';
import Button from '@/components/common/Button';
import Card from '@/components/common/Card';
import QuoteForm from '@/components/forms/QuoteForm';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Lock Rekeying Bed-Stuy | Rekey Locks | Change Lock Combination',
  description: 'Lock rekeying service: change lock combination without replacing locks. Cost-effective security. Bed-Stuy. Call (718) 568-6597.',
};

export default function LockRekeyingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="bg-gradient-to-br from-trust-blue via-blue-900 to-blue-950 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-blue-500/20 backdrop-blur-sm px-4 py-2 rounded-full text-blue-300 text-sm font-bold mb-6 border border-blue-400/30">
            <Key size={16} />
            <span>Cost-Effective Security Solution</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
            Lock Rekeying Service <br />
            <span className="text-action-orange text-3xl md:text-5xl">Bed-Stuy, Brooklyn</span>
          </h1>
          <p className="text-xl text-blue-100 mb-10 leading-relaxed max-w-3xl mx-auto">
            Change your lock combination without replacing the hardware. Perfect for new properties or lost keys.
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
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Rekey Instead of Replace</h2>
              <p>
                Lock rekeying is a cost-effective way to improve security without replacing locks. We change the internal pins in your locks so old keys no longer work. New keys work instead. This is perfect when you move to a new property or want to prevent old key holders from accessing your home.
              </p>
              <p>
                Rekeying is cheaper than replacing locks. It's faster. It works on most existing locks. We can rekey multiple locks to work with one key. This is convenient for homeowners and businesses. We use professional techniques and quality materials. We charge fair prices.
              </p>
              <p>
                Call (718) 568-6597 for <strong>lock rekeying</strong>. We'll assess your locks and tell you if rekeying is possible. We'll rekey them professionally. Your locks will work with new keys only. Old keys won't work. We serve Bed-Stuy and surrounding areas.
              </p>
            </div>
            
            <div className="bg-gray-50 p-8 md:p-12 rounded-3xl border border-gray-100 shadow-sm">
              <h3 className="text-2xl font-bold mb-8 text-gray-900">When to Rekey Locks</h3>
              <div className="space-y-4">
                {[
                  { title: 'New Property', desc: 'Rekey locks immediately when you move into a new home or office.' },
                  { title: 'Lost or Stolen Keys', desc: 'Prevent unauthorized access if your keys are compromised.' },
                  { title: 'Employee Turnover', desc: 'Ensure security when employees or tenants leave your property.' },
                  { title: 'Security Upgrade', desc: 'Invalidate old key holders without the cost of new hardware.' },
                  { title: 'Key Consolidation', desc: 'Rekey multiple locks to work with one single master key.' }
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
             <h2 className="text-3xl font-bold mb-12">Rekeying vs. Replacement</h2>
             <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <Card className="p-8 bg-white/10 border-white/20 text-white text-left">
                   <h3 className="text-xl font-bold mb-4 text-action-orange">Lock Rekeying</h3>
                   <ul className="space-y-3 opacity-90">
                      <li>✓ Cost-effective (cheaper)</li>
                      <li>✓ Faster service</li>
                      <li>✓ Keeps existing hardware</li>
                      <li>✓ Invalidates old keys</li>
                   </ul>
                </Card>
                <Card className="p-8 bg-white/10 border-white/20 text-white text-left">
                   <h3 className="text-xl font-bold mb-4 text-action-orange">Lock Replacement</h3>
                   <ul className="space-y-3 opacity-90">
                      <li>✓ Completely new hardware</li>
                      <li>✓ Security upgrade possible</li>
                      <li>✓ Better for damaged locks</li>
                      <li>✓ Aesthetic change</li>
                   </ul>
                </Card>
             </div>
             <p className="mt-8 text-blue-100 italic">We'll advise which is best for your specific situation.</p>
          </div>

          <div className="max-w-xl mx-auto mb-20">
             <div className="bg-gray-50 p-8 md:p-12 rounded-3xl border border-gray-100 shadow-xl">
               <h3 className="text-2xl font-bold mb-8 text-center">Get a Rekeying Quote</h3>
               <QuoteForm />
             </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: 'Residential Replacement', href: '/services/lock-replacement/residential' },
              { name: 'Commercial Replacement', href: '/services/lock-replacement/commercial' },
              { name: 'Lock Installation', href: '/services/lock-installation' },
              { name: 'Request Quote', href: '/quote' }
            ].map((s) => (
              <Link key={s.name} href={s.href}>
                <Card hover className="p-8 border-gray-100 h-full flex flex-col justify-center">
                  <h3 className="font-bold text-trust-blue mb-2 text-sm">{s.name}</h3>
                  <div className="flex justify-center text-trust-blue mt-4">
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
