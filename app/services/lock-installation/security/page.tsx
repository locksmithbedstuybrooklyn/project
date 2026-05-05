import Link from 'next/link';
import { Phone, Clock, Shield, CheckCircle, ArrowRight, Lock } from 'lucide-react';
import Button from '@/components/common/Button';
import Card from '@/components/common/Card';
import QuoteForm from '@/components/forms/QuoteForm';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'High-Security Lock Installation Bed-Stuy | Advanced Locks',
  description: 'High-security lock installation: advanced protection locks, security systems. Residential and commercial. Bed-Stuy. Call (718) 568-6597.',
};

export default function HighSecurityLockInstallationPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="bg-gradient-to-br from-trust-blue via-blue-900 to-blue-950 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-blue-500/20 backdrop-blur-sm px-4 py-2 rounded-full text-blue-300 text-sm font-bold mb-6 border border-blue-400/30">
            <Lock size={16} />
            <span>Advanced Anti-Tamper Protection</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
            High-Security Lock Installation <br />
            <span className="text-action-orange text-3xl md:text-5xl">Bed-Stuy, Brooklyn</span>
          </h1>
          <p className="text-xl text-blue-100 mb-10 leading-relaxed max-w-3xl mx-auto">
            Maximum protection for your home or business. Advanced pick, drill, and bump resistant locks professionally installed.
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
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Maximum Protection</h2>
              <p>
                You want maximum security for your home or business. High-security locks provide advanced protection against tampering and forced entry. They're stronger than standard locks. They're harder to pick. They provide peace of mind. We install professional-grade high-security locks.
              </p>
              <p>
                High-security locks use advanced technology. They have reinforced components. They resist drilling and picking. They're ideal for homes with valuable items. They're ideal for businesses with sensitive information. We install them properly. We use quality materials. We charge fair prices.
              </p>
              <p>
                Call (718) 568-6597 for <strong>high-security lock installation</strong>. We'll assess your security needs and recommend the right locks. We'll install them professionally. Your home or business will have maximum protection. We serve Bed-Stuy and surrounding areas with expert service.
              </p>
            </div>
            
            <div className="bg-gray-50 p-8 md:p-12 rounded-3xl border border-gray-100 shadow-sm">
              <h3 className="text-2xl font-bold mb-8 text-gray-900">Advanced Lock Features</h3>
              <div className="space-y-4">
                {[
                  { title: 'Reinforced Components', desc: 'Hardware designed to be much stronger than standard locks.' },
                  { title: 'Anti-Drill Technology', desc: 'Hardened steel inserts to resist drilling attacks.' },
                  { title: 'Anti-Pick Technology', desc: 'Complex internal mechanisms to resist picking and bumping.' },
                  { title: 'Advanced Pins', desc: 'Patented pin designs that offer superior protection.' },
                  { title: 'Restricted Keys', desc: 'Keys that cannot be duplicated without your authorization.' }
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
             <h2 className="text-3xl font-bold mb-8">When to Choose High-Security?</h2>
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {['Valuable Items', 'Sensitive Data', 'Business Assets', 'Total Peace of Mind'].map((item, i) => (
                  <Card key={i} className="bg-white/10 border-white/20 p-8">
                    <Shield className="text-action-orange mx-auto mb-4" size={32} />
                    <h4 className="font-bold">{item}</h4>
                  </Card>
                ))}
             </div>
          </div>

          <div className="max-w-xl mx-auto mb-20">
             <div className="bg-gray-50 p-8 md:p-12 rounded-3xl border border-gray-100 shadow-xl">
               <h3 className="text-2xl font-bold mb-8 text-center text-gray-900">High-Security Lock Estimate</h3>
               <QuoteForm />
             </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: 'Residential Installation', href: '/services/lock-installation/residential' },
              { name: 'Commercial Installation', href: '/services/lock-installation/commercial' },
              { name: 'Lock Replacement', href: '/services/lock-replacement' },
              { name: 'Blog: High-Security Guide', href: '/blog/high-security-locks' }
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
