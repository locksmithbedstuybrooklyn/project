import Link from 'next/link';
import { Phone, Clock, Shield, CheckCircle, ArrowRight, AlertCircle } from 'lucide-react';
import Button from '@/components/common/Button';
import Card from '@/components/common/Card';
import QuoteForm from '@/components/forms/QuoteForm';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Emergency Lock Repair Bed-Stuy | Broken Lock Fix | 24/7',
  description: 'Emergency lock repair: broken locks, stuck locks, damaged locks. 24/7 emergency service. Bed-Stuy. Call (718) 568-6597.',
};

export default function EmergencyLockRepairPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="bg-gradient-to-br from-trust-blue via-blue-900 to-blue-950 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-red-500/20 backdrop-blur-sm px-4 py-2 rounded-full text-red-300 text-sm font-bold mb-6 border border-red-400/30">
            <AlertCircle size={16} />
            <span>24/7 Emergency Dispatch Active</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
            Emergency Lock Repair <br />
            <span className="text-action-orange text-3xl md:text-5xl">Bed-Stuy, Brooklyn</span>
          </h1>
          <p className="text-xl text-blue-100 mb-10 leading-relaxed max-w-3xl mx-auto">
            Broken lock and need it fixed right now? We handle emergency lock repair 24/7 with 20-minute response time.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:(718)568-6597">
              <Button size="large" className="bg-action-orange hover:bg-orange-600 px-10 py-5 text-xl font-black">
                <Phone className="mr-2" size={24} />
                (718) 568-6597
              </Button>
            </a>
            <Link href="/quote">
              <Button variant="secondary" size="large" className="bg-white/10 hover:bg-white/20 text-white border-white/30 px-8 py-5 text-lg">
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
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Broken Lock Emergency</h2>
              <p>
                Your lock is broken and you need it fixed now. Maybe you're locked out. Maybe your lock won't work. Maybe it's a security issue. We handle emergency <strong>lock repair</strong> 24/7. We respond quickly. We fix the problem. We charge fair prices with no emergency surcharges.
              </p>
              <p>
                We understand that lock emergencies happen anytime. That's why we're available nights, weekends, and holidays. We dispatch technicians immediately. We arrive within 20 minutes in most cases. We diagnose the problem and fix it fast. We use professional techniques and quality materials.
              </p>
              <p>
                Call (718) 568-6597 for <strong>emergency lock repair</strong>. We're available anytime. We'll respond quickly. We'll fix your lock. We serve Bed-Stuy and surrounding areas with 24/7 emergency service.
              </p>
            </div>
            
            <div className="bg-gray-50 p-8 md:p-12 rounded-3xl border border-gray-100 shadow-sm">
              <h3 className="text-2xl font-bold mb-8 text-gray-900">Emergency Situations</h3>
              <div className="space-y-4">
                {[
                  { title: 'Locked Out', desc: 'Cannot access your property because the lock has failed or jammed.' },
                  { title: 'Stuck Lock', desc: 'Key is in the lock but it absolutely will not turn or open.' },
                  { title: 'Broken Key', desc: 'Key snapped off inside the cylinder and needs urgent extraction.' },
                  { title: 'Security Compromised', desc: 'Lock is visibly broken or damaged after a break-in attempt.' },
                  { title: 'Jammed Mechanism', desc: 'Lock is physically stuck in the locked or unlocked position.' }
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20 text-center">
             {[
               { title: 'Always Available', desc: '24/7, weekends, holidays' },
               { title: 'No Surcharges', desc: 'Fair, honest pricing' },
               { title: 'Fast Response', desc: '20-minute average arrival' },
               { title: 'Expert Service', desc: 'Licensed and insured team' }
             ].map((item, i) => (
               <Card key={i} className="p-8 border-gray-100 shadow-sm flex flex-col items-center justify-center">
                 <Clock className="text-trust-blue mb-4" size={32} />
                 <h4 className="font-bold text-gray-900 mb-2">{item.title}</h4>
                 <p className="text-gray-500 text-xs">{item.desc}</p>
               </Card>
             ))}
          </div>

          <div className="max-w-xl mx-auto mb-20">
             <div className="bg-gray-900 text-white p-8 md:p-12 rounded-3xl text-center border border-white/10 shadow-2xl">
               <h3 className="text-2xl font-bold mb-8 text-action-orange">Need Help Now?</h3>
               <div className="text-left text-white">
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
              { name: '24-Hour Locksmith', href: '/services/24-hour-locksmith' },
              { name: 'Residential Lockout', href: '/services/residential-lockout' },
              { name: 'Lock Replacement', href: '/services/lock-replacement' },
              { name: 'Lock Installation', href: '/services/lock-installation' }
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
