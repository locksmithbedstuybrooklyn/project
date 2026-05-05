import Link from 'next/link';
import { Phone, Clock, Shield, CheckCircle, ArrowRight, Home } from 'lucide-react';
import Button from '@/components/common/Button';
import Card from '@/components/common/Card';
import QuoteForm from '@/components/forms/QuoteForm';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Residential Lock Replacement Bed-Stuy | Home Door Locks',
  description: 'Residential lock replacement: old locks, new security locks, deadbolts. Home door locks. Bed-Stuy. Call (718) 568-6597.',
};

export default function ResidentialLockReplacementPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="bg-gradient-to-br from-trust-blue via-blue-900 to-blue-950 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-blue-500/20 backdrop-blur-sm px-4 py-2 rounded-full text-blue-300 text-sm font-bold mb-6 border border-blue-400/30">
            <Home size={16} />
            <span>Protect Your Home & Family</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
            Residential Lock Replacement <br />
            <span className="text-action-orange text-3xl md:text-5xl">Bed-Stuy, Brooklyn</span>
          </h1>
          <p className="text-xl text-blue-100 mb-10 leading-relaxed max-w-3xl mx-auto">
            Upgrade your home security with quality locks and professional installation. Available 24/7 in Bed-Stuy.
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
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Upgrade Your Home Security</h2>
              <p>
                Your home's locks are old, worn, or you want better security. Replacing residential locks is one of the best security investments you can make. We install quality locks that protect your family and belongings. We handle all types of residential doors. We charge fair prices. We work 24/7 for emergencies.
              </p>
              <p>
                We offer various residential lock options. Basic locks for simple needs. Deadbolts for extra strength. High-security locks for maximum protection. Smart locks for convenience. We install them properly so they work smoothly and securely. We respect your home and do quality work.
              </p>
              <p>
                Call (718) 568-6597 for <strong>residential lock replacement</strong>. We'll assess your needs and recommend the right locks for your home. We'll install them professionally. You'll have secure, reliable locks that protect your family. We serve Bed-Stuy and surrounding areas.
              </p>
            </div>
            
            <div className="bg-gray-50 p-8 md:p-12 rounded-3xl border border-gray-100 shadow-sm">
              <h3 className="text-2xl font-bold mb-8 text-gray-900">Lock Options</h3>
              <div className="space-y-6">
                {[
                  { title: 'Standard Locks', desc: 'Basic door locks for entry doors.' },
                  { title: 'Deadbolts', desc: 'Extra-strong locks for maximum security.' },
                  { title: 'High-Security Locks', desc: 'Advanced locks for premium protection.' },
                  { title: 'Smart Locks', desc: 'Keyless entry, remote access, keypad entry.' },
                  { title: 'Decorative Locks', desc: 'Stylish locks that match your décor.' }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 p-4 bg-white rounded-xl border border-gray-100 shadow-sm">
                    <div className="flex-shrink-0 w-6 h-6 text-trust-blue mt-1">
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
             <h2 className="text-3xl font-bold mb-8">Why Replace Home Locks?</h2>
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  'Security Upgrade', 'Old or Worn Locks', 'Lost or Stolen Keys', 
                  'Moving to New Property', 'Damaged Hardware', 'Peace of Mind'
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 justify-center md:justify-start">
                    <CheckCircle className="text-action-orange" size={20} />
                    <span className="font-semibold">{item}</span>
                  </div>
                ))}
             </div>
          </div>

          <div className="max-w-3xl mx-auto mb-20">
             <div className="bg-gray-50 p-8 md:p-12 rounded-3xl border border-gray-100 shadow-xl text-center">
               <h3 className="text-2xl font-bold mb-8">Request a Free Estimate</h3>
               <QuoteForm />
             </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-2xl font-bold mb-8">Related Residential Services</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: 'Residential Lockout', href: '/services/residential-lockout' },
              { name: 'Lock Repair', href: '/services/lock-repair/residential' },
              { name: 'Lock Installation', href: '/services/lock-installation/residential' },
              { name: 'High-Security Locks', href: '/services/lock-installation/security' }
            ].map((s) => (
              <Link key={s.name} href={s.href}>
                <Card hover className="p-8 border-gray-100 h-full flex flex-col justify-center">
                  <h3 className="font-bold text-trust-blue mb-2">{s.name}</h3>
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
