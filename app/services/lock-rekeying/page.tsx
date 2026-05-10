import Link from 'next/link';
import Image from 'next/image';
import { Phone, Clock, Shield, CheckCircle, ArrowRight, RotateCcw, Key, Building2, Home, DollarSign, Zap, ListChecks, UserPlus, Users, Briefcase } from 'lucide-react';
import Button from '@/components/common/Button';
import Card from '@/components/common/Card';
import QuoteForm from '@/components/forms/QuoteForm';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Professional Lock Rekeying Bed-Stuy | 50% Cheaper Than Replacement',
  description: 'Change your keys without replacing your locks. Expert rekeying for residential & commercial properties in Bed-Stuy. 24/7 service. Call (718) 568-6597.',
};

export default function LockRekeyingPage() {
  const faqs = [
    { q: "What is the difference between rekeying and lock replacement?", a: "Rekeying involves changing the internal pins of your existing lock so that only a new key will work. Replacement involves removing the entire hardware and installing a new unit. Rekeying is typically 50% cheaper and ideal if your current hardware is in good condition." },
    { q: "How long does it take to rekey a lock?", a: "Standard residential rekeying takes about 15-20 minutes per cylinder. A full house with 4-5 locks can usually be completed in under an hour." },
    { q: "Can all locks be rekeyed to the same key?", a: "Yes, as long as the locks are from the same manufacturer or use the same 'keyway' (the same brand/style of key). This is a great way to simplify your keychain." },
    { q: "Should I rekey my locks if I move into a new apartment?", a: "Absolutely. You can never be sure who has copies of the old keys. Rekeying ensures that previous tenants, contractors, or owners no longer have access to your home." },
    { q: "Do you offer commercial rekeying for master key systems?", a: "Yes, we specialize in designing and implementing master key systems for offices and retail spaces, allowing granular access control for employees and management." }
  ];

  const rekeyingProcess = [
    { title: "Assessment", desc: "Inspection of your current locks to ensure they are suitable for rekeying." },
    { title: "Disassembly", desc: "The lock cylinder is carefully removed and disassembled by our expert." },
    { title: "Pin Replacement", desc: "Internal pins are replaced with new ones matching your fresh key." },
    { title: "Reassembly", desc: "The cylinder is reinserted and lubricated for long-term smooth operation." },
    { title: "Testing", desc: "Rigorous testing of the new key to ensure 100% reliable functionality." }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center pt-20 overflow-hidden bg-slate-900">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/emergency-locksmith.webp" 
            alt="Professional Lock Rekeying Bed-Stuy"
            fill
            className="object-cover opacity-20 grayscale"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/90 to-transparent"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-blue-600/10 backdrop-blur-md px-4 py-2 rounded-full border border-blue-500/30 mb-8">
              <DollarSign className="text-blue-400" size={16} />
              <span className="text-blue-300 text-sm font-bold tracking-widest uppercase italic">Cost-Effective Security Resets</span>
            </div>
            
            <h1 className="text-5xl md:text-8xl font-black text-white leading-[0.9] mb-8 tracking-tighter uppercase italic">
              New Keys. <br />
              <span className="text-blue-500">Same Locks.</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-300 mb-10 leading-relaxed max-w-2xl font-medium">
              Ensure you're the only one with access. Professional rekeying is 50% cheaper than replacement—perfect for new homeowners, landlords, and businesses.
            </p>

            <div className="flex flex-col sm:flex-row gap-5">
              <a href="tel:(718)568-6597">
                <Button size="large" className="bg-blue-600 hover:bg-blue-700 text-white w-full sm:w-auto h-20 px-12 text-2xl font-black shadow-2xl">
                  <Phone className="mr-3" size={28} />
                  (718) 568-6597
                </Button>
              </a>
              <Link href="/quote">
                <Button variant="secondary" size="large" className="bg-white/10 hover:bg-white/20 text-white border-white/20 backdrop-blur-md w-full sm:w-auto h-20 px-12 text-2xl font-black">
                  Request Quote
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-4 uppercase italic tracking-tighter">Why Choose Rekeying?</h2>
            <p className="text-slate-500 text-lg">Smart security management for modern Brooklyn living.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Cost-Effective", icon: <DollarSign size={40} className="text-blue-600" />, desc: "Significantly more affordable than replacing all your locks, especially for multiple doors." },
              { title: "Immediate Security", icon: <Shield size={40} className="text-blue-600" />, desc: "Instantly invalidates old or lost keys, ensuring unauthorized entry is impossible." },
              { title: "Key Consolidation", icon: <Key size={40} className="text-blue-600" />, desc: "Option to have multiple locks operate on a single key for ultimate convenience." },
              { title: "Hardware Integrity", icon: <RotateCcw size={40} className="text-blue-600" />, desc: "Maintain your existing lock hardware and historical aesthetic while updating security." },
              { title: "Tenant Turnover", icon: <Users size={40} className="text-blue-600" />, desc: "Essential for landlords to ensure security between occupants without hardware waste." },
              { title: "Quick Service", icon: <Zap size={40} className="text-blue-600" />, desc: "Faster than full lock replacement, getting your property secured in minutes, not hours." }
            ].map((item, i) => (
              <Card key={i} className="p-10 border-slate-100 hover:border-blue-500 transition-all group rounded-[2.5rem] bg-slate-50/30">
                <div className="mb-6 group-hover:scale-110 transition-transform">{item.icon}</div>
                <h4 className="text-xl font-bold text-slate-900 mb-4 uppercase italic tracking-tight">{item.title}</h4>
                <p className="text-slate-600 leading-relaxed font-medium">{item.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Residential & Commercial Scenarios */}
      <section className="py-24 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-blue-100 px-4 py-2 rounded-full mb-8">
                <Home className="text-blue-600" size={20} />
                <span className="text-blue-700 text-sm font-black uppercase italic">Homeowner Peace of Mind</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-8 leading-tight uppercase italic tracking-tighter">
                Residential <br /> <span className="text-blue-600">Rekeying</span>
              </h2>
              <p className="text-lg text-slate-600 mb-10 leading-relaxed font-medium">
                Whether you've just purchased a home, had a roommate move out, or lost your keys, our residential rekeying is fast and reliable. We can rekey deadbolts, knobs, and historic mortise locks.
              </p>
              <div className="grid sm:grid-cols-2 gap-6 mb-12">
                {[
                  { title: "New Property", icon: <UserPlus size={24} className="text-blue-500" /> },
                  { title: "Lost Keys", icon: <Key size={24} className="text-blue-500" /> },
                  { title: "Roommate Change", icon: <Users size={24} className="text-blue-500" /> },
                  { title: "Key Consolidation", icon: <RotateCcw size={24} className="text-blue-500" /> }
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 bg-white p-4 rounded-xl border border-slate-200">
                    {item.icon}
                    <span className="font-bold text-slate-800 italic uppercase tracking-tight text-sm">{item.title}</span>
                  </div>
                ))}
              </div>
              <Link href="/quote">
                <Button size="large" className="bg-slate-900 text-white hover:bg-black h-16 px-10 font-bold uppercase italic">Rekey My Home</Button>
              </Link>
            </div>

            <div className="bg-slate-900 text-white rounded-[3rem] p-12 md:p-16 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-12 opacity-5">
                <Building2 size={200} />
              </div>
              <div className="relative z-10">
                <Briefcase className="text-blue-400 mb-8" size={48} />
                <h3 className="text-3xl font-black mb-8 italic uppercase tracking-tighter">Commercial Systems</h3>
                <p className="text-slate-400 mb-10 text-lg font-medium">Manage your business security effectively. Rekeying is essential for employee turnover and master key system modifications.</p>
                <div className="space-y-4 mb-12">
                  {[
                    "Employee Access Control",
                    "Master Key System Integration",
                    "Property Management Turnover",
                    "Restricted Keyway Systems"
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <CheckCircle className="text-blue-400" size={20} />
                      <span className="font-bold italic uppercase tracking-tight text-slate-200">{item}</span>
                    </div>
                  ))}
                </div>
                <Link href="/booking">
                  <Button size="large" className="bg-blue-600 hover:bg-blue-700 text-white h-16 w-full font-bold uppercase italic border-0">Commercial Appointment</Button>
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
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-4 italic tracking-tighter uppercase underline decoration-blue-500 underline-offset-8">Our Meticulous Process</h2>
            <p className="text-slate-500 text-lg italic">Precision and expertise in every cylinder.</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-8">
            {rekeyingProcess.map((step, i) => (
              <div key={i} className="text-center group">
                <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                  <span className="font-black text-2xl italic">0{i + 1}</span>
                </div>
                <h4 className="text-lg font-black text-slate-900 mb-2 uppercase italic tracking-tight">{step.title}</h4>
                <p className="text-slate-500 text-sm font-medium leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-slate-50 border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-16 text-center italic uppercase tracking-tight">Rekeying FAQ</h2>
          <div className="space-y-6">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-white border border-slate-200 rounded-2xl p-10 shadow-sm hover:shadow-md transition-all">
                <h3 className="text-xl font-bold text-slate-900 mb-4 italic leading-tight">{faq.q}</h3>
                <p className="text-slate-600 leading-relaxed border-l-4 border-blue-500 pl-6 font-medium">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-blue-600 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl md:text-7xl font-black mb-8 leading-tight tracking-tighter uppercase italic">Secure Your Home for 50% Less</h2>
          <p className="text-xl md:text-2xl text-blue-100 mb-12 max-w-2xl mx-auto font-medium">
            Professional rekeying is the smartest way to reset your security. Call Bed-Stuy's experts today for a free quote.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a href="tel:(718)568-6597">
              <Button size="large" className="bg-white text-blue-600 hover:bg-slate-50 h-20 px-12 text-2xl font-black shadow-2xl transform hover:scale-105 active:scale-95 transition-all">
                (718) 568-6597
              </Button>
            </a>
          </div>
          <p className="mt-8 text-blue-200 font-bold tracking-widest uppercase text-sm">24/7 Response • Licensed NYC #2103442</p>
        </div>
      </section>

      {/* Related Links */}
      <section className="py-16 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex flex-wrap justify-center gap-10">
            {[
              { name: "Lock Replacement", href: "/services/lock-replacement" },
              { name: "Lock Installation", href: "/services/lock-installation" },
              { name: "Lock Repair", href: "/services/lock-repair" },
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
