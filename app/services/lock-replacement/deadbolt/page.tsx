import Link from 'next/link';
import { Phone, Clock, Shield, CheckCircle, ArrowRight, Lock } from 'lucide-react';
import Button from '@/components/common/Button';
import Card from '@/components/common/Card';
import QuoteForm from '@/components/forms/QuoteForm';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Deadbolt Replacement Bed-Stuy | Install New Deadbolt',
  description: 'Deadbolt replacement and installation. Extra-strong door locks. Residential and commercial. Bed-Stuy. Call (718) 568-6597.',
};

export default function DeadboltReplacementPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="bg-gradient-to-br from-trust-blue via-blue-900 to-blue-950 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-blue-500/20 backdrop-blur-sm px-4 py-2 rounded-full text-blue-300 text-sm font-bold mb-6 border border-blue-400/30">
            <Shield size={16} />
            <span>Maximum Residential & Commercial Security</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
            Deadbolt Replacement <br />
            <span className="text-action-orange text-3xl md:text-5xl">Bed-Stuy, Brooklyn</span>
          </h1>
          <p className="text-xl text-blue-100 mb-10 leading-relaxed max-w-3xl mx-auto">
            Deadbolts are the strongest defense for your doors. We install high-quality deadbolts that work reliably for years.
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
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Extra Security with Deadbolts</h2>
              <p>
                Deadbolts are the strongest residential locks available. They provide extra security compared to standard locks. If you want maximum protection for your home or business, deadbolts are the answer. We install quality deadbolts that work reliably for years. We handle all types of doors. We charge fair prices.
              </p>
              <p>
                Deadbolts are more secure than standard locks because they have a solid metal bolt that extends deep into the door frame. They're harder to force open. They provide peace of mind. We install them properly so they work smoothly and securely. We respect your property and do quality work.
              </p>
              <p>
                Call (718) 568-6597 for <strong>deadbolt installation</strong>. We'll assess your doors and recommend the right deadbolts. We'll install them professionally. Your home or business will have maximum security. We serve Bed-Stuy and surrounding areas with expert service.
              </p>
            </div>
            
            <div className="bg-gray-50 p-8 md:p-12 rounded-3xl border border-gray-100 shadow-sm">
              <h3 className="text-2xl font-bold mb-8 text-gray-900">Deadbolt Types</h3>
              <div className="space-y-4">
                {[
                  { title: 'Single Cylinder Deadbolt', desc: 'Key on outside, knob on inside. Standard for most homes.' },
                  { title: 'Double Cylinder Deadbolt', desc: 'Key on both sides. Extra security for doors near glass.' },
                  { title: 'Smart Deadbolt', desc: 'Keyless entry, remote access, and integration with home security.' },
                  { title: 'High-Security Deadbolt', desc: 'Advanced protection against tampering, picking, and drilling.' }
                ].map((item, i) => (
                  <div key={i} className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm flex items-start gap-4">
                     <div className="text-action-orange mt-1">
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

          <div className="max-w-5xl mx-auto mb-20">
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
                {[
                  'Maximum Security', 'Extra Strong Bolt', 'Reliable Operation', 'Peace of Mind'
                ].map((item, i) => (
                  <Card key={i} className="p-8 border-gray-100 shadow-sm flex flex-col items-center justify-center">
                    <Shield className="text-trust-blue mb-4" size={32} />
                    <h4 className="font-bold text-gray-900 text-sm uppercase tracking-wider">{item}</h4>
                  </Card>
                ))}
             </div>
          </div>

          <div className="bg-gray-50 p-8 md:p-16 rounded-3xl border border-gray-100 text-center">
             <h2 className="text-3xl font-bold mb-8">Need a Deadbolt Quote?</h2>
             <div className="max-w-xl mx-auto text-left">
                <QuoteForm />
             </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: 'Home Replacement', href: '/services/lock-replacement/residential' },
              { name: 'Home Installation', href: '/services/lock-installation/residential' },
              { name: 'High-Security Locks', href: '/services/lock-installation/security' },
              { name: 'Lock Repair', href: '/services/lock-repair' }
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
