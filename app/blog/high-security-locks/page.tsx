import Link from 'next/link';
import { Phone, Clock, Shield, CheckCircle, ArrowRight, Lock } from 'lucide-react';
import Button from '@/components/common/Button';
import Card from '@/components/common/Card';
import QuoteForm from '@/components/forms/QuoteForm';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'High-Security Locks Guide: Are They Worth It? | Bed-Stuy',
  description: 'High-security locks guide: features, benefits, cost. Are they worth it? Bed-Stuy locksmith. Call (718) 568-6597.',
};

export default function HighSecurityLocksBlogPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="bg-gradient-to-br from-trust-blue via-blue-900 to-blue-950 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-blue-500/20 backdrop-blur-sm px-4 py-2 rounded-full text-blue-300 text-sm font-bold mb-6 border border-blue-400/30">
            <Lock size={16} />
            <span>Advanced Protection Guide</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
            High-Security Locks <br />
            <span className="text-action-orange text-3xl md:text-5xl">Are They Worth It?</span>
          </h1>
          <p className="text-xl text-blue-100 mb-10 leading-relaxed max-w-3xl mx-auto">
            Learn about pick-resistant mechanisms, anti-drill technology, and why high-security hardware is the ultimate deterrent for your property.
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
                You want maximum security for your home or business. High-security locks provide advanced protection. They're stronger than standard locks. They're harder to pick. They resist drilling and tampering. They provide peace of mind. Are they worth the cost? For most people, yes.
              </p>
              <p>
                High-security locks use advanced technology. They have reinforced components. They use complex internal designs. They have restricted keys that can't be easily duplicated. They're ideal for homes with valuable items. They're ideal for businesses with sensitive information.
              </p>
              <p>
                Call (718) 568-6597 for <strong>high-security lock installation</strong>. We'll assess your security needs. We'll recommend the right locks. We'll install them professionally. Your home or business will have maximum protection. We serve Bed-Stuy and surrounding areas.
              </p>
            </div>
            
            <div className="bg-gray-50 p-8 md:p-12 rounded-3xl border border-gray-100 shadow-sm">
              <h3 className="text-2xl font-bold mb-8 text-gray-900">High-Security Features</h3>
              <div className="space-y-4">
                {[
                  { title: 'Reinforced Components', desc: 'Hardware materials much stronger than standard grade locks.' },
                  { title: 'Anti-Drill Technology', desc: 'Hardened steel inserts that destroy drill bits.' },
                  { title: 'Anti-Pick Technology', desc: 'Complex pin-within-a-pin or sidebar mechanisms.' },
                  { title: 'Complex Internal Design', desc: 'Advanced internal structures that resist bumping and manipulation.' },
                  { title: 'Restricted Keys', desc: 'Keys that can only be duplicated with owner authorization.' }
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
             <h2 className="text-3xl font-bold mb-8">Cost vs. Benefit</h2>
             <p className="text-xl text-blue-100 mb-10 max-w-3xl mx-auto">
               While the initial cost is higher, the long-term value in protection for your valuable assets and total peace of mind is unmatched.
             </p>
             <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
                <Card className="bg-white/10 border-white/20 p-8">
                  <Shield className="text-action-orange mx-auto mb-4" size={32} />
                  <h4 className="font-bold">Total Deterrent</h4>
                </Card>
                <Card className="bg-white/10 border-white/20 p-8">
                  <Clock className="text-action-orange mx-auto mb-4" size={32} />
                  <h4 className="font-bold">Lifetime Value</h4>
                </Card>
             </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-2xl font-bold mb-8">Related Resources</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-left">
            {[
              { name: 'Security Installation', href: '/services/lock-installation' },
              { name: 'Lock Installation Hub', href: '/services/lock-installation' },
              { name: 'Residential Install', href: '/services/lock-installation' },
              { name: 'Commercial Install', href: '/services/lock-installation' }
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
