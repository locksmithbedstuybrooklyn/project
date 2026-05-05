import Link from 'next/link';
import { Phone, Clock, Shield, CheckCircle, ArrowRight, Building } from 'lucide-react';
import Button from '@/components/common/Button';
import Card from '@/components/common/Card';
import QuoteForm from '@/components/forms/QuoteForm';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Commercial Lock Installation Bed-Stuy | Install Business Locks',
  description: 'Commercial lock installation: office locks, business security locks, access control. Professional installation. Bed-Stuy. Call (718) 568-6597.',
};

export default function CommercialLockInstallationPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="bg-gradient-to-br from-trust-blue via-blue-900 to-blue-950 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-blue-500/20 backdrop-blur-sm px-4 py-2 rounded-full text-blue-300 text-sm font-bold mb-6 border border-blue-400/30">
            <Building size={16} />
            <span>Heavy-Duty Commercial Security Installation</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
            Commercial Lock Installation <br />
            <span className="text-action-orange text-3xl md:text-5xl">Bed-Stuy, Brooklyn</span>
          </h1>
          <p className="text-xl text-blue-100 mb-10 leading-relaxed max-w-3xl mx-auto">
            Protect your business assets with professional-grade lock installation. Expert solutions for offices, retail, and industrial spaces.
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
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Secure Your Business</h2>
              <p>
                Your business needs professional lock installation. Maybe you're opening a new office. Maybe you're upgrading security. Maybe you need access control systems. We handle professional <strong>commercial lock installation</strong>. We install business-grade locks that protect your assets and employees.
              </p>
              <p>
                We offer commercial lock solutions. Standard office locks. High-security locks for sensitive areas. Access control systems for multiple doors. Master key systems for convenience. We install them properly and professionally. We understand business security needs. We minimize disruption to your operations.
              </p>
              <p>
                Call (718) 568-6597 for <strong>commercial lock installation</strong>. We'll assess your business security needs and recommend the right locks. We'll install them professionally. Your business will be secure and protected. We serve Bed-Stuy and surrounding areas with expert service.
              </p>
            </div>
            
            <div className="bg-gray-50 p-8 md:p-12 rounded-3xl border border-gray-100 shadow-sm">
              <h3 className="text-2xl font-bold mb-8 text-gray-900">Commercial Installation Services</h3>
              <div className="space-y-4">
                {[
                  { title: 'Office Lock Installation', desc: 'Heavy-duty hardware for high-traffic office environments.' },
                  { title: 'High-Security Locks', desc: 'Pick, drill, and bump resistant cylinders for sensitive areas.' },
                  { title: 'Access Control Systems', desc: 'Electronic and keyless entry for business door management.' },
                  { title: 'Master Key Systems', desc: 'One key to rule them all — custom hierarchy for your building.' },
                  { title: 'Emergency Exit Hardware', desc: 'Panic bars and exit devices compliant with NYC fire codes.' }
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
               { title: 'Proper Alignment', icon: <CheckCircle className="text-safety-green" size={32} /> },
               { title: 'Smooth Operation', icon: <CheckCircle className="text-safety-green" size={32} /> },
               { title: 'Secure Fit', icon: <Shield className="text-trust-blue" size={32} /> },
               { title: 'Long-lasting', icon: <Clock className="text-trust-blue" size={32} /> },
               { title: 'Business Protection', icon: <Shield className="text-safety-green" size={32} /> }
             ].slice(0,3).map((item, i) => (
               <Card key={i} className="p-8 border-gray-100 shadow-sm">
                 <div className="flex justify-center mb-4">{item.icon}</div>
                 <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                 <p className="text-gray-600 text-sm">Our expert technicians ensure your business security hardware is installed perfectly.</p>
               </Card>
             ))}
          </div>

          <div className="bg-gray-900 text-white p-8 md:p-16 rounded-3xl text-center border border-white/10 shadow-2xl">
             <h2 className="text-3xl font-bold mb-8">Professional Commercial Quote</h2>
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
              { name: 'Commercial Locksmith', href: '/services/commercial-locksmith' },
              { name: 'Business Replacement', href: '/services/lock-replacement/commercial' },
              { name: 'Business Repair', href: '/services/lock-repair/commercial' },
              { name: 'High-Security Locks', href: '/services/lock-installation/security' }
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
