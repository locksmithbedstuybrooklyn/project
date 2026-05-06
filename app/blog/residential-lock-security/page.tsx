import Link from 'next/link';
import { Phone, Clock, Shield, CheckCircle, ArrowRight, Home } from 'lucide-react';
import Button from '@/components/common/Button';
import Card from '@/components/common/Card';
import QuoteForm from '@/components/forms/QuoteForm';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Home Lock Security: What You Need to Know | Bed-Stuy',
  description: 'Home lock security guide: types of locks, security tips, upgrades. Bed-Stuy locksmith. Call (718) 568-6597.',
};

export default function ResidentialLockSecurityBlogPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="bg-gradient-to-br from-trust-blue via-blue-900 to-blue-950 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-blue-500/20 backdrop-blur-sm px-4 py-2 rounded-full text-blue-300 text-sm font-bold mb-6 border border-blue-400/30">
            <Home size={16} />
            <span>Home Safety Essentials</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
            Home Lock Security <br />
            <span className="text-action-orange text-3xl md:text-5xl">What You Need to Know</span>
          </h1>
          <p className="text-xl text-blue-100 mb-10 leading-relaxed max-w-3xl mx-auto">
            Protect your family and property with the right locks and smart security habits. expert advice from your local Bed-Stuy locksmith.
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
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Protect Your Home</h2>
              <p>
                Your home's security starts with good locks. Broken locks, old locks, or weak locks put your family at risk. You need strong, reliable locks. We install quality residential locks. We offer various options. Basic locks for simple needs. Deadbolts for extra security. High-security locks for maximum protection.
              </p>
              <p>
                Good locks are just the beginning. You also need good habits. Lock your doors when you leave. Lock your doors at night. Don't hide keys under doormats or flowerpots. Use a keypad or smart lock for convenience. These simple steps significantly improve your home security.
              </p>
              <p>
                Call (718) 568-6597 for <strong>residential lock security</strong>. We'll assess your home's security. We'll recommend the right locks. We'll install them professionally. Your family will be safe and protected. We serve Bed-Stuy and surrounding areas.
              </p>
            </div>
            
            <div className="bg-gray-50 p-8 md:p-12 rounded-3xl border border-gray-100 shadow-sm">
              <h3 className="text-2xl font-bold mb-8 text-gray-900">Lock Security Tips</h3>
              <div className="space-y-4">
                {[
                  { title: 'Install Deadbolts', desc: 'The most effective physical upgrade for entry doors.' },
                  { title: 'Use High-Security Locks', desc: 'Protection against picking, drilling, and unauthorized key duplication.' },
                  { title: 'Lock Doors Always', desc: 'Habitual locking when leaving and at night is the best defense.' },
                  { title: 'Don\'t Hide Keys', desc: 'Never hide keys in obvious places like under mats or in pots.' },
                  { title: 'Use Smart Locks', desc: 'Keypad or remote access for modern security and convenience.' }
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

          <div className="bg-gray-900 text-white p-12 rounded-3xl mb-20 text-center">
             <h2 className="text-3xl font-bold mb-8">Professional Installation Matters</h2>
             <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
               Proper alignment, secure fit, and smooth operation. Professional installation ensures your locks actually protect you.
             </p>
             <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                {['Proper Alignment', 'Smooth Operation', 'Secure Fit', 'Long-lasting'].map((item, i) => (
                  <div key={i} className="bg-white/10 p-6 rounded-2xl border border-white/20">
                    <Shield className="text-action-orange mx-auto mb-4" size={32} />
                    <h4 className="font-bold text-sm uppercase tracking-widest">{item}</h4>
                  </div>
                ))}
             </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-2xl font-bold mb-8">Related Services</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-left">
            {[
              { name: 'Lock Installation Service', href: '/services/lock-installation' },
              { name: 'Home Lock Replacement', href: '/services/lock-replacement' },
              { name: 'High-Security Locks', href: '/services/lock-installation' },
              { name: 'Deadbolt Installation', href: '/services/lock-replacement' }
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
