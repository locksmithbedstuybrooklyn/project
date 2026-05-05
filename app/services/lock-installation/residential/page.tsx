import Link from 'next/link';
import { Phone, Clock, Shield, CheckCircle, ArrowRight, Hammer, Home } from 'lucide-react';
import Button from '@/components/common/Button';
import Card from '@/components/common/Card';
import QuoteForm from '@/components/forms/QuoteForm';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Residential Lock Installation Bed-Stuy | Install Home Locks',
  description: 'Residential lock installation: deadbolts, security locks, smart locks. Professional installation. Bed-Stuy. Call (718) 568-6597.',
};

export default function ResidentialLockInstallationPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="bg-gradient-to-br from-trust-blue via-blue-900 to-blue-950 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-blue-500/20 backdrop-blur-sm px-4 py-2 rounded-full text-blue-300 text-sm font-bold mb-6 border border-blue-400/30">
            <Home size={16} />
            <span>Professional Home Security Installation</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
            Residential Lock Installation <br />
            <span className="text-action-orange text-3xl md:text-5xl">Bed-Stuy, Brooklyn</span>
          </h1>
          <p className="text-xl text-blue-100 mb-10 leading-relaxed max-w-3xl mx-auto">
            Secure your home with professional lock installation. From deadbolts to smart locks, we do it right the first time.
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
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Professional Home Lock Installation</h2>
              <p>
                You need new locks installed in your home. Maybe you're upgrading security. Maybe you're moving in. Maybe you want modern smart locks. We handle professional <strong>residential lock installation</strong>. We install quality locks that work reliably for years. We do it right.
              </p>
              <p>
                We install various residential lock types. Basic locks for simple needs. Deadbolts for extra security. High-security locks for maximum protection. Smart locks for convenience. We install them properly so they work smoothly and securely. We respect your home and do quality work.
              </p>
              <p>
                Call (718) 568-6597 for <strong>residential lock installation</strong>. We'll assess your needs and recommend the right locks. We'll install them professionally. Your home will be secure and protected. We serve Bed-Stuy and surrounding areas with expert service.
              </p>
            </div>
            
            <div className="bg-gray-50 p-8 md:p-12 rounded-3xl border border-gray-100 shadow-sm">
              <h3 className="text-2xl font-bold mb-8 text-gray-900">Installation Services</h3>
              <div className="space-y-4">
                {[
                  { title: 'Deadbolt Installation', desc: 'Adding extra-strong door locks to entry doors.' },
                  { title: 'Security Lock Installation', desc: 'Advanced pick-resistant and bump-proof hardware.' },
                  { title: 'Smart Lock Installation', desc: 'Keyless entry systems for modern home convenience.' },
                  { title: 'Whole-House Security', desc: 'Coordinated lock installation for all entry points.' },
                  { title: 'Interior Lock Installation', desc: 'Privacy locks for bedrooms, bathrooms, and home offices.' }
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20 text-center">
             {[
               { title: 'Proper Alignment', desc: 'Ensures the lock latch and deadbolt engage perfectly.' },
               { title: 'Smooth Operation', desc: 'Keys turn easily without resistance or grinding.' },
               { title: 'Secure Fit', desc: 'Hardware is mounted solidly to the door and frame.' },
               { title: 'Long-lasting', desc: 'Professional installation extends the life of your hardware.' },
               { title: 'Peace of Mind', desc: 'Know your family is protected by expert work.' }
             ].slice(0,3).map((item, i) => (
               <Card key={i} className="p-8 border-gray-100 shadow-sm">
                 <div className="flex justify-center mb-4"><Shield className="text-trust-blue" size={32} /></div>
                 <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                 <p className="text-gray-600 text-sm">{item.desc}</p>
               </Card>
             ))}
          </div>

          <div className="bg-trust-blue text-white p-8 md:p-16 rounded-3xl text-center">
             <h2 className="text-3xl font-bold mb-8">Secure Your Home Today</h2>
             <div className="max-w-xl mx-auto text-left">
                <div className="bg-white/10 p-8 rounded-2xl backdrop-blur-md border border-white/20">
                  <QuoteForm />
                </div>
             </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: 'Home Replacement', href: '/services/lock-replacement/residential' },
              { name: 'Home Repair', href: '/services/lock-repair/residential' },
              { name: 'High-Security Locks', href: '/services/lock-installation/security' },
              { name: 'Lock Rekeying', href: '/services/lock-replacement/rekeying' }
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
