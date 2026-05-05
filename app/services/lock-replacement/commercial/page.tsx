import Link from 'next/link';
import { Phone, Clock, Shield, CheckCircle, ArrowRight, Building } from 'lucide-react';
import Button from '@/components/common/Button';
import Card from '@/components/common/Card';
import QuoteForm from '@/components/forms/QuoteForm';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Commercial Lock Replacement Bed-Stuy | Business Locks',
  description: 'Commercial lock replacement: office locks, business security locks. Professional installation. Bed-Stuy. Call (718) 568-6597.',
};

export default function CommercialLockReplacementPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="bg-gradient-to-br from-trust-blue via-blue-900 to-blue-950 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-blue-500/20 backdrop-blur-sm px-4 py-2 rounded-full text-blue-300 text-sm font-bold mb-6 border border-blue-400/30">
            <Building size={16} />
            <span>Business-Grade Security Solutions</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
            Commercial Lock Replacement <br />
            <span className="text-action-orange text-3xl md:text-5xl">Bed-Stuy, Brooklyn</span>
          </h1>
          <p className="text-xl text-blue-100 mb-10 leading-relaxed max-w-3xl mx-auto">
            Secure your business with professional-grade locks and access control systems. Expert installation and fair pricing.
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
                Your business needs reliable locks. Maybe you're upgrading security. Maybe you're moving to a new office. Maybe your locks are old or damaged. We handle professional <strong>commercial lock replacement</strong>. We install business-grade locks that protect your assets and employees.
              </p>
              <p>
                We offer commercial lock solutions. Standard office locks. High-security locks for sensitive areas. Access control systems for multiple doors. We install them properly and professionally. We understand business security needs. We work quickly to minimize disruption. We charge fair prices.
              </p>
              <p>
                Call (718) 568-6597 for <strong>commercial lock replacement</strong>. We'll assess your business security needs and recommend the right locks. We'll install them professionally. Your business will be secure and protected. We serve Bed-Stuy and surrounding areas with expert service.
              </p>
            </div>
            
            <div className="bg-gray-50 p-8 md:p-12 rounded-3xl border border-gray-100 shadow-sm">
              <h3 className="text-2xl font-bold mb-8 text-gray-900">Commercial Solutions</h3>
              <div className="space-y-6">
                {[
                  { title: 'Office Locks', desc: 'Standard business-grade locks for office doors.' },
                  { title: 'High-Security Locks', desc: 'Advanced protection for sensitive or high-value areas.' },
                  { title: 'Access Control', desc: 'Electronic locks and card readers for multiple doors.' },
                  { title: 'Master Key Systems', desc: 'Convenient one-key access for management.' },
                  { title: 'Emergency Exit Locks', desc: 'Panic bars and exit hardware compliant with fire codes.' }
                ].map((item, i) => (
                  <div key={i} className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                    <h4 className="font-bold text-gray-900 mb-2">{item.title}</h4>
                    <p className="text-gray-600 text-sm">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-gray-900 text-white p-12 rounded-3xl mb-20 text-center md:text-left">
             <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div>
                   <h2 className="text-3xl font-bold mb-6">Why Commercial Replacement?</h2>
                   <ul className="space-y-4">
                      {[
                        'Security upgrade', 'Old or malfunctioning locks', 'Employee turnover / key tracking', 
                        'Moving to new commercial property', 'Damaged or vandalized hardware', 'Business-wide protection'
                      ].map((item, i) => (
                        <li key={i} className="flex items-center gap-3">
                          <CheckCircle className="text-action-orange" size={20} />
                          <span className="font-semibold">{item}</span>
                        </li>
                      ))}
                   </ul>
                </div>
                <div className="bg-white/10 p-8 rounded-2xl backdrop-blur-md border border-white/20">
                   <h3 className="text-xl font-bold mb-6 text-center">Business Security Quote</h3>
                   <QuoteForm />
                </div>
             </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-2xl font-bold mb-8">Related Business Services</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: 'Commercial Locksmith', href: '/services/commercial-locksmith' },
              { name: 'Lock Repair', href: '/services/lock-repair/commercial' },
              { name: 'Lock Installation', href: '/services/lock-installation/commercial' },
              { name: 'Access Control', href: '/services/lock-installation/security' }
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
