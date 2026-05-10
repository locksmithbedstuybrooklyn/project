import Link from 'next/link';
import Image from 'next/image';
import { Phone, Clock, Shield, CheckCircle, ArrowRight, Wrench, AlertTriangle, Zap, Building2, Home, Settings, Key, Hammer, Microscope, Droplets, RotateCcw } from 'lucide-react';
import Button from '@/components/common/Button';
import Card from '@/components/common/Card';
import QuoteForm from '@/components/forms/QuoteForm';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Expert Lock Repair Bed-Stuy | Restore Your Security | (718) 568-6597',
  description: 'Fast, professional lock repair in Bed-Stuy. Fixing stuck locks, broken keys, and malfunctioning cylinders. Specialized in historic mortise locks. 24/7 service.',
};

export default function LockRepairPage() {
  const faqs = [
    { q: "Should I repair or replace my lock?", a: "If the lock is high-quality or has historical value (like a vintage mortise lock), repair is often the best and most economical choice. If the lock is a basic, inexpensive model that has been heavily damaged, we may recommend a more secure replacement." },
    { q: "Can you fix a lock if the key is broken off inside?", a: "Yes, we specialize in damage-free broken key extraction. We use professional tools to remove the fragment and then inspect the internal mechanism to ensure it still functions perfectly." },
    { q: "Why is my lock sticking or difficult to turn?", a: "Sticking is usually caused by a buildup of dirt, lack of lubrication, or internal component wear. We clean, lubricate, and realign the mechanism to restore smooth operation." },
    { q: "Can you repair vintage mortise locks found in Bed-Stuy brownstones?", a: "Absolutely. We are experts in repairing and restoring historic mortise locks, preserving their character while ensuring they provide modern-day security." },
    { q: "How long does a typical lock repair take?", a: "Most residential lock repairs are completed within 30-45 minutes. More complex commercial systems or antique restorations may take longer." }
  ];

  const repairProcess = [
    { title: "Diagnosis", desc: "Thorough inspection to identify the root cause of the malfunction.", icon: <Microscope className="text-blue-500" /> },
    { title: "Disassembly", desc: "Careful breakdown of the lock to access internal components.", icon: <Wrench className="text-blue-500" /> },
    { title: "Component Fix", desc: "Repair or replacement of damaged springs, pins, or cylinders.", icon: <Hammer className="text-blue-500" /> },
    { title: "Lubrication", desc: "Deep cleaning and application of professional-grade lubricants.", icon: <Droplets className="text-blue-500" /> },
    { title: "Testing", desc: "Rigorous testing to ensure flawless functionality.", icon: <CheckCircle className="text-blue-500" /> },
    { title: "Adjustment", desc: "Fine-tuning alignment with the strike plate for a perfect fit.", icon: <RotateCcw className="text-blue-500" /> }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center pt-20 overflow-hidden bg-slate-900">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/emergency-locksmith.webp" 
            alt="Expert Lock Repair Services Bed-Stuy"
            fill
            className="object-cover opacity-20 grayscale"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/90 to-transparent"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-blue-600/10 backdrop-blur-md px-4 py-2 rounded-full border border-blue-500/30 mb-8">
              <Wrench className="text-blue-400" size={16} />
              <span className="text-blue-300 text-sm font-bold tracking-widest uppercase italic">Precision Restoration Experts</span>
            </div>
            
            <h1 className="text-5xl md:text-8xl font-black text-white leading-[0.9] mb-8 tracking-tighter uppercase italic">
              Restore Your <br />
              <span className="text-blue-500">Security</span>.
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-300 mb-12 leading-relaxed max-w-2xl font-medium">
              Don't force a malfunctioning lock. Our licensed experts diagnose and repair stuck, jammed, or broken locks—saving you the cost of replacement.
            </p>

            <div className="flex flex-col sm:flex-row gap-6">
              <a href="tel:(718)568-6597">
                <Button size="large" className="bg-blue-600 hover:bg-blue-700 text-white w-full sm:w-auto h-20 px-12 text-2xl font-black shadow-2xl">
                  <Phone className="mr-3" size={28} />
                  (718) 568-6597
                </Button>
              </a>
              <Link href="/quote">
                <Button variant="secondary" size="large" className="bg-white/10 hover:bg-white/20 text-white border-white/20 backdrop-blur-md w-full sm:w-auto h-20 px-12 text-2xl font-black">
                  Request Repair
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Common Problems Grid */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-4 uppercase italic tracking-tighter">Common Issues We Resolve</h2>
            <p className="text-slate-500 text-lg">Professional solutions for every lock failure.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Stuck or Jammed", icon: <AlertTriangle size={40} className="text-orange-500" />, desc: "Internal dirt or misalignment preventing the bolt from moving." },
              { title: "Broken Key Removal", icon: <Key size={40} className="text-blue-500" />, desc: "Expert extraction of snapped keys without damaging the cylinder." },
              { title: "Spinning Cylinder", icon: <RotateCcw size={40} className="text-blue-500" />, desc: "Broken internal cam or tailpiece rendering the lock useless." },
              { title: "Loose Hardware", icon: <Settings size={40} className="text-blue-500" />, desc: "Worn components or improper initial installation issues." },
              { title: "Difficulty Turning", icon: <Wrench size={40} className="text-blue-500" />, desc: "Misaligned pins or internal corrosion needing deep cleaning." },
              { title: "Latch Problems", icon: <Shield size={40} className="text-blue-500" />, desc: "Latch bolt failing to engage with the strike plate securely." }
            ].map((item, i) => (
              <Card key={i} className="p-10 border-slate-100 hover:border-blue-500 transition-all group rounded-[2rem]">
                <div className="mb-6 group-hover:scale-110 transition-transform">{item.icon}</div>
                <h4 className="text-xl font-bold text-slate-900 mb-4 uppercase italic tracking-tight">{item.title}</h4>
                <p className="text-slate-600 leading-relaxed">{item.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Residential & Commercial Focus */}
      <section className="py-24 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-blue-100 px-4 py-2 rounded-full mb-8">
                <Home className="text-blue-600" size={20} />
                <span className="text-blue-700 text-sm font-black uppercase italic">Home & Brownstone Expertise</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-8 leading-tight uppercase italic tracking-tighter">
                Residential <br /> <span className="text-blue-600">Restoration</span>
              </h2>
              <p className="text-lg text-slate-600 mb-10 leading-relaxed">
                We specialize in the intricate repair of classic mortise locks common in Bed-Stuy brownstones, preserving their historical integrity while restoring modern security standards.
              </p>
              <div className="space-y-6 mb-12">
                {[
                  "Historic Mortise Lock Specialist",
                  "Deadbolt & Door Knob Realignment",
                  "Sliding & Patio Door Lock Repair",
                  "Broken Component Replacement"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <CheckCircle className="text-blue-500" size={24} />
                    <span className="text-lg font-bold text-slate-800 italic uppercase tracking-tight">{item}</span>
                  </div>
                ))}
              </div>
              <Link href="/quote">
                <Button size="large" className="bg-slate-900 text-white hover:bg-black h-16 px-10 font-bold">
                  Request Home Repair
                </Button>
              </Link>
            </div>

            <div className="bg-slate-900 text-white rounded-[3rem] p-12 md:p-16 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-12 opacity-5">
                <Building2 size={200} />
              </div>
              <div className="relative z-10">
                <Building2 className="text-blue-400 mb-8" size={48} />
                <h3 className="text-3xl font-black mb-8 italic uppercase tracking-tighter">Commercial Systems</h3>
                <p className="text-slate-400 mb-10 text-lg">Malfunctioning commercial locks disrupt operations. We provide prompt, reliable repairs for storefronts and offices.</p>
                <div className="space-y-4 mb-12">
                  {[
                    "Panic Bar & Exit Device Compliance",
                    "Storefront Glass Door Hardware",
                    "Access Control Component Repair",
                    "Master Key System Maintenance"
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <CheckCircle className="text-blue-400" size={20} />
                      <span className="font-bold italic uppercase tracking-tight">{item}</span>
                    </div>
                  ))}
                </div>
                <Link href="/booking">
                  <Button size="large" className="bg-blue-600 hover:bg-blue-700 text-white h-16 w-full font-bold">
                    Schedule Commercial Service
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-4 italic tracking-tighter uppercase">Our Repair Process</h2>
            <p className="text-slate-500 text-lg">Meticulous steps to ensure a lasting fix.</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-12">
            {repairProcess.map((step, i) => (
              <div key={i} className="p-10 bg-slate-50 rounded-[2rem] border border-slate-100 hover:border-blue-500 transition-all group">
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-8 shadow-sm group-hover:scale-110 transition-transform">
                  {step.icon}
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-2 uppercase italic tracking-tight">{step.title}</h4>
                <p className="text-slate-500 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-slate-50 border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-16 text-center italic uppercase tracking-tight">Lock Repair FAQ</h2>
          <div className="space-y-6">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-white border border-slate-200 rounded-2xl p-10 shadow-sm hover:shadow-md transition-all">
                <h3 className="text-xl font-bold text-slate-900 mb-4 italic">{faq.q}</h3>
                <p className="text-slate-600 leading-relaxed border-l-4 border-blue-500 pl-6 font-medium">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-blue-600 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl md:text-7xl font-black mb-8 leading-tight tracking-tighter uppercase italic">Get Your Locks Working Again</h2>
          <p className="text-xl md:text-2xl text-blue-100 mb-12 max-w-2xl mx-auto font-medium">
            Don't leave your security to chance with a failing lock. Call Bed-Stuy's repair experts for an immediate fix.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a href="tel:(718)568-6597">
              <Button size="large" className="bg-white text-blue-600 hover:bg-slate-50 h-20 px-12 text-2xl font-black shadow-2xl transform hover:scale-105 active:scale-95 transition-all">
                (718) 568-6597
              </Button>
            </a>
          </div>
          <p className="mt-8 text-blue-200 font-bold tracking-widest uppercase text-sm">24/7 Response • 20-Min Arrival</p>
        </div>
      </section>

      {/* Related Links */}
      <section className="py-16 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex flex-wrap justify-center gap-10">
            {[
              { name: "Lock Installation", href: "/services/lock-installation" },
              { name: "Lock Replacement", href: "/services/lock-replacement" },
              { name: "Rekeying Services", href: "/services/lock-rekeying" },
              { name: "Emergency Locksmith", href: "/services/24-hour-emergency-locksmith" }
            ].map((link, i) => (
              <Link key={i} href={link.href} className="text-blue-600 font-bold hover:text-blue-800 flex items-center gap-2">
                {link.name} <ArrowRight size={16} />
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
