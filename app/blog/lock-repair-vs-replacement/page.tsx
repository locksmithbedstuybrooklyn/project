import Link from 'next/link';
import { Phone, Clock, Shield, CheckCircle, ArrowRight, Tool } from 'lucide-react';
import Button from '@/components/common/Button';
import Card from '@/components/common/Card';
import QuoteForm from '@/components/forms/QuoteForm';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Lock Repair vs Replacement: Which is Right? | Bed-Stuy',
  description: 'Lock repair vs replacement: when to repair, when to replace. Cost comparison. Bed-Stuy locksmith. Call (718) 568-6597.',
};

export default function LockRepairVsReplacementBlogPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="bg-gradient-to-br from-trust-blue via-blue-900 to-blue-950 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-blue-500/20 backdrop-blur-sm px-4 py-2 rounded-full text-blue-300 text-sm font-bold mb-6 border border-blue-400/30">
            <Tool size={16} />
            <span>Smart Security Choices</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
            Lock Repair <br />
            <span className="text-action-orange text-3xl md:text-5xl">vs. Replacement</span>
          </h1>
          <p className="text-xl text-blue-100 mb-10 leading-relaxed max-w-3xl mx-auto">
            Should you fix it or swap it? Learn the factors that determine whether a simple repair will suffice or if you need new hardware.
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
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Repair or Replace</h2>
              <p>
                Your lock is broken. Do you repair it or replace it? The answer depends on the situation. Sometimes repair is possible and saves money. Sometimes replacement is necessary. We assess the problem and recommend the best option. We're honest about what's needed.
              </p>
              <p>
                Repair is cheaper and faster when possible. But if the lock is damaged beyond repair, replacement is the only option. If the lock is old and unreliable, replacement is better. If you want better security, replacement is the answer. We'll help you decide.
              </p>
              <p>
                Call (718) 568-6597 for <strong>lock assessment</strong>. We'll diagnose your lock. We'll tell you if repair is possible. We'll recommend the best solution. We'll do the work professionally. We serve Bed-Stuy and surrounding areas.
              </p>
            </div>
            
            <div className="grid grid-cols-1 gap-8">
               <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100 shadow-sm">
                  <h3 className="text-2xl font-bold mb-6 text-gray-900">When to Repair</h3>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3"><CheckCircle className="text-safety-green" size={20} /> <span>Lock is stuck but not damaged</span></li>
                    <li className="flex items-center gap-3"><CheckCircle className="text-safety-green" size={20} /> <span>Lock is loose but functional</span></li>
                    <li className="flex items-center gap-3"><CheckCircle className="text-safety-green" size={20} /> <span>Lock is worn but repairable</span></li>
                    <li className="flex items-center gap-3"><CheckCircle className="text-safety-green" size={20} /> <span>Budget is a primary concern</span></li>
                  </ul>
               </div>
               <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100 shadow-sm">
                  <h3 className="text-2xl font-bold mb-6 text-gray-900">When to Replace</h3>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3"><CheckCircle className="text-action-orange" size={20} /> <span>Lock is damaged beyond repair</span></li>
                    <li className="flex items-center gap-3"><CheckCircle className="text-action-orange" size={20} /> <span>Lock is old and unreliable</span></li>
                    <li className="flex items-center gap-3"><CheckCircle className="text-action-orange" size={20} /> <span>Security upgrade is desired</span></li>
                    <li className="flex items-center gap-3"><CheckCircle className="text-action-orange" size={20} /> <span>Hardware is broken or unsafe</span></li>
                  </ul>
               </div>
            </div>
          </div>

          <div className="bg-gray-900 text-white p-12 rounded-3xl mb-20 text-center">
             <h2 className="text-3xl font-bold mb-8 text-action-orange">We'll Help You Decide</h2>
             <p className="text-xl text-blue-100 mb-10 max-w-3xl mx-auto">
               Get a professional assessment and honest recommendation from our licensed technicians.
             </p>
             <div className="max-w-xl mx-auto text-left">
                <QuoteForm />
             </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-2xl font-bold mb-8">Related Services</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-left">
            {[
              { name: 'Lock Repair Service', href: '/services/lock-repair' },
              { name: 'Lock Replacement Service', href: '/services/lock-replacement' },
              { name: 'Residential Repair', href: '/services/lock-repair' },
              { name: 'Residential Replacement', href: '/services/lock-replacement' }
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
