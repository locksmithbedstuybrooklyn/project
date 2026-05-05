import Link from 'next/link';
import { Phone, Clock, Shield, CheckCircle, ArrowRight, RotateCw } from 'lucide-react';
import Button from '@/components/common/Button';
import Card from '@/components/common/Card';
import QuoteForm from '@/components/forms/QuoteForm';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Lock Replacement Bed-Stuy | Door Lock Change | New Locks',
  description: 'Lock replacement service: old locks, new security locks, deadbolts. Residential and commercial. Bed-Stuy. Call (718) 568-6597.',
};

export default function LockReplacementPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="bg-gradient-to-br from-trust-blue via-blue-900 to-blue-950 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-blue-500/20 backdrop-blur-sm px-4 py-2 rounded-full text-blue-300 text-sm font-bold mb-6 border border-blue-400/30">
            <RotateCw size={16} />
            <span>Professional Lock Upgrades & Changes</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
            Lock Replacement <br />
            <span className="text-action-orange text-3xl md:text-5xl">Bed-Stuy, Brooklyn</span>
          </h1>
          <p className="text-xl text-blue-100 mb-10 leading-relaxed max-w-3xl mx-auto">
            Time for new locks? We handle residential and commercial lock replacement with quality hardware and professional installation.
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
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Time for New Locks</h2>
              <p>
                Your locks are old, worn, or broken. Maybe you lost keys. Maybe you moved into a new place. Maybe you want better security. Whatever the reason, you need new locks. We handle residential and commercial <strong>lock replacement</strong>. We install quality locks that work reliably.
              </p>
              <p>
                We offer various lock types. Basic locks for simple needs. High-security locks for maximum protection. Deadbolts for extra strength. We install them properly. We make sure they work smoothly. We charge fair prices. We're available 24/7 for emergencies.
              </p>
              <p>
                Call (718) 568-6597 for <strong>lock replacement</strong>. We'll assess your needs and recommend the right locks. We'll install them professionally. You'll have secure, reliable locks that work for years. We serve Bed-Stuy and surrounding areas.
              </p>
            </div>
            
            <div className="bg-gray-50 p-8 md:p-12 rounded-3xl border border-gray-100">
              <h3 className="text-2xl font-bold mb-8 text-gray-900">Lock Types We Install</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  { title: 'Standard Locks', desc: 'Reliable basic door locks.' },
                  { title: 'Deadbolts', desc: 'Extra-strong security locks.' },
                  { title: 'High-Security', desc: 'Advanced pick-resistant locks.' },
                  { title: 'Smart Locks', desc: 'Keyless entry convenience.' },
                  { title: 'Commercial', desc: 'Heavy-duty business locks.' },
                  { title: 'Master Key', desc: 'One key for multiple locks.' }
                ].map((item, i) => (
                  <div key={i} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                    <h4 className="font-bold text-gray-900 mb-2">{item.title}</h4>
                    <p className="text-xs text-gray-600">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {[
              { title: 'Security Upgrade', icon: <Shield className="text-trust-blue" size={32} /> },
              { title: 'New Property', icon: <CheckCircle className="text-trust-blue" size={32} /> },
              { title: 'Damaged Locks', icon: <Phone className="text-trust-blue" size={32} /> }
            ].map((item, i) => (
              <Card key={i} className="p-8 text-center border-gray-100 shadow-sm">
                <div className="flex justify-center mb-4">{item.icon}</div>
                <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">Peace of mind with professional installation and quality hardware.</p>
              </Card>
            ))}
          </div>

          <div className="bg-gray-900 text-white p-12 rounded-3xl">
             <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center text-center lg:text-left">
                <div>
                   <h2 className="text-3xl font-bold mb-6">Why Replace Locks?</h2>
                   <p className="text-lg text-blue-100 mb-8 max-w-xl">
                     Upgrading your security is an investment in your safety. Old locks are easier to bypass. New locks provide peace of mind.
                   </p>
                   <ul className="space-y-4 inline-block text-left">
                      {['Security upgrade', 'Lost or stolen keys', 'Moved to new home/office', 'Worn out hardware'].map((item, i) => (
                        <li key={i} className="flex items-center gap-3">
                          <CheckCircle className="text-action-orange" size={20} />
                          <span className="font-semibold">{item}</span>
                        </li>
                      ))}
                   </ul>
                </div>
                <div className="bg-white/10 p-8 rounded-2xl backdrop-blur-md border border-white/20">
                   <h3 className="text-xl font-bold mb-6">Get a Lock Estimate</h3>
                   <QuoteForm />
                </div>
             </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {[
              { name: 'Lock Repair', href: '/services/lock-repair' },
              { name: 'Lock Installation', href: '/services/lock-installation' },
              { name: 'Lock Rekeying', href: '/services/lock-replacement/rekeying' },
              { name: 'Residential Lockout', href: '/services/residential-lockout' }
            ].map((s) => (
              <Link key={s.name} href={s.href}>
                <Card hover className="p-8 border-gray-100 h-full flex flex-col justify-center">
                  <h3 className="font-bold text-trust-blue mb-4">{s.name}</h3>
                  <div className="flex justify-center text-trust-blue">
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
