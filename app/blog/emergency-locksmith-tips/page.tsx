import Link from 'next/link';
import { Phone, Clock, Shield, CheckCircle, ArrowRight, AlertCircle } from 'lucide-react';
import Button from '@/components/common/Button';
import Card from '@/components/common/Card';
import QuoteForm from '@/components/forms/QuoteForm';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Emergency Locksmith Tips | What to Do in a Lockout | Bed-Stuy',
  description: 'Emergency locksmith tips: what to do when locked out, how to stay calm, when to call for help. Bed-Stuy. Call (718) 568-6597.',
};

export default function EmergencyLocksmithTipsBlogPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="bg-gradient-to-br from-trust-blue via-blue-900 to-blue-950 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-blue-500/20 backdrop-blur-sm px-4 py-2 rounded-full text-blue-300 text-sm font-bold mb-6 border border-blue-400/30">
            <AlertCircle size={16} />
            <span>Crisis Management Tips</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
            Locked Out? <br />
            <span className="text-action-orange text-3xl md:text-5xl">Emergency Locksmith Tips</span>
          </h1>
          <p className="text-xl text-blue-100 mb-10 leading-relaxed max-w-3xl mx-auto">
            Stay calm and follow these expert tips to resolve your lockout emergency quickly, safely, and affordably.
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
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Stay Calm</h2>
              <p>
                You're locked out. Your heart is racing. You're stressed. Take a breath. This happens to everyone. You're not alone. The first step is to stay calm. Panic leads to bad decisions. Clear thinking leads to solutions. You'll get through this.
              </p>
              <p>
                Don't try to break in yourself. You'll damage your car or house. Don't call a tow truck unless absolutely necessary. Call a <strong>locksmith</strong> first. We respond fast. We unlock your car or house safely. We don't damage your property. We charge fair prices. We're available 24/7.
              </p>
              <p>
                Call (718) 568-6597 right now. Tell us your situation. Tell us your location. We'll dispatch a technician immediately. We'll arrive within 20 minutes in most cases. We'll solve your problem. You'll be back inside or on the road.
              </p>
            </div>
            
            <div className="bg-gray-50 p-8 md:p-12 rounded-3xl border border-gray-100 shadow-sm">
              <h3 className="text-2xl font-bold mb-8 text-gray-900">Emergency Tips</h3>
              <div className="space-y-4">
                {[
                  { title: 'Stay Calm', desc: 'Take a deep breath. Panic causes damage and poor decision making.' },
                  { title: 'Don\'t Break In', desc: 'Physical force will almost always cost more in repairs than a professional unlock.' },
                  { title: 'Call a Locksmith', desc: 'Mobile locksmiths are faster and more specialized than towing services.' },
                  { title: 'Have Your ID Ready', desc: 'Legit locksmiths must verify ownership before opening doors or vehicles.' },
                  { title: 'Share Your Exact Location', desc: 'Use landmarks or GPS coordinates to help our technician find you faster.' }
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
             <h2 className="text-3xl font-bold mb-8">We're Here 24/7</h2>
             <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
               Available anytime, day or night. Fast response, professional service, and fair pricing for all emergencies.
             </p>
             <a href="tel:(718)568-6597">
               <Button size="large" className="bg-action-orange hover:bg-orange-600 font-bold px-10 py-4 text-lg">
                 Call (718) 568-6597
               </Button>
             </a>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-2xl font-bold mb-8">Service Links</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 text-left">
            {[
              { name: '24-Hour Service', href: '/services/24-hour-emergency-locksmith' },
              { name: 'Car Lockout', href: '/services/automotive-locksmith' },
              { name: 'Home Lockout', href: '/services/residential-lockout' },
              { name: 'Emergency Repair', href: '/services/lock-repair' },
              { name: 'Contact', href: '/contact' }
            ].map((link) => (
              <Link key={link.name} href={link.href}>
                <Card hover className="p-6 border-gray-100 h-full flex flex-col justify-center">
                  <h3 className="font-bold text-trust-blue text-xs uppercase tracking-wider">{link.name}</h3>
                  <div className="flex justify-end mt-4 text-trust-blue">
                    <ArrowRight size={16} />
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
