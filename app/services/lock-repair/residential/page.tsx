import Link from 'next/link';
import { Phone, Clock, Shield, CheckCircle, ArrowRight, Tool, Home } from 'lucide-react';
import Button from '@/components/common/Button';
import Card from '@/components/common/Card';
import QuoteForm from '@/components/forms/QuoteForm';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Residential Lock Repair Bed-Stuy | Home Door Lock Fix',
  description: 'Residential lock repair: broken locks, stuck locks, damaged home door locks. Fast repair. Bed-Stuy. Call (718) 568-6597.',
};

export default function ResidentialLockRepairPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="bg-gradient-to-br from-trust-blue via-blue-900 to-blue-950 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-blue-500/20 backdrop-blur-sm px-4 py-2 rounded-full text-blue-300 text-sm font-bold mb-6 border border-blue-400/30">
            <Home size={16} />
            <span>Fast & Reliable Home Lock Fixes</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
            Residential Lock Repair <br />
            <span className="text-action-orange text-3xl md:text-5xl">Bed-Stuy, Brooklyn</span>
          </h1>
          <p className="text-xl text-blue-100 mb-10 leading-relaxed max-w-3xl mx-auto">
            Broken, stuck, or jammed home locks? We repair locks whenever possible to save you money and restore security.
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
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Fix Your Home Locks</h2>
              <p>
                Your home's lock is broken, stuck, or damaged. A broken lock is a security problem and an inconvenience. You need a <strong>locksmith</strong> who can fix it quickly. We repair residential locks instead of replacing them when possible. This saves you money. We use professional techniques and quality materials.
              </p>
              <p>
                We diagnose lock problems accurately. Sometimes we can repair them. Sometimes replacement is necessary. We're honest about what's needed. We charge fair prices. We work 24/7 for emergencies. We respect your home and do quality work.
              </p>
              <p>
                Call (718) 568-6597 for <strong>residential lock repair</strong>. We'll assess your lock and tell you if we can fix it. If repair is possible, we'll do it right. If replacement is needed, we'll recommend the best option. We serve Bed-Stuy and surrounding areas.
              </p>
            </div>
            
            <div className="bg-gray-50 p-8 md:p-12 rounded-3xl border border-gray-100 shadow-sm">
              <h3 className="text-2xl font-bold mb-8 text-gray-900">Common Home Lock Problems</h3>
              <div className="space-y-4">
                {[
                  { title: 'Stuck Lock', desc: 'Won\'t turn or opens with difficulty.' },
                  { title: 'Loose Lock', desc: 'Handle moves but lock doesn\'t engage.' },
                  { title: 'Broken Key', desc: 'Key snapped off inside lock.' },
                  { title: 'Damaged Cylinder', desc: 'Lock cylinder is broken or malfunctioning.' },
                  { title: 'Worn Lock', desc: 'Lock is old and unreliable.' }
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

          <div className="bg-trust-blue text-white p-12 rounded-3xl mb-20 text-center">
             <h2 className="text-3xl font-bold mb-8">Repair or Replace?</h2>
             <p className="text-xl text-blue-100 mb-10 max-w-3xl mx-auto">
               We repair when possible. Saves money. Faster service. Same-day fix. But sometimes replacement is better. We'll advise honestly.
             </p>
             <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  { title: 'Faster', desc: 'Repairing is often quicker than a full install.' },
                  { title: 'Cheaper', desc: 'Saves you the cost of new high-quality hardware.' },
                  { title: 'Same Hardware', desc: 'Keeps your existing door aesthetics intact.' }
                ].map((item, i) => (
                  <Card key={i} className="bg-white/10 border-white/20 p-8">
                     <h4 className="text-xl font-bold mb-2 text-action-orange">{item.title}</h4>
                     <p className="text-blue-100 text-sm">{item.desc}</p>
                  </Card>
                ))}
             </div>
          </div>

          <div className="max-w-xl mx-auto mb-20">
             <div className="bg-gray-50 p-8 md:p-12 rounded-3xl border border-gray-100 shadow-xl">
               <h3 className="text-2xl font-bold mb-8 text-center text-gray-900">Get a Repair Quote</h3>
               <QuoteForm />
             </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: 'Residential Lockout', href: '/services/residential-lockout' },
              { name: 'Home Replacement', href: '/services/lock-replacement/residential' },
              { name: 'Home Installation', href: '/services/lock-installation/residential' },
              { name: '24-Hour Locksmith', href: '/services/24-hour-locksmith' }
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
